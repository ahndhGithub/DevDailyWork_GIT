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
                this._setFormPosition(216,21);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_date", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("cal_from","0","0","46.3%","21",null,null,"100",null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            obj.set_value("20190101");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","cal_from:4","0","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to","Static00:4","0","46.3%","21",null,null,"100",null,null,null,this);
            obj.set_taborder("0");
            obj.set_popuptype("none");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20190215");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_cal","0","21","350","220",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdv_WF_MonthCalBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pdvClose",null,"5","14","14","10",null,null,null,null,null,this.pdv_cal.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Close");
            this.pdv_cal.addChild(obj.name, obj);

            obj = new Calendar("pdv_calFrom","8","6","156","179",null,null,null,null,null,null,this.pdv_cal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_showmonthspin("false");
            obj.set_usetrailingday("false");
            obj.set_popuptype("none");
            obj.set_value("");
            obj.set_border("0px none");
            this.pdv_cal.addChild(obj.name, obj);

            obj = new Calendar("pdv_calTo","183","6","156","179",null,null,null,null,null,null,this.pdv_cal.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_showmonthspin("false");
            obj.set_border("0px none");
            this.pdv_cal.addChild(obj.name, obj);

            obj = new Button("btn_pdvConfirm","121","191","48","21",null,null,null,null,null,null,this.pdv_cal.form);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.pdv_cal.addChild(obj.name, obj);

            obj = new Button("btn_pdvCancle","175","191","48","21",null,null,null,null,null,null,this.pdv_cal.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.pdv_cal.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",216,21,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comm_CalFromTo2.xfdl", function() {
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

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);//초기화[필수]
        	this.fn_init(); //달력초기화
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 달력초기화
        */
        this.fn_init = function()
        {
        	//요구사항에 따라 오늘날짜 3개월 등등 지정 현재 디폴트="";
        	this.cal_to.set_value("");		//TO 달력 셋팅
        	this.cal_from.set_value("");	//FROM 달력 셋팅
        };

        /**
        * @description from 일자 갖고오기
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

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
        */
        this.cal_from_ondropdown = function(obj,e)
        {
        //     this.pdv_cal.form.pdv_calFrom.set_value(this.cal_from.value);
        //     this.pdv_cal.form.pdv_calTo.set_value(this.cal_to.value);

        	this.pdv_cal.trackPopupByComponent(this.cal_from, 0, obj.height);

        };

        /**
        * @description 기간 popDiv컴포넌트 확인(적용) 버튼 클릭
        */
        this.pdv_cal_btn_pdvConfirm_onclick = function(obj,e)
        {
        // 	var sFromValue = this.pdv_cal.form.pdv_calFrom.value;
        // 	var sToValue = this.pdv_cal.form.pdv_calTo.value;
        // 	this.cal_from.set_value(sFromValue);
        // 	this.cal_to.set_value(sToValue);

            this.fn_callback(this.pdv_cal.form.pdv_calFrom.value, this.pdv_cal.form.pdv_calTo.value);
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
        };

        this.loadIncludeScript("Comm_CalFromTo2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
