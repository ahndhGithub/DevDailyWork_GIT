package com.dailywork.erp.common.web;

import com.dailywork.erp.common.service.CommonService;
import com.dailywork.util.CustomTrace;
import com.dailywork.util.TobesoftWrapper;

import ch.qos.logback.classic.pattern.Util;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

@Controller
public class CommonController {

	@Resource(name = "commonService")
	private CommonService commonService;
	
	@Resource(name="customTrace")
	private CustomTrace customTrace;
	
	@Resource(name="tobesoftWrapper")
	private TobesoftWrapper tobesoftWrapper;
	
	@RequestMapping(value = "CommonSelectAction.do")
	public ModelAndView CommonSelectAction(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		PlatformData xData_in = new PlatformData();
		PlatformData xData_out = new PlatformData();
		VariableList outVarList = new VariableList();
		
		try {
			HttpPlatformRequest req = new HttpPlatformRequest(request);
			req.receiveData();
			xData_in = req.getData();
			
			List<String> sqlId = tobesoftWrapper.getToken(xData_in.getVariable("sqlId").getString());
			Map<String, Object> input = tobesoftWrapper.convertDatasetToMap(xData_in.getDataSetList().get("ds_in"));

			List<List<Map<String, Object>>> result = commonService.selectAction(sqlId, input);

			for (int i = 0; i < result.size(); i++) {
				
				xData_out.addDataSet(tobesoftWrapper.convertListToDataset(result.get(i), "ds_out" + Integer.toString(i)));
			}

			outVarList.add("ErrorCode", 0);
			outVarList.add("ErrorMsg", "SUCC");
		} catch (Exception e) {
			outVarList.add("ErrorCode", -1);
			outVarList.add("ErrorMsg", e.getMessage());

			customTrace.custPrintStackTrace(e);
		}
		
		xData_out.setVariableList(outVarList);

		try {
			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");

			res.setData(xData_out);
			res.sendData();
		} catch (PlatformException e) {
			customTrace.custPrintStackTrace(e);
		}
		
		return null;
	}
	
	@RequestMapping(value = "CommonSaveAction_Return.do")
	public ModelAndView CommonSaveAction_Return(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		PlatformData xData_in = new PlatformData();
		PlatformData xData_out = new PlatformData();
		VariableList outVarList = new VariableList();

		try {
			HttpPlatformRequest req = new HttpPlatformRequest(request);

			req.receiveData();
			xData_in = req.getData();

			List<String> sqlId = tobesoftWrapper.getToken(xData_in.getVariable("sqlId").getString());
			List<List<Map<String, Object>>> input = new ArrayList<List<Map<String, Object>>>();

			List<Map<String, Object>> tFormatDs = new ArrayList<Map<String, Object>>();
			
			int isFrmDs;
			
			// 포맷데이터셋이 있건 없건 모두 사용 가능 하도록 수정. 20.02.14.adh.
			if(xData_in.getDataSet(0).getName().equals("xGds_FormatOut")) {
				isFrmDs = 1;
				tFormatDs = tobesoftWrapper.convertDatasetToList(xData_in.getDataSet("xGds_FormatOut"));
				//	System.out.println("tFormatDs.size--->"+tFormatDs.size());
			}else {
				isFrmDs = 0;
			}
			
			// IN데이터셋 생성
			//	포맷데이터셋이 없는 경우(X)
			if(isFrmDs == 0) {
				
				if (sqlId.size() != xData_in.getDataSetCount()) {
					System.out.println(xData_in);
					System.out.println(sqlId);
					throw new Exception("입력 정보 처리중에 오류가 발생하였습니다.\n\n관리자에게 문의하여 주십시오.");
				}
				
				for (int i = 0; i < xData_in.getDataSetCount(); i++) {
					
					input.add(tobesoftWrapper.convertDatasetToList(xData_in.getDataSet("ds_in" + Integer.toString(i))));
				}
		
			}else {	// 포맷데이터셋이 있는 경우 (O)
				
				if (sqlId.size() != xData_in.getDataSetCount() - 1) {
					System.out.println(xData_in);
					System.out.println(sqlId);
					throw new Exception("입력 정보 처리중에 오류가 발생하였습니다.\n\n관리자에게 문의하여 주십시오.");
				}
				
				for (int i = 0; i < xData_in.getDataSetCount() - 1; i++) {
					
						input.add(tobesoftWrapper.convertDatasetToList(xData_in.getDataSet("ds_in" + Integer.toString(i))));
				}
			}
			
			/////////////////서비스호출///////////////////
			List<List<Map<String, Object>>> result = commonService.saveAction_return(sqlId, input);
			//////////////////////////////////////////
			
			// OUT데이터셋 생성
			for (int i = 0; i < result.size(); i++) {
				
				if(isFrmDs==1) {	//	포맷데이터셋 기준으로 데이터셋 생성
					xData_out.addDataSet(tobesoftWrapper.convertListToDataset_ver2(result.get(i), "ds_out" + Integer.toString(i), tFormatDs));
				}else {				//	out result 기준으로 데이터셋 생성
					xData_out.addDataSet(tobesoftWrapper.convertListToDataset(result.get(i), "ds_out" + Integer.toString(i)));
				}
			}
			
			outVarList.add("ErrorCode", 0);
			outVarList.add("ErrorMsg", "SUCC");
		} catch (Exception e) {
			outVarList.add("ErrorCode", -1);
			outVarList.add("ErrorMsg", e.getMessage());

			customTrace.custPrintStackTrace(e);
		}

		xData_out.setVariableList(outVarList);

		try {
			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");

			res.setData(xData_out);
			res.sendData();
		} catch (PlatformException e) {
			customTrace.custPrintStackTrace(e);
		}

		return null;
	}
	
