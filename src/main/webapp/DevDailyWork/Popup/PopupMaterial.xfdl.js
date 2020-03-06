(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PopupMaterial");
            this.set_titletext("Sample_PopupSub");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_MaterialList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MATNR\" type=\"STRING\" size=\"32\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_in", this);
            obj._setContents("<ColumnInfo><Column id=\"p_table_nm\" type=\"STRING\" size=\"256\"/><Column id=\"p_key_field_str\" type=\"STRING\" size=\"256\"/><Column id=\"p_select_field_str\" type=\"STRING\" size=\"256\"/><Column id=\"p_disp_field_str\" type=\"STRING\" size=\"256\"/><Column id=\"p_order_field\" type=\"STRING\" size=\"256\"/><Column id=\"p_key_value\" type=\"STRING\" size=\"256\"/><Column id=\"p_where\" type=\"STRING\" size=\"256\"/><Column id=\"p_user_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","16","56",null,null,"16","64",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_MaterialList");
            obj.set_autofittype("col");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("griduserproperty").set("no,sort,initial,export,!colfix,!rowfix,!filter,!cellcopypaste,!colhide,!personal,!subsum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SAP No\"/><Cell col=\"1\" text=\"Description\"/></Band><Band id=\"body\"><Cell text=\"bind:MATNR\"/><Cell col=\"1\" text=\"bind:ITEM_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0","16","100%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n16");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","16","100%","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n16");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,"100%","16",null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h16");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","16",null,null,"20","16","44",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Div("DivCrudButton","270","12",null,"32","16",null,null,null,null,null,this);
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_search");
            obj.set_url("Comm::Comm_CrudButton.xfdl");
            obj.set_taborder("5");
            obj.getSetter("InitCompVisEna").set("1:0:0:0,1:0:0:0");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("StaticMaterial","0","16","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Material");
            obj.set_cssclass("sta_WF_searchLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("EditMaterialNo","118","16","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Div("DivCnc",null,null,"128","28","16","16",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_CnC.xfdl");
            obj.getSetter("returnparms").set("MATNR,ITEM_NM");
            obj.getSetter("targetGrid").set("grd_list");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","EditMaterialNo","value","ds_in","p_key_value");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comm::Comm_CrudButton.xfdl");
            this._addPreloadList("fdl","Comm::Comm_CnC.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PopupMaterial.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("PopupMaterial.xfdl", function() {
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

        //공통코드 세팅 -- 할 일이 있다면 ...
        // this.COMBO_SET_STR = "ds_cmbPaymentTerms"+"#"+"ZTERM"		+" "
        // 					+"ds_cmbDocumentType"	+"#"+"ERP_DOC"      +" "
        // 					+"ds_cmbIncoterms"		+"#"+"INCO1"        +" "
        // 					+"ds_cmbCurrency"		+"#"+"CURRENCY"     +" "
        // 					;

        /********************************************************************************************
        @desc	3. OnLoad
        ********************************************************************************************/
        /*
         *	초기화 함수
         */
        this.fn_reset = function()
        {
        												var gtrcPos = "PopupMaterial.xfdl.Form_onload";
        	this.gfn_formOnLoad(this);		//	this.gfn_getAllInitData();

            this.paramStr = this.getOwnerFrame().pStr;			this.gtrace("paramStr--->"+this.paramStr, gtrcPos);
            this.paramNum = this.getOwnerFrame().pNum;			this.gtrace("paramNum--->"+this.paramNum, gtrcPos);
            this.paramObj = this.getOwnerFrame().pObj;			this.gtrace("paramObj--->"+this.paramObj, gtrcPos);

        	{	// 데이터셋 초기화
        		this.ds_in.clearData();
        		this.ds_in.addRow();
        	}
        }

        /********************************************************************************************
        @desc	4. Validation 처리
        ********************************************************************************************/



        /********************************************************************************************
        @desc	5. 서비스 호출(Transaction)
        ********************************************************************************************/
        /*++
        @desc	POList , POHistory Load
        */
        this.tfn_MaterialSearch = function(){

        	{ // 기본세팅 : clear , 사용자
        		this.ds_MaterialList.clearData();
        		//	this.ds_in.setColumn(0, "p_osno1", "1126195724");
        		var cUserId = this.gfn_getApplication().gds_User.getColumn(0, "USER_ID");
        		this.ds_in.setColumn(0, "p_user_id", cUserId);
        	}
        	{	// 개별세팅
        		this.ds_in.setColumn(0, "p_table_nm"			, " CMITEM");
        		this.ds_in.setColumn(0, "p_key_field_str"		, "MATNR＾ITEM_NM"		);	//	"＾" : 2 byte 꺽쇠
        		this.ds_in.setColumn(0, "p_select_field_str"	, "MATNR＾ITEM_NM"		);
        				// p_disp_field_str 원래는 "SAP No^Description"였음 : 이 값에 의해 Col id 를 가져옴
        				// 공백을 포함해서 데이터셋의 컬럼으로 사용할 수 없어서 변경했음
        		this.ds_in.setColumn(0, "p_disp_field_str"		, "MATNR＾ITEM_NM"		);
        		this.ds_in.setColumn(0, "p_order_field"			, "MATNR"		);
        		this.ds_in.setColumn(0, "p_where"				, " KEEP_DIV IN ('02','03') AND MATNR IS NOT NULL ");
        										//	> Material : " KEEP_DIV IN ('02','03') AND MATNR IS NOT NULL "
        	}

        	var sSvcID 			= "MaterialSearch";
        	var sURL 			= "AppSvr::common/commonAction.ppc";
        	var sInDatasets 	= "ds_in0=ds_in";
        	var sOutDatasets 	= "ds_MaterialList=ds_out0";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("PopupMapper.getCommonPopup");

        	//공통 트랜잭션 사용
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }
        /********************************************************************************************
        @desc	6. Callback
        ********************************************************************************************/
        /*++
        @desc	Callback Function
        */
        this.callbackFunction = function(strSvcID, nErrorCode, strErrorMsg)
        {
        							var gtrcPos = "PopupMaterial.xfdl.callbackFunction"
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

        		case "MaterialSearch"	:

        //					trace(this.ds_MaterialList.saveXML());

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
        /*
         *	조회
         */
        this.cfn_search = function()
        {
        // 	{	//Validation 세팅 : Sample_Validation.xfdl 참조
        // 		this.gfn_clearValidation(this.ds_in);
        // 		//this.gfn_setValidation(this.ds_in, "p_osno1", "오더번호", "required,length:10");
        // 		this.gfn_setValidation(this.ds_in, "p_osno1", "오더번호", "required");
        // 	}
        //
        //   	if(this.gfn_validation(this.ds_in, "A"))	// Validation == true 이면
        // 	{
        		// 조회실행
        		this.tfn_MaterialSearch();
        //	}
        };

        /********************************************************************************************/
        /**   8. 사용자 함수                                                                        */
        /********************************************************************************************/


        /********************************************************************************************/
        /**   9. 이벤트(Event) 처리                                                                 */
        /********************************************************************************************/

        this.Form_onload = function(obj,e)
        {
        	this.fn_reset();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
        };

        this.loadIncludeScript("PopupMaterial.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
