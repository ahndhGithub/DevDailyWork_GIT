(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_CommCode");
            this.set_titletext("Sample_CommCode");
            if (Form == this.constructor)
            {
                this._setFormPosition(814,529);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_posC001", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deptC002", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_D001", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hobbyE001", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04","0",null,"100.00%","10",null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_guide1");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","10","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Common Code");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_pos","538","90","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_posC001");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","410","285","380","234",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_hobbyE001");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"CODE_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CODE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","410","50","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Common Code");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","410","255","155","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Dataset 적용 - 취미코드");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","537","54","136","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Get Common Code");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","50","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("공통코드 목록");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","410","90","106","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("직급코드 - Default");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","677","54","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","408","160","345","66",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","30","21","106","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("부서코드 - ALL");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","158","21","150","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_deptC002");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","80",null,null,"414","9",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("gds_comCode");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"98\"/><Column size=\"60\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"GROUP\"/><Cell col=\"1\" text=\"GROUP_NAME\"/><Cell col=\"2\" text=\"CODE\"/><Cell col=\"3\" text=\"CODE_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:GROUP\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:GROUP_NAME\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:CODE\"/><Cell col=\"3\" text=\"bind:CODE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","410","121","106","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("성별코드 - All");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","538","120","250","21",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_D001");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_rowcount("1");
            obj.set_border("1px solid #cccccc");
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
        this.registerScript("Sample_CommCode2.xfdl", function() {

        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };

        /*
         * 공통코드
         * AppVariables Datasets gds_commCode에서 구분값에 맞는 코드값 가져오기
         *
         * 규칙
         * Dataset ID는 마지막 4자리를 공통코드 구분자로 지정 ds_deptC001
         *
         * 컴포넌트id 또는 데이터셋id를 지정
         *
         * 여러개 지정시 구분자 스페이스
         * ":"구분자 이용하여 0이면 "전체", 1이면 "선택하세요" 표현
         * "전체" 선택시 코드값은 "ALL", "선택하세요" 선택시 코드값은 "" 으로 지정

            compId : 컴포넌트 or Dataset 아이디
            type   : 0(전체), 1(선택하세요)
            this.gfn_getCommCode(compId:type compId2:type2);

         */


        this.Button00_onclick = function(obj,e)
        {
            this.gfn_getCommCode("cbo_pos rdo_gender:0 Div00.form.cbo_dept:1 ds_hobbyE001");
        };

        this.Button01_onclick = function(obj,e)
        {
            this.ds_posC001.clear();
            this.ds_deptC002.clear();
            this.ds_D001.clear();
            this.ds_hobbyE001.clear();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
        };

        this.loadIncludeScript("Sample_CommCode2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
