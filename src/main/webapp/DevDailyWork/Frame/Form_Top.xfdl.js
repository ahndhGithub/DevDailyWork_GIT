(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer_Logo","0","0","190",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("topframe_logo");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu_Top","190","0",null,null,"150","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("gds_Menu");
            obj.set_captioncolumn("MenuName");
            obj.set_idcolumn("MenuCode");
            obj.set_levelcolumn("MenuLevel");
            obj.set_userdatacolumn("MenuID");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div_UserInfo",null,"0","150",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_adminIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Admin","-24","6","28",null,null,"6",null,null,null,null,this.Div_UserInfo.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_visible("false");
            this.Div_UserInfo.addChild(obj.name, obj);

            obj = new Static("Static_UserInfo","Button_Admin:14","6",null,null,"6","6",null,null,null,null,this.Div_UserInfo.form);
            obj.set_taborder("0");
            obj.set_color("white");
            obj.set_textAlign("center");
            this.Div_UserInfo.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",800,40,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Top.xfdl","Library::Library.xjs");
        this.registerScript("Form_Top.xfdl", function() {
        this.executeIncludeScript("Library::Library.xjs"); /*include "Library::Library.xjs"*/;

        /************************************************************************
         *
         ************************************************************************/
        this.SERVER_TYPE;

        /************************************************************************
         *
         ************************************************************************/

        this.fn_SetColor = function(strColor)
        {
        	switch(strColor) {
        	case "PRD":
        		this.ImageViewer_Logo.set_background(vColor + " URL('img::img_top_logo.png') center middle");
        		this.Menu_Top.set_background("blue");
        		break;
        	case "QA":
        		this.ImageViewer_Logo.set_background(vColor + " URL('img::img_top_logo.png') center middle");
        		this.Menu_Top.set_background("red");
        		break;
        	case "DEV":
        		this.ImageViewer_Logo.set_background(vColor + " URL('img::img_top_logo.png') center middle");
        		this.Menu_Top.set_background("yellow");
        		break;
        	default:
        	}
        }


        this.fn_Admin_onclick = function(obj,e)
        {
        	var x = nexacro.toNumber(system.clientToScreenX(obj, 0 ));
        	//var y = nexacro.toNumber(system.clientToScreenY(obj, 0 ));

        	var objFrame  = new ChildFrame();
        	var objParentFrame = this.getOwnerFrame();

        	objFrame.init("UserInfoPop", x, 66, 300, 200);
        	objFrame.set_formurl( "Base::UserLogInfoP.xfdl" );
        	objFrame.set_showtitleicon(false);
        	objFrame.set_border("2px solid red");
        	objFrame.set_showtitlebar(false);
        	objFrame.set_showstatusbar(false);
        	var vRtn = objFrame.showModal("UserLogInfoP", objParentFrame, null, this, null);
        };

        /************************************************************************
         *
         ************************************************************************/

        this.Menu_onmenuclick = function(obj,e)
        {
         	var aArgs = "";
         	this.gfn_openMenu(e.id, aArgs);

        };

        this.Form_onload = function(obj,e)
        {
        	this.fn_SetColor(this.SERVER_TYPE);
        };

        this.fn_login = function()
        {
        	nexacro.getApplication().mainframe.vMainFrameSet.hWorkFrameSet.vMdiFrameSet.TabFrame.form.Button_MenuShowHide.click();
        	nexacro.getApplication().mainframe.vMainFrameSet.hWorkFrameSet.vMdiFrameSet.TabFrame.form.Button_MenuShowHide.set_visible(true);
        	this.Div_UserInfo.form.Static_UserInfo.set_text('테스트유저');

        	var objDsMenu = HINTS.gds_Menu;
        	if (objDsMenu.findRow( HINTS.gv_MenuCodeCol, "TxTest" ) == -1 ) {
        		var nMenuRow = objDsMenu.addRow();
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuCodeCol,"TxTest");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuNameCol,"테스트Transaction");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuURLCol,"Base::Transact_Test.xfdl");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsDUPCol,"N");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsLeafCol,"Y");
        	}
        	if (objDsMenu.findRow( HINTS.gv_MenuCodeCol, "GridDemo" ) == -1 ) {
        		var nMenuRow = objDsMenu.addRow();
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuCodeCol,"GridDemo");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuNameCol,"Grid 샘플");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuURLCol,"Base::Grid_Sample.xfdl");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsDUPCol,"N");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsLeafCol,"Y");
        	}
        	if (objDsMenu.findRow( HINTS.gv_MenuCodeCol, "GridDemo_Obj" ) == -1 ) {
        		var nMenuRow = objDsMenu.addRow();
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuCodeCol,"GridDemo_Obj");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuNameCol,"Grid 샘플_Obj");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuURLCol,"Base::Grid_Sample_Obj.xfdl");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsDUPCol,"N");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsLeafCol,"Y");
        	}
        	if (objDsMenu.findRow( HINTS.gv_MenuCodeCol, "POList" ) == -1 ) {
        		var nMenuRow = objDsMenu.addRow();
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuCodeCol,"POList");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuNameCol,"POList");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuURLCol,"Base::POList.xfdl");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsDUPCol,"N");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsLeafCol,"Y");
        	}
        	if (objDsMenu.findRow( HINTS.gv_MenuCodeCol, "Editor_ckeditor" ) == -1 ) {
        		var nMenuRow = objDsMenu.addRow();
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuCodeCol,"Editor_ckeditor");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuNameCol,"Editor_ckeditor");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuURLCol,"Base::Editor_ckeditor.xfdl");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsDUPCol,"N");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsLeafCol,"Y");
        	}
        	if (objDsMenu.findRow( HINTS.gv_MenuCodeCol, "Editor_ToastUI" ) == -1 ) {
        		var nMenuRow = objDsMenu.addRow();
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuCodeCol,"Editor_ToastUI");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuNameCol,"Editor_ToastUI");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuURLCol,"Base::Editor_ToastUI.xfdl");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsDUPCol,"N");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsLeafCol,"Y");
        	}
        	if (objDsMenu.findRow( HINTS.gv_MenuCodeCol, "Editor_RichTextEditor" ) == -1 ) {
        		var nMenuRow = objDsMenu.addRow();
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuCodeCol,"Editor_RichTextEditor");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuNameCol,"Editor_RichTextEditor");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuURLCol,"RichTextEditor::richtexteditor_sample.xfdl");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsDUPCol,"N");
        		objDsMenu.setColumn(nMenuRow, HINTS.gv_MenuIsLeafCol,"Y");
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.Menu_Top.addEventHandler("onmenuclick",this.Menu_onmenuclick,this);
            this.Div_UserInfo.form.Button_Admin.addEventHandler("onclick",this.fn_Admin_onclick,this);
            this.Div_UserInfo.form.Static_UserInfo.addEventHandler("onclick",this.fn_Admin_onclick,this);
        };

        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
