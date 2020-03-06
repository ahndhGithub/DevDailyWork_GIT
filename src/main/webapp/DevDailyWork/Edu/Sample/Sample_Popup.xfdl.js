(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_Popup");
            this.set_titletext("Sample_Popup");
            if (Form == this.constructor)
            {
                this._setFormPosition(814,529);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\"/><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\"/><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">BB0</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"CHK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04","0",null,"100.00%","10",null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_guide1");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","10","146","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Popup");
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

            obj = new Static("Static03","0","40",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
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

            obj = new Button("btn_1",null,"50","95","34","709",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("모달");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_2",null,"90","95","34","709",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("모달리스");
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
        this.registerScript("Sample_Popup.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };

        /*
         * @class 팝업오픈
         * @param {String} sPopupId	- 팝업ID
         * @param {String} sUrl	 - 팝업URL
         * @param {String} [oArg] - 전달값 {key:value, key:value}
         * @param {String} [sPopupCallback] - 팝업콜백
         * @param {Object} [oOption] - 팝업옵션 {key:value, key:value}
         *	                popuptype : 팝업종류(modal, modeless, modalsync, modalwindow) default:modal
         *	                top : 상단 좌표
         *	                left : 좌측 좌표
         *	                width : 넓이
         *	                height : 높이
         *	                layered : 투명 윈도우 default:false
         *	                opacity : 투명도 default:100
         *	                autosize : autosize default:false
         *	                titlebar : 타이틀바 default:false
         *	                title : 타이틀
         *                   var oOption   = {popuptype:"modeless",title:"모달리스 팝업",width:"300",height:"350"};
         */

        //모달
        this.btn_1_onclick = function(obj,e)
        {
            var sPopupId  = "modalPopup";
            var sUrl      = "Sample::Sample_PopupSub.xfdl";
        	var oArg      = {pStr:"Nexacro", pNum:1234, pObj:this.ds_emp};
        	var sCallBack = "fn_popupCallback";
            var oOption   = {title : this.gfn_getWord("popup.modal")};
        	this.gfn_openPopup(sPopupId, sUrl, oArg, sCallBack, oOption);
        };

        //모달리스
        this.btn_2_onclick = function(obj,e)
        {
            var sPopupId  = "modelessPopup";
            var sUrl      = "Sample::Sample_PopupSub.xfdl";
        	var oArg      = {pStr:"Nexacro", pNum:1234, pObj:this.ds_emp};
        	var sCallBack = "fn_popupCallback";
            var oOption   = {popuptype:"modeless",title:"모달리스 팝업",width:"300",height:"350"};
        	this.gfn_openPopup(sPopupId, sUrl, oArg, sCallBack, oOption);
        };

        this.fn_popupCallback = function(sPopId, sRtn)
        {
        //     var arrRtn = sRtn.split("|");
        //     trace(arrRtn[0]);
        //     trace(arrRtn[1]);


            var objRtn = JSON.parse(sRtn);

            trace(objRtn.deptcd);
            trace(objRtn.deptnm);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.btn_1.addEventHandler("onclick",this.btn_1_onclick,this);
            this.btn_2.addEventHandler("onclick",this.btn_2_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };

        this.loadIncludeScript("Sample_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
