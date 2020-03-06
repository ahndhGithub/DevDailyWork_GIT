(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PopupMultiSelect");
            this.set_titletext("Sample_PopupSub");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_MultiSelectList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MultiText\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_in", this);
            obj._setContents("<ColumnInfo><Column id=\"p_center_cd\" type=\"STRING\" size=\"256\"/><Column id=\"p_ktokk\" type=\"STRING\" size=\"256\"/><Column id=\"p_name\" type=\"STRING\" size=\"256\"/><Column id=\"p_user_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchConditionType", this);
            obj._setContents("<ColumnInfo><Column id=\"TypeCode\" type=\"STRING\" size=\"256\"/><Column id=\"PopupUrl\" type=\"STRING\" size=\"256\"/><Column id=\"PopupTitle\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TypeCode\">SalesOrderNo</Col><Col id=\"PopupUrl\">Popup::PopupSalesOrder.xfdl</Col><Col id=\"PopupTitle\">popup.salesorder</Col></Row><Row><Col id=\"TypeCode\">StyleNo</Col><Col id=\"PopupUrl\">Popup::PopupStyle.xfdl</Col><Col id=\"PopupTitle\">popup.style</Col></Row><Row><Col id=\"TypeCode\">VendorCode</Col><Col id=\"PopupUrl\">Popup::PopupVendor.xfdl</Col><Col id=\"PopupTitle\">popup.vendor</Col></Row><Row><Col id=\"TypeCode\">MaterialCode</Col><Col id=\"PopupUrl\">Popup::PopupMaterial.xfdl</Col><Col id=\"PopupTitle\">popup.material</Col></Row><Row><Col id=\"TypeCode\">PurchaseOrderNo</Col><Col id=\"PopupUrl\">Popup::PopupPurchaseOrder.xfdl</Col><Col id=\"PopupTitle\">popup.purchaseorder</Col></Row><Row><Col id=\"TypeCode\">MultiSelect</Col><Col id=\"PopupUrl\">Popup::PopupMultiSelect.xfdl</Col><Col id=\"PopupTitle\">popup.multiselect</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","16","40","568",null,null,"64",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_MultiSelectList");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("griduserproperty").set("status,checkbox,cellcopypaste,!seltype,!no,!sort,!initial,!export,!colfix,!rowfix,!filter,!colhide,!personal,!subsum");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"535\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Single Value\"/></Band><Band id=\"body\"><Cell text=\"bind:MultiText\" edittype=\"text\" editautoselect=\"true\" expandshow=\"show\" expandsize=\"16\"/></Band></Format></Formats>");
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

            obj = new Static("Static16","16",null,null,"20","16","44",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Div("DivBtnAddDel_grd_list","16","4","340","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_url("Comm::cmmGridAddDelButton.xfdl");
            obj.getSetter("targetGrid").set("grd_list");
            obj.set_visible("true");
            obj.getSetter("InitCompVisEna").set("1:1:1,1:1:1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","371","7","213","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_value("expr:comp.parent.ds_MultiSelectList.rowcount");
            obj.set_visible("false");
            obj.set_text("expr:comp.parent.ds_MultiSelectList.rowcount");
            this.addChild(obj.name, obj);

            obj = new Div("DivCnc",null,null,"128","28","16","16",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_CnC.xfdl");
            obj.getSetter("returnparms").set("MultiText");
            obj.getSetter("targetGrid").set("grd_list");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comm::cmmGridAddDelButton.xfdl");
            this._addPreloadList("fdl","Comm::Comm_CnC.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PopupMultiSelect.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("PopupMultiSelect.xfdl", function() {
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
        var ds_SearchConditionType = this.gfn_getApplication().gds_SearchConditionType;

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
         *	초기화 함수
         */
        this.fn_reset = function()
        {
        												var gtrcPos = "PopupMultiSelect.xfdl.Form_onload";
        	this.gfn_formOnLoad(this);		//	this.gfn_getAllInitData();
            this.paramStr = this.getOwnerFrame().pStr;			this.gtrace("paramStr--->"+this.paramStr, gtrcPos);
            this.paramNum = this.getOwnerFrame().pNum;			this.gtrace("paramNum--->"+this.paramNum, gtrcPos);
            this.paramObj = this.getOwnerFrame().pObj;			this.gtrace("paramObj--->"+this.paramObj, gtrcPos);

        	if(this.gfn_isNull(this.paramStr))
        	{	// 데이터셋 초기화
        		this.ds_MultiSelectList.clearData();
        		this.ds_MultiSelectList.addRow();
        	}else{ // 앞선 멀티스트링이 있는 경우
        		this.ds_MultiSelectList.clearData();
        		var arrMultiTxt = this.paramStr.split(sSplitChar);
        		for(var i=0 ; i < arrMultiTxt.length ; i++){
        			var aRp = this.ds_MultiSelectList.addRow();
        			this.ds_MultiSelectList.setColumn(aRp, "MultiText", arrMultiTxt[i]);
        		}
        	}
        }

        /********************************************************************************************
        @desc	4. Validation 처리
        ********************************************************************************************/



        /********************************************************************************************
        @desc	5. 서비스 호출(Transaction)
        ********************************************************************************************/
        /*++
        @desc	POList , POHistory Load
        */
        this.tfn_MultiSelectSearch = function(){

        	{ // 기본세팅
        		//클리어
        		this.ds_MultiSelectList.clearData();

        		//사용자
        		var sUserId 	= this.gfn_getApplication().gds_User.getColumn(0, "USER_ID");
        		this.ds_in.setColumn(0, "p_user_id"		, sUserId);

        		//센터CD
        		var sCENTER_CD = this.gfn_getApplication().gds_User.getColumn(0, "CENTER_CD");
        		this.ds_in.setColumn(0, "p_center_cd"	, sCENTER_CD);	//	1000 공장코드 (사용자세션)
        	}
        	{	// 개별세팅
        		// p_disp_field_str 원래는 "SAP No^Description"였음 : 이 값에 의해 Col id 를 가져옴
        		// 공백을 포함해서 데이터셋의 컬럼으로 사용할 수 없어서 변경했음
        		this.ds_in.setColumn(0, "p_ktokk"			, "");
        		this.ds_in.setColumn(0, "p_name"			, "");
        	}

        	var sSvcID 			= "MultiSelectSearch";
        	var sURL 			= "AppSvr::common/commonAction.ppc";
        	var sInDatasets 	= "ds_in0=ds_in";
        	var sOutDatasets 	= "ds_MultiSelectList=ds_out0";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("PopupMapper.getSupplerPopup");

        	//공통 트랜잭션 사용
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }
        /********************************************************************************************
        @desc	6. Callback
        ********************************************************************************************/
        /********************************************************************************************
        @desc	6. Callback
        ********************************************************************************************/
        /*++
        @desc	Callback Function
        */
        this.callbackFunction = function(strSvcID, nErrorCode, strErrorMsg)
        {
        							var gtrcPos = "PopupMaterial.xfdl.callbackFunction"
        	// 에러 체크 영역
        	if (nErrorCode < 0)
        	{
        		//	alert(this.gfn_removeJavaErrMsg(strErrorMsg));
        		alert(strErrorMsg);
        		return;
        	}

        	switch (strSvcID)
        	{
        		default:
        			break;

        		case "MaterialSearch"	:

        //					trace(this.ds_MaterialList.saveXML());

        				break;
         	}
        }


        /*++
        @desc	Popup Callback
        */
        this.callbackFunc_pop = function(strID, variant)
        {
        }
        /********************************************************************************************
        @desc	7. Common Function
        ********************************************************************************************/
        /*
         *	조회
         */
        this.cfn_search = function()
        {
        // 	{	//Validation 세팅 : Sample_Validation.xfdl 참조
        // 		this.gfn_clearValidation(this.ds_in);
        // 		//this.gfn_setValidation(this.ds_in, "p_osno1", "오더번호", "required,length:10");
        // 		this.gfn_setValidation(this.ds_in, "p_osno1", "오더번호", "required");
        // 	}
        //
        //   	if(this.gfn_validation(this.ds_in, "A"))	// Validation == true 이면
        // 	{
        		// 조회실행
        		this.tfn_MultiSelectSearch();
        //	}
        };

        /********************************************************************************************/
        /**   8. 사용자 함수                                                                        */
        /********************************************************************************************/


        /********************************************************************************************/
        /**   9. 이벤트(Event) 처리                                                                 */
        /********************************************************************************************/

        this.Form_onload = function(obj,e)
        {
        	this.fn_reset();
        };

        this.grd_list_onexpandup = function(obj,e)
        {
        // 	trace("e.cell--->"+e.cell);
        // 	trace("e.row--->"+e.row);
        // 	trace("e.col--->"+e.col);
        			var gtrcPos = "PopupMultiSelect.xfdl.grd_list_onexpandup";	// trace위치 세팅
        	var sSearchCond;
        	var sPopupId;
        	var sPrevMultiText;

        	{ //	1. 팝업 띄우기
        // 		if(obj.name == "btnMultiSelect"){
        // 			sSearchCond = "MultiSelect";
        // 			sPopupId = sSearchCond;
        // 			sPrevMultiText = this.ds_FromTo.getColumn(0, "List");
        // 		}
        // 		else{
        			sSearchCond = this.paramNum;		this.gtrace("sSearchCond--->"+sSearchCond, gtrcPos);
        			sPopupId 	= "modalPopup";
        //		}
        		//팝업의 URL
        		var sPopUrl 	= ds_SearchConditionType.lookup("TypeCode",sSearchCond, "PopupUrl");		this.gtrace("sPopUrl--->"+sPopUrl, gtrcPos);
        		//팝업의 TitleText
        		var sPopTitle	= this.gfn_getWord(ds_SearchConditionType.lookup("TypeCode",sSearchCond, "PopupTitle"));	this.gtrace("sPopTitle--->"+sPopTitle, gtrcPos);
        		var sUrl      	= sPopUrl;
        		var oArg      	= {pStr:sPrevMultiText, pNum:1234, pObj:obj.EditNameToApply};
        		var sCallBack 	= "fn_popupCallback";
        		var oOption   	= {title : sPopTitle};

        		this.gfn_openPopup(sPopupId, sUrl, oArg, sCallBack, oOption);
        	}
        };

        /**
        * @description 콜백
        */
        this.fn_popupCallback = function(sPopId, sRtn)
        {
        			var gtrcPos = "PopupMultiSelect.xfdl.fn_popupCallback";
        													this.gtrace("sPopId--->"+sPopId, gtrcPos);
        	switch(sPopId)
        	{
        		default :
        			var dsSetCol 		;
        			var sKey			;
        			var sName			;
        			var	sEtc_00			;
        			var	sEtc_10			;

        			if(!this.gfn_isNull(sRtn))
        			{	//0.리턴값 데이터셋에 세팅
        															this.gtrace("JSON.parse(sRtn)--->"	+JSON.parse(sRtn), gtrcPos);
        				var objRtn 		= 	JSON.parse(sRtn);		this.gtrace("objRtn--->"	+objRtn, gtrcPos);

        				dsSetCol 	= 	objRtn.rtnObj;				this.gtrace("dsSetCol--->"	+dsSetCol, gtrcPos);
        				sKey		=	objRtn.sRtnKey;				this.gtrace("sKey	--->"	+sKey	, gtrcPos);
        				sName		=	objRtn.sRtnName;			this.gtrace("sName	--->"	+sName	, gtrcPos);
        				sEtc_00		=	objRtn.sRtnEtc_00;			this.gtrace("sEtc_00--->"	+sEtc_00, gtrcPos);
        				sEtc_10		=	objRtn.sRtnEtc_10;			this.gtrace("sEtc_10--->"	+sEtc_10, gtrcPos);

        				this.ds_MultiSelectList.setColumn(this.ds_MultiSelectList.rowposition, dsSetCol, sKey);	//	oncolumnchanged 이벤트 --> 부모 데이터셋에 바로 세팅
        			}

        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.grd_list.addEventHandler("onexpandup",this.grd_list_onexpandup,this);
            this.ds_MultiSelectList.addEventHandler("oncolumnchanged",this.ds_MultiSelectList_oncolumnchanged,this);
            this.ds_MultiSelectList.addEventHandler("onrowposchanged",this.ds_MultiSelectList_onrowposchanged,this);
        };

        this.loadIncludeScript("PopupMultiSelect.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
