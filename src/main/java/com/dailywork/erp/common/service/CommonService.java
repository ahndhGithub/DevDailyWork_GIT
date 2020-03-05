package com.dailywork.erp.common.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.dailywork.erp.common.dao.CommonDAO;


@Service("commonService")
public class CommonService {
	
	@Resource(name = "commonDAO")
	private CommonDAO commonDAO;

	public List<List<Map<String, Object>>> selectAction(List<String> sqlId, Map<String, Object> input)
			throws Exception {

		List<List<Map<String, Object>>> result = new ArrayList<List<Map<String, Object>>>();

		try {
			for (String id : sqlId) {
				result.add(commonDAO.executeSelectAction(id, input));
			}
		} catch (Exception e) {
			throw e;
		}

		return result;

	}

	public List<List<Map<String, Object>>> saveAction_return(List<String> sqlId, List<List<Map<String, Object>>> input)
			throws Exception {
		List<List<Map<String, Object>>> result = new ArrayList<List<Map<String, Object>>>();

		try {
			for (int i = 0; i < sqlId.size(); i++) {
				List<Map<String, Object>> result_temp = new ArrayList<Map<String, Object>>();
				
				for (Map<String, Object> record : input.get(i)) {
					result_temp.addAll(commonDAO.executeSaveAction_return(sqlId.get(i), record));
				}

				result.add(result_temp);
			}
		} catch (Exception e) {
			throw e;
		}

		return result;
	}
	
	//파일업로드
	public void save_attach_files(List<Map<String, Object>> files) throws Exception {
		List<Map<String, Object>> result = new ArrayList<>();
		
		try {
			
//			if(files.get(0).get("Path_ID").equals("")) {		//공지사항인 경우 attach hdr save
//				//hdr save
//				result = commonDAO.executeSaveAction_return("save_fileHdr", files.get(0));
//			}	
			
			for(int i = 0; i < files.size(); i++) {
				//파일id세팅
				if(files.get(0).get("Path_ID").equals("")) files.get(i).put("Files_ID", result.get(0).get("Files_ID"));
				
				commonDAO.executeSaveAction_return("save_attachFiles", files.get(i));
			}			
			
		} catch (Exception e) { 
			throw e;
		}
		
	}
	
	//파일삭제
	public void delete_attach_files(Map<String, Object> files) throws Exception {

		try {			
			commonDAO.executeSaveAction_return("delete_attachFiles", files);		
			
		} catch (Exception e) {
			throw e;
		}
		
	}
	
}                             
