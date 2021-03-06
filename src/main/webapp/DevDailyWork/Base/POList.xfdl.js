(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("POList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"p_mandt\" type=\"STRING\" size=\"256\"/><Column id=\"p_osno1\" type=\"STRING\" size=\"256\"/><Column id=\"p_osno2\" type=\"STRING\" size=\"256\"/><Column id=\"p_osno_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_matnr1\" type=\"STRING\" size=\"256\"/><Column id=\"p_matnr2\" type=\"STRING\" size=\"256\"/><Column id=\"p_matnr_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_mtl_matnr1\" type=\"STRING\" size=\"256\"/><Column id=\"p_mtl_matnr2\" type=\"STRING\" size=\"256\"/><Column id=\"p_mtl_matnr_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_supply1\" type=\"STRING\" size=\"256\"/><Column id=\"p_supply2\" type=\"STRING\" size=\"256\"/><Column id=\"p_supply_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_user_id\" type=\"STRING\" size=\"256\"/><Column id=\"I_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_grdDic", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GridId\" type=\"STRING\" size=\"256\"/><Column id=\"BindCol\" type=\"STRING\" size=\"256\"/><Column id=\"HeaderText\" type=\"STRING\" size=\"256\"/><Column id=\"ColWidth\" type=\"INT\" size=\"256\"/><Column id=\"bDisplaytype\" type=\"STRING\" size=\"256\"/><Column id=\"bEdittype\" type=\"STRING\" size=\"256\"/><Column id=\"bTextAlign\" type=\"STRING\" size=\"256\"/><Column id=\"bSuppress\" type=\"STRING\" size=\"256\"/><Column id=\"bPadding\" type=\"STRING\" size=\"256\"/><Column id=\"bCombodataset\" type=\"STRING\" size=\"256\"/><Column id=\"bCombocodecol\" type=\"STRING\" size=\"256\"/><Column id=\"bCombodatacol\" type=\"STRING\" size=\"256\"/><Column id=\"bCombotype\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskedittype\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskeditlimitbymask\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskeditformat\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BindCol\">Status</Col><Col id=\"HeaderText\">Status</Col></Row><Row><Col id=\"BindCol\">Message</Col><Col id=\"HeaderText\">Message</Col><Col id=\"ColWidth\">200</Col></Row><Row><Col id=\"BindCol\">VBELN</Col><Col id=\"HeaderText\">Sales Order</Col><Col id=\"ColWidth\">90</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">CENTER_NM</Col><Col id=\"HeaderText\">Factory</Col><Col id=\"ColWidth\">50</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">TYPE</Col><Col id=\"HeaderText\">Type</Col><Col id=\"ColWidth\">50</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">GMT_ITEM</Col><Col id=\"HeaderText\">Style#</Col><Col id=\"ColWidth\">100</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">ITEM_NM</Col><Col id=\"HeaderText\">Style#</Col><Col id=\"ColWidth\">100</Col><Col id=\"bDisplaytype\"/><Col id=\"bEdittype\"/><Col id=\"bTextAlign\">center</Col><Col id=\"bCombodataset\"/><Col id=\"bCombocodecol\"/><Col id=\"bCombodatacol\"/><Col id=\"bCombotype\"/></Row><Row><Col id=\"BindCol\">ZTERM</Col><Col id=\"HeaderText\">Payment Terms</Col><Col id=\"ColWidth\">250</Col><Col id=\"bDisplaytype\">combocontrol</Col><Col id=\"bEdittype\">combo</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bCombodataset\">ds_cmbPaymentTerms</Col><Col id=\"bCombocodecol\">CODE_CD</Col><Col id=\"bCombodatacol\">CODE_NM</Col><Col id=\"bCombotype\">filterlike</Col></Row><Row><Col id=\"BindCol\">DOC_TYPE</Col><Col id=\"HeaderText\">Document Type</Col><Col id=\"ColWidth\">150</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bDisplaytype\">combocontrol</Col><Col id=\"bEdittype\">combo</Col><Col id=\"bCombodataset\">ds_cmbDocumentType</Col><Col id=\"bCombocodecol\">CODE_CD</Col><Col id=\"bCombodatacol\">CODE_NM</Col><Col id=\"bCombotype\">filterlike</Col></Row><Row><Col id=\"BindCol\">SUPPLIER_CODE1</Col><Col id=\"HeaderText\">Vendor</Col><Col id=\"ColWidth\">90</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bPadding\"/></Row><Row><Col id=\"BindCol\">SUPPLIER_NAME</Col><Col id=\"HeaderText\">Vendor Name</Col><Col id=\"ColWidth\">150</Col><Col id=\"bTextAlign\">left</Col><Col id=\"bPadding\">0px 0px 0px 5px</Col></Row><Row><Col id=\"BindCol\">PO_DESC</Col><Col id=\"HeaderText\">PO Desc</Col><Col id=\"ColWidth\">60</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">MATNR</Col><Col id=\"HeaderText\">Material</Col><Col id=\"ColWidth\">90</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bPadding\"/></Row><Row><Col id=\"BindCol\">USAGE</Col><Col id=\"HeaderText\">Item</Col><Col id=\"ColWidth\">100</Col><Col id=\"bTextAlign\">left</Col><Col id=\"bPadding\">0px 0px 0px 5px</Col></Row><Row><Col id=\"BindCol\">BUYER_ITEM_CD</Col><Col id=\"HeaderText\">MTL Code</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bPadding\"/></Row><Row><Col id=\"BindCol\">MTL_ITEM</Col><Col id=\"HeaderText\">Text</Col><Col id=\"ColWidth\">140</Col><Col id=\"bTextAlign\">left</Col><Col id=\"bPadding\">0px 0px 0px 5px</Col></Row><Row><Col id=\"BindCol\">GMT_COL</Col><Col id=\"HeaderText\">GMT Color</Col><Col id=\"ColWidth\">70</Col><Col id=\"bDisplaytype\"/><Col id=\"bTextAlign\">center</Col><Col id=\"bPadding\"/><Col id=\"bMaskedittype\"/><Col id=\"bMaskeditlimitbymask\"/><Col id=\"bMaskeditformat\"/></Row><Row><Col id=\"BindCol\">GMTColorcode</Col><Col id=\"HeaderText\">GMT Color code</Col><Col id=\"ColWidth\">110</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">COLOR</Col><Col id=\"HeaderText\">COLOR</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\"/><Col id=\"bTextAlign\">center</Col><Col id=\"bPadding\"/><Col id=\"bMaskedittype\"/><Col id=\"bMaskeditlimitbymask\"/><Col id=\"bMaskeditformat\"/></Row><Row><Col id=\"BindCol\">SIZE</Col><Col id=\"HeaderText\">SIZE</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\"/><Col id=\"bEdittype\"/><Col id=\"bTextAlign\">center</Col><Col id=\"bPadding\"/><Col id=\"bMaskedittype\"/><Col id=\"bMaskeditlimitbymask\"/><Col id=\"bMaskeditformat\"/></Row><Row><Col id=\"BindCol\">OS_MENGE</Col><Col id=\"HeaderText\">BOM Q'ty(rounding up)</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">UNIT</Col><Col id=\"HeaderText\">Unit</Col><Col id=\"ColWidth\">40</Col><Col id=\"bDisplaytype\"/><Col id=\"bEdittype\"/><Col id=\"bTextAlign\">center</Col><Col id=\"bPadding\"/><Col id=\"bMaskedittype\"/><Col id=\"bMaskeditlimitbymask\"/><Col id=\"bMaskeditformat\"/></Row><Row><Col id=\"BindCol\">PO_MENGE</Col><Col id=\"HeaderText\">PO Q'ty</Col><Col id=\"ColWidth\">60</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bEdittype\"/><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">REMAIN_MENGE</Col><Col id=\"HeaderText\">Order Q'ty</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">decimal</Col><Col id=\"bMaskeditformat\">expr:comp.parent.fn_tabGetUnitExpr(currow)</Col><Col id=\"bEdittype\">mask</Col></Row><Row><Col id=\"BindCol\">MEINS</Col><Col id=\"HeaderText\">Order Unit</Col><Col id=\"ColWidth\">40</Col><Col id=\"bDisplaytype\"/><Col id=\"bTextAlign\">center</Col><Col id=\"bCombodataset\"/><Col id=\"bCombocodecol\"/><Col id=\"bCombodatacol\"/><Col id=\"bCombotype\"/><Col id=\"bEdittype\"/><Col id=\"bPadding\"/><Col id=\"bMaskedittype\"/><Col id=\"bMaskeditlimitbymask\"/><Col id=\"bMaskeditformat\"/></Row><Row><Col id=\"BindCol\">PRICE</Col><Col id=\"HeaderText\">Price</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">decimal</Col><Col id=\"bMaskeditformat\">expr:comp.parent.fn_tabGetCurrencyExpr(currow)</Col><Col id=\"bEdittype\">mask</Col></Row><Row><Col id=\"BindCol\">PEINH</Col><Col id=\"HeaderText\">Per</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col><Col id=\"bEdittype\">mask</Col></Row><Row><Col id=\"BindCol\">L_NETWR</Col><Col id=\"HeaderText\">TTL Amount</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bCombodataset\"/><Col id=\"bCombocodecol\"/><Col id=\"bCombodatacol\"/><Col id=\"bCombotype\"/><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">decimal</Col><Col id=\"bMaskeditformat\">expr:comp.parent.fn_tabGetCurrencyExpr(currow)</Col><Col id=\"bEdittype\"/></Row><Row><Col id=\"BindCol\">CURRENCY</Col><Col id=\"HeaderText\">Currency</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">combotext</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bPadding\"/><Col id=\"bMaskedittype\"/><Col id=\"bMaskeditlimitbymask\"/><Col id=\"bMaskeditformat\"/><Col id=\"bCombodataset\">ds_cmbCurrency</Col><Col id=\"bCombocodecol\">CODE_CD</Col><Col id=\"bCombodatacol\">CODE_NM</Col><Col id=\"bCombotype\">filterlike</Col></Row><Row><Col id=\"BindCol\">PR_MENGE</Col><Col id=\"HeaderText\">Goods movement Q'ty</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">PURCGRP</Col><Col id=\"HeaderText\">Purch.Group</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">WEBRE</Col><Col id=\"HeaderText\">GR Based Inv. Verif</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\"/><Col id=\"bTextAlign\">center</Col><Col id=\"bPadding\"/><Col id=\"bMaskedittype\"/><Col id=\"bMaskeditlimitbymask\"/><Col id=\"bMaskeditformat\"/></Row><Row><Col id=\"BindCol\">OS_PRICE</Col><Col id=\"HeaderText\">OS Price</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">OS_PEINH</Col><Col id=\"HeaderText\">OS Price Unit</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bDisplaytype\"/><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\"/><Col id=\"bMaskeditlimitbymask\"/><Col id=\"bMaskeditformat\"/></Row><Row><Col id=\"BindCol\">L_WAERK</Col><Col id=\"HeaderText\">OS Currency</Col><Col id=\"ColWidth\">60</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bDisplaytype\"/><Col id=\"bPadding\"/><Col id=\"bMaskedittype\"/><Col id=\"bMaskeditlimitbymask\"/><Col id=\"bMaskeditformat\"/></Row><Row><Col id=\"BindCol\">OS_AMOUNT</Col><Col id=\"HeaderText\">OS AMOUNT</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">DELIVERY_DATE</Col><Col id=\"HeaderText\">Delivery Date</Col><Col id=\"ColWidth\">90</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bDisplaytype\"/><Col id=\"bPadding\"/><Col id=\"bMaskedittype\"/><Col id=\"bMaskeditlimitbymask\"/><Col id=\"bMaskeditformat\"/></Row><Row><Col id=\"BindCol\">UEBTO</Col><Col id=\"HeaderText\">More</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,##0</Col></Row><Row><Col id=\"BindCol\">UNTTO</Col><Col id=\"HeaderText\">Less</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bEdittype\"/><Col id=\"bTextAlign\">right</Col><Col id=\"bCombodataset\"/><Col id=\"bCombocodecol\"/><Col id=\"bCombodatacol\"/><Col id=\"bCombotype\"/><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,##0</Col></Row><Row><Col id=\"BindCol\">DeliveryLocation</Col><Col id=\"HeaderText\">Delivery Location</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">Forwarder</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col><Col id=\"HeaderText\">Forwarder</Col></Row><Row><Col id=\"BindCol\">BuyerCode</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col><Col id=\"HeaderText\">Buyer Code</Col><Col id=\"bDisplaytype\"/><Col id=\"bEdittype\"/><Col id=\"bCombodataset\"/><Col id=\"bCombocodecol\"/><Col id=\"bCombodatacol\"/><Col id=\"bCombotype\"/></Row><Row><Col id=\"BindCol\">INCO1</Col><Col id=\"ColWidth\">150</Col><Col id=\"bTextAlign\">center</Col><Col id=\"HeaderText\">Incoterms</Col><Col id=\"bDisplaytype\">combocontrol</Col><Col id=\"bEdittype\">combo</Col><Col id=\"bCombodataset\">ds_cmbIncoterms</Col><Col id=\"bCombocodecol\">CODE_CD</Col><Col id=\"bCombodatacol\">CODE_NM</Col><Col id=\"bCombotype\">filterlike</Col></Row><Row><Col id=\"BindCol\">Remark</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col><Col id=\"HeaderText\">Remark</Col></Row><Row><Col id=\"BindCol\">CENTER_CD</Col><Col id=\"ColWidth\">50</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">SORT_NUM</Col><Col id=\"ColWidth\">40</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">CRT</Col><Col id=\"ColWidth\">40</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">MSGBN</Col><Col id=\"ColWidth\">40</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">MTL_SIZE_KEY</Col><Col id=\"ColWidth\">120</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">MTL_COLOR_KEY</Col><Col id=\"ColWidth\">120</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">GOODS_MOV</Col><Col id=\"ColWidth\">90</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">MTL_ITEM_CD</Col><Col id=\"ColWidth\">120</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">ITEM_CD</Col><Col id=\"ColWidth\">120</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">OSSTS</Col><Col id=\"HeaderText\"/><Col id=\"ColWidth\">50</Col><Col id=\"bDisplaytype\"/><Col id=\"bEdittype\"/><Col id=\"bTextAlign\">center</Col><Col id=\"bCombodataset\"/><Col id=\"bCombocodecol\"/><Col id=\"bCombodatacol\"/><Col id=\"bCombotype\"/></Row><Row><Col id=\"BindCol\">GMTMATNR</Col><Col id=\"ColWidth\">90</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">POSNR</Col><Col id=\"ColWidth\">60</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">LOT_NO</Col><Col id=\"HeaderText\"/><Col id=\"ColWidth\">120</Col><Col id=\"bDisplaytype\"/><Col id=\"bEdittype\"/><Col id=\"bTextAlign\">center</Col><Col id=\"bCombodataset\"/><Col id=\"bCombocodecol\"/><Col id=\"bCombodatacol\"/><Col id=\"bCombotype\"/></Row><Row><Col id=\"BindCol\">TYPE</Col><Col id=\"HeaderText\">Style#</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">ERP_STYLE</Col><Col id=\"HeaderText\">ERP Style#</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">POITEM</Col><Col id=\"HeaderText\">P/O#</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">EBELP</Col><Col id=\"HeaderText\">PO Item</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">BSART</Col><Col id=\"HeaderText\">Document Type</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col><Col id=\"bEdittype\">combo</Col><Col id=\"bDisplaytype\">combocontrol</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bCombodataset\">ds_cmbDocumentType</Col><Col id=\"bCombocodecol\">CODE_CD</Col><Col id=\"bCombodatacol\">CODE_NM</Col><Col id=\"bCombotype\">filterlike</Col></Row><Row><Col id=\"BindCol\">LIFNR</Col><Col id=\"HeaderText\">Vendor</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col><Col id=\"bEdittype\"/></Row><Row><Col id=\"BindCol\">NAME1</Col><Col id=\"HeaderText\">Vendor Name</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">TXZ01</Col><Col id=\"HeaderText\">Text</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">BUYER_COLOR_CODE</Col><Col id=\"HeaderText\">GMT Color code</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">FULL_DESC</Col><Col id=\"HeaderText\">Full Description</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">MTL_COLOR</Col><Col id=\"HeaderText\">COLOR</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">J_3ASIZE</Col><Col id=\"HeaderText\">SIZE</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">MENGE</Col><Col id=\"HeaderText\">Order Q'ty</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bEdittype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">decimal</Col><Col id=\"bMaskeditformat\">expr:comp.parent.fn_tabGetUnitExpr(currow)</Col></Row><Row><Col id=\"BindCol\">MEINS</Col><Col id=\"HeaderText\">Unit</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">NETPR</Col><Col id=\"HeaderText\">Price</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col><Col id=\"bMaskeditformat\">expr:comp.parent.fn_tabGetCurrencyExpr(currow)</Col><Col id=\"bMaskeditlimitbymask\">decimal</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col></Row><Row><Col id=\"BindCol\">NETWR</Col><Col id=\"HeaderText\">TTL Amount</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col><Col id=\"bMaskeditformat\">expr:comp.parent.fn_tabGetCurrencyExpr(currow)</Col><Col id=\"bMaskeditlimitbymask\">decimal</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col></Row><Row><Col id=\"BindCol\">WAERS</Col><Col id=\"HeaderText\">Currency</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col><Col id=\"bMaskeditformat\"/></Row><Row><Col id=\"BindCol\">EKGRP</Col><Col id=\"HeaderText\">Purch.Group</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">DELIVERY_LOC</Col><Col id=\"HeaderText\">Delivery Date</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">GR_BSD</Col><Col id=\"HeaderText\">GR Bsd</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">IMPORT_REQ</Col><Col id=\"HeaderText\">Import Req.</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">USER_ID</Col><Col id=\"HeaderText\">G/W No.</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">USER_NM</Col><Col id=\"HeaderText\">G/W Name</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">BUYER_CD</Col><Col id=\"HeaderText\">Buyer Code</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">CUST_NM</Col><Col id=\"HeaderText\">Buyer</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">REMARK1</Col><Col id=\"HeaderText\">Remark</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">MEINS</Col><Col id=\"HeaderText\">Unit</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">EINDT</Col><Col id=\"HeaderText\">Delivery Date</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row><Row><Col id=\"BindCol\">FORWARDER</Col><Col id=\"GridId\">GridPoHistory</Col><Col id=\"ColWidth\">80</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramMap", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DsName\" type=\"STRING\" size=\"256\"/><Column id=\"LoadCol\" type=\"STRING\" size=\"256\"/><Column id=\"SaveCol\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LoadCol\">Status</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">Message</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">VBELN</Col><Col id=\"SaveCol\">P_VBELN</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">CENTER_NM</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">TYPE</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">GMT_ITEM</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">ZTERM</Col><Col id=\"SaveCol\">P_ZTERM</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">DOC_TYPE</Col><Col id=\"SaveCol\">P_BSART</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">SUPPLIER_CODE1</Col><Col id=\"SaveCol\">P_LIFNR</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">SUPPLIER_NAME</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">PO_DESC</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">MATNR</Col><Col id=\"SaveCol\">P_MATNR</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">USAGE</Col><Col id=\"SaveCol\">P_USAGE</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">BUYER_ITEM_CD</Col><Col id=\"SaveCol\">P_BUYER_ITEM_CD</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">MTL_ITEM</Col><Col id=\"SaveCol\">P_TXZ01</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">GMT_COL</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">GMTColorcode</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">COLOR</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">SIZE</Col><Col id=\"SaveCol\">P_J_3ASIZE</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">OS_MENGE</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">UNIT</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">PO_MENGE</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">REMAIN_MENGE</Col><Col id=\"SaveCol\">P_MENGE</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">MEINS</Col><Col id=\"SaveCol\">P_MEINS</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">PRICE</Col><Col id=\"SaveCol\">P_NETPR</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">PEINH</Col><Col id=\"SaveCol\">P_PEINH</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">L_NETWR</Col><Col id=\"SaveCol\">P_NETWR</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">CURRENCY</Col><Col id=\"SaveCol\">P_WAERS</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"SaveCol\"/><Col id=\"LoadCol\">PR_MENGE</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">PURCGRP</Col><Col id=\"SaveCol\">P_EKGRP</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">WEBRE</Col><Col id=\"SaveCol\">P_WEBRE</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">OS_PRICE</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">OS_PEINH</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">L_WAERK</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">OS_AMOUNT</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">DELIVERY_DATE</Col><Col id=\"SaveCol\">P_EINDT</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">UEBTO</Col><Col id=\"SaveCol\">P_UEBTO</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">UNTTO</Col><Col id=\"SaveCol\">P_UNTTO</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">DeliveryLocation</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">Forwarder</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">BuyerCode</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">INCO1</Col><Col id=\"SaveCol\">P_INCO1</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">Remark</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">CENTER_CD</Col><Col id=\"SaveCol\">P_BUKRS</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">SORT_NUM</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">CRT</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">MSGBN</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">MTL_SIZE_KEY</Col><Col id=\"SaveCol\">P_MTL_SIZE_KEY</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">MTL_COLOR_KEY</Col><Col id=\"SaveCol\">P_MTL_COLOR_KEY</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">GOODS_MOV</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">MTL_ITEM_CD</Col><Col id=\"SaveCol\">P_MTL_ITEM_CD</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">ITEM_CD</Col><Col id=\"SaveCol\">P_ITEM_CD</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">OSSTS</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">GMTMATNR</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">POSNR</Col><Col id=\"SaveCol\">P_VBELP</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"LoadCol\">LOT_NO</Col><Col id=\"SaveCol\">P_LOT_NO</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"SaveCol\">P_WERKS</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"SaveCol\">P_EKORG</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"SaveCol\">P_CRUD</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"SaveCol\">P_LOEKZ</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"SaveCol\">USER_ID</Col><Col id=\"DsName\">ds_POList</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">Status</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">Message</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">VBELN</Col><Col id=\"SaveCol\">P_VBELN</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">CENTER_NM</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">TYPE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">GMT_ITEM</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">ZTERM</Col><Col id=\"SaveCol\">P_ZTERM</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">BSART_F</Col><Col id=\"SaveCol\">P_BSART</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">LIFNR</Col><Col id=\"SaveCol\">P_LIFNR</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">SUPPLIER_NAME</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">PO_DESC</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MATNR</Col><Col id=\"SaveCol\">P_MATNR</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">USAGE</Col><Col id=\"SaveCol\">P_USAGE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">BUYER_ITEM_CD</Col><Col id=\"SaveCol\">P_BUYER_ITEM_CD</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">TXZ01</Col><Col id=\"SaveCol\">P_TXZ01</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">GMT_COL</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">GMTColorcode</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MTL_COLOR</Col><Col id=\"SaveCol\">P_J_3ASIZE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">SIZE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">OS_MENGE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">UNIT</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">PO_MENGE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MENGE</Col><Col id=\"SaveCol\">P_MENGE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MEINS</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">NETPR</Col><Col id=\"SaveCol\">P_NETPR</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">PEINH</Col><Col id=\"SaveCol\">P_PEINH</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">NETWR</Col><Col id=\"SaveCol\">P_NETWR</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">WAERS</Col><Col id=\"SaveCol\">P_WAERS</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">PR_MENGE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">EKGRP</Col><Col id=\"SaveCol\">P_EKGRP</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">GR_BSD</Col><Col id=\"SaveCol\">P_WEBRE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">OS_PRICE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">OS_PEINH</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">L_WAERK</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">OS_AMOUNT</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">DELIVERY_DATE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">UEBTO</Col><Col id=\"SaveCol\">P_UEBTO</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">UNTTO</Col><Col id=\"SaveCol\">P_UNTTO</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">DeliveryLocation</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">Forwarder</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">BuyerCode</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">INCO1</Col><Col id=\"SaveCol\">P_INCO1</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">Remark</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">CENTER_CD</Col><Col id=\"SaveCol\">P_BUKRS</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">SORT_NUM</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">CRT</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MSGBN</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MTL_SIZE_KEY</Col><Col id=\"SaveCol\">P_MTL_SIZE_KEY</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MTL_COLOR_KEY</Col><Col id=\"SaveCol\">P_MTL_COLOR_KEY</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">GOODS_MOV</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MTL_ITEM_CD</Col><Col id=\"SaveCol\">P_MTL_ITEM_CD</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">ITEM_CD</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">OSSTS</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">GMTMATNR</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">VBELP</Col><Col id=\"SaveCol\">P_VBELP</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">LOT_NO</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"SaveCol\">P_WERKS</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"SaveCol\">P_EKORG</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"SaveCol\">P_CRUD</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"SaveCol\">P_LOEKZ</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"SaveCol\">USER_ID</Col></Row><Row><Col id=\"SaveCol\">P_ZQME_PO</Col><Col id=\"LoadCol\">ZQME_PO</Col><Col id=\"DsName\">ds_POHistory</Col></Row><Row><Col id=\"LoadCol\">J_3AEBSP</Col><Col id=\"SaveCol\">P_J_3AEBSP</Col><Col id=\"DsName\">ds_POHistory</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MENGE</Col><Col id=\"SaveCol\">P_MENGE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_POList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"Status\" type=\"STRING\" size=\"256\"/><Column id=\"Message\" type=\"STRING\" size=\"256\"/><Column id=\"VBELN\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GMT_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"ZTERM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SUPPLIER_CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"SUPPLIER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PO_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MATNR\" type=\"STRING\" size=\"256\"/><Column id=\"USAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"GMT_COL\" type=\"STRING\" size=\"256\"/><Column id=\"GMTColorcode\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"OS_MENGE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PO_MENGE\" type=\"STRING\" size=\"256\"/><Column id=\"REMAIN_MENGE\" type=\"STRING\" size=\"256\"/><Column id=\"MEINS\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"PEINH\" type=\"STRING\" size=\"256\"/><Column id=\"L_NETWR\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MENGE\" type=\"STRING\" size=\"256\"/><Column id=\"PURCGRP\" type=\"STRING\" size=\"256\"/><Column id=\"WEBRE\" type=\"STRING\" size=\"256\"/><Column id=\"OS_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"OS_PEINH\" type=\"STRING\" size=\"256\"/><Column id=\"L_WAERK\" type=\"STRING\" size=\"256\"/><Column id=\"OS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UEBTO\" type=\"STRING\" size=\"256\"/><Column id=\"UNTTO\" type=\"STRING\" size=\"256\"/><Column id=\"DeliveryLocation\" type=\"STRING\" size=\"256\"/><Column id=\"Forwarder\" type=\"STRING\" size=\"256\"/><Column id=\"BuyerCode\" type=\"STRING\" size=\"256\"/><Column id=\"INCO1\" type=\"STRING\" size=\"256\"/><Column id=\"Remark\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_SIZE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_COLOR_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GMTMATNR\" type=\"STRING\" size=\"256\"/><Column id=\"POSNR\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PoSave_in", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ROW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"I_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"P_VBELN\" type=\"STRING\" size=\"256\"/><Column id=\"P_ZTERM\" type=\"STRING\" size=\"256\"/><Column id=\"P_BSART\" type=\"STRING\" size=\"256\"/><Column id=\"P_LIFNR\" type=\"STRING\" size=\"256\"/><Column id=\"P_MATNR\" type=\"STRING\" size=\"256\"/><Column id=\"P_USAGE\" type=\"STRING\" size=\"256\"/><Column id=\"P_BUYER_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_TXZ01\" type=\"STRING\" size=\"256\"/><Column id=\"P_J_3ASIZE\" type=\"STRING\" size=\"256\"/><Column id=\"P_MENGE\" type=\"STRING\" size=\"256\"/><Column id=\"P_NETPR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PEINH\" type=\"STRING\" size=\"256\"/><Column id=\"P_NETWR\" type=\"STRING\" size=\"256\"/><Column id=\"P_WAERS\" type=\"STRING\" size=\"256\"/><Column id=\"P_EKGRP\" type=\"STRING\" size=\"256\"/><Column id=\"P_WEBRE\" type=\"STRING\" size=\"256\"/><Column id=\"P_UEBTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_UNTTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_INCO1\" type=\"STRING\" size=\"256\"/><Column id=\"P_BUKRS\" type=\"STRING\" size=\"256\"/><Column id=\"P_MTL_SIZE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"P_MTL_COLOR_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"P_MTL_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_VBELP\" type=\"STRING\" size=\"256\"/><Column id=\"P_WERKS\" type=\"STRING\" size=\"256\"/><Column id=\"P_EKORG\" type=\"STRING\" size=\"256\"/><Column id=\"P_CRUD\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOEKZ\" type=\"STRING\" size=\"256\"/><Column id=\"P_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_ZQME_PO\" type=\"STRING\" size=\"256\"/><Column id=\"P_EINDT\" type=\"STRING\" size=\"256\"/><Column id=\"P_MEINS\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_POHistory", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"Status\" type=\"STRING\" size=\"256\"/><Column id=\"Message\" type=\"STRING\" size=\"256\"/><Column id=\"WEBRE\" type=\"STRING\" size=\"256\"/><Column id=\"VBELN\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_STYLE\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"POITEM\" type=\"STRING\" size=\"256\"/><Column id=\"EBELP\" type=\"STRING\" size=\"256\"/><Column id=\"ZTERM\" type=\"STRING\" size=\"256\"/><Column id=\"BSART_F\" type=\"STRING\" size=\"256\"/><Column id=\"LIFNR\" type=\"STRING\" size=\"256\"/><Column id=\"NAME1\" type=\"STRING\" size=\"256\"/><Column id=\"PO_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MATNR\" type=\"STRING\" size=\"256\"/><Column id=\"USAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TXZ01\" type=\"STRING\" size=\"256\"/><Column id=\"GMT_COL\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_COLOR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"J_3ASIZE\" type=\"STRING\" size=\"256\"/><Column id=\"MENGE\" type=\"STRING\" size=\"256\"/><Column id=\"MEINS\" type=\"STRING\" size=\"256\"/><Column id=\"NETPR\" type=\"STRING\" size=\"256\"/><Column id=\"NETWR\" type=\"STRING\" size=\"256\"/><Column id=\"PEINH\" type=\"STRING\" size=\"256\"/><Column id=\"WAERS\" type=\"STRING\" size=\"256\"/><Column id=\"EKGRP\" type=\"STRING\" size=\"256\"/><Column id=\"UEBTO\" type=\"STRING\" size=\"256\"/><Column id=\"UNTTO\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERY_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"GR_BSD\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INCO1\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK1\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EINDT\" type=\"STRING\" size=\"256\"/><Column id=\"FORWARDER\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POSNR\" type=\"STRING\" size=\"256\"/><Column id=\"VBELP\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"BSART\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_SIZE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_COLOR_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ELIKZ\" type=\"STRING\" size=\"256\"/><Column id=\"ZQME_PO\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GRQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"J_3AEBSP\" type=\"STRING\" size=\"256\"/><Column id=\"SaveUser\" type=\"STRING\" size=\"256\"/><Column id=\"CRUD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result_savePO_sap", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result_savePO_default", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trans_POHistory", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PO_PRINT_in", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rfcId\" type=\"STRING\" size=\"256\"/><Column id=\"P_DATA_STR\" type=\"STRING\" size=\"256\"/><Column id=\"P_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_RETURN_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PO_PRINT_out", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"O_REX_URL\" type=\"STRING\" size=\"256\"/><Column id=\"O_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"O_RETURN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("TabMain","8","146",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_border("1px solid gray,1px solid gray,1px solid gray,1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabpagePOList",this.TabMain);
            obj.set_text("POList");
            obj.set_formscrolltype("none");
            obj.getSetter("griduserproperty").set("");
            this.TabMain.addChild(obj.name, obj);

            obj = new Div("DivBtnAddDel_GridPoList00","10","6","218","35",null,null,null,null,null,null,this.TabMain.TabpagePOList.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("Comm::cmmGridAddDelButton.xfdl");
            obj.getSetter("targetGrid").set("TabMain.TabpagePOList.form.GridPoList");
            obj.set_visible("true");
            obj.getSetter("InitCompVisEna").set("0:0:0,1:1:1");
            this.TabMain.TabpagePOList.addChild(obj.name, obj);

            obj = new Div("DivBtnFormat",null,"8","40","28","8",null,null,null,null,null,this.TabMain.TabpagePOList.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("Comm::cmmFormatMenuButton.xfdl");
            obj.getSetter("targetGrid").set("TabMain.TabpagePOList.form.GridPoList");
            obj.set_visible("true");
            this.TabMain.TabpagePOList.addChild(obj.name, obj);

            obj = new Div("DivBtnGfilter",null,"8","40","28","58",null,null,null,null,null,this.TabMain.TabpagePOList.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("Comm::cmmGridFilterButton.xfdl");
            obj.getSetter("targetGrid").set("TabMain.TabpagePOList.form.GridPoList");
            obj.set_visible("true");
            this.TabMain.TabpagePOList.addChild(obj.name, obj);

            obj = new Grid("GridPoList","8","44",null,null,"8","8",null,null,null,null,this.TabMain.TabpagePOList.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_POList");
            obj.getSetter("griduserproperty").set("subsum,no,status,checkbox,export,colfix,rowfix,sort,filter,initial,cellcopypaste,colhide,personal,seltype");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Status\"/><Cell col=\"1\" text=\"Message\"/><Cell col=\"2\" text=\"VBELN\"/><Cell col=\"3\" text=\"CENTER_NM\"/><Cell col=\"4\" text=\"TYPE\"/><Cell col=\"5\" text=\"GMT_ITEM\"/><Cell col=\"6\" text=\"ZTERM\"/><Cell col=\"7\" text=\"DOC_TYPE\"/><Cell col=\"8\" text=\"SUPPLIER_CODE1\"/><Cell col=\"9\" text=\"SUPPLIER_NAME\"/><Cell col=\"10\" text=\"PO_DESC\"/><Cell col=\"11\" text=\"MATNR\"/><Cell col=\"12\" text=\"USAGE\"/><Cell col=\"13\" text=\"BUYER_ITEM_CD\"/><Cell col=\"14\" text=\"MTL_ITEM\"/><Cell col=\"15\" text=\"GMT_COL\"/><Cell col=\"16\" text=\"GMTColorcode\"/><Cell col=\"17\" text=\"COLOR\"/><Cell col=\"18\" text=\"SIZE\"/><Cell col=\"19\" text=\"OS_MENGE\"/><Cell col=\"20\" text=\"UNIT\"/><Cell col=\"21\" text=\"PO_MENGE\"/><Cell col=\"22\" text=\"REMAIN_MENGE\"/><Cell col=\"23\" text=\"MEINS\"/><Cell col=\"24\" text=\"PRICE\"/><Cell col=\"25\" text=\"PEINH\"/><Cell col=\"26\" text=\"L_NETWR\"/><Cell col=\"27\" text=\"CURRENCY\"/><Cell col=\"28\" text=\"PR_MENGE\"/><Cell col=\"29\" text=\"PURCGRP\"/><Cell col=\"30\" text=\"WEBRE\"/><Cell col=\"31\" text=\"OS_PRICE\"/><Cell col=\"32\" text=\"OS_PEINH\"/><Cell col=\"33\" text=\"L_WAERK\"/><Cell col=\"34\" text=\"OS_AMOUNT\"/><Cell col=\"35\" text=\"DELIVERY_DATE\"/><Cell col=\"36\" text=\"UEBTO\"/><Cell col=\"37\" text=\"UNTTO\"/><Cell col=\"38\" text=\"DeliveryLocation\"/><Cell col=\"39\" text=\"Forwarder\"/><Cell col=\"40\" text=\"BuyerCode\"/><Cell col=\"41\" text=\"INCO1\"/><Cell col=\"42\" text=\"Remark\"/><Cell col=\"43\" text=\"CENTER_CD\"/><Cell col=\"44\" text=\"SORT_NUM\"/><Cell col=\"45\" text=\"MTL_SIZE_KEY\"/><Cell col=\"46\" text=\"MTL_COLOR_KEY\"/><Cell col=\"47\" text=\"MTL_ITEM_CD\"/><Cell col=\"48\" text=\"ITEM_CD\"/><Cell col=\"49\" text=\"GMTMATNR\"/><Cell col=\"50\" text=\"POSNR\"/><Cell col=\"51\" text=\"LOT_NO\"/></Band><Band id=\"body\"><Cell text=\"bind:Status\"/><Cell col=\"1\" text=\"bind:Message\"/><Cell col=\"2\" text=\"bind:VBELN\"/><Cell col=\"3\" text=\"bind:CENTER_NM\"/><Cell col=\"4\" text=\"bind:TYPE\"/><Cell col=\"5\" text=\"bind:GMT_ITEM\"/><Cell col=\"6\" text=\"bind:ZTERM\"/><Cell col=\"7\" text=\"bind:DOC_TYPE\"/><Cell col=\"8\" text=\"bind:SUPPLIER_CODE1\"/><Cell col=\"9\" text=\"bind:SUPPLIER_NAME\"/><Cell col=\"10\" text=\"bind:PO_DESC\"/><Cell col=\"11\" text=\"bind:MATNR\"/><Cell col=\"12\" text=\"bind:USAGE\"/><Cell col=\"13\" text=\"bind:BUYER_ITEM_CD\"/><Cell col=\"14\" text=\"bind:MTL_ITEM\"/><Cell col=\"15\" text=\"bind:GMT_COL\"/><Cell col=\"16\" text=\"bind:GMTColorcode\"/><Cell col=\"17\" text=\"bind:COLOR\"/><Cell col=\"18\" text=\"bind:SIZE\"/><Cell col=\"19\" text=\"bind:OS_MENGE\"/><Cell col=\"20\" text=\"bind:UNIT\"/><Cell col=\"21\" text=\"bind:PO_MENGE\"/><Cell col=\"22\" text=\"bind:REMAIN_MENGE\"/><Cell col=\"23\" text=\"bind:MEINS\"/><Cell col=\"24\" text=\"bind:PRICE\"/><Cell col=\"25\" text=\"bind:PEINH\"/><Cell col=\"26\" text=\"bind:L_NETWR\"/><Cell col=\"27\" text=\"bind:CURRENCY\"/><Cell col=\"28\" text=\"bind:PR_MENGE\"/><Cell col=\"29\" text=\"bind:PURCGRP\"/><Cell col=\"30\" text=\"bind:WEBRE\"/><Cell col=\"31\" text=\"bind:OS_PRICE\"/><Cell col=\"32\" text=\"bind:OS_PEINH\"/><Cell col=\"33\" text=\"bind:L_WAERK\"/><Cell col=\"34\" text=\"bind:OS_AMOUNT\"/><Cell col=\"35\" text=\"bind:DELIVERY_DATE\"/><Cell col=\"36\" text=\"bind:UEBTO\"/><Cell col=\"37\" text=\"bind:UNTTO\"/><Cell col=\"38\" text=\"bind:DeliveryLocation\"/><Cell col=\"39\" text=\"bind:Forwarder\"/><Cell col=\"40\" text=\"bind:BuyerCode\"/><Cell col=\"41\" text=\"bind:INCO1\"/><Cell col=\"42\" text=\"bind:Remark\"/><Cell col=\"43\" text=\"bind:CENTER_CD\"/><Cell col=\"44\" text=\"bind:SORT_NUM\"/><Cell col=\"45\" text=\"bind:MTL_SIZE_KEY\"/><Cell col=\"46\" text=\"bind:MTL_COLOR_KEY\"/><Cell col=\"47\" text=\"bind:MTL_ITEM_CD\"/><Cell col=\"48\" text=\"bind:ITEM_CD\"/><Cell col=\"49\" text=\"bind:GMTMATNR\"/><Cell col=\"50\" text=\"bind:POSNR\"/><Cell col=\"51\" text=\"bind:LOT_NO\"/></Band></Format></Formats>");
            this.TabMain.TabpagePOList.addChild(obj.name, obj);

            obj = new Button("ButtonMassInput",null,"8","133","28","116",null,null,null,null,null,this.TabMain.TabpagePOList.form);
            obj.set_taborder("4");
            obj.set_text("Mass Input");
            this.TabMain.TabpagePOList.addChild(obj.name, obj);

            obj = new Tabpage("TabpagePOHistory",this.TabMain);
            obj.set_text("PoHistory");
            this.TabMain.addChild(obj.name, obj);

            obj = new Grid("GridPoHistory","8","44",null,null,"8","8",null,null,null,null,this.TabMain.TabpagePOHistory.form);
            obj.set_taborder("0");
            obj.getSetter("griduserproperty").set("no,status,checkbox,export,colfix,rowfix,sort,filter,initial,cellcopypaste,colhide,personal,seltype");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_POHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Message\"/><Cell col=\"1\" text=\"VBELN\"/><Cell col=\"2\" text=\"CENTER_NM\"/><Cell col=\"3\" text=\"TYPE\"/><Cell col=\"4\" text=\"ERP_STYLE\"/><Cell col=\"5\" text=\"POITEM\"/><Cell col=\"6\" text=\"EBELP\"/><Cell col=\"7\" text=\"ZTERM\"/><Cell col=\"8\" text=\"BSART\"/><Cell col=\"9\" text=\"LIFNR\"/><Cell col=\"10\" text=\"NAME1\"/><Cell col=\"11\" text=\"PO_DESC\"/><Cell col=\"12\" text=\"MATNR\"/><Cell col=\"13\" text=\"USAGE\"/><Cell col=\"14\" text=\"BUYER_ITEM_CD\"/><Cell col=\"15\" text=\"TXZ01\"/><Cell col=\"16\" text=\"GMT_COL\"/><Cell col=\"17\" text=\"BUYER_COLOR_CODE\"/><Cell col=\"18\" text=\"FULL_DESC\"/><Cell col=\"19\" text=\"MTL_COLOR\"/><Cell col=\"20\" text=\"J_3ASIZE\"/><Cell col=\"21\" text=\"MENGE\"/><Cell col=\"22\" text=\"MEINS\"/><Cell col=\"23\" text=\"NETPR\"/><Cell col=\"24\" text=\"NETWR\"/><Cell col=\"25\" text=\"PEINH\"/><Cell col=\"26\" text=\"WAERS\"/><Cell col=\"27\" text=\"EKGRP\"/><Cell col=\"28\" text=\"UEBTO\"/><Cell col=\"29\" text=\"UNTTO\"/><Cell col=\"30\" text=\"DELIVERY_LOC\"/><Cell col=\"31\" text=\"GR_BSD\"/><Cell col=\"32\" text=\"IMPORT_REQ\"/><Cell col=\"33\" text=\"USER_ID\"/><Cell col=\"34\" text=\"USER_NM\"/><Cell col=\"35\" text=\"BUYER_CD\"/><Cell col=\"36\" text=\"CUST_NM\"/><Cell col=\"37\" text=\"INCO1\"/><Cell col=\"38\" text=\"REMARK1\"/></Band><Band id=\"body\"><Cell text=\"bind:Message\"/><Cell col=\"1\" text=\"bind:VBELN\"/><Cell col=\"2\" text=\"bind:CENTER_NM\"/><Cell col=\"3\" text=\"bind:TYPE\"/><Cell col=\"4\" text=\"bind:ERP_STYLE\"/><Cell col=\"5\" text=\"bind:POITEM\"/><Cell col=\"6\" text=\"bind:EBELP\"/><Cell col=\"7\" text=\"bind:ZTERM\"/><Cell col=\"8\" text=\"bind:BSART\"/><Cell col=\"9\" text=\"bind:LIFNR\"/><Cell col=\"10\" text=\"bind:NAME1\"/><Cell col=\"11\" text=\"bind:PO_DESC\"/><Cell col=\"12\" text=\"bind:MATNR\"/><Cell col=\"13\" text=\"bind:USAGE\"/><Cell col=\"14\" text=\"bind:BUYER_ITEM_CD\"/><Cell col=\"15\" text=\"bind:TXZ01\"/><Cell col=\"16\" text=\"bind:GMT_COL\"/><Cell col=\"17\" text=\"bind:BUYER_COLOR_CODE\"/><Cell col=\"18\" text=\"bind:FULL_DESC\"/><Cell col=\"19\" text=\"bind:MTL_COLOR\"/><Cell col=\"20\" text=\"bind:J_3ASIZE\"/><Cell col=\"21\" text=\"bind:MENGE\"/><Cell col=\"22\" text=\"bind:MEINS\"/><Cell col=\"23\" text=\"bind:NETPR\"/><Cell col=\"24\" text=\"bind:NETWR\"/><Cell col=\"25\" text=\"bind:PEINH\"/><Cell col=\"26\" text=\"bind:WAERS\"/><Cell col=\"27\" text=\"bind:EKGRP\"/><Cell col=\"28\" text=\"bind:UEBTO\"/><Cell col=\"29\" text=\"bind:UNTTO\"/><Cell col=\"30\" text=\"bind:DELIVERY_LOC\"/><Cell col=\"31\" text=\"bind:GR_BSD\"/><Cell col=\"32\" text=\"bind:IMPORT_REQ\"/><Cell col=\"33\" text=\"bind:USER_ID\"/><Cell col=\"34\" text=\"bind:USER_NM\"/><Cell col=\"35\" text=\"bind:BUYER_CD\"/><Cell col=\"36\" text=\"bind:CUST_NM\"/><Cell col=\"37\" text=\"bind:INCO1\"/><Cell col=\"38\" text=\"bind:REMARK1\"/></Band></Format></Formats>");
            this.TabMain.TabpagePOHistory.addChild(obj.name, obj);

            obj = new Div("DivBtnGfilter",null,"8","40","28","58",null,null,null,null,null,this.TabMain.TabpagePOHistory.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("Comm::cmmGridFilterButton.xfdl");
            obj.getSetter("targetGrid").set("TabMain.TabpagePOHistory.form.GridPoHistory");
            obj.set_visible("true");
            this.TabMain.TabpagePOHistory.addChild(obj.name, obj);

            obj = new Div("DivBtnFormat",null,"8","40","28","8",null,null,null,null,null,this.TabMain.TabpagePOHistory.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("Comm::cmmFormatMenuButton.xfdl");
            obj.getSetter("targetGrid").set("TabMain.TabpagePOHistory.form.GridPoHistory");
            obj.set_visible("true");
            this.TabMain.TabpagePOHistory.addChild(obj.name, obj);

            obj = new Button("ButtonSendMailOutlook",null,"18","133","28","105",null,null,null,null,null,this.TabMain.TabpagePOHistory.form);
            obj.set_taborder("3");
            obj.set_text("SendMail(Outlook)");
            obj.set_visible("false");
            this.TabMain.TabpagePOHistory.addChild(obj.name, obj);

            obj = new Button("ButtonDownloadPoPrint",null,"8","133","28","105",null,null,null,null,null,this.TabMain.TabpagePOHistory.form);
            obj.set_taborder("4");
            obj.set_text("Download P/O Print");
            this.TabMain.TabpagePOHistory.addChild(obj.name, obj);

            obj = new Button("ButtonPoPrintEn",null,"8","133","28","242",null,null,null,null,null,this.TabMain.TabpagePOHistory.form);
            obj.set_taborder("5");
            obj.set_text("P/O Print(EN)");
            this.TabMain.TabpagePOHistory.addChild(obj.name, obj);

            obj = new Button("ButtonPoPrintKr",null,"8","133","28","379",null,null,null,null,null,this.TabMain.TabpagePOHistory.form);
            obj.set_taborder("6");
            obj.set_text("P/O Print(KR)");
            this.TabMain.TabpagePOHistory.addChild(obj.name, obj);

            obj = new Button("ButtonMassInput",null,"8","133","28","516",null,null,null,null,null,this.TabMain.TabpagePOHistory.form);
            obj.set_taborder("7");
            obj.set_text("Mass Input");
            this.TabMain.TabpagePOHistory.addChild(obj.name, obj);

            obj = new Button("ButtonGoToImportRequest",null,"8","133","28","653",null,null,null,null,null,this.TabMain.TabpagePOHistory.form);
            obj.set_taborder("8");
            obj.set_text("Go To Import Request");
            this.TabMain.TabpagePOHistory.addChild(obj.name, obj);

            obj = new Div("DivCondition","8","40",null,"96","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("StaticSalesOrder","0","8","108","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("0");
            obj.set_text("SalesOrder");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticStyleNo","0","33","108","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("1");
            obj.set_text("STYLE :");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticVendor","0","58","108","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("2");
            obj.set_text("Vendor");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticMaterial","540","8","108","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("6");
            obj.set_text("Material");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("div_SalesOrderFromTo","118","8","431","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_SearchConditionFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.set_formscrolltype("none");
            obj.getSetter("SearchConditionType").set("SalesOrderNo,ds_in,p_osno1,p_osno2,p_osno_list");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("div_StyleFromTo","118","33","431","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_SearchConditionFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.set_formscrolltype("none");
            obj.getSetter("SearchConditionType").set("StyleNo,ds_in,p_matnr1,p_matnr2,p_mtl_matnr_list");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("div_VendorFromTo","118","58","431","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_SearchConditionFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.set_formscrolltype("none");
            obj.getSetter("SearchConditionType").set("VendorCode,ds_in,p_supply1,p_supply2,p_supply_list");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("div_MaterialFromTo","658","8","431","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_SearchConditionFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.set_formscrolltype("none");
            obj.getSetter("SearchConditionType").set("MaterialCode,ds_in,p_mtl_matnr1,p_mtl_matnr2,p_mtl_matnr_list");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Edit("Edit00","562","36","299","24",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_value("1126195724");
            obj.set_visible("true");
            obj.set_text("1126195724");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Static("StaticMaterial00","540","58","118","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("9");
            obj.set_text("Sales Order별");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","658","58","21","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_value("true");
            obj.set_truevalue("X");
            obj.set_falsevalue(" ");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Radio("RadioDownPoPrint","831","58","137","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var DivCondition_form_RadioDownPoPrint_innerdataset = new nexacro.NormalDataset("DivCondition_form_RadioDownPoPrint_innerdataset", obj);
            DivCondition_form_RadioDownPoPrint_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">X</Col><Col id=\"datacolumn\">Excel</Col></Row><Row><Col id=\"datacolumn\">PDF</Col><Col id=\"codecolumn\">P</Col></Row></Rows>");
            obj.set_innerdataset(DivCondition_form_RadioDownPoPrint_innerdataset);
            obj.set_text("Excel");
            obj.set_value("X");
            obj.set_index("0");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("DivCrudButton","8","8",null,"32","8",null,null,null,null,null,this);
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_search");
            obj.set_url("Comm::Comm_CrudButton.xfdl");
            obj.getSetter("InitCompVisEna").set("1:1:1:1,1:0:1:1");
            obj.getSetter("fn_searchName").set("");
            obj.getSetter("fn_newName").set("");
            obj.getSetter("fn_saveName").set("");
            obj.getSetter("fn_deleteName").set("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","0",null,null,"90","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_in");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"p_mandt\"/><Cell col=\"1\" text=\"p_osno1\"/><Cell col=\"2\" text=\"p_osno2\"/><Cell col=\"3\" text=\"p_osno_list\"/><Cell col=\"4\" text=\"p_matnr1\"/><Cell col=\"5\" text=\"p_matnr2\"/><Cell col=\"6\" text=\"p_matnr_list\"/><Cell col=\"7\" text=\"p_mtl_matnr1\"/><Cell col=\"8\" text=\"p_mtl_matnr2\"/><Cell col=\"9\" text=\"p_mtl_matnr_list\"/><Cell col=\"10\" text=\"p_supply1\"/><Cell col=\"11\" text=\"p_supply2\"/><Cell col=\"12\" text=\"p_supply_list\"/><Cell col=\"13\" text=\"p_user_id\"/><Cell col=\"14\" text=\"I_CHECK\"/></Band><Band id=\"body\"><Cell text=\"bind:p_mandt\"/><Cell col=\"1\" text=\"bind:p_osno1\"/><Cell col=\"2\" text=\"bind:p_osno2\"/><Cell col=\"3\" text=\"bind:p_osno_list\"/><Cell col=\"4\" text=\"bind:p_matnr1\"/><Cell col=\"5\" text=\"bind:p_matnr2\"/><Cell col=\"6\" text=\"bind:p_matnr_list\"/><Cell col=\"7\" text=\"bind:p_mtl_matnr1\"/><Cell col=\"8\" text=\"bind:p_mtl_matnr2\"/><Cell col=\"9\" text=\"bind:p_mtl_matnr_list\"/><Cell col=\"10\" text=\"bind:p_supply1\"/><Cell col=\"11\" text=\"bind:p_supply2\"/><Cell col=\"12\" text=\"bind:p_supply_list\"/><Cell col=\"13\" text=\"bind:p_user_id\"/><Cell col=\"14\" text=\"bind:I_CHECK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("GridTrace",null,"363","690",null,"17","137",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("gds_TrcInfo");
            obj.getSetter("griduserproperty").set("checkbox,sort");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj.getSetter("tempuserproperty").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"158\"/><Column size=\"363\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TrcSeq\"/><Cell col=\"1\" text=\"TrcName\"/><Cell col=\"2\" text=\"TrcId\"/></Band><Band id=\"body\"><Cell text=\"bind:TrcSeq\"/><Cell col=\"1\" text=\"bind:TrcName\"/><Cell col=\"2\" text=\"bind:TrcId\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonScriptTest",null,"8","84","28","343",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Script Test");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonSearchSample",null,"8","160","28","177",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Search Sample 트랜잭션");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonTrace",null,"8","160","28","8",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Trc. 보이기/숨기기");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivCondition.form.div_SalesOrderFromTo.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivCondition.form.div_SalesOrderFromTo.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_calFromTo00.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_calFromTo00.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","DivCondition.form.div_StyleFromTo.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivCondition.form.div_StyleFromTo.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","DivCondition.form.div_VendorFromTo.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","DivCondition.form.div_VendorFromTo.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","DivCondition.form.div_MaterialFromTo.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","DivCondition.form.div_MaterialFromTo.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","DivCondition.form.CheckBox00","value","ds_in","I_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comm::cmmGridAddDelButton.xfdl");
            this._addPreloadList("fdl","Comm::cmmFormatMenuButton.xfdl");
            this._addPreloadList("fdl","Comm::cmmGridFilterButton.xfdl");
            this._addPreloadList("fdl","Comm::Comm_SearchConditionFromTo.xfdl");
            this._addPreloadList("fdl","Comm::Comm_CrudButton.xfdl");
        };
        
        // User Script
        this.addIncludeScript("POList.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("POList.xfdl", function() {
        /********************************************************************************************
        @desc	1. Include
        ********************************************************************************************/
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        /********************************************************************************************
        @desc	2. Form 변수 선언
        ********************************************************************************************/
        //공통코드 세팅
        this.COMBO_SET_STR = "ds_cmbPaymentTerms"	+"#"+"ZTERM"		+" "
        					+"ds_cmbDocumentType"	+"#"+"ERP_DOC"      +" "
        					+"ds_cmbIncoterms"		+"#"+"INCO1"        +" "
        					+"ds_cmbCurrency"		+"#"+"CURRENCY"     +" "
        					;

        //콤포넌트
        var GridPoList 					= this.TabMain.TabpagePOList.form.GridPoList;
        var ButtonPOListHist 			= this.TabMain.TabpagePOList.form.ButtonPOListHist;
        var DivCrudButtonDsPoListHist 	= this.TabMain.TabpagePOList.form.DivCrudButtonDsPoListHist;
        var GridPOListHistory 			= this.TabMain.TabpagePOList.form.GridPOListHistory;
        var GridPOListHistoryName 		= this.TabMain.TabpagePOList.form.GridPOListHistoryName;
        var EditCidName					= this.TabMain.TabpagePOList.form.EditCidName;
        var ButtonColChangeExec			= this.TabMain.TabpagePOList.form.ButtonColChangeExec;

        /********************************************************************************************
        @desc	3. OnLoad
        ********************************************************************************************/
        /*
         *	온로드
         */
        this.formOnload = function(obj,e)
        {
        	// 기본 데이터 가져오기 + 콤보세팅 + word	(콜백에서 fn_reset을 실행함.)
        	this.gfn_getAllInitData();
        };

        /*
         *	초기화 함수
         */
        this.fn_reset = function()
        {
        	var gtrcPos	=	"POList.xfdl.fn_reset";
        				this.gtrace("● PO리셋", gtrcPos);

        	// 데이터셋 초기화 ( clear+addrow )
        	{
        		//조건
        		this.ds_in.clearData();
        		this.ds_in.addRow();

        	}
        	{
        		//Validation
        		this.fn_setSearchValidation();
        		this.fn_setSaveValidation();
        	}
        }

        /********************************************************************************************
        @desc	4. Validation 처리
        *******************************************************************************************/
        this.fn_setSearchValidation = function() {
        	{
        		//Validation 세팅 : Sample_Validation.xfdl 참조
        		this.gfn_clearValidation(this.ds_in);

        		//SalesOrder
        		this.gfn_setValidation(this.ds_in, "p_osno1||p_osno_list||p_matnr1||p_matnr_list", "Sales Order", "required");

         		//STYLE
        		//	this.gfn_setValidation(this.ds_in, "p_matnr1||p_osno_list", "Style#", "required");
        	}
        }

        this.fn_setSaveValidation = function()
        {
        	this.gfn_clearValidation(this.ds_POList);

        	var strVldtn_01	=	"CURRENCY"		;
        	var strVldtn_02	=	"REMAIN_MENGE"	;
        	var strVldtn_03	=	"L_NETWR"		;
        	var strVldtn_04	=	"SUPPLIER_CODE1";
        	var strVldtn_05	=	"CURRENCY"		;
        	var strVldtn_06	=	"PEINH"			;
        	var strVldtn_07	=	"SUPPLIER_CODE1";
        	var strVldtn_08	=	"DELIVERY_DATE"	;
        	var strVldtn_09	=	"DOC_TYPE"		;
        	var strVldtn_10	=	"ZTERM"			;

        	this.gfn_setValidation(this.ds_POList, strVldtn_01, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_01, "HeaderText")	, "required");
        	this.gfn_setValidation(this.ds_POList, strVldtn_02, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_02, "HeaderText")	, "required");
        	this.gfn_setValidation(this.ds_POList, strVldtn_03, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_03, "HeaderText")	, "required");
        	this.gfn_setValidation(this.ds_POList, strVldtn_04, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_04, "HeaderText")	, "required");
        	this.gfn_setValidation(this.ds_POList, strVldtn_05, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_05, "HeaderText")	, "required");
        	this.gfn_setValidation(this.ds_POList, strVldtn_06, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_06, "HeaderText")	, "required");
        	this.gfn_setValidation(this.ds_POList, strVldtn_07, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_07, "HeaderText")	, "required");
        	this.gfn_setValidation(this.ds_POList, strVldtn_08, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_08, "HeaderText")	, "required");
        	this.gfn_setValidation(this.ds_POList, strVldtn_09, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_09, "HeaderText")	, "required");
        	this.gfn_setValidation(this.ds_POList, strVldtn_10, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_10, "HeaderText")	, "required");

        }

        // 정합성체크 : 폼별 특수 케이스
        this.fn_validationCheck = function(){

        	var gtrcPos = "POList.xfdl.fn_validationCheck";
        		this.gtrace("● PO 정합성체크", gtrcPos);

        	var oTp = this.getTabpageType();
        		var ttpe = oTp.TAB_TYPE;
        		var tds  = oTp.T_DS;

        	// 저장공통체크
        	var checkResult = this.fn_saveCommonCheck(ttpe, tds);

        	if(checkResult){
        		switch(ttpe) {
        		case "PO_CREATE"	:
        				//	PO 생성 체크
        				checkResult = this.fn_savePoValidation(ttpe, tds);
        				break;
        		case "PO_UPDATE"	:
        				//	히스토리 저장 체크
        				checkResult = this.fn_saveHistoryValidation(ttpe, tds);
        				break;
        		default:
        				break;
        		}
        	}
        	return checkResult;
        }


        // 저장시 공통체크로직(CREATE / UPDATE)
        this.fn_saveCommonCheck = function(tabType, tabDs){

        	var gtrcPos = "POList.xfdl.fn_saveCommonCheck";
        		this.gtrace("●PO저장체크로직", gtrcPos);

        	var bRtn = true;

        	// 전체 돌면서 체크
        	tabDs.set_enableevent(false);
        	for(var i = 0 ; i < tabDs.rowcount ; i++){

        		//체크된 것에 대해서만 적용
        		var ck = tabDs.getColumn(i, "ROW_CHK");

        		if(ck == "1"){
        			//메세지초기화는 무조건 함
        			this.fn_setDsRowMessage(tabDs, i, "");
        			var ckDocType = tabDs.getColumn(i, "DOC_TYPE");

        			// [P/O] 특정문서타입은 발주를 할수 없다. (''LN'', ''LC'', ''BM'')
        			// 에러메세지 : O/S type is not valid. (''LN'', ''LC'', ''BM'')
        			if(ckDocType == "LN" || ckDocType == "LC" || ckDocType == "BM"){
        				//O/S type is not valid.
        				bRtn = this.fn_setDsRowMessage(tabDs, i, "msg.OStypeIsNotValid");
        			}
        		}
        	}
        	tabDs.set_enableevent(true);

        	this.gtrace("체크룰통과여부(validationCheck)-------->"+bRtn, gtrcPos);

        	return bRtn;
        }

        // 히스토리 저장시 체크로직(UPDATE)
        this.fn_saveHistoryValidation = function(){

        	var gtrcPos = "POList.xfdl.fn_saveHistoryValidation";
        		this.gtrace("●PO히스토리저장체크로직", gtrcPos);

        	var bRtn = true;
        	var targetDs = this.ds_POHistory;

        	targetDs.set_enableevent(false);

        	// 전체 돌면서 체크
        	for(var i = 0 ; i < targetDs.rowcount ; i++){

        		var ck = targetDs.getColumn(i, "ROW_CHK");
        		var ckDOC_TYPE = targetDs.getColumn(i, "DOC_TYPE");
        		var iPOITEM = targetDs.getColumn(i, "POITEM");
        		var iLIFNR = targetDs.getColumn(i, "LIFNR");			//	Vendor ( SUPPLIER_CODE )
        		var iUEBTO = nexacro.toNumber(targetDs.getColumn(i, "UEBTO"));
        		var iUNTTO = nexacro.toNumber(targetDs.getColumn(i, "UNTTO"));

        		//체크된 것에 대해서만 체크
        		if(ck=="1"){

        			this.gtrace(i+"번째 행 DOC_TYPE-->"+ckDOC_TYPE, gtrcPos);

        			if(ckDOC_TYPE == "NB" || ckDOC_TYPE == "IM")
        			{
        				//  NB' or 'IM' 으로 생성 및 변경시에는 TOL (more, less) 무조건 빈값
        				if(	!(iUEBTO==0 && iUNTTO==0)
        				){
        					bRtn = this.fn_setDsRowMessage(targetDs, i, "해당 Document Type은 TOL 값이 빈값이어야 합니다.");
        				}
        			}

        			// 두번 Loop.
        			for(var k = 0 ; k < targetDs.rowcount ; k++)
        			{
        				var kPOITEM = targetDs.getColumn(k, "POITEM");
        				var kLIFNR = targetDs.getColumn(k, "LIFNR");	//	Vendor ( SUPPLIER_CODE )
        				var kROW_CHK = targetDs.getColumn(k, "ROW_CHK");	//	체크여부

        				// [P/O HISTORY] 변경시 같은 PO인데 벤더가 다를경우 해당 에러 메시지
        				if(	iPOITEM == kPOITEM && iLIFNR != kLIFNR
        				){
        					this.gtrace(k+"번째 행 벤더코드-->"+kLIFNR+"!="+iLIFNR+"(체크된 벤더코드) at Purchase Number(POITEM)---->"+kPOITEM, gtrcPos);
        							var tmpMsg = "Please Select Equals PO AND Vendor Data!";
        							this.fn_setDsRowMessage(targetDs, i, tmpMsg);
        					bRtn = 	this.fn_setDsRowMessage(targetDs, k, tmpMsg);
        				}

        				// [ALL] Document Type NB' or 'IM' 로 변경시 해당 PO ITEM 전체선택 안되고 저장 불가
        				if(ckDOC_TYPE == "NB" || ckDOC_TYPE == "IM")
        				{
        					if(	iPOITEM == kPOITEM && kROW_CHK != "1"
        					){
        						//	체크되지 않은 것에도 메세지 표시
        						this.gtrace(k+"번째 행 체크안됨(kROW_CHK)-->"+kROW_CHK+" - Purchase Number(POITEM-kPOITEM)---->"+kPOITEM, gtrcPos);
        						var tmpMsg = "Document Type NB' or 'IM' 'PO번호' 에 아이템을 전체선택해주세요";
        								this.fn_setDsRowMessage(targetDs, i, tmpMsg);
        						bRtn = 	this.fn_setDsRowMessage(targetDs, k, tmpMsg);
        					}
        				}
        			}
        		}
        	}

        	targetDs.set_enableevent(true);

        	this.gtrace("체크룰통과여부(validationCheck)-------->"+bRtn, gtrcPos);
        	return bRtn;
        }

        // PO 저장시 체크로직(CREATE)
        this.fn_savePoValidation = function(){
        	return true;
        }

        /********************************************************************************************
        @desc	5. 서비스 호출(Transaction)
        ********************************************************************************************/
        /*++
        @desc	POList , POHistory Load
        */
        this.tfn_getPoListHistoryLoad = function(){

        	var gtrcPos = "POList.xfdl.tfn_getPoListHistoryLoad";		this.gtrace("● POSearch트랜잭션", gtrcPos);

        	this.ds_POList.clearData();
        	this.ds_POHistory.clearData();

        	this.ds_in.setColumn(0, "p_user_id", this.gfn_getApplication().gds_User.getColumn(0, "USER_ID"));

        	var sSvcID 			= "getPoListHistoryLoad";
        	var sURL 			= "AppSvr::common/commonAction.ppc";
        	var sInDatasets 	= "ds_in0=ds_in ds_in1=ds_in";
        	var sOutDatasets 	= "ds_POList=ds_out0 ds_POHistory=ds_out1";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("POMapper.getPOList POMapper.getPOHisList");

        		this.gtrace("보내는 데이터셋(ds_in.saveXML())---->"+this.ds_in.saveXML(), gtrcPos);

        	//공통 트랜잭션 사용
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }

        /*++
        @desc	POHistory Only Load
        */
        this.tfn_getPoHistoryOnlyLoad = function(){

        	var gtrcPos = "POList.xfdl.tfn_getPoHistoryOnlyLoad";		this.gtrace("● PO History Only Search 트랜잭션", gtrcPos);

        	this.ds_POHistory.clearData();

        	this.ds_in.setColumn(0, "p_user_id", this.gfn_getApplication().gds_User.getColumn(0, "USER_ID"));

        	var sSvcID 			= "getPoHistoryOnlyLoad";
        	var sURL 			= "AppSvr::common/commonAction.ppc";
        	var sInDatasets 	= "ds_in0=ds_in";
        	var sOutDatasets 	= "ds_POHistory=ds_out0";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("POMapper.getPOHisList");

        		this.gtrace("보내는 데이터셋(ds_in.saveXML())---->"+this.ds_in.saveXML(), gtrcPos);

        	//공통 트랜잭션 사용
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }

        /*++
        @desc	POList , POHistory Load
        */
        this.tfn_savePO = function(){
        	// I_CHECK "X" / ""

        	var gtrcPos = "POList.xfdl.tfn_savePO";		this.gtrace("● PO / POHistory 저장트랜잭션", gtrcPos);

        	//	탭페이지에 따른 트랜잭션 세팅
        	var saveType = this.getTabpageType().TAB_TYPE;
        	var strUrl;
        	var strInDatasets;
        	var strOutDatasets;

        	switch(saveType)	//	tfn_savePO
        	{
        		case "PO_CREATE" :
        							{	//	beforeTrans for CREATE

        								// 필터해제 및 초기화(ds_POList -> ds_PoSave_in)
        								this.ds_POList.filter("");
        								this.ds_PoSave_in.clearData();
        								this.ds_result_savePO_sap.clearData();
        																								var sGtLdCol = "VBELN";	// Ouput 보고싶은 로드컬럼
        								// ds_PoSave_in 세팅
        								for(var i=0; i < this.ds_POList.rowcount ;i++){
        									// 체크여부
        									var rowChk = this.ds_POList.getColumn(i, "ROW_CHK");

        									if(rowChk=="1")
        									{					this.gtrace("체크여부 "+i+"번행(rowChk)--->"+rowChk, gtrcPos);
        										// 행추가
        										var iAdRp = this.ds_PoSave_in.addRow();
        																										//	this.gtrace("내부param(i)--->"+i, gtrcPos);
        										//paramMap 적용 세팅 : 조회≠저장 Alias 차이로 인해 필요함.( 기준 : ds_paramMap )
        										this.ds_paramMap.filter("");
        										this.ds_paramMap.filter("DsName=='ds_POList'");						this.gtrace("필터된 ds_paramMap 갯수(PO_CREATE)-->"+this.ds_paramMap.rowcount, gtrcPos);
        										for(var j=0; j < this.ds_paramMap.rowcount; j++){

        											var sLdCol = this.ds_paramMap.getColumn(j, "LoadCol");		//	if(i==0)	this.gtrace("내부param(sLdCol)--->"+sLdCol, gtrcPos);
        											var sSvCol = this.ds_paramMap.getColumn(j, "SaveCol");		//	if(i==0)	this.gtrace("내부param(sSvCol)--->"+sSvCol, gtrcPos);

        											if(this.gfn_nvl(sLdCol,"")!="" && this.gfn_nvl(sSvCol,"")!=""){
        																											if(sGtLdCol==sLdCol)	this.gtrace("변수맵핑(조회->저장)(ds_paramMap기준)--->"+sLdCol+"-->"+sSvCol, gtrcPos);
        												this.ds_PoSave_in.copyRow(iAdRp, this.ds_POList, i, sSvCol+"="+sLdCol)	//	"ToColumnID=FromColumnID"
        											}
        										} // End Of Loop

        										{	// 일괄 값세팅
        											// P_USER_BU , I_CHECK(Sales Order별)
        											this.ds_PoSave_in.setColumn(iAdRp, "P_USER_BU", this.gfn_getUser().BU_CD) ;
        											this.ds_PoSave_in.setColumn(iAdRp, "I_CHECK", this.ds_in.getColumn(0, "I_CHECK")) ;
        											this.ds_PoSave_in.setColumn(iAdRp, "P_EINDT", this.ds_PoSave_in.getColumn(iAdRp, "P_EINDT").replace("-", "")) ;

        											//	P_BUKRS 값을 동일하게 세팅 ( 비맵핑컬럼 )
        											var sBukrs = this.ds_PoSave_in.getColumn(iAdRp, "P_BUKRS") ;
        														 this.ds_PoSave_in.setColumn(iAdRp, "P_EKORG", sBukrs) ;
        														 this.ds_PoSave_in.setColumn(iAdRp, "P_WERKS", sBukrs) ;

        											//	PO생성 구분자 "C" 입력
        											this.ds_PoSave_in.setColumn(iAdRp, "P_CRUD", "C") ;
        										}
        									}
        								}	 // End Of Loop

        								//	사용자세팅
        								this.gfn_setUser(this.ds_PoSave_in, "P_USER_ID");

        								this.gtrace("트랜잭션데이터셋(ds_PoSave_in.saveXML)--->"+this.ds_PoSave_in.saveXML(), gtrcPos);
        						   }

        						   // 트랜잭션변수세팅
        						   strUrl		 =	"AppSvr::po/savePO.ppc";
        						   strInDatasets =	"ds_in0=ds_PoSave_in";
        						   sOutDatasets  = 	"ds_result_savePO_sap=ds_out0 ds_result_savePO_default=ds_out_po_default";
        					break;

        		case "PO_UPDATE" : 		//	PO-HISTORY
        							{	//	beforeTrans for UPDATE

        																								var sGtLdCol = "VBELN";	// Ouput 보고싶은 로드컬럼
        								// 트랜잭션 전 처리(공통)
        								var trRslt = this.gfn_beforeTrans(this.ds_POHistory, this.ds_trans_POHistory);

        								//	사용자세팅
        								this.gfn_setUser(this.ds_trans_POHistory, "USER_ID");

        								// 기타처리
        								for(var k = 0 ; k < this.ds_trans_POHistory.rowcount ; k++){
        									//CRUD
        									this.ds_trans_POHistory.setColumn(k, "CRUD", "U");

        									//EINDT : 날짜포맷 수정
        									this.ds_trans_POHistory.setColumn(k, "EINDT",
        										this.gfn_dateToStr(
        											this.gfn_strToDate(
        												this.ds_trans_POHistory.getColumn(k, "EINDT")
        																)
        															)
        														);
        								}

        								this.gtrace("트랜잭션데이터셋(ds_trans_POHistory.saveXML)--->"+this.ds_trans_POHistory.saveXML(), gtrcPos);
        						   }

        						   // 트랜잭션변수세팅
        						   strUrl		 =	"AppSvr::po/updatePO.ppc";
        						   strInDatasets =	"ds_in0=ds_trans_POHistory";
        						   sOutDatasets  = 	"ds_result_savePO_sap=ds_out0 ds_result_savePO_default=ds_out_po_default";
        			break;
        		default : break;
        	}

        	var sSvcID 			= "savePO";
        	var sURL 			=  strUrl;
        	var sInDatasets 	=  strInDatasets;
        	var sOutDatasets 	=  sOutDatasets;
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("");

        	//공통 트랜잭션 사용 : -1에러 발생시 자동 콜백처리됨.
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }



        this.tfn_deletePO = function(){

        	var gtrcPos = "POList.xfdl.tfn_deletePO";		this.gtrace("● POHistory 삭제 트랜잭션", gtrcPos);

        	{	//	beforeTrans for DELETE

        		// 트랜잭션 전 처리(공통)
        		var trRslt = this.gfn_beforeTrans(this.ds_POHistory, this.ds_trans_POHistory, "ROW_CHK");
        			this.gtrace("트랜잭션데이터셋--1--(ds_trans_POHistory.saveXML)--->"+this.ds_trans_POHistory.saveXML(), gtrcPos);
        		//	사용자세팅
        		this.gfn_setUser(this.ds_trans_POHistory, "USER_ID");

        		// 기타처리
        		for(var k = 0 ; k < this.ds_trans_POHistory.rowcount ; k++){

        			//CRUD : 삭제구분자로세팅
        			this.ds_trans_POHistory.setColumn(k, "CRUD", "D");

        			//EINDT : 날짜포맷 수정
        			this.ds_trans_POHistory.setColumn(k, "EINDT",
        				this.gfn_dateToStr(
        					this.gfn_strToDate(
        						this.ds_trans_POHistory.getColumn(k, "EINDT")
        										)
        									)
        								);
        		}

        		this.gtrace("트랜잭션데이터셋--2--(ds_trans_POHistory.saveXML)--->"+this.ds_trans_POHistory.saveXML(), gtrcPos);
        	}

        	// 트랜잭션변수세팅
        	strUrl		 =	"AppSvr::po/updatePO.ppc";
        	strInDatasets =	"ds_in0=ds_trans_POHistory";
        	sOutDatasets  = "ds_result_savePO_sap=ds_out0 ds_result_savePO_default=ds_out_po_default";

        	var sSvcID 			= "deletePO";
        	var sURL 			=  strUrl;
        	var sInDatasets 	=  strInDatasets;
        	var sOutDatasets 	=  sOutDatasets;
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("");

        	//공통 트랜잭션 사용 : -1에러 발생시 자동 콜백처리됨.
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }


        /*++
        @desc	tfn_PoPrint
        */
        this.tfn_PoPrint = function(strLang){

        	var gtrcPos = "POList.xfdl.tfn_PoPrint";
        	this.gtrace("● PO프린트", gtrcPos);

        	var rfcId;
        	var sEbeln;
        	var sItpe;
        	var sName  ;
        	var cDataStr;

        	switch(strLang)
        	{
        		case "KR":
        		case "EN":
        			// 데이터 세팅
        			//	-	"I_EBELN|" + PO번호 + "ⁿI_TYPE|” + 영문(E)/국문(K) + ”ⁿI_NAME|" + 사용자이름
        				rfcId = "ZQME_RFC_PO_PRINT";
        				sEbeln = "I_EBELN|"	+ this.ds_POHistory.getColumn(this.ds_POHistory.rowposition, "POITEM");	//PO번호
        				sItpe  = "ⁿI_TYPE|"+(strLang=="KR"? "K":"E");																//영문(E)/국문(K)
        				sName  = "ⁿI_NAME|"+this.gfn_getApplication().gds_User.getColumn(0, "USER_NM");;			//사용자이름

        			break;

        		case "PO_DOWNLOAD":
        				// 데이터 세팅
        				//	-	I_EBELN|" + PO번호 + "ⁿI_TYPE|" + 파일타입 (X:Excel, P:PDF)
        				rfcId 	= "ZQME_RFC_PO_DOWN";
        				sEbeln 	= "I_EBELN|"	+ this.ds_POHistory.getColumn(this.ds_POHistory.rowposition, "POITEM");		//PO번호
        				sItpe  	= "ⁿI_TYPE|"+this.DivCondition.form.RadioDownPoPrint.value;	//(X:Excel, P:PDF)
        				sName  	= "";

        			break;
        	}

        	//cDataStr조합
        	cDataStr = sEbeln + sItpe + sName;	this.gtrace("조합문자열(cDataStr)---->"+cDataStr, gtrcPos);

        	// 데이터셋초기화(in/out)
        	this.ds_PO_PRINT_in.clearData();
        	this.ds_PO_PRINT_in.addRow();
        	this.ds_PO_PRINT_out.clearData();

        	// 데이터셋 데이터세팅
        	this.ds_PO_PRINT_in.setColumn(0, "P_DATA_STR", cDataStr);
        	this.ds_PO_PRINT_in.setColumn(0, "P_RETURN_TYPE", "DATA");
        	this.gfn_setUser(this.ds_PO_PRINT_in, "P_USER_ID");

        	// 트랜잭션 세팅
        	var sSvcID 			= "PoPrint";
        	var sURL 			= "AppSvr::common/os/call.ppc";
        	var sInDatasets 	= "ds_in0=ds_PO_PRINT_in";
        	var sOutDatasets 	= "ds_PO_PRINT_out=ds_out0";
        	var sArguments 		= "rfcId=" + nexacro.wrapQuote(rfcId);

        	this.gtrace("보내는 데이터셋(ds_PO_PRINT_in.saveXML())---->"+this.ds_PO_PRINT_in.saveXML(), gtrcPos);

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
        	var gtrcPos = "POList.xfdl.callbackFunction"
        	var gtrcSearchPos = gtrcPos+".getPoListHistoryLoad";
        		this.gtrace("● PO콜백", gtrcPos);
        		this.gtrace("● PO콜백-Search", gtrcSearchPos);

        	this.gtrace("strSvcID---->"+strSvcID, gtrcPos);
        	this.gtrace("nErrorCode---->"+nErrorCode, gtrcPos);
        	this.gtrace("strErrorMsg---->"+strErrorMsg, gtrcPos);

        	// ###### nErrorCode < 0 경우는 gfn_transaction 에서 공통으로 처리됨. ######

        	// 트랜잭션 성공시 서비스별 콜백처리
        	switch (strSvcID) 	//	callbackFunction
        	{
        		default:
        			break;

        		case "PoPrint" : 	//	callback
        			this.gtrace(this.ds_PO_PRINT_out.saveXML(), gtrcPos);
        			var excUrl;
        				excUrl = this.ds_PO_PRINT_out.getColumn(0, "O_REX_URL");

        				excUrl.replace("&amp;", "&");
        				this.gtrace("excUrl----->"+excUrl, gtrcPos);
        				system.execBrowser(excUrl);
        			break;

        		case "getPoListHistoryLoad"	:	//	callback
        					this.gtrace(this.ds_POList.saveXML(), gtrcSearchPos);
        					this.gtrace(this.ds_POHistory.saveXML(), gtrcSearchPos)

        					// 데이터조회후 금액 재계산
        					this.ds_POList.set_enableevent(false);
        					for(var i = 0 ; i < this.ds_POList.rowcount ; i++){
        						this.fn_TotalAmountCalc(i);
        					}
        					this.ds_POList.set_enableevent(true);

        					this.ds_POHistory.set_enableevent(false);
        					for(var k = 0 ; k < this.ds_POHistory.rowcount ; k++){
        						this.fn_TotalAmountCalc(k);
        					}
        					this.ds_POHistory.set_enableevent(true);


        			break;
        		case "getPoHistoryOnlyLoad"	:	//	callback
        					this.gtrace(this.ds_POHistory.saveXML(), gtrcSearchPos)
        			break;

        		case "deletePO" : // callback

        			//	break;	//	일단 savePO와 동일하게...
        		case "savePO":	//	callback

        				//	PO생성 / 수정 여부 확인
        				var oTp = this.getTabpageType();
        				var ttpe = oTp.TAB_TYPE;
        				var tds  = oTp.T_DS;

        				this.gtrace("헤더의 결과(1줄)-savePO--->"+this.ds_result_savePO_default.saveXML(), gtrcPos);
        				this.gtrace("RFC의 결과(체크된Row)-savePO--->"+this.ds_result_savePO_sap.saveXML(), gtrcPos);

        				var sDef_ResultCd 	= this.ds_result_savePO_default.getColumn(0, "RESULT_CD");	this.gtrace("nonsap저장성공여부(RESULT_CD)-->"+sDef_ResultCd	, gtrcPos);
        				var sDef_DbMsg 		= this.ds_result_savePO_default.getColumn(0, "DB_MSG");		this.gtrace("nonsap저장결과메세지(DB_MSG)-->"	+sDef_DbMsg 	, gtrcPos);
        				var sDef_RfcCall	= this.ds_result_savePO_default.getColumn(0, "RFC_CALL");	this.gtrace("RFC_CALL-->"+	sDef_RfcCall, gtrcPos);
        				var sDef_Expt 		= this.ds_result_savePO_default.getColumn(0, "EXCEPTION");	this.gtrace("EXCEPTION-->"+	sDef_Expt 	, gtrcPos);

        				// nonsap 저장성공 , RFC진행 : 개별 성공여부 가져옴.
        				if(sDef_ResultCd == "S")
        				{
        					var bSucc;					//	RFC 결과 전체Row가 모두 성공인지를 확인하기 위한 구분자
        					var arrEbeln = [];		// RFC 성공한 PO번호들을 담는 배열

        					var cI_CHECK = this.ds_in.getColumn(0, "I_CHECK");	this.gtrace("SalesOrder별인지 구분(cI_CHECK)---->"+cI_CHECK, gtrcPos);

        					// PO_CREATE : Sales Order(Optional) + Vendor 별로 하나의 PO가 생성된다
        					// PO_UPDATE : Purchase Order 별로 하나의 메세지가 세팅된다 : 아이템별 부분성공 없음
        					for(var i = 0 ; i < this.ds_result_savePO_sap.rowcount ; i++)
        					{
        						var sEbeln		=	this.ds_result_savePO_sap.getColumn(i, "EBELN");		//	PO Number
        						var sVBELN		=	this.ds_result_savePO_sap.getColumn(i, "VBELN");		//	Sales Order
        						var sLIFNR		=	this.ds_result_savePO_sap.getColumn(i, "LIFNR");		//	Vendor ( SUPPLIER_CODE )
        						var sMSG		=	this.ds_result_savePO_sap.getColumn(i, "MESSAGE");
        						var sRtn		=	this.ds_result_savePO_sap.getColumn(i, "RETURN");

        						//성공여부 확인 - RETURN : S/F
        						if(sRtn != "S") bSucc = false;
        						else{
        							arrEbeln.push(sEbeln);
        						}

        						//메세지 적용
        						for(var k = 0 ; k < tds.rowcount ; k++)
        						{
        							var pROW_CHK			=	tds.getColumn(k, "ROW_CHK");
        							var pVBELN				=	tds.getColumn(k, "VBELN");					//	Sales Order
        							var pEbeln				=	tds.getColumn(k, "POITEM");					//	Purchase Order
        							var pSUPPLIER_CODE1		=	tds.getColumn(k, "SUPPLIER_CODE1");			//	Vendor

        							if(pROW_CHK == "1")
        							{
        								// 체크가 되어 있는 경우만 SalesOrder 번호까지 맞춰서 메세지를 세팅한다.
        								var bOkByTab;
        								switch(ttpe)
        								{
        									case "PO_CREATE" :
        											this.gtrace("PO생성측(bOkByTab)----->"+"cI_CHECK: "+cI_CHECK+" sVBELN: " +sVBELN+" pVBELN: " +pVBELN+" sLIFNR: " +sLIFNR+" pSUPPLIER_CODE1: " +pSUPPLIER_CODE1, gtrcPos);
        											if(		sVBELN == (cI_CHECK=="1"?pVBELN:sVBELN)
        												&& 	sLIFNR == pSUPPLIER_CODE1)
        											{
        												bOkByTab = true;
        											}else{
        												bOkByTab = false;
        											}
        										break;
        									case "PO_UPDATE" :
        											this.gtrace("PO수정측(bOkByTab)----->"+"sEbeln: "+sEbeln+" pEbeln: " +pEbeln, gtrcPos);
        											if(sEbeln == pEbeln){
        												bOkByTab = true;
        											}else{
        												bOkByTab = false;
        											}
        										break;
        									default : break;
        								}

        								this.gtrace(k+" 행 조건만족여부(bOkByTab)--->"+bOkByTab, gtrcPos);
        								if(bOkByTab)
        								{
        									this.gtrace("메세지입력할 row (k)-->"+k+" -- 메세지(sMSG), (VBELN, SUPPLIER_CODE1)--->"+sMSG+", "+pVBELN+","+pSUPPLIER_CODE1, gtrcPos);

        									//	메세지처리 - 개행문자제거
        									tds.setColumn(k, "Message", this.gfn_getMessage(sMSG.replace( /\n/g , " ")));
        									tds.setColumn(k, "RETURN" , sRtn);

        									//	성공이면 체크해제
        									if(sRtn == "S")
        									{
        										tds.set_enableevent(false);
        										tds.setColumn(k, "ROW_CHK" , "0");
        										tds.set_enableevent(true);
        									}
        								}
        							}
        						}

        					}

        					//	성공한 오더번호가 하나도 없는 경우도 실패
        					if(arrEbeln.length == 0) bSucc = false;

        					// 여기까지 bSucc가 false가 되지 않았다면 true
        					if(bSucc != false) bSucc = true;

        					// 메세지 띄우기
        					if(bSucc){
        							//	전체적으로 성공완료
        							var sCbMsg = "msg.success";
        							this.gfn_alert(sCbMsg,["(" + arrEbeln+")"],"savePO_SUCCESS","callbackFunc_pop","A");
        					}else{
        						if(arrEbeln.length == 0){
        							//	SAP RFC는 탔으나 모두 실패 : PO가 하나도 생성되지 않음
        							var sCbMsg = "msg.NoPoCreated";
        							this.gfn_alert(sCbMsg,[],"savePO_NoPoCreated","callbackFunc_pop","A");
        						}else{
        							//	SAP RFC는 탔고 부분적으로 PO 생성 성공한 경우
        							var sCbMsg = "msg.checkMessage";
        							this.gfn_alert(sCbMsg,[],"savePO_CHECK","callbackFunc_pop","A");
        						}
        					}
        				}else{
        						//	SAP RFC (X), NON-SAP DB ERROR(O)
        						this.gfn_alert("msg.db.error",["(" + sDef_DbMsg+")"],"savePO_ERROR","callbackFunc_pop","A");
        				}

        			break;
         	}
        }

        /*++
        @desc	Popup Callback
        */
        this.callbackFunc_pop = function(strID, variant)
        {
        	var gtrcPos = "POList.xfdl.callbackFunc_pop"
        	this.gtrace("● PO팝업콜백", gtrcPos);

        	//리턴값(공통)
        	var objRtn;
        	var rtnStr;			var rtnNum;			var rtnObj;
        	var sRtnKey;		var sRtnName;
        	var sRtnEtc_00;		var sRtnEtc_10;		var sRtnEtc_20;

        	if(!this.gfn_isNull(variant))
        	{
        												this.gtrace("variant--------------->"	+variant, gtrcPos);
        												this.gtrace("JSON.parse(variant)--->"	+JSON.parse(variant), gtrcPos);
        		objRtn 		= JSON.parse(variant);		this.gtrace("objRtn--->"		+objRtn		, gtrcPos);
        		rtnStr 		= objRtn.rtnStr;			this.gtrace("rtnStr 	--->"	+rtnStr 	, gtrcPos);
        		rtnNum 		= objRtn.rtnNum;			this.gtrace("rtnNum 	--->"	+rtnNum 	, gtrcPos);
        		rtnObj 		= objRtn.rtnObj;			this.gtrace("rtnObj 	--->"	+rtnObj 	, gtrcPos);
        		sRtnKey 	= objRtn.sRtnKey;			this.gtrace("sRtnKey 	--->"	+sRtnKey	, gtrcPos);
        		sRtnName 	= objRtn.sRtnName;			this.gtrace("sRtnName 	--->"	+sRtnName 	, gtrcPos);
        		sRtnEtc_00 	= objRtn.sRtnEtc_00;		this.gtrace("sRtnEtc_00	--->"	+sRtnEtc_00	, gtrcPos);
        		sRtnEtc_10 	= objRtn.sRtnEtc_10;		this.gtrace("sRtnEtc_10	--->"	+sRtnEtc_10	, gtrcPos);
        		sRtnEtc_20 	= objRtn.sRtnEtc_20;		this.gtrace("sRtnEtc_20	--->"	+sRtnEtc_20	, gtrcPos);
        	}

        	//서비스별 팝업콜백 실행
        	switch (strID)
        	{
        		case "savePO_SUCCESS"		:	// 조회실행-Refresh
        						this.tfn_getPoListHistoryLoad();
        					break;
        		case "savePO_CHECK"			:	// 성공한 행은 체크 못하도록 수정, 히스토리만 재조회
        						this.tfn_getPoHistoryOnlyLoad();
        					break;
        		case "POHIST_POP_VendorCode":	// 팝업에서 가져온 VendorCode 세팅
        					var iDatasetRow	= rtnNum;
        					var sVendorCode	= sRtnKey;
        					var sVendorName = sRtnEtc_00;
        					this.ds_POHistory.setColumn(iDatasetRow, "LIFNR", sVendorCode);
        					this.ds_POHistory.setColumn(iDatasetRow, "NAME1", sVendorName);

        					break;
        		default :
        					break;

        	}
        }

        /********************************************************************************************
        @desc	7. Common Function
        ********************************************************************************************/
        /*
         *	조회
         */
        this.cfn_search = function()
        {
          	if(this.gfn_validation(this.ds_in, "A"))	// Validation == true 이면
        	{
        		// 조회실행
        		this.tfn_getPoListHistoryLoad();
        	}
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
        	//	PO생성 / 수정 여부 확인
        	var oTp = this.getTabpageType();
        	var ttpe = oTp.TAB_TYPE;
        	var tds  = oTp.T_DS;

        	//	PO History에서만 실행
        	if(ttpe == "PO_CREATE") return;

        // 	// R : 체크한 행에 대해서만 체크
        // 	if(this.gfn_rowCheckValidation(checkDs, "msg.err.validator.selectrow"))
        // 	{
        // 		// 정합성체크 : 폼별 특수 케이스
        // 		if(this.fn_validationCheck()){
        			this.tfn_deletePO();
        // 		}
        // 	}
        };

        /*
         *	저장
         */
        this.cfn_save = function()
        {
        	var oTpage = this.getTabpageType();
        		var checkDs  = oTpage.T_DS;

        	// R : 체크한 행에 대해서만 체크
        	if(this.gfn_rowCheckValidation(checkDs, "msg.err.validator.selectrow"))
        	{
        		// 정합성체크 : 폼별 특수 케이스
        		if(this.fn_validationCheck("N")){
        			this.tfn_savePO();
        		}
        	}
        };

        /********************************************************************************************/
        /**   8. 사용자 함수                                                                        */
        /********************************************************************************************/
        /*
         *	탭페이지에 따른 기능구분
         */
        this.getTabpageType = function()
        {
        	var resultStr;
        	var resultDs;

        	switch(this.TabMain.tabindex)
        	{
        		case 0 	: resultStr = "PO_CREATE"; 	resultDs = this.ds_POList; break;
        		case 1 	: resultStr = "PO_UPDATE"; 	resultDs = this.ds_POHistory; break;
        		default : resultStr = false;		break;
        	}

        	return {TAB_TYPE : resultStr, T_DS : resultDs};
        }

        /*
         * 계산 : 단가(PRICE) * 수량(REMAIN_MENGE) * PER(PEINH) = 금액(L_NETWR)
         */
         this.fn_TotalAmountCalc = function(iCalcRp){
        	var gtrcPos = "POList.xfdl.fn_TotalAmountCalc";
        		this.gtrace("● PO금액계산", gtrcPos);

        	//	PO생성 / 수정 여부 확인
        	var oTp = this.getTabpageType();
        	var ttpe = oTp.TAB_TYPE;
        	var tds  = oTp.T_DS;
        	var qtyCol = "";
        	var priceCol = "";
        	var perCol = "";
        	var amountCol = "";
        	var roundPos = 0;
        	var currencyCol = "";

        	// 탭별 컬럼구분
        	switch(ttpe)
        	{
        		case "PO_CREATE" :
        				qtyCol 		= "REMAIN_MENGE";
        				priceCol 	= "PRICE";
        				perCol 		= "PEINH";
        				amountCol	= "L_NETWR";
        				currencyCol = "CURRENCY";
        			break;
        		case "PO_UPDATE" :	//	 POHistory 관련컬럼명 재확인 요망
        				qtyCol 		= "REMAIN_MENGE";
        				priceCol 	= "PRICE";
        				perCol 		= "PEINH";
        				amountCol	= "L_NETWR";
        				currencyCol = "WAERS";
        			break;
        	default : break;
        	}

        	// 통화별
        	var currencyVal = tds.getColumn(iCalcRp, currencyCol);
        	switch(currencyVal)
        	{
        		default : 	// 	정수	//	KRW, JPY
        				roundPos = 0;	break;
        		case "USD" :
        		case "EUR" :	// 	소수점 2자리
        				roundPos = 2;	break;
        	}

        	var sREMAIN_MENGE 	= nexacro.toNumber(tds.getColumn(iCalcRp, qtyCol)); 		this.gtrace("sREMAIN_MENGE--->"+sREMAIN_MENGE, gtrcPos);
        	var sPRICE 			= nexacro.toNumber(tds.getColumn(iCalcRp, priceCol));		this.gtrace("sPRICE--->"+sPRICE, gtrcPos);
        	var sPEINH 			= nexacro.toNumber(tds.getColumn(iCalcRp, perCol));			this.gtrace("sPEINH--->"+sPEINH, gtrcPos);

        		this.gtrace("탭구분(ttpe)--->"+ttpe, gtrcPos);
        		this.gtrace("컬럼-수량(qtyCol)--->"+qtyCol, gtrcPos);
        		this.gtrace("컬럼-단가(priceCol)--->"+priceCol, gtrcPos);
        		this.gtrace("컬럼-PER(perCol)--->"+perCol , gtrcPos);
        		this.gtrace("컬럼-금액(amountCol)--->"+amountCol, gtrcPos);
        		this.gtrace("컬럼-통화(currencyCol)--->"+currencyCol, gtrcPos);
        		this.gtrace("수량(sREMAIN_MENGE)--->"+sREMAIN_MENGE, gtrcPos);
        		this.gtrace("단가(sPRICE)--->"+sPRICE, gtrcPos);
        		this.gtrace("PER(sPEINH)--->"+sPEINH, gtrcPos);
        		this.gtrace("통화(currencyVal)--->"+currencyVal, gtrcPos);
        		this.gtrace("소숫점반올림자릿수(roundPos)--->"+roundPos, gtrcPos);

        	//	단가 * 수량 / PER
        	var	nL_NETWR		= Eco.number.divide(Eco.number.multiply(sREMAIN_MENGE, sPRICE), sPEINH);
        		this.gtrace("단가 * 수량 / PER (nL_NETWR)--->"+nL_NETWR, gtrcPos);

        		// 반올림
        		nL_NETWR = nexacro.round(nL_NETWR,roundPos);
        		this.gtrace("nL_NETWR반올림이후--->"+nL_NETWR, gtrcPos);

        		// 0.01보다 작으면 0.01값을 세팅
        		if( nL_NETWR < 0.01 ) nL_NETWR = 0.01;

        	// Ds 적용
        	this.ds_POList.setColumn(iCalcRp, amountCol, nL_NETWR);

        }

        /*
         * 해당 Payment term일 경우 해당 Doc. type 로 설정
         */
        this.fn_PaytermDoctypeMatching = function(eRow, newPterm)
        {
        	//	PO생성 / 수정 여부 확인
        	var oTp = this.getTabpageType();
        	var ttpe = oTp.TAB_TYPE;
        	var tds  = oTp.T_DS;

        	var strDocTypeCol;
        	switch(ttpe) {
        	case "PO_CREATE"	:
        			strDocTypeCol = "DOC_TYPE";	break;
        	case "PO_UPDATE"	:
        			strDocTypeCol = "BSART";	break;
        	}

        	var newDocType;
        	switch(newPterm) {
        	case "SC00"	:	newDocType = "IS";	break;	//	Sight LC 사용자입력 일자 지급			-->	Import Third PO
        	case "EA00"	:	newDocType = "IS";	break;	//	SAP EDI 당월 당일 지급
        	case "EC00"	:	newDocType = "IS";	break;	//	SAP EDI 사용자입력 일자 지급
        	case "LA60"	:	newDocType = "IM";	break;	//	Local LC 전기일기준 60일 수금/지급	-->	Import PO
        	case "FB60"	:	newDocType = "NB";	break;	//	예금 당월말일기준 60일 지급			-->	Standard PO
        	default		:	break;
        	}

        	if(!this.gfn_isNull(newDocType)){
        		tds.set_enableevent(false);
        		tds.setColumn(eRow, strDocTypeCol, newDocType);
        		tds.set_enableevent(true);
        		return true;
        	}else{
        		return false;
        	}
        }

        /*
         * ds Row에 Message 입력
         */
        this.fn_setDsRowMessage = function(oDs, iRow, sMsgId, arrArg)
        {
        	oDs.setColumn(iRow, "Message", this.gfn_getMessage(sMsgId, arrArg));

        	 return false; // 메세지 입력할 일이 있다면 무조건 false로 리턴
        }


        /*
         * Unit
         */
        this.TabMain.TabpagePOList.form.fn_tabGetUnitExpr = function(rp)
        {
         	return this.gfn_getTopLevelForm(this).fn_getUnitExpr(rp, "PO_CREATE");
        }

        this.TabMain.TabpagePOHistory.form.fn_tabGetUnitExpr = function(rp)
        {
         	return this.gfn_getTopLevelForm(this).fn_getUnitExpr(rp, "PO_UPDATE");
        }

        this.fn_getUnitExpr = function(rPos, tType)
        {
        	var oDs;
        	var sCol;

        	switch(tType) {
        	case "PO_CREATE":
        			oDs = this.ds_POList;
        			sCol = "MEINS"
        		break;
        	case "PO_UPDATE":
        			oDs = this.ds_POHistory;
        			sCol = "MEINS"
        		break;
        	default:
        		break;
        	}

        	var rpMeins = oDs.getColumn(rPos, sCol);
        	var rtnExpr;
        	switch(rpMeins){
        		default : 	// 	정수	// 	CT, DZ, EA, GR, GY, SF, ST, G/Y, GRO, GRS, PCS, R/L, ROL, SET
        				rpMeins = "###,###,##0"
        			break;
        		case "YD" :
        		case "KG" :	// 	소수점 3자리
        				rpMeins = "###,###,##0.###"
        			break;
        		case "CN" :
        		case "M" :
        		case "LB" :	// 	소수점 2자리
        				rpMeins = "###,###,##0.##"
        			break;
        	}

        	return rpMeins;
        }

        /*
         * Currency
         */
        this.TabMain.TabpagePOList.form.fn_tabGetCurrencyExpr = function(rp)
        {
         	return this.gfn_getTopLevelForm(this).fn_getCurrencyExpr(rp, "PO_CREATE");
        }

        this.TabMain.TabpagePOHistory.form.fn_tabGetCurrencyExpr = function(rp)
        {
         	return this.gfn_getTopLevelForm(this).fn_getCurrencyExpr(rp, "PO_UPDATE");
        }


        this.fn_getCurrencyExpr = function(rPos, tType)
        {
        	var oDs;
        	var sCol;

        	switch(tType) {
        	case "PO_CREATE":
        			oDs = this.ds_POList;
        			sCol = "CURRENCY"
        		break;
        	case "PO_UPDATE":
        			oDs = this.ds_POHistory;
        			sCol = "WAERS"
        		break;
        	default:
        		break;
        	}

        //	※소수점의 값이 00이 아니면 정수의 값으로 치환할 수 없다.
        	var rpCurrncy = oDs.getColumn(rPos, sCol);
        	var rtnExpr;
        	switch(rpCurrncy){

        		default : 	// 	정수	//	KRW, JPY
        				rpMeins = "###,###,##0"
        			break;

        		case "USD" :
        		case "EUR" :	// 	소수점 2자리
        				rpMeins = "###,###,##0.##"
        			break;
        	}

        	return rpMeins;

        }

        /********************************************************************************************/
        /**   9. 이벤트(Event) 처리                                                                 */
        /********************************************************************************************/
        /*
         *	ds_POList_oncolumnchanged
         */
        this.ds_POList_oncolumnchanged = function(obj,e)
        {
        	if(	e.columnid == "REMAIN_MENGE"
        	||	e.columnid == "PRICE"
        	||	e.columnid == "PEINH"
        	){
        		obj.set_enableevent(false);
        		this.fn_TotalAmountCalc(e.row);
        		obj.set_enableevent(true);
        	}

        	if(e.columnid	== "ZTERM"){
        		//	Payment term --> Doc. type 자동매칭
        		this.fn_PaytermDoctypeMatching(e.row, e.newvalue);
        	}

        	//SAP 성공메세지가 있는 경우는 체크하지 못하도록 설정
        	if(e.columnid == "ROW_CHK"){
        		var sRtn = obj.getColumn(e.row, "RETURN");
        		if(sRtn == "S"){
        			obj.setColumn(e.row, e.columnid, e.oldvalue);
        		}
        	}
        };

        /*
         *	ds_POHistory_oncolumnchanged
         */
        this.ds_POHistory_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid	== "ZTERM"){
        		//	Payment term --> Doc. type 자동매칭
        		this.fn_PaytermDoctypeMatching(e.row, e.newvalue);
        	}
        };


        /*
         *	트레이스 그리드 보이기/숨기기(ButtonTrace_onclick)
         */
        this.ButtonTrace_onclick = function(obj,e)
        {
        	this.GridTrace.set_visible(!this.GridTrace.visible);
        };

        /*
         *	Search Sample 트랜잭션
         */
        this.TabMain_TabpagePOList_ButtonSearchSample_onclick = function(obj,e)
        {
        	this.ds_in.setColumn(0, "p_osno1", "1202195746");		//	//1126195724
        	this.DivCrudButton.form.btn_search.click();
        };

        // Go To Import Request
        this.TabMain_TabpagePOHistory_ButtonGoToImportRequest_onclick = function(obj,e)
        {
        	var sEdtQPO_No;
        	var sProgramId = "lc/LC00010E";
        	var oData = {
        			columns: ["edtQPO_No", "poList"],
        			"edtQPO_No": "4500571397＾4500571724",
        			"poList": "4500571397＾4500571724"
        		};

        	this.gfn_qmeRedirectMenu(sProgramId, oData);
        };

        // Mass Input
        this.TabMain_TabpagePOList_ButtonMassInput_onclick = function(obj,e)
        {
        	this.gfn_openSearchPop("PO_MassInput", {TypeCode:"MassInput", pStr:"PO_CREATE", pNum:null, pObj:null}, "callbackFunc_pop", {title:"popup.massInput"});
        };

        this.TabMain_TabpagePOHistory_ButtonMassInput_onclick = function(obj,e)
        {
        	this.gfn_openSearchPop("POHIST_MassInput", {TypeCode:"MassInput", pStr:"PO_UPDATE", pNum:null, pObj:null}, "callbackFunc_pop", {title:"popup.massInput"});
        };


        // P/O Print(KR)
        this.TabMain_TabpagePOHistory_ButtonPoPrintKr_onclick = function(obj,e)
        {
        	this.tfn_PoPrint("KR");
        };

        // P/O Print(EN)
        this.TabMain_TabpagePOHistory_ButtonPoPrintEn_onclick = function(obj,e)
        {
        	this.tfn_PoPrint("EN");
        };

        // Download P/O Print
        this.TabMain_TabpagePOHistory_ButtonDownloadPoPrint_onclick = function(obj,e)
        {
        	this.tfn_PoPrint("PO_DOWNLOAD");
        };

        // Send Mail(Outlook)
        this.TabMain_TabpagePOHistory_ButtonSendMailOutlook_onclick = function(obj,e)
        {

        };

        // PO히스토리 벤더 셀 클릭
        this.TabMain_TabpagePOHistory_GridPoHistory_oncellclick = function(obj,e)
        {
        	//	클릭한 셀의 바인딩된 컬럼아이디를 가져옴.
        	var bDs = this.gfn_getBindColId(obj, e.col); 	// return : oDs , dsCol

        	//	Vendor에서 클릭한 경우
        	if(bDs.dsCol == "LIFNR"){
        		this.gfn_openSearchPop("POHIST_POP_VendorCode", {TypeCode:"VendorCode", pStr:"", pNum:e.row, pObj:""}, "callbackFunc_pop", {title:"popup.vendor"});
        	}
        };




        /*
         *	스크립트테스트버튼(ButtonScriptTest_onclick)
         */
        this.ButtonScriptTest_onclick = function(obj,e)
        {
        	//trace(this.gfn_getMessage("msg.OStypeIsNotValid"));
        	this.Sketch00.drawStroke( 3, 3, true );
        this.Sketch00.drawStroke( 5, 5, false );
        this.Sketch00.drawStroke( 5, 5 );
        // 	var chkVal = this.ds_POList.setColumn(0, "ROW_CHK");	trace("chkVal--->"+chkVal);
        // 	this.ds_POList.setColumn(0, "ROW_CHK" , (chkVal=="1"?"0":"1"));
        // 	var param = new Object();
        // 	param.polist = "4500571397＾4500571724";
        // 	opener.openProgram(param);

        // 	var objApp = pForm.gfn_getApplication();
        // 	trace("nexacro.System.getCursorY()--->"+nexacro.System.getCursorY());
        // 	trace("nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0))--->"+nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0)));
        // 	trace("getTopLevelFormBox--->"+Eco.XComp.PositionSize.getTopLevelFormBox(obj)); //output: [829,135,63,43]

        // 	var a = 1660,b = -1559.9,c = 0.33;
        // 	var result = Eco.number.multiply(a, b, c);
        // 	//	this.st_3_result01.set_text("(number) " + result);
        // 	trace(result);

        //		system.execBrowser("www.naver.com");

        	//	192.168.11.193:8101/nexos/html/main/main.html?ver=20181022_03#LC00000M
        // 	trace(this.gfn_strToDate("20191227000000000"));
        // 	trace(this.gfn_dateToStr(this.gfn_strToDate("20191227000000000")));
        // 		trace("clientPos-->("+e.clientx+","+e.clienty+")");
        // 		trace("canvasPos-->("+e.canvasx+","+e.canvasy+")");
        	//	trace(this.TabMain.getIndex(this.TabMain.tabindex));
        	//	trace(this.gfn_getDate("time"));
        	//	trace(this.gfn_getCompId(obj));
        	//	this.test_func();
        	//	trace(this.gfn_getApplication());
        	//	trace(this.gfn_getParentForm());
        	//	trace("-------"+this.ds_grdDic.lookup("BindCol","VBELN","ColWidth"));
        	// 	trace("this.gfn_getCompId(obj)---------->"+this.gfn_getCompId(obj));
        	// 	trace("obj._unique_id---------->"+obj._unique_id);
        	// 	trace("this.gfn_getCompId(ButtonPOListHist)---------->"+this.gfn_getCompId(ButtonPOListHist));
        	// 	trace("this.gfn_getCompId(this.ds_POList)---------->"+this.gfn_getCompId(this.ds_POList));
        	//	trace("this.gfn_getRandomId (CID+this.gfn_getDate(date)+_)----"+this.gfn_getRandomId ("CID"+this.gfn_getDate("date")+"_"));
        	//	this.gfn_alert("msg.err.validator", "AAAAAAAAAA");

        	// 	var dsResultMsg = new Dataset;
        	// 		dsResultMsg.copyData(this.ds_in);
        	// 	trace(dsResultMsg.saveXML());
        	//	var objSample = [{ZQME_PO:202001270054287, EBELN:"", LIFNR:0013000789, VBELN:1202195746, RETURN:F, MESSAGE:SAPMessage}];
        	//	var objSame = [{ZQME_PO:202001270054287, EBELN:"", LIFNR:0013000789, VBELN:1202195746, RETURN:F, MESSAGE:SAP Message!}];
        	//	Please enter terms of payment for vendor, USER_ID:160307, P_RFCSEQ:360584, P_ROWSEQ:1, P_REQ_TYPE:E, id:id_0, CRUD:R, ROW_ID:}];
        	//
        	// 	var strT = 	"[{ZQME_PO=202001270054287, EBELN=, LIFNR=0013000789, VBELN=1202195746, RETURN=F, MESSAGE=SAP Message!"
        	// 			+	"\n"
        	// 			+	"Please enter terms of payment for vendor, USER_ID=160307, P_RFCSEQ=360584, P_ROWSEQ=1, P_REQ_TYPE=E, id=id_0, CRUD=R, ROW_ID=}]";
        	// 		//	trace("strT--->"+strT);
        	// 		var objT = eval(strT);
        	// 		trace(objT);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formOnload,this);
            this.TabMain.TabpagePOList.form.ButtonMassInput.addEventHandler("onclick",this.TabMain_TabpagePOList_ButtonMassInput_onclick,this);
            this.TabMain.TabpagePOHistory.form.GridPoHistory.addEventHandler("oncellclick",this.TabMain_TabpagePOHistory_GridPoHistory_oncellclick,this);
            this.TabMain.TabpagePOHistory.form.ButtonSendMailOutlook.addEventHandler("onclick",this.TabMain_TabpagePOHistory_ButtonSendMailOutlook_onclick,this);
            this.TabMain.TabpagePOHistory.form.ButtonDownloadPoPrint.addEventHandler("onclick",this.TabMain_TabpagePOHistory_ButtonDownloadPoPrint_onclick,this);
            this.TabMain.TabpagePOHistory.form.ButtonPoPrintEn.addEventHandler("onclick",this.TabMain_TabpagePOHistory_ButtonPoPrintEn_onclick,this);
            this.TabMain.TabpagePOHistory.form.ButtonPoPrintKr.addEventHandler("onclick",this.TabMain_TabpagePOHistory_ButtonPoPrintKr_onclick,this);
            this.TabMain.TabpagePOHistory.form.ButtonMassInput.addEventHandler("onclick",this.TabMain_TabpagePOHistory_ButtonMassInput_onclick,this);
            this.TabMain.TabpagePOHistory.form.ButtonGoToImportRequest.addEventHandler("onclick",this.TabMain_TabpagePOHistory_ButtonGoToImportRequest_onclick,this);
            this.ButtonScriptTest.addEventHandler("onclick",this.ButtonScriptTest_onclick,this);
            this.ButtonSearchSample.addEventHandler("onclick",this.TabMain_TabpagePOList_ButtonSearchSample_onclick,this);
            this.ButtonTrace.addEventHandler("onclick",this.ButtonTrace_onclick,this);
            this.ds_POList.addEventHandler("oncolumnchanged",this.ds_POList_oncolumnchanged,this);
            this.ds_POHistory.addEventHandler("oncolumnchanged",this.ds_POHistory_oncolumnchanged,this);
        };

        this.loadIncludeScript("POList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