	@RequestMapping(value = "accessLogIn.do")
	public ModelAndView accessLogIn(HttpServletRequest request, HttpServletResponse response) throws Exception {
		//logger.info(Thread.currentThread().getStackTrace()[1].getMethodName());
		
		PlatformData xData_in = new PlatformData();
		PlatformData xData_out = new PlatformData();
		
		VariableList outVarList = new VariableList();

		try {
			HttpPlatformRequest req = new HttpPlatformRequest(request);

			req.receiveData();
			xData_in = req.getData();

			List<String> sqlId = tobesoftWrapper.getToken(xData_in.getVariable("sqlId").getString());
			List<List<Map<String, Object>>> input = new ArrayList<List<Map<String, Object>>>();

			if (sqlId.size() != xData_in.getDataSetCount()) {
				throw new Exception("입력 정보 처리중에 오류가 발생하였습니다.\n\n관리자에게 문의하여 주십시오.");
			}

			for (int i = 0; i < xData_in.getDataSetCount(); i++) {
				input.add(tobesoftWrapper.convertDatasetToList(xData_in.getDataSet("ds_in" + Integer.toString(i))));
			}

			List<List<Map<String, Object>>> result = commonService.saveAction_return(sqlId, input);
			
			for (int i = 0; i < result.size(); i++) {
				xData_out.addDataSet(tobesoftWrapper.convertListToDataset(result.get(i), "ds_out" + Integer.toString(i)));
			}
			
			HttpSession session = request.getSession();
			outVarList.add("JSESSIONID", session.getId());
			
			outVarList.add("ErrorCode", 0);
			outVarList.add("ErrorMsg", "SUCC");
		} catch (Exception e) {
			outVarList.add("ErrorCode", -1);
			outVarList.add("ErrorMsg", e.getMessage());

			customTrace.custPrintStackTrace(e);
		}

		xData_out.setVariableList(outVarList);

		try {
			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");

			res.setData(xData_out);
			res.sendData();
		} catch (PlatformException e) {
			customTrace.custPrintStackTrace(e);
		}

		return null;
	}
	@RequestMapping(value = "CommonMulitSelectAction.do")
	public ModelAndView CommonMulitSelectAction(HttpServletRequest request, HttpServletResponse response) throws Exception {
		//logger.info(Thread.currentThread().getStackTrace()[1].getMethodName());
		
		PlatformData xData_in = new PlatformData();
		PlatformData xData_out = new PlatformData();
		
		VariableList outVarList = new VariableList();

		try {
			HttpPlatformRequest req = new HttpPlatformRequest(request);

			req.receiveData();
			xData_in = req.getData();

			List<String> sqlId = tobesoftWrapper.getToken(xData_in.getVariable("sqlId").getString());
			List<List<Map<String, Object>>> input = new ArrayList<List<Map<String, Object>>>();

			if (sqlId.size() != xData_in.getDataSetCount()) {
				throw new Exception("입력 정보 처리중에 오류가 발생하였습니다.\n\n관리자에게 문의하여 주십시오.");
			}

			for (int i = 0; i < xData_in.getDataSetCount(); i++) {
				input.add(tobesoftWrapper.convertDatasetToList(xData_in.getDataSet("ds_in" + Integer.toString(i))));
			}

			List<List<Map<String, Object>>> result = commonService.saveAction_return(sqlId, input);
			
			for (int i = 0; i < result.size(); i++) {
				xData_out.addDataSet(tobesoftWrapper.convertListToDataset(result.get(i), "ds_out" + Integer.toString(i)));
			}
			
			HttpSession session = request.getSession();
			outVarList.add("JSESSIONID", session.getId());
			
			outVarList.add("ErrorCode", 0);
			outVarList.add("ErrorMsg", "SUCC");
		} catch (Exception e) {
			outVarList.add("ErrorCode", -1);
			outVarList.add("ErrorMsg", e.getMessage());

			customTrace.custPrintStackTrace(e);
		}

		xData_out.setVariableList(outVarList);

		try {
			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");

			res.setData(xData_out);
			res.sendData();
		} catch (PlatformException e) {
			customTrace.custPrintStackTrace(e);
		}

		return null;
	}
		
