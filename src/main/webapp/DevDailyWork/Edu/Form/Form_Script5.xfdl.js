(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Scrip5");
            this.set_titletext("Form_Scrip5");
            if (Form == this.constructor)
            {
                this._setFormPosition(814,529);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_position", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NAME\">Chairman</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NAME\">President</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NAME\">Division Manager</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"CODE_NAME\">Department Manager</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"CODE_NAME\">Assistant Manager</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"CODE_NAME\">Supervisor</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"CODE_NAME\">Officer</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static08","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_emp","293","149",null,"121","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_scrolltype("both");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"직급\"/><Cell col=\"3\" text=\"입사일자\"/><Cell col=\"4\" text=\"급여\"/><Cell col=\"5\" text=\"성별\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:POS_CD\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"4\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"5\" text=\"expr:GENDER == &quot;M&quot; ? &quot;남&quot; : &quot;여&quot;\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","763","-331","39","64",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("red");
            obj.set_text("h64");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08","468","-315","29","12",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("red");
            obj.set_text("h4");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRedTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","103","-301","649","4",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","293","10","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조건");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","293","119","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("부서별 사원정보");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dept","10","45",null,"474","531",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("no,,rowfix,colfix,!filter,!initial,export");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"113\"/><Column size=\"209\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\" textAlign=\"center\" suppress=\"2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","45","24","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"10","45","24","58",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","45","24","106",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("입력");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","45","24","154",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("조회");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","293","45",null,"64","10",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_text("");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","9","85","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("입사일자");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_searchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","0","33","85","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("성      별");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_searchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","85","33","168","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"9","52","24","5",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","290","109",null,"10","-290",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("부서정보");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static07",null,"10","10",null,"521","2",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","830","124","389","292",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_dept");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CD\"/><Cell col=\"1\" text=\"DEPT_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",814,529,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_calFromTo00.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_calFromTo00.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Script5.xfdl","EduLibXjs::All_EduLibXjs.xjs");
        this.registerScript("Form_Script5.xfdl", function() {
        this.executeIncludeScript("EduLibXjs::All_EduLibXjs.xjs"); /*include "EduLibXjs::All_EduLibXjs.xjs"*/;

        /*
        # 그리드 표현
            1 좌측 Grid 맨 앞쪽에 순번 표현, 데이터 Sort 가능, 우클릭 팝업메뉴 미사용
            2 우측 Grid 맨 앞쪽에 체크박스 표현, 우클릭 팝업메뉴 기본값 사용

        # 공통코드 가져오기
            1. 성별코드: D001, 상단 조건영역 Radio에 바인딩, 전체 표현
            2. 직급코드: C001, 우측 그리드 직급코드에 적용

        # 조회버튼
            1. 좌측 Grid 부서 데이터 가져오기
               - 조회 서비스: SvcUrl::select_code.jsp
               - 서버에서 보내주는 Dataset ID: out_dept
            2. 좌측 선택된 부서에 해당하는 사원 가져오기
               - 조회 서비스 : select_emp.jsp
               ※조회조건으로 사용하는 부서코드는 URL 뒤에 Get방식 전송
               ex) SvcUrl::select_emp.jsp?sDept=01
               - 서버에서 전송받는 데이터셋ID : out_emp

        # 입력버튼
            1. 사원 데이터에 빈 Row 추가
            2. 추가한 Row에 좌측에 선택 되어있는 부서코드를 디폴트로 지정

        # 삭제버튼
            1. 삭제하시겠습니까? 확인 메세지 처리 후 true인 경우 Row 삭제
               - 삭제 메세지ID : confirm.before.delete

        # 저장 버튼
            1. 데이터 유효성 체크
               - 성명(FULL_NAME) 필수
               - 아이디(EMPL_ID) 필수, 5자리
            2. 데이터 저장
               - 저장 서비스 : SvcUrl::save_emp.jsp
               - 서버로 보내는 Dataset ID: in_emp

        # 상단 조건
            1. 입사일자에 기간달력 표현
            2. 달력 선택 후 해당 값으로 사원정보 필터링
            3. 성별 Radio 선택시 사원정보 필터링
            4. 초기화 버튼으로 조건 초기화

        */

        this.Form_onload = function(obj,e)
        {
             this.gfn_formOnLoad(this);
        };

        // Retrieve Button
        this.btn_search_onclick = function(obj,e)
        {

        };

        this.fn_callback = function(svcID, errCD, errMSG)
        {

        }


        // Add Button
        this.btn_add_onclick = function(obj,e)
        {

        };

        // Delete Button
        this.btn_del_onclick = function(obj,e)
        {

        };


        // Save Button
        this.btn_save_onclick = function(obj,e)
        {

        };


        this.div_cont_btn_reset_onclick = function(obj,e)
        {

        };

        this.grd_dept_onlbuttondown = function(obj,e)
        {

        };

        this.grd_dept_onrbuttondown = function(obj,e)
        {
        	trace("------------");
        };

        this.grd_emp_onrbuttondown = function(obj,e)
        {
        	trace("XXXXXXXXXXXXX");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.grd_emp.addEventHandler("onexpandup",this.grd_emp_onexpandup,this);
            this.grd_emp.addEventHandler("onrbuttondown",this.grd_emp_onrbuttondown,this);
            this.grd_dept.addEventHandler("onlbuttondown",this.grd_dept_onlbuttondown,this);
            this.grd_dept.addEventHandler("onrbuttondown",this.grd_dept_onrbuttondown,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.div_search_rdo_gender_onitemchanged,this);
            this.div_search.form.btn_reset.addEventHandler("onclick",this.div_cont_btn_reset_onclick,this);
            this.ds_dept.addEventHandler("onrowposchanged",this.ds_dept_onrowposchanged,this);
        };

        this.loadIncludeScript("Form_Script5.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
