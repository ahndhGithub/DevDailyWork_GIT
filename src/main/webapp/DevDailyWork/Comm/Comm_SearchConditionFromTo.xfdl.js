(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmSearchConditionFromTo");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(413,21);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_FromTo", this);
            obj._setContents("<ColumnInfo><Column id=\"From\" type=\"STRING\" size=\"256\"/><Column id=\"To\" type=\"STRING\" size=\"256\"/><Column id=\"List\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","181","0","28","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("To");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("EditFrom","0","0","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("EditTo","220","0","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnFrom","150","0","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search");
            obj.set_text("");
            obj.getSetter("EditNameToApply").set("From");
            this.addChild(obj.name, obj);

            obj = new Button("btnTo","370","0","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_search");
            obj.set_text("");
            obj.getSetter("EditNameToApply").set("To");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiSelect",null,"0","21","21","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_pop1");
            obj.set_text("");
            obj.getSetter("EditNameToApply").set("List");
            this.addChild(obj.name, obj);

            obj = new Edit("EditList","0","30","391","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("essential");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",413,21,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","EditFrom","value","ds_FromTo","From");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","EditTo","value","ds_FromTo","To");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","EditList","value","ds_FromTo","List");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Comm_SearchConditionFromTo.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("Comm_SearchConditionFromTo.xfdl", function() {
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        /**
        *  @MenuPath    Comm > Comm_CalFromTo (공통 기간달력)
        *  @FileName 	Comm_CalFromTo.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2019.01.10
        *  @Desction    기간달력
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2019.01.10     	Education 	               최초 생성
        *******************************************************************************
        */

        this.sSearchConditionType  	;
        this.oBindDs  				;
        this.oBindFromCol 			;
        this.oBindToCol 			;
        this.oBindListCol 			;
        var ds_SearchConditionType = this.gfn_getApplication().gds_SearchConditionType;

        this.form_onload = function(obj,e)
        {
        	var gtrcPos = "Comm_SearchConditionFromTo.xfdl.form_onload";

        	{	// 1. 공통화폼의 경우 무조건 실행
        		this.gfn_getParentForm();

        		this.gtrace(" - this.oFrmParnt.name    --->"+this.oFrmParnt.name		, gtrcPos);
        		this.gtrace(" - this.oDivParnt.name    --->"+this.oDivParnt.name		, gtrcPos);
        		this.gtrace(" - this.oTargetGrid       --->"+this.oTargetGrid			, gtrcPos);
        		this.gtrace(" - this.oTargetDs         --->"+this.oTargetDs				, gtrcPos);
        		this.gtrace(" - this.sInitCompVisEna   --->"+this.sInitCompVisEna		, gtrcPos);
        	}
        	{	//	2. readonly / enable 설정
        		switch(this.oFrmParnt.name)
        		{
        			case "PopupMassInput" :	this.EditFrom.set_readonly(true);
        				break;
        			default : break;
        		}

        	}
        	{	//	3. userproperty를 통해 전역에 타입,바인딩DS,컬럼 세팅
        		var arrUserProp = this._getUserProperty("this.parent","SearchConditionType");	this.gtrace("this.parent.SearchConditionType--->"+this.parent.SearchConditionType, gtrcPos);

        		this.sSearchConditionType  	= nexacro.trim(this.gfn_nvl(arrUserProp[0],""));					this.gtrace("sSearchConditionType--->"+this.sSearchConditionType, gtrcPos);
        		this.oBindDs  				= this.oFrmParnt.lookup(this.gfn_nvl(arrUserProp[1],""));			this.gtrace("oBindDs.name --->"+this.oBindDs.name, gtrcPos);
        		this.oBindFromCol 			= nexacro.trim(this.gfn_nvl(arrUserProp[2],""));                    this.gtrace("oBindFromCol--->"+this.oBindFromCol, gtrcPos);
        		this.oBindToCol 			= nexacro.trim(this.gfn_nvl(arrUserProp[3],""));                    this.gtrace("oBindToCol--->"+this.oBindToCol, gtrcPos);
        		this.oBindListCol			= nexacro.trim(this.gfn_nvl(arrUserProp[4],""));                    this.gtrace("oBindListCol--->"+this.oBindListCol, gtrcPos);
        	}

        	{
        		// oncolumnchanged 이벤트 추가
        		this.oBindDs.addEventHandler("oncolumnchanged", this.fn_parentDsChanged, this);

        		// onrowposchanged 이벤트 추가
        		this.oBindDs.addEventHandler("onrowposchanged", this.fn_parentDsRowposchanged, this);
        	}

        	{	//  9. 기본호출 ( 그리드, 초기화 )
        		//	this.gfn_formOnLoad(this);
        		this.fn_init();
        	}
        };

        this.fn_parentDsChanged = function(objDs, e)
        {
        		var gtrcPos = "Comm_SearchConditionFromTo.xfdl.fn_parentDsChanged";
        			this.gtrace("● 온컬럼체인지드 : fn_parentDsChanged", gtrcPos);
        // 	var arrFromStr 	= ["_sta","1"];	//나중에...
        // 	var arrToStr 	= ["_end","2"];
        // 	var arrListStr 	= ["_list"];

        	var sColId 		= e.columnid;					this.gtrace("sColId --->"+sColId 	,gtrcPos);
        	if(sColId==this.oBindFromCol
        	|| sColId==this.oBindToCol
        	|| sColId==this.oBindListCol)
        	{
        		var iFromNdx 	= sColId.indexOf("_sta");		this.gtrace("iFromNdx --->"+iFromNdx 	,gtrcPos);
        			iFromNdx = (iFromNdx==-1?sColId.indexOf("1"):iFromNdx);
        		var iToNdx		= sColId.indexOf("_end");		this.gtrace("iToNdx	--->"+iToNdx		,gtrcPos);
        			iToNdx = (iToNdx==-1?sColId.indexOf("2"):iToNdx);
        		var iListNdx	= sColId.indexOf("_list");		this.gtrace("iListNdx --->"+iListNdx	,gtrcPos);
        		var sFromToList = (iFromNdx > -1 ? "From" : (iToNdx > -1 ? "To" : (iListNdx > -1 ? "List" : null)));

        		var setDsCol;
        		switch(sFromToList){
        			case "From" : 	setDsCol = this.oBindFromCol;	break;
        			case "To" 	: 	setDsCol = this.oBindToCol;		break;
        			case "List" : 	setDsCol = this.oBindListCol;	break;
        			default : break;
        		}

        		if(setDsCol == e.columnid)
        		{
        			this.ds_FromTo.setColumn(0, sFromToList, e.newvalue);
        		}
        	}
        }


        this.fn_parentDsRowposchanged = function(objDs, e)
        {
        	var gtrcPos = "Comm_SearchConditionFromTo.xfdl.fn_parentDsRowposchanged";
        	this.gtrace("● ROW_POS_CHANGED", gtrcPos);

        	if(e.reason == Dataset.REASON_ROWCHANGE && e.newrow == 0)
        	{
        		this.ds_FromTo.addRow();
        	}

        	// 	trace("objDs--->"+objDs.name);
        	// 	trace("e.eventid--->"+e.eventid);
        	// 	trace("e.fromobject--->"+e.fromobject);
        	// 	trace("e.fromreferenceobject--->"+e.fromreferenceobject);
        	// 	trace("e.newrow--->"+e.newrow);
        	// 	trace("e.oldrow--->"+e.oldrow);
        	// 	trace("e.reason--->"+e.reason);
        	//
        }

        /**
        * @description 초기화
        */
        this.fn_init = function()
        {
        	//1.데이터셋
        	this.ds_FromTo.clearData();
        	this.ds_FromTo.addRow();

        	//2.리스트창 위치를 맞춤
        	this.EditList.set_top(0);
        };

        /**
        * @description 검색버튼 클릭
        */
        this.div_search_btn_onclick = function(obj,e)
        {
        			var gtrcPos = "Comm_SearchConditionFromTo.xfdl.div_search_btn_onclick";	// trace위치 세팅
        	var sSearchCond;
        	var sPopupId;
        	var sPrevMultiText;
        	var sSrchCndTp = this.sSearchConditionType;

        	{ //	1. 팝업 띄우기
        		if(obj.name == "btnMultiSelect"){
        			sSearchCond = "MultiSelect";
        			sPopupId = sSearchCond;
        			sPrevMultiText = this.ds_FromTo.getColumn(0, "List");
        		}
        		else{
        			sSearchCond = this.sSearchConditionType;
        			sPopupId 	= this.oFrmParnt.name;
        			sPrevMultiText = "";
        		}
        		//팝업의 URL
        		var sPopUrl 	= ds_SearchConditionType.lookup("TypeCode",sSearchCond, "PopupUrl");		this.gtrace("sPopUrl--->"+sPopUrl, gtrcPos);

        		if(!this.gfn_isNull(sPopUrl))
        		{
        			//팝업의 TitleText
        			var sPopTitle	= this.gfn_getWord(ds_SearchConditionType.lookup("TypeCode",sSearchCond, "PopupTitle"));	this.gtrace("sPopTitle--->"+sPopTitle, gtrcPos);
        			var sUrl      	= sPopUrl;
        			var oArg      	= {pStr:sPrevMultiText, pNum:sSrchCndTp, pObj:obj.EditNameToApply};
        			var sCallBack 	= "fn_popupCallback";
        			var oOption   	= {title : sPopTitle};

        			this.gfn_openPopup(sPopupId, sUrl, oArg, sCallBack, oOption);

        		}
        	}
        };

        /**
        * @description 콜백
        */
        this.fn_popupCallback = function(sPopId, sRtn)
        {
        			var gtrcPos = "Comm_SearchConditionFromTo.xfdl.fn_popupCallback";
        													this.gtrace("sPopId--->"+sPopId, gtrcPos);
        													this.gtrace("JSON.parse(sRtn)--->"	+JSON.parse(sRtn), gtrcPos);
        	var objRtn 		= 	JSON.parse(sRtn);			this.gtrace("objRtn--->"	+objRtn, gtrcPos);

        	switch(sPopId)
        	{
        		default :
        			var dsSetCol 		;
        			var sKey			;
        			var sName			;
        			var	sEtc_00			;
        			var	sEtc_10			;

        			if(!this.gfn_isNull(sRtn))
        			{	//0.리턴값 데이터셋에 세팅

        				dsSetCol 	= 	objRtn.rtnObj;				this.gtrace("dsSetCol--->"	+dsSetCol, gtrcPos);
        				sKey		=	objRtn.sRtnKey;				this.gtrace("sKey	--->"	+sKey	, gtrcPos);
        				sName		=	objRtn.sRtnName;			this.gtrace("sName	--->"	+sName	, gtrcPos);
        				sEtc_00		=	objRtn.sRtnEtc_00;			this.gtrace("sEtc_00--->"	+sEtc_00, gtrcPos);
        				sEtc_10		=	objRtn.sRtnEtc_10;			this.gtrace("sEtc_10--->"	+sEtc_10, gtrcPos);

        				this.ds_FromTo.setColumn(0, dsSetCol, sKey);	//	oncolumnchanged 이벤트 --> 부모 데이터셋에 바로 세팅
        			}

        			break;

        		case "PopupMassInput":	//	단순히 코드 + 이름만 넘길 경우
        				this.ds_FromTo.setColumn(0, "From"	, objRtn.sRtnKey);		//	Code
        				this.ds_FromTo.setColumn(0, "To"	, objRtn.sRtnEtc_00);	//	Name
        			break;
        	}
        }

        this.ds_FromTo_oncolumnchanged = function(obj,e)
        {
        											var gtrcPos = "Comm_SearchConditionFromTo.xfdl.ds_FromTo_oncolumnchanged";
        												this.gtrace("e.columnid				>"+e.columnid						,gtrcPos);
        												this.gtrace("sSearchConditionTypes	>"+this.sSearchConditionType		,gtrcPos);
        												this.gtrace("oBindFromCol			>"+this.oBindFromCol				,gtrcPos);
        												this.gtrace("oBindToCol				>"+this.oBindToCol					,gtrcPos);
        												this.gtrace("oBindListCol			>"+this.oBindListCol				,gtrcPos);

        	{	//부모데이터셋에 값 세팅
        		var sParentSetCol;
        		switch(e.columnid){
        			case "From" : sParentSetCol = this.oBindFromCol;	break;
        			case "To" 	: sParentSetCol = this.oBindToCol; 		break;
        			case "List" : sParentSetCol = this.oBindListCol;
        						  // 값이 없는 경우 List 메세지를 숨김
        						  if(this.gfn_nvl(obj.getColumn(0, "List"),"")==""){
        							this.EditList.set_visible(false);
        						  }else{
        							this.EditList.set_visible(true);
        						  }
        					break;
        			default : 	break;
        		}

        		this.oBindDs.setColumn(0, sParentSetCol, e.newvalue);
        	}

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnFrom.addEventHandler("onclick",this.div_search_btn_onclick,this);
            this.btnTo.addEventHandler("onclick",this.div_search_btn_onclick,this);
            this.btnMultiSelect.addEventHandler("onclick",this.div_search_btn_onclick,this);
            this.ds_FromTo.addEventHandler("oncolumnchanged",this.ds_FromTo_oncolumnchanged,this);
        };

        this.loadIncludeScript("Comm_SearchConditionFromTo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
