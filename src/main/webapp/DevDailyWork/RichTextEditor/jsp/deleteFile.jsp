<%@ page contentType="text/html;charset=utf-8" %>
<%@ page language="java"%>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.io.FileInputStream" %>
<%@ page import="java.io.FileOutputStream" %>
<%@ page import="java.io.IOException" %>

<% 
	PlatformData platformData = new PlatformData();
	HttpPlatformRequest platformRequest = new HttpPlatformRequest(request);
	
	platformRequest.receiveData();
	PlatformData pData = platformRequest.getData(); 
	
	DataSetList in_dl = new DataSetList();     //input dataset list
	in_dl = pData.getDataSetList();  // dataset list	
	
	DataSet in_ds = in_dl.get("input"); //Dataset
	
	String contextRealPath = request.getSession().getServletContext().getRealPath("/");
	String path = request.getParameter("path");
	String savePath = contextRealPath + path;
	
	System.out.println(">>>>> path: "+path);
	System.out.println(">>>>> contextRealPath: "+contextRealPath);
	System.out.println(">>>>> savePath: "+savePath);
	
	String returnString = "";
	boolean succ = true;
	
	System.out.println("getRowCount==>"+in_ds.getRowCount());
	
	for(int i=0 ; i<in_ds.getRowCount(); i++) 
	{
		String fileRealNm = in_ds.getString(i, "savefilename");
		System.out.println("fileRealNm >> " + fileRealNm);
		
		if (!fileRealNm.equals("")) 
		{
			if ( returnString.length() > 0 ) 
			{
				returnString += "\r\n";
			}
			
			try 
			{
				File f = new File(savePath + File.separator, fileRealNm);
				
				System.out.println(">>>>> savePath: "+savePath);
				System.out.println(">>>>> File.separator: "+File.separator);
				System.out.println(">>>>> fileRealNm: "+fileRealNm);				
				
				if (f.exists()) 
				{
					if (f.delete()) 
					{
						returnString += "'" + fileRealNm + "' Delete Success";
					} 
					else 
					{
						succ = false;
						returnString += "'" + fileRealNm + "' Delete failed";
					}
				} 
				else 
				{
					succ = false;
					returnString += "'" + fileRealNm + "' File not available";
				}
			} 
			catch(Exception e) 
			{
				succ = false;
				returnString += "'" + fileRealNm + "' " + e;
	    	}
		}
	}
	
	platformData.addDataSet(in_ds);
	VariableList varList = platformData.getVariableList();
	
	if (succ) 
	{
		System.out.println("SUCC");
		
		varList.add("ErrorCode", "0");
		varList.add("ErrorMsg", "SUCC");
	} 
	else 
	{
		System.out.println("FAIL");
		
		varList.add("ErrorCode", "-1");
		varList.add("ErrorMsg", returnString);
	}
	
	HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8"); 
	pRes.setData(platformData);
	pRes.sendData();
%>
