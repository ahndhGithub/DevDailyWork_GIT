(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DevTableCreate");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb_DATA_TYPE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_CD\">varchar</Col><Col id=\"CODE_NM\">varchar</Col></Row><Row><Col id=\"CODE_CD\">int</Col><Col id=\"CODE_NM\">int</Col></Row><Row><Col id=\"CODE_CD\">numeric</Col><Col id=\"CODE_NM\">numeric</Col></Row><Row><Col id=\"CODE_CD\">nvarchar</Col><Col id=\"CODE_NM\">nvarchar</Col></Row><Row><Col id=\"CODE_CD\">char</Col><Col id=\"CODE_NM\">char</Col></Row><Row><Col id=\"CODE_CD\">datetime</Col><Col id=\"CODE_NM\">datetime</Col></Row><Row><Col id=\"CODE_CD\">varbinary</Col><Col id=\"CODE_NM\">varbinary</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdDic", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GridId\" type=\"STRING\" size=\"256\"/><Column id=\"BindCol\" type=\"STRING\" size=\"256\"/><Column id=\"HeaderText\" type=\"STRING\" size=\"256\"/><Column id=\"ColWidth\" type=\"INT\" size=\"256\"/><Column id=\"bDisplaytype\" type=\"STRING\" size=\"256\"/><Column id=\"bEdittype\" type=\"STRING\" size=\"256\"/><Column id=\"bTextAlign\" type=\"STRING\" size=\"256\"/><Column id=\"bSuppress\" type=\"STRING\" size=\"256\"/><Column id=\"bPadding\" type=\"STRING\" size=\"256\"/><Column id=\"bCombodataset\" type=\"STRING\" size=\"256\"/><Column id=\"bCombocodecol\" type=\"STRING\" size=\"256\"/><Column id=\"bCombodatacol\" type=\"STRING\" size=\"256\"/><Column id=\"bCombotype\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskedittype\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskeditlimitbymask\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskeditformat\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GridId\"/><Col id=\"BindCol\">IDX</Col><Col id=\"HeaderText\">아이디</Col><Col id=\"bEdittype\">none</Col><Col id=\"ColWidth\">0</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">TABLE_NAME</Col><Col id=\"HeaderText\">테이블명</Col><Col id=\"bEdittype\">normal</Col><Col id=\"ColWidth\">160</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">COLUMN_NAME</Col><Col id=\"HeaderText\">컬럼명</Col><Col id=\"bEdittype\">normal</Col><Col id=\"ColWidth\">200</Col></Row><Row><Col id=\"BindCol\">COLUMN_TEXT</Col><Col id=\"GridId\"/><Col id=\"HeaderText\">컬럼설명</Col><Col id=\"ColWidth\">300</Col><Col id=\"bEdittype\">normal</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">ORDINAL_POSITION</Col><Col id=\"HeaderText\">순서</Col><Col id=\"bEdittype\">mask</Col><Col id=\"ColWidth\">60</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">DATA_TYPE</Col><Col id=\"HeaderText\">데이터타입</Col><Col id=\"bEdittype\">combo</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">combocontrol</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bCombodataset\">ds_cmb_DATA_TYPE</Col><Col id=\"bCombocodecol\">CODE_CD</Col><Col id=\"bCombodatacol\">CODE_NM</Col><Col id=\"bCombotype\">filterlike</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">CHARACTER_MAXIMUM_LENGTH</Col><Col id=\"HeaderText\">사이즈</Col><Col id=\"bEdittype\">mask</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">NUMERIC_PRECISION</Col><Col id=\"HeaderText\">NUM소숫점</Col><Col id=\"bEdittype\">mask</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">NUMERIC_SCALE</Col><Col id=\"HeaderText\">NUM자릿수</Col><Col id=\"bEdittype\">mask</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###</Col></Row><Row><Col id=\"BindCol\">USER_ID</Col><Col id=\"ColWidth\">0</Col><Col id=\"HeaderText\">사용자아이디</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DevTableCreate", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IDX\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDINAL_POSITION\" type=\"INT\" size=\"256\"/><Column id=\"DATA_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHARACTER_MAXIMUM_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"NUMERIC_PRECISION\" type=\"STRING\" size=\"256\"/><Column id=\"NUMERIC_SCALE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DevTableCreate_In", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IDX\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NAME_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("TabMain","8","146",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_border("1px solid gray,1px solid gray,1px solid gray,1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabpageDevTableCreate",this.TabMain);
            obj.set_text("DevTableCreate");
            obj.set_formscrolltype("none");
            obj.getSetter("griduserproperty").set("");
            this.TabMain.addChild(obj.name, obj);

            obj = new Div("DivBtnAddDel_GridDevTableCreate00","10","6","218","35",null,null,null,null,null,null,this.TabMain.TabpageDevTableCreate.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("Comm::cmmGridAddDelButton.xfdl");
            obj.getSetter("targetGrid").set("GridDevTableCreate");
            obj.set_visible("true");
            obj.getSetter("InitCompVisEna").set("1:1:1,1:1:1");
            this.TabMain.TabpageDevTableCreate.addChild(obj.name, obj);

            obj = new Div("DivBtnFormat",null,"8","40","28","8",null,null,null,null,null,this.TabMain.TabpageDevTableCreate.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("Comm::cmmFormatMenuButton.xfdl");
            obj.getSetter("targetGrid").set("GridDevTableCreate");
            obj.set_visible("true");
            this.TabMain.TabpageDevTableCreate.addChild(obj.name, obj);

            obj = new Div("DivBtnGfilter",null,"8","40","28","58",null,null,null,null,null,this.TabMain.TabpageDevTableCreate.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("Comm::cmmGridFilterButton.xfdl");
            obj.getSetter("targetGrid").set("GridDevTableCreate");
            obj.set_visible("true");
            this.TabMain.TabpageDevTableCreate.addChild(obj.name, obj);

            obj = new Grid("GridDevTableCreate","8","44",null,null,"8","8",null,null,null,null,this.TabMain.TabpageDevTableCreate.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_DevTableCreate");
            obj.getSetter("griduserproperty").set("subsum,no,status,checkbox,export,colfix,rowfix,sort,filter,initial,cellcopypaste,colhide,personal,seltype");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"IDX\"/><Cell col=\"1\" text=\"TABLE_NAME\"/><Cell col=\"2\" text=\"COLUMN_NAME\"/><Cell col=\"3\" text=\"COLUMN_TEXT\"/><Cell col=\"4\" text=\"ORDINAL_POSITION\"/><Cell col=\"5\" text=\"DATA_TYPE\"/><Cell col=\"6\" text=\"CHARACTER_MAXIMUM_LENGTH\"/><Cell col=\"7\" text=\"NUMERIC_PRECISION\"/><Cell col=\"8\" text=\"NUMERIC_SCALE\"/><Cell col=\"9\" text=\"USER_ID\"/></Band><Band id=\"body\"><Cell text=\"bind:IDX\"/><Cell col=\"1\" text=\"bind:TABLE_NAME\"/><Cell col=\"2\" text=\"bind:COLUMN_NAME\"/><Cell col=\"3\" text=\"bind:COLUMN_TEXT\"/><Cell col=\"4\" text=\"bind:ORDINAL_POSITION\"/><Cell col=\"5\" text=\"bind:DATA_TYPE\" combodataset=\"ds_cmb_DATA_TYPE\" combocodecol=\"CODE_CD\" combodatacol=\"CODE_NM\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"6\" text=\"bind:CHARACTER_MAXIMUM_LENGTH\"/><Cell col=\"7\" text=\"bind:NUMERIC_PRECISION\"/><Cell col=\"8\" text=\"bind:NUMERIC_SCALE\"/><Cell col=\"9\" text=\"bind:USER_ID\"/></Band></Format></Formats>");
            this.TabMain.TabpageDevTableCreate.addChild(obj.name, obj);

            obj = new Button("ButtonMassInput",null,"8","133","28","116",null,null,null,null,null,this.TabMain.TabpageDevTableCreate.form);
            obj.set_taborder("4");
            obj.set_text("Mass Input");
            obj.set_visible("false");
            this.TabMain.TabpageDevTableCreate.addChild(obj.name, obj);

            obj = new Div("DivCondition","8","40",null,"96","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("StaticSalesOrder","0","8","108","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("0");
            obj.set_text("Table Name");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("div_SalesOrderFromTo","118","8","193","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_SearchConditionFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.set_formscrolltype("none");
            obj.getSetter("SearchConditionType").set("TableName,ds_DevTableCreate_In,TABLE_NAME,TABLE_NAME,TABLE_NAME_LIST");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("DivCrudButton","8","8",null,"32","8",null,null,null,null,null,this);
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_search");
            obj.set_url("Comm::Comm_CrudButton.xfdl");
            obj.getSetter("InitCompVisEna").set("1:1:1:0,1:1:1:1");
            obj.getSetter("fn_searchName").set("");
            obj.getSetter("fn_newName").set("");
            obj.getSetter("fn_saveName").set("");
            obj.getSetter("fn_deleteName").set("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","0",null,null,"90","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_binddataset("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"p_mandt\"/><Cell col=\"1\" text=\"p_osno1\"/><Cell col=\"2\" text=\"p_osno2\"/><Cell col=\"3\" text=\"p_osno_list\"/><Cell col=\"4\" text=\"p_matnr1\"/><Cell col=\"5\" text=\"p_matnr2\"/><Cell col=\"6\" text=\"p_matnr_list\"/><Cell col=\"7\" text=\"p_mtl_matnr1\"/><Cell col=\"8\" text=\"p_mtl_matnr2\"/><Cell col=\"9\" text=\"p_mtl_matnr_list\"/><Cell col=\"10\" text=\"p_supply1\"/><Cell col=\"11\" text=\"p_supply2\"/><Cell col=\"12\" text=\"p_supply_list\"/><Cell col=\"13\" text=\"p_user_id\"/><Cell col=\"14\" text=\"I_CHECK\"/></Band><Band id=\"body\"><Cell text=\"bind:p_mandt\"/><Cell col=\"1\" text=\"bind:p_osno1\"/><Cell col=\"2\" text=\"bind:p_osno2\"/><Cell col=\"3\" text=\"bind:p_osno_list\"/><Cell col=\"4\" text=\"bind:p_matnr1\"/><Cell col=\"5\" text=\"bind:p_matnr2\"/><Cell col=\"6\" text=\"bind:p_matnr_list\"/><Cell col=\"7\" text=\"bind:p_mtl_matnr1\"/><Cell col=\"8\" text=\"bind:p_mtl_matnr2\"/><Cell col=\"9\" text=\"bind:p_mtl_matnr_list\"/><Cell col=\"10\" text=\"bind:p_supply1\"/><Cell col=\"11\" text=\"bind:p_supply2\"/><Cell col=\"12\" text=\"bind:p_supply_list\"/><Cell col=\"13\" text=\"bind:p_user_id\"/><Cell col=\"14\" text=\"bind:I_CHECK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("GridTrace",null,"363","690",null,"17","137",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("gds_TrcInfo");
            obj.getSetter("griduserproperty").set("checkbox,sort");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.getSetter("tempuserproperty").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"158\"/><Column size=\"363\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TrcSeq\"/><Cell col=\"1\" text=\"TrcName\"/><Cell col=\"2\" text=\"TrcId\"/></Band><Band id=\"body\"><Cell text=\"bind:TrcSeq\"/><Cell col=\"1\" text=\"bind:TrcName\"/><Cell col=\"2\" text=\"bind:TrcId\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonScriptTest",null,"8","84","28","173",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Script Test");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonTrace",null,"8","160","28","8",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Trc. 보이기/숨기기");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivCondition.form.div_SalesOrderFromTo.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivCondition.form.div_SalesOrderFromTo.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_calFromTo00.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_calFromTo00.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comm::cmmGridAddDelButton.xfdl");
            this._addPreloadList("fdl","Comm::cmmFormatMenuButton.xfdl");
            this._addPreloadList("fdl","Comm::cmmGridFilterButton.xfdl");
            this._addPreloadList("fdl","Comm::Comm_SearchConditionFromTo.xfdl");
            this._addPreloadList("fdl","Comm::Comm_CrudButton.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DevTableCreate.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("DevTableCreate.xfdl", function() {
        /********************************************************************************************
        @desc	1. Include
        ********************************************************************************************/
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        /********************************************************************************************
        @desc	2. Form 변수 선언
        ********************************************************************************************/
        //	공통코드 세팅
        //	this.COMBO_SET_STR = "ds_cmb_01"		+"#"+"ZTERM"		+" "
        // 					+"ds_cmbDocumentType"	+"#"+"ERP_DOC"      +" "
        // 					+"ds_cmbIncoterms"		+"#"+"INCO1"        +" "
        // 					+"ds_cmbCurrency"		+"#"+"CURRENCY"     +" "
        					;

        //	this.~ 단축변수선언
        // var GridDevTableCreate 	= this.TabMain.TabpageDevTableCreate.form.GridDevTableCreate;


        /********************************************************************************************
        @desc	3. OnLoad
        ********************************************************************************************/
        /*
         *	온로드
         */
        this.formOnload = function(obj,e)
        {
        	// 기본 데이터 가져오기 + 콤보세팅 + word	(콜백에서 fn_reset을 실행함.)
        	this.gfn_getAllInitData();
        };

        /*
         *	초기화 함수
         */
        this.fn_reset = function()
        {
        	var gtrcPos	=	"DevTableCreate.xfdl.fn_reset";
        				this.gtrace("● 리셋("+gtrcPos+")", gtrcPos);

        	// 데이터셋 초기화 ( clear+addrow )
        	{
        		this.ds_DevTableCreate.clearData();
        		this.ds_DevTableCreate_In.clearData();
        	}

        	{
        		this.ds_DevTableCreate_In.addRow();

        	}
        	{
        		//Validation
        		this.fn_setSearchValidation();
        		this.fn_setSaveValidation();
        	}
        }

        /********************************************************************************************
        @desc	4. Validation 처리
        *******************************************************************************************/
        this.fn_setSearchValidation = function() {
        	{
        // 		//Validation 세팅 : Sample_Validation.xfdl 참조
        // 		this.gfn_clearValidation(this.ds_DevTableCreate_In);
        //
        // 		//SalesOrder
        // 		this.gfn_setValidation(this.ds_DevTableCreate_In, "p_osno1||p_osno_list||p_matnr1||p_matnr_list", "Sales Order", "required");
        //
        //  		//STYLE
        // 		//	this.gfn_setValidation(this.ds_DevTableCreate_In, "p_matnr1||p_osno_list", "Style#", "required");
        	}
        }

        this.fn_setSaveValidation = function()
        {
        // 	this.gfn_clearValidation(this.ds_DevTableCreate);
        //
        // 	var strVldtn_01	=	"CURRENCY"		;
        // 	var strVldtn_02	=	"REMAIN_MENGE"	;
        // 	var strVldtn_03	=	"L_NETWR"		;
        // 	var strVldtn_04	=	"SUPPLIER_CODE1";
        // 	var strVldtn_05	=	"CURRENCY"		;
        // 	var strVldtn_06	=	"PEINH"			;
        // 	var strVldtn_07	=	"SUPPLIER_CODE1";
        // 	var strVldtn_08	=	"DELIVERY_DATE"	;
        // 	var strVldtn_09	=	"DOC_TYPE"		;
        // 	var strVldtn_10	=	"ZTERM"			;
        //
        // 	this.gfn_setValidation(this.ds_DevTableCreate, strVldtn_01, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_01, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_DevTableCreate, strVldtn_02, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_02, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_DevTableCreate, strVldtn_03, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_03, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_DevTableCreate, strVldtn_04, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_04, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_DevTableCreate, strVldtn_05, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_05, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_DevTableCreate, strVldtn_06, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_06, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_DevTableCreate, strVldtn_07, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_07, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_DevTableCreate, strVldtn_08, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_08, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_DevTableCreate, strVldtn_09, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_09, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_DevTableCreate, strVldtn_10, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_10, "HeaderText")	, "required");

        }

        // 정합성체크 : 폼별 특수 케이스
        this.fn_validationCheck = function(){

        // 	var gtrcPos = "DevTableCreate.xfdl.fn_validationCheck";
        // 		this.gtrace("● PO 정합성체크", gtrcPos);
        //
        // 	var oTp = this.getTabpageType();
        // 		var ttpe = oTp.TAB_TYPE;
        // 		var tds  = oTp.T_DS;
        //
        // 	// 저장공통체크
        // 	var checkResult = this.fn_saveCommonCheck(ttpe, tds);
        //
        // 	if(checkResult){
        // 		switch(ttpe) {
        // 		case "PO_CREATE"	:
        // 				//	PO 생성 체크
        // 				checkResult = this.fn_savePoValidation(ttpe, tds);
        // 				break;
        // 		case "PO_UPDATE"	:
        // 				//	히스토리 저장 체크
        // 				checkResult = this.fn_saveHistoryValidation(ttpe, tds);
        // 				break;
        // 		default:
        // 				break;
        // 		}
        // 	}
        // 	return checkResult;
        }


        // 저장시 공통체크로직(CREATE / UPDATE)
        this.fn_saveCommonCheck = function(tabType, tabDs){

        // 	var gtrcPos = "DevTableCreate.xfdl.fn_saveCommonCheck";
        // 		this.gtrace("●PO저장체크로직", gtrcPos);
        //
        // 	var bRtn = true;
        //
        // 	// 전체 돌면서 체크
        // 	tabDs.set_enableevent(false);
        // 	for(var i = 0 ; i < tabDs.rowcount ; i++){
        //
        // 		//체크된 것에 대해서만 적용
        // 		var ck = tabDs.getColumn(i, "ROW_CHK");
        //
        // 		if(ck == "1"){
        // 			//메세지초기화는 무조건 함
        // 			this.fn_setDsRowMessage(tabDs, i, "");
        // 			var ckDocType = tabDs.getColumn(i, "DOC_TYPE");
        //
        // 			// [P/O] 특정문서타입은 발주를 할수 없다. (''LN'', ''LC'', ''BM'')
        // 			// 에러메세지 : O/S type is not valid. (''LN'', ''LC'', ''BM'')
        // 			if(ckDocType == "LN" || ckDocType == "LC" || ckDocType == "BM"){
        // 				//O/S type is not valid.
        // 				bRtn = this.fn_setDsRowMessage(tabDs, i, "msg.OStypeIsNotValid");
        // 			}
        // 		}
        // 	}
        // 	tabDs.set_enableevent(true);
        //
        // 	this.gtrace("체크룰통과여부(validationCheck)-------->"+bRtn, gtrcPos);
        //
        // 	return bRtn;
        }

        // 히스토리 저장시 체크로직(UPDATE)
        this.fn_saveHistoryValidation = function(){

        // 	var gtrcPos = "DevTableCreate.xfdl.fn_saveHistoryValidation";
        // 		this.gtrace("●PO히스토리저장체크로직", gtrcPos);
        //
        // 	var bRtn = true;
        // 	var targetDs = this.ds_DevTableCreateHistory;
        //
        // 	targetDs.set_enableevent(false);
        //
        // 	// 전체 돌면서 체크
        // 	for(var i = 0 ; i < targetDs.rowcount ; i++){
        //
        // 		var ck = targetDs.getColumn(i, "ROW_CHK");
        // 		var ckDOC_TYPE = targetDs.getColumn(i, "DOC_TYPE");
        // 		var iPOITEM = targetDs.getColumn(i, "POITEM");
        // 		var iLIFNR = targetDs.getColumn(i, "LIFNR");			//	Vendor ( SUPPLIER_CODE )
        // 		var iUEBTO = nexacro.toNumber(targetDs.getColumn(i, "UEBTO"));
        // 		var iUNTTO = nexacro.toNumber(targetDs.getColumn(i, "UNTTO"));
        //
        // 		//체크된 것에 대해서만 체크
        // 		if(ck=="1"){
        //
        // 			this.gtrace(i+"번째 행 DOC_TYPE-->"+ckDOC_TYPE, gtrcPos);
        //
        // 			if(ckDOC_TYPE == "NB" || ckDOC_TYPE == "IM")
        // 			{
        // 				//  NB' or 'IM' 으로 생성 및 변경시에는 TOL (more, less) 무조건 빈값
        // 				if(	!(iUEBTO==0 && iUNTTO==0)
        // 				){
        // 					bRtn = this.fn_setDsRowMessage(targetDs, i, "해당 Document Type은 TOL 값이 빈값이어야 합니다.");
        // 				}
        // 			}
        //
        // 			// 두번 Loop.
        // 			for(var k = 0 ; k < targetDs.rowcount ; k++)
        // 			{
        // 				var kPOITEM = targetDs.getColumn(k, "POITEM");
        // 				var kLIFNR = targetDs.getColumn(k, "LIFNR");	//	Vendor ( SUPPLIER_CODE )
        // 				var kROW_CHK = targetDs.getColumn(k, "ROW_CHK");	//	체크여부
        //
        // 				// [P/O HISTORY] 변경시 같은 PO인데 벤더가 다를경우 해당 에러 메시지
        // 				if(	iPOITEM == kPOITEM && iLIFNR != kLIFNR
        // 				){
        // 					this.gtrace(k+"번째 행 벤더코드-->"+kLIFNR+"!="+iLIFNR+"(체크된 벤더코드) at Purchase Number(POITEM)---->"+kPOITEM, gtrcPos);
        // 							var tmpMsg = "Please Select Equals PO AND Vendor Data!";
        // 							this.fn_setDsRowMessage(targetDs, i, tmpMsg);
        // 					bRtn = 	this.fn_setDsRowMessage(targetDs, k, tmpMsg);
        // 				}
        //
        // 				// [ALL] Document Type NB' or 'IM' 로 변경시 해당 PO ITEM 전체선택 안되고 저장 불가
        // 				if(ckDOC_TYPE == "NB" || ckDOC_TYPE == "IM")
        // 				{
        // 					if(	iPOITEM == kPOITEM && kROW_CHK != "1"
        // 					){
        // 						//	체크되지 않은 것에도 메세지 표시
        // 						this.gtrace(k+"번째 행 체크안됨(kROW_CHK)-->"+kROW_CHK+" - Purchase Number(POITEM-kPOITEM)---->"+kPOITEM, gtrcPos);
        // 						var tmpMsg = "Document Type NB' or 'IM' 'PO번호' 에 아이템을 전체선택해주세요";
        // 								this.fn_setDsRowMessage(targetDs, i, tmpMsg);
        // 						bRtn = 	this.fn_setDsRowMessage(targetDs, k, tmpMsg);
        // 					}
        // 				}
        // 			}
        // 		}
        // 	}
        //
        // 	targetDs.set_enableevent(true);
        //
        // 	this.gtrace("체크룰통과여부(validationCheck)-------->"+bRtn, gtrcPos);
        // 	return bRtn;
        }

        // PO 저장시 체크로직(CREATE)
        this.fn_savePoValidation = function(){
        	//	return true;
        }

        /********************************************************************************************
        @desc	5. 서비스 호출(Transaction)
        ********************************************************************************************/
        /*++
        @desc	tabl_crt_mast_search
        */
        this.tfn_tabl_crt_mast_search = function(){

        	var gtrcPos = "DevTableCreate.xfdl.tfn_tabl_crt_mast_search";
        	this.gtrace("● SEARCH : "+gtrcPos, gtrcPos);

        	this.ds_DevTableCreate.clearData();

        	var sSvcID 			= "tabl_crt_mast_search";
        	var sURL 			= "AppSvrLocalMsSql::CommonSaveAction_Return.do";
        	var sInDatasets 	= "ds_in0=ds_DevTableCreate_In";
        	var sOutDatasets 	= "ds_DevTableCreate=ds_out0";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("tabl_crt_mast_search");

        		this.gtrace("보내는 데이터셋(ds_DevTableCreate_In.saveXML())---->"+this.ds_DevTableCreate_In.saveXML(), gtrcPos);

        	//공통 트랜잭션 사용
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }

        /*++
        @desc	tabl_crt_mast_save
        */
        this.tfn_tabl_crt_mast_save = function(){

        	var gtrcPos = "DevTableCreate.xfdl.tfn_tabl_crt_mast_save";
        	this.gtrace("● SAVE : "+gtrcPos, gtrcPos);


        	//	** 트랜Ds자동생성+저장전 세팅	( ** : 지우지 말것 )
        	this.gfn_beforeTransDsAdd(this.ds_DevTableCreate, "ROW_CHK");

        	//	** 유저세팅
        		this.gfn_setUser(this.ds_DevTableCreate_Tran, "USER_ID");

        	//	** 결과Ds자동생성
        	this.gfn_addResultDs(this.ds_DevTableCreate);

        	//	** 트랜잭션전로그
        	this.gtrace(this.ds_DevTableCreate_Tran.saveXML(), gtrcPos);

        	var sSvcID 			= "tabl_crt_mast_save";
        	var sURL 			=  "AppSvrLocalMsSql::CommonSaveAction_Return.do";;
        	var sInDatasets 	=  "ds_in0=ds_DevTableCreate_Tran";
        	var sOutDatasets 	= "ds_DevTableCreate_Result=ds_out0";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("tabl_crt_mast_save");

        	//공통 트랜잭션 사용 : -1에러 발생시 자동 콜백처리됨.
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }


        /********************************************************************************************
        @desc	6. Callback
        ********************************************************************************************/
        /*++
        @desc	Callback Function
        */
        this.callbackFunction = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	var gtrcPos = "DevTableCreate.xfdl.callbackFunction";
        	this.gtrace("● 콜백 : "+gtrcPos, gtrcPos);

        	this.gtrace("strSvcID---->"+strSvcID, gtrcPos);
        	this.gtrace("nErrorCode---->"+nErrorCode, gtrcPos);
        	this.gtrace("strErrorMsg---->"+strErrorMsg, gtrcPos);

        	// ###### nErrorCode < 0 경우는 gfn_transaction 에서 공통으로 처리됨. ######

        	// 트랜잭션 성공시 서비스별 콜백처리
        	switch (strSvcID) 	//	callbackFunction
        	{
        		default:
        			break;

        		case "tabl_crt_mast_search"	:	//	callback
        					this.gtrace(this.ds_DevTableCreate.saveXML(), gtrcPos);
        			break;

        		case "tabl_crt_mast_save":	//	callback

        				this.gtrace(this.ds_DevTableCreate_Result.saveXML(), gtrcPos);


        // 			//	성공한 오더번호가 하나도 없는 경우도 실패
        // 			if(arrEbeln.length == 0) bSucc = false;
        //
        // 			// 여기까지 bSucc가 false가 되지 않았다면 true
        // 			if(bSucc != false) bSucc = true;
        //
        // 			// 메세지 띄우기
        // 			if(bSucc){
        // 					//	전체적으로 성공완료
        // 					var sCbMsg = "msg.success";
        // 					this.gfn_alert(sCbMsg,["(" + arrEbeln+")"],"savePO_SUCCESS","callbackFunc_pop","A");
        // 			}else{
        // 				if(arrEbeln.length == 0){
        // 					//	SAP RFC는 탔으나 모두 실패 : PO가 하나도 생성되지 않음
        // 					var sCbMsg = "msg.NoPoCreated";
        // 					this.gfn_alert(sCbMsg,[],"savePO_NoPoCreated","callbackFunc_pop","A");
        // 				}else{
        // 					//	SAP RFC는 탔고 부분적으로 PO 생성 성공한 경우
        // 					var sCbMsg = "msg.checkMessage";
        // 					this.gfn_alert(sCbMsg,[],"savePO_CHECK","callbackFunc_pop","A");
        // 				}
        // 			}


        				//Refresh
        				this.tfn_tabl_crt_mast_search();

        			break;
         	}
        }

        /*++
        @desc	Popup Callback
        */
        this.callbackFunc_pop = function(strID, variant)
        {
        	var gtrcPos = "DevTableCreate.xfdl.callbackFunc_pop"
        	this.gtrace("● PO팝업콜백", gtrcPos);

        	//리턴값(공통)
        	var objRtn;
        	var rtnStr;			var rtnNum;			var rtnObj;
        	var sRtnKey;		var sRtnName;
        	var sRtnEtc_00;		var sRtnEtc_10;		var sRtnEtc_20;

        	if(!this.gfn_isNull(variant))
        	{
        												this.gtrace("variant--------------->"	+variant, gtrcPos);
        												this.gtrace("JSON.parse(variant)--->"	+JSON.parse(variant), gtrcPos);
        		objRtn 		= JSON.parse(variant);		this.gtrace("objRtn--->"		+objRtn		, gtrcPos);
        		rtnStr 		= objRtn.rtnStr;			this.gtrace("rtnStr 	--->"	+rtnStr 	, gtrcPos);
        		rtnNum 		= objRtn.rtnNum;			this.gtrace("rtnNum 	--->"	+rtnNum 	, gtrcPos);
        		rtnObj 		= objRtn.rtnObj;			this.gtrace("rtnObj 	--->"	+rtnObj 	, gtrcPos);
        		sRtnKey 	= objRtn.sRtnKey;			this.gtrace("sRtnKey 	--->"	+sRtnKey	, gtrcPos);
        		sRtnName 	= objRtn.sRtnName;			this.gtrace("sRtnName 	--->"	+sRtnName 	, gtrcPos);
        		sRtnEtc_00 	= objRtn.sRtnEtc_00;		this.gtrace("sRtnEtc_00	--->"	+sRtnEtc_00	, gtrcPos);
        		sRtnEtc_10 	= objRtn.sRtnEtc_10;		this.gtrace("sRtnEtc_10	--->"	+sRtnEtc_10	, gtrcPos);
        		sRtnEtc_20 	= objRtn.sRtnEtc_20;		this.gtrace("sRtnEtc_20	--->"	+sRtnEtc_20	, gtrcPos);
        	}

        	//서비스별 팝업콜백 실행
        	switch (strID)
        	{
        		case "savePO_SUCCESS"		:	// 조회실행-Refresh
        						this.tfn_tabl_crt_mast_search();
        					break;
        		case "savePO_CHECK"			:	// 성공한 행은 체크 못하도록 수정, 히스토리만 재조회
        						this.tfn_getDevTableCreateHistoryOnlyLoad();
        					break;
        		case "POHIST_POP_VendorCode":	// 팝업에서 가져온 VendorCode 세팅
        					var iDatasetRow	= rtnNum;
        					var sVendorCode	= sRtnKey;
        					var sVendorName = sRtnEtc_00;
        					this.ds_DevTableCreateHistory.setColumn(iDatasetRow, "LIFNR", sVendorCode);
        					this.ds_DevTableCreateHistory.setColumn(iDatasetRow, "NAME1", sVendorName);

        					break;
        		default :
        					break;

        	}
        }

        /********************************************************************************************
        @desc	7. Common Function
        ********************************************************************************************/
        /*
         *	조회
         */
        this.cfn_search = function()
        {
        //   	if(this.gfn_validation(this.ds_DevTableCreate_In, "A"))	// Validation == true 이면
        // 	{
        		// 조회실행
        		this.tfn_tabl_crt_mast_search();
        //	}
        };

        /*
         *	NEW
         */
        this.cfn_new = function()
        {
        	this.fn_reset();
        };

        /*
         *	삭제
         */
        this.cfn_del = function()
        {

        };

        /*
         *	저장
         */
        this.cfn_save = function()
        {
        // 	var oTpage = this.getTabpageType();
        // 		var checkDs  = oTpage.T_DS;
        //
        // 	// R : 체크한 행에 대해서만 체크
        // 	if(this.gfn_rowCheckValidation(checkDs, "msg.err.validator.selectrow"))
        // 	{
        // 		// 정합성체크 : 폼별 특수 케이스
        // 		if(this.fn_validationCheck("N")){
        			this.tfn_tabl_crt_mast_save();
        // 		}
        // 	}
        };

        /********************************************************************************************/
        /**   8. 사용자 함수                                                                        */
        /********************************************************************************************/
        /*
         *	사용자 함수
         */
        this.fn_userFn = function(){

        }

        /********************************************************************************************/
        /**   9. 이벤트(Event) 처리                                                                 */
        /********************************************************************************************/
        /*
         *	스크립트테스트버튼(ButtonScriptTest_onclick)
         */
        this.ButtonScriptTest_onclick = function(obj,e)
        {
        // 	trace(this.gfn_getDs(this, "ds_DevTable333Create_Result"));
        // 	if(this.gfn_getDs(this, "ds_DevTableCreate_Result")){
        // 		trace("dddddddddddddddddddd");
        // 	}
        //	trace(this.TabMain.TabpageDevTableCreate.form.GridDevTableCreate.name);
        //	trace(this.TabMain.TabpageDevTableCreate.form.lookup("GridDevTableCreate"));
        	//trace(this.gfn_getMessage("msg.OStypeIsNotValid"));
        	//this.Sketch00.drawStroke( 3, 3, true );
        	//this.Sketch00.drawStroke( 5, 5, false );
        	//this.Sketch00.drawStroke( 5, 5 );
        // 	var chkVal = this.ds_DevTableCreate.setColumn(0, "ROW_CHK");	trace("chkVal--->"+chkVal);
        // 	this.ds_DevTableCreate.setColumn(0, "ROW_CHK" , (chkVal=="1"?"0":"1"));
        // 	var param = new Object();
        // 	param.polist = "4500571397＾4500571724";
        // 	opener.openProgram(param);

        // 	var objApp = pForm.gfn_getApplication();
        // 	trace("nexacro.System.getCursorY()--->"+nexacro.System.getCursorY());
        // 	trace("nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0))--->"+nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0)));
        // 	trace("getTopLevelFormBox--->"+Eco.XComp.PositionSize.getTopLevelFormBox(obj)); //output: [829,135,63,43]

        // 	var a = 1660,b = -1559.9,c = 0.33;
        // 	var result = Eco.number.multiply(a, b, c);
        // 	//	this.st_3_result01.set_text("(number) " + result);
        // 	trace(result);

        //		system.execBrowser("www.naver.com");

        	//	192.168.11.193:8101/nexos/html/main/main.html?ver=20181022_03#LC00000M
        // 	trace(this.gfn_strToDate("20191227000000000"));
        // 	trace(this.gfn_dateToStr(this.gfn_strToDate("20191227000000000")));
        // 		trace("clientPos-->("+e.clientx+","+e.clienty+")");
        // 		trace("canvasPos-->("+e.canvasx+","+e.canvasy+")");
        	//	trace(this.TabMain.getIndex(this.TabMain.tabindex));
        	//	trace(this.gfn_getDate("time"));
        	//	trace(this.gfn_getCompId(obj));
        	//	this.test_func();
        	//	trace(this.gfn_getApplication());
        	//	trace(this.gfn_getParentForm());
        	//	trace("-------"+this.ds_grdDic.lookup("BindCol","VBELN","ColWidth"));
        	// 	trace("this.gfn_getCompId(obj)---------->"+this.gfn_getCompId(obj));
        	// 	trace("obj._unique_id---------->"+obj._unique_id);
        	// 	trace("this.gfn_getCompId(ButtonPOListHist)---------->"+this.gfn_getCompId(ButtonPOListHist));
        	// 	trace("this.gfn_getCompId(this.ds_DevTableCreate)---------->"+this.gfn_getCompId(this.ds_DevTableCreate));
        	//	trace("this.gfn_getRandomId (CID+this.gfn_getDate(date)+_)----"+this.gfn_getRandomId ("CID"+this.gfn_getDate("date")+"_"));
        	//	this.gfn_alert("msg.err.validator", "AAAAAAAAAA");

        	// 	var dsResultMsg = new Dataset;
        	// 		dsResultMsg.copyData(this.ds_DevTableCreate_In);
        	// 	trace(dsResultMsg.saveXML());
        	//	var objSample = [{ZQME_PO:202001270054287, EBELN:"", LIFNR:0013000789, VBELN:1202195746, RETURN:F, MESSAGE:SAPMessage}];
        	//	var objSame = [{ZQME_PO:202001270054287, EBELN:"", LIFNR:0013000789, VBELN:1202195746, RETURN:F, MESSAGE:SAP Message!}];
        	//	Please enter terms of payment for vendor, USER_ID:160307, P_RFCSEQ:360584, P_ROWSEQ:1, P_REQ_TYPE:E, id:id_0, CRUD:R, ROW_ID:}];
        	//
        	// 	var strT = 	"[{ZQME_PO=202001270054287, EBELN=, LIFNR=0013000789, VBELN=1202195746, RETURN=F, MESSAGE=SAP Message!"
        	// 			+	"\n"
        	// 			+	"Please enter terms of payment for vendor, USER_ID=160307, P_RFCSEQ=360584, P_ROWSEQ=1, P_REQ_TYPE=E, id=id_0, CRUD=R, ROW_ID=}]";
        	// 		//	trace("strT--->"+strT);
        	// 		var objT = eval(strT);
        	// 		trace(objT);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formOnload,this);
            this.TabMain.TabpageDevTableCreate.form.ButtonMassInput.addEventHandler("onclick",this.TabMain_TabpageDevTableCreate_ButtonMassInput_onclick,this);
            this.ButtonScriptTest.addEventHandler("onclick",this.ButtonScriptTest_onclick,this);
            this.ButtonTrace.addEventHandler("onclick",this.ButtonTrace_onclick,this);
            this.ds_DevTableCreate.addEventHandler("oncolumnchanged",this.ds_DevTableCreate_oncolumnchanged,this);
        };

        this.loadIncludeScript("DevTableCreate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
