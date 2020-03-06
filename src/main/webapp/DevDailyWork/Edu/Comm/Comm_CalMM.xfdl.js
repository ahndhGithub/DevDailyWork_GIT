(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_CalMM2");
            this.set_titletext("월 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(96,21);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("cal_yM","0","0","96","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_cal","0","21","181","160",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_url("Edu_Comm::Comm_CalMMPdv.xfdl");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",96,21,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Edu_Comm::Comm_CalMMPdv.xfdl");
        };
        
        // User Script
        this.registerScript("Comm_CalMM.xfdl", function() {
        /**
        *  @MenuPath    Comm > Comm_CalMM2 (공통 월달력)
        *  @FileName 	Comm_CalMM.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2019.01.10
        *  @Desction    월달력
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2019.01.10     	Education 	                최초 생성
        * PopupDiv Url로 적용
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        this.fv_today;
        this.pdv_cal.calObj = this.cal_yM;


        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);//초기화[필수]
        	this.fv_today = this.gfn_getDate(); //오늘날짜세팅
        	this.fn_init();
        };

        /**
        * @description 달력초기화
        */
        this.fn_init = function()
        {
        	//요구사항에 따라 오늘날짜 3개월 등등 지정 현재 디폴트="";
        	this.cal_yM.set_value("");
        };

        /**
        * @description  컴포넌트 날짜 값 호출
        */
        this.fn_getValue = function()
        {
        	if(this.cal_yM.value != "" ){
        		var rtn = this.cal_yM.value.substr(0,6);
        	}
        	return rtn;
        };

        /**
        * @description   컴포넌트 날짜 값 셋팅
        */
        this.fn_setValue = function(sDate)
        {
        	this.cal_yM.set_value(sDate);
        };

        /**
        * @description    컴포넌트 enable 셋팅
        */
        this.fn_setEnable = function(bValue)
        {
        	this.cal_yM.set_enable(bValue);
        };

        /**
        * @description    컴포넌트 Readonly 셋팅
        */
        this.fn_setReadonly = function(bValue)
        {
        	this.cal_yM.set_readonly(bValue);
        };

        /**
        * @description    컴포넌트 필수 css 셋팅
        */
        this.fn_setEssential = function(bValue)
        {
        	if(bValue){
        		this.cal_yM.set_cssclass("essential");
        	}else{
        		this.cal_yM.set_cssclass("");
        	}
        };

        /*
         * @description   Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
         */
        this.cal_yM_ondropdown = function(obj,e)
        {
        	this.pdv_cal.trackPopupByComponent(obj, 0, obj.height);
        };


        /*
         * @description   Calendar 직접 변경시
         */
        this.cal_yM_onchanged = function(obj,e)
        {
        	var sDate = e.postvalue;
        	if(this.gfn_isNull(sDate)) sDate = this.fv_today;
        	this.pdv_cal.form.sta_year.set_text(sDate.substr(0,4));
        };

        this.pdv_cal_oncloseup = function(obj,e)
        {
            this.fn_callback(this.cal_yM.value.substr(0,6));
        };

        this.fn_callback = function(sMonth)
        {
        	var sCallback = this.parent.callbackfunc;
        	if (!this.gfn_isNull(sCallback)) {
        		try {
        			var svcId = this.parent.name;
        			this.lookupFunc(sCallback).call(svcId, sMonth);
        		} catch(e) {
        			//trace("함수 실행시 오류가 발생했습니다.");
        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cal_yM.addEventHandler("ondropdown",this.cal_yM_ondropdown,this);
            this.cal_yM.addEventHandler("onchanged",this.cal_yM_onchanged,this);
            this.pdv_cal.addEventHandler("oncloseup",this.pdv_cal_oncloseup,this);
        };

        this.loadIncludeScript("Comm_CalMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
