(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_ComboConditionFromTo");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,21);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_FromTo", this);
            obj._setContents("<ColumnInfo><Column id=\"From\" type=\"STRING\" size=\"256\"/><Column id=\"To\" type=\"STRING\" size=\"256\"/><Column id=\"List\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CmcdMap", this);
            obj._setContents("<ColumnInfo><Column id=\"Type\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Type\">SalesGroup</Col><Col id=\"CODE_CD\">BU_CD</Col><Col id=\"CODE_NM\">BU_NM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ColIdType", this);
            obj._setContents("<ColumnInfo><Column id=\"ColName\" type=\"STRING\" size=\"256\"/><Column id=\"FTL_Type\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ColName\">p_osno1</Col><Col id=\"FTL_Type\">From</Col></Row><Row><Col id=\"ColName\">p_osno2</Col><Col id=\"FTL_Type\">To</Col></Row><Row><Col id=\"ColName\">p_osno_list</Col><Col id=\"FTL_Type\">List</Col></Row><Row><Col id=\"ColName\">p_matnr1</Col><Col id=\"FTL_Type\">From</Col></Row><Row><Col id=\"ColName\">p_matnr2</Col><Col id=\"FTL_Type\">To</Col></Row><Row><Col id=\"ColName\">p_matnr_list</Col><Col id=\"FTL_Type\">List</Col></Row><Row><Col id=\"ColName\">p_mtl_matnr1</Col><Col id=\"FTL_Type\">From</Col></Row><Row><Col id=\"ColName\">p_mtl_matnr2</Col><Col id=\"FTL_Type\">To</Col></Row><Row><Col id=\"ColName\">p_mtl_matnr_list</Col><Col id=\"FTL_Type\">List</Col></Row><Row><Col id=\"ColName\">p_supply1</Col><Col id=\"FTL_Type\">From</Col></Row><Row><Col id=\"ColName\">p_supply2</Col><Col id=\"FTL_Type\">To</Col></Row><Row><Col id=\"ColName\">p_supply_list</Col><Col id=\"FTL_Type\">List</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnMultiSelect","392","0","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_pop1");
            obj.set_text("");
            obj.getSetter("EditNameToApply").set("List");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboFrom","0","0","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE_CD");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("4");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","181","0","28","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("To");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboTo","220","0","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE_CD");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("4");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboList","0","29","391","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_popuptype("none");
            obj.set_type("search");
            obj.getSetter("u_type").set("multi");
            obj.getSetter("u_maxcount").set("10");
            obj.getSetter("u_innerdataset").set("");
            obj.getSetter("u_datacolumn").set("");
            obj.getSetter("u_codecolumn").set("");
            obj.getSetter("u_callback").set("fn_mComboCallback2");
            obj.set_visible("false");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,21,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivCondition.form.div_YearFromTo.form.calFrom","value","ds_in","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivCondition.form.div_YearFromTo.form.calTo","value","ds_in","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ComboFrom","value","ds_FromTo","From");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ComboTo","value","ds_FromTo","To");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ComboList","value","ds_FromTo","List");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Comm_ComboConditionFromTo.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("Comm_ComboConditionFromTo.xfdl", function() {
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
        var sSplitChar = this.gfn_getApplication().MultiTxtSplitChar;

        this.form_onload = function(obj,e)
        {
        			var gtrcPos = "Comm_ComboConditionFromTo.xfdl.form_onload";

        	this.gfn_getParentForm();	// 공통화폼의 경우 무조건 실행

        				this.gtrace("● 콤보공통화 : Comm_ComboConditionFromTo"				, gtrcPos);
        				this.gtrace(" - this.oFrmParnt.name    --->"+this.oFrmParnt.name		, gtrcPos);
        				this.gtrace(" - this.oDivParnt.name    --->"+this.oDivParnt.name		, gtrcPos);
        				this.gtrace(" - this.oTargetGrid       --->"+this.oTargetGrid			, gtrcPos);
        				this.gtrace(" - this.oTargetDs         --->"+this.oTargetDs				, gtrcPos);
        				this.gtrace(" - this.sInitCompVisEna   --->"+this.sInitCompVisEna		, gtrcPos);

        	{	//	3. userproperty를 통해 전역에 타입,바인딩DS,이너Ds,컬럼 세팅
        		var arrUserProp	=	this.oDivParnt.SearchConditionType.split(",");				this.gtrace(" - arrUserProp--->"			+arrUserProp				, gtrcPos);
        				//	이렇게 해도 된다 --> //	var arrUserProp = this._getUserProperty("this.parent","SearchConditionType");	this.gtrace(" - this.parent.SearchConditionType--->"+this.parent.SearchConditionType, gtrcPos);
        				//	Ex : Year,ds_in,ds_cmcdYear,p_year_sta,p_year_end

        		this.sSearchConditionType  	= nexacro.trim(this.gfn_nvl(arrUserProp[0],""));									this.gtrace(" - sSearchConditionType--->"	+this.sSearchConditionType	, gtrcPos);
        		this.oBindDs  				= this.oFrmParnt.lookup(nexacro.trim(this.gfn_nvl(arrUserProp[1]),""));				this.gtrace(" - oBindDs.name--->"			+this.oBindDs.name			, gtrcPos);
        		this.oInnerDs				= this.oFrmParnt.lookup(nexacro.trim(this.gfn_nvl(arrUserProp[2]),""));				this.gtrace(" - oInnerDs.name--->"			+this.oInnerDs.name			, gtrcPos);
        		this.oBindFromCol 			= nexacro.trim(this.gfn_nvl(arrUserProp[3],""));                           			this.gtrace(" - oBindFromCol--->"			+this.oBindFromCol			, gtrcPos);
        		this.oBindToCol 			= nexacro.trim(this.gfn_nvl(arrUserProp[4],""));                          			this.gtrace(" - oBindToCol--->"				+this.oBindToCol			, gtrcPos);
        		this.oBindListCol			= nexacro.trim(this.gfn_nvl(arrUserProp[5],""));    								this.gtrace(" - oBindListCol--->"			+this.oBindListCol			, gtrcPos);

        		if(this.gfn_isNull(this.oBindListCol))
        		{
        			this.btnMultiSelect.set_visible(false);
        			this.ComboList.set_visible(false);
        		}
        		this.ComboFrom.set_innerdataset(this.oInnerDs);
        		this.ComboTo.set_innerdataset(this.oInnerDs);
        	}

        	// 콤보에 코드, 데이터 컬럼 바인딩
        	this.fn_cmcdColAdd();

        	// ComboList의 속성세팅 ( 용도 : ? )
        	this.ComboList.u_innerdataset 	= this.oInnerDs.name;
        	this.ComboList.u_codecolumn 	= this.ComboList.codecolumn;
        	this.ComboList.u_datacolumn 	= this.ComboList.datacolumn;

        	{	//  9. 기본호출 ( 그리드, 초기화 )
        		//	this.gfn_formOnLoad(this);
        		this.fn_init();
        	}

        	{
        		// oncolumnchanged 이벤트 추가
        		this.oBindDs.addEventHandler("oncolumnchanged", this.fn_parentDsChanged, this);
        	}
        };

        this.fn_parentDsChanged = function(objDs, e)
        {
        	var sColId 		= e.columnid;
        	var iFromNdx 	= sColId.indexOf("_sta");	//	trace("iFromNdx --->"+iFromNdx 	);
        	var iToNdx		= sColId.indexOf("_end");	//	trace("iToNdx	--->"+iToNdx	);
        	var iListNdx	= sColId.indexOf("_list");	//	trace("iListNdx --->"+iListNdx	);
        	var sFromToList = (iFromNdx > -1 ? "From" : (iToNdx > -1 ? "To" : (iListNdx > -1 ? "List" : null)));

        	if(this.gfn_isNull(sFromToList)){
        		sFromToList = this.ds_ColIdType.lookup("ColName", sColId, "FTL_Type");
        	}

        	//	trace("sFromToList--->"+sFromToList);

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


        // 콤보에 코드, 데이터 컬럼 바인딩 : 다른 컬럼을 바인딩시키는 방식 : CODE_CD, CODE_NM이 아니어서 <select->가 표시 안되는 원인임.
        this.fn_cmcdColAdd = function()
        {
        								var gtrcPos = "Comm_ComboConditionFromTo.xfdl.fn_cmcdColAdd";
        	var sCodeColNm = "CODE_CD";
        	var sDataColNm = "CODE_NM";
        						this.gtrace("● CODE_CD,CODE_NM 아닌 경우 (fn_cmcdColAdd) ", gtrcPos);
        						this.gtrace(" - 코드컬럼미존재 : (CODE_CD), getColIndex(CODE_CD)--->"+this.oInnerDs.getColIndex(sCodeColNm), gtrcPos);
        	var sValCd;
        	if(this.oInnerDs.getColIndex(sCodeColNm)==-1)
        	{
        		this.oInnerDs.addColumn( sCodeColNm, "string" );
        		sValCd = this.ds_CmcdMap.lookup("Type", this.sSearchConditionType, sCodeColNm);	this.gtrace(" - 코드컬럼(변경) : (sValCd)--->"+sValCd, gtrcPos);
        	}else{
        		sValCd	=	sCodeColNm;
        	}

        	this.ComboFrom.set_codecolumn(sValCd);		this.gtrace(" - ComboFrom.codecolumn--->"+this.ComboFrom.codecolumn, gtrcPos);
        	this.ComboTo.set_codecolumn(sValCd);		this.gtrace(" - ComboTo.codecolumn--->"+this.ComboTo.codecolumn, gtrcPos);
        	this.ComboList.set_codecolumn(sValCd);		this.gtrace(" - ComboList.codecolumn--->"+this.ComboList.codecolumn, gtrcPos);

        	var sValNm;
        	if(this.oInnerDs.getColIndex(sDataColNm)==-1)
        	{
        		this.oInnerDs.addColumn( sDataColNm, "string" );
        		sValNm = this.ds_CmcdMap.lookup("Type", this.sSearchConditionType, sDataColNm);	this.gtrace(" - 이름컬럼(변경) : (sValNm)--->"+sValNm, gtrcPos);
        	}else{
        		sValNm	=	sDataColNm;
        	}
        	this.ComboFrom.set_datacolumn(sValNm);		this.gtrace(" - ComboFrom.datacolumn--->"+this.ComboFrom.datacolumn, gtrcPos);
        	this.ComboTo.set_datacolumn(sValNm);		this.gtrace(" - ComboTo.datacolumn--->"+this.ComboTo.datacolumn, gtrcPos);
        	this.ComboList.set_datacolumn(sValNm);		this.gtrace(" - ComboList.datacolumn--->"+this.ComboList.datacolumn, gtrcPos);
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
        	this.ComboList.set_top(0);
        };

        this.ds_FromTo_oncolumnchanged = function(obj,e)
        {
        											var gtrcPos = "Comm_ComboConditionFromTo.xfdl.ds_FromTo_oncolumnchanged";
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
        							this.ComboList.set_visible(false);
        						  }else{
        							this.ComboList.set_visible(true);
        						  }
        					break;
        			default : 	break;
        		}
        		this.oBindDs.setColumn(0, sParentSetCol, e.newvalue);
        	}

        };


        this.div_search_btn_onclick = function(obj,e)
        {
        	this.ComboList.set_visible(!this.ComboList.visible);
        };

        //User Prop로 적용시
        //this.fn_mComboCallback2 = function(pObjId)
        this.fn_mComboCallback2 = function(pObjUCombo, pArrTextList, pArrValueList)
        {
        	var sSetVal = "";
        	//	var arrArrValueList = pArrValueList.split(",");
        	if(!this.gfn_isNull(pArrValueList))
        	{
        		for(var i=0 ; i < pArrValueList.length ; i++)
        		{
        			sSetVal = sSetVal + (sSetVal==""?"":sSplitChar) + pArrValueList[i];
        		}
        	}

        	this.ds_FromTo.setColumn(0, "List", sSetVal);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnMultiSelect.addEventHandler("onclick",this.div_search_btn_onclick,this);
            this.ds_FromTo.addEventHandler("oncolumnchanged",this.ds_FromTo_oncolumnchanged,this);
            this.ds_CmcdMap.addEventHandler("oncolumnchanged",this.ds_FromTo_oncolumnchanged,this);
            this.ds_ColIdType.addEventHandler("oncolumnchanged",this.ds_FromTo_oncolumnchanged,this);
        };

        this.loadIncludeScript("Comm_ComboConditionFromTo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
