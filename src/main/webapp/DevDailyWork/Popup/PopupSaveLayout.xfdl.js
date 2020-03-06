(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PopupSaveLayout");
            this.set_titletext("Sample_PopupSub");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_inLayout", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_in", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LAYOUT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tranResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LayoutList", this);
            obj.set_useclientlayout("true");
            obj.set_keystring("s:-SEQ");
            obj._setContents("<ColumnInfo><Column id=\"DEFAULT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYOUT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_1\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_2\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_3\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_4\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_5\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_6\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_7\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_8\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_9\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_10\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SaveUser\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trans_LayoutList", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","16","104",null,null,"16","51",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("griduserproperty").set("no,status,!sort,!initial,!export,!colfix,!rowfix,!filter,cellcopypaste,!colhide,!personal,!subsum,seltype");
            obj.set_readonly("true");
            obj.set_binddataset("ds_LayoutList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"420\"/><Column size=\"48\"/><Column size=\"145\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Layout Name\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"Default\"/></Band><Band id=\"body\"><Cell text=\"bind:LAYOUT_NM\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:SEQ\"/><Cell col=\"2\" text=\"bind:DEFAULT_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0","16","100%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n16");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","16","100%","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n16");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,"100%","16",null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h16");
            this.addChild(obj.name, obj);

            obj = new Div("DivCrudButton","16","8","300","28",null,null,null,null,null,null,this);
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_search");
            obj.set_url("Comm::Comm_CrudButton.xfdl");
            obj.set_taborder("4");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("StaticVendor","0","44","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("New Save Layout Name");
            obj.set_cssclass("sta_WF_searchLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("EditLayoutName","198","44","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("essential");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("DivCnc",null,null,"128","28","16","16",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_CnC.xfdl");
            obj.set_visible("true");
            obj.getSetter("returnparms").set("SEQ,LAYOUT_NM,DEFAULT_YN,DATA_1");
            obj.getSetter("targetGrid").set("grd_list");
            this.addChild(obj.name, obj);

            obj = new Static("StaticVendor00","0","74","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Default Layout");
            obj.set_cssclass("sta_WF_searchLabel");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBoxDefaultLayout","198","79","21","15",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","EditLayoutName","value","ds_in","LAYOUT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","CheckBoxDefaultLayout","value","ds_in","DEFAULT_YN");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comm::Comm_CrudButton.xfdl");
            this._addPreloadList("fdl","Comm::Comm_CnC.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PopupSaveLayout.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("PopupSaveLayout.xfdl", function() {
        /********************************************************************************************
        @desc	1. Include
        ********************************************************************************************/
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        /********************************************************************************************
        @desc	2. Form 변수 선언
        ********************************************************************************************/
        this.paramStr;
        this.paramNum;
        this.paramObj;
        var sSplitChar = this.gfn_getApplication().MultiTxtSplitChar;
        var CHK_TRUE 	= "Y";
        var CHK_FALSE 	= "N";

        //공통코드 세팅 -- 할 일이 있다면 ...
        // this.COMBO_SET_STR = "ds_cmbPaymentTerms"+"#"+"ZTERM"		+" "
        // 					+"ds_cmbDocumentType"	+"#"+"ERP_DOC"      +" "
        // 					+"ds_cmbIncoterms"		+"#"+"INCO1"        +" "
        // 					+"ds_cmbCurrency"		+"#"+"CURRENCY"     +" "
        // 					;

        /********************************************************************************************
        @desc	3. OnLoad
        ********************************************************************************************/
        /*
         *	온로드이벤트
         */
        this.Form_onload = function(obj,e)
        {
        	var gtrcPos = "PopupSaveLayout.xfdl.Form_onload";
        		this.gtrace("● 사용자화-Form_onload(PopupSaveLayout)", gtrcPos);

        	//	기본호출
        	//	this.gfn_getAllInitData();
        	this.gfn_formOnLoad(this);
        	this.fn_reset();
        };

        /*
         *	초기화 함수
         */
        this.fn_reset = function()
        {
        	var gtrcPos = "PopupSaveLayout.xfdl.fn_reset";
        		this.gtrace("● 사용자화-fn_reset(PopupSaveLayout)", gtrcPos);

        	//	기본호출
        	this.gfn_getParentForm();

        	//	넘어온 변수 세팅
        	{
        		this.paramStr = this.getOwnerFrame().pStr;			this.gtrace("paramStr--->"+this.paramStr, gtrcPos);
        		this.paramNum = this.getOwnerFrame().pNum;			this.gtrace("paramNum--->"+this.paramNum, gtrcPos);
        		this.paramObj = this.getOwnerFrame().pObj;			this.gtrace("paramObj--->"+this.paramObj, gtrcPos);
        	}

        	//	공통콤포넌트 Visible / Enable 제어 (CRUD 버튼)
        	{
        		switch(this.paramStr)
        		{
        			case "SaveLayout"  :
        						this.DivCrudButton.InitCompVisEna = "0:0:1:1,0:0:1:1";
        						this.DivCnc.set_visible(false);
        					break;

        			case "LoadLayout"  :
        						this.DivCrudButton.InitCompVisEna = "1:0:0:0,1:0:0:0";
        						this.DivCnc.set_visible(true);
        					break;

        			default :
        					break;
        		}

        		//	적용
        		this.DivCrudButton.form.fn_setButtonVisEna();
        	}

        	// 콤포넌트, 데이터셋 제어
        	switch(this.paramStr)
        	{
        		case "SaveLayout"  : 	this.grd_list.set_readonly(false);
        								this.CheckBoxDefaultLayout.set_readonly(false);
        								this.EditLayoutName.set_readonly(false);
        								this.EditLayoutName.setFocus();
        							break;
        		case "LoadLayout"  :
        		case "ResetLayout" :
        		default : break;
        	}

        	{ 	// 데이터셋초기화
        		this.ds_inLayout.clearData();		//	검색in
        		this.ds_LayoutList.clearData();		//	결과Main
        		this.ds_in.clearData();				//	INSERT용

        		this.ds_in.addRow();
        		this.ds_tranResult.clearData();		//	INSERT결과
        	}

        	// 데이터 가져오기
        	this.tfn_FormatSearch();
        }

        /********************************************************************************************
        @desc	4. Validation 처리
        ********************************************************************************************/



        /********************************************************************************************
        @desc	5. 서비스 호출(Transaction)
        ********************************************************************************************/
        /*++
        @desc	포맷 가져오기
        */
        this.tfn_FormatSearch = function(){

        	var gtrcPos = "PopupSaveLayout.xfdl.tfn_FormatSearch";
        		this.gtrace("● 포맷조회트랜잭션", gtrcPos);

        	{
        		this.ds_inLayout.clearData();
        		this.ds_inLayout.addRow();

        		this.ds_inLayout.setColumn(0, "PROGRAM_ID", this.paramNum);
        		//	this.ds_inLayout.setColumn(0, "GRID_ID", this.paramObj.name);
        		this.ds_inLayout.setColumn(0, "GRID_ID", this._getUniqueId(this.paramObj));
        		this.ds_inLayout.setColumn(0, "DEFAULT_YN", "");
        		this.ds_inLayout.setColumn(0, "DEL_YN", "N");

        		this.gfn_setUser(this.ds_inLayout, "USER_ID");
        	}

        		this.gtrace("트랜잭션DS-SAVEXML(ds_inLayout)-->"+this.ds_inLayout.saveXML(),gtrcPos);

        	var sSvcID 			= "FormatSearch";
        	var sURL 			= "AppSvr::common/commonAction.ppc";
        	var sInDatasets 	= "ds_in0=ds_inLayout";
        	var sOutDatasets 	= "ds_LayoutList=ds_out0";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("getUserGridData");

        	//공통 트랜잭션 사용
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }

        /*++
        @desc	포맷 저장 : 디폴트가 변경될 수 있기 때문에 ds_in이 아닌 ds_LayoutList 데이터셋에서 작업한다.
        */
        this.tfn_FormatSave = function(rIDU)
        {
        	var gtrcPos = "PopupSaveLayout.xfdl.tfn_FormatSave";
        		this.gtrace("● 포맺저장트랜잭션", gtrcPos);

        	//Delete인 경우 해당 Row에 삭제표기
        	if(rIDU == "DELETE"){
        		this.ds_LayoutList.setColumn(this.ds_LayoutList.rowposition, "DEL_YN", "Y");
        	}
        	else{
        		// 레이아웃명이 있다면 INSERT
        			this.gtrace("레이아웃이름(ds_in-LAYOUT_NM)---->"+this.ds_in.getColumn(0, "LAYOUT_NM"), gtrcPos);
        		if(!this.gfn_isNull(this.ds_in.getColumn(0, "LAYOUT_NM")))
        		{
        			var bDfltLayout = this.ds_in.getColumn(0, "DEFAULT_YN");

        			//INSERT가 디폴트인경우 : 기존 것들은 체크 해제
        			if(bDfltLayout==CHK_TRUE)
        			{
        				for(var i=0;i<this.ds_LayoutList.rowcount;i++){
        					if(this.ds_LayoutList.getColumn(i, "DEFAULT_YN")==CHK_TRUE){
        						this.ds_LayoutList.setColumn(i, "DEFAULT_YN", CHK_FALSE);
        					}
        				}
        			}

        			// 한줄추가+값세팅
        			var iAddRp = this.ds_LayoutList.addRow();		this.gtrace("추가된 행 번호(ds_LayoutList-iAddRp)---->"+iAddRp, gtrcPos);
        			this.ds_LayoutList.setColumn(iAddRp, "PROGRAM_ID", this.paramNum);
        			this.ds_LayoutList.setColumn(iAddRp, "GRID_ID", this._getUniqueId(this.paramObj));
        			this.ds_LayoutList.setColumn(iAddRp, "LAYOUT_NM", this.ds_in.getColumn(0, "LAYOUT_NM"));
        			this.ds_LayoutList.setColumn(iAddRp, "DEFAULT_YN", this.gfn_nvl(this.ds_in.getColumn(0, "DEFAULT_YN"),"N"));
        			this.ds_LayoutList.setColumn(iAddRp, "DEL_YN", "N");
        			this.ds_LayoutList.setColumn(iAddRp, "SEQ", "");	// SEQ가 공백인 것을 보고 INSERT 하게 된다.2020-02-06 Version.

        			//잘라서 1~10 넣기
        			this.fn_setFormatStringToDataset(iAddRp);
        		}
        	}

        	//USER세팅
        	this.gfn_setUser(this.ds_LayoutList, "USER_ID");

        	// 트랜잭션 전 처리(공통)
        	var trRslt = this.gfn_beforeTrans(this.ds_LayoutList, this.ds_trans_LayoutList);	this.gtrace("트랜잭션 할 것이 있는지 확인(trRslt)---->"+trRslt, gtrcPos);

        	if(trRslt)
        	{
        						this.gtrace("저장전트랜잭션_SAVEXML(ds_trans_LayoutList)---->"+this.ds_trans_LayoutList.saveXML(), gtrcPos);
        		// 트랜잭션
        		var sSvcID 			= "FormatSave";
        		var sURL 			= "AppSvr::common/commonAction.ppc";
        		var sInDatasets 	= "ds_in0=ds_trans_LayoutList";
        		var sOutDatasets 	= "ds_tranResult=ds_out0";
        		var sArguments 		= "sqlId=" + nexacro.wrapQuote("setUserGridData");

        		//공통 트랜잭션 사용
        		this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction", true);

        		this.ds_LayoutList.set_enableevent(true);
        	}
        }
        /********************************************************************************************
        @desc	6. Callback
        ********************************************************************************************/
        /*++
        @desc	Callback Function
        */
        this.callbackFunction = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	var gtrcPos = "PopupSaveLayout.xfdl.callbackFunction";
        	var gtrcSavePos = "PopupSaveLayout.xfdl.callbackFunction.FormatSave";

        	this.gtrace("● 포맷콜백", gtrcPos);
        	this.gtrace("● 포맷콜백-save", gtrcSavePos);
        	this.gtrace("서비스아이디(strSvcID)--->"+strSvcID, gtrcSavePos);
        	this.gtrace("에러코드(nErrorCode)--->"+nErrorCode, gtrcSavePos);
        	this.gtrace("에러메세지(strErrorMsg)--->"+strErrorMsg, gtrcSavePos);

        	// 에러 체크 영역
        	if (nErrorCode < 0)
        	{
        		trace("서비스아이디(strSvcID)--->"+strSvcID);
        		trace("에러코드(nErrorCode)--->"+nErrorCode);
        		trace("에러메세지(strErrorMsg)--->"+strErrorMsg);

        		this.gfn_alert("msg.err.callback");

        		return;
        	}

        	switch (strSvcID)
        	{
        		default:

        			break;
         		case "FormatSearch"	:

        				this.gtrace("포맷콜백SAVEXML(ds_LayoutList-FormatSearch)---->"+this.ds_LayoutList.saveXML(), gtrcPos);

        				break;
        		case "FormatSave"	:
        				this.gtrace("포맷콜백SAVEXML(ds_tranResult-FormatSave)---->"+this.ds_tranResult.saveXML(), gtrcSavePos);

        				//refresh
        				this.tfn_FormatSearch();

        				break;
         	}
        }

        /*++
        @desc	Popup Callbackz
        */
        this.callbackFunc_pop = function(strID, variant)
        {
        				var gtrcPos = "PopupSaveLayout.xfdl.callbackFunc_pop";

        	var iCrntRp 	= this.ds_LayoutList.rowposition;
        	var sDATA_1 	= this.ds_LayoutList.getColumn(iCrntRp, "DATA_1");
        	var iSEQ 		= this.ds_LayoutList.getColumn(iCrntRp, "SEQ");
        	var sLAYOUT_NM 	= this.ds_LayoutList.getColumn(iCrntRp, "LAYOUT_NM");
        	var sDEFAULT_YN = this.ds_LayoutList.getColumn(iCrntRp, "DEFAULT_YN");

        	// 그리드 포맺 적용
        	this.paramObj.set_formats(("<Formats>" + sDATA_1 + "</Formats>"));

        				this.gtrace("this.paramStr---->"+this.paramStr, gtrcPos);
        				this.gtrace("this.paramNum---->"+this.paramNum, gtrcPos);
        				this.gtrace("this.paramObj---->"+this.paramObj.name, gtrcPos);

        	var objRtn = {
        					rtnStr 		: this.paramStr,
        					rtnNum 		: this.paramNum,
        					rtnObj 		: this.paramObj.name,	//	여기까지 받은 변수 그대로 넘김
        					sRtnKey		: iSEQ,
        					sRtnName	: sLAYOUT_NM,
        					sRtnEtc_00	: sDEFAULT_YN,
        					sRtnEtc_10	: "",
        					sRtnEtc_20	: ""
        					};

        	this.close(JSON.stringify(objRtn));
        }
        /********************************************************************************************
        @desc	7. Common Function
        ********************************************************************************************/
        /*
         *	조회
         */
        this.cfn_search = function()
        {
        	this.tfn_FormatSearch();
        };

        /*
         *	입력
         */
        this.cfn_add = function()
        {
        };

        /*
         *	삭제
         */
        this.cfn_del = function()
        {
        	{	//그리드한줄 삭제버튼 클릭후 바로 저장
        		this.tfn_FormatSave("DELETE");
        	}
        };

        /*
         *	저장
         */
        this.cfn_save = function()
        {
        	this.tfn_FormatSave("SAVE");
        };

        /********************************************************************************************/
        /**   8. 사용자 함수                                                                        */
        /********************************************************************************************/
        /*
         *	포맷스트링 자르기
         */
         this.fn_setFormatStringToDataset = function(iRp){

        	var sSampleText = this.paramObj.getCurFormatString();

        	var sTmpSubstrText;
        	var iSubstrNum = 3000;

        	var iLen = sSampleText.length;
        	var iStartNum = 0;
        	var iEndNum = iSubstrNum;
        	var iCnt=1;

        	while(iStartNum < iLen)
        	{
        		var sTmpSubstrText = sSampleText.substring(iStartNum,iEndNum);
        		this.ds_LayoutList.setColumn(iRp, "DATA_"+iCnt, sTmpSubstrText);

        		iStartNum += iSubstrNum;
        		iEndNum += iSubstrNum;
        		iCnt++;
        	}
        }


        /********************************************************************************************/
        /**   9. 이벤트(Event) 처리                                                                 */
        /********************************************************************************************/
        this.ds_LayoutList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "DEFAULT_YN"){
        		obj.set_enableevent(false);

        		if(e.newvalue==CHK_TRUE){
        			// 디폴트 체크시 다른 것들은 체크해제 : 하나의 디폴트만 갖도록 한다.
        			for(var i=0;i<obj.rowcount;i++){
        				if(i != e.row && obj.getColumn(i, "DEFAULT_YN")==CHK_TRUE){
        						obj.setColumn(i, "DEFAULT_YN", CHK_FALSE);
        						obj.setColumn(i, "ROW_STS", "U");
        				}
        			}
        		}
        // 		else{
        // 			//	디폴트된 것의 해제 없음
        // 				obj.setColumn(e.row, e.columnid, e.oldvalue);
        // 		}

        		obj.set_enableevent(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.ds_LayoutList.addEventHandler("oncolumnchanged",this.ds_LayoutList_oncolumnchanged,this);
            this.ds_trans_LayoutList.addEventHandler("oncolumnchanged",this.ds_LayoutList_oncolumnchanged,this);
        };

        this.loadIncludeScript("PopupSaveLayout.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
