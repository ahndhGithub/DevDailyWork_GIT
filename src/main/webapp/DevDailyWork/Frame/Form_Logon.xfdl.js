(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Logon");
            this.set_titletext("Form_Logon");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"UserCode\" type=\"STRING\" size=\"256\"/><Column id=\"PassWord\" type=\"STRING\" size=\"256\"/><Column id=\"Rtn\" type=\"STRING\" size=\"256\"/><Column id=\"msg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_log", this);
            obj._setContents("<ColumnInfo><Column id=\"UserCode\" type=\"STRING\" size=\"256\"/><Column id=\"IP\" type=\"STRING\" size=\"256\"/><Column id=\"MAC\" type=\"STRING\" size=\"256\"/><Column id=\"PC\" type=\"STRING\" size=\"256\"/><Column id=\"GUID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Language", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Code\">KO</Col><Col id=\"Data\">한국어</Col></Row><Row><Col id=\"Code\">EN</Col><Col id=\"Data\">English</Col></Row><Row><Col id=\"Code\">CN</Col><Col id=\"Data\">中國語</Col></Row><Row><Col id=\"Code\">JP</Col><Col id=\"Data\">日本語</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div_Logon",null,null,"360","170","15%","15%",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","100","28",null,null,null,null,null,null,this.Div_Logon.form);
            obj.set_taborder("0");
            obj.set_text("User Code");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div_Logon.addChild(obj.name, obj);

            obj = new Edit("Edit_ID","Static00:2","10","140","28",null,null,null,null,null,null,this.Div_Logon.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("UserCode");
            this.Div_Logon.addChild(obj.name, obj);

            obj = new Static("Static01","20","40","100","28",null,null,null,null,null,null,this.Div_Logon.form);
            obj.set_taborder("2");
            obj.set_text("PassCode");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div_Logon.addChild(obj.name, obj);

            obj = new Edit("Edit_PassCode","Static01:2","40","140","28",null,null,null,null,null,null,this.Div_Logon.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("PassCode");
            obj.set_password("true");
            this.Div_Logon.addChild(obj.name, obj);

            obj = new Button("Button_Logon","Edit_ID:2","10","80","58",null,null,null,null,null,null,this.Div_Logon.form);
            obj.set_taborder("4");
            obj.set_text("Logon");
            this.Div_Logon.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox_RememberID","20","130","240","28",null,null,null,null,null,null,this.Div_Logon.form);
            obj.set_taborder("5");
            obj.set_text("User Code 저장");
            this.Div_Logon.addChild(obj.name, obj);

            obj = new Combo("Combo00","122","70","140","28",null,null,null,null,null,null,this.Div_Logon.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_text("Combo00");
            this.Div_Logon.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","70","100","28",null,null,null,null,null,null,this.Div_Logon.form);
            obj.set_taborder("7");
            obj.set_text("회사");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("false");
            this.Div_Logon.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","122","100","140","28",null,null,null,null,null,null,this.Div_Logon.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_Language");
            obj.set_datacolumn("Data");
            obj.set_codecolumn("Code");
            obj.set_text("한국어");
            obj.set_value("KO");
            obj.set_index("0");
            this.Div_Logon.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20","100","100","28",null,null,null,null,null,null,this.Div_Logon.form);
            obj.set_taborder("9");
            obj.set_text("언어");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div_Logon.addChild(obj.name, obj);

            obj = new Static("Static_Logon","269","141","75","27",null,null,null,null,null,null,this.Div_Logon.form);
            obj.set_taborder("10");
            obj.set_text("Static02");
            this.Div_Logon.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser_Svr","50","377","250","73",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Logon","19","9","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Desktop");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Logon.xfdl","Library::Library.xjs");
        this.registerScript("Form_Logon.xfdl", function() {

        this.executeIncludeScript("Library::Library.xjs"); /*include "Library::Library.xjs"*/;

        /************************************************************************
        *
        ************************************************************************/
        this.SERVER_TYPE;

        /************************************************************************
        *
        ************************************************************************/

        this.fn_TestLogon = function()
        {
        	this.Div_Logon.form.Edit_ID.set_value("SysAdmin");
        	this.Div_Logon.form.Edit_PassCode.set_value("SysAdmin");
        	this.fn_LoadMenu();
        };

        // login function
        this.fn_Logon = function ()
        {
        	if (this.fn_CheckValidation()) {
        		// 사용자 정보를 저장한다
        		if (this.Div_Logon.form.CheckBox_RememberID.value) {
        			nexacro.setPrivateProfile("LoadUserCode", "True");
        			nexacro.setPrivateProfile("UserCode", this.Div_Logon.form.Edit_ID.value);
        		}
        		else {
        			nexacro.setPrivateProfile("LoadUserCode", "false");
        		}

        		if (HINTS.gv_FrameSet.frames.length > 0) {
        			HINTS.gv_FrameSet.frames[0].destroy();
        		}
        		this.fn_LoadMenu();
        	}
        	else {
        		return;
        	}
        };

        this.fn_GetLogonProperties = function(obj,e)
        {
        	this.ds_in.addRow();

        	var strValue = nexacro.getPrivateProfile("LoadUserCode");

        	this.Div_Logon.form.CheckBox_RememberID.set_value(strValue);
        	if (strValue == "undefined") {
        		this.Div_Logon.form.CheckBox_RememberID.set_value(0);
        	}

        	// 저장된 사용자 정보를 가져온다
        	if (this.Div_Logon.form.CheckBox_RememberID.value) {
        		this.Div_Logon.form.Edit_ID.set_value(nexacro.getPrivateProfile("UserCode"));
        	}

        	if (this.gfn_isNull(this.ds_in.getColumn(0, 'UserCode'))) {
        		this.Div_Logon.form.Edit_ID.setFocus();
        	}
        	else {
        		this.Div_Logon.form.Edit_PassCode.setFocus();
        	}

        	this.setTimer(0, 300);
        };

        this.fn_LoadMenu = function ()
        {
        	HINTS.gds_Menu.clearData();

        	HINTS.gds_CommCode.clearData();
        	HINTS.gds_Messages.clearData();
        	HINTS.gds_Words.clearData();

        	this.ds_log.clearData();

        	var sSvcID = "load_menu";
        	var sURL = "AppSvr::accessLogIn.do";
        	var sInDatasets = "ds_in0=ds_in ds_in1=ds_in ds_in2=ds_in ds_in3=ds_in ds_in4=ds_in ds_in5=ds_in";
        	var sOutDatasets = "gds_Menu=ds_out0 gds_CommCode=ds_out1 gds_Messages=ds_out2 gds_Words=ds_out3 gds_MyMenu=ds_out4 ds_log=ds_out5";
        	var sArguments = "sqlId=" + nexacro.wrapQuote("load_menu load_ctrlitem load_mssg load_words load_mymenu search_active_accesslog");
        	var sCallback = "callbackFunction";
        	this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, sCallback);

        };


        this.fn_CheckValidation = function ()
        {
        	if (this.gfn_isEmpty(this.Div_Logon.form.Edit_ID.value) || this.gfn_isEmpty(this.Div_Logon.form.Edit_PassCode.value))
        	{
        		this.Div_Logon.form.Edit_ID.setFocus();
        		this.alert("아이디 또는 패스워드가 없습니다");
        		return false;
        	}

        	return true;
        };

        this.fn_WriteAccessLog = function ()
        {

        	var sArg = "";

        	this.ds_log00.clearData();
        	this.ds_log00.addRow();

        	this.ds_log00.setColumn(this.ds_log00.rowposition, "UserCode", HINTS.gds_User.getColumn(0, "UserCode"));
        	this.ds_log00.setColumn(this.ds_log00.rowposition, "GUID", nexacro.getEnvironment().JSESSIONID);
        	this.ds_log00.setColumn(this.ds_log00.rowposition, "OS", system.osversion);

        	//trace(this.ds_log00.saveXML());

        	var sSvcID = "write_login_accesslog";
        	var sURL = "AppSvr::logInAccessLog.do";
        	var sInDatasets = "ds_in0=ds_log00";
        	var sOutDatasets = "ds_out=ds_out0";
        	var sArguments = "sqlId=" + nexacro.wrapQuote("write_login_accesslog");
        	var sCallback = "callbackFunction";
        	this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, sCallback);
        };

        this.fn_WriteAccessLogout = function ()
        {
        	var sSvcID = "write_logout_accesslog";
        	var sURL = "AppSvr::CommonSaveAction_Return.do";
        	var sInDatasets = "ds_in0=ds_out";
        	var sOutDatasets = "";
        	var sArguments = "sqlId=" + nexacro.wrapQuote("write_logout_accesslog");
        	var sCallback = "callbackFunction";
        	this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, sCallback, false);
        };


        this.callbackFunction = function (strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 체크 영역
        	if (nErrorCode < 0) {
        		return;
        	}

        	switch(strSvcID) {
        	case "load_menu":
        		if (HINTS.gds_User.getColumn(0, "ret") == "RET000") {
        			// Logon시 전역변수 USERCODE 지정
        			HINTS.USERCODE = HINTS.gds_User.getColumn(0, "UserCode")
        			HINTS.USERNAME = HINTS.gds_User.getColumn(0, "UserName")
        		}
        		else {
        			this.gfn_msgAlert("아이디와 패스워드를 확인해 주세요");
        			return;
        		}
        		this.setUserLog(); //로그 체크
        		break;

        	case "write_login_accesslog":
        		//HINTS.gv_TopFrame.set_formurl("Frame::Form_Top.xfdl");
        		HINTS.gv_MainFrameSet.set_separatesize("36,*,0");
        		break;

        	default:
        	}
        };

        this.setUserLog = function ()
        {
        	if (this.ds_log.getRowCount() > 0) {
        		if (HINTS.confirm("해당 ID로 사용자 접속상태입니다. 기존 세션을 만료하고 새로 접속하시겠습니까?")) {
        			this.fn_WriteAccessLog();
        		}
        		else {
        			// 오픈되어있는 팝업 종료.
        			var oPopup = nexacro.getPopupFrames();
        			for (var j = (oPopup.length - 1); j >= 0; j--)
        			{
        				oPopup[j].form.close(false);
        			}

        			// 오픈되어있는 화면 종료.
        			var oFrameSet = HINTS.gv_FrameSet;
        			for (var i = (oFrameSet.all.length - 1); i >= 0; i--) 			{
        				oFrameSet.all[i].form.close();
        			}
        			return;
        		}
        	}
        	else {
        		this.fn_WriteAccessLog();
        		return;
        	}
        };

        this.fn_SetColor = function(strServerType)
        {
        	switch(strServerType) {
        	case "PRD":
        		this.set_background("url('imagerc::cat1.jpg') no-repeat center center #ffffaa'");
        		this.Div_Logon.form.Button_Logon.set_background("blue");
        		this.Div_Logon.form.Static_Logon.set_text("PRD");
        		// 			HINTS.gv_TopFrame.form.fn_SetIV_Color("PRD");
        		// 			HINTS.gv_LeftFrame.form.fn_Set_Dev("PRD");
        		break;
        	case "QA":
        		this.set_background("url('imagerc::cat2.jpg') no-repeat center center #ffffaa'");
        		this.Div_Logon.form.Button_Logon.set_background("red");
        		this.Div_Logon.form.Static_Logon.set_text("QA");
        		// 			HINTS.gv_TopFrame.form.fn_SetIV_Color("QA");
        		// 			HINTS.gv_LeftFrame.form.fn_Set_Dev("QA");
        		break;
        	case "DEV":
        		this.set_background("url('imagerc::cat3.jpg') no-repeat center center #ffffaa'");
        		this.Div_Logon.form.Button_Logon.set_background("yellow");
        		this.Div_Logon.form.Static_Logon.set_text("DEV");
        		// 			HINTS.gv_TopFrame.form.fn_Set_Color("DEV");
        		// 			HINTS.gv_LeftFrame.form.fn_Set_Color("DEV");
        		break;
        	default:
        		this.set_background("url('imagerc::cat4.jpg') no-repeat center center #ffffaa'");
        		this.Div_Logon.form.Button_Logon.set_background("silver");
        		this.Div_Logon.form.Static_Logon.set_text("RUNTIME");
        	}

        };

        /************************************************************************
        *
        ************************************************************************/


        // 접속주소를 받아서 컴포넌트 색 변경(dev - blue / prod - red)
        this.WebBrowser_onusernotify = function(obj,e)
        {
        	var vAddress = new String(e.userdata);//.substring(7,11);
        	trace("WebBrowser_Svr_onusernotify "+vAddress);
        	switch(vAddress) {
        	case this.PRD_SERVER:
        		this.SERVER_TYPE = "PRD";
        		break;
        	case this.QA_SERVER:
        		this.SERVER_TYPE = "QA";
        		break;
        	case this.DEV_SERVER:
        		this.SERVER_TYPE = "DEV";
        	default:
        		this.SERVER_TYPE = "RUNTIME";
        	}
        };


        this.Button_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fn_Logon();
        	}
        };

        this.Button_onclick = function(obj,e)
        {
        	//개발시
        	this.fn_TestLogon();
        	//운영시
        	//this.fn_Logon();
        };

        this.Form_Logon_ontimer = function(obj,e)
        {
        	this.killTimer();
        };

        this.Form_onload = function(obj,e)
        {
        	this.fn_SetColor(this.SERVER_TYPE);

        	this.fn_GetLogonProperties();

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_Logon_ontimer,this);
            this.addEventHandler("onload",this.Form_onload,this);
            this.Div_Logon.addEventHandler("onkeyup",this.Button_onkeyup,this);
            this.Div_Logon.form.Button_Logon.addEventHandler("onkeyup",this.Button_onkeyup,this);
            this.Div_Logon.form.Button_Logon.addEventHandler("onclick",this.Button_onclick,this);
            this.WebBrowser_Svr.addEventHandler("onusernotify",this.WebBrowser_onusernotify,this);
        };

        this.loadIncludeScript("Form_Logon.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
