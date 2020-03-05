package com.dailywork.util;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.ParameterMapping;
import org.mybatis.spring.SqlSessionTemplate;

/**
 * ELogger
 * 
 * @since 2016. 3. 11
 * @author XEROXER
 */
public class DaoLogger {

	public static String getSqlLog(SqlSessionTemplate sqlSession, String sqlId, Map<String, Object> input) {
		BoundSql boundSql = sqlSession.getConfiguration().getMappedStatement(sqlId).getBoundSql(input);
		String sSql = boundSql.getSql();
		Object paramObj = boundSql.getParameterObject();
		
		if(paramObj != null) {
			List<ParameterMapping> paramMapping = boundSql.getParameterMappings();			 

			for(ParameterMapping mapping : paramMapping) {
				String propValue = String.valueOf(input.get(mapping.getProperty()));
				sSql = sSql.replaceFirst("\\?", propValue.equals("null") ? propValue : "'"+propValue+"'");
			}
		}

		return sSql;
		
//		SqlMapClientImpl sqlMapClientImpl = (SqlMapClientImpl) sqlClient;
//		MappedStatement mappedStatement = sqlMapClientImpl.getMappedStatement(sqlId);
//		StatementScope statementScope = new StatementScope(new SessionScope());
//		Sql sql = mappedStatement.getSql();
//
//		mappedStatement.initRequest(statementScope);
//
//		ParameterMap paramMap = sql.getParameterMap(statementScope, input);
//		String statement = sql.getSql(statementScope, input);
//		List<Object> paramList = new ArrayList<Object>();
//
//		for (ParameterMapping param : paramMap.getParameterMappings()) {
//			paramList.add(input.get(param.getPropertyName()));
//		}
//
//		return getMappedSql(statement, paramList.toArray());
	}

//	private static String getMappedSql(String sql, Object[] items) {
//		int i, seq = 0;
//		StringBuffer sb = new StringBuffer();
//
//		while ((i = sql.indexOf("?")) >= 0) {
//			if (seq == items.length)
//				break;
//
//			sb.append(sql.substring(0, i));
//
//			if (items[seq] instanceof String) {
//				sb.append("'" + items[seq] + "'");
//			} else if (items[seq] instanceof Number) {
//				sb.append(items[seq]);
//			} else if (items[seq] == null) {
//				sb.append("NULL");
//			} else {
//				sb.append("'" + items[seq] + "'");
//			}
//
//			sql = sql.substring(i + "?".length());
//			seq++;
//		}
//
//		sb.append(sql);
//
//		return sb.toString();
//	}

}
