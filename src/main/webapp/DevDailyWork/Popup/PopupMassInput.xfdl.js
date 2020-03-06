(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PopupMassInput");
            this.set_titletext("Sample_PopupSub");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_MassInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"VendorCode\" type=\"STRING\" size=\"256\"/><Column id=\"chkVendorCode\" type=\"STRING\" size=\"256\"/><Column id=\"VendorName\" type=\"STRING\" size=\"256\"/><Column id=\"chkVendorName\" type=\"STRING\" size=\"256\"/><Column id=\"PaymentTerms\" type=\"STRING\" size=\"256\"/><Column id=\"chkPaymentTerms\" type=\"STRING\" size=\"256\"/><Column id=\"DocumentType\" type=\"STRING\" size=\"256\"/><Column id=\"chkDocumentType\" type=\"STRING\" size=\"256\"/><Column id=\"DeliveryDate\" type=\"STRING\" size=\"256\"/><Column id=\"chkDeliveryDate\" type=\"STRING\" size=\"256\"/><Column id=\"More\" type=\"STRING\" size=\"256\"/><Column id=\"chkMore\" type=\"STRING\" size=\"256\"/><Column id=\"Less\" type=\"STRING\" size=\"256\"/><Column id=\"chkLess\" type=\"STRING\" size=\"256\"/><Column id=\"Price\" type=\"STRING\" size=\"256\"/><Column id=\"chkPrice\" type=\"STRING\" size=\"256\"/><Column id=\"Currency\" type=\"STRING\" size=\"256\"/><Column id=\"chkCurrency\" type=\"STRING\" size=\"256\"/><Column id=\"PriceUnit\" type=\"STRING\" size=\"256\"/><Column id=\"chkPriceUnit\" type=\"STRING\" size=\"256\"/><Column id=\"Incoterms\" type=\"STRING\" size=\"256\"/><Column id=\"chkIncoterms\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbPaymentTerms", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbDocumentType", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbIncoterms", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbCurrency", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ColumnMap", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MassCol\" type=\"STRING\" size=\"256\"/><Column id=\"ds_POList\" type=\"STRING\" size=\"256\"/><Column id=\"ds_POHistory\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MassCol\">VendorCode</Col><Col id=\"ds_POList\">SUPPLIER_CODE1</Col><Col id=\"ds_POHistory\">LIFNR</Col></Row><Row><Col id=\"MassCol\">VendorName</Col><Col id=\"ds_POHistory\">NAME1</Col><Col id=\"ds_POList\">SUPPLIER_NAME</Col></Row><Row><Col id=\"MassCol\">PaymentTerms</Col><Col id=\"ds_POList\">ZTERM</Col><Col id=\"ds_POHistory\">ZTERM</Col></Row><Row><Col id=\"MassCol\">DocumentType</Col><Col id=\"ds_POList\">DOC_TYPE</Col><Col id=\"ds_POHistory\">DOC_TYPE</Col></Row><Row><Col id=\"MassCol\">DeliveryDate</Col><Col id=\"ds_POList\">DELIVERY_DATE</Col><Col id=\"ds_POHistory\">DELIVERY_LOC</Col></Row><Row><Col id=\"MassCol\">More</Col><Col id=\"ds_POList\">UEBTO</Col><Col id=\"ds_POHistory\">UEBTO</Col></Row><Row><Col id=\"MassCol\">Less</Col><Col id=\"ds_POList\">UNTTO</Col><Col id=\"ds_POHistory\">UNTTO</Col></Row><Row><Col id=\"MassCol\">Price</Col><Col id=\"ds_POList\">PRICE</Col><Col id=\"ds_POHistory\">NETPR</Col></Row><Row><Col id=\"MassCol\">Currency</Col><Col id=\"ds_POList\">CURRENCY</Col><Col id=\"ds_POHistory\">WAERS</Col></Row><Row><Col id=\"MassCol\">PriceUnit</Col><Col id=\"ds_POList\">MEINS</Col><Col id=\"ds_POHistory\">MEINS</Col></Row><Row><Col id=\"MassCol\">Incoterms</Col><Col id=\"ds_POList\">INCO1</Col><Col id=\"ds_POHistory\">INCO1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static08","0","0","16","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n16");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","16","100%","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n16");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,"100%","16",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h16");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","16",null,null,"20","16","44",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Div("DivCnc",null,null,"128","28","16","16",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_CnC.xfdl");
            obj.getSetter("returnparms").set("LIFNR,SUPPLY_F,NAME1");
            obj.getSetter("targetGrid").set("grd_list");
            this.addChild(obj.name, obj);

            obj = new Static("StaticVendor","60","18","138","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Vendor");
            obj.set_cssclass("sta_WF_searchLabel");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBoxVendorCode","50","18","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_VendorFromTo","218","18","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_SearchConditionFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.set_formscrolltype("none");
            obj.getSetter("SearchConditionType").set("VendorCode,ds_MassInput,VendorCode,VendorName,VendorCode3");
            this.addChild(obj.name, obj);

            obj = new Static("StaticPaymentTerms","60","45","138","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Payment Terms");
            obj.set_cssclass("sta_WF_searchLabel");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBoxPaymentTerms","50","45","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboPaymentTerms","218","45","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_cmbPaymentTerms");
            obj.set_codecolumn("CODE_CD");
            obj.set_datacolumn("CODE_NM");
            this.addChild(obj.name, obj);

            obj = new Static("StaticDocumentType","60","72","138","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Document Type");
            obj.set_cssclass("sta_WF_searchLabel");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBoxDocumentType","50","72","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboDocumentType","218","72","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_cmbDocumentType");
            obj.set_codecolumn("CODE_CD");
            obj.set_datacolumn("CODE_NM");
            this.addChild(obj.name, obj);

            obj = new Static("StaticDeliveryDate","60","99","138","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Delivery_Date");
            obj.set_cssclass("sta_WF_searchLabel");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBoxDeliveryDate","50","99","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("CalendarDeliveryDate","217","99","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("StaticMore","60","129","138","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Overdelv.Tol");
            obj.set_cssclass("sta_WF_searchLabel");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBoxMore","50","129","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Edit("EditMore","217","129","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("StaticLess","60","159","138","21",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Underdelv.Tol");
            obj.set_cssclass("sta_WF_searchLabel");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBoxLess","50","159","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Edit("EditLess","217","159","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("StaticPrice","60","187","138","21",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Price");
            obj.set_cssclass("sta_WF_searchLabel");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBoxPrice","50","187","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Edit("EditPrice","217","187","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("StaticCurrency","60","217","138","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Currency");
            obj.set_cssclass("sta_WF_searchLabel");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBoxCurrency","50","217","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboCurrency","218","217","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_cmbCurrency");
            obj.set_codecolumn("CODE_CD");
            obj.set_datacolumn("CODE_NM");
            this.addChild(obj.name, obj);

            obj = new Static("StaticPriceUnit","60","247","138","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Price Unit");
            obj.set_cssclass("sta_WF_searchLabel");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBoxPriceUnit","50","247","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Edit("EditPriceUnit","217","247","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("StaticIncoterms","60","277","138","21",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Incoterms");
            obj.set_cssclass("sta_WF_searchLabel");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBoxIncoterms","50","277","22","21",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboIncoterms","218","277","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_cmbIncoterms");
            obj.set_codecolumn("CODE_CD");
            obj.set_datacolumn("CODE_NM");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,370,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_VendorFromTo.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_VendorFromTo.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","CalendarDeliveryDate","value","ds_MassInput","DeliveryDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","EditMore","value","ds_MassInput","More");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","EditLess","value","ds_MassInput","Less");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","EditPrice","value","ds_MassInput","Price");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","EditPriceUnit","value","ds_MassInput","PriceUnit");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","CheckBoxShipment","value","ds_MassInput","p_shipment_yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","CheckBoxPaymentTerms","value","ds_MassInput","chkPaymentTerms");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","CheckBoxDocumentType","value","ds_MassInput","chkDocumentType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","CheckBoxDeliveryDate","value","ds_MassInput","chkDeliveryDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","CheckBoxMore","value","ds_MassInput","chkMore");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","CheckBoxLess","value","ds_MassInput","chkLess");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","CheckBoxPrice","value","ds_MassInput","chkPrice");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","CheckBoxCurrency","value","ds_MassInput","chkCurrency");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","CheckBoxPriceUnit","value","ds_MassInput","chkPriceUnit");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","CheckBoxVendorCode","value","ds_MassInput","chkVendorCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","CheckBoxIncoterms","value","ds_MassInput","chkIncoterms");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","ComboPaymentTerms","value","ds_MassInput","PaymentTerms");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","ComboDocumentType","value","ds_MassInput","DocumentType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","ComboCurrency","value","ds_MassInput","Currency");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","ComboIncoterms","value","ds_MassInput","Incoterms");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comm::Comm_CnC.xfdl");
            this._addPreloadList("fdl","Comm::Comm_SearchConditionFromTo.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PopupMassInput.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("PopupMassInput.xfdl", function() {
        /********************************************************************************************
        @desc	1. Include
        ********************************************************************************************/
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        /********************************************************************************************
        @desc	2. Form 변수 선언 ---------------
        ********************************************************************************************/
        this.paramStr;
        this.paramNum;
        this.paramObj;

        //공통코드 세팅
        this.COMBO_SET_STR = "ds_cmbPaymentTerms"	+"#"+"ZTERM"		+" "
        					+"ds_cmbDocumentType"	+"#"+"ERP_DOC"      +" "
        					+"ds_cmbIncoterms"		+"#"+"INCO1"        +" "
        					+"ds_cmbCurrency"		+"#"+"CURRENCY"     +" "
        					;

        /********************************************************************************************
        @desc	3. OnLoad
        ********************************************************************************************/
        /*
         *	온로드이벤트
         */
        this.Form_onload = function(obj,e)
        {
        	// 기본 데이터 가져오기 + 콤보세팅 + word	(콜백에서 fn_reset을 실행함.)
        	this.gfn_getAllInitData();
        };

        /*
         *	초기화 함수
         */
        this.fn_reset = function()
        {
        	var gtrcPos = "PopupMassInput.xfdl.fn_reset";

        	//팝업 띄울 때 넘기는 파람
        	{
        		this.paramStr = this.getOwnerFrame().pStr;			this.gtrace("paramStr--->"+this.paramStr, gtrcPos);
        		this.paramNum = this.getOwnerFrame().pNum;			this.gtrace("paramNum--->"+this.paramNum, gtrcPos);
        		this.paramObj = this.getOwnerFrame().pObj;			this.gtrace("paramObj--->"+this.paramObj, gtrcPos);
        	}

        	// 데이터셋 초기화
        	{
        		this.ds_MassInput.clearData();
        		this.ds_MassInput.addRow();
        	}

        	// 초기체크박스 Enable / Disable 세팅 : 탭에 따라 다름
        	var sColId;
        	for(var i = 0 ; i < this.ds_MassInput.colcount ; i++)
        	{
        		//	this.gtrace(this.ds_MassInput.getColID(i).substring(0,3), gtrcPos);
        		sColId = this.ds_MassInput.getColID(i);
        		if(sColId.substring(0,3)=="chk")
        		{
        			this.ds_MassInput.setColumn(0, sColId, "0");

        			var checkBoxName = "CheckBox"+sColId.substring(3, sColId.length);	//	this.gtrace("checkBoxName--->"+checkBoxName, gtrcPos);
        			var objCheckBox = this.lookup(checkBoxName);						//	this.gtrace("objCheckBox.name--->"+objCheckBox.name, gtrcPos);
        			if(this.paramStr=="PO_UPDATE")
        			{
        				switch(sColId)
        				{
        					case "chkVendorCode":
        					case "chkDeliveryDate":
        								objCheckBox.set_enable(false);
        						break;
        					default : break;
        				}
        			}
        		}
        	}
        }

        /********************************************************************************************
        @desc	4. Validation 처리
        ********************************************************************************************/



        /********************************************************************************************
        @desc	5. 서비스 호출(Transaction)
        ********************************************************************************************/

        /********************************************************************************************
        @desc	6. Callback
        ********************************************************************************************/
        /*++
        @desc	Callback Function
        */
        this.callbackFunction = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	var gtrcPos = "PopupMassInput.xfdl.callbackFunction"
        		this.gtrace("● MassInput콜백-트랜잭션", gtrcPos);

        	// 에러 체크 영역
        	if (nErrorCode < 0)
        	{
        		//	alert(this.gfn_removeJavaErrMsg(strErrorMsg));
        		alert(strErrorMsg);
        		return;
        	}

        	switch (strSvcID)
        	{
        		default:
        			break;
         	}
        }

        /*++
        @desc	Popup Callback
        */
        this.callbackFunc_pop = function(strID, variant)
        {
        }
        /********************************************************************************************
        @desc	7. Common Function
        ********************************************************************************************/

        /********************************************************************************************/
        /**   8. 사용자 함수                                                                       */
        /********************************************************************************************/
        //확인버튼 클릭
        this.fn_CommCnc_OK = function()
        {
        	var gtrcPos = "PopupMassInput.xfdl.fn_CommCnc_OK"
        		this.gtrace("● MassInput-확인버튼클릭", gtrcPos);
        	var oInputDs = this.opener.lookup(this.paramStr=="PO_CREATE"?"ds_POList":"ds_POHistory");
        		this.gtrace("oInputDs--->"+oInputDs.name, gtrcPos);

        	for(var k = 0 ; k < this.ds_MassInput.colcount ; k++)
        	{
        		var massColChkId = this.ds_MassInput.getColID(k);
        		if(massColChkId.substring(0,3)=="chk" && this.ds_MassInput.getColumn(0, massColChkId)=="1")
        		{
        			var massColId = massColChkId.substring(3, massColChkId.length);
        			var openerExecMassColId = this.ds_ColumnMap.lookup("MassCol", massColId, oInputDs.name);

        				this.gtrace("massColChkId--->"+massColChkId, gtrcPos);
        				this.gtrace("openerExecMassColId--->"+openerExecMassColId, gtrcPos);
        				this.gtrace("massColId--->"+massColId, gtrcPos);

        			//오프너의 체크된 row를 찾아서 세팅
        			for(var i = 0 ; i < oInputDs.rowcount ; i++)
        			{
        				var sROW_CHK = oInputDs.getColumn(i, "ROW_CHK");
        				if(sROW_CHK == "1")
        				{
        					oInputDs.setColumn(i, openerExecMassColId, this.ds_MassInput.getColumn(0, massColId));
        				}
        			}
        		}
        	}

        	this.close(true);
        }

        /********************************************************************************************/
        /**   9. 이벤트(Event) 처리                                                                 */
        /********************************************************************************************/

        this.ds_MassInput_oncolumnchanged = function(obj,e)
        {
        	//	코드를 체크할 때 네임도 동일하게 체크되도록 함 : "확인" 눌렀을 때 벤더명도 동일하게 적용하기위함
        	if(e.columnid=="chkVendorCode"){
        		obj.setColumn(e.row, "chkVendorName", e.newvalue);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.ds_MassInput.addEventHandler("oncolumnchanged",this.ds_MassInput_oncolumnchanged,this);
        };

        this.loadIncludeScript("PopupMassInput.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
