package com.dailywork.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import org.springframework.util.ObjectUtils;

import com.nexacro17.xapi.data.ColumnHeader;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

/**
 * XplatformWrapper
 * 
 * @since 2016. 2. 19.
 * @author XEROXER
 */
public class TobesoftWrapper {

	private final String DEFAULT_STRING = "";
	private final int DEFAULT_NUMBER = 0;

	/**
	 * Token 형태의 SQL Id를 리스트 형태로 변환하여 반환한다.
	 * 
	 * @param sqlId
	 * @return
	 * @throws Exception
	 */
	public List<String> getToken(String sqlId) throws Exception {
		List<String> result = new ArrayList<String>();
		StringTokenizer st = new StringTokenizer(sqlId);

		while (st.hasMoreTokens()) {
			result.add(st.nextToken());
		}

		return result;
	}

	/**
	 * 단건의 Dataset을 Map으로 변환하여 반환한다.
	 * 
	 * @param ds
	 * @return
	 * @throws Exception
	 */
	public Map<String, Object> convertDatasetToMap(DataSet ds) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();

		for (int i = 0; i < ds.getColumnCount(); i++) {
			map.put(ds.getColumn(i).getName(), convertNull(ds.getObject(0, i), ds.getColumn(i).getDataType()));
		}

		return map;
	}

	/**
	 * 다건의 데이터가 존재하는 Dataset을 List로 변환하여 반환한다.
	 * 
	 * @param ds
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> convertDatasetToList(DataSet ds) throws Exception {
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		Map<String, Object> record;

		for (int i = 0; i < ds.getRowCount(); i++) {
			record = new HashMap<String, Object>();

			for (int j = 0; j < ds.getColumnCount(); j++) {
				record.put(ds.getColumn(j).getName(), convertNull(ds.getObject(i, j), ds.getColumn(j).getDataType()));
			}

			list.add(record);
		}

		return list;
	}

	/**
	 * Collection 형태의 데이터를 Dataset으로 변환하여 반환한다.
	 * 
	 * @param list
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public DataSet convertListToDataset(List<Map<String, Object>> list, String id) throws Exception {
		DataSet ds = new DataSet(id);
		Iterator<String> it;
		String key;
		int iRow;
		boolean isFirst = true;

		ds.addColumn("ROW_CHK", DataTypes.STRING, 1);
		ds.addColumn("ROW_STS", DataTypes.STRING, 1);

		for (Map<String, Object> record : list) {
			if (isFirst) {
				it = record.keySet().iterator();

				while (it.hasNext()) {
					key = it.next();

					if (!ds.containsColumn(key)) {
						ds.addColumn(key, getDataType(record.get(key)), getDataSize(record.get(key)));
					}
				}

				if (!ds.containsColumn("SaveUser")) {
					ds.addColumn("SaveUser", DataTypes.STRING, 8);
				}

				isFirst = false;
			}

			it = record.keySet().iterator();
			iRow = ds.newRow();

			while (it.hasNext()) {
				key = it.next();

				if(!ObjectUtils.isEmpty(record.get(key)) && ds.containsColumn(key)) {
					ds.set(iRow, key, record.get(key));
				}
			}
		}

		return ds;
	}

	/**
	 * 화면에서 전달받은 format Dataset을 기준으로 데이터셋을 생성한다.
	 * 2012-02-14.adh.
	 * @param list
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public DataSet convertListToDataset_ver2(List<Map<String, Object>> list, String id, List<Map<String, Object>> format) throws Exception {
		DataSet ds = new DataSet(id);
		int iRow;
		boolean isFirst = true;

		ds.addColumn("ROW_CHK", DataTypes.STRING, 1);
		ds.addColumn("ROW_STS", DataTypes.STRING, 1);

		int findRp = 0;
		int frmSize = format.size();
		
//		System.out.println("frmSize------>"+frmSize);
		
		for(int k = 0 ; k < frmSize ; k++) {
			
//			System.out.println("format.get(k)---------->"+format.get(k));
			
			String kDsNm = (String) format.get(k).get("dsName");
			if(kDsNm.equals(id)) {
				findRp = k;
				break;
			}
		}
		
//		System.out.println("findRp--->"+findRp);
//		System.out.println("id-->"+id);
		
		for (Map<String, Object> record : list) {
			if (isFirst) {
				for(int h = findRp ; h < frmSize ; h++) {
					
					String DsNme = (String) format.get(h).get("dsName");		
					String DsCol = (String) format.get(h).get("dsCol");			
					String DsCtp = (String) format.get(h).get("dsColType");
					
//					System.out.println("DsNme-->"+DsNme);
//					System.out.println("DsCol-->"+DsCol);
//					System.out.println("DsCtp-->"+DsCtp);
//					System.out.println("h--------------------->"+h);
									
					if(DsNme.equals(id)) {
						if (!ds.containsColumn(DsCol)) {
							ds.addColumn(DsCol, getDataType_ver2(DsCtp), getDataSize_ver2(DsCtp));
						}
					}else {
						break;
					}
				}
				
				isFirst = false;
			}
			
			iRow = ds.newRow();
			
			//	System.out.println("iRow---->"+iRow);
			
			for( int i = 0 ; i < ds.getColumnCount() ; i++) {
				String ColNm = ds.getColumn(i).getName();
//				System.out.println("ColNm--->"+ColNm);
//				System.out.println("record.get(ColNm)--->"+record.get(ColNm));
				ds.set(iRow, ColNm, record.get(ColNm));
			}
		}
		
		return ds;
	}
	
	/**
	 * 데이터의 Type을 반환한다.
	 * 
	 * @param obj
	 * @return
	 */
	private int getDataType(Object obj) {
		int result;

		if (obj == null) {
			return DataTypes.STRING;
		}

		String type = obj.getClass().getSimpleName();

		if ("Integer".equalsIgnoreCase(type)) {
			type = "int";
		}

		switch (DataTypes.toIntType(type)) {
		case DataTypes.STRING:
			result = DataTypes.STRING;
			break;

		case DataTypes.INT:
		case DataTypes.LONG:
		case DataTypes.FLOAT:
		case DataTypes.DOUBLE:
		case DataTypes.BIG_DECIMAL:
			result = DataTypes.BIG_DECIMAL;
			break;

		case DataTypes.DATE:
		case DataTypes.TIME:
		case DataTypes.DATE_TIME:
			result = DataTypes.DATE_TIME;
			break;

		case DataTypes.BLOB:
		case DataTypes.FILE:
			result = DataTypes.BLOB;
			break;

		default:
			result = DataTypes.STRING;
			break;
		}

		return result;
	}

	/**
	 * 데이터의 Type을 반환한다.
	 * 
	 * @param String
	 * @return
	 */
	private int getDataType_ver2(String obj) {
		int result;

		if (obj == null) {
			return DataTypes.STRING;
		}

		String type = obj.getClass().getSimpleName();

		if ("Integer".equalsIgnoreCase(type)) {
			type = "int";
		}

		switch (obj) {
		case "STRING":
			result = DataTypes.STRING;
			break;

		case "INT":
		case "LONG":
		case "FLOAT":
		case "DOUBLE":
		case "BIG_DECIMAL":
			result = DataTypes.BIG_DECIMAL;
			break;

		case "DATE":
		case "TIME":
		case "DATE_TIME":
			result = DataTypes.DATE_TIME;
			break;

		case "BLOB":
		case "FILE":
			result = DataTypes.BLOB;
			break;

		default:
			result = DataTypes.STRING;
			break;
		}

		return result;
	}

	/**
	 * 데이터의 Size를 반환한다.
	 * 
	 * @param obj
	 * @return
	 */
	private int getDataSize(Object obj) {
		int result;

		if (obj == null) {
			return 256;	//DataTypes.DEFAULT_SIZE_STRING;
		}

		String type = obj.getClass().getSimpleName();

		if ("Integer".equalsIgnoreCase(type)) {
			type = "int";
		}

		switch (DataTypes.toIntType(type)) {
		case DataTypes.STRING:
			result = 256;	//DataTypes.DEFAULT_SIZE_STRING;
			break;

		case DataTypes.INT:
		case DataTypes.LONG:
		case DataTypes.FLOAT:
		case DataTypes.DOUBLE:
		case DataTypes.BIG_DECIMAL:
			result = DataTypes.DEFAULT_SIZE_BIG_DECIMAL;
			break;

		case DataTypes.DATE:
		case DataTypes.TIME:
		case DataTypes.DATE_TIME:
			result = DataTypes.DEFAULT_SIZE_DATE_TIME;
			break;

		case DataTypes.BLOB:
		case DataTypes.FILE:
			result = DataTypes.DEFAULT_SIZE_BLOB;
			break;

		default:
			result = 256;	//DataTypes.DEFAULT_SIZE_STRING;
			break;
		}

		return result;
	}

	/**
	 * 데이터의 Size를 반환한다.
	 * 
	 * @param obj
	 * @return
	 */
	private int getDataSize_ver2(String obj) {
		int result;

		if (obj == null) {
			return DataTypes.DEFAULT_SIZE_STRING;
		}

		String type = obj.getClass().getSimpleName();

		if ("Integer".equalsIgnoreCase(type)) {
			type = "int";
		}
		
		switch (obj) {
		case "STRING":
			result = DataTypes.DEFAULT_SIZE_STRING;
			break;

		case "INT":
		case "LONG":
		case "FLOAT":
		case "DOUBLE":
		case "BIG_DECIMAL":
			result = DataTypes.DEFAULT_SIZE_BIG_DECIMAL;
			break;

		case "DATE":
		case "TIME":
		case "DATE_TIME":
			result = DataTypes.DEFAULT_SIZE_DATE_TIME;
			break;

		case "BLOB":
		case "FILE":
			result = DataTypes.DEFAULT_SIZE_BLOB;
			break;

		default:
			result = DataTypes.DEFAULT_SIZE_STRING;
			break;
		}
		
		return result;
	}
	/**
	 * Null을 Default 값으로 변환하여 반환한다.
	 * 
	 * @param obj
	 * @param type
	 * @return
	 */
	private Object convertNull(Object obj, int type) {
		if (obj == null) {
			switch (type) {
			case DataTypes.STRING:
			case DataTypes.DATE:
			case DataTypes.TIME:
			case DataTypes.DATE_TIME:
			case DataTypes.BLOB:
			case DataTypes.FILE:
				obj = DEFAULT_STRING;
				break;

			case DataTypes.INT:
			case DataTypes.LONG:
			case DataTypes.FLOAT:
			case DataTypes.DOUBLE:
			case DataTypes.BIG_DECIMAL:
				obj = DEFAULT_NUMBER;
				break;

			default:
				obj = DEFAULT_STRING;
				break;
			}
		}

		return obj;
	}

}
