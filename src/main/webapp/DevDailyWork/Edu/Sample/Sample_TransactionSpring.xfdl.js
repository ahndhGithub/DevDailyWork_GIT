(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_TransactionSpring");
            this.set_titletext("Sample_TransactionSpring");
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
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"S_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"S_DEPT\" type=\"STRING\" size=\"50\"/><Column id=\"S_POS\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","10","40",null,"39","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","61","8","80","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","61","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_searchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","141","8","61","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_searchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","342","8","61","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("직급");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_searchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","202","8","140","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("가나다");
            obj.set_value("01");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_pos","403","8","140","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            obj.set_text("가나다");
            obj.set_value("01");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"8","49","21","8",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","119",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"35\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"사원번호\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"입사일자\"/><Cell col=\"7\" text=\"급여\"/><Cell col=\"8\" text=\"성별\"/><Cell col=\"9\" text=\"결혼여부\"/><Cell col=\"10\" text=\"비고사항\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"4\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"5\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"6\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"7\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"8\" text=\"expr:GENDER == &quot;M&quot; ? &quot;남&quot; : &quot;여&quot;\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"10\" text=\"bind:MEMO\" edittype=\"normal\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0",null,"100.00%","10",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_guide1");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","10","66","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","79",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","89","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","45","24","190",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"10","45","24","240",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","45","24","290",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("입력");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","45","24","340",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("조회");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_code","359","10","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("공통코드");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelExport",null,"10","85","24","100",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("엑셀 Export");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelImport",null,"10","85","24","10",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("엑셀 Import");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",814,529,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_name","value","ds_search","S_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cmb_dept","value","ds_search","S_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cmb_pos","value","ds_search","S_POS");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample_TransactionSpring.xfdl", function() {

        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };

        this.fn_commCode = function()
        {
            var sSvcID    = "svcCode";
            var sURL      = "LocalUrl::selectCodeListMap.do";
            var sInDs     = "";
            var sOutDs    = "ds_dept=output1 ds_pos=output2";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        }

        // Retrieve Button
        this.btn_search_onclick = function(obj,e)
        {
            var sName = this.div_search.form.edt_name.value;
            var sDept = this.div_search.form.cmb_dept.value;
            var sPos  = this.div_search.form.cmb_pos.value;

            var sSvcID    = "svcSelect";
            var sURL      = "LocalUrl::selectEmpListMap.do";
            var sInDs     = "ds_search=ds_search";
            var sOutDs    = "ds_emp=output1";
            var sParam    = "pName="  + nexacro.wrapQuote(sName)
                          + " pDept=" + nexacro.wrapQuote(sDept)
                          + " pPos="  + nexacro.wrapQuote(sPos)

            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        };

        // Add Button
        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        };

        // Delete Button
        this.btn_del_onclick = function(obj,e)
        {
            this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        // Save Button
        this.btn_save_onclick = function(obj,e)
        {
            var sSvcID    = "svcSave";
            var sURL      = "LocalUrl::updateEmpMap.do";
            var sInDs     = "input=ds_emp:u";
            var sOutDs    = "";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        this.fn_callback = function(svcID, errCD, errMSG)
        {
            if(svcID == "svcSave"){
        		this.gfn_alert("msg.save.success");
        	}
        }

        this.div_search_btn_reset_onclick = function(obj,e)
        {
        	this.div_search.form.edt_name.set_value("");
            this.div_search.form.cmb_dept.set_value("");
            this.div_search.form.cmb_pos.set_value("");
        };

        this.btn_excel_onclick = function(obj,e)
        {
        	/**
        	* gfn_excelImport : excel import
        	* @param  : sDataset	- [string] dataset
        	* @param  : sSheet 		- [string] sheet name	  [생략가능 default:Sheet1]
        	* @param  : sHead  		- [string] Head 영역지정 [필수:: from:to]
        	* @param  : sBody  		- [string] body 영역지정 [생략가능default A2]
        	* @param  : sCallback	- [string] callback 함수[callback호출시 필수]
        	* @param  : sImportId 	- [string] import id 	 [callback호출시 필수]
        	* @param  : objForm  	- [object] form object	 [callback호출시 필수]
        	* @return : N/A
        	*/
        	this.gfn_excelImport("ds_emp", "sheet1", "A2", "fn_importCallback", "excelImport" , this);
        };

        this.btn_excelExport_onclick = function(obj,e)
        {
        	/**
        	* gfnExcelExport : excel export
        	* @param  : obj		   - [object]Grid Object
        	* @param  : sSheetName - [string]sheet name[생략가능] sheet명 30자까지가능, *?등 특수문자 불가
        	* @param  : sFileName  - [string]file name[생략가능]
        	* @return : N/A
        	* @example : this.gfnExcelExport(this.grid_export, "SheetName","");
        	*/
        	this.gfn_excelExport(this.grd_list, "","Excel_FileName");
        };


        this.btn_excelImport_onclick = function(obj,e)
        {
        	/**
        	* gfn_excelImport : excel import
        	* @param  : sDataset	- [string] dataset
        	* @param  : sSheet 		- [string] sheet name	  [생략가능 default:Sheet1]
        	* @param  : sHead  		- [string] Head 영역지정 [필수:: from:to]
        	* @param  : sBody  		- [string] body 영역지정 [생략가능default A2]
        	* @param  : sCallback	- [string] callback 함수[callback호출시 필수]
        	* @param  : sImportId 	- [string] import id 	 [callback호출시 필수]
        	* @param  : objForm  	- [object] form object	 [callback호출시 필수]
        	* @return : N/A
        	* @example :this.gfnExcelImportAll("dsList","SheetName","A1:G1","A2","fnImportCallback","import",this);
        	*/
        	this.gfn_excelImport("ds_emp", "sheet1", "A2", "fn_importCallback", "ds_emp" , this);
        };

        /**
         * @description import CallBack 함수(선택)
        */
        this.fn_importCallback = function(datasetId)
        {
        	trace("datasetId : " + datasetId + "\n" +this.ds_emp.saveXML());
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.div_search.form.btn_reset.addEventHandler("onclick",this.div_search_btn_reset_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_code.addEventHandler("onclick",this.fn_commCode,this);
            this.btn_excelExport.addEventHandler("onclick",this.btn_excelExport_onclick,this);
            this.btn_excelImport.addEventHandler("onclick",this.btn_excelImport_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
            this.ds_search.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_search.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_search.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };

        this.loadIncludeScript("Sample_TransactionSpring.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
