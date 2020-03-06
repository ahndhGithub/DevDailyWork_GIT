(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalFromTo");
            this.set_titletext("기간달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,21);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_FromTo", this);
            obj._setContents("<ColumnInfo><Column id=\"From\" type=\"STRING\" size=\"256\"/><Column id=\"To\" type=\"STRING\" size=\"256\"/><Column id=\"List\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("cal_from","0","0","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to","220","0","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_popuptype("none");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_cal","0","21","350","250",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdv_WF_MonthCalBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"25","0",null,null,null,null,null,this.pdv_cal.form);
            obj.set_taborder("5");
            obj.set_text("기간선택");
            obj.getSetter("uWord").set("popup.periodselect");
            obj.set_cssclass("sta_POP_Title");
            this.pdv_cal.addChild(obj.name, obj);

            obj = new Button("btn_pdvClose",null,"5","14","14","10",null,null,null,null,null,this.pdv_cal.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Close");
            this.pdv_cal.addChild(obj.name, obj);

            obj = new Calendar("pdv_calFrom","8","33","156","179",null,null,null,null,null,null,this.pdv_cal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_showmonthspin("false");
            obj.set_usetrailingday("false");
            obj.set_popuptype("none");
            obj.set_value("");
            obj.set_border("0px none");
            this.pdv_cal.addChild(obj.name, obj);

            obj = new Calendar("pdv_calTo","183","33","156","179",null,null,null,null,null,null,this.pdv_cal.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_showmonthspin("false");
            obj.set_border("0px none");
            this.pdv_cal.addChild(obj.name, obj);

            obj = new Button("btn_pdvConfirm","121","218","48","21",null,null,null,null,null,null,this.pdv_cal.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.pdv_cal.addChild(obj.name, obj);

            obj = new Button("btn_pdvCancle","175","218","48","21",null,null,null,null,null,null,this.pdv_cal.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.pdv_cal.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","181","0","28","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("To");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,21,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","pdv_cal.form.pdv_calFrom","value","ds_FromTo","From");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","pdv_cal.form.pdv_calTo","value","ds_FromTo","To");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Comm_CalFromTo.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("Comm_CalFromTo.xfdl", function() {
        /********************************************************************************************
        @desc	1. Include
        ********************************************************************************************/
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        /**
        *  @MenuPath    Comm > Comm_CalFromTo (공통 기간달력)
        *  @FileName 	Comm_CalFromTo.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2019.01.10
        *  @Desction    기간달력

        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2019.01.10     	Education 	               최초 생성
        *******************************************************************************
        */

        this.form_onload = function(obj,e)
        {
        		var gtrcPos = "Comm_CalFromTo.xfdl.form_onload";
        			this.gtrace("● 콤보공통화 : Comm_ComboConditionFromTo"				, gtrcPos);

        	this.oFrmParnt				=	this.gfn_getTopLevelForm(this);					this.gtrace("부모폼(this.gfn_getTopLevelForm().name)------->"+this.gfn_getTopLevelForm(this).name, gtrcPos);
        		//SearchConditionType : BuyDate,ds_in,p_buy_date_sta,p_buy_date_end		:	구분값, DS  ,바인딩컬럼(시작,끝)
        	var strSearchCond 			= 	this.parent.SearchConditionType;				this.gtrace("부모속성(this.parent.SearchConditionType)--------->"+this.parent.SearchConditionType, gtrcPos);
         	var arrUserProp				=	strSearchCond.split(",");
        	this.oBindDs  				= 	this.oFrmParnt.lookup(arrUserProp[1]);			this.gtrace("바인딩Ds(this.oBindDs)--------->"+this.oBindDs.name, gtrcPos);
        	this.oBindFromCol 			= 	nexacro.trim(this.gfn_nvl(arrUserProp[2],""));  this.gtrace("시작컬럼(this.oBindFromCol)---->"+this.oBindFromCol, gtrcPos);
        	this.oBindToCol 			= 	nexacro.trim(this.gfn_nvl(arrUserProp[3],""));  this.gtrace("끝컬럼(this.oBindToCol)-------->"+this.oBindToCol	 , gtrcPos);
        // 	this.oBindListCol			= 	nexacro.trim(this.gfn_nvl(arrUserProp[4],""));  this.gtrace("리스트컬럼(this.oBindListCol--->"+this.oBindListCol, gtrcPos);

        	{
        		// oncolumnchanged 이벤트 추가
        		this.oBindDs.addEventHandler("oncolumnchanged", this.fn_parentDsChanged, this);
        	}

        	this.fn_init();
        };

        this.fn_parentDsChanged = function(objDs, e)
        {
        		var gtrcPos = "Comm_CalFromTo.xfdl.fn_parentDsChanged";
        			this.gtrace("● 온컬럼체인지드 : fn_parentDsChanged", gtrcPos);

        	var sColId 		= e.columnid;					this.gtrace("sColId --->"+sColId 	,gtrcPos);
        	if(sColId==this.oBindFromCol
        	|| sColId==this.oBindToCol
        	|| sColId==this.oBindListCol)
        	{
        		var iFromNdx 	= sColId.indexOf("_sta");		this.gtrace("iFromNdx --->"+iFromNdx 	,gtrcPos);
        		var iToNdx		= sColId.indexOf("_end");		this.gtrace("iToNdx	--->"+iToNdx		,gtrcPos);
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


        /**
        * @description 달력초기화
        */
        this.fn_init = function()
        {
        // 	this.cal_from.set_value("");	//FROM 일자 set
        // 	this.cal_to.set_value("");		//TO 일자 set
        	this.ds_FromTo.clearData();
        	this.ds_FromTo.addRow();
        };

        /**
        * @description Get from 일자
        */
        this.fn_getFromDate = function ()
        {
        	var sDate = this.cal_from.value;
        	return sDate;
        };

        /**
        * @description to 일자 갖고오기
        */
        this.fn_getToDate = function ()
        {
        	var sDate = this.cal_to.value;
        	return sDate;
        };

        /**
        * @description from일자 세팅하기
        */
        this.fn_setFromDate = function (sDate)
        {
        	this.cal_from.set_value(sDate);
        };

        /**
        * @description to일자 세팅하기
        */
        this.fn_setToDate = function (sDate)
        {
        	this.cal_to.set_value(sDate);
        };

        /**
        * @description enable true/false세팅
        */
        this.fn_setEnable = function (bValue)
        {
        	this.cal_from.set_enable(bValue);
        	this.cal_to.set_enable(bValue);
        };

        /**
        * @description readonly true/false세팅
        */
        this.fn_setReadonly = function (bValue)
        {
        	this.cal_from.set_readonly(bValue);
        	this.cal_to.set_readonly(bValue);
        };

        /**
        * @description Essential true/false세팅
        */
        this.fn_setEssential  = function (bValue)
        {
        	//CSS Essential 클래스설정
        	if(bValue){
                this.cal_from.set_cssclass("essential");
                this.cal_to.set_cssclass("essential");
        	}
            else{
                this.cal_from.set_cssclass("");
                this.cal_to.set_cssclass("");
        	}
        };

        /**
        * @description Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
        */
        this.cal_from_ondropdown = function(obj,e)
        {

            this.pdv_cal.form.pdv_calFrom.set_value(this.cal_from.value);
            this.pdv_cal.form.pdv_calTo.set_value(this.cal_to.value);

        	this.pdv_cal.trackPopupByComponent(this.cal_from, 0, obj.height);

        };

        /**
        * @description 기간 popDiv컴포넌트 확인(적용) 버튼 클릭
        */
        this.pdv_cal_btn_pdvConfirm_onclick = function(obj,e)
        {
         	var sFromValue = this.pdv_cal.form.pdv_calFrom.value;
         	var sToValue = this.pdv_cal.form.pdv_calTo.value;
         	this.cal_from.set_value(sFromValue);
         	this.cal_to.set_value(sToValue);
            this.fn_callback(sFromValue, sToValue);
            this.pdv_cal.closePopup();
        };

        this.fn_callback = function(sFromValue, sToValue)
        {
        	var sCallback = this.parent.callbackfunc;
        	if (!this.gfn_isNull(sCallback)) {
        		try {
        			var svcId = this.parent.name;
        			this.lookupFunc(sCallback).call(svcId, sFromValue, sToValue);
        		} catch(e) {
        			//trace("함수 실행시 오류가 발생했습니다.");
        		}
        	}
        };

        /**
        * @description 기간 popDiv컴포넌트 닫기
        */
        this.pdv_cal_btn_pdvCancle_onclick = function(obj,e)
        {
        	this.pdv_cal.closePopup();
        };



        this.ds_FromTo_oncolumnchanged = function(obj,e)
        {
        											var gtrcPos = "Comm_CalFromTo.xfdl.ds_FromTo_oncolumnchanged";
        												this.gtrace("e.columnid		>"+e.columnid						,gtrcPos);
        												this.gtrace("sSearchConditionTypes	>"+this.sSearchConditionType		,gtrcPos);
        												this.gtrace("oBindFromCol	>"+this.oBindFromCol				,gtrcPos);
        												this.gtrace("oBindToCol		>"+this.oBindToCol					,gtrcPos);
        												this.gtrace("oBindListCol	>"+this.oBindListCol				,gtrcPos);

        	{	//부모데이터셋에 값 세팅
        		var sParentSetCol;
        		switch(e.columnid){
        			case "From" : sParentSetCol = this.oBindFromCol;	break;
        			case "To" 	: sParentSetCol = this.oBindToCol; 		break;
        // 			case "List" : sParentSetCol = this.oBindListCol;
        //
        //
        // 						  // 값이 없는 경우 List 메세지를 숨김
        // 						  if(this.gfn_nvl(obj.getColumn(0, "List"),"")==""){
        // 							this.ComboList.set_visible(false);
        // 						  }else{
        // 							this.ComboList.set_visible(true);
        // 						  }
        // 					break;
        			default : 	break;
        		}

        												this.gtrace("sParentSetCol	>"+sParentSetCol,gtrcPos);

        		this.oBindDs.setColumn(0, sParentSetCol, e.newvalue);
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cal_from.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.cal_to.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.pdv_cal.form.btn_pdvClose.addEventHandler("onclick",this.pdv_cal_btn_pdvCancle_onclick,this);
            this.pdv_cal.form.btn_pdvConfirm.addEventHandler("onclick",this.pdv_cal_btn_pdvConfirm_onclick,this);
            this.pdv_cal.form.btn_pdvCancle.addEventHandler("onclick",this.pdv_cal_btn_pdvCancle_onclick,this);
            this.ds_FromTo.addEventHandler("oncolumnchanged",this.ds_FromTo_oncolumnchanged,this);
        };

        this.loadIncludeScript("Comm_CalFromTo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
