(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UserLogInfoP");
            this.set_titletext("사용자정보 팝업");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            this.getSetter("style").set("border:1 solid red ;");
            if (Form == this.constructor)
            {
                this._setFormPosition(292,162);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_UserInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"UserId\" type=\"STRING\" size=\"256\"/><Column id=\"IP\" type=\"STRING\" size=\"256\"/><Column id=\"LOGON\" type=\"STRING\" size=\"256\"/><Column id=\"SalesOfficeName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"UserId\">TEST</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_in", this);
            obj._setContents("<ColumnInfo><Column id=\"SaveUser\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","10","10",null,"110","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box01LR");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","41","21","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","41","53","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("로그인");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","41","85","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("아이피");
            obj.set_cssclass("sta_WF_label01R");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","41","85","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("영업소");
            obj.set_cssclass("sta_WF_label01R");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","91","21","158","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","91","85","158","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","91","85","158","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","91","53","158","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","252","85","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_modify01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","198","119","51","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("로그인");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_UserInfo","UserId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit02","value","ds_UserInfo","IP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit03","value","ds_UserInfo","SalesOfficeName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Calendar00","value","ds_UserInfo","LOGON");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("UserLogInfoP.xfdl","Library::Library.xjs");
        this.registerScript("UserLogInfoP.xfdl", function() {
        /********************************************************************************************/
        /**   1. Include                                                                            */
        /********************************************************************************************/
        this.executeIncludeScript("Library::Library.xjs"); /*include "Library::Library.xjs"*/;

        /********************************************************************************************/
        /**   2. Form 변수 선언부                                                                 */
        /********************************************************************************************/

        /********************************************************************************************/
        /**   3. OnLoad                                                                             */
        /********************************************************************************************/
        /*++
        @desc    Onload
        */
        this.fn_Onload = function(obj, e)
        {
        // 	this.ds_in.setColumn(this.ds_in.addRow(), "SaveUser", nexacro.getEnvironment().gds_User.getColumn(0, "UserId"));
        // 	this.ds_UserInfo.clearData();
        //
        // 	this.fn_searchUserInfo();
        //
        // 	if(nexacro.getEnvironment().gds_User.getColumn(0, 'SalesCount') > 1) {
        // 		this.Button00.set_visible(true);
        // 	} else {
        // 		this.Button00.set_visible(false);
        // 	}
        }


        this.fn_searchUserInfo = function()
        {
        	var sSvcID			= "search_active_accesslog";
        	var sURL			= "NexusSrv::CommonSelectAction.do";
        	var sInDatasets		= "ds_in=ds_in";
        	var sOutDatasets	= "ds_UserInfo=ds_out0";
        	var sArguments		= "sqlId=" + nexacro.wrapQuote("search_active_accesslog");

        	this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }

        this.callbackFunction = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	// 에러 체크 영역
        	if(nErrorCode < 0)
        	{
        		alert(this.gfn_removeJavaErrMsg(strErrorMsg));
        		return;
        	}

        	switch(strSvcID)
        	{
        		case 'search_active_accesslog' :
        			this.ds_UserInfo.setColumn(0, 'SalesOfficeName', nexacro.getEnvironment().gds_User.getColumn(0, 'SalesOfficeName'));
        			break;
        	}
        }

        this.UserLogInfoP_ondeactivate = function(obj, e)
        {
        	this.close();
        }

        this.fn_openSelect = function()
        {
        	var posX = Math.round((nexacro.getEnvironment().mainframe.vStartFrameSet.vMainFrameSet.width - 500)/2);
        	var posY = Math.round((nexacro.getEnvironment().mainframe.vStartFrameSet.vMainFrameSet.height - 125 - 154)/2);

        	var objNew = new ChildFrame();
        	var objParentFrame = this.getOwnerFrame();

        	objNew.init("SelectSalesOffice", "absolute", posX, posY, 420, 154, null, null, "sys::SelectSalesOffice.xfdl");
        	objNew.set_showtitleicon(false);
        	objNew.style.set_bordertype("round 3px 3px");
        	objNew.set_showtitlebar(false);
        	objNew.set_showstatusbar(false);

        //	objNew.showModal(objParentFrame, {}, this, null);
        	nexacro.getEnvironment().open("SelectSalesOffice", "sys::SelectSalesOffice.xfdl", null, {}, "showtitlebar=false showstatusbar=false", posX, posY, 366, 154);
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.opener.fn_login();

        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_Onload,this);
            this.addEventHandler("ondeactivate",this.UserLogInfoP_ondeactivate,this);
            this.addEventHandler("onkillfocus",this.UserLogInfoP_onkillfocus,this);
            this.Button00.addEventHandler("onclick",this.fn_openSelect,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("UserLogInfoP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
