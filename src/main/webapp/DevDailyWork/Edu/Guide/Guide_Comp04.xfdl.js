(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_Comp04");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(814,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_01","10","196","318","97",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","0","37","76","21",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_text("가나다");
            obj.set_cssclass("sta_WF_searchLabel");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static17","0","66","89","21",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_searchLabel");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("Edit09","89","66","150","21",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("Edit10","89","37","140","21",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("Edit11","89","8","140","21",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static15","0","8","63","21",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_text("가나");
            obj.set_cssclass("sta_WF_searchLabel");
            this.div_01.addChild(obj.name, obj);

            obj = new Div("Div00","10","80","748","39",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","89","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","89","8","150","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","239","8","96","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회라벨2");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","337","8","150","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","487","8","98","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조회라벨3");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","585","8","150","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static19","11","165","238","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("여러줄인 경우 가장 긴 라벨 기준으로 정렬");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_23","763","80","39","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("red");
            obj.set_text("h39");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","92","77","8","47",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("Static122","89","121","29","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("8px");
            obj.set_cssclass("sta_WF_guideRedTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","250","76","19","47",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","240","120","29","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("19px");
            obj.set_cssclass("sta_WF_guideRedTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","100","190","1","110",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static18");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","146","579","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_GuideFit");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","358","748","39",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","89","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","89","8","150","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","239","8","96","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("조회라벨2");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","337","8","150","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","487","8","98","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("조회라벨3");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","585","8","150","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static13","12","326","560","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("1줄 : Height 39px");
            obj.set_cssclass("sta_WF_GuideStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","12","417","560","27",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("2줄 : Height 64px");
            obj.set_cssclass("sta_WF_GuideStatus");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","763","449","39","64",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_color("red");
            obj.set_text("h64");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","10","449","748","64",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","89","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit00","98","8","150","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","248","8","98","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("조회라벨1");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit01","346","8","150","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","496","8","98","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("조회라벨2");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit02","594","8","140","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","0","33","98","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("조회라벨4");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit04","98","33","150","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("essential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","248","33","98","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("조회라벨5");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit05","346","33","150","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("essential");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","496","33","98","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("조회라벨6");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit06","594","33","140","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta_06","763","565","41","89",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_color("red");
            obj.set_text("h89");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","10","565","748","89",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","89","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00","98","8","150","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","248","8","98","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("조회라벨1");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit01","346","8","150","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","496","8","98","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("조회라벨2");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit02","599","8","140","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","0","33","98","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_text("조회라벨4");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit04","98","33","150","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_cssclass("essential");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","248","33","98","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_text("조회라벨5");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit05","346","33","150","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_cssclass("essential");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static06","496","33","98","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_text("조회라벨6");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit06","599","33","140","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static08","0","58","98","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_text("조회라벨8");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit08","98","58","150","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("13");
            obj.set_cssclass("essential");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static09","248","58","98","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("14");
            obj.set_text("조회라벨9");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit09","346","58","150","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("15");
            obj.set_cssclass("essential");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static10","496","58","103","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("16");
            obj.set_text("조회라벨10");
            obj.set_cssclass("sta_WF_searchLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit10","599","58","140","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("17");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static15","12","533","560","27",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("3줄 : Height 89px");
            obj.set_cssclass("sta_WF_GuideStatus");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08","468","465","29","12",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_color("red");
            obj.set_text("h4");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRedTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","103","479","649","4",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","558","134","219","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("class : div_WF_search");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","10","10",null,"30","690",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Search Area");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","570","106","2","27",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Static18");
            obj.set_background("#2391ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","478","163","169","21",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("class : sta_WF_searchLabel");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","507","114","2","47",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Static18");
            obj.set_background("#2391ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","763","358","39","39",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_color("red");
            obj.set_text("h39");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",814,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_Comp04.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.Static19.addEventHandler("onclick",this.Static19_onclick,this);
        };

        this.loadIncludeScript("Guide_Comp04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
