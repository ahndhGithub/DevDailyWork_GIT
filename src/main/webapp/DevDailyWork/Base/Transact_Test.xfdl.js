(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Transact_Test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj._setContents("<ColumnInfo><Column id=\"param1\" type=\"STRING\" size=\"256\"/><Column id=\"param2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"result_txt_FIRST\" type=\"STRING\" size=\"256\"/><Column id=\"SO_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_in00", this);
            obj._setContents("<ColumnInfo><Column id=\"p_user_id\" type=\"STRING\" size=\"256\"/><Column id=\"p_code_grp\" type=\"STRING\" size=\"256\"/><Column id=\"p_code_cd\" type=\"STRING\" size=\"256\"/><Column id=\"p_sub_cd1\" type=\"STRING\" size=\"256\"/><Column id=\"p_sub_cd2\" type=\"STRING\" size=\"256\"/><Column id=\"p_sub_cd3\" type=\"STRING\" size=\"256\"/><Column id=\"p_osno1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out00", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD\" type=\"STRING\" size=\"256\"/><Column id=\"CERTIFY_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VENDOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CARRIER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_LANG\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VENDOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CARRIER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_DATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEWING_COUNT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EHR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GW_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out22", this);
            obj._setContents("<ColumnInfo><Column id=\"TTT\" type=\"STRING\" size=\"256\"/><Column id=\"KKK\" type=\"STRING\" size=\"256\"/><Column id=\"AAA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out33", this);
            obj._setContents("<ColumnInfo><Column id=\"EEE\" type=\"STRING\" size=\"256\"/><Column id=\"RRR\" type=\"STRING\" size=\"256\"/><Column id=\"QQQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","140","140","290","130",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_out");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"278\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SO_NO\"/><Cell col=\"1\" text=\"result_txt_FIRST\"/></Band><Band id=\"body\"><Cell text=\"bind:SO_NO\"/><Cell col=\"1\" text=\"bind:result_txt_FIRST\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","140","66","138","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","72","66","68","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("입력값");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","294","66","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","66","140","68","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("결과값");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","652","150","1088","500",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_out00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"USER_ID\"/><Cell col=\"1\" text=\"USER_NM\"/><Cell col=\"2\" text=\"USER_PWD\"/><Cell col=\"3\" text=\"CERTIFY_DIV\"/><Cell col=\"4\" text=\"CENTER_CD\"/><Cell col=\"5\" text=\"BU_CD\"/><Cell col=\"6\" text=\"CUST_CD\"/><Cell col=\"7\" text=\"VENDOR_CD\"/><Cell col=\"8\" text=\"CARRIER_CD\"/><Cell col=\"9\" text=\"SYS_LANG\"/><Cell col=\"10\" text=\"CENTER_NM\"/><Cell col=\"11\" text=\"BU_NM\"/><Cell col=\"12\" text=\"CUST_NM\"/><Cell col=\"13\" text=\"VENDOR_NM\"/><Cell col=\"14\" text=\"CARRIER_NM\"/><Cell col=\"15\" text=\"LOGIN_DATE\"/><Cell col=\"16\" text=\"LOGIN_DATETIME\"/><Cell col=\"17\" text=\"LINE_GROUP_CD\"/><Cell col=\"18\" text=\"BRAND_CD\"/><Cell col=\"19\" text=\"BRAND_NM\"/><Cell col=\"20\" text=\"SEWING_COUNT_YN\"/><Cell col=\"21\" text=\"SYS_CODE\"/><Cell col=\"22\" text=\"EHR_YN\"/><Cell col=\"23\" text=\"GW_ID\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\"/><Cell col=\"1\" text=\"bind:USER_NM\"/><Cell col=\"2\" text=\"bind:USER_PWD\"/><Cell col=\"3\" text=\"bind:CERTIFY_DIV\"/><Cell col=\"4\" text=\"bind:CENTER_CD\"/><Cell col=\"5\" text=\"bind:BU_CD\"/><Cell col=\"6\" text=\"bind:CUST_CD\"/><Cell col=\"7\" text=\"bind:VENDOR_CD\"/><Cell col=\"8\" text=\"bind:CARRIER_CD\"/><Cell col=\"9\" text=\"bind:SYS_LANG\"/><Cell col=\"10\" text=\"bind:CENTER_NM\"/><Cell col=\"11\" text=\"bind:BU_NM\"/><Cell col=\"12\" text=\"bind:CUST_NM\"/><Cell col=\"13\" text=\"bind:VENDOR_NM\"/><Cell col=\"14\" text=\"bind:CARRIER_NM\"/><Cell col=\"15\" text=\"bind:LOGIN_DATE\"/><Cell col=\"16\" text=\"bind:LOGIN_DATETIME\"/><Cell col=\"17\" text=\"bind:LINE_GROUP_CD\"/><Cell col=\"18\" text=\"bind:BRAND_CD\"/><Cell col=\"19\" text=\"bind:BRAND_NM\"/><Cell col=\"20\" text=\"bind:SEWING_COUNT_YN\"/><Cell col=\"21\" text=\"bind:SYS_CODE\"/><Cell col=\"22\" text=\"bind:EHR_YN\"/><Cell col=\"23\" text=\"bind:GW_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","652","76","138","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","584","76","68","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("입력값");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","806","76","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","578","150","68","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("결과값");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","678","116","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("실행-2건");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","135","295","290","130",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_out22");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TTT\"/><Cell col=\"1\" text=\"KKK\"/><Cell col=\"2\" text=\"AAA\"/></Band><Band id=\"body\"><Cell text=\"bind:TTT\"/><Cell col=\"1\" text=\"bind:KKK\"/><Cell col=\"2\" text=\"bind:AAA\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01_00","140","450","290","130",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_out33");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EEE\"/><Cell col=\"1\" text=\"RRR\"/><Cell col=\"2\" text=\"QQQ\"/></Band><Band id=\"body\"><Cell text=\"bind:EEE\"/><Cell col=\"1\" text=\"bind:RRR\"/><Cell col=\"2\" text=\"bind:QQQ\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonScriptTest","480","210","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("스크립트테스트");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Transact_Test.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("Transact_Test.xfdl", function() {
        /********************************************************************************************
        @desc	1. Include
        ********************************************************************************************/
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;


        this.Button00_onclick = function(obj,e)
        {
        	this.ds_in.clearData();
        	this.ds_out.clearData();
        	this.ds_out22.clearData();

        	this.ds_in.addRow();
        	this.ds_in.setColumn(0, "param1", "AAA");
        	this.ds_in.setColumn(0, "param2", "BBB");

        // 	this.ds_in.addRow();
        // 	this.ds_in.setColumn(1, "param1", "CCC");
        // 	this.ds_in.setColumn(1, "param2", "DDD");

        	var sSvcID 			= "AppSvrLocalMsSqlTest";
        	var sURL 			= "AppSvrLocalMsSql::CommonSaveAction_Return.do";
        	var sInDatasets 	= "ds_in0=ds_in ds_in1=ds_in ds_in2=ds_in";
        	var sOutDatasets 	= "ds_out=ds_out0 ds_out22=ds_out1 ds_out33=ds_out2";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("test_first_transaction test_second_transaction test_second_transaction");

        	//공통 트랜잭션 사용
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        };


        /********************************************************************************************
        @desc	6. Callback
        ********************************************************************************************/
        /*++
        @desc	Callback Function
        */
        this.callbackFunction = function(strSvcID, nErrorCode, strErrorMsg)
        {
        							var gtrcPos = "POList.xfdl.callbackFunction"
        	trace("here");
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
        			case "TestTransaction_ToQmeWasServer"	:
        				trace(this.ds_out00.saveXML());

        				break;

        			case "AppSvrLocalMsSqlTest"	:
        				trace(this.ds_out.saveXML());

        				break;
         	}
        }

        this.Button00_00_onclick = function(obj,e)
        {
        	this.ds_in00.clearData();
        	this.ds_out00.clearData();

        	this.ds_in00.addRow();
        	this.ds_in00.setColumn(0, "p_user_id", "160307");
        	this.ds_in00.setColumn(0, "p_osno1", "1202195746");

        	var sSvcID 			= "getPoListHistoryLoad";
        	var sURL 			= "AppSvr::common/commonAction.ppc";
        	var sInDatasets 	= "ds_in0=ds_in00";
        	var sOutDatasets 	= "ds_out00=ds_out0";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("POMapper.getPOList");

        		trace("보내는 데이터셋(ds_in00.saveXML())---->"+this.ds_in00.saveXML());

        	//공통 트랜잭션 사용
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        };

        this.Button00_00_00_onclick = function(obj,e)
        {
        	this.ds_in00.clearData();
        	this.ds_out00.clearData();

        	this.ds_in00.addRow();
        	this.ds_in00.setColumn(0, "p_user_id", "160307");
        	this.ds_in00.setColumn(0, "p_osno1", "1202195746");

        	this.ds_in00.addRow();
        	this.ds_in00.setColumn(1, "p_user_id", "160307");
        	this.ds_in00.setColumn(1, "p_osno1", "1202195746");

        	var sSvcID 			= "getPoListHistoryLoad2";
        	var sURL 			= "AppSvr::common/commonAction.ppc";
        	var sInDatasets 	= "ds_in0=ds_in00";
        	var sOutDatasets 	= "ds_out00=ds_out0";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("POMapper.getPOList");

        		trace("보내는 데이터셋(ds_in00.saveXML())---->"+this.ds_in00.saveXML());

        	//공통 트랜잭션 사용
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        };

        this.ButtonScriptTest_onclick = function(obj,e)
        {
        	trace("chkButton".substring(0,3));
        	trace(this.lookup("Edit00").name);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
            this.ButtonScriptTest.addEventHandler("onclick",this.ButtonScriptTest_onclick,this);
        };

        this.loadIncludeScript("Transact_Test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
