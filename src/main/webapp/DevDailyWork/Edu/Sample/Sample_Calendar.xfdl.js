(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleCalendar");
            this.set_titletext("월/기간 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(814,529);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_calFromTo","10","80","296","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("Edu_Comm::Comm_CalFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init","113","138","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getFromDate","10","172","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Get Fr Date");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_fromDate","113","172","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getToDate","10","199","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Get To Date");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_toDate","113","199","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setFromDate","10","226","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Set Fr Date");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_setFrom","113","226","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_maxlength("8");
            obj.set_value("20190101");
            obj.set_text("20190101");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setToDate","10","253","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Set To Date");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_setTo","113","253","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_maxlength("8");
            obj.set_value("20190120");
            obj.set_text("20190120");
            this.addChild(obj.name, obj);

            obj = new Div("div_calMM","400","80","98","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_url("Edu_Comm::Comm_CalMM.xfdl");
            obj.getSetter("callbackfunc").set("fn_calMMCallback");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getMonth","400","172","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Get Month");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_getMonth","503","172","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setMonth","400","199","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Set Month");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_setMonth","503","199","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maxlength("6");
            obj.set_value("201905");
            obj.set_visible("true");
            obj.set_text("201905");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","10","146","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("기간 / 월 달력");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","40",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","50","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("기간 달력");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","400","50","191","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("월 달력 - Div");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_month","400","273","98","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.getSetter("uCalType").set("MM");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_popuptype("none");
            obj.getSetter("uCallbackfunc").set("fn_calMonthCallback");
            this.addChild(obj.name, obj);

            obj = new Button("btn_enable","10","111","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("enable");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_readonly","113","111","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("readonly");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_essential","10","138","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("essential");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Div("div_calFromTo00","11","327","29.24%","21",null,null,"220",null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Div00");
            obj.set_url("Edu_Comm::Comm_CalFromTo2.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","11","297","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("기간 달력- resize");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Button("btn_initM","503","138","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_sub1");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_enableM","400","111","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("enable");
            obj.set_cssclass("btn_WF_sub1");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_readonlyM","503","111","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("readonly");
            obj.set_cssclass("btn_WF_sub1");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_essentialM","400","138","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("essential");
            obj.set_cssclass("btn_WF_sub1");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","400","243","191","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("월 달력 - User Property");
            obj.set_cssclass("sta_WF_title_sub");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","400","303","215","82",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Div00");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_month","10","28","98","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.getSetter("uCalType").set("MM");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_popuptype("none");
            obj.getSetter("uCallbackfunc").set("fn_calMonthCallback");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",814,529,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_calFromTo.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_calFromTo.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_calMM.form.calYM","value","dsList","dtMonth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_calFromTo00.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_calFromTo00.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Edu_Comm::Comm_CalFromTo.xfdl");
            this._addPreloadList("fdl","Edu_Comm::Comm_CalMM.xfdl");
            this._addPreloadList("fdl","Edu_Comm::Comm_CalFromTo2.xfdl");
        };
        
        // User Script
        this.registerScript("Sample_Calendar.xfdl", function() {
        /**
        *  @MenuPath    샘플 > 월/기간 달력
        *  @FileName 	Sample_Calendar.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2019.01.10
        *  @Desction    월/기간 달력
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2019.01.10    	Education 	                최초 생성
        *******************************************************************************
        */

        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	var today = this.gfn_getDate("date");
        };

        /*
        * 기간 달력 Enable 처리
        * fn_setEnable() 함수 호출
        * @example: this.div_cal.form.fn_setEnable(false)
        */
        this.fv_enable = true;
        this.btn_enable_onclick = function(obj,e)
        {
        	var objForm = this.div_calFromTo.form;
            this.fv_enable = (this.fv_enable ? false: true);
            objForm.fn_setEnable(this.fv_enable);
        };

        /*
        * 기간 달력 Readonly 처리
        * fn_setReadonly() 함수 호출
        * @example: this.div_cal.form.fn_setReadonly(false)
        */
        this.fv_readonly = false;
        this.btn_readonly_onclick = function(obj,e)
        {
        	var objForm = this.div_calFromTo.form;
            this.fv_readonly = (this.fv_readonly ? false: true);
            objForm.fn_setReadonly(this.fv_readonly);
        };

        /*
        * 기간 달력 필수 표시
        * fn_setEssential() 함수 호출
        * @example: this.div_cal.form.fn_setEssential(false)
        */
        this.fv_essential = false;
        this.btn_essential_onclick = function(obj,e)
        {
        	var objForm = this.div_calFromTo.form;
            this.fv_essential = (this.fv_essential ? false: true);
            objForm.fn_setEssential(this.fv_essential);

        };

        /*
        * 기간 달력 초기화
        * fn_init() 함수 호출
        * @example: this.div_cal.form.fn_init()
        */
        this.btn_init_onclick = function(obj,e)
        {
        	var objForm = this.div_calFromTo.form;
        	objForm.fn_init();
        }

        /*
        * 기간 달력 시작일자 가져오기
        * fn_getFromDate() 함수 호출
        * @example: this.div_cal.form.fn_getFromDate()
        */
        this.btn_getFromDate_onclick = function(obj,e)
        {
        	var objForm = this.div_calFromTo.form;
            var sDate = objForm.fn_getFromDate();

            this.edit_fromDate.set_value(sDate);
        };

        /*
        * 기간 달력 종료일자 가져오기
        * fn_getToDate() 함수 호출
        * @example: this.div_cal.form.fn_getToDate()
        */
        this.btn_getToDate_onclick = function(obj,e)
        {
        	var objForm = this.div_calFromTo.form;
            var sDate = objForm.fn_getToDate();

            this.edit_toDate.set_value(sDate);
        };

        /*
        * 기간 달력 시작일자 설정하기
        * fn_setFromDate() 함수 호출
        * @example: this.div_cal.form.fn_setFromDate("20190101")
        */
        this.btn_setFromDate_onclick = function(obj,e)
        {
        	var objForm = this.div_calFromTo.form;
            var sDate   = this.edt_setFrom.value;
            objForm.fn_setFromDate(sDate);
        };

        /*
        * 기간 달력 종료일자 설정하기
        * fn_setToDate() 함수 호출
        * @example: this.div_cal.form.fn_setToDate("20190102")
        */
        this.btn_setToDate_onclick = function(obj,e)
        {
        	var objForm = this.div_calFromTo.form;
            var sDate   = this.edt_setTo.value;
            objForm.fn_setToDate(sDate);

        };

        /*
        * 기간 달력 콜백함수
        * Div User Prop : callbackfunc
        */
        this.fn_calCallback = function(objId, sFromValue, sToValue)
        {
            trace(objId + " : "  + sFromValue + " : "  + sToValue);
        }


        /*
        * 월 달력 Enable 처리
        * fn_setEnable() 함수 호출
        * @example: this.div_calMM.form.fn_setEnable(false)
        */
        this.fv_enableM = true;
        this.btn_enableM_onclick = function(obj,e)
        {
            var objForm = this.div_calMM.form;
            this.fv_enableM = (this.fv_enableM ? false: true);
            objForm.fn_setEnable(this.fv_enableM);

        };

        /*
        * 월 달력 Readonly 처리
        * fn_setReadonly() 함수 호출
        * @example: this.div_calMM.form.fn_setReadonly(false)
        */
        this.fv_readonlyM = false;
        this.btn_readonlyM_onclick = function(obj,e)
        {
        	var objForm = this.div_calMM.form;
            this.fv_readonlyM = (this.fv_readonlyM ? false: true);
            objForm.fn_setReadonly(this.fv_readonlyM);
        };

        /*
        * 월 달력 필수 표시
        * fn_setEssential() 함수 호출
        * @example: this.div_calMM.form.fn_setEssential(false)
        */
        this.fv_essentialM = false;
        this.btn_essentialM_onclick = function(obj,e)
        {
        	var objForm = this.div_calMM.form;
            this.fv_essentialM = (this.fv_essentialM ? false: true);
            objForm.fn_setEssential(this.fv_essentialM);
        };

        /*
        * 월 달력 초기화
        * fn_init() 함수 호출
        * @example: this.div_calMM.form.fn_init()
        */
        this.btn_initM_onclick = function(obj,e)
        {
        	var objForm = this.div_calMM.form;
        	objForm.fn_init();

        };

        /*
        * 월 달력 월 Get
        * fn_getValue() 함수 호출
        * @example: this.div_calMM.form.fn_getValue()
        */
        this.btn_getMonth_onclick = function(obj,e)
        {
        	var objForm = this.div_calMM.form;
        	var	sDate   = objForm.fn_getValue();

            this.edt_getMonth.set_value(sDate);
        };

        /*
        * 월 달력 월 Set
        * fn_getFromDate() 함수 호출
        * @example: this.div_calMM.form.fn_setValue()
        */
        this.btn_setMonth_onclick = function(obj,e)
        {
        	var objForm = this.div_calMM.form;
        	var	sDate = this.edt_setMonth.value;
        		objForm.fn_setValue(sDate);
        };

        /*
        * 월력 콜백함수: Div로 적용시
        * Div User Prop : callbackfunc
        */
        this.fn_calMMCallback = function(objId, sMonth)
        {
            trace(objId + " : "  + sMonth);
        }


        /*
        * 월력 콜백함수: Calendar User Prop로 적용시
        * Calendar User Prop : callbackfunc
        */
        this.fn_calMonthCallback = function(objId, sMonth)
        {
            trace(objId + " : " + sMonth);
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_init.addEventHandler("onclick",this.btn_init_onclick,this);
            this.btn_getFromDate.addEventHandler("onclick",this.btn_getFromDate_onclick,this);
            this.btn_getToDate.addEventHandler("onclick",this.btn_getToDate_onclick,this);
            this.btn_setFromDate.addEventHandler("onclick",this.btn_setFromDate_onclick,this);
            this.btn_setToDate.addEventHandler("onclick",this.btn_setToDate_onclick,this);
            this.btn_getMonth.addEventHandler("onclick",this.btn_getMonth_onclick,this);
            this.btn_setMonth.addEventHandler("onclick",this.btn_setMonth_onclick,this);
            this.cal_month.addEventHandler("onchanged",this.cal_month_onchanged,this);
            this.btn_enable.addEventHandler("onclick",this.btn_enable_onclick,this);
            this.btn_readonly.addEventHandler("onclick",this.btn_readonly_onclick,this);
            this.btn_essential.addEventHandler("onclick",this.btn_essential_onclick,this);
            this.btn_initM.addEventHandler("onclick",this.btn_initM_onclick,this);
            this.btn_enableM.addEventHandler("onclick",this.btn_enableM_onclick,this);
            this.btn_readonlyM.addEventHandler("onclick",this.btn_readonlyM_onclick,this);
            this.btn_essentialM.addEventHandler("onclick",this.btn_essentialM_onclick,this);
            this.Div00.form.cal_month.addEventHandler("onchanged",this.cal_month_onchanged,this);
        };

        this.loadIncludeScript("Sample_Calendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
