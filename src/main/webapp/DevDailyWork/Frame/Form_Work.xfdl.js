(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Main_Home");
            this.set_titletext("Home(관리자)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Grid","244","137","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Grid Sample");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button_Tx","244","225","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Transact Samle");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button_Grid_Obj","394","137","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Grid Sample_Obj");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button_POList","394","227","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Purchase Order");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Work.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.addIncludeScript("Form_Work.xfdl","Library::Library.xjs");
        this.registerScript("Form_Work.xfdl", function() {
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;
        this.executeIncludeScript("Library::Library.xjs"); /*include "Library::Library.xjs"*/;

        this.Button_onclick = function(obj,e)
        {
        													var gtrcPos = "Form_Work.xfdl.Button_onclick";
        													this.gtrace("obj.name--->"+obj.name, gtrcPos);
        	//Test 로 입력함
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
        	switch(obj.name) {
        	case "Button_Tx":
        		this.gfn_openMenu("TxTest","");
        		break;
        	case "Button_Grid":
        		this.gfn_openMenu("GridDemo","");
        		break;
        	case "Button_Grid_Obj":
        		this.gfn_openMenu("GridDemo_Obj","");
        		break;
        	case "Button_POList":
        		this.gfn_openMenu("POList","");
        		break;
        	default:
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_Onload,this);
            this.Div00.form.Button_Grid.addEventHandler("onclick",this.Button_onclick,this);
            this.Div00.form.Button_Tx.addEventHandler("onclick",this.Button_onclick,this);
            this.Div00.form.Button_Grid_Obj.addEventHandler("onclick",this.Button_onclick,this);
            this.Div00.form.Button_POList.addEventHandler("onclick",this.Button_onclick,this);
        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
