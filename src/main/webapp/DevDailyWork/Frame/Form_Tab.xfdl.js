(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Tab");
            this.set_titletext("Form_Tab");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,36);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button_MenuShowHide","4","4","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_fold");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab_Menu","Button_MenuShowHide:4","4",null,"32","180",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_background("transparent");
            obj.set_boxShadow("1px 1px 0px brown");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab_Menu);
            obj.set_text("Tabpage2");
            this.Tab_Menu.addChild(obj.name, obj);

            obj = new Div("Div_MDIControl",null,"0","180",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div_00");
            obj.set_color("aqua");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Button("Button_maximize","4","4","28","28",null,null,null,null,null,null,this.Div_MDIControl.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_mdi_icon01");
            this.Div_MDIControl.addChild(obj.name, obj);

            obj = new Button("Button_cascade","Button_maximize:0","4","28","28",null,null,null,null,null,null,this.Div_MDIControl.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_mdi_icon02");
            this.Div_MDIControl.addChild(obj.name, obj);

            obj = new Button("Button_horizontal","Button_cascade:0","4","28","28",null,null,null,null,null,null,this.Div_MDIControl.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_mdi_icon03");
            this.Div_MDIControl.addChild(obj.name, obj);

            obj = new Button("Button_vertical","Button_horizontal:0","4","28","28",null,null,null,null,null,null,this.Div_MDIControl.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_mdi_icon04");
            this.Div_MDIControl.addChild(obj.name, obj);

            obj = new Button("Button_minimize","Button_vertical:0","4","28","28",null,null,null,null,null,null,this.Div_MDIControl.form);
            obj.set_taborder("5");
            this.Div_MDIControl.addChild(obj.name, obj);

            obj = new Button("Button_CloseAll","Button_minimize:0","4","28","28",null,null,null,null,null,null,this.Div_MDIControl.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_mdi_icon05");
            this.Div_MDIControl.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",800,36,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Tab.xfdl","Library::Library.xjs");
        this.registerScript("Form_Tab.xfdl", function() {
        this.executeIncludeScript("Library::Library.xjs"); /*include "Library::Library.xjs"*/;


        /************************************************************************
        *
        ************************************************************************/

        this.fv_MenuShowHide = false;

        this.fv_OpenStatus = "maximize"; //새로운 프레임이 열려지는 상태
        this.fv_OpenMaxMenu = 20; //열리는 프레임 최대 갯수


        /************************************************************************
        *
        ************************************************************************/
        /*
        * desc : menu 클릭 시 클릭한 메뉴 open
        */

        this.fn_MenuOpen = function(nMenuRow)
        {
            var objTab = this.Tab_Menu;
            var objDsMenu = HINTS.gds_Menu;

            var sMenuCode   = objDsMenu.getColumn(nMenuRow, HINTS.gv_MenuCodeCol);
            var sMenuName = objDsMenu.getColumn(nMenuRow, HINTS.gv_MenuNameCol);
            var sFormUrl  = objDsMenu.getColumn(nMenuRow, HINTS.gv_MenuURLCol);
            var isDUP    = objDsMenu.getColumn(nMenuRow, HINTS.gv_MenuIsDUPCol);
            var isLeaf   = objDsMenu.getColumn(nMenuRow, HINTS.gv_MenuIsLeafCol);
        	///////////////// FormStartUpCode
        	var sFormStartUpCode   = objDsMenu.getColumn(nMenuRow, "FormStartUpCode");
        	var sFormID = sMenuCode;
        	var sFormType ="ADD";
        	var DupCount = 0;	// 중복실행카운터

        	trace("Form_Tab.fn_MenuOpen -> sFormUrl:" + sFormUrl +"  sMenuCode: "+ sMenuCode+" isDUP: " + isDUP);

        	if (this.gfn_isNull(sMenuCode)) return;
        	if (this.gfn_isNull(sFormUrl)) return;

        	if (isLeaf == "N") return;

            objTab.set_border("1 solid #d7182aff,1 solid #c7c7c7ff,1 solid #c7c7c7ff,1 solid #c7c7c7ff");	//탭 태두리

            //1. 현재 메뉴가 이미 open되어 있으면 해당화면 활성화
            var nFind = HINTS.gds_OpenMenu.findRow("MenuCode", sMenuCode)

            if (nFind >= 0){
        		if (isDUP == "Y") {
        			var bOK = HINTS.confirm( "중복 실행할까요?" , "중복실행", "question" );
        			if (bOK) {
        				DupCount = HINTS.gds_OpenMenu.getColumn(HINTS.gds_OpenMenu.findRow("MenuCode",sMenuCode), "DupCount") + 1;

        				sFormID = sMenuCode+"_"+DupCount.toString();
        				sFormType = "DUP";
        			}
        		}
        		else{
        			var nPageCnt = this.Tab_Menu.getTabpageCount();
        			var objPages = this.Tab_Menu.tabpages;
        			for(var idx=0; idx<nPageCnt; idx++){
        				if (sMenuCode == objPages[idx].name){
        					this.Tab_Menu.set_tabindex(idx);

        					if(sMenuCode == "Home") {
        						HINTS.gv_FrameSet.getActiveFrame().form.formReload();	//홈이 활성화 되면 리로드
        					}
        				}
        			}
        			return;
        		}
            }

            //2. open가능 메뉴 수 체크
            var nOpenMenuCnt = HINTS.gds_OpenMenu.getRowCount();
            if (nOpenMenuCnt >= this.fv_OpenMaxMenu){
        		this.alert("최대수 " + this.fv_OpenMaxMenu + "개를 넘었습니다");
                return;
            }


            //3. 화면 MDI로 form생성 및 조회
        	//업무영역 Size, application.gv_FrameSet --> WorkFrame Path
        	var nWidth  = HINTS.gv_FrameSet.getOffsetWidth();
        	var nHeight = HINTS.gv_FrameSet.getOffsetHeight();

        	var objChildFrame = new ChildFrame();
            objChildFrame.init(sMenuCode, 0, 0, nWidth, nHeight);
        	HINTS.gv_FrameSet.addChild(sFormID, objChildFrame);

        	objChildFrame.set_resizable(true);
        	objChildFrame.set_openstatus(this.fv_OpenStatus);
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_border("1px solid #5d6468");

        	var oParam = { FORM_ID : sFormID,
        		MENU_ID : sMenuCode,
        		MENU_NM : sMenuName,
        		FORM_URL : sFormUrl,
        		FORM_TYPE : sFormType,
        		FORM_STARTUPCODE: sFormStartUpCode};

        	//4.Work Frame에 필요한 정보 Set
        	objChildFrame.param = oParam;
        	objChildFrame.set_formurl(sFormUrl);
            objChildFrame.show();

            HINTS.gv_activeMenuId = sFormID;

            //5. page 추가(이때 바로 'Tab_Menu_onchanged' event가 발생됨)
            this.fn_AddTab(oParam);
        }


        this.fn_MDI_Arrange_onclick = function(obj,  e)
        {
        	var strType = this.gfn_Replace(obj.name, "Button_", "");

        	var arrObj = HINTS.gv_FrameSet.all;

        	switch(strType)
        	{
        	case "maximize" :
        		for(var i=0; i<arrObj.length; i++)
        		{
        			HINTS.gv_FrameSet.frames[i].set_openstatus("maximize");
        		}
        		break;
        	case "CloseAll" :
        		for(var i=arrObj.length-1; i>=0; i--)
        		{
        			if(arrObj[i].form.name == "Form_Work")	continue;

        			arrObj[i].form.close();
        			this.Tab_Menu.removeTabpage(i);
        		}
        		this.fn_SetOpenForm({FORM_TYPE: "ALL"});

        		break;
        	default :
        		HINTS.gv_FrameSet.arrange(strType);
        		break;
        	}
        }


        this.fn_AddTab = function(oParam)
        {
        	this.Tab_Menu.insertTabpage(oParam.FORM_ID, -1, "", oParam.MENU_NM);
        	this.fn_SetOpenForm(oParam);
        }

        //화면정보 global ds에 set
        this.fn_SetOpenForm = function(oParam)
        {
        	var objDs = HINTS.gds_OpenMenu;
        	switch(oParam.FORM_TYPE) {
        	case "ADD":
        		var nRow = objDs.addRow();

        		objDs.setColumn(nRow, "FORM_ID"  , oParam.FORM_ID);
        		objDs.setColumn(nRow, HINTS.gv_MenuCodeCol , oParam.MENU_ID);
        		objDs.setColumn(nRow, HINTS.gv_MenuNameCol , oParam.MENU_NM);
        		objDs.setColumn(nRow, HINTS.gv_MenuURLCol , oParam.FORM_URL);
        		objDs.setColumn(nRow, "DupCount" , 0);
        		break;
        	case "DUP":
        		var nRow = objDs.addRow();
        		var nDup = objDs.getColumn(objDs.findRow(HINTS.gv_MenuNameCol , oParam.MENU_NM),"DupCount") +1;

        		objDs.setColumn(nRow, "FORM_ID"  , oParam.FORM_ID);
        		objDs.setColumn(nRow, HINTS.gv_MenuCodeCol , oParam.MENU_ID);
        		objDs.setColumn(nRow, HINTS.gv_MenuNameCol , oParam.MENU_NM);
        		objDs.setColumn(nRow, HINTS.gv_MenuURLCol , oParam.FORM_URL);

        		for( var i=0; i < objDs.rowcount; i++){
        			var nFindRow = objDs.findRow(HINTS.gv_MenuNameCol , oParam.MENU_NM, i);
        			if (nFindRow != -1 )  {
        				objDs.setColumn(nFindRow, "DupCount" , nDup);
        			}
        		}

        		break;
        	case  "DEL":
        		var nRow = objDs.findRow("FORM_ID", oParam.FORM_ID);
        		objDs.deleteRow(nRow);
        		break;
        	case "ALL":
        		objDs.clearData();
        		break;
        	default:
        	}

        	// Home Load???
        	if ((this.Tab_Menu.tabpages.length < 1) || (HINTS.gv_FrameSet.frames.length < 1)) {
        		trace("Home Load Fn"+ " this.Tab_Menu.tabpages.length-->" + this.Tab_Menu.tabpages.length + " HINTS.gv_FrameSet.frames.length-->"+HINTS.gv_FrameSet.frames.length);
        		// Home을 항상 보여줌
        		HINTS.gv_FrameSet["WorkFrame"].form.setFocus();
        		this.fn_LoadHome(true);
        	}
        }

        this.fn_TabControl = function(sFormID, sType)
        {
        	var nCnt = this.tab_mdi.getTabpageCount();
        	for(var i=0; i<nCnt; i++)
        	{
        		if(this.tab_mdi.tabpages[i].name == sFormID)
        		{
        			if(sType == "SELECT"){
        				this.tab_mdi.set_tabindex(i);
        			}
        			else if(sType == "DELETE"){
        				this.tab_mdi.removeTabpage(i);
        				this.fn_SetOpenForm({FORM_ID:sFormID, FORM_TYPE:"DEL" });

        			}
        			return;
        		}
        	}
        }

        this.fn_LoadHome = function(bOK)
        {
        	if (bOK) {
        		var nWidth  = HINTS.gv_FrameSet.getOffsetWidth();
        		var nHeight = HINTS.gv_FrameSet.getOffsetHeight();

        		var objChildFrame = new ChildFrame();
        		objChildFrame.init("WorkFrame", 0, 0, nWidth, nHeight);
        		HINTS.gv_FrameSet.addChild("Form_Work", objChildFrame);

        		objChildFrame.set_resizable(true);
        		objChildFrame.set_openstatus("maximize");
        		objChildFrame.set_showtitlebar(false);
        		objChildFrame.set_border("1px solid #5d6468");

        		//Work Frame에 필요한 정보 Set
        		objChildFrame.set_formurl("Frame::Form_Work.xfdl");
        		objChildFrame.show();
        	}
        };

        /************************************************************************
        *
        ************************************************************************/

        this.Button_onclick = function(obj,e)
        {
        	switch (obj.name)
        	{
        	case "Button_MenuShowHide":
        		if(this.fv_MenuShowHide){
        			HINTS.gv_WorkFrameSet.set_separatesize("265,*");
        			this.Button_MenuShowHide.set_cssclass("btn_LF_fold");
        			//this.Button_MenuShowHide.set_background("url('imagerc::btn_Menu_Hide.png') no-repeat center center");
        		} else {
        			HINTS.gv_WorkFrameSet.set_separatesize("0,*");
        			this.Button_MenuShowHide.set_cssclass("btn_LF_expand");
        			//this.Button_MenuShowHide.set_background("url('imagerc::btn_Menu_Show.png') no-repeat center center");
        		}
        		this.fv_MenuShowHide = !this.fv_MenuShowHide;
        		break;
        	default:
        		this.alert("준비중입니다. (CTRL) : " + obj.id);
        		break;

        	}
        };

        /* Form related Event processing*/
        this.Form_onload = function (obj, e)
        {
        	this.Tab_Menu.removeTabpage(0);

        	this.Button_MenuShowHide.click();
        	this.Button_MenuShowHide.set_visible(false);
        }


        //page변경 시  해당화면 활성화
        this.Tab_onchanged = function(obj, e)
        {
        	var sFormID = obj.tabpages[e.postindex].name;

        	HINTS.gv_FrameSet[sFormID].form.setFocus();

        }

        //page닫기 버튼 클릭 시 (page 삭제하고, 열려있는 화면 닫기)
        this.Tab_onextrabuttonclick = function(obj, e)
        {
        	var sFormID = obj.tabpages[e.index].name;
        	obj.removeTabpage(e.index);

        	trace("Tab_Menu_onextrabuttonclick - sFormID: "+sFormID);

        	HINTS.gv_FrameSet[sFormID].form.close();

        	this.fn_SetOpenForm({FORM_ID:sFormID, FORM_TYPE:"DEL" });

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.Button_MenuShowHide.addEventHandler("onclick",this.Button_onclick,this);
            this.Tab_Menu.addEventHandler("onchanged",this.Tab_onchanged,this);
            this.Tab_Menu.addEventHandler("onextrabuttonclick",this.Tab_onextrabuttonclick,this);
            this.Div_MDIControl.form.Button_maximize.addEventHandler("onclick",this.fn_MDI_Arrange_onclick,this);
            this.Div_MDIControl.form.Button_cascade.addEventHandler("onclick",this.fn_MDI_Arrange_onclick,this);
            this.Div_MDIControl.form.Button_horizontal.addEventHandler("onclick",this.fn_MDI_Arrange_onclick,this);
            this.Div_MDIControl.form.Button_vertical.addEventHandler("onclick",this.fn_MDI_Arrange_onclick,this);
            this.Div_MDIControl.form.Button_minimize.addEventHandler("onclick",this.fn_MDI_Arrange_onclick,this);
            this.Div_MDIControl.form.Button_CloseAll.addEventHandler("onclick",this.fn_MDI_Arrange_onclick,this);
        };

        this.loadIncludeScript("Form_Tab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
