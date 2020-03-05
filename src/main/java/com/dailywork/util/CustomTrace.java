package com.dailywork.util;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dailywork.erp.common.dao.CommonDAO;


public class CustomTrace {
	
	private static final Logger logger = LoggerFactory.getLogger(CommonDAO.class);
	
	//new CustomTrace().custPrintStackTrace(e);
	public void custPrintStackTrace(Throwable trace){
		//System.out.println("TRACE : "+ trace.toString());
		if(isRaiseError(trace.toString())){
			String msg = trace.toString();
			
			int strIdx = msg.indexOf("§");
			int endIdx = msg.lastIndexOf("§")+1;
			String message = "/*RAISERROR*/ "+ msg.substring(strIdx, endIdx);
			logger.error(message);
			
		} else {
			trace.printStackTrace();
		}
	}
	private boolean isRaiseError(String msg){
		if(msg.indexOf("§")==-1){
			return false;
		} else {
			return true;
		}
	}
}	
