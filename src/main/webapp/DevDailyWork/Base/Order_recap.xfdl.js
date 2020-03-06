(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Order_recap");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmcdCompanyCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CENTER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEF_CENTER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_CD_F\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmcdSalesGroup", this);
            obj._setContents("<ColumnInfo><Column id=\"BU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BU_CD_F\" type=\"STRING\" size=\"50\"/><Column id=\"BU_CD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmcdOSFactory", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"30\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"30\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"30\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmcdYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"30\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"30\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"30\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmcdSeason", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"30\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"30\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"30\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdDic", this);
            obj._setContents("<ColumnInfo><Column id=\"GridId\" type=\"STRING\" size=\"256\"/><Column id=\"BindCol\" type=\"STRING\" size=\"256\"/><Column id=\"HeaderText\" type=\"STRING\" size=\"256\"/><Column id=\"ColWidth\" type=\"INT\" size=\"256\"/><Column id=\"bDisplaytype\" type=\"STRING\" size=\"256\"/><Column id=\"bEdittype\" type=\"STRING\" size=\"256\"/><Column id=\"bTextAlign\" type=\"STRING\" size=\"256\"/><Column id=\"bSuppress\" type=\"STRING\" size=\"256\"/><Column id=\"bPadding\" type=\"STRING\" size=\"256\"/><Column id=\"bCombodataset\" type=\"STRING\" size=\"256\"/><Column id=\"bCombocodecol\" type=\"STRING\" size=\"256\"/><Column id=\"bCombodatacol\" type=\"STRING\" size=\"256\"/><Column id=\"bCombotype\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskedittype\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskeditlimitbymask\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskeditformat\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BindCol\">CC_CUST_SHORT_NM</Col><Col id=\"HeaderText\">Buyer</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 1}</Col></Row><Row><Col id=\"BindCol\">OSM_ZYEAR</Col><Col id=\"HeaderText\">Year</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 2}</Col></Row><Row><Col id=\"BindCol\">OSM_ZSEASON</Col><Col id=\"HeaderText\">Season</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 3}</Col></Row><Row><Col id=\"BindCol\">CB_BU_NM</Col><Col id=\"HeaderText\">Sales Team</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 4}</Col></Row><Row><Col id=\"BindCol\">CI_MANAGER</Col><Col id=\"HeaderText\">Sales Person</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 5}</Col></Row><Row><Col id=\"BindCol\">V1_JAKJI_NM</Col><Col id=\"HeaderText\">Factory</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 6}</Col></Row><Row><Col id=\"BindCol\">OSM_WSHOP</Col><Col id=\"HeaderText\">Workshop</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 7}</Col></Row><Row><Col id=\"BindCol\">REF_ITEM_NM</Col><Col id=\"HeaderText\">Parent S/#</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 8}</Col></Row><Row><Col id=\"BindCol\">CI_ITEM_NM</Col><Col id=\"HeaderText\">S/#</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 9}</Col></Row><Row><Col id=\"BindCol\">OSM_VBELN</Col><Col id=\"HeaderText\">SO#</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 10}</Col></Row><Row><Col id=\"BindCol\">CI_ITEM_DESCRIPTION</Col><Col id=\"HeaderText\">Style Descrption</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 11}</Col></Row><Row><Col id=\"BindCol\">CI_ITEM_IMAGE_THUMB</Col><Col id=\"HeaderText\">Sketch</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 12}</Col><Col id=\"bDisplaytype\">imagecontrol</Col></Row><Row><Col id=\"BindCol\">OPD_ORDER_QTY</Col><Col id=\"HeaderText\">Order Q'TY</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 13}</Col></Row><Row><Col id=\"BindCol\">OPM_DELIVERY_DATE</Col><Col id=\"HeaderText\">S/D</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 14}</Col></Row><Row><Col id=\"BindCol\">SALES_PRICE</Col><Col id=\"HeaderText\">FOB</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 15}</Col></Row><Row><Col id=\"BindCol\">SALES_AMOUNT</Col><Col id=\"HeaderText\">AMOUNT</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 16}</Col></Row><Row><Col id=\"BindCol\">OSC_U_CPRICE</Col><Col id=\"HeaderText\">OS CM</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 17}</Col></Row><Row><Col id=\"BindCol\">V4_SET_TYPE_NM</Col><Col id=\"HeaderText\">Set type</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 18}</Col></Row><Row><Col id=\"BindCol\">OSD_START_PD_DATE</Col><Col id=\"HeaderText\">Plan Cutting Date</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 19}</Col></Row><Row><Col id=\"BindCol\">OSD_MTL_TAR_ETA</Col><Col id=\"HeaderText\">Material Target ETA</Col><Col id=\"bSuppress\">{GrId : [&quot;GridPoInfo1&quot;,&quot;GridPoInfo2&quot;,&quot;GridPoInfo3&quot;], sPrsVal : 20}</Col></Row><Row><Col id=\"BindCol\">OSH_MARK_UP_RATE</Col><Col id=\"HeaderText\">MU</Col></Row><Row><Col id=\"BindCol\">PO_OPM_PO_DESC</Col><Col id=\"HeaderText\">PO#</Col></Row><Row><Col id=\"BindCol\">CC1_COLOR_DESC</Col><Col id=\"HeaderText\">COLOR</Col></Row><Row><Col id=\"BindCol\">CS1_SIZE_DESC</Col><Col id=\"HeaderText\">SIZE</Col></Row><Row><Col id=\"BindCol\">PO_OPD_ORDER_QTY</Col><Col id=\"HeaderText\">PO Q'ty</Col></Row><Row><Col id=\"BindCol\">PO_SALES_PRICE</Col><Col id=\"HeaderText\">FOB Price</Col></Row><Row><Col id=\"BindCol\">PO_SALES_AMOUNT</Col><Col id=\"HeaderText\">FOB Amount</Col></Row><Row><Col id=\"BindCol\">PO_OPM_DELIVERY_DATE</Col><Col id=\"HeaderText\">Ship date</Col></Row><Row><Col id=\"BindCol\">PO_OPM_NATIONAL_VAL</Col><Col id=\"HeaderText\">Destination</Col></Row><Row><Col id=\"BindCol\">PO_OPM_REDAT</Col><Col id=\"HeaderText\">PO Issue Date</Col></Row><Row><Col id=\"BindCol\">SHIP_E_OUTPUT_DATE</Col><Col id=\"HeaderText\">Garment actual X-factory date</Col></Row><Row><Col id=\"BindCol\">SIHP_QTY</Col><Col id=\"HeaderText\">Garment actual shipment q'ty</Col></Row><Row><Col id=\"BindCol\">CFDATE</Col><Col id=\"HeaderText\">Approval Date</Col></Row><Row><Col id=\"BindCol\">AMOND</Col><Col id=\"HeaderText\">Amend</Col></Row><Row><Col id=\"BindCol\">OSSTS_NM</Col><Col id=\"HeaderText\">Progress</Col></Row><Row><Col id=\"BindCol\">APPTY_NM</Col><Col id=\"HeaderText\">Approval Type</Col></Row><Row><Col id=\"BindCol\">REMARK</Col><Col id=\"HeaderText\">Remark</Col></Row><Row><Col id=\"BindCol\">MEMO</Col><Col id=\"HeaderText\">Memo</Col></Row><Row><Col id=\"BindCol\">U_WAERK</Col><Col id=\"HeaderText\">Currency</Col></Row><Row><Col id=\"BindCol\">ROH_COST</Col><Col id=\"HeaderText\">Raw Material Cost</Col></Row><Row><Col id=\"BindCol\">VERP_COST</Col><Col id=\"HeaderText\">Trim Material Cost</Col></Row><Row><Col id=\"BindCol\">EXPORT_COST</Col><Col id=\"HeaderText\">Export Cost</Col></Row><Row><Col id=\"BindCol\">T2001</Col><Col id=\"HeaderText\">CM1-1</Col></Row><Row><Col id=\"BindCol\">T2002</Col><Col id=\"HeaderText\">COST OF KOREA</Col></Row><Row><Col id=\"BindCol\">T2003</Col><Col id=\"HeaderText\">EXPENSES FOR FQA_PCQS_LOCAL HEAD OFFICE</Col></Row><Row><Col id=\"BindCol\">T2004</Col><Col id=\"HeaderText\">CM1-2</Col></Row><Row><Col id=\"BindCol\">T2005</Col><Col id=\"HeaderText\">CM3</Col></Row><Row><Col id=\"BindCol\">T2006</Col><Col id=\"HeaderText\">CM1-3</Col></Row><Row><Col id=\"BindCol\">T2011</Col><Col id=\"HeaderText\">SHARE OF INVESTMENT COSTS</Col></Row><Row><Col id=\"BindCol\">T3011</Col><Col id=\"HeaderText\">QUILTING CHARGE</Col></Row><Row><Col id=\"BindCol\">T3012</Col><Col id=\"HeaderText\">PRINT CHARGE</Col></Row><Row><Col id=\"BindCol\">T3013</Col><Col id=\"HeaderText\">WASHING CHARGE</Col></Row><Row><Col id=\"BindCol\">T3014</Col><Col id=\"HeaderText\">EMBROIDERY CHAR</Col></Row><Row><Col id=\"BindCol\">T3015</Col><Col id=\"HeaderText\">BEAD CHARGE</Col></Row><Row><Col id=\"BindCol\">T3016</Col><Col id=\"HeaderText\">PACKING CHARGE</Col></Row><Row><Col id=\"BindCol\">T3021</Col><Col id=\"HeaderText\">FREIGHT CHARGE</Col></Row><Row><Col id=\"BindCol\">T3022</Col><Col id=\"HeaderText\">INLAND CHARGE</Col></Row><Row><Col id=\"BindCol\">T3023</Col><Col id=\"HeaderText\">HANDLING CHARGE</Col></Row><Row><Col id=\"BindCol\">T3031</Col><Col id=\"HeaderText\">SAMPLE CHARGE</Col></Row><Row><Col id=\"BindCol\">T3051</Col><Col id=\"HeaderText\">INSPECTION CHARGE</Col></Row><Row><Col id=\"BindCol\">T3061</Col><Col id=\"HeaderText\">COMMISSION</Col></Row><Row><Col id=\"BindCol\">T3071</Col><Col id=\"HeaderText\">DDP CHARGE</Col></Row><Row><Col id=\"BindCol\">T3072</Col><Col id=\"HeaderText\">DDU CHARGE</Col></Row><Row><Col id=\"BindCol\">T3073</Col><Col id=\"HeaderText\">TRUCKING CHARGE</Col></Row><Row><Col id=\"BindCol\">T3111</Col><Col id=\"HeaderText\">EPD CHARGE</Col></Row><Row><Col id=\"BindCol\">T3301</Col><Col id=\"HeaderText\">COMMON COSTS</Col></Row><Row><Col id=\"BindCol\">T3801</Col><Col id=\"HeaderText\">OTHERS 1</Col></Row><Row><Col id=\"BindCol\">T3802</Col><Col id=\"HeaderText\">OTHERS 2</Col></Row><Row><Col id=\"BindCol\">LINE_NM</Col><Col id=\"HeaderText\">Line#</Col></Row><Row><Col id=\"BindCol\">PRD_S_DATE</Col><Col id=\"HeaderText\">Start date</Col></Row><Row><Col id=\"BindCol\">PRD_E_DATE</Col><Col id=\"HeaderText\">End date</Col></Row><Row><Col id=\"BindCol\">WORKING_DAYS</Col><Col id=\"HeaderText\">&quot;Working</Col></Row><Row><Col id=\"BindCol\">Days&quot;</Col></Row><Row><Col id=\"BindCol\">LINE_PREVIOUS_QTY</Col><Col id=\"HeaderText\">&quot;Line Q'ty</Col></Row><Row><Col id=\"BindCol\">(-1Days)&quot;</Col></Row><Row><Col id=\"BindCol\">LINE_PRD_QTY</Col><Col id=\"HeaderText\">Line Q'ty</Col></Row><Row><Col id=\"BindCol\">LINE_ACC_PRD_QTY</Col><Col id=\"HeaderText\">Acc Output Each Line</Col></Row><Row><Col id=\"BindCol\">AVG_TAR</Col><Col id=\"HeaderText\">Target Output</Col></Row><Row><Col id=\"BindCol\">AVG_LINE_PRD_QTY</Col><Col id=\"HeaderText\">Avg. Line Output Q'ty</Col></Row><Row><Col id=\"BindCol\">TTL_CT_QTY</Col><Col id=\"HeaderText\">Cutting Q'ty</Col></Row><Row><Col id=\"BindCol\">TTL_SW_QTY</Col><Col id=\"HeaderText\">Sewing Q'ty</Col></Row><Row><Col id=\"BindCol\">TTL_FS_QTY</Col><Col id=\"HeaderText\">Metal Q'ty</Col></Row><Row><Col id=\"BindCol\">TTL_PL_QTY</Col><Col id=\"HeaderText\">Polybag Q'ty</Col></Row><Row><Col id=\"BindCol\">TTL_PK_QTY</Col><Col id=\"HeaderText\">Packing Q'ty</Col></Row><Row><Col id=\"BindCol\">TTL_SHIP_QTY</Col><Col id=\"HeaderText\">Shipping Q'ty</Col></Row><Row><Col id=\"BindCol\">FIT_STATUS</Col><Col id=\"HeaderText\">FIT STATUS</Col><Col id=\"bDisplaytype\">combocontrol</Col><Col id=\"bEdittype\">combo</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bCombodataset\">ds_cmcdFitStatus</Col><Col id=\"bCombocodecol\">CODE_CD</Col><Col id=\"bCombodatacol\">CODE_NM</Col><Col id=\"bCombotype\">filterlike</Col></Row><Row><Col id=\"BindCol\">FIT_APPRV_DATE</Col><Col id=\"HeaderText\">FIT APPROVed date</Col><Col id=\"bEdittype\">date</Col><Col id=\"bDisplaytype\">date</Col><Col id=\"ColWidth\">100</Col></Row><Row><Col id=\"BindCol\">PP_PACK_DUE_DATE</Col><Col id=\"HeaderText\">PP PACKAGE  DUE DATE</Col><Col id=\"ColWidth\">100</Col><Col id=\"bDisplaytype\">date</Col><Col id=\"bEdittype\">date</Col></Row><Row><Col id=\"BindCol\">PP_SUBM_DUE_DATE</Col><Col id=\"HeaderText\">PP Submit DUE DATE</Col><Col id=\"ColWidth\">100</Col><Col id=\"bDisplaytype\">date</Col><Col id=\"bEdittype\">date</Col></Row><Row><Col id=\"BindCol\">PP_APPRV_DATE</Col><Col id=\"HeaderText\">PP Approval Due</Col><Col id=\"bDisplaytype\">자동계산</Col></Row><Row><Col id=\"BindCol\">GMT_TEST_DUE_DATE</Col><Col id=\"HeaderText\">Garment Test due date</Col></Row><Row><Col id=\"BindCol\">GMT_ACT_TEST_DATE</Col><Col id=\"HeaderText\">Garment Actual Test date</Col></Row><Row><Col id=\"BindCol\">TOP_SUBM_DUE_DATE</Col><Col id=\"HeaderText\">TOP SUBMIT DUE DATE</Col></Row><Row><Col id=\"BindCol\">FIRST_SHIP_DATE</Col><Col id=\"HeaderText\">first Ship date</Col></Row><Row><Col id=\"BindCol\">REMARK1</Col><Col id=\"HeaderText\">Remark</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_in", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\"/><Column id=\"p_center_cd\" type=\"STRING\" size=\"256\"/><Column id=\"p_so_key_sta\" type=\"STRING\" size=\"256\"/><Column id=\"p_so_key_end\" type=\"STRING\" size=\"256\"/><Column id=\"p_so_key_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_item_cd_sta\" type=\"STRING\" size=\"256\"/><Column id=\"p_item_cd_end\" type=\"STRING\" size=\"256\"/><Column id=\"p_item_cd_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_buyer_cd_sta\" type=\"STRING\" size=\"256\"/><Column id=\"p_buyer_cd_end\" type=\"STRING\" size=\"256\"/><Column id=\"p_buyer_cd_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_sales_team_sta\" type=\"STRING\" size=\"256\"/><Column id=\"p_sales_team_end\" type=\"STRING\" size=\"256\"/><Column id=\"p_sales_team_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_jakji_sta\" type=\"STRING\" size=\"256\"/><Column id=\"p_jakji_end\" type=\"STRING\" size=\"256\"/><Column id=\"p_jakji_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_year_sta\" type=\"STRING\" size=\"256\"/><Column id=\"p_year_end\" type=\"STRING\" size=\"256\"/><Column id=\"p_season_sta\" type=\"STRING\" size=\"256\"/><Column id=\"p_season_end\" type=\"STRING\" size=\"256\"/><Column id=\"p_season_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_buy_date_sta\" type=\"STRING\" size=\"256\"/><Column id=\"p_buy_date_end\" type=\"STRING\" size=\"256\"/><Column id=\"p_user_id\" type=\"STRING\" size=\"256\"/><Column id=\"p_radio\" type=\"STRING\" size=\"256\"/><Column id=\"p_shipment_yn\" type=\"STRING\" size=\"256\"/><Column id=\"p_sewi_type\" type=\"STRING\" size=\"256\"/><Column id=\"p_perf_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listStyle", this);
            obj._setContents("<ColumnInfo><Column id=\"CC_CUST_SHORT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZSEASON\" type=\"STRING\" size=\"256\"/><Column id=\"CB_BU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"V1_JAKJI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_WSHOP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_VBELN\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_IMAGE_THUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OPD_ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"OPM_DELIVERY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OSC_U_CPRICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"V4_SET_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_START_PD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_MTL_TAR_ETA\" type=\"STRING\" size=\"256\"/><Column id=\"OSH_MARK_UP_RATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listPoInfo1", this);
            obj._setContents("<ColumnInfo><Column id=\"CC_CUST_SHORT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZSEASON\" type=\"STRING\" size=\"256\"/><Column id=\"CB_BU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"V1_JAKJI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_WSHOP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_VBELN\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_IMAGE_THUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OPD_ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"OPM_DELIVERY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OSC_U_CPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"V4_SET_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_START_PD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_MTL_TAR_ETA\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPM_PO_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPD_ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PO_SALES_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"PO_SALES_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPM_DELIVERY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPM_NATIONAL_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPM_REDAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listPoInfo2", this);
            obj._setContents("<ColumnInfo><Column id=\"CC_CUST_SHORT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZSEASON\" type=\"STRING\" size=\"256\"/><Column id=\"CB_BU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"V1_JAKJI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_WSHOP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_VBELN\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_IMAGE_THUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OPD_ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"OPM_DELIVERY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OSC_U_CPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"V4_SET_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_START_PD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_MTL_TAR_ETA\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPM_PO_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CC1_COLOR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CS1_SIZE_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPD_ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PO_SALES_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"PO_SALES_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPM_DELIVERY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPM_NATIONAL_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPM_REDAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listPoInfo3", this);
            obj._setContents("<ColumnInfo><Column id=\"CC_CUST_SHORT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZSEASON\" type=\"STRING\" size=\"256\"/><Column id=\"CB_BU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"V1_JAKJI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_WSHOP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_VBELN\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_IMAGE_THUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OPD_ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"OPM_DELIVERY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OSC_U_CPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"V4_SET_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_START_PD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_MTL_TAR_ETA\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPM_PO_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CC1_COLOR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CS1_SIZE_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPD_ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PO_SALES_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"PO_SALES_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPM_DELIVERY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPM_NATIONAL_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PO_OPM_REDAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listOs", this);
            obj._setContents("<ColumnInfo><Column id=\"CC_CUST_SHORT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZSEASON\" type=\"STRING\" size=\"256\"/><Column id=\"CB_BU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"V1_JAKJI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_WSHOP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_VBELN\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_IMAGE_THUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OPD_ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"OPM_DELIVERY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OSC_U_CPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"V4_SET_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_START_PD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_MTL_TAR_ETA\" type=\"STRING\" size=\"256\"/><Column id=\"CFDATE\" type=\"STRING\" size=\"256\"/><Column id=\"AMOND\" type=\"STRING\" size=\"256\"/><Column id=\"OSH_MARK_UP_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"OSSTS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPTY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO\" type=\"STRING\" size=\"256\"/><Column id=\"U_WAERK\" type=\"STRING\" size=\"256\"/><Column id=\"NETWR\" type=\"STRING\" size=\"256\"/><Column id=\"ROH_COST\" type=\"STRING\" size=\"256\"/><Column id=\"VERP_COST\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORT_COST\" type=\"STRING\" size=\"256\"/><Column id=\"T2001\" type=\"STRING\" size=\"256\"/><Column id=\"T2002\" type=\"STRING\" size=\"256\"/><Column id=\"T2003\" type=\"STRING\" size=\"256\"/><Column id=\"T2004\" type=\"STRING\" size=\"256\"/><Column id=\"T2005\" type=\"STRING\" size=\"256\"/><Column id=\"T2006\" type=\"STRING\" size=\"256\"/><Column id=\"T2011\" type=\"STRING\" size=\"256\"/><Column id=\"T3011\" type=\"STRING\" size=\"256\"/><Column id=\"T3012\" type=\"STRING\" size=\"256\"/><Column id=\"T3013\" type=\"STRING\" size=\"256\"/><Column id=\"T3014\" type=\"STRING\" size=\"256\"/><Column id=\"T3015\" type=\"STRING\" size=\"256\"/><Column id=\"T3016\" type=\"STRING\" size=\"256\"/><Column id=\"T3021\" type=\"STRING\" size=\"256\"/><Column id=\"T3022\" type=\"STRING\" size=\"256\"/><Column id=\"T3023\" type=\"STRING\" size=\"256\"/><Column id=\"T3031\" type=\"STRING\" size=\"256\"/><Column id=\"T3051\" type=\"STRING\" size=\"256\"/><Column id=\"T3061\" type=\"STRING\" size=\"256\"/><Column id=\"T3071\" type=\"STRING\" size=\"256\"/><Column id=\"T3072\" type=\"STRING\" size=\"256\"/><Column id=\"T3073\" type=\"STRING\" size=\"256\"/><Column id=\"T3111\" type=\"STRING\" size=\"256\"/><Column id=\"T3301\" type=\"STRING\" size=\"256\"/><Column id=\"T3801\" type=\"STRING\" size=\"256\"/><Column id=\"T3802\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listProduction", this);
            obj._setContents("<ColumnInfo><Column id=\"CC_CUST_SHORT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZSEASON\" type=\"STRING\" size=\"256\"/><Column id=\"CB_BU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"V1_JAKJI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_WSHOP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_VBELN\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_IMAGE_THUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OPD_ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"OPM_DELIVERY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OSC_U_CPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"V4_SET_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_START_PD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_MTL_TAR_ETA\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_E_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKING_DAYS\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_PREVIOUS_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_PRD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_ACC_PRD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_TAR\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_LINE_PRD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TTL_CT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TTL_SW_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TTL_FS_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TTL_PL_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TTL_PK_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TTL_SHIP_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Count", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">100</Col></Row><Row><Col id=\"No\">200</Col></Row><Row><Col id=\"No\">300</Col></Row><Row><Col id=\"No\">400</Col></Row><Row><Col id=\"No\">500</Col></Row><Row><Col id=\"No\">600</Col></Row><Row><Col id=\"No\">700</Col></Row><Row><Col id=\"No\">800</Col></Row><Row><Col id=\"No\">900</Col></Row><Row><Col id=\"No\">1000</Col></Row><Row><Col id=\"No\">2000</Col></Row><Row><Col id=\"No\">3000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_trans_Sample", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_result_Sample", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listSample", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CC_CUST_SHORT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_SO_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_CENTER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_ZSEASON\" type=\"STRING\" size=\"256\"/><Column id=\"CB_BU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"V1_JAKJI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_WSHOP\" type=\"STRING\" size=\"256\"/><Column id=\"REF_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSM_VBELN\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CI_ITEM_IMAGE_THUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OPD_ORDER_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"OPM_DELIVERY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OSC_U_CPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"V4_SET_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_START_PD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_MTL_TAR_ETA\" type=\"STRING\" size=\"256\"/><Column id=\"FIT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FIT_APPRV_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PP_PACK_DUE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PP_SUBM_DUE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PP_APPRV_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"GMT_TEST_DUE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"GMT_ACT_TEST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TOP_SUBM_DUE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FIRST_SHIP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmcdFitStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"30\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"30\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"30\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivCrudButton","8","8",null,"32","8",null,null,null,null,null,this);
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_search");
            obj.set_url("Comm::Comm_CrudButton.xfdl");
            obj.set_taborder("0");
            obj.getSetter("InitCompVisEna").set("1:0:1:0,1:1:1:1");
            obj.getSetter("fn_searchName").set("");
            obj.getSetter("fn_newName").set("");
            obj.getSetter("fn_saveName").set("");
            obj.getSetter("fn_deleteName").set("");
            this.addChild(obj.name, obj);

            obj = new Div("DivCondition","8","40",null,"170","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("StaticCompany","0","8","131","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("0");
            obj.set_text("Company");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticSalesOrder","0","33","131","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("1");
            obj.set_text("Sales Order");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticSalesGroup","660","8","131","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("2");
            obj.set_text("Sales Group");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticOSFactory","660","33","131","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("3");
            obj.set_text("OS Factory");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticBuyDate","660","58","131","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("4");
            obj.set_text("Buy Date");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticStyle","0","58","131","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("5");
            obj.set_text("Style");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticYear","0","83","151","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("6");
            obj.set_text("Year");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticOption","0","108","131","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("7");
            obj.set_text("Option");
            obj.set_cssclass("sta_WF_searchLabel");
            obj.set_visible("false");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Combo("div_company","148","8","171","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_cmcdCompanyCode");
            obj.set_codecolumn("CENTER_CD");
            obj.set_datacolumn("CENTER_NM");
            obj.set_text("");
            obj.set_value("4");
            obj.set_index("0");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("div_calFromToBuyDate","808","58","431","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_CalFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.getSetter("SearchConditionType").set("BuyDate,ds_in,p_buy_date_sta,p_buy_date_end");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Radio("Radio00","148","106","443","53",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_fittocontents("width");
            obj.set_columncount("4");
            obj.set_rowcount("2");
            obj.set_visible("false");
            var DivCondition_form_Radio00_innerdataset = new nexacro.NormalDataset("DivCondition_form_Radio00_innerdataset", obj);
            DivCondition_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Style</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">PO Info. 1</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">PO Info. 2 - Color</Col></Row><Row><Col id=\"datacolumn\">PO Info. 3 - Color Size</Col><Col id=\"codecolumn\">4</Col></Row><Row><Col id=\"datacolumn\">OS</Col><Col id=\"codecolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">Production</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">Sample</Col></Row></Rows>");
            obj.set_innerdataset(DivCondition_form_Radio00_innerdataset);
            obj.set_text("Style");
            obj.set_value("1");
            obj.set_index("0");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticSeason","660","83","151","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("11");
            obj.set_text("Season");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new CheckBox("CheckBoxShipment","808","106","97","23",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("12");
            obj.set_text("Shipment");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Radio("RadioSewing","808","128","181","28",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("13");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            var DivCondition_form_RadioSewing_innerdataset = new nexacro.NormalDataset("DivCondition_form_RadioSewing_innerdataset", obj);
            DivCondition_form_RadioSewing_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SEWING</Col><Col id=\"datacolumn\">Sewing</Col></Row><Row><Col id=\"codecolumn\">END-LINE</Col><Col id=\"datacolumn\">End-line pass</Col></Row></Rows>");
            obj.set_innerdataset(DivCondition_form_RadioSewing_innerdataset);
            obj.set_text("Sewing");
            obj.set_value("SEWING");
            obj.set_index("0");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("div_SalesOrderFromTo","148","33","431","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_SearchConditionFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.set_formscrolltype("none");
            obj.getSetter("SearchConditionType").set("SalesOrderNo,ds_in,p_so_key_sta,p_so_key_end,p_so_key_list");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("div_StyleFromTo","148","58","431","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_SearchConditionFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.set_formscrolltype("none");
            obj.getSetter("SearchConditionType").set("StyleNo,ds_in,p_item_cd_sta,p_item_cd_end,p_item_cd_list");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticSubOption","660","108","131","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("16");
            obj.set_text("Sub Option");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticProductionOption","660","133","131","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("17");
            obj.set_text("Production Option");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("div_YearFromTo","148","83","431","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_ComboConditionFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.set_formscrolltype("none");
            obj.getSetter("SearchConditionType").set("Year,ds_in,ds_cmcdYear,p_year_sta,p_year_end");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("div_OsFactory","808","33","431","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_ComboConditionFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.set_formscrolltype("none");
            obj.getSetter("SearchConditionType").set("OsFactory,ds_in,ds_cmcdOSFactory,p_jakji_sta,p_jakji_end,p_jakji_list");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("div_SalesGroup","808","8","431","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("20");
            obj.set_url("Comm::Comm_ComboConditionFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.set_formscrolltype("none");
            obj.getSetter("SearchConditionType").set("SalesGroup,ds_in,ds_cmcdSalesGroup,p_sales_team_sta,p_sales_team_end,p_sales_team_list");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("div_Season","808","83","431","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_ComboConditionFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.set_formscrolltype("none");
            obj.getSetter("SearchConditionType").set("Season,ds_in,ds_cmcdSeason,p_season_sta,p_season_end,p_season_list");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Calendar("calPerf","1030","133","171","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Tab("TabOrderRecap","8","216",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabpageStyle",this.TabOrderRecap);
            obj.set_text("Style");
            this.TabOrderRecap.addChild(obj.name, obj);

            obj = new Div("DivBtnGfilter",null,"8","40","28","58",null,null,null,null,null,this.TabOrderRecap.TabpageStyle.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("Comm::cmmGridFilterButton.xfdl");
            obj.getSetter("targetGrid").set("TabOrderRecap.TabpageStyle.form.GridStyle");
            obj.set_visible("true");
            this.TabOrderRecap.TabpageStyle.addChild(obj.name, obj);

            obj = new Div("DivBtnFormat",null,"8","40","28","10",null,null,null,null,null,this.TabOrderRecap.TabpageStyle.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("Comm::cmmFormatMenuButton.xfdl");
            obj.getSetter("targetGrid").set("TabOrderRecap.TabpageStyle.form.GridStyle");
            obj.set_visible("true");
            this.TabOrderRecap.TabpageStyle.addChild(obj.name, obj);

            obj = new Grid("GridStyle","8","50",null,null,"8","8",null,null,null,null,this.TabOrderRecap.TabpageStyle.form);
            obj.set_taborder("2");
            obj.getSetter("griduserproperty").set("subsum,no,!status,!checkbox,export,colfix,rowfix,sort,filter,initial,cellcopypaste,colhide,personal,seltype");
            obj.set_binddataset("ds_listStyle");
            obj.set_cellsizingtype("col");
            obj.set_wheelscrollrow("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"186\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"100\"/></Rows><Band id=\"head\"><Cell text=\"CC_CUST_SHORT_NM\" edittype=\"normal\"/><Cell col=\"1\" text=\"OSM_ZYEAR\"/><Cell col=\"2\" text=\"OSM_ZSEASON\"/><Cell col=\"3\" text=\"CB_BU_NM\"/><Cell col=\"4\" text=\"CI_MANAGER\"/><Cell col=\"5\" text=\"V1_JAKJI_NM\"/><Cell col=\"6\" text=\"OSM_WSHOP\"/><Cell col=\"7\" text=\"REF_ITEM_NM\"/><Cell col=\"8\" text=\"CI_ITEM_NM\"/><Cell col=\"9\" text=\"OSM_VBELN\"/><Cell col=\"10\" text=\"CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" text=\"CI_ITEM_IMAGE_THUMB\"/><Cell col=\"12\" text=\"OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"SALES_PRICE\"/><Cell col=\"15\" text=\"SALES_AMOUNT\"/><Cell col=\"16\" text=\"OSC_U_CPRICE\"/><Cell col=\"17\" text=\"V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"OSH_MARK_UP_RATE\"/></Band><Band id=\"body\"><Cell text=\"bind:CC_CUST_SHORT_NM\"/><Cell col=\"1\" text=\"bind:OSM_ZYEAR\"/><Cell col=\"2\" text=\"bind:OSM_ZSEASON\"/><Cell col=\"3\" text=\"bind:CB_BU_NM\"/><Cell col=\"4\" text=\"bind:CI_MANAGER\"/><Cell col=\"5\" text=\"bind:V1_JAKJI_NM\"/><Cell col=\"6\" text=\"bind:OSM_WSHOP\"/><Cell col=\"7\" text=\"bind:REF_ITEM_NM\"/><Cell col=\"8\" text=\"bind:CI_ITEM_NM\"/><Cell col=\"9\" text=\"bind:OSM_VBELN\"/><Cell col=\"10\" text=\"bind:CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" displaytype=\"imagecontrol\" imagestretch=\"fit\" text=\"bind:CI_ITEM_IMAGE_THUMB\"/><Cell col=\"12\" text=\"bind:OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"bind:OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"bind:SALES_PRICE\"/><Cell col=\"15\" text=\"bind:SALES_AMOUNT\"/><Cell col=\"16\" text=\"bind:OSC_U_CPRICE\"/><Cell col=\"17\" text=\"bind:V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"bind:OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"bind:OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"bind:OSH_MARK_UP_RATE\"/></Band></Format></Formats>");
            this.TabOrderRecap.TabpageStyle.addChild(obj.name, obj);

            obj = new Tabpage("TabpagePoInfo_1",this.TabOrderRecap);
            obj.set_text("PO Info. 1");
            obj.getSetter("griduserproperty").set("no,!status,!checkbox,export,colfix,rowfix,sort,filter,initial,cellcopypaste,colhide,personal");
            this.TabOrderRecap.addChild(obj.name, obj);

            obj = new Grid("GridPoInfo1","8","40",null,null,"12","9",null,null,null,null,this.TabOrderRecap.TabpagePoInfo_1.form);
            obj.set_taborder("0");
            obj.getSetter("griduserproperty").set("no");
            obj.set_binddataset("ds_listPoInfo1");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CC_CUST_SHORT_NM\"/><Cell col=\"1\" text=\"OSM_ZYEAR\"/><Cell col=\"2\" text=\"OSM_ZSEASON\"/><Cell col=\"3\" text=\"CB_BU_NM\"/><Cell col=\"4\" text=\"CI_MANAGER\"/><Cell col=\"5\" text=\"V1_JAKJI_NM\"/><Cell col=\"6\" text=\"OSM_WSHOP\"/><Cell col=\"7\" text=\"REF_ITEM_NM\"/><Cell col=\"8\" text=\"CI_ITEM_NM\"/><Cell col=\"9\" text=\"OSM_VBELN\"/><Cell col=\"10\" text=\"CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" text=\"CI_ITEM_IMAGE_THUMB\"/><Cell col=\"12\" text=\"OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"SALES_PRICE\"/><Cell col=\"15\" text=\"SALES_AMOUNT\"/><Cell col=\"16\" text=\"OSC_U_CPRICE\"/><Cell col=\"17\" text=\"V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"PO_OPM_PO_DESC\"/><Cell col=\"21\" text=\"PO_OPD_ORDER_QTY\"/><Cell col=\"22\" text=\"PO_SALES_PRICE\"/><Cell col=\"23\" text=\"PO_SALES_AMOUNT\"/><Cell col=\"24\" text=\"PO_OPM_DELIVERY_DATE\"/><Cell col=\"25\" text=\"PO_OPM_NATIONAL_VAL\"/><Cell col=\"26\" text=\"PO_OPM_REDAT\"/></Band><Band id=\"body\"><Cell text=\"bind:CC_CUST_SHORT_NM\"/><Cell col=\"1\" text=\"bind:OSM_ZYEAR\"/><Cell col=\"2\" text=\"bind:OSM_ZSEASON\"/><Cell col=\"3\" text=\"bind:CB_BU_NM\"/><Cell col=\"4\" text=\"bind:CI_MANAGER\"/><Cell col=\"5\" text=\"bind:V1_JAKJI_NM\"/><Cell col=\"6\" text=\"bind:OSM_WSHOP\"/><Cell col=\"7\" text=\"bind:REF_ITEM_NM\"/><Cell col=\"8\" text=\"bind:CI_ITEM_NM\"/><Cell col=\"9\" text=\"bind:OSM_VBELN\"/><Cell col=\"10\" text=\"bind:CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" text=\"bind:CI_ITEM_IMAGE_THUMB\" imagestretch=\"fit\"/><Cell col=\"12\" text=\"bind:OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"bind:OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"bind:SALES_PRICE\"/><Cell col=\"15\" text=\"bind:SALES_AMOUNT\"/><Cell col=\"16\" text=\"bind:OSC_U_CPRICE\"/><Cell col=\"17\" text=\"bind:V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"bind:OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"bind:OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"bind:PO_OPM_PO_DESC\"/><Cell col=\"21\" text=\"bind:PO_OPD_ORDER_QTY\"/><Cell col=\"22\" text=\"bind:PO_SALES_PRICE\"/><Cell col=\"23\" text=\"bind:PO_SALES_AMOUNT\"/><Cell col=\"24\" text=\"bind:PO_OPM_DELIVERY_DATE\"/><Cell col=\"25\" text=\"bind:PO_OPM_NATIONAL_VAL\"/><Cell col=\"26\" text=\"bind:PO_OPM_REDAT\"/></Band></Format></Formats>");
            this.TabOrderRecap.TabpagePoInfo_1.addChild(obj.name, obj);

            obj = new Tabpage("TabpagePoInfo_2",this.TabOrderRecap);
            obj.set_text("PO Info. 2 - Color");
            this.TabOrderRecap.addChild(obj.name, obj);

            obj = new Grid("GridPoInfo2","8","40",null,null,"22","9",null,null,null,null,this.TabOrderRecap.TabpagePoInfo_2.form);
            obj.set_taborder("0");
            obj.getSetter("griduserproperty").set("no,!status,!checkbox,export,colfix,rowfix,sort,filter,initial,cellcopypaste,colhide,personal");
            obj.set_binddataset("ds_listPoInfo2");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CC_CUST_SHORT_NM\"/><Cell col=\"1\" text=\"OSM_ZYEAR\"/><Cell col=\"2\" text=\"OSM_ZSEASON\"/><Cell col=\"3\" text=\"CB_BU_NM\"/><Cell col=\"4\" text=\"CI_MANAGER\"/><Cell col=\"5\" text=\"V1_JAKJI_NM\"/><Cell col=\"6\" text=\"OSM_WSHOP\"/><Cell col=\"7\" text=\"REF_ITEM_NM\"/><Cell col=\"8\" text=\"CI_ITEM_NM\"/><Cell col=\"9\" text=\"OSM_VBELN\"/><Cell col=\"10\" text=\"CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" text=\"CI_ITEM_IMAGE_THUMB\"/><Cell col=\"12\" text=\"OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"SALES_PRICE\"/><Cell col=\"15\" text=\"SALES_AMOUNT\"/><Cell col=\"16\" text=\"OSC_U_CPRICE\"/><Cell col=\"17\" text=\"V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"PO_OPM_PO_DESC\"/><Cell col=\"21\" text=\"CC1_COLOR_DESC\"/><Cell col=\"22\" text=\"CS1_SIZE_DESC\"/><Cell col=\"23\" text=\"PO_OPD_ORDER_QTY\"/><Cell col=\"24\" text=\"PO_SALES_PRICE\"/><Cell col=\"25\" text=\"PO_SALES_AMOUNT\"/><Cell col=\"26\" text=\"PO_OPM_DELIVERY_DATE\"/><Cell col=\"27\" text=\"PO_OPM_NATIONAL_VAL\"/><Cell col=\"28\" text=\"PO_OPM_REDAT\"/></Band><Band id=\"body\"><Cell text=\"bind:CC_CUST_SHORT_NM\"/><Cell col=\"1\" text=\"bind:OSM_ZYEAR\"/><Cell col=\"2\" text=\"bind:OSM_ZSEASON\"/><Cell col=\"3\" text=\"bind:CB_BU_NM\"/><Cell col=\"4\" text=\"bind:CI_MANAGER\"/><Cell col=\"5\" text=\"bind:V1_JAKJI_NM\"/><Cell col=\"6\" text=\"bind:OSM_WSHOP\"/><Cell col=\"7\" text=\"bind:REF_ITEM_NM\"/><Cell col=\"8\" text=\"bind:CI_ITEM_NM\"/><Cell col=\"9\" text=\"bind:OSM_VBELN\"/><Cell col=\"10\" text=\"bind:CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" text=\"bind:CI_ITEM_IMAGE_THUMB\"/><Cell col=\"12\" text=\"bind:OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"bind:OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"bind:SALES_PRICE\"/><Cell col=\"15\" text=\"bind:SALES_AMOUNT\"/><Cell col=\"16\" text=\"bind:OSC_U_CPRICE\"/><Cell col=\"17\" text=\"bind:V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"bind:OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"bind:OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"bind:PO_OPM_PO_DESC\"/><Cell col=\"21\" text=\"bind:CC1_COLOR_DESC\"/><Cell col=\"22\" text=\"bind:CS1_SIZE_DESC\"/><Cell col=\"23\" text=\"bind:PO_OPD_ORDER_QTY\"/><Cell col=\"24\" text=\"bind:PO_SALES_PRICE\"/><Cell col=\"25\" text=\"bind:PO_SALES_AMOUNT\"/><Cell col=\"26\" text=\"bind:PO_OPM_DELIVERY_DATE\"/><Cell col=\"27\" text=\"bind:PO_OPM_NATIONAL_VAL\"/><Cell col=\"28\" text=\"bind:PO_OPM_REDAT\"/></Band></Format></Formats>");
            this.TabOrderRecap.TabpagePoInfo_2.addChild(obj.name, obj);

            obj = new Tabpage("TabpagePoInfo_3",this.TabOrderRecap);
            obj.set_text("PO Info. 3 - Color Size");
            obj.getSetter("griduserproperty").set("no,!status,!checkbox,export,colfix,rowfix,sort,filter,initial,cellcopypaste,colhide,personal");
            this.TabOrderRecap.addChild(obj.name, obj);

            obj = new Grid("GridPoInfo3","8","40",null,null,"22","9",null,null,null,null,this.TabOrderRecap.TabpagePoInfo_3.form);
            obj.set_taborder("0");
            obj.getSetter("griduserproperty").set("no");
            obj.set_binddataset("ds_listPoInfo3");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CC_CUST_SHORT_NM\"/><Cell col=\"1\" text=\"OSM_ZYEAR\"/><Cell col=\"2\" text=\"OSM_ZSEASON\"/><Cell col=\"3\" text=\"CB_BU_NM\"/><Cell col=\"4\" text=\"CI_MANAGER\"/><Cell col=\"5\" text=\"V1_JAKJI_NM\"/><Cell col=\"6\" text=\"OSM_WSHOP\"/><Cell col=\"7\" text=\"REF_ITEM_NM\"/><Cell col=\"8\" text=\"CI_ITEM_NM\"/><Cell col=\"9\" text=\"OSM_VBELN\"/><Cell col=\"10\" text=\"CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" text=\"CI_ITEM_IMAGE_THUMB\"/><Cell col=\"12\" text=\"OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"SALES_PRICE\"/><Cell col=\"15\" text=\"SALES_AMOUNT\"/><Cell col=\"16\" text=\"OSC_U_CPRICE\"/><Cell col=\"17\" text=\"V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"PO_OPM_PO_DESC\"/><Cell col=\"21\" text=\"CC1_COLOR_DESC\"/><Cell col=\"22\" text=\"CS1_SIZE_DESC\"/><Cell col=\"23\" text=\"PO_OPD_ORDER_QTY\"/><Cell col=\"24\" text=\"PO_SALES_PRICE\"/><Cell col=\"25\" text=\"PO_SALES_AMOUNT\"/><Cell col=\"26\" text=\"PO_OPM_DELIVERY_DATE\"/><Cell col=\"27\" text=\"PO_OPM_NATIONAL_VAL\"/><Cell col=\"28\" text=\"PO_OPM_REDAT\"/></Band><Band id=\"body\"><Cell text=\"bind:CC_CUST_SHORT_NM\"/><Cell col=\"1\" text=\"bind:OSM_ZYEAR\"/><Cell col=\"2\" text=\"bind:OSM_ZSEASON\"/><Cell col=\"3\" text=\"bind:CB_BU_NM\"/><Cell col=\"4\" text=\"bind:CI_MANAGER\"/><Cell col=\"5\" text=\"bind:V1_JAKJI_NM\"/><Cell col=\"6\" text=\"bind:OSM_WSHOP\"/><Cell col=\"7\" text=\"bind:REF_ITEM_NM\"/><Cell col=\"8\" text=\"bind:CI_ITEM_NM\"/><Cell col=\"9\" text=\"bind:OSM_VBELN\"/><Cell col=\"10\" text=\"bind:CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" text=\"bind:CI_ITEM_IMAGE_THUMB\"/><Cell col=\"12\" text=\"bind:OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"bind:OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"bind:SALES_PRICE\"/><Cell col=\"15\" text=\"bind:SALES_AMOUNT\"/><Cell col=\"16\" text=\"bind:OSC_U_CPRICE\"/><Cell col=\"17\" text=\"bind:V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"bind:OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"bind:OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"bind:PO_OPM_PO_DESC\"/><Cell col=\"21\" text=\"bind:CC1_COLOR_DESC\"/><Cell col=\"22\" text=\"bind:CS1_SIZE_DESC\"/><Cell col=\"23\" text=\"bind:PO_OPD_ORDER_QTY\"/><Cell col=\"24\" text=\"bind:PO_SALES_PRICE\"/><Cell col=\"25\" text=\"bind:PO_SALES_AMOUNT\"/><Cell col=\"26\" text=\"bind:PO_OPM_DELIVERY_DATE\"/><Cell col=\"27\" text=\"bind:PO_OPM_NATIONAL_VAL\"/><Cell col=\"28\" text=\"bind:PO_OPM_REDAT\"/></Band></Format></Formats>");
            this.TabOrderRecap.TabpagePoInfo_3.addChild(obj.name, obj);

            obj = new Tabpage("TabpageOs",this.TabOrderRecap);
            obj.set_text("OS");
            obj.getSetter("griduserproperty").set("no,!status,!checkbox,export,colfix,rowfix,sort,filter,initial,cellcopypaste,colhide,personal");
            this.TabOrderRecap.addChild(obj.name, obj);

            obj = new Grid("GridOs","8","40",null,null,"22","9",null,null,null,null,this.TabOrderRecap.TabpageOs.form);
            obj.set_taborder("0");
            obj.getSetter("griduserproperty").set("no");
            obj.set_binddataset("ds_listOs");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CC_CUST_SHORT_NM\"/><Cell col=\"1\" text=\"OSM_ZYEAR\"/><Cell col=\"2\" text=\"OSM_ZSEASON\"/><Cell col=\"3\" text=\"CB_BU_NM\"/><Cell col=\"4\" text=\"CI_MANAGER\"/><Cell col=\"5\" text=\"V1_JAKJI_NM\"/><Cell col=\"6\" text=\"OSM_WSHOP\"/><Cell col=\"7\" text=\"REF_ITEM_NM\"/><Cell col=\"8\" text=\"CI_ITEM_NM\"/><Cell col=\"9\" text=\"OSM_VBELN\"/><Cell col=\"10\" text=\"CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" text=\"CI_ITEM_IMAGE_THUMB\"/><Cell col=\"12\" text=\"OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"SALES_PRICE\"/><Cell col=\"15\" text=\"SALES_AMOUNT\"/><Cell col=\"16\" text=\"OSC_U_CPRICE\"/><Cell col=\"17\" text=\"V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"CFDATE\"/><Cell col=\"21\" text=\"AMOND\"/><Cell col=\"22\" text=\"OSH_MARK_UP_RATE\"/><Cell col=\"23\" text=\"OSSTS_NM\"/><Cell col=\"24\" text=\"APPTY_NM\"/><Cell col=\"25\" text=\"REMARK\"/><Cell col=\"26\" text=\"MEMO\"/><Cell col=\"27\" text=\"U_WAERK\"/><Cell col=\"28\" text=\"NETWR\"/><Cell col=\"29\" text=\"ROH_COST\"/><Cell col=\"30\" text=\"VERP_COST\"/><Cell col=\"31\" text=\"EXPORT_COST\"/><Cell col=\"32\" text=\"T2001\"/><Cell col=\"33\" text=\"T2002\"/><Cell col=\"34\" text=\"T2003\"/><Cell col=\"35\" text=\"T2004\"/><Cell col=\"36\" text=\"T2005\"/><Cell col=\"37\" text=\"T2006\"/><Cell col=\"38\" text=\"T2011\"/><Cell col=\"39\" text=\"T3011\"/><Cell col=\"40\" text=\"T3012\"/><Cell col=\"41\" text=\"T3013\"/><Cell col=\"42\" text=\"T3014\"/><Cell col=\"43\" text=\"T3015\"/><Cell col=\"44\" text=\"T3016\"/><Cell col=\"45\" text=\"T3021\"/><Cell col=\"46\" text=\"T3022\"/><Cell col=\"47\" text=\"T3023\"/><Cell col=\"48\" text=\"T3031\"/><Cell col=\"49\" text=\"T3051\"/><Cell col=\"50\" text=\"T3061\"/><Cell col=\"51\" text=\"T3071\"/><Cell col=\"52\" text=\"T3072\"/><Cell col=\"53\" text=\"T3073\"/><Cell col=\"54\" text=\"T3111\"/><Cell col=\"55\" text=\"T3301\"/><Cell col=\"56\" text=\"T3801\"/><Cell col=\"57\" text=\"T3802\"/></Band><Band id=\"body\"><Cell text=\"bind:CC_CUST_SHORT_NM\"/><Cell col=\"1\" text=\"bind:OSM_ZYEAR\"/><Cell col=\"2\" text=\"bind:OSM_ZSEASON\"/><Cell col=\"3\" text=\"bind:CB_BU_NM\"/><Cell col=\"4\" text=\"bind:CI_MANAGER\"/><Cell col=\"5\" text=\"bind:V1_JAKJI_NM\"/><Cell col=\"6\" text=\"bind:OSM_WSHOP\"/><Cell col=\"7\" text=\"bind:REF_ITEM_NM\"/><Cell col=\"8\" text=\"bind:CI_ITEM_NM\"/><Cell col=\"9\" text=\"bind:OSM_VBELN\"/><Cell col=\"10\" text=\"bind:CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" text=\"bind:CI_ITEM_IMAGE_THUMB\"/><Cell col=\"12\" text=\"bind:OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"bind:OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"bind:SALES_PRICE\"/><Cell col=\"15\" text=\"bind:SALES_AMOUNT\"/><Cell col=\"16\" text=\"bind:OSC_U_CPRICE\"/><Cell col=\"17\" text=\"bind:V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"bind:OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"bind:OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"bind:CFDATE\"/><Cell col=\"21\" text=\"bind:AMOND\"/><Cell col=\"22\" text=\"bind:OSH_MARK_UP_RATE\"/><Cell col=\"23\" text=\"bind:OSSTS_NM\"/><Cell col=\"24\" text=\"bind:APPTY_NM\"/><Cell col=\"25\" text=\"bind:REMARK\"/><Cell col=\"26\" text=\"bind:MEMO\"/><Cell col=\"27\" text=\"bind:U_WAERK\"/><Cell col=\"28\" text=\"bind:NETWR\"/><Cell col=\"29\" text=\"bind:ROH_COST\"/><Cell col=\"30\" text=\"bind:VERP_COST\"/><Cell col=\"31\" text=\"bind:EXPORT_COST\"/><Cell col=\"32\" text=\"bind:T2001\"/><Cell col=\"33\" text=\"bind:T2002\"/><Cell col=\"34\" text=\"bind:T2003\"/><Cell col=\"35\" text=\"bind:T2004\"/><Cell col=\"36\" text=\"bind:T2005\"/><Cell col=\"37\" text=\"bind:T2006\"/><Cell col=\"38\" text=\"bind:T2011\"/><Cell col=\"39\" text=\"bind:T3011\"/><Cell col=\"40\" text=\"bind:T3012\"/><Cell col=\"41\" text=\"bind:T3013\"/><Cell col=\"42\" text=\"bind:T3014\"/><Cell col=\"43\" text=\"bind:T3015\"/><Cell col=\"44\" text=\"bind:T3016\"/><Cell col=\"45\" text=\"bind:T3021\"/><Cell col=\"46\" text=\"bind:T3022\"/><Cell col=\"47\" text=\"bind:T3023\"/><Cell col=\"48\" text=\"bind:T3031\"/><Cell col=\"49\" text=\"bind:T3051\"/><Cell col=\"50\" text=\"bind:T3061\"/><Cell col=\"51\" text=\"bind:T3071\"/><Cell col=\"52\" text=\"bind:T3072\"/><Cell col=\"53\" text=\"bind:T3073\"/><Cell col=\"54\" text=\"bind:T3111\"/><Cell col=\"55\" text=\"bind:T3301\"/><Cell col=\"56\" text=\"bind:T3801\"/><Cell col=\"57\" text=\"bind:T3802\"/></Band></Format></Formats>");
            this.TabOrderRecap.TabpageOs.addChild(obj.name, obj);

            obj = new Tabpage("TabpageProduction",this.TabOrderRecap);
            obj.set_text("Production");
            this.TabOrderRecap.addChild(obj.name, obj);

            obj = new Grid("GridProd","8","40",null,null,"22","9",null,null,null,null,this.TabOrderRecap.TabpageProduction.form);
            obj.set_taborder("0");
            obj.getSetter("griduserproperty").set("no,!status,!checkbox,export,colfix,rowfix,sort,filter,initial,cellcopypaste,colhide,personal");
            obj.set_binddataset("ds_listProduction");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CC_CUST_SHORT_NM\"/><Cell col=\"1\" text=\"OSM_ZYEAR\"/><Cell col=\"2\" text=\"OSM_ZSEASON\"/><Cell col=\"3\" text=\"CB_BU_NM\"/><Cell col=\"4\" text=\"CI_MANAGER\"/><Cell col=\"5\" text=\"V1_JAKJI_NM\"/><Cell col=\"6\" text=\"OSM_WSHOP\"/><Cell col=\"7\" text=\"REF_ITEM_NM\"/><Cell col=\"8\" text=\"CI_ITEM_NM\"/><Cell col=\"9\" text=\"OSM_VBELN\"/><Cell col=\"10\" text=\"CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" text=\"CI_ITEM_IMAGE_THUMB\"/><Cell col=\"12\" text=\"OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"SALES_PRICE\"/><Cell col=\"15\" text=\"SALES_AMOUNT\"/><Cell col=\"16\" text=\"OSC_U_CPRICE\"/><Cell col=\"17\" text=\"V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"LINE_NM\"/><Cell col=\"21\" text=\"PRD_S_DATE\"/><Cell col=\"22\" text=\"PRD_E_DATE\"/><Cell col=\"23\" text=\"WORKING_DAYS\"/><Cell col=\"24\" text=\"LINE_PREVIOUS_QTY\"/><Cell col=\"25\" text=\"LINE_PRD_QTY\"/><Cell col=\"26\" text=\"LINE_ACC_PRD_QTY\"/><Cell col=\"27\" text=\"AVG_TAR\"/><Cell col=\"28\" text=\"AVG_LINE_PRD_QTY\"/><Cell col=\"29\" text=\"TTL_CT_QTY\"/><Cell col=\"30\" text=\"TTL_SW_QTY\"/><Cell col=\"31\" text=\"TTL_FS_QTY\"/><Cell col=\"32\" text=\"TTL_PL_QTY\"/><Cell col=\"33\" text=\"TTL_PK_QTY\"/><Cell col=\"34\" text=\"TTL_SHIP_QTY\"/></Band><Band id=\"body\"><Cell text=\"bind:CC_CUST_SHORT_NM\"/><Cell col=\"1\" text=\"bind:OSM_ZYEAR\"/><Cell col=\"2\" text=\"bind:OSM_ZSEASON\"/><Cell col=\"3\" text=\"bind:CB_BU_NM\"/><Cell col=\"4\" text=\"bind:CI_MANAGER\"/><Cell col=\"5\" text=\"bind:V1_JAKJI_NM\"/><Cell col=\"6\" text=\"bind:OSM_WSHOP\"/><Cell col=\"7\" text=\"bind:REF_ITEM_NM\"/><Cell col=\"8\" text=\"bind:CI_ITEM_NM\"/><Cell col=\"9\" text=\"bind:OSM_VBELN\"/><Cell col=\"10\" text=\"bind:CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" text=\"bind:CI_ITEM_IMAGE_THUMB\"/><Cell col=\"12\" text=\"bind:OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"bind:OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"bind:SALES_PRICE\"/><Cell col=\"15\" text=\"bind:SALES_AMOUNT\"/><Cell col=\"16\" text=\"bind:OSC_U_CPRICE\"/><Cell col=\"17\" text=\"bind:V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"bind:OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"bind:OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"bind:LINE_NM\"/><Cell col=\"21\" text=\"bind:PRD_S_DATE\"/><Cell col=\"22\" text=\"bind:PRD_E_DATE\"/><Cell col=\"23\" text=\"bind:WORKING_DAYS\"/><Cell col=\"24\" text=\"bind:LINE_PREVIOUS_QTY\"/><Cell col=\"25\" text=\"bind:LINE_PRD_QTY\"/><Cell col=\"26\" text=\"bind:LINE_ACC_PRD_QTY\"/><Cell col=\"27\" text=\"bind:AVG_TAR\"/><Cell col=\"28\" text=\"bind:AVG_LINE_PRD_QTY\"/><Cell col=\"29\" text=\"bind:TTL_CT_QTY\"/><Cell col=\"30\" text=\"bind:TTL_SW_QTY\"/><Cell col=\"31\" text=\"bind:TTL_FS_QTY\"/><Cell col=\"32\" text=\"bind:TTL_PL_QTY\"/><Cell col=\"33\" text=\"bind:TTL_PK_QTY\"/><Cell col=\"34\" text=\"bind:TTL_SHIP_QTY\"/></Band></Format></Formats>");
            this.TabOrderRecap.TabpageProduction.addChild(obj.name, obj);

            obj = new Tabpage("TabpageSample",this.TabOrderRecap);
            obj.set_text("Sample");
            this.TabOrderRecap.addChild(obj.name, obj);

            obj = new Grid("GridSample","8","40",null,null,"22","9",null,null,null,null,this.TabOrderRecap.TabpageSample.form);
            obj.set_taborder("0");
            obj.getSetter("griduserproperty").set("no,status,checkbox,export,colfix,rowfix,sort,filter,initial,cellcopypaste,colhide,personal");
            obj.set_binddataset("ds_listSample");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CC_CUST_SHORT_NM\"/><Cell col=\"1\" text=\"OSM_ZYEAR\"/><Cell col=\"2\" text=\"OSM_ZSEASON\"/><Cell col=\"3\" text=\"CB_BU_NM\"/><Cell col=\"4\" text=\"CI_MANAGER\"/><Cell col=\"5\" text=\"V1_JAKJI_NM\"/><Cell col=\"6\" text=\"OSM_WSHOP\"/><Cell col=\"7\" text=\"REF_ITEM_NM\"/><Cell col=\"8\" text=\"CI_ITEM_NM\"/><Cell col=\"9\" text=\"OSM_VBELN\"/><Cell col=\"10\" text=\"CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" text=\"CI_ITEM_IMAGE_THUMB\"/><Cell col=\"12\" text=\"OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"SALES_PRICE\"/><Cell col=\"15\" text=\"SALES_AMOUNT\"/><Cell col=\"16\" text=\"OSC_U_CPRICE\"/><Cell col=\"17\" text=\"V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"FIT_STATUS\"/><Cell col=\"21\" text=\"FIT_APPRV_DATE\"/><Cell col=\"22\" text=\"PP_PACK_DUE_DATE\"/><Cell col=\"23\" text=\"PP_SUBM_DUE_DATE\"/><Cell col=\"24\" text=\"PP_APPRV_DATE\"/><Cell col=\"25\" text=\"PRD_S_DATE\"/><Cell col=\"26\" text=\"GMT_TEST_DUE_DATE\"/><Cell col=\"27\" text=\"GMT_ACT_TEST_DATE\"/><Cell col=\"28\" text=\"TOP_SUBM_DUE_DATE\"/><Cell col=\"29\" text=\"FIRST_SHIP_DATE\"/><Cell col=\"30\" text=\"REMARK1\"/></Band><Band id=\"body\"><Cell text=\"bind:CC_CUST_SHORT_NM\"/><Cell col=\"1\" text=\"bind:OSM_ZYEAR\"/><Cell col=\"2\" text=\"bind:OSM_ZSEASON\"/><Cell col=\"3\" text=\"bind:CB_BU_NM\"/><Cell col=\"4\" text=\"bind:CI_MANAGER\"/><Cell col=\"5\" text=\"bind:V1_JAKJI_NM\"/><Cell col=\"6\" text=\"bind:OSM_WSHOP\"/><Cell col=\"7\" text=\"bind:REF_ITEM_NM\"/><Cell col=\"8\" text=\"bind:CI_ITEM_NM\"/><Cell col=\"9\" text=\"bind:OSM_VBELN\"/><Cell col=\"10\" text=\"bind:CI_ITEM_DESCRIPTION\"/><Cell col=\"11\" text=\"bind:CI_ITEM_IMAGE_THUMB\"/><Cell col=\"12\" text=\"bind:OPD_ORDER_QTY\"/><Cell col=\"13\" text=\"bind:OPM_DELIVERY_DATE\"/><Cell col=\"14\" text=\"bind:SALES_PRICE\"/><Cell col=\"15\" text=\"bind:SALES_AMOUNT\"/><Cell col=\"16\" text=\"bind:OSC_U_CPRICE\"/><Cell col=\"17\" text=\"bind:V4_SET_TYPE_NM\"/><Cell col=\"18\" text=\"bind:OSD_START_PD_DATE\"/><Cell col=\"19\" text=\"bind:OSD_MTL_TAR_ETA\"/><Cell col=\"20\" text=\"bind:FIT_STATUS\"/><Cell col=\"21\" text=\"bind:FIT_APPRV_DATE\"/><Cell col=\"22\" text=\"bind:PP_PACK_DUE_DATE\"/><Cell col=\"23\" text=\"bind:PP_SUBM_DUE_DATE\"/><Cell col=\"24\" text=\"bind:PP_APPRV_DATE\"/><Cell col=\"25\" text=\"bind:PRD_S_DATE\"/><Cell col=\"26\" text=\"bind:GMT_TEST_DUE_DATE\"/><Cell col=\"27\" text=\"bind:GMT_ACT_TEST_DATE\"/><Cell col=\"28\" text=\"bind:TOP_SUBM_DUE_DATE\"/><Cell col=\"29\" text=\"bind:FIRST_SHIP_DATE\"/><Cell col=\"30\" text=\"bind:REMARK1\"/></Band></Format></Formats>");
            this.TabOrderRecap.TabpageSample.addChild(obj.name, obj);

            obj = new Grid("Grid00","16",null,null,"96","30","4",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_in");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"p_center_cd\"/><Cell col=\"1\" text=\"p_so_key_sta\"/><Cell col=\"2\" text=\"p_so_key_end\"/><Cell col=\"3\" text=\"p_so_key_list\"/><Cell col=\"4\" text=\"p_item_cd_sta\"/><Cell col=\"5\" text=\"p_item_cd_end\"/><Cell col=\"6\" text=\"p_item_cd_list\"/><Cell col=\"7\" text=\"p_buyer_cd_sta\"/><Cell col=\"8\" text=\"p_buyer_cd_end\"/><Cell col=\"9\" text=\"p_buyer_cd_list\"/><Cell col=\"10\" text=\"p_sales_team_sta\"/><Cell col=\"11\" text=\"p_sales_team_end\"/><Cell col=\"12\" text=\"p_sales_team_list\"/><Cell col=\"13\" text=\"p_jakji_sta\"/><Cell col=\"14\" text=\"p_jakji_end\"/><Cell col=\"15\" text=\"p_jakji_list\"/><Cell col=\"16\" text=\"p_year_sta\"/><Cell col=\"17\" text=\"p_year_end\"/><Cell col=\"18\" text=\"p_season_sta\"/><Cell col=\"19\" text=\"p_season_end\"/><Cell col=\"20\" text=\"p_season_list\"/><Cell col=\"21\" text=\"p_buy_date_sta\"/><Cell col=\"22\" text=\"p_buy_date_end\"/><Cell col=\"23\" text=\"p_user_id\"/><Cell col=\"24\" text=\"p_radio\"/><Cell col=\"25\" text=\"p_shipment_yn\"/><Cell col=\"26\" text=\"p_sewi_type\"/><Cell col=\"27\" text=\"p_perf_date\"/></Band><Band id=\"body\"><Cell text=\"bind:p_center_cd\"/><Cell col=\"1\" text=\"bind:p_so_key_sta\"/><Cell col=\"2\" text=\"bind:p_so_key_end\"/><Cell col=\"3\" text=\"bind:p_so_key_list\"/><Cell col=\"4\" text=\"bind:p_item_cd_sta\"/><Cell col=\"5\" text=\"bind:p_item_cd_end\"/><Cell col=\"6\" text=\"bind:p_item_cd_list\"/><Cell col=\"7\" text=\"bind:p_buyer_cd_sta\"/><Cell col=\"8\" text=\"bind:p_buyer_cd_end\"/><Cell col=\"9\" text=\"bind:p_buyer_cd_list\"/><Cell col=\"10\" text=\"bind:p_sales_team_sta\"/><Cell col=\"11\" text=\"bind:p_sales_team_end\"/><Cell col=\"12\" text=\"bind:p_sales_team_list\"/><Cell col=\"13\" text=\"bind:p_jakji_sta\"/><Cell col=\"14\" text=\"bind:p_jakji_end\"/><Cell col=\"15\" text=\"bind:p_jakji_list\"/><Cell col=\"16\" text=\"bind:p_year_sta\"/><Cell col=\"17\" text=\"bind:p_year_end\"/><Cell col=\"18\" text=\"bind:p_season_sta\"/><Cell col=\"19\" text=\"bind:p_season_end\"/><Cell col=\"20\" text=\"bind:p_season_list\"/><Cell col=\"21\" text=\"bind:p_buy_date_sta\"/><Cell col=\"22\" text=\"bind:p_buy_date_end\"/><Cell col=\"23\" text=\"bind:p_user_id\"/><Cell col=\"24\" text=\"bind:p_radio\"/><Cell col=\"25\" text=\"bind:p_shipment_yn\"/><Cell col=\"26\" text=\"bind:p_sewi_type\"/><Cell col=\"27\" text=\"bind:p_perf_date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","387","175","103","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("테스트트랜");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","500","175","103","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("일반테스트");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("GridTrace",null,"340","690",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("gds_TrcInfo");
            obj.getSetter("griduserproperty").set("checkbox,sort");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.getSetter("tempuserproperty").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"158\"/><Column size=\"363\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TrcSeq\"/><Cell col=\"1\" text=\"TrcName\"/><Cell col=\"2\" text=\"TrcId\"/></Band><Band id=\"body\"><Cell text=\"bind:TrcSeq\"/><Cell col=\"1\" text=\"bind:TrcName\"/><Cell col=\"2\" text=\"bind:TrcId\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonTrace",null,"215","40","25","260",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Trc.");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","DivCondition.form.div_calFromToBuyDate.form.calFrom","value","ds_in","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","DivCondition.form.div_calFromToBuyDate.form.calTo","value","ds_in","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_calFromToBuyDate00.form.calFrom","value","ds_in","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_calFromToBuyDate00.form.calTo","value","ds_in","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","DivCondition.form.div_SalesOrderFromTo.form.calFrom","value","ds_in","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivCondition.form.div_SalesOrderFromTo.form.calTo","value","ds_in","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","DivCondition.form.div_StyleFromTo.form.calFrom","value","ds_in","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","DivCondition.form.div_StyleFromTo.form.calTo","value","ds_in","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivCondition.form.Radio00","value","ds_in","p_radio");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivCondition.form.div_company","value","ds_in","p_center_cd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","DivCondition.form.CheckBoxShipment","value","ds_in","p_shipment_yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","DivCondition.form.RadioSewing","value","ds_in","p_sewi_type");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","DivCondition.form.calPerf","value","ds_in","p_perf_date");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comm::Comm_CrudButton.xfdl");
            this._addPreloadList("fdl","Comm::Comm_CalFromTo.xfdl");
            this._addPreloadList("fdl","Comm::Comm_SearchConditionFromTo.xfdl");
            this._addPreloadList("fdl","Comm::Comm_ComboConditionFromTo.xfdl");
            this._addPreloadList("fdl","Comm::cmmGridFilterButton.xfdl");
            this._addPreloadList("fdl","Comm::cmmFormatMenuButton.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Order_recap.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("Order_recap.xfdl", function() {
        /********************************************************************************************
        @desc	1. Include
        ********************************************************************************************/
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        /********************************************************************************************
        @desc	2. Form 변수 선언
        ********************************************************************************************/
        //공통코드 세팅
        this.COMBO_SET_STR = "ds_cmcdOSFactory"		+"#"+"JAKJI"						+" "
        					+"ds_cmcdSeason"		+"#"+"SEASON"   					+" "
        					+"ds_cmcdYear"			+"#"+"ZYEAR"    					+" "
        					+"ds_cmcdCompanyCode"	+"#"+"UserMapper.getUserCenter"		+" "
        					+"ds_cmcdSalesGroup"	+"#"+"CommonMapper.getSalesGroup"   +" "
        					+"ds_cmcdFitStatus"		+"#"+"FIT_STATUS"   +" "
        					;

        //t.h.i.s 세팅
        var GridStyle = this.TabOrderRecap.TabpageStyle.form.GridStyle;

        //	탭페이지구분
        var TAB_STL = "TAB_STL";
        var TAB_ONE = "TAB_ONE";
        var TAB_TWO = "TAB_TWO";
        var TAB_THR = "TAB_THR";
        var TAB_TOS = "TAB_TOS";
        var TAB_PRD = "TAB_PRD";
        var TAB_SAM = "TAB_SAM";

        /********************************************************************************************
        @desc	3. OnLoad
        ********************************************************************************************/
        /*
         *	온로드
         */
        this.formOnload = function(obj,e)
        {
        	// 기본 데이터 가져오기(공통코드등)+ word
        	{
        		this.gfn_getAllInitData();	// 콜백에서 fn_reset을 무조건 호출하도록 되어 있다.
        	}
        };

        /*
         *	초기화 함수
         */
        this.fn_reset = function()
        {
        	var gtrcPos = "fn_reset";	gtrcPos = "Order_recap.xfdl.fn_reset";

        	// 멀티 콤보 데이타 설정 함수 호출 - innerdataset은 user prop. 지정한 값
         	//this.DivCondition.form.div_MultiComboSalesGroup.form.fn_setDataset();
        	{
        		this.ds_in.addRow();
        		this.ds_in.setColumn(0, "p_radio", "1");


        		//Company, Sales Group 기본세팅
        		var oUser = this.gfn_getUser();	this.gtrace("oUser.CENTER_CD-->"+oUser.CENTER_CD, gtrcPos);
        		this.ds_in.setColumn(0, "p_center_cd", oUser.CENTER_CD);
        		this.ds_in.setColumn(0, "p_sales_team_sta", oUser.BU_CD);
        		this.ds_in.setColumn(0, "p_perf_date", this.gfn_getDate());
        		//	this.ds_in.setColumn(0, "p_radio", this.DivCondition.form.CheckBoxShipment.falsevalue);

        	}
        }

        /********************************************************************************************
        @desc	4. Validation 처리
        ********************************************************************************************/

        /********************************************************************************************
        @desc	5. 서비스 호출(Transaction)
        ********************************************************************************************/
        /*++
        @desc	Order Recap 트랜잭션
        */
        this.tfn_orderRecapSearch = function(){

        	this.gfn_setUser(this.ds_in, "p_user_id");
        	var sTargetListDs;
        	var iSearchOption = this.ds_in.getColumn(0, "p_radio");

        	var sTmpOutDs;
        	switch(iSearchOption)
        	{
        		case	"1"	:	sTmpOutDs	=	"ds_listStyle";			this.ds_listStyle.clearData();
        			break;
        		case	"2"	:	sTmpOutDs	=	"ds_listPoInfo1";		this.ds_listPoInfo1.clearData();
        			break;
        		case	"3"	:	sTmpOutDs	=	"ds_listPoInfo2";		this.ds_listPoInfo2.clearData();
        			break;
        		case	"4"	:	sTmpOutDs	=	"ds_listPoInfo3";		this.ds_listPoInfo3.clearData();
        			break;
        		case	"5"	:	sTmpOutDs	=	"ds_listOs";			this.ds_listOs.clearData();
        			break;
        		case	"6"	:	sTmpOutDs	=	"ds_listProduction";	this.ds_listProduction.clearData();
        			break;
        		case	"7"	:	sTmpOutDs	=	"ds_listSample";		this.ds_listSample.clearData();
        			break;
        		default		:	break;
        	}

        	var sSvcID 			= "getOrderRecapList";
        	var sURL 			= "AppSvr::common/commonAction.ppc";
        	var sInDatasets 	= "ds_in0=ds_in";
        	var sOutDatasets 	= sTmpOutDs+"=ds_out0";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("getOrderRecapList");

        	//공통 트랜잭션 사용
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }

        /*++
        @desc	Sample Save 트랜잭션
        */
        this.tfn_sampleSave = function(){

        	var gtrcPos = "Order_recap.xfdl.tfn_sampleSave"
        		this.gtrace("● Sample Save 트랜잭션", gtrcPos);

        	this.gfn_setUser(this.ds_in, "p_user_id");
        	var sTargetListDs;
        	var iSearchOption = this.ds_in.getColumn(0, "p_radio");

        	// 트랜잭션 전 처리(공통)
        	var trRslt = this.gfn_beforeTrans(this.ds_listSample, this.ds_list_trans_Sample, "ROW_CHK");

        	//
        	for(var i = 0 ; i < this.ds_list_trans_Sample.rowcount ; i++)
        	{
        		this.ds_list_trans_Sample.setColumn(i,"FIT_APPRV_DATE"		,"20200225");
        		this.ds_list_trans_Sample.setColumn(i,"PP_PACK_DUE_DATE"	,"20200225");
        		this.ds_list_trans_Sample.setColumn(i,"PP_SUBM_DUE_DATE"	,"20200225");
        		this.ds_list_trans_Sample.setColumn(i,"PP_APPRV_DATE"		,"20200225");
        		this.ds_list_trans_Sample.setColumn(i,"GMT_TEST_DUE_DATE"	,"20200225");
        		this.ds_list_trans_Sample.setColumn(i,"GMT_ACT_TEST_DATE"	,"20200225");
        		this.ds_list_trans_Sample.setColumn(i,"TOP_SUBM_DUE_DATE"	,"20200225");
        		this.ds_list_trans_Sample.setColumn(i,"REMARK1"				,"20200225");
        	}

        	var sSvcID 			= "saveSampleStatus";
        	var sURL 			= "AppSvr::common/commonAction.ppc";
        	var sInDatasets 	= "ds_in0=ds_list_trans_Sample";
        	var sOutDatasets 	= "ds_list_result_Sample=ds_out0";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("saveSampleStatus");

        	this.gtrace("this.ds_list_trans_Sample.saveXML---->"+this.ds_list_trans_Sample.saveXML(), gtrcPos);

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
        	var gtrcPos = "Order_recap.xfdl.callbackFunction"
        		this.gtrace("● 오더리캡-콜백", gtrcPos);

        		this.gtrace("this.ds_list_result_Sample.saveXML---->"+this.ds_list_result_Sample.saveXML(), gtrcPos);

        		this.gtrace("strSvcID---->"+strSvcID, gtrcPos);
        		this.gtrace("nErrorCode---->"+nErrorCode, gtrcPos);
        		this.gtrace("strErrorMsg---->"+strErrorMsg, gtrcPos);

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
        		case "getOrderRecapList"	:
        // 			this.setWaitCursor( true );
        //
        //			trace("this.ds_listPoInfo1.saveXML---->"+this.ds_listPoInfo1.saveXML());
        //
        // // 			if(this.ds_in.getColumn(0, "p_radio")=="1"){
        // // 				for (var i =0; i < this.ds_listStyle.rowcount ; i++){
        // // 					var sTmpImg = this.ds_listStyle.getColumn(i, "CI_ITEM_IMAGE_THUMB");
        // // 					if(!this.gfn_isNull(sTmpImg))
        // // 					{
        // // 						sTmpImg = "http://192.168.11.193:8081/ImageViewer.do?realFileNm="+sTmpImg;
        // // 						this.ds_listStyle.setColumn(i, "CI_ITEM_IMAGE_THUMB", sTmpImg);
        // // 						//	this.ds_listStyle.set_enableevent(true);
        // // 						//	GridStyle.redraw();
        // // 					}else{
        // // 						continue;
        // // 					}
        // // 				}
        // // 			}
        //
        // 			this.setWaitCursor( false );

        			break;

        		case "saveSampleStatus"	:

        			this.gtrace("this.ds_list_result_Sample.saveXML---->"+this.ds_list_result_Sample.saveXML());

        			break;
        		case "getUserCenter"	:
        			this.DivCondition.form.div_company.set_index(0);
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
        	this.tfn_orderRecapSearch();
        };

        /*
         *	입력
         */
        this.cfn_add = function()
        {
        };

        /*
         *	삭제
         */
        this.cfn_del = function()
        {
        	trace("---------------------cfn_del----------------------------------------");
        };

        /*
         *	저장
         */
        this.cfn_save = function()
        {
        	//	PO생성 / 수정 여부 확인
        	var oTp = this.getTabpageType();
        	var ttpe = oTp.TAB_TYPE;
        	var tds  = oTp.T_DS;

        	if(ttpe != TAB_SAM) return;

        	this.tfn_sampleSave();
        };

        /********************************************************************************************/
        /**   8. 사용자 함수                                                                        */
        /********************************************************************************************/
        this.fn_UiControl = function(iRbVal)
        {
        	switch(iRbVal)
        	{
        		default :
        				//shipment
        				this.DivCondition.form.CheckBoxShipment.set_readonly(false);

        				//sewing
        				this.DivCondition.form.RadioSewing.set_readonly(true);
        				this.ds_in.setColumn(0, "p_sewi_type", "SEWING");
        				this.ds_in.setColumn(0, "p_perf_date", "");

        				//buydate
        				this.ds_in.setColumn(0, "p_buy_date_sta", "");
        				this.ds_in.setColumn(0, "p_buy_date_end", "");
        				this.DivCondition.form.div_calFromToBuyDate.set_enable(false);
        			break;

        		case "6" : 	// 생산
        				//shipment
        				this.DivCondition.form.CheckBoxShipment.set_readonly(true);
        				this.ds_in.setColumn(0, "p_shipment_yn", "N");

        				//sewing
        				this.DivCondition.form.RadioSewing.set_readonly(false);
        				this.ds_in.setColumn(0, "p_sewi_type", "SEWING");

        				//buydate
        				this.DivCondition.form.div_calFromToBuyDate.set_enable(true);

        				//	PERF_DATE 캘린더 enable 추가

        			break;

        		case "7" :
        				//shipment
        				this.DivCondition.form.CheckBoxShipment.set_readonly(true);
        				this.ds_in.setColumn(0, "p_shipment_yn", "N");

        				//sewing
        				this.DivCondition.form.RadioSewing.set_readonly(true);
        				this.ds_in.setColumn(0, "p_sewi_type", "SEWING");
        				this.ds_in.setColumn(0, "p_perf_date", "");

        				//buydate
        				this.ds_in.setColumn(0, "p_buy_date_sta", "");
        				this.ds_in.setColumn(0, "p_buy_date_end", "");
        				this.DivCondition.form.div_calFromToBuyDate.set_enable(false);

        			break;

        	}
        }
        /*
         *	탭페이지에 따른 기능구분
         */
        this.getTabpageType = function()
        {
        	var resultStr;
        	var resultDs;

        	switch(this.TabOrderRecap.tabindex)
        	{
        		case 0 	: resultStr = TAB_STL; 	resultDs = this.ds_listStyle; 		break;
        		case 1 	: resultStr = TAB_ONE; 	resultDs = this.ds_listPoInfo1; 	break;
        		case 2 	: resultStr = TAB_TWO; 	resultDs = this.ds_listPoInfo2; 	break;
        		case 3 	: resultStr = TAB_THR; 	resultDs = this.ds_listPoInfo3; 	break;
        		case 4 	: resultStr = TAB_TOS; 	resultDs = this.ds_listOs; 			break;
        		case 5 	: resultStr = TAB_PRD; 	resultDs = this.ds_listProduction; 	break;
        		case 6 	: resultStr = TAB_SAM; 	resultDs = this.ds_listSample; 		break;

        		default : resultStr = false;	resultDs = false;	break;
        	}

        	return {TAB_TYPE : resultStr, T_DS : resultDs};
        }
        /********************************************************************************************/
        /**   9. 이벤트(Event) 처리                                                                 */
        /********************************************************************************************/
        this.ds_in_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "p_radio"){
        		this.fn_UiControl(e.newvalue);
        	}
        };

        this.Button00_onclick = function(obj,e)
        {
        	nexacro.getApplication().gds_TrcOutputTxt.clearData();
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.ds_in.setColumn(0, "p_center_cd"		, "1000");
        	this.ds_in.setColumn(0, "p_sales_team_sta"	, "111");
        	this.ds_in.setColumn(0, "p_jakji_sta"		, "2200");
        	this.ds_in.setColumn(0, "p_year_sta"		, "2019");
        	this.ds_in.setColumn(0, "p_season_sta"		, "S/S");
        	this.ds_in.setColumn(0, "p_user_id"			, "PMS");
        	this.ds_in.setColumn(0, "p_radio"			, "1");
        	this.ds_in.setColumn(0, "p_shipment_yn"		, "N");
        //	this.ds_in.setColumn(0, "p_so_key_list"		, "1111193639^1111193602^1111194202^1111194055");

        // 	this.ds_in.setColumn(0, "p_center_cd"		, "1000");
        // 	this.ds_in.setColumn(0, "p_so_key_sta"	, "1106192427");
        // 	this.ds_in.setColumn(0, "p_sales_team_sta"	, "106");

        	this.tfn_orderRecapSearch();
        };

        this.Button02_onclick = function(obj,e)
        {
        	{
        		if(this.ds_in.getColumn(0, "p_radio")=="1"){

        			var iDataCount = this.ds_Count.getColumn(this.ds_Count.rowposition, "No");

        			Eco.Logger.startElapsed();
        			var oVscStyle = GridStyle.vscrollbar;

        // 			var i = 0;
        // 			while ( i < iDataCount)
        // 			{
        // 				var sTmpImg = this.ds_listStyle.getColumn(i, "CI_ITEM_IMAGE_THUMB");
        // 				if(!this.gfn_isNull(sTmpImg))
        // 				{
        //  					sTmpImg = "http://192.168.11.193:8081/ImageViewer.do?realFileNm="+sTmpImg;
        //  					//	this.ds_listStyle.setColumn(i, "CI_ITEM_IMAGE_THUMB", sTmpImg);
        // 					this.ds_listStyle.setColumn(i, "CI_ITEM_IMAGE_THUMB", "");
        // // 					//	this.ds_listStyle.set_enableevent(true);
        // // 					//	GridStyle.redraw();
        //  				}
        //
        // 				i++;
        // 			}

        			for (var i =0; i < iDataCount ; i++){
        				var sTmpImg = this.ds_listStyle.getColumn(i, "CI_ITEM_IMAGE_THUMB");
        				if(!this.gfn_isNull(sTmpImg))
        				{
        					//	sTmpImg = "http://192.168.11.193:8081/ImageViewer.do?realFileNm="+sTmpImg;
        					sTmpImg = "https://lushdollar.com/wp-content/uploads/2019/09/get-paid-to-advertise-clothing-740x493.jpg";
        					this.ds_listStyle.setColumn(i, "CI_ITEM_IMAGE_THUMB", sTmpImg);
        						this.ds_listStyle.set_enableevent(true);
        						GridStyle.redraw();
        				}else{
        					continue;
        				}
        			}
        			Eco.Logger.debug({message:iDataCount+" 건", elapsed: true});

        		}
        	}
        	{	//오브젝트-배열 테스트
        // 		var sbSuppress =  {GrId : ["GridStyle","GridPoInfo1"], sPrsVal : 1};
        // 			trace("sbSuppress--->"+sbSuppress);
        // 			trace("sbSuppress.GrId--->"+sbSuppress.GrId);
        // 			trace("sbSuppress.GrId[0]--->"+sbSuppress.GrId[0]);
        	}
        };

        this.TabOrderRecap_onchanged = function(obj,e)
        {
        	//	trace("obj.tabindex--->"+obj.tabindex);
        	this.ds_in.setColumn(0, "p_radio", (obj.tabindex+1));
        };

        this.TabOrderRecap_TabpageStyle_GridStyle_onvscroll = function(obj,e)
        {
        //	var oVscStyle = obj.vscrollbar;
        // 	trace("oVscStyle.pos--->"+oVscStyle.pos);
        	// 그리드에서 현재 표시되고 있는 맨 위의 데이터셋 RowPosition
        	// 그리드에서 현재 표시되고 있는 맨 아래의 데이터셋 RowPosition



        // 	trace("oVscStyle.name--->"+oVscStyle.name);
        // 	trace("oVscStyle.id--->"+oVscStyle.id);
        // 	trace("oVscStyle.parent--->"+oVscStyle.parent);
        // 	trace("oVscStyle._refform--->"+oVscStyle._refform);
        // 	trace("oVscStyle.left--->"+oVscStyle.left);
        // 	trace("oVscStyle.top--->"+oVscStyle.top);
        // 	trace("oVscStyle.width--->"+oVscStyle.width);
        // 	trace("oVscStyle.height--->"+oVscStyle.height);
        // 	trace("oVscStyle.right--->"+oVscStyle.right);
        // 	trace("oVscStyle.bottom--->"+oVscStyle.bottom);
        // 	trace("oVscStyle._arrange_info--->"+oVscStyle._arrange_info);
        // 	trace("oVscStyle._left--->"+oVscStyle._left);
        // 	trace("oVscStyle._top--->"+oVscStyle._top);
        // 	trace("oVscStyle._right--->"+oVscStyle._right);
        // 	trace("oVscStyle._bottom--->"+oVscStyle._bottom);
        // 	trace("oVscStyle._width--->"+oVscStyle._width);
        // 	trace("oVscStyle._height--->"+oVscStyle._height);
        // 	trace("oVscStyle._statusmap--->"+oVscStyle._statusmap);
        // 	trace("oVscStyle._userstatusmap--->"+oVscStyle._userstatusmap);
        // 	trace("oVscStyle._rectshaft--->"+oVscStyle._rectshaft);
        // 	trace("oVscStyle.onscroll--->"+oVscStyle.onscroll);
        // 	trace("oVscStyle._created_event_list--->"+oVscStyle._created_event_list);
        // 	trace("oVscStyle._unique_id--->"+oVscStyle._unique_id);
        // 	trace("oVscStyle._conrol_element--->"+oVscStyle._conrol_element);
        // 	trace("oVscStyle._rtl--->"+oVscStyle._rtl);
        // 	trace("oVscStyle._cssselector--->"+oVscStyle._cssselector);
        // 	trace("oVscStyle._is_initcssselector--->"+oVscStyle._is_initcssselector);
        // 	trace("oVscStyle._adjust_left--->"+oVscStyle._adjust_left);
        // 	trace("oVscStyle._adjust_width--->"+oVscStyle._adjust_width);
        // 	trace("oVscStyle._adjust_height--->"+oVscStyle._adjust_height);
        // 	trace("oVscStyle.decbutton--->"+oVscStyle.decbutton);
        // 	trace("oVscStyle.incbutton--->"+oVscStyle.incbutton);
        // 	trace("oVscStyle.trackbar--->"+oVscStyle.trackbar);
        // 	trace("oVscStyle._is_created_contents--->"+oVscStyle._is_created_contents);
        // 	trace("oVscStyle._is_loading--->"+oVscStyle._is_loading);
        // 	trace("oVscStyle.min--->"+oVscStyle.min);
        // 	trace("oVscStyle._min--->"+oVscStyle._min);
        // 	trace("oVscStyle.max--->"+oVscStyle.max);
        // 	trace("oVscStyle._max--->"+oVscStyle._max);
        // 	trace("oVscStyle._orgmax--->"+oVscStyle._orgmax);
        // 	trace("oVscStyle.line--->"+oVscStyle.line);
        // 	trace("oVscStyle.page--->"+oVscStyle.page);
        // 	trace("oVscStyle.view--->"+oVscStyle.view);
        // 	trace("oVscStyle._pos--->"+oVscStyle._pos);
        // 	trace("oVscStyle._real_enable--->"+oVscStyle._real_enable);
        // 	trace("oVscStyle._is_enable_changing--->"+oVscStyle._is_enable_changing);
        // 	trace("oVscStyle._oldstatus--->"+oVscStyle._oldstatus);
        // 	trace("oVscStyle._status--->"+oVscStyle._status);
        // 	trace("oVscStyle._is_created--->"+oVscStyle._is_created);
        // 	trace("oVscStyle._trackbarsize--->"+oVscStyle._trackbarsize);
        // 	trace("oVscStyle._set_real--->"+oVscStyle._set_real);
        // 	trace("oVscStyle._reset_trackbar_fix--->"+oVscStyle._reset_trackbar_fix);
        //	trace("---------------------------------------------------------------------");
        };

        this.ds_listStyle_onrowposchanged = function(obj,e)
        {
        // 	trace("Eco.GridStyle..getTopLevelFormBox--->"+ Eco.XComp.PositionSize.getTopLevelFormBox(GridStyle));
        // 	trace("Eco.convertXY---->"+Eco.XComp.PositionSize.convertXY(this,[0,0], GridStyle));
        // 	trace("Eco.getScrollTop--->"+Eco.XComp.PositionSize.getScrollTop(GridStyle));
        // 	trace("Eco.getClientWidth--->"+Eco.XComp.PositionSize.getClientWidth(GridStyle));
        // 	trace("Eco.getClientHeight--->"+Eco.XComp.PositionSize.getClientHeight(GridStyle));
        //
        // 	trace("this.ds_listStyle.rowposition--->"+this.ds_listStyle.rowposition);
        };

        this.ButtonTrace_onclick = function(obj,e)
        {
        	this.GridTrace.set_visible(!this.GridTrace.visible);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formOnload,this);
            this.DivCondition.form.StaticCompany.addEventHandler("onclick",this.DivCondition_StaticSalesOrder_onclick,this);
            this.DivCondition.form.StaticBuyDate.addEventHandler("onclick",this.DivCondition_StaticVendor00_onclick,this);
            this.DivCondition.form.StaticYear.addEventHandler("onclick",this.DivCondition_StaticVendor01_onclick,this);
            this.DivCondition.form.StaticOption.addEventHandler("onclick",this.DivCondition_StaticVendor01_onclick,this);
            this.DivCondition.form.StaticSeason.addEventHandler("onclick",this.DivCondition_StaticVendor01_onclick,this);
            this.DivCondition.form.StaticSubOption.addEventHandler("onclick",this.DivCondition_StaticVendor01_onclick,this);
            this.DivCondition.form.StaticProductionOption.addEventHandler("onclick",this.DivCondition_StaticVendor01_onclick,this);
            this.DivCondition.form.calPerf.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.TabOrderRecap.addEventHandler("onchanged",this.TabOrderRecap_onchanged,this);
            this.TabOrderRecap.TabpageStyle.form.GridStyle.addEventHandler("onvscroll",this.TabOrderRecap_TabpageStyle_GridStyle_onvscroll,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.ButtonTrace.addEventHandler("onclick",this.ButtonTrace_onclick,this);
            this.ds_in.addEventHandler("oncolumnchanged",this.ds_in_oncolumnchanged,this);
            this.ds_listStyle.addEventHandler("onrowposchanged",this.ds_listStyle_onrowposchanged,this);
            this.ds_Count.addEventHandler("oncolumnchanged",this.ds_in_oncolumnchanged,this);
        };

        this.loadIncludeScript("Order_recap.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
