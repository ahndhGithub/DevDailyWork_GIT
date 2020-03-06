(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_Comp03");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(814,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">1001</Col><Col id=\"MENU_NAME\">메뉴1</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">1002</Col><Col id=\"MENU_NAME\">메뉴1-1</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">1003</Col><Col id=\"MENU_NAME\">메뉴1-1-1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">1004</Col><Col id=\"MENU_NAME\">메뉴1-1-2</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">1005</Col><Col id=\"MENU_NAME\">메뉴1-1-3</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">1008</Col><Col id=\"MENU_NAME\">메뉴1-2</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">1009</Col><Col id=\"MENU_NAME\">메뉴1-2-1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NAME\">메뉴1-2-2</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2001</Col><Col id=\"MENU_NAME\">메뉴2</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">2002</Col><Col id=\"MENU_NAME\">메뉴2-1</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">2003</Col><Col id=\"MENU_NAME\">메뉴2-1-1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2004</Col><Col id=\"MENU_NAME\">메뉴2-1-2</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2005</Col><Col id=\"MENU_NAME\">메뉴2-1-3</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2007</Col><Col id=\"MENU_NAME\">메뉴2-2</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">2008</Col><Col id=\"MENU_NAME\">메뉴2-2-1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2009</Col><Col id=\"MENU_NAME\">메뉴2-2-2</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2010</Col><Col id=\"MENU_NAME\">메뉴2-2-3</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2011</Col><Col id=\"MENU_NAME\">메뉴2-3</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">2012</Col><Col id=\"MENU_NAME\">메뉴2-3-1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2013</Col><Col id=\"MENU_NAME\">메뉴2-3-2</Col><Col id=\"LEVEL\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"CHK\">1</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"FULL_NAME\">Dillon</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20150401</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">AA003</Col><Col id=\"CHK\">1</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col><Col id=\"CHK\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","70","513","237",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"206\"/><Column size=\"117\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"Text\"/><Cell col=\"3\" text=\"Date\"/><Cell col=\"4\" text=\"Number\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"Sum\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;SALARY&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","602","70",null,"233","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_tree");
            obj.set_treeinitstatus("expand,all");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"Tree\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","11","335",null,"179","8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"69\"/><Column size=\"71\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" controlautosizingtype=\"none\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Edit\"/><Cell col=\"2\" text=\"MaskEdit\"/><Cell col=\"3\" text=\"Combo\"/><Cell col=\"4\" text=\"Calendar\"/><Cell col=\"5\" text=\"정형텍스트\"/><Cell col=\"6\" text=\"비정형텍스트\"/><Cell col=\"7\" text=\"숫자\"/><Cell col=\"8\" text=\"Expand\"/><Cell col=\"9\" text=\"Button\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:SALARY\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_code\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\" text=\"bind:DEPT_CD\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendarpopupsize=\"156 179\" calendarusetrailingday=\"true\"/><Cell col=\"5\" text=\"bind:EMPL_ID\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:FULL_NAME\"/><Cell col=\"7\" text=\"bind:SALARY\" displaytype=\"number\"/><Cell col=\"8\" edittype=\"none\" expandshow=\"show\" expandimage=\"URL(&quot;theme://images/btn_WF_ExpandN.png&quot;)\" expandsize=\"18\"/><Cell col=\"9\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"Save\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static142","13","550","158","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("head text 2줄");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","10","577","335","147",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_Grd02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Head&#13;&#10;Text\"/><Cell col=\"2\" text=\"Head&#13;&#10;Text\"/><Cell col=\"3\" text=\"Head&#13;&#10;Text\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"text\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static143","440","547","158","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("head  2줄");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04","440","576",null,"147","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_Grd02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"Column\"/><Cell col=\"2\" text=\"Column01\"/><Cell col=\"3\" colspan=\"2\" text=\"Column02\"/><Cell row=\"1\" col=\"2\" text=\"Column01-1\"/><Cell row=\"1\" col=\"3\" text=\"Column02-1\"/><Cell row=\"1\" col=\"4\" text=\"Column02-2\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"text\"/><Cell col=\"3\" displaytype=\"number\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","10",null,"30","554",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Components Design Guide - Grid");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","525","70","31","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("red");
            obj.set_text("h24");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","525","95","31","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("red");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","525","281","31","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_color("red");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07","345","577","31","46",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_color("red");
            obj.set_text("h46");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09","411","576","31","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_color("red");
            obj.set_text("h24");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_11","411","601","31","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_color("red");
            obj.set_text("h24");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_12","301","514","191","15",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_color("red");
            obj.set_text("Calendar Popup Size : 156*179");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRedTxt");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",814,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_Comp03.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
        };

        this.loadIncludeScript("Guide_Comp03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
