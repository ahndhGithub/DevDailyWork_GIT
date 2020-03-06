(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmGridFilterButton");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(40,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_GridFilterMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLE\" type=\"INT\" size=\"256\"/><Column id=\"VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"USERDATA\" type=\"STRING\" size=\"256\"/><Column id=\"UPMENU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">Filter</Col><Col id=\"LEVEL\">0</Col><Col id=\"CAPTION\">Filter</Col><Col id=\"ENABLE\">true</Col><Col id=\"VISIBLE\">true</Col><Col id=\"USERDATA\">0</Col></Row><Row><Col id=\"ID\">UnFilter</Col><Col id=\"LEVEL\">0</Col><Col id=\"CAPTION\">UnFilter</Col><Col id=\"ENABLE\">true</Col><Col id=\"VISIBLE\">true</Col><Col id=\"USERDATA\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_GridFilter","0","0","39","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("필터");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenuGrdFormat","0","28","100","80",null,null,null,null,null,null,this);
            obj.set_captioncolumn("CAPTION");
            obj.set_idcolumn("ID");
            obj.set_levelcolumn("LEVEL");
            obj.set_innerdataset("ds_GridFilterMenu");
            obj.set_enablecolumn("ENABLE");
            obj.set_userdatacolumn("userdatacolumn");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",40,28,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("cmmGridFilterButton.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("cmmGridFilterButton.xfdl", function() {
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        this.oFrmParnt;
        this.oDivParnt;			// 부모Div

        this.form_onload = function(obj,e)
        {
        	var gtrcPos = "cmmGridFilterButton.xfdl.form_onload";	this.gtrace("●필터온로드", gtrcPos);

        	this.gfn_getParentForm();	// 공통화폼의 경우 무조건 실행

        				this.gtrace("● 콤보공통화 : Comm_ComboConditionFromTo"				, gtrcPos);
        				this.gtrace(" - this.oFrmParnt.name    --->"+this.oFrmParnt.name		, gtrcPos);
        				this.gtrace(" - this.oDivParnt.name    --->"+this.oDivParnt.name		, gtrcPos);
        				this.gtrace(" - this.oTargetGrid       --->"+this.oTargetGrid			, gtrcPos);
        				this.gtrace(" - this.oTargetDs         --->"+this.oTargetDs				, gtrcPos);
        				this.gtrace(" - this.sInitCompVisEna   --->"+this.sInitCompVisEna		, gtrcPos);
        };

        //필터버튼클릭
        this.btn_GridFilter_onclick = function(obj,e)
        {
        	var gtrcPos = "cmmGridFilterButton.xfdl.btn_GridFilter_onclick";	this.gtrace("●필터버튼클릭", gtrcPos);


        	this.fn_SaveLayoutPopup(e.id);

        // 팝업 DIV 띄우는 버젼
        // 	var objApp = pForm.gfn_getApplication();
        //
        // 	// 위치
        // 	var x = nexacro.toNumber(nexacro.System.getCursorX()) - nexacro.toNumber(system.clientToScreenX(objApp.mainframe, 0));
        // 	var y = nexacro.toNumber(nexacro.System.getCursorY()) - nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0));
        // 																		this.gtrace("x,y--->("+x+","+y+")", gtrcPos);
        //
        // 	this.PopupMenuGrdFormat.trackPopup(x, y);



        };

        //필터메뉴팝업에서 클릭했을때 실행
        this.PopupMenuGrdFormat_onmenuclick = function(obj,e)
        {
        	var gtrcPos = "cmmGridFilterButton.xfdl.PopupMenuGrdFormat_onmenuclick";	this.gtrace("●이벤트발생:온클릭(메뉴)", gtrcPos);

        	this.fn_SaveLayoutPopup(e.id);
        };

        //필터메뉴팝업에서 클릭했을때 실행
        this.fn_SaveLayoutPopup = function(sMenuId)
        {
        	var gtrcPos = "cmmGridFilterButton.xfdl.fn_SaveLayoutPopup";	this.gtrace("●메뉴팝업클릭", gtrcPos);

        	var sPopupId;
        	var sTmpPopTitle;
        	var sTmpUrl = "Popup::PopupSaveLayout.xfdl"
        	var sTmpNum = this.oFrmParnt.name;
        	var sTmpObj = eval("this.oFrmParnt."+this.oDivParnt.targetGrid);


        											this.gtrace("sMenuId--->"+sMenuId, gtrcPos);


        	{	//	필터 스위치
        		var obj = sTmpObj;
        		var grid = sTmpObj;

        		if (obj.showFilter != true)
        		{
        			grid.set_cellmovingtype("none");
        			grid.set_cellsizingtype("none");
        			obj.showFilter = true;
        			this.showHeadAppendFilter(grid);
        		}
        		else
        		{
        			grid.set_cellmovingtype("col");
        			grid.set_cellsizingtype("col");
        			obj.showFilter = false;
        			this.hideHeadAppendFilter(grid);
        		}
        	}
        // 	{	//	이전
        // 		switch(sMenuId)
        // 		{
        // 			case "Filter"	: this.gfn_gridFilter(this.oTargetGrid);
        // 				break;
        //
        // 			case "UnFilter" : this.gfn_gridUnFilter(this.oTargetGrid);
        // 				break;
        // 			default :
        // 				break;
        // 		}
        // 	}

        // 	{ //	1. 팝업 띄우기
        // 		sPopupId 	= sMenuId;
        // 		//팝업의 TitleText
        // 		sPopTitle	= sTmpPopTitle;
        // 		sUrl      	= sTmpUrl;
        // 		oArg      	= {pStr:sMenuId, pNum:sTmpNum, pObj:sTmpObj};	//	전달변수 : pStr : 메뉴아이디
        // 		sCallBack 	= "fn_popupCallback";
        // 		oOption   	= {title : sPopTitle};
        //
        // 		this.gfn_openPopup(sPopupId, sUrl, oArg, sCallBack, oOption);
        // 	}
        }

        /**
        * @description 콜백
        */
        this.fn_popupCallback = function(sPopId, sRtn)
        {
        	var gtrcPos = "cmmGridFilterButton.xfdl.fn_popupCallback";	this.gtrace("●팝업콜백", gtrcPos);
        													this.gtrace("sPopId--->"+sPopId, gtrcPos);
        	switch(sPopId)
        	{
        // 		case "Filter" :
        //
        // 			break;
        //
        		default :

        			break;
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_GridFilter.addEventHandler("onclick",this.btn_GridFilter_onclick,this);
            this.PopupMenuGrdFormat.addEventHandler("onmenuclick",this.PopupMenuGrdFormat_onmenuclick,this);
        };

        this.loadIncludeScript("cmmGridFilterButton.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
