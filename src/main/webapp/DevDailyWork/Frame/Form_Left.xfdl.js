(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            if (Form == this.constructor)
            {
                this._setFormPosition(265,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button_MyMenu","10","4","75","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("My Menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button_ExpandAll",null,"4","28","28","70",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_treeexpand");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Menu","Button_MyMenu:2","4",null,"28","Button_ExpandAll:2",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button_CollapseAll",null,"4","28","28","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_treecollapse");
            this.addChild(obj.name, obj);

            obj = new Button("Button_MenuSearch",null,"4","28","28","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div_MenuGrid","10","36",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_Menu","0","0",null,null,"0","0",null,null,null,null,this.Div_MenuGrid.form);
            obj.set_taborder("0");
            obj.set_binddataset("gds_Menu");
            obj.set_autofittype("col");
            obj.set_accessibilityrole("treegrid");
            obj.set_treeasynctoggle("true");
            obj.set_treeusebutton("use");
            obj.set_treeinitstatus("collapse,null");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("true");
            obj.set_treeuseline("true");
            obj.set_useselcolor("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MenuLevel\" text=\"bind:MenuName\" border=\"1px none #dbdee2\"/></Band></Format></Formats>");
            this.Div_MenuGrid.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",265,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Left.xfdl","Library::Library.xjs");
        this.registerScript("Form_Left.xfdl", function() {
        this.executeIncludeScript("Library::Library.xjs"); /*include "Library::Library.xjs"*/;

        this.fv_bMyMenu = false; // MyMenu

        this.Button_onclick = function(obj,e)
        {
        	switch(obj.id) {
        	case "Button_MyMenu":
        		this.Button_MyMenu.set_border("1px solid red");
        		this.Button_Menu.set_border("1px solid ");
        		this.fv_bMyMenu = true;
        		this.Div_MenuGrid.form.Grid_Menu.set_binddataset("ds_MyMenu");
        		break;
        	case "Button_Menu":
        		this.Button_MyMenu.set_border("1px solid #999999");
        		this.Button_Menu.set_border("1px solid red");
        		this.fv_bMyMenu = false;
        		this.Div_MenuGrid.form.Grid_Menu.set_binddataset("gds_Menu");
        		break;
        	case "Button_ExpandAll":
        		this.Div_MenuGrid.form.Grid_Menu.set_treeinitstatus("expand,all");
        		break;
        	case "Button_CollapseAll":
        		this.Div_MenuGrid.form.Grid_Menu.set_treeinitstatus("collapse,all");
        		break;
        	case "Button_MenuSearch":
        		break;
        	default:
        		this.alert("준비중입니다. (CTRL) : " + obj.id);
        		break;
        	}
        };

        this.Grid_onrbuttondown = function(obj,e)
        {
        	if(this.fv_bMyMenu)
        	{
        		var bOK = HINTS.confirm( "My Menu에서 삭제할까요?" , "My Menu", "question" );
        		if (! bOK) return;

        		this.ds_MyMenu.setColumn(e.row, "ROW_STS", "D");
        		this.fn_SaveMyMenu();
        	}
        	else{

        		if(HINTS.gds_Menu.getColumn(e.row, "LeafYn") == "N") return;

        		if(HINTS.gds_MyMenu.findRow("idcolumn", HINTS.gds_Menu.getColumn(e.row, "FormID")) > -1 ) {
        			this.alert("이미 추가된 메뉴입니다.");
        			return;
        		}

        		var bOK = HINTS.confirm( "My Menu에 추가할까요?" , "My Menu", "question" );
        		if (! bOK) return;

        		var strArgs = "";
        		var bSucc;
        		var nRow =this.ds_MyMenu.addRow();
        		bSucc = HINTS.ds_MyMenu.copyRow(nRow, HINTS.gds_Menu, e.row);

        		this.ds_MyMenu.setColumn(nRow, "ROW_STS", "I");
        		this.ds_MyMenu.setColumn(nRow, "BM_IDX", HINTS.gds_Menu.getColumn(e.row, "IDX"));
        		this.ds_MyMenu.setColumn(nRow, "UserCode", HINTS.gds_User.getColumn(0, "UserCode"));
        		this.ds_MyMenu.setColumn(nRow, "idcolumn", HINTS.gds_Menu.getColumn(e.row, "FormID"));

        		this.fn_SaveMyMenu();
        	}
        };

        this.fn_SaveMyMenu = function()
        {
        	this.ds_in.clearData();
        	for(var i = 0; i < this.ds_MyMenu.getRowCount(); i++){
        		if(  this.ds_MyMenu.getColumn(i, "ROW_STS") == "I"
        			|| this.ds_MyMenu.getColumn(i, "ROW_STS") == "U"
        			|| this.ds_MyMenu.getColumn(i, "ROW_STS") == "D"){

        			var nRow = this.ds_in.addRow();

        			this.ds_in.copyRow(nRow, this.ds_MyMenu, i);
        		}
        	}

        	var sSvcID			= "save_mymenu";
        	var sURL			= "AppSvr::CommonSaveAction_Return.do";
        	var sInDatasets		= "ds_in0=ds_in";
        	var sOutDatasets	= "ds_MyMenu=ds_out0";
        	var sArguments		= "sqlId=" + nexacro.wrapQuote("save_mymenu");

        	this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }

        this.callbackFunction = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode < 0)
        	{
        		return;
        	}

        	switch(strSvcID) {
        	case "save_mymenu":
        		this.Div_MenuGrid.form.Grid_Menu.updateToDataset();
        		break;
        	case "load_menu":
        		break;
        	default:
        	}
        }

        this.Grid_onkillfocus = function(obj,e)
        {
        	if(e.newcomponent.name == "Setfocus")
        	{

        			HINTS.gv_TabFrame.form.frame_focus.setFocus() ;
        	}
        };

        this.Grid_oncellclick = function(obj,e)
        {
        	HINTS.gv_MdiFrameSet.set_separatesize("36,*");

        	var objDs = obj.getBindDataset();
        	var strArgs = "";

        	menu = objDs.getColumn(e.row, HINTS.gv_MenuCodeCol);

         	this.gfn_openMenu(menu, strArgs);
        };

        this.fn_SetColor = function(strColor)
        {
        	switch(strColor) {
        	case "PRD":
        		this.Div_MenuGrid.form.Grid_Menu.set_background("blue");
        		break;
        	case "QA":
        		this.Div_MenuGrid.form.Grid_Menu.set_background("red");
        		break;
        	case "DEV":
        		this.Div_MenuGrid.form.Grid_Menu.set_background("yellow");
        		break;
        	default:
        	}
        }

        this.Form_onload = function(obj,e)
        {
        	this.Button_MyMenu.setSelectStatus(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.Button_MyMenu.addEventHandler("onclick",this.Button_onclick,this);
            this.Button_ExpandAll.addEventHandler("onclick",this.fn_Button_onclick,this);
            this.Button_Menu.addEventHandler("onclick",this.Button_onclick,this);
            this.Button_CollapseAll.addEventHandler("onclick",this.Button_onclick,this);
            this.Button_MenuSearch.addEventHandler("onclick",this.Button_onclick,this);
            this.Div_MenuGrid.form.Grid_Menu.addEventHandler("onrbuttondown",this.Grid_onrbuttondown,this);
            this.Div_MenuGrid.form.Grid_Menu.addEventHandler("onkillfocus",this.Grid_onkillfocus,this);
            this.Div_MenuGrid.form.Grid_Menu.addEventHandler("oncellclick",this.Grid_oncellclick,this);
        };

        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
