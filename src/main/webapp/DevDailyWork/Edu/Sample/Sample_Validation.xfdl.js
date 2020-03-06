(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_Validation");
            this.set_titletext("Sample_Validation");
            if (Form == this.constructor)
            {
                this._setFormPosition(814,529);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"COL_SSN\" type=\"STRING\" size=\"50\"/><Column id=\"COL_DATE_FR\" type=\"STRING\" size=\"10\"/><Column id=\"COL_DATE_TO\" type=\"STRING\" size=\"10\"/><Column id=\"COL_NUM_MAX\" type=\"STRING\" size=\"10\"/><Column id=\"COL_NUM_DEC\" type=\"STRING\" size=\"10\"/><Column id=\"COL_COMPARE1\" type=\"STRING\" size=\"10\"/><Column id=\"COL_COMPARE2\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"COL_ID\">AA001</Col><Col id=\"COL_SSN\">8002031028213</Col><Col id=\"COL_DATE_FR\">20180101</Col><Col id=\"COL_DATE_TO\">20180131</Col><Col id=\"COL_NUM_MAX\">8</Col><Col id=\"COL_NUM_DEC\">1.36</Col><Col id=\"COL_COMPARE1\">11</Col><Col id=\"COL_COMPARE2\">12</Col></Row><Row><Col id=\"COL_ID\">AA002</Col><Col id=\"COL_SSN\">8002031028213</Col><Col id=\"COL_DATE_FR\">20180201</Col><Col id=\"COL_DATE_TO\">20180208</Col><Col id=\"COL_NUM_MAX\">6</Col><Col id=\"COL_NUM_DEC\">2.02</Col><Col id=\"COL_COMPARE1\">12</Col><Col id=\"COL_COMPARE2\">13</Col></Row><Row><Col id=\"COL_ID\">BB001</Col><Col id=\"COL_SSN\">8002031028213</Col><Col id=\"COL_DATE_FR\">20180520</Col><Col id=\"COL_DATE_TO\">20180520</Col><Col id=\"COL_NUM_MAX\">10</Col><Col id=\"COL_NUM_DEC\">3.15</Col><Col id=\"COL_COMPARE1\">11</Col><Col id=\"COL_COMPARE2\">111</Col></Row><Row><Col id=\"COL_ID\">BB002</Col><Col id=\"COL_SSN\">8002031028213</Col><Col id=\"COL_DATE_FR\">20181010</Col><Col id=\"COL_DATE_TO\">20181210</Col><Col id=\"COL_NUM_MAX\">9</Col><Col id=\"COL_NUM_DEC\">4.32</Col><Col id=\"COL_COMPARE1\">1</Col><Col id=\"COL_COMPARE2\">11</Col></Row><Row><Col id=\"COL_ID\">CC001</Col><Col id=\"COL_SSN\">8002031028213</Col><Col id=\"COL_DATE_FR\">20150110</Col><Col id=\"COL_DATE_TO\">20171110</Col><Col id=\"COL_NUM_MAX\">7</Col><Col id=\"COL_NUM_DEC\">5.56</Col><Col id=\"COL_COMPARE1\">4</Col><Col id=\"COL_COMPARE2\">11</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data_original_backup", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"COL_SSN\" type=\"STRING\" size=\"50\"/><Column id=\"COL_DATE_FR\" type=\"STRING\" size=\"10\"/><Column id=\"COL_DATE_TO\" type=\"STRING\" size=\"10\"/><Column id=\"COL_NUM_MAX\" type=\"STRING\" size=\"10\"/><Column id=\"COL_NUM_DEC\" type=\"STRING\" size=\"10\"/><Column id=\"COL_COMPARE1\" type=\"STRING\" size=\"10\"/><Column id=\"COL_COMPARE2\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"COL_ID\"/><Col id=\"COL_SSN\">8002031028213</Col><Col id=\"COL_DATE_FR\">20180101</Col><Col id=\"COL_DATE_TO\">20180131</Col><Col id=\"COL_NUM_MAX\">8</Col><Col id=\"COL_NUM_DEC\">1.36</Col><Col id=\"COL_COMPARE1\">11</Col><Col id=\"COL_COMPARE2\">12</Col></Row><Row><Col id=\"COL_ID\">AA</Col><Col id=\"COL_SSN\">8002031028213</Col><Col id=\"COL_DATE_FR\">201802</Col><Col id=\"COL_DATE_TO\">20180208</Col><Col id=\"COL_NUM_MAX\">A</Col><Col id=\"COL_NUM_DEC\">2.002</Col><Col id=\"COL_COMPARE1\">12</Col><Col id=\"COL_COMPARE2\">11</Col></Row><Row><Col id=\"COL_ID\">BB001</Col><Col id=\"COL_SSN\">8002031028213</Col><Col id=\"COL_DATE_FR\">20180520</Col><Col id=\"COL_DATE_TO\">20180520</Col><Col id=\"COL_NUM_MAX\">10</Col><Col id=\"COL_NUM_DEC\">3.1</Col><Col id=\"COL_COMPARE1\">11</Col><Col id=\"COL_COMPARE2\">111</Col></Row><Row><Col id=\"COL_ID\">BB002</Col><Col id=\"COL_SSN\">9011231234567</Col><Col id=\"COL_DATE_FR\">20181010</Col><Col id=\"COL_DATE_TO\">20180910</Col><Col id=\"COL_NUM_MAX\">11</Col><Col id=\"COL_NUM_DEC\">4.32</Col><Col id=\"COL_COMPARE1\">111</Col><Col id=\"COL_COMPARE2\">11</Col></Row><Row><Col id=\"COL_ID\">CC001</Col><Col id=\"COL_SSN\">9212241234567</Col><Col id=\"COL_DATE_FR\">20181110</Col><Col id=\"COL_DATE_TO\">20171110</Col><Col id=\"COL_NUM_MAX\"/><Col id=\"COL_NUM_DEC\">5.56</Col><Col id=\"COL_COMPARE1\"/><Col id=\"COL_COMPARE2\">11</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","10","50",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_binddataset("ds_data");
            obj.getSetter("griduserproperty").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"주민번호\"/><Cell col=\"2\" text=\"시작일자\"/><Cell col=\"3\" text=\"종료일자\"/><Cell col=\"4\" text=\"최대값\"/><Cell col=\"5\" text=\"소숫점\"/><Cell col=\"6\" text=\"1번째값\"/><Cell col=\"7\" text=\"2번째값\"/><Cell row=\"1\" text=\"COL_ID\"/><Cell row=\"1\" col=\"1\" text=\"COL_SSN\"/><Cell row=\"1\" col=\"2\" text=\"COL_DATE_FR\"/><Cell row=\"1\" col=\"3\" text=\"COL_DATE_TO\"/><Cell row=\"1\" col=\"4\" text=\"COL_NUM_MAX\"/><Cell row=\"1\" col=\"5\" text=\"COL_NUM_DEC\"/><Cell row=\"1\" col=\"6\" text=\"COL_COMPARE1\"/><Cell row=\"1\" col=\"7\" text=\"COL_COMPARE2\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_ID\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:COL_SSN\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:COL_DATE_FR\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:COL_DATE_TO\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:COL_NUM_MAX\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:COL_NUM_DEC\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:COL_COMPARE1\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:COL_COMPARE2\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0",null,"100.00%","10",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_guide1");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","10","146","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Validation 체크");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","40",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Button("btn_check",null,"10","45","24","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("체크");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"10","45","24","58",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","45","24","106",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",814,529,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Sample_Validation.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("Sample_Validation.xfdl", function() {
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        /*

        1. Validation 공통함수

        	1) 정합성체크 Rule을 Clear.
        		this.gfn_clearValidation(this.ds_list);

            2) Dataset Column별로 정합성체크 Rule을 정의.
               this.gfn_setValidation(this.ds_list, "EMPL_ID", "사원번호", "required,length:5");

            3) 정합성체크 Rule에의해 정합성을 체크.   // U:수정된 Row, A:전체 Row 체크
               this.gfn_validation(this.ds_list, "U");

        2. 정합성체크 Rule의 종류
            this.gfn_setValidation(this.ds_list, "EMPL_ID", "사원번호", "required,length:5");
            * required - 필수 체크
            * length:7 - 길이가 7자리인지 체크
            * rangelength:2:3 - 길이가 2 ~ 3 자리인지 체크
            * maxlength:7 - 길이가 7보다 작은지 체크
            * minlength:3 - 길이가 3보다 큰지 체크
            * maxlengthbyte:7 - byte의 길이가 7보다 작은지 체크
            * minlengthbyte:3 - byte의 길이가 3보다 큰지 체크
            * digits - 숫자여부 체크
            * min:7 - 값이 7보다 작은지 체크
            * max:7 - 값이 7보다 큰지 체크
            * declimit:3 - 소수점의 자리수가 3자리인지 체크
            * date - 년월일형태의 날짜가 맞는지 체크
            * dateym - 년월형태의 날짜가 맞는지 체크
            * range:40:100 - 값이 40 ~ 100 사이의 값인지 체크
            * code:1:2:3 - 값이 1,2,3 의 값인지 체크
            * equalto:FULL_NAME - FULL_NAME 칼럼의 값과 같은지 체크
              this.gfn_setValidation(this.ds_list, "EMPL_ID", "사원번호", "required,equalto:FULL_NAME");
            * fromto:DATE_FROM - 등록된 날짜가 DATE_TO의 칼럼의 값 보다 큰지
              this.gfnSetValidation(this.ds_list, "DATE_TO", "종료일자,시작일자", "required,date,fromto:DATE_FROM");
            * comparebig:FULL_NAME - FULL_NAME 칼럼의 값보다 큰지 체크
              this.gfnSetValidation(this.ds_list, "EMPL_ID", "사원번호", "required,comparebig:FULL_NAME");
            * comparesmall:FULL_NAME - FULL_NAME 칼럼의 값보다 작은지 체크
              this.gfnSetValidation(this.ds_list, "EMPL_ID", "사원번호", "required,comparesmall:FULL_NAME");
            * isssn - 주민번호 체크 gfn_isSSN
            * isfrn - 외국인등록번호 체크 gfn_isFrnrIdNo
            * isbzid -  사업자등록번호 체크 gfn_isBzIdNo
            * isfirmid - 법인등록번호 체크 gfn_isFirmIdNo
            * iscardno - 신용카드번호 체크 gfn_isCardNo
            * isemail - 이메일 체크 gfn_isEmail
        */

        this.Form_onload = function(obj,e)
        {
        	//	this.gfn_formOnLoad(this);
        	this.gfn_getAllInitData();
        };

        // Add Button
        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_data.addRow();
        };

        // Delete Button
        this.btn_del_onclick = function(obj,e)
        {
            this.ds_data.deleteRow(this.ds_data.rowposition);
        };

        this.btn_check_onclick = function(obj,e)
        {
        	this.gfn_clearValidation(this.ds_data);

         	this.gfn_setValidation(this.ds_data, "COL_ID"      , "아이디"          , "required,length:5");
         	this.gfn_setValidation(this.ds_data, "COL_DATE_FR" , "시작일"          , "required,date");						// 유효일자 체크 : 201802-->20180213
         	this.gfn_setValidation(this.ds_data, "COL_DATE_TO" , "종료일,시작일"  , "required,date,fromto:COL_DATE_FR"); 	// 종료일자,시작일자
         	this.gfn_setValidation(this.ds_data, "COL_NUM_MAX" , "최대값"          , "required,digits,max:10,min:3");  	// 숫자형식,최대값,최소값
         	this.gfn_setValidation(this.ds_data, "COL_NUM_DEC" , "COL_NUM_DEC컬럼" , "required,digits,declimit:2");  		// 소수점 2자리 체크


         	this.gfn_setValidation(this.ds_data, "COL_SSN"     , "주민번호"        , "required,isssn");	//
         	this.gfn_setValidation(this.ds_data, "COL_COMPARE1", "1번째값"         , "required,digits");	  // 1번째값
         	this.gfn_setValidation(this.ds_data, "COL_COMPARE2", "2번째값,1번째값", "required,digits,comparebig:COL_COMPARE1");  // COL_COMPARE1 칼럼의 값보다 큰지 체크

            // 수정된 Row가 아닌 전체 Row에 대해 Validation check

          	if(this.gfn_validation(this.ds_data, "A") == false) return;
        	else{trace("OK");}


        /*
         	this.gfn_setValidation(this.ds_data, "COL_ID", "아이디", "required,length:5");
         	this.gfn_setValidation(this.ds_data, "COL_SSN", this.gfn_getWord("user.jumin"), "required,isssn");	// 주민번호
         	this.gfn_setValidation(this.ds_data, "COL_DATE_FR", this.gfn_getWord("date.start"), "required,date");	// 유효일자 체크
         	this.gfn_setValidation(this.ds_data, "COL_DATE_TO", this.gfn_getWord("date.end")+","+this.gfn_getWord("date.start"), "required,date,fromto:COL_DATE_FR"); // 종료일자,시작일자
         	this.gfn_setValidation(this.ds_data, "COL_NUM_MAX", this.gfn_getWord("value.max") , "required,digits,max:10");  // 최대값
         	this.gfn_setValidation(this.ds_data, "COL_NUM_DEC", this.gfn_getWord("value.interest"), "required,digits,declimit:2");  // 금리
         	this.gfn_setValidation(this.ds_data, "COL_COMPARE1", this.gfn_getWord("value.1st")     , "required,digits");	  // 1번째값
         	this.gfn_setValidation(this.ds_data, "COL_COMPARE2", this.gfn_getWord("value.2nd")+","+this.gfn_getWord("value.1st"), "required,digits,comparebig:COL_COMPARE1");  // 2번째값,1번째값
        */
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btn_check.addEventHandler("onclick",this.btn_check_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.ds_data.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_data.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_data.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
            this.ds_data_original_backup.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_data_original_backup.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_data_original_backup.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };

        this.loadIncludeScript("Sample_Validation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
