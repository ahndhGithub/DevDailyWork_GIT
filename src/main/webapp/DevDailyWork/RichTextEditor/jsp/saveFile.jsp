<%@page import="java.util.UUID"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Calendar"%>
<%
/*
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ 
%>
 
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@ page import="org.apache.commons.fileupload.FileItemFactory"%>
<%@ page import="org.apache.commons.fileupload.FileUploadException"%>
<%@ page import="org.apache.commons.fileupload.FileItem"%>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@ page import="org.apache.commons.io.FilenameUtils"%>
<%@ page import="org.apache.commons.fileupload.FileUploadBase.SizeLimitExceededException"%>
<%@ page import="org.apache.commons.fileupload.FileUploadBase.FileSizeLimitExceededException"%>

<%@ page import="org.apache.commons.net.ftp.FTP"%>
<%@ page import="org.apache.commons.net.ftp.FTPClient"%>
<%@ page import="org.apache.commons.net.ftp.FTPReply"%>
<%@ page import="com.dailywork.util.FTPConstant"%>

<%@ page import="javax.servlet.http.HttpServlet"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>
<%@ page import="javax.servlet.ServletException"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.io.File"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.Date"%>
<%@ page import="java.util.TimeZone"%>
<%@ page import="java.text.DateFormat"%>
<%@ page import="java.text.SimpleDateFormat"%>

<%@ page import="com.nexacro17.xapi.data.ColumnHeader"%>
<%@ page import="com.nexacro17.xapi.data.DataSet"%>
<%@ page import="com.nexacro17.xapi.data.DataTypes"%>
<%@ page import="com.nexacro17.xapi.data.PlatformData"%>
<%@ page import="com.nexacro17.xapi.data.VariableList"%>
<%@ page import="com.nexacro17.xapi.tx.HttpPlatformResponse"%>
<%@ page import="com.nexacro17.xapi.tx.PlatformException"%>
<%@ page import="com.nexacro17.xapi.tx.HttpPlatformRequest"%>

<%
	//업로드 사이즈 제한 10000M
	final long SIZE_LIMIT = 100000 * 1024 * 1024L;
	
	//업로드시 사용할 임시 메모리 제한 300K
	final int TEMP_SIZE_LIMIT = 300 * 1024;
	
	//FTP 서버 접속 정보 (실제 effex에서 사용하고 있는 ftp 서버)
	final String FTP_HOST_NAME = "121.78.152.109";
	final int FTP_PORT = 21;
	final String FTP_USER_NAME = "svcworkftp";
	final String FTP_PASSWORD = "ftp@svcwork";
	final String FTP_ROOT_PATH = "/";

	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();
	
	try {
		// file item 오브젝트 생성
		DiskFileItemFactory factory = new DiskFileItemFactory();
		
		factory.setSizeThreshold(TEMP_SIZE_LIMIT);		//메모리 버퍼 최대값을 bytes로 지정.

		// 파일데이터 취득 클래스
		ServletFileUpload upload = new ServletFileUpload(factory);

		upload.setSizeMax(SIZE_LIMIT); 		// 최대 업로드 사이즈를 지정한다.
		upload.setHeaderEncoding("UTF-8"); 				// 파일명을 인코딩해준다.

		//request에서 오브젝트를 받아서 FileItem오브젝트에 분할한 후 List로 반환
		List<FileItem> items = upload.parseRequest(request);

		// Generate FTP Object
		FTPClient ftp = null;

		Calendar now = Calendar.getInstance();
		
		int year = now.get(Calendar.YEAR);
		int month = now.get(Calendar.MONTH) + 1;
		String path = FTP_ROOT_PATH + "/" + Integer.toString(year) + "/"
				+ (month < 10 ? "0" + Integer.toString(month) : Integer.toString(month));
		
		Iterator<FileItem> iter = items.iterator();
				
		List<Map<String, Object>> list = new ArrayList<>();		//기존에 사용하던 파일변환용 vo 대신에 list사용

		try {
			//----------------------------------------------------------->ftp server connect
			ftp = new FTPClient();

			ftp.setControlEncoding("UTF-8");
			ftp.connect(FTP_HOST_NAME, FTP_PORT);

			if (!FTPReply.isPositiveCompletion(ftp.getReplyCode())) {
				System.out.println(">> Could not connect to the server... " + ftp.getReplyString());

				throw new Exception(ftp.getReplyString());
			}

			if (!ftp.login(FTP_USER_NAME, FTP_PASSWORD)) {
				System.out.println(">> Could not login to the server... " + ftp.getReplyString());

				throw new Exception(ftp.getReplyString());
			}
			
			
			//--------------------------------------------------------------------->file path set
			if (!ftp.changeWorkingDirectory(path)) {
				if (ftp.getReplyCode() == 550) { // 경로가 존재하지 않는 경우
					// 년도 경로를 확인하고 미존재시 생성
					String parentPath = path.substring(0, path.lastIndexOf("/"));

					if (!ftp.changeWorkingDirectory(parentPath)) {
						if (ftp.getReplyCode() == 550) {
							if (ftp.makeDirectory(parentPath)) {
								System.out.println(">> Make Directory Success... [" + parentPath + "]");
							} else {
								System.out.println(">> Make Directory Fail... " + ftp.getReplyString());

								throw new Exception(ftp.getReplyString());
							}
						} else {
							throw new Exception(ftp.getReplyString());
						}
					}

					// 월 경로를 확인하고 미존재시 생성
					if (ftp.makeDirectory(path)) {
						System.out.println(">> Make Directory Success... [" + path + "]");

						ftp.changeWorkingDirectory(path);
					} else {
						System.out.println(">> Make Directory Fail... " + ftp.getReplyString());
						System.out.println(">> Path Status : " + ftp.getStatus(path));

						throw new Exception(ftp.getReplyString());
					}
				} else {
					throw new Exception(ftp.getReplyString());
				}
			}
			
			ftp.enterLocalPassiveMode();		//client -> ftp server 파일전송 대기
			ftp.setSendBufferSize((int) SIZE_LIMIT);
			ftp.setBufferSize(TEMP_SIZE_LIMIT);
			ftp.setControlKeepAliveTimeout(30);
			ftp.setFileType(FTP.BINARY_FILE_TYPE);
			
			String sUUID = "";
			long fileSize = 0;

			// Upload File 처리
			while (iter.hasNext()) {
				FileItem item = iter.next();				
				fileSize = item.getSize();

				if (!item.isFormField()) {
					Map<String, Object> fileItem = new HashMap<>();			// 파일 정보를 담은 맵
					
					sUUID = UUID.randomUUID().toString();

					fileItem.put("FileUUID", sUUID);

					if (ftp.storeFile((String) fileItem.get("FileUUID"), item.getInputStream())) {		//file uuid로 inputStream으로 읽어서 서버에 파일을 생성 true/false
						System.out.println(">> File Store Success... [" + item.getName() + "]");	

						list.add(fileItem);
						
					} else {
						System.out.println(">> File Store Fail... [" + item.getName() + "] " + ftp.getReplyString());

						throw new Exception("FTP 서버에 파일을 저장중에 오류가 발생하였습니다.");
					}
				}
			}
			
			DataSet ds = new DataSet("ds_output");
			ds.addColumn(new ColumnHeader("filename", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("savefilename", DataTypes.STRING));
			ds.addColumn(new ColumnHeader("filesize", DataTypes.INT));
			
			int row = ds.newRow();
			ds.set(row, "filename", sUUID);
			ds.set(row, "savefilename", sUUID);
			ds.set(row, "filesize", fileSize);

			resData.addDataSet(ds);
			resVarList.add("ErrorCode", 0);
			resVarList.add("ErrorMsg", "SUCC");
			
		} catch (Exception ex) {
			resVarList.add("ErrorCode", -1);
			resVarList.add("ErrorMsg", "FAIL");
			
			throw ex;
		} finally {
			if (ftp != null && ftp.isConnected()) {
				ftp.disconnect();
			}
		}

	} catch (Exception e) {
		e.printStackTrace();
	}
	
	HttpPlatformResponse res = new HttpPlatformResponse(response);	
	res.setData(resData);
	res.sendData();
%>