	@RequestMapping(value = "logInAccessLog.do")
	public void logInAccessLog(HttpServletRequest request, HttpServletResponse response)	throws Exception{
		PlatformData xData_in = new PlatformData();
		PlatformData xData_out = new PlatformData();
		VariableList outVarList = new VariableList();

		try {
			HttpPlatformRequest req = new HttpPlatformRequest(request);

			req.receiveData();
			xData_in = req.getData();
			
			List<String> sqlId = tobesoftWrapper.getToken(xData_in.getVariable("sqlId").getString());
			List<List<Map<String, Object>>> input = new ArrayList<List<Map<String, Object>>>();

			if (sqlId.size() != xData_in.getDataSetCount()) {
				throw new Exception("입력 정보 처리중에 오류가 발생하였습니다.\n\n관리자에게 문의하여 주십시오.");
			}

			for (int i = 0; i < xData_in.getDataSetCount(); i++) {
				List<Map<String, Object>> inputDataSet = tobesoftWrapper.convertDatasetToList(xData_in.getDataSetList().get("ds_in" + Integer.toString(i)));
				
				//log info setting
				inputDataSet.get(i).put("IP" , getLocalIp());
				inputDataSet.get(i).put("PC" , getLocalName());
				inputDataSet.get(i).put("MAC", getShortMacAddress());
				
				input.add(inputDataSet);
			}
			
			
			List<List<Map<String, Object>>> result = commonService.selectAction(sqlId, input.get(0).get(0));
			
			for (int i = 0; i < result.size(); i++) {
				xData_out.addDataSet(tobesoftWrapper.convertListToDataset(result.get(i), "ds_out" + Integer.toString(i)));
			}
			
			outVarList.add("ErrorCode", 0);
			outVarList.add("ErrorMsg", "SUCC");
		} catch (Exception e) {
			outVarList.add("ErrorCode", -1);
			outVarList.add("ErrorMsg", e.getMessage());

			customTrace.custPrintStackTrace(e);
		}

		xData_out.setVariableList(outVarList);

		try {
			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");

			res.setData(xData_out);
			res.sendData();
		} catch (PlatformException e) {
			customTrace.custPrintStackTrace(e);
		}

	}
	
	//get IP
	public static String getLocalIp(){
        try {
            return InetAddress.getLocalHost().getHostAddress();
        } catch (UnknownHostException e) {
            return null;
        }
    }
	
	//get local host name
	public static String getLocalName(){
        try {
            return InetAddress.getLocalHost().getHostName();
        } catch (UnknownHostException e) {
            return null;
        }
    }
	
	//get Mac Addr
	public static String getShortMacAddress() {
        String value = "";

        try {
            value = getMacAddress();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return value;
    }
	
    public final static String getMacAddress() throws IOException {
        String os = System.getProperty("os.name");

        if (os.startsWith("Windows")) {
            return ParseMacAddress(windowsRunIpConfigCommand());
        } else if (os.startsWith("Linux")) {
            return ParseMacAddress(linuxRunIfConfigCommand());
        } else {
            throw new IOException("unknown operating system: " + os);
        }

    }
    
    /**
     * 현재 컴퓨터의 맥 주소를 리턴한다.
     * 
     * @return MAC Address
     * @throws IOException
     */
    private final static String linuxRunIfConfigCommand() throws IOException {
        Process p = Runtime.getRuntime().exec("ifconfig");
        InputStream stdoutStream = new BufferedInputStream(p.getInputStream());

        StringBuffer buffer = new StringBuffer();
        for (;;) {
            int c = stdoutStream.read();
            if (c == -1)
                break;
            buffer.append((char) c);
        }
        String outputText = buffer.toString();

        stdoutStream.close();

        return outputText;
    }

    /*
     * Windows에 있는 네트워크 설정값들을 문자열로 가져온다.
     */

    private final static String windowsRunIpConfigCommand() throws IOException {
        Process p = Runtime.getRuntime().exec("ipconfig /all");
        InputStream stdoutStream = new BufferedInputStream(p.getInputStream());

        StringBuffer buffer = new StringBuffer();
        for (;;) {
            int c = stdoutStream.read();
            if (c == -1)
                break;
            buffer.append((char) c);
        }
        String outputText = buffer.toString();

        stdoutStream.close();

        return outputText;
    }

    /**
     * 문자열에서  패턴에 맞는 문자열 즉 맥주소를 뽑아낸다.
     * @param text 검사할 문자열
     * @return 맥 주소
     */
    public static String ParseMacAddress(String text) {
        String result = null;
        String[] list = text.split("\\p{XDigit}{2}(-\\p{XDigit}{2}){5}");
        int index = 0;
        for (String str : list) {
        	if (str.length() < text.length()) {
                index = str.length();
                result = text.substring(index, index + 17);
                if (!result.equals("00-00-00-00-00-00")) {
                    break;
                }
                text = text.substring(index + 17);
            }
        }
        return result;
    }
    
}
