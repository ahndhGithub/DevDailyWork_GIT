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
            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hobby", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","10","80",null,null,"414","9",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gds_comCode");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"98\"/><Column size=\"60\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"GROUP\"/><Cell col=\"1\" text=\"GROUP_NAME\"/><Cell col=\"2\" text=\"CODE\"/><Cell col=\"3\" text=\"CODE_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:GROUP\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:GROUP_NAME\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:CODE\"/><Cell col=\"3\" text=\"bind:CODE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0",null,"100.00%","10",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_guide1");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","10","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Common Code");
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

            obj = new Static("Static01","10",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_pos","538","90","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","410","331","380","188",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_hobby");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"CODE_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CODE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","410","50","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Common Code");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","410","291","155","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Dataset 적용 - 취미코드");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","537","54","136","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Get Common Code");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","50","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("공통코드 목록");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","410","90","106","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("직급코드 - Default");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","410","121","106","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("성별코드 - All");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","677","54","56","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","538","120","250","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_gender");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_rowcount("1");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","406","153","367","99",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","11","116","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("부서코드 - Selected");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","138","11","150","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            this.Div00.addChild(obj.name, obj);

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
        this.registerScript("Sample_CommCode.xfdl", function() {

        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };

        /*
            공통코드 - AppVariables Datasets gds_comCode에서 코드그룹에 맞는 코드값 가져오기

            배열에 조회할 공통코드 정보를 추가 후 함수를 호출
                codeGroup : 공통코드 그룹코드
                obj       : 공통코드 적용할 comp or dataset
                first     : 첫번째 row에 추가할 값
                            0: 전체(ALL) 표현 - 코드값은 "ALL"
                            1: 선택하세요 표현 - 코드값은 ""
                            2: 사용자 지정 코드/명을 ":" 구분자로 지정

            this.gfn_searchCommonCode(arrCode, sCallBack) 함수로 공통코드를 조회할 수 있음
            공통코드 조회 후 sCallBack 함수가 호출

            서비스 통신 없이 Global Dataset 정보로 이용하여 공통함수 가져오는 경우
            this.gfn_getCommonCode(arrCode) 함수 호출

        */


        this.Button00_onclick = function(obj,e)
        {
            var arrCode = new Array();
        	arrCode.push({codeGroup:"C001", obj:this.cbo_pos});
        	arrCode.push({codeGroup:"D001", obj:this.rdo_gender         , first:"0"});
        	arrCode.push({codeGroup:"C002", obj:this.Div00.form.cbo_dept, first:"1"});
        	arrCode.push({codeGroup:"E001", obj:this.ds_hobby           , first:"2:userCode:userValue"});

        	this.gfn_searchCode(arrCode,"fn_callback");

        //    this.gfn_getCommonCode(arrCode);
        };

        this.fn_callback = function()
        {
            this.alert("fn_callback");
        }


        this.Button01_onclick = function(obj,e)
        {
            this.ds_pos.clear();
            this.ds_dept.clear();
            this.ds_gender.clear();
            this.ds_hobby.clear();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("Sample_CommCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
