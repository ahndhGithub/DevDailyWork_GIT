(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmGridAddDelButton");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(40,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_GridFormatMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLE\" type=\"INT\" size=\"256\"/><Column id=\"VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"USERDATA\" type=\"STRING\" size=\"256\"/><Column id=\"UPMENU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">SaveLayout</Col><Col id=\"LEVEL\">0</Col><Col id=\"CAPTION\">SaveLayout</Col><Col id=\"ENABLE\">true</Col><Col id=\"VISIBLE\">true</Col><Col id=\"USERDATA\">0</Col></Row><Row><Col id=\"ID\">LoadLayout</Col><Col id=\"LEVEL\">0</Col><Col id=\"CAPTION\">LoadLayout</Col><Col id=\"ENABLE\">true</Col><Col id=\"VISIBLE\">true</Col><Col id=\"USERDATA\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_GridFormat","0","0","39","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("포맺");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenuGrdFormat",null,"28","80","80","-40",null,null,null,null,null,this);
            obj.set_captioncolumn("CAPTION");
            obj.set_idcolumn("ID");
            obj.set_levelcolumn("LEVEL");
            obj.set_innerdataset("ds_GridFormatMenu");
            obj.set_enablecolumn("ENABLE");
            obj.set_userdatacolumn("userdatacolumn");
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
        this.addIncludeScript("cmmFormatMenuButton.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("cmmFormatMenuButton.xfdl", function() {
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        this.oDivParnt;			// 부모Div

        this.form_onload = function(obj,e)
        {
        									var gtrcPos = "Comm_GridAddDelButton.form_onload";
        	// 0.선언
        	var sEvFrm;

        	{	//	1. 스콥 확인용
        // 											this.gtrace("this.parent.form.name--->"+this.parent.form.name, gtrcPos);
        // 											this.gtrace("this.parent.form.parent.name--->"+this.parent.form.parent.name, gtrcPos);
        // 												this.gtrace("this.parent.form.parent.form.name--->"+this.parent.form.parent.form.name, gtrcPos);
        // 											this.gtrace("this.parent.form.parent.parent.name--->"+this.parent.form.parent.parent.parent.name, gtrcPos);
        // 													this.gtrace("this.parent.form.parent.parent.form.name--->"+this.parent.form.parent.parent.parent.form.name, gtrcPos);
        // 											this.gtrace("this.parent.form.parent.parent.parent.name--->"+this.parent.form.parent.parent.parent.name, gtrcPos);
        // 											this.gtrace("this.parent.form.parent.parent.parent.parent.name--->"+this.parent.form.parent.parent.parent.parent.name, gtrcPos);
        // 											this.gtrace("this.parent.form.parent.parent.parent.parent.parent.parent.name--->"+this.parent.form.parent.parent.parent.parent.parent.parent.name, gtrcPos);
        // 											this.gtrace("this.parent.form.parent.parent.parent.parent.name--->"+this.parent.form.parent.parent.parent.parent.name, gtrcPos);
        // 											this.gtrace("this.parent.form.parent.parent.parent.parent.parent.name--->"+this.parent.form.parent.parent.parent.parent.parent.name, gtrcPos);
        // 											this.gtrace("this.parent.form.parent.parent.parent.parent.parent.parent.name--->"+this.parent.form.parent.parent.parent.parent.parent.parent.name, gtrcPos);
        // 											this.gtrace("this.parent.form.parent.parent.parent.parent.parent.parent.parent.name--->"+this.parent.form.parent.parent.parent.parent.parent.parent.parent.name, gtrcPos);
        // 											this.gtrace("this.parent.form.parent.parent.parent.parent.parent.parent.parent.parent.name--->"+this.parent.form.parent.parent.parent.parent.parent.parent.parent.parent.name, gtrcPos);
        	}

        	var arrTargetGrid;
        	var pFormName;
        	var pTargeGridName;

        	{	//	1. UserProperty 가져오기
        						this.gtrace("this.parent.form.parent.targetGrid--->"+this.parent.form.parent.targetGrid, gtrcPos);
        		//	this.oDivParnt = this.parent.form.parent;
        		this.oDivParnt = this.parent;
        	}

        	{	//	2. 부모 폼 가져오기 - Frame 바로 전 단계의 폼을 가져온다.
        // 		var sGridFullName;
        // 		var oTargetGrid;
        // 			sEvFrm = "this.parent.form";	//cmmGridAddDelButton
        //
        // 		while(!(eval(sEvFrm) instanceof nexacro.Frame)){
        // 			sEvFrm += ".parent";
        // 		}
        //
        // 		// 한단계 전으로
        // 		sEvFrm = sEvFrm.replace("this.parent.form.parent","this.parent.form");	//	this.parent.form.parent.parent.parent.parent.parent.parent
        //
        // 		//오브젝트화
        // 		this.oFrmParnt = eval(sEvFrm);		this.gtrace("this.oFrmParnt---->"+this.oFrmParnt.name, gtrcPos);
        		this.oFrmParnt				=	this.gfn_getTopLevelForm(this);
        	}


         	{	//	3. 버튼 Enable / Disable 처리 : 부모폼의 세팅값(미정)에 따라 활성화 여부를 결정하는 로직 향후 필요함.
        // 		var arrInitSts = this.InitCompVisEna.split(",");
        // 		var arrVis = arrInitSts[0].split(":");
        // 		var arrEna = arrInitSts[1].split(":");
        // 					this.gtrace("this.arrBtns.length--->"+this.arrBtns.length, gtrcPos);
        //
        // 		// 이 순서를 바꾸지 말자
        // 		this.arrBtns.push(this.btn_add);		//1.
        // 		this.arrBtns.push(this.btn_del);		//2.
        // 		this.arrBtns.push(this.btn_delMulti);	//3.
        //
        // 		for(var i=0;i<this.arrBtns.length;i++){
        // 			this.arrBtns[i].set_visible((arrVis[i]=="1"?true:false));
        // 			this.arrBtns[i].set_enable((arrEna[i]=="1"?true:false));
        //		}
        	}
        		this.gtrace("<-------------------END------------------->", gtrcPos);
        };

        //포맷메뉴팝업
        this.btn_GridFormat_onclick = function(obj,e)
        {
        	var gtrcPos = "cmmFormatMenuButton.xjs.btn_GridFormat_onclick";
        	this.gtrace("●포맷버튼클릭", gtrcPos);

        	var pPos = this.gfn_getOffsetTopFromTopLevel(obj);

        	var x = Eco.number.plus(nexacro.toNumber(pPos[0]), nexacro.toNumber(this.PopupMenuGrdFormat.width) * -1, nexacro.toNumber(obj.width));
        	var y = Eco.number.plus(nexacro.toNumber(pPos[1]), nexacro.toNumber(obj.height));
        	x = x + 2;
        	y = y + 2;

        	this.PopupMenuGrdFormat.trackPopup(x, y);

        //	var objApp = pForm.gfn_getApplication();

        // 	var btnPos = Eco.XComp.PositionSize.getTopLevelFormBox(this.btn_GridFormat);
        // 	var btnPos2 = Eco.XComp.PositionSize.convertXY(this.oFrmParnt,[0,0], this.parent);
        // 	var btnPos3 = Eco.XComp.PositionSize.getTopLevelFormBox(this.parent);
        // 	var btnPos4 = Eco.XComp.PositionSize.getTopLevelFormBox(this.oFrmParnt);
        // 	var btnPos5 = system.screenToClientY(this.oFrmParnt, 0);

        //	trace("gfn_getOffsetTopFromTopLevel---->"+this.gfn_getOffsetTopFromTopLevel(obj));
        // 	trace("?????"+e.clientx + this.parent.getOffsetLeft());
        // 	trace("?????"+this.parent.posX);
        // 	trace("?????"+e.clienty + this.parent.getOffsetTop());
        // 	trace("e.clienty?????"+e.clienty);
        // 	trace("this.parent.getOffsetTop()?????"+this.parent.getOffsetTop());
        // 	trace("this.parent.getOffsetTop()?????"+this.parent.parent.getOffsetTop());
        // 	trace("this.parent.getOffsetTop()?????"+this.parent.parent.parent.getOffsetTop());
        // 	trace("this.parent.getOffsetTop()?????"+this.parent.parent.parent.parent.getOffsetTop());
        // 	trace("this.parent.getOffsetTop()?????"+this.parent.parent.parent.parent.parent.getOffsetTop());
        // 	trace("this.parent.getOffsetTop()?????"+this.parent.parent.parent.parent.parent.parent.getOffsetTop());
        //
        // 	trace("clientPos-->("+e.clientx+","+e.clienty+")");
        // 	trace("canvasPos-->("+e.canvasx+","+e.canvasy+")");
        // 	trace("this.oFrmParnt--->"+this.oFrmParnt.name);
        // 	trace("this.parent.name---->"+this.parent.name);
        // 	trace("btnPos---->"+btnPos);
        // 	trace("btnPos2---->"+btnPos2);
        // 	trace("btnPos3---->"+btnPos3);
        // 	trace("btnPos4---->"+btnPos4);
        // 	trace("btnPos5---->"+btnPos5);
        //
        // 	trace("nexacro.System.getCursorY()--->"+nexacro.System.getCursorY());
        // 	trace("nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0))--->"+nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0)));
        // 	trace("nexacro.toNumber(system.clientToScreenY(parent, 0))--->"+nexacro.toNumber(system.clientToScreenY(this.parent, 0)));
        // 	trace("nexacro.toNumber(system.clientToScreenY(parent.parent, 0))--->"+nexacro.toNumber(system.clientToScreenY(this.parent.parent, 0)));
        // 	trace("nexacro.toNumber(system.clientToScreenY(parent.parent.parent, 0))--->"+nexacro.toNumber(system.clientToScreenY(this.parent.parent.parent, 0)));
        // 	trace("nexacro.toNumber(system.clientToScreenY(parent.parent.parent.parent, 0))--->"+nexacro.toNumber(system.clientToScreenY(this.parent.parent.parent.parent, 0)));
        // 	trace("nexacro.toNumber(system.clientToScreenY(parent.parent.parent.parent.parent, 0))--->"+nexacro.toNumber(system.clientToScreenY(this.parent.parent.parent.parent.parent, 0)));
        //
        //
        // 	trace("nexacro.toNumber(system.screenToClientY(objApp.mainframe, 0))--->"+nexacro.toNumber(system.screenToClientY(objApp.mainframe, 0)));
        // 	trace("nexacro.toNumber(system.screenToClientY(parent, 0))--->"+nexacro.toNumber(system.screenToClientY(this.parent, 0)));
        // 	trace("nexacro.toNumber(system.screenToClientY(parent.parent, 0))--->"+nexacro.toNumber(system.screenToClientY(this.parent.parent, 0)));
        // 	trace("nexacro.toNumber(system.screenToClientY(parent.parent.parent, 0))--->"+nexacro.toNumber(system.screenToClientY(this.parent.parent.parent, 0)));
        // 	trace("nexacro.toNumber(system.screenToClientY(parent.parent.parent.parent, 0))--->"+nexacro.toNumber(system.screenToClientY(this.parent.parent.parent.parent, 0)));
        // 	trace("nexacro.toNumber(system.screenToClientY(parent.parent.parent.parent.parent, 0))--->"+nexacro.toNumber(system.screenToClientY(this.parent.parent.parent.parent.parent, 0)));


        // 	var x = nexacro.toNumber(btnPos[0]) - nexacro.toNumber(this.PopupMenuGrdFormat.width) + nexacro.toNumber(btnPos[3]);
        // 	var y = nexacro.toNumber(btnPos[1]) + nexacro.toNumber(btnPos[3]);

        //	this.gtrace("x,y--->("+x+","+y+")", gtrcPos);	//	위치는 도저히 모르겠다...
        //	trace("x,y--->("+x+","+y+")");
        // 	trace("PopupMenuGrdFormat.width---->"+this.PopupMenuGrdFormat.width);
        // 	trace("PopupMenuGrdFormat.height---->"+this.PopupMenuGrdFormat.height);
        	//	this.PopupMenuGrdFormat.trackPopup(this.PopupMenuGrdFormat.x, this.PopupMenuGrdFormat.y);

        	// 대상 그리드와 셀 정보를 추가
        // 	objGrid.popupMenu.grid = objGrid;
        // 	objGrid.popupMenu.cellindex = e.cell;
        // 	objGrid.popupMenu.rowindex = e.row;
        // 	this.gtrace("nexacro.System.getCursorY()--->"+nexacro.System.getCursorY(), gtrcPos);
        // 	this.gtrace("nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0))--->"+nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0)), gtrcPos);
        // 	trace("nexacro.System.getCursorY()--->"+nexacro.System.getCursorY());
        // 	trace("nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0))--->"+nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0)));
        // 	trace("clientPos-->("+e.clientx+","+e.clienty+")");
        // 	trace("canvasPos-->("+e.canvasx+","+e.canvasy+")");
        // 	trace("Eco....getTopLevelFormBox[1]--->"+Eco.XComp.PositionSize.getTopLevelFormBox(this.parent)[1]);
        	// 위치는 다시 한번 봐야 한다.
        	//	var x = nexacro.toNumber(nexacro.System.getCursorX()) - nexacro.toNumber(system.clientToScreenX(objApp.mainframe, 0));
        	//	var y = nexacro.toNumber(nexacro.System.getCursorY()) - nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0)) - 100;
        	//	var y = nexacro.toNumber(nexacro.System.getCursorY()) - this.parent.y;	//	obj.y;//	nexacro.toNumber(nexacro.System.getCursorY()) - e.clienty;
        // 	trace("Eco.convertXY---->"+Eco.XComp.PositionSize.convertXY(obj,[0,0], this.parent.parent));
        // 	trace("Eco.XComp.PositionSize.getTopLevelFormBox(this.parent.parent)-->"+Eco.XComp.PositionSize.getTopLevelFormBox(this.parent.parent));
        //	trace("btnPos--->"+btnPos);
        	//	var x = Eco.number.plus(btnPos[0], btnPos[2]); trace("x---->"+x);
        	//	var y = Eco.number.plus(btnPos[1], btnPos[3]); trace("y---->"+y);
        //	Eco.XComp.PositionSize.getTopLevelFormBox(this.btn_GridFormat)

        };

        //포맷메뉴팝업에서 클릭했을때 실행
        this.PopupMenuGrdFormat_onmenuclick = function(obj,e)
        {
        	this.fn_SaveLayoutPopup(e.id);
        };

        //포맷메뉴팝업에서 클릭했을때 실행
        this.fn_SaveLayoutPopup = function(sMenuId)
        {
        	var sPopupId;
        	var sTmpPopTitle;
        	var sTmpUrl = "Popup::PopupSaveLayout.xfdl"
        	var sTmpNum = this.oFrmParnt.name;
        	var sTmpObj = eval("this.oFrmParnt."+this.oDivParnt.targetGrid);

        					var gtrcPos = "cmmGridAddDelButton.xfdl.fn_SaveLayoutPopup";
        							this.gtrace("sMenuId--->"+sMenuId, gtrcPos);
        	{
        		switch(sMenuId)
        		{
        			case "SaveLayout" :	sTmpPopTitle	= this.gfn_getWord("popup.SaveLayout");	//	팝업타이틀텍스트
        				break;
        			case "LoadLayout" : sTmpPopTitle	= this.gfn_getWord("popup.LoadLayout");	//	팝업타이틀텍스트
        				break;
        			default :
        				break;
        		}
        	}
        	{ //	1. 팝업 띄우기
        		sPopupId 	= sMenuId;
        		//팝업의 TitleText
        		sPopTitle	= sTmpPopTitle;
        		sUrl      	= sTmpUrl;
        		oArg      	= {pStr:sMenuId, pNum:sTmpNum, pObj:sTmpObj};	//	전달변수 : pStr : 메뉴아이디
        		sCallBack 	= "fn_popupCallback";
        		oOption   	= {title : sPopTitle};

        		this.gfn_openPopup(sPopupId, sUrl, oArg, sCallBack, oOption);
        	}
        }

        /**
        * @description 콜백
        */
        this.fn_popupCallback = function(sPopId, sRtn)
        {
        			var gtrcPos = "cmmGridAddDelButton.xfdl.fn_popupCallback";
        													this.gtrace("sPopId--->"+sPopId, gtrcPos);
        	switch(sPopId)
        	{
        // 		case "SaveLayout" :
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
            this.btn_GridFormat.addEventHandler("onclick",this.btn_GridFormat_onclick,this);
            this.PopupMenuGrdFormat.addEventHandler("onmenuclick",this.PopupMenuGrdFormat_onmenuclick,this);
        };

        this.loadIncludeScript("cmmFormatMenuButton.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
