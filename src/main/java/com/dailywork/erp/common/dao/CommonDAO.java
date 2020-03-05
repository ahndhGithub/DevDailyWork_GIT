package com.dailywork.erp.common.dao;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dailywork.util.DaoLogger;


@Repository("commonDAO")
public class CommonDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	private static final Logger logger = LoggerFactory.getLogger(CommonDAO.class);

	public List<Map<String, Object>> executeSelectAction(String sqlId, Map<String, Object> input) throws SQLException {
		//System.out.println("executeSelectAction		/*SQL : " + sqlId + "*/\r		"	+	DaoLogger.getSqlLog(sqlSession, sqlId, input) + "\r");
		logger.info("[SQL:" + sqlId + "] " + DaoLogger.getSqlLog(sqlSession, sqlId, input));
		
		return sqlSession.selectList(sqlId, input);		
	}
	
	public List<Map<String, Object>> executeSaveAction_return(String sqlId, Map<String, Object> input) throws SQLException {
		//System.out.println("executeSaveAction_return		/*SQL : " + sqlId + "*/\r		"	+	DaoLogger.getSqlLog(sqlSession, sqlId, input) + "\r");
		logger.info("[SQL:" + sqlId + "] " + DaoLogger.getSqlLog(sqlSession, sqlId, input));

		return sqlSession.selectList(sqlId, input);
	}
	
	@SuppressWarnings("unchecked")
	public Map<String, Object> executeTransAction(String sqlId, Map<String, Object> input) throws SQLException {
		//System.out.println("executeTransAction		/*SQL : " + sqlId + "*/\r		"	+	DaoLogger.getSqlLog(sqlSession, sqlId, input) + "\r");
		logger.info("[SQL:" + sqlId + "] " + DaoLogger.getSqlLog(sqlSession, sqlId, input));
		
		return (Map<String, Object>) (sqlSession.selectMap(sqlId, input, "")).get(null);
	}

}
