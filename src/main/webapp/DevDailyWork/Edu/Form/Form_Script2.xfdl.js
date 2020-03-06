(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Script1");
            this.set_titletext("Form_Script1");
            if (Form == this.constructor)
            {
                this._setFormPosition(814,529);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"CHK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CD\">04</Col><Col id=\"POS_NAME\">Officer</Col></Row><Row><Col id=\"POS_CD\">03</Col><Col id=\"POS_NAME\">Assistant Manager</Col></Row><Row><Col id=\"POS_CD\">02</Col><Col id=\"POS_NAME\">Division Manager</Col></Row><Row><Col id=\"POS_CD\">01</Col><Col id=\"POS_NAME\">Chairman</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","10","40",null,"39","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptCode","73","8","60","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_dept","133","8","21","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptName","154","8","120","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","335","8","168","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            var div_search_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_gender_innerdataset", obj);
            div_search_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_gender_innerdataset);
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"8","49","21","8",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","274","8","61","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_searchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","73","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("부서명");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_searchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","119",null,null,"313","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"35\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"사원번호\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"입사일자\"/><Cell col=\"7\" text=\"급여\"/><Cell col=\"8\" text=\"성별\"/><Cell col=\"9\" text=\"결혼여부\"/><Cell col=\"10\" text=\"비고사항\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"4\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"5\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"6\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"7\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"8\" text=\"expr:GENDER == &quot;M&quot; ? &quot;남&quot; : &quot;여&quot;\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"10\" text=\"bind:MEMO\" edittype=\"normal\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail",null,"89","294",null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","94","30",null,"29","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLine");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","94","58",null,"29","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLine");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static09","94","86",null,"29","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLine");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static15","94","114",null,"87","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLine");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static17","94","200",null,"29","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLine");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static13","94","228",null,"29","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLine");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static20","94","256",null,"29","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLine");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static04","94","284",null,"29","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("24");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLine");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static07","94","312",null,"118","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLine");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","98","34","192","21",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","98","62","192","21",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_format("AA-###");
            obj.set_cssclass("msk_WF_center");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","98","90","192","21",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_detail.addChild(obj.name, obj);

            obj = new ListBox("lst_pos","98","118","192","79",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","98","204","162","21",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var div_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset", obj);
            div_detail_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","98","232","162","21",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","98","260","192","21",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","98","316","192","111",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08","0","86","95","29",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("부서명");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static10","0","30","95","29",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("성명");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12","0","256","95","29",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("입사일자");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static14","0","114","95","87",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_text("직급");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static16","0","200","95","29",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_text("성별");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static19","0","284","95","29",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("21");
            obj.set_text("급여");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","0","58","95","29",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("22");
            obj.set_text("사원번호");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static03","0","228","95","29",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("23");
            obj.set_text("결혼여부");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static05","0","312","95","118",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("25");
            obj.set_text("비고사항");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_detailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","98","288","192","21",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_type("number");
            obj.set_format("#,###");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static06","0","0","97","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("27");
            obj.set_text("상세내용");
            obj.set_cssclass("sta_WF_title");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static04","0",null,"100.00%","10",null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_guide1");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","10","66","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","79",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","89","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static06",null,"78","10",null,"303","2",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","45","24","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"10","45","24","58",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","45","24","106",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("입력");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","45","24","154",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조회");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",814,529,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.cbo_dept","value","ds_emp","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.edt_name","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.msk_id","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.cal_date","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.msk_salary","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.chk_married","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_detail.form.txt_memo","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_detail.form.lst_pos","value","ds_emp","POS_CD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Script2.xfdl","Lib::Lib_Comm.xjs");
        this.addIncludeScript("Form_Script2.xfdl","Lib::Lib_Grid.xjs");
        this.addIncludeScript("Form_Script2.xfdl","Lib::Lib_Util.xjs");
        this.registerScript("Form_Script2.xfdl", function() {
        /*
        1. 메세지 치환
            msg.search.success : 조회되었습니다
            msg.save.success : 저장되었습니다.
            confirm.before.delete : 선택된 자료를 삭제 하시겠습니까?
            msg.err.validator.required : {0} 은(는) 필수 입력 항목입니다
            msg.err.validator.length : {0} 의 입력값은 {1} 자리이어야 합니다

        2. 단어 치환
            emp.name : 성명
            emp.id : 사원번호

        */
        this.executeIncludeScript("Lib::Lib_Comm.xjs"); /*include "Lib::Lib_Comm.xjs"*/;
        this.executeIncludeScript("Lib::Lib_Grid.xjs"); /*include "Lib::Lib_Grid.xjs"*/;
        this.executeIncludeScript("Lib::Lib_Util.xjs"); /*include "Lib::Lib_Util.xjs"*/;

        this.Form_onload = function(obj,e)
        {
            this.fn_commCode();
        };

        this.fn_commCode = function()
        {
            var sSvcID    = "svcCode";
            var sURL      = "http://demo.nexacro.com/edu/nexacro17/select_code.jsp";
            var sInDs     = "";
            var sOutDs    = "ds_dept=out_dept ds_pos=out_pos";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        }

        // Search Area Dept Popup
        this.div_search_btn_dept_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("popDept", 0, 0, 300, 400, null, null, "Form::Form_PopupDept.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");
            objChild.showModal(this.getOwnerFrame(), {}, this, "fn_popupCallback");

        /*
                var objApp = nexacro.getApplication();
                var nWidth = 300;
                var nHeight = 400;
                var nLeft = (objApp.mainframe.width  / 2) - Math.round(nWidth / 2);
                var nTop  = (objApp.mainframe.height / 2) - Math.round(nHeight / 2) ;
                nLeft = system.clientToScreenX(this, nLeft);
                nTop  = system.clientToScreenY(this, nTop);

                var sOpenStyle= "showtitlebar=true showstatusbar=false showontaskbar=true showcascadetitletext=false resizable=true autosize=true titletext=modeless";

        		nexacro.open(popDept, "Form::Form_PopupDept.xfdl", this.getOwnerFrame(), {}, sOpenStyle, nLeft, nTop, nWidth, nHeight, this);

        */
        };

        // Dept Popup Callback
        this.fn_popupCallback = function(sPopupId, sReturn)
        {
        	if(sReturn == undefined){
        		sReturn = "";
        	}
        	if(sPopupId == "popDept")
        	{
        		if(sReturn.length > 0){
        			var arrRtn = sReturn.split("|");
        			this.div_search.form.edt_deptCode.set_value(arrRtn[0]);
        			this.div_search.form.edt_deptName.set_value(arrRtn[1]);
        		}
        	}
        }

        // Search Area Gender
        this.div_search_rdo_gender_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "A"){
        		this.ds_emp.filter("");
        	}
        	else{
        		this.ds_emp.filter("GENDER == '" + e.postvalue + "'");
        	}
        };

        // Search Area Reset
        this.div_cont_btn_reset_onclick = function(obj,e)
        {
        	this.div_search.form.edt_deptCode.set_value("");
        	this.div_search.form.edt_deptName.set_value("");
        	this.div_search.form.rdo_gender.set_value("A");
        };




        // Retrieve Button
        this.btn_search_onclick = function(obj,e)
        {
        	var sDeptCode = this.div_search.form.edt_deptCode.value;
            var sSvcID    = "svcSelect";
            var sURL      = "http://demo.nexacro.com/edu/nexacro17/select_emp.jsp?sDept="+sDeptCode;
            var sInDs     = "";
            var sOutDs    = "ds_emp=out_emp";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        this.fn_callback = function(svcID, errCD, errMSG)
        {
        	if(errCD < 0){
        		this.alert("Error: " + errMSG);
        		return;
        	}
            if(svcID == "svcSelect"){
        		this.alert("조회되었습니다.");
                this.ds_emp.addColumn("CHK", "STRING", 1);
                for(var i=0; i<this.ds_emp.rowcount; i++){
                    this.ds_emp.setColumn(i, "CHK", "0");
                }
        	}
        	else if(svcID == "svcSave"){
        		this.alert("저장되었습니다.");
        	}
        }

        // Add Button
        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        	this.ds_emp.setColumn(this.ds_emp.rowposition, "HIRE_DATE", this.fn_today());
        };

        // Delete Button
        this.btn_del_onclick = function(obj,e)
        {
            if(this.confirm("선택된 자료를 삭제 하시겠습니까?")){
                this.ds_emp.deleteRow(this.ds_emp.rowposition);
            }
        };

        // Save Button
        this.btn_save_onclick = function(obj,e)
        {
            for(var i=0; i<this.ds_emp.rowcount; i++)
            {
                if(this.ds_emp.getRowType(i) == 1)  continue;

                var sName = this.ds_emp.getColumn(i, "FULL_NAME");
                if(this.fn_isNull(sName)){
                    this.alert("성명은 필수입력 항목입니다.");
                    this.ds_emp.set_rowposition(i);
                    this.grd_list.setCellPos(1);
                    this.grd_list.showEditor(true);
                    this.grd_list.setFocus();
                    return;
                }
                var sId = this.ds_emp.getColumn(i, "EMPL_ID");
                if(this.fn_isNull(sId)){
                    this.alert("사원번호는 필수입력 항목입니다.");
                    this.ds_emp.set_rowposition(i);
                    this.grd_list.setCellPos(2);
                    this.grd_list.showEditor(true);
                    this.grd_list.setFocus();
                    return;
                }
                if(sId.trim().length != 5){
                    this.alert("사원번호는 5자리 입니다.");
                    this.ds_emp.set_rowposition(i);
                    this.grd_list.setCellPos(2);
                    this.grd_list.showEditor(true);
                    this.grd_list.setFocus();
                    return;
                }
            }

            var sSvcID    = "svcSave";
            var sURL      = "http://demo.nexacro.com/edu/nexacro17/save_emp.jsp";
            var sInDs     = "in_emp=ds_emp:u";
            var sOutDs    = "";
            var sParam    = "in_var1="+nexacro.wrapQuote(this.titletext)
                          + " in_var2="+this.name;
            var sCallBack = "fn_callback";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        this.fn_isNull = function(sValue)
        {
            if(new String(sValue).valueOf() == "undefined") return true;
            if(sValue == null) return true;
            if(sValue.toString().length == 0 ) return true;
            return false;
        };

        this.grd_list_onheadclick = function(obj,e)
        {
        	var sType = obj.getCellProperty("head", e.cell, "displaytype");
            var sText = "";
        	if(sType == "checkboxcontrol"){
                var objDs = obj.getBindDataset();
                if(objDs.getRowCount() < 1) return;

                sText = obj.getCellProperty("head", e.cell, "text");
                sText = (sText == "1" ? "0" : "1");

        		for(var i=0; i < objDs.rowcount; i++){
        			objDs.setColumn(i, "CHK", sText);
        		}
        		obj.setCellProperty("Head", e.cell, "text", sText);
            }
            else{
                this.fn_gridSort(obj, e);
            }
        };


        // Today
        this.fn_today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");
        	return sToday;
        }

        // Sort Function Sample -  Grid Head Click
        this.CONST_NONE_MARK = "";
        this.CONST_ASC_MARK = "↑";
        this.CONST_DESC_MARK = "↓";
        this.nPrevCell = -1;
        this.fn_gridSort = function (obj, e)
        {
            if(obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") return;
            var objDs     = obj.getBindDataset();
        	var sColId    = obj.getCellProperty("body", e.cell, "text").split(":");
        	var sHeadText = obj.getCellText(-1, e.cell);

        	if(sHeadText.substr(sHeadText.length-1) == this.CONST_ASC_MARK){
        		obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_DESC_MARK);
        		objDs.set_keystring("S:-" + sColId[1]);
        	}
        	else if(sHeadText.substr(sHeadText.length-1) == this.CONST_DESC_MARK){
        		obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_ASC_MARK);
        		objDs.set_keystring("S:+" + sColId[1]);
        	}
        	else{
        		obj.setCellProperty("head", e.cell, "text", sHeadText + this.CONST_ASC_MARK);
        		objDs.set_keystring("S:+" + sColId[1]);
        	}

        	if(this.nPrevCell > -1 && this.nPrevCell != e.cell){
        		var sPrevText = obj.getCellText(-1, this.nPrevCell);
        		obj.setCellProperty("head", this.nPrevCell, "text", sPrevText.substr(0, sPrevText.length - 1));
        	}
        	this.nPrevCell = e.cell;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.div_search.form.btn_dept.addEventHandler("onclick",this.div_search_btn_dept_onclick,this);
            this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.div_search_rdo_gender_onitemchanged,this);
            this.div_search.form.btn_reset.addEventHandler("onclick",this.div_cont_btn_reset_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_detail.form.Static04.addEventHandler("onclick",this.Div00_Static04_onclick,this);
            this.div_detail.form.Static07.addEventHandler("onclick",this.Div00_Static07_onclick,this);
            this.div_detail.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };

        this.loadIncludeScript("Form_Script2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
