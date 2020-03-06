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
            obj._setContents("<ColumnInfo><Column id=\"p_mandt\" type=\"STRING\" size=\"256\"/><Column id=\"p_osno1\" type=\"STRING\" size=\"256\"/><Column id=\"p_osno2\" type=\"STRING\" size=\"256\"/><Column id=\"p_osno_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_matnr1\" type=\"STRING\" size=\"256\"/><Column id=\"p_matnr2\" type=\"STRING\" size=\"256\"/><Column id=\"p_matnr_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_mtl_matnr1\" type=\"STRING\" size=\"256\"/><Column id=\"p_mtl_matnr2\" type=\"STRING\" size=\"256\"/><Column id=\"p_mtl_matnr_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_supply1\" type=\"STRING\" size=\"256\"/><Column id=\"p_supply2\" type=\"STRING\" size=\"256\"/><Column id=\"p_supply_list\" type=\"STRING\" size=\"256\"/><Column id=\"p_user_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_POHistory", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"Sel\" type=\"STRING\" size=\"256\"/><Column id=\"Status\" type=\"STRING\" size=\"256\"/><Column id=\"Message\" type=\"STRING\" size=\"256\"/><Column id=\"Sales_Order\" type=\"STRING\" size=\"256\"/><Column id=\"Factory\" type=\"STRING\" size=\"256\"/><Column id=\"Type\" type=\"STRING\" size=\"256\"/><Column id=\"Style\" type=\"STRING\" size=\"256\"/><Column id=\"Payment_Terms\" type=\"STRING\" size=\"256\"/><Column id=\"Document_Type\" type=\"STRING\" size=\"256\"/><Column id=\"Incoterms\" type=\"STRING\" size=\"256\"/><Column id=\"Vendor\" type=\"STRING\" size=\"256\"/><Column id=\"Vendor_Name\" type=\"STRING\" size=\"256\"/><Column id=\"PO_Desc\" type=\"STRING\" size=\"256\"/><Column id=\"Material\" type=\"STRING\" size=\"256\"/><Column id=\"Item\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_Code\" type=\"STRING\" size=\"256\"/><Column id=\"Text\" type=\"STRING\" size=\"256\"/><Column id=\"GMT_Color\" type=\"STRING\" size=\"256\"/><Column id=\"GMT_Color_code\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"BOM_Qty\" type=\"STRING\" size=\"256\"/><Column id=\"Unit\" type=\"STRING\" size=\"256\"/><Column id=\"PO_Qty\" type=\"STRING\" size=\"256\"/><Column id=\"Order_Qty\" type=\"STRING\" size=\"256\"/><Column id=\"Order_Unit\" type=\"STRING\" size=\"256\"/><Column id=\"Price\" type=\"STRING\" size=\"256\"/><Column id=\"Per\" type=\"STRING\" size=\"256\"/><Column id=\"TTL_Amount\" type=\"STRING\" size=\"256\"/><Column id=\"Currency\" type=\"STRING\" size=\"256\"/><Column id=\"Goods_movement_Qty\" type=\"STRING\" size=\"256\"/><Column id=\"PurchGroup\" type=\"STRING\" size=\"256\"/><Column id=\"GR_Based_Inv_Verif\" type=\"STRING\" size=\"256\"/><Column id=\"OS_Price\" type=\"STRING\" size=\"256\"/><Column id=\"OS_Price_Unit\" type=\"STRING\" size=\"256\"/><Column id=\"OS_Currency\" type=\"STRING\" size=\"256\"/><Column id=\"OS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"Delivery_Date\" type=\"STRING\" size=\"256\"/><Column id=\"More\" type=\"STRING\" size=\"256\"/><Column id=\"Less\" type=\"STRING\" size=\"256\"/><Column id=\"Delivery_Location\" type=\"STRING\" size=\"256\"/><Column id=\"Forwarder\" type=\"STRING\" size=\"256\"/><Column id=\"Remark\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PoSave_in", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"P_VBELN\" type=\"STRING\" size=\"256\"/><Column id=\"P_ZTERM\" type=\"STRING\" size=\"256\"/><Column id=\"P_BSART\" type=\"STRING\" size=\"256\"/><Column id=\"P_LIFNR\" type=\"STRING\" size=\"256\"/><Column id=\"P_MATNR\" type=\"STRING\" size=\"256\"/><Column id=\"P_USAGE\" type=\"STRING\" size=\"256\"/><Column id=\"P_BUYER_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_TXZ01\" type=\"STRING\" size=\"256\"/><Column id=\"P_J_3ASIZE\" type=\"STRING\" size=\"256\"/><Column id=\"P_MENGE\" type=\"STRING\" size=\"256\"/><Column id=\"P_NETPR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PEINH\" type=\"STRING\" size=\"256\"/><Column id=\"P_NETWR\" type=\"STRING\" size=\"256\"/><Column id=\"P_WAERS\" type=\"STRING\" size=\"256\"/><Column id=\"P_EKGRP\" type=\"STRING\" size=\"256\"/><Column id=\"P_WEBRE\" type=\"STRING\" size=\"256\"/><Column id=\"P_UEBTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_UNTTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_INCO1\" type=\"STRING\" size=\"256\"/><Column id=\"P_BUKRS\" type=\"STRING\" size=\"256\"/><Column id=\"P_MTL_SIZE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"P_MTL_COLOR_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"P_MTL_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_VBELP\" type=\"STRING\" size=\"256\"/><Column id=\"P_WERKS\" type=\"STRING\" size=\"256\"/><Column id=\"P_EKORG\" type=\"STRING\" size=\"256\"/><Column id=\"P_CRUD\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOEKZ\" type=\"STRING\" size=\"256\"/><Column id=\"P_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbPaymentTerms", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbDocumentType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbIncoterms", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbCurrency", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result_savePO", this);
            obj._setContents("<ColumnInfo><Column id=\"O_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"O_LIFNR\" type=\"STRING\" size=\"256\"/><Column id=\"O_VBELN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdDic", this);
            obj._setContents("<ColumnInfo><Column id=\"GridId\" type=\"STRING\" size=\"256\"/><Column id=\"BindCol\" type=\"STRING\" size=\"256\"/><Column id=\"HeaderText\" type=\"STRING\" size=\"256\"/><Column id=\"ColWidth\" type=\"INT\" size=\"256\"/><Column id=\"bDisplaytype\" type=\"STRING\" size=\"256\"/><Column id=\"bEdittype\" type=\"STRING\" size=\"256\"/><Column id=\"bTextAlign\" type=\"STRING\" size=\"256\"/><Column id=\"bSuppress\" type=\"STRING\" size=\"256\"/><Column id=\"bPadding\" type=\"STRING\" size=\"256\"/><Column id=\"bCombodataset\" type=\"STRING\" size=\"256\"/><Column id=\"bCombocodecol\" type=\"STRING\" size=\"256\"/><Column id=\"bCombodatacol\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskedittype\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskeditlimitbymask\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskeditformat\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BindCol\">Status</Col><Col id=\"HeaderText\">Status</Col></Row><Row><Col id=\"BindCol\">Message</Col><Col id=\"HeaderText\">Message</Col></Row><Row><Col id=\"BindCol\">VBELN</Col><Col id=\"HeaderText\">Sales Order</Col><Col id=\"ColWidth\">90</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">CENTER_NM</Col><Col id=\"HeaderText\">Factory</Col><Col id=\"ColWidth\">50</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">TYPE</Col><Col id=\"HeaderText\">Type</Col><Col id=\"ColWidth\">50</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">GMT_ITEM</Col><Col id=\"HeaderText\">Style#</Col><Col id=\"ColWidth\">100</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">ZTERM</Col><Col id=\"HeaderText\">Payment Terms</Col><Col id=\"ColWidth\">250</Col><Col id=\"bDisplaytype\">combocontrol</Col><Col id=\"bEdittype\">combo</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bCombodataset\">ds_cmbPaymentTerms</Col><Col id=\"bCombocodecol\">CODE_CD</Col><Col id=\"bCombodatacol\">CODE_NM</Col></Row><Row><Col id=\"BindCol\">DOC_TYPE</Col><Col id=\"HeaderText\">Document Type</Col><Col id=\"ColWidth\">150</Col><Col id=\"bDisplaytype\">combocontrol</Col><Col id=\"bEdittype\">combo</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bCombodataset\">ds_cmbDocumentType</Col><Col id=\"bCombocodecol\">CODE_CD</Col><Col id=\"bCombodatacol\">CODE_NM</Col></Row><Row><Col id=\"BindCol\">SUPPLIER_CODE1</Col><Col id=\"HeaderText\">Vendor</Col><Col id=\"ColWidth\">90</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">SUPPLIER_NAME</Col><Col id=\"HeaderText\">Vendor Name</Col><Col id=\"ColWidth\">150</Col><Col id=\"bTextAlign\">left</Col><Col id=\"bPadding\">0px 0px 0px 5px</Col></Row><Row><Col id=\"BindCol\">PO_DESC</Col><Col id=\"HeaderText\">PO Desc</Col><Col id=\"ColWidth\">60</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">MATNR</Col><Col id=\"HeaderText\">Material</Col><Col id=\"ColWidth\">90</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">USAGE</Col><Col id=\"HeaderText\">Item</Col><Col id=\"ColWidth\">100</Col><Col id=\"bTextAlign\">left</Col><Col id=\"bPadding\">0px 0px 0px 5px</Col></Row><Row><Col id=\"BindCol\">BUYER_ITEM_CD</Col><Col id=\"HeaderText\">MTL Code</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">MTL_ITEM</Col><Col id=\"HeaderText\">Text</Col><Col id=\"ColWidth\">140</Col><Col id=\"bTextAlign\">left</Col><Col id=\"bPadding\">0px 0px 0px 5px</Col></Row><Row><Col id=\"BindCol\">GMT_COL</Col><Col id=\"HeaderText\">GMT Color</Col><Col id=\"ColWidth\">70</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">GMTColorcode</Col><Col id=\"HeaderText\">GMT Color code</Col><Col id=\"ColWidth\">110</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">COLOR</Col><Col id=\"HeaderText\">COLOR</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">SIZE</Col><Col id=\"HeaderText\">SIZE</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">OS_MENGE</Col><Col id=\"HeaderText\">BOM Q'ty(rounding up)</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">UNIT</Col><Col id=\"HeaderText\">Unit</Col><Col id=\"ColWidth\">40</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">PO_MENGE</Col><Col id=\"HeaderText\">PO Q'ty</Col><Col id=\"ColWidth\">60</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">REMAIN_MENGE</Col><Col id=\"HeaderText\">Order Q'ty</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bEdittype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">MEINS</Col><Col id=\"HeaderText\">Order Unit</Col><Col id=\"ColWidth\">40</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">PRICE</Col><Col id=\"HeaderText\">Price</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bEdittype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">PEINH</Col><Col id=\"HeaderText\">Per</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bEdittype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">L_NETWR</Col><Col id=\"HeaderText\">TTL Amount</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">CURRENCY</Col><Col id=\"HeaderText\">Currency</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">combotext</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bCombodataset\">ds_cmbCurrency</Col><Col id=\"bCombocodecol\">CODE_CD</Col><Col id=\"bCombodatacol\">CODE_NM</Col></Row><Row><Col id=\"BindCol\">PR_MENGE</Col><Col id=\"HeaderText\">Goods movement Q'ty</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">PURCGRP</Col><Col id=\"HeaderText\">Purch.Group</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">WEBRE</Col><Col id=\"HeaderText\">GR Based Inv. Verif</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">OS_PRICE</Col><Col id=\"HeaderText\">OS Price</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">OS_PEINH</Col><Col id=\"HeaderText\">OS Price Unit</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col></Row><Row><Col id=\"BindCol\">L_WAERK</Col><Col id=\"HeaderText\">OS Currency</Col><Col id=\"ColWidth\">60</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">OS_AMOUNT</Col><Col id=\"HeaderText\">OS AMOUNT</Col><Col id=\"ColWidth\">80</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,###</Col></Row><Row><Col id=\"BindCol\">DELIVERY_DATE</Col><Col id=\"HeaderText\">Delivery Date</Col><Col id=\"ColWidth\">90</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">UEBTO</Col><Col id=\"HeaderText\">More</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,##0</Col></Row><Row><Col id=\"BindCol\">UNTTO</Col><Col id=\"HeaderText\">Less</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">right</Col><Col id=\"bDisplaytype\">mask</Col><Col id=\"bPadding\">0px 5px 0px 0px</Col><Col id=\"bMaskedittype\">number</Col><Col id=\"bMaskeditlimitbymask\">integer</Col><Col id=\"bMaskeditformat\">###,###,##0</Col></Row><Row><Col id=\"BindCol\">DeliveryLocation</Col><Col id=\"HeaderText\">Delivery Location</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">Forwarder</Col><Col id=\"HeaderText\">Forwarder</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">BuyerCode</Col><Col id=\"HeaderText\">Buyer Code</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">INCO1</Col><Col id=\"HeaderText\">Incoterms</Col><Col id=\"ColWidth\">150</Col><Col id=\"bDisplaytype\">combocontrol</Col><Col id=\"bEdittype\">combo</Col><Col id=\"bTextAlign\">center</Col><Col id=\"bCombodataset\">ds_cmbIncoterms</Col><Col id=\"bCombocodecol\">CODE_CD</Col><Col id=\"bCombodatacol\">CODE_NM</Col></Row><Row><Col id=\"BindCol\">Remark</Col><Col id=\"HeaderText\">Remark</Col><Col id=\"ColWidth\">80</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">CENTER_CD</Col><Col id=\"ColWidth\">50</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">SORT_NUM</Col><Col id=\"ColWidth\">40</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">CRT</Col><Col id=\"ColWidth\">40</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">MSGBN</Col><Col id=\"ColWidth\">40</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">MTL_SIZE_KEY</Col><Col id=\"ColWidth\">120</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">MTL_COLOR_KEY</Col><Col id=\"ColWidth\">120</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">GOODS_MOV</Col><Col id=\"ColWidth\">90</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">MTL_ITEM_CD</Col><Col id=\"ColWidth\">120</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">ITEM_CD</Col><Col id=\"ColWidth\">120</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">OSSTS</Col><Col id=\"ColWidth\">50</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">GMTMATNR</Col><Col id=\"ColWidth\">90</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">POSNR</Col><Col id=\"ColWidth\">60</Col><Col id=\"bTextAlign\">center</Col></Row><Row><Col id=\"BindCol\">LOT_NO</Col><Col id=\"ColWidth\">120</Col><Col id=\"bTextAlign\">center</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramMap", this);
            obj._setContents("<ColumnInfo><Column id=\"LoadCol\" type=\"STRING\" size=\"256\"/><Column id=\"SaveCol\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LoadCol\">Status</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">Message</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">VBELN</Col><Col id=\"SaveCol\">P_VBELN</Col></Row><Row><Col id=\"LoadCol\">CENTER_NM</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">TYPE</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">GMT_ITEM</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">ZTERM</Col><Col id=\"SaveCol\">P_ZTERM</Col></Row><Row><Col id=\"LoadCol\">DOC_TYPE</Col><Col id=\"SaveCol\">P_BSART</Col></Row><Row><Col id=\"LoadCol\">SUPPLIER_CODE1</Col><Col id=\"SaveCol\">P_LIFNR</Col></Row><Row><Col id=\"LoadCol\">SUPPLIER_NAME</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">PO_DESC</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">MATNR</Col><Col id=\"SaveCol\">P_MATNR</Col></Row><Row><Col id=\"LoadCol\">USAGE</Col><Col id=\"SaveCol\">P_USAGE</Col></Row><Row><Col id=\"LoadCol\">BUYER_ITEM_CD</Col><Col id=\"SaveCol\">P_BUYER_ITEM_CD</Col></Row><Row><Col id=\"LoadCol\">MTL_ITEM</Col><Col id=\"SaveCol\">P_TXZ01</Col></Row><Row><Col id=\"LoadCol\">GMT_COL</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">GMTColorcode</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">COLOR</Col><Col id=\"SaveCol\">P_J_3ASIZE</Col></Row><Row><Col id=\"LoadCol\">SIZE</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">OS_MENGE</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">UNIT</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">PO_MENGE</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">REMAIN_MENGE</Col><Col id=\"SaveCol\">P_MENGE</Col></Row><Row><Col id=\"LoadCol\">MEINS</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">PRICE</Col><Col id=\"SaveCol\">P_NETPR</Col></Row><Row><Col id=\"LoadCol\">PEINH</Col><Col id=\"SaveCol\">P_PEINH</Col></Row><Row><Col id=\"LoadCol\">L_NETWR</Col><Col id=\"SaveCol\">P_NETWR</Col></Row><Row><Col id=\"LoadCol\">CURRENCY</Col><Col id=\"SaveCol\">P_WAERS</Col></Row><Row><Col id=\"SaveCol\"/><Col id=\"LoadCol\">PR_MENGE</Col></Row><Row><Col id=\"LoadCol\">PURCGRP</Col><Col id=\"SaveCol\">P_EKGRP</Col></Row><Row><Col id=\"LoadCol\">WEBRE</Col><Col id=\"SaveCol\">P_WEBRE</Col></Row><Row><Col id=\"LoadCol\">OS_PRICE</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">OS_PEINH</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">L_WAERK</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">OS_AMOUNT</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">DELIVERY_DATE</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">UEBTO</Col><Col id=\"SaveCol\">P_UEBTO</Col></Row><Row><Col id=\"LoadCol\">UNTTO</Col><Col id=\"SaveCol\">P_UNTTO</Col></Row><Row><Col id=\"LoadCol\">DeliveryLocation</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">Forwarder</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">BuyerCode</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">INCO1</Col><Col id=\"SaveCol\">P_INCO1</Col></Row><Row><Col id=\"LoadCol\">Remark</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">CENTER_CD</Col><Col id=\"SaveCol\">P_BUKRS</Col></Row><Row><Col id=\"LoadCol\">SORT_NUM</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">CRT</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">MSGBN</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">MTL_SIZE_KEY</Col><Col id=\"SaveCol\">P_MTL_SIZE_KEY</Col></Row><Row><Col id=\"LoadCol\">MTL_COLOR_KEY</Col><Col id=\"SaveCol\">P_MTL_COLOR_KEY</Col></Row><Row><Col id=\"LoadCol\">GOODS_MOV</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">MTL_ITEM_CD</Col><Col id=\"SaveCol\">P_MTL_ITEM_CD</Col></Row><Row><Col id=\"LoadCol\">ITEM_CD</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">OSSTS</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">GMTMATNR</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"LoadCol\">POSNR</Col><Col id=\"SaveCol\">P_VBELP</Col></Row><Row><Col id=\"LoadCol\">LOT_NO</Col><Col id=\"SaveCol\"/></Row><Row><Col id=\"SaveCol\">P_WERKS</Col></Row><Row><Col id=\"SaveCol\">P_EKORG</Col></Row><Row><Col id=\"SaveCol\">P_CRUD</Col></Row><Row><Col id=\"SaveCol\">P_LOEKZ</Col></Row><Row><Col id=\"SaveCol\">USER_ID</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_POList", this);
            obj._setContents("<ColumnInfo><Column id=\"Status\" type=\"STRING\" size=\"256\"/><Column id=\"Message\" type=\"STRING\" size=\"256\"/><Column id=\"VBELN\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GMT_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"ZTERM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SUPPLIER_CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"SUPPLIER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PO_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MATNR\" type=\"STRING\" size=\"256\"/><Column id=\"USAGE\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"GMT_COL\" type=\"STRING\" size=\"256\"/><Column id=\"GMTColorcode\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"OS_MENGE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PO_MENGE\" type=\"STRING\" size=\"256\"/><Column id=\"REMAIN_MENGE\" type=\"STRING\" size=\"256\"/><Column id=\"MEINS\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"PEINH\" type=\"STRING\" size=\"256\"/><Column id=\"L_NETWR\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MENGE\" type=\"STRING\" size=\"256\"/><Column id=\"PURCGRP\" type=\"STRING\" size=\"256\"/><Column id=\"WEBRE\" type=\"STRING\" size=\"256\"/><Column id=\"OS_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"OS_PEINH\" type=\"STRING\" size=\"256\"/><Column id=\"L_WAERK\" type=\"STRING\" size=\"256\"/><Column id=\"OS_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UEBTO\" type=\"STRING\" size=\"256\"/><Column id=\"UNTTO\" type=\"STRING\" size=\"256\"/><Column id=\"DeliveryLocation\" type=\"STRING\" size=\"256\"/><Column id=\"Forwarder\" type=\"STRING\" size=\"256\"/><Column id=\"BuyerCode\" type=\"STRING\" size=\"256\"/><Column id=\"INCO1\" type=\"STRING\" size=\"256\"/><Column id=\"Remark\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CRT\" type=\"STRING\" size=\"256\"/><Column id=\"MSGBN\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_SIZE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_COLOR_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"GOODS_MOV\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OSSTS\" type=\"STRING\" size=\"256\"/><Column id=\"GMTMATNR\" type=\"STRING\" size=\"256\"/><Column id=\"POSNR\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"Column63\" type=\"STRING\" size=\"256\"/><Column id=\"Column64\" type=\"STRING\" size=\"256\"/><Column id=\"Column65\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("TabMain","8","146",null,null,"8","107",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_border("1px solid gray,1px solid gray,1px solid gray,1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabpagePOList",this.TabMain);
            obj.set_text("POList");
            obj.set_formscrolltype("none");
            this.TabMain.addChild(obj.name, obj);

            obj = new Grid("GridPoList","10","42",null,null,"10","7",null,null,null,null,this.TabMain.TabpagePOList.form);
            obj.set_summarytype("top");
            obj.set_showselection("true");
            obj.getSetter("griduserproperty").set("!sort,status,checkbox,!no,export,colfix,rowfix,filter,initial,!cellcopypase,!cellcopy,!colhide,!personal,!subsum,!seltype");
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_POList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Status\"/><Cell col=\"1\" text=\"Message\"/><Cell col=\"2\" text=\"VBELN\"/><Cell col=\"3\" text=\"CENTER_NM\"/><Cell col=\"4\" text=\"TYPE\"/><Cell col=\"5\" text=\"GMT_ITEM\"/><Cell col=\"6\" text=\"ZTERM\"/><Cell col=\"7\" text=\"DOC_TYPE\"/><Cell col=\"8\" text=\"SUPPLIER_CODE1\"/><Cell col=\"9\" text=\"SUPPLIER_NAME\"/><Cell col=\"10\" text=\"PO_DESC\"/><Cell col=\"11\" text=\"MATNR\"/><Cell col=\"12\" text=\"USAGE\"/><Cell col=\"13\" text=\"BUYER_ITEM_CD\"/><Cell col=\"14\" text=\"MTL_ITEM\"/><Cell col=\"15\" text=\"GMT_COL\"/><Cell col=\"16\" text=\"GMTColorcode\"/><Cell col=\"17\" text=\"COLOR\"/><Cell col=\"18\" text=\"SIZE\"/><Cell col=\"19\" text=\"OS_MENGE\"/><Cell col=\"20\" text=\"UNIT\"/><Cell col=\"21\" text=\"PO_MENGE\"/><Cell col=\"22\" text=\"REMAIN_MENGE\"/><Cell col=\"23\" text=\"MEINS\"/><Cell col=\"24\" text=\"PRICE\"/><Cell col=\"25\" text=\"PEINH\"/><Cell col=\"26\" text=\"L_NETWR\"/><Cell col=\"27\" text=\"CURRENCY\"/><Cell col=\"28\" text=\"PR_MENGE\"/><Cell col=\"29\" text=\"PURCGRP\"/><Cell col=\"30\" text=\"WEBRE\"/><Cell col=\"31\" text=\"OS_PRICE\"/><Cell col=\"32\" text=\"OS_PEINH\"/><Cell col=\"33\" text=\"L_WAERK\"/><Cell col=\"34\" text=\"OS_AMOUNT\"/><Cell col=\"35\" text=\"DELIVERY_DATE\"/><Cell col=\"36\" text=\"UEBTO\"/><Cell col=\"37\" text=\"UNTTO\"/><Cell col=\"38\" text=\"DeliveryLocation\"/><Cell col=\"39\" text=\"Forwarder\"/><Cell col=\"40\" text=\"BuyerCode\"/><Cell col=\"41\" text=\"INCO1\"/><Cell col=\"42\" text=\"Remark\"/><Cell col=\"43\" text=\"CENTER_CD\"/><Cell col=\"44\" text=\"SORT_NUM\"/><Cell col=\"45\" text=\"CRT\"/><Cell col=\"46\" text=\"MSGBN\"/><Cell col=\"47\" text=\"MTL_SIZE_KEY\"/><Cell col=\"48\" text=\"MTL_COLOR_KEY\"/><Cell col=\"49\" text=\"GOODS_MOV\"/><Cell col=\"50\" text=\"MTL_ITEM_CD\"/><Cell col=\"51\" text=\"ITEM_CD\"/><Cell col=\"52\" text=\"OSSTS\"/><Cell col=\"53\" text=\"GMTMATNR\"/><Cell col=\"54\" text=\"POSNR\"/><Cell col=\"55\" text=\"LOT_NO\"/><Cell col=\"56\" text=\"Column63\"/><Cell col=\"57\" text=\"Column64\"/><Cell col=\"58\" text=\"Column65\"/></Band><Band id=\"body\"><Cell text=\"bind:Status\"/><Cell col=\"1\" text=\"bind:Message\"/><Cell col=\"2\" text=\"bind:VBELN\"/><Cell col=\"3\" text=\"bind:CENTER_NM\"/><Cell col=\"4\" text=\"bind:TYPE\"/><Cell col=\"5\" text=\"bind:GMT_ITEM\"/><Cell col=\"6\" text=\"bind:ZTERM\"/><Cell col=\"7\" text=\"bind:DOC_TYPE\"/><Cell col=\"8\" text=\"bind:SUPPLIER_CODE1\"/><Cell col=\"9\" text=\"bind:SUPPLIER_NAME\"/><Cell col=\"10\" text=\"bind:PO_DESC\"/><Cell col=\"11\" text=\"bind:MATNR\"/><Cell col=\"12\" text=\"bind:USAGE\"/><Cell col=\"13\" text=\"bind:BUYER_ITEM_CD\"/><Cell col=\"14\" text=\"bind:MTL_ITEM\"/><Cell col=\"15\" text=\"bind:GMT_COL\"/><Cell col=\"16\" text=\"bind:GMTColorcode\"/><Cell col=\"17\" text=\"bind:COLOR\"/><Cell col=\"18\" text=\"bind:SIZE\"/><Cell col=\"19\" text=\"bind:OS_MENGE\"/><Cell col=\"20\" text=\"bind:UNIT\"/><Cell col=\"21\" text=\"bind:PO_MENGE\"/><Cell col=\"22\" text=\"bind:REMAIN_MENGE\"/><Cell col=\"23\" text=\"bind:MEINS\"/><Cell col=\"24\" text=\"bind:PRICE\"/><Cell col=\"25\" text=\"bind:PEINH\"/><Cell col=\"26\" text=\"bind:L_NETWR\"/><Cell col=\"27\" text=\"bind:CURRENCY\"/><Cell col=\"28\" text=\"bind:PR_MENGE\"/><Cell col=\"29\" text=\"bind:PURCGRP\"/><Cell col=\"30\" text=\"bind:WEBRE\"/><Cell col=\"31\" text=\"bind:OS_PRICE\"/><Cell col=\"32\" text=\"bind:OS_PEINH\"/><Cell col=\"33\" text=\"bind:L_WAERK\"/><Cell col=\"34\" text=\"bind:OS_AMOUNT\"/><Cell col=\"35\" text=\"bind:DELIVERY_DATE\"/><Cell col=\"36\" text=\"bind:UEBTO\"/><Cell col=\"37\" text=\"bind:UNTTO\"/><Cell col=\"38\" text=\"bind:DeliveryLocation\"/><Cell col=\"39\" text=\"bind:Forwarder\"/><Cell col=\"40\" text=\"bind:BuyerCode\"/><Cell col=\"41\" text=\"bind:INCO1\"/><Cell col=\"42\" text=\"bind:Remark\"/><Cell col=\"43\" text=\"bind:CENTER_CD\"/><Cell col=\"44\" text=\"bind:SORT_NUM\"/><Cell col=\"45\" text=\"bind:CRT\"/><Cell col=\"46\" text=\"bind:MSGBN\"/><Cell col=\"47\" text=\"bind:MTL_SIZE_KEY\"/><Cell col=\"48\" text=\"bind:MTL_COLOR_KEY\"/><Cell col=\"49\" text=\"bind:GOODS_MOV\"/><Cell col=\"50\" text=\"bind:MTL_ITEM_CD\"/><Cell col=\"51\" text=\"bind:ITEM_CD\"/><Cell col=\"52\" text=\"bind:OSSTS\"/><Cell col=\"53\" text=\"bind:GMTMATNR\"/><Cell col=\"54\" text=\"bind:POSNR\"/><Cell col=\"55\" text=\"bind:LOT_NO\"/><Cell col=\"56\" text=\"bind:Column63\"/><Cell col=\"57\" text=\"bind:Column64\"/><Cell col=\"58\" text=\"bind:Column65\"/></Band></Format></Formats>");
            this.TabMain.TabpagePOList.addChild(obj.name, obj);

            obj = new Div("DivBtnAddDel_GridPoList00","10","6","218","35",null,null,null,null,null,null,this.TabMain.TabpagePOList.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("Comm::cmmGridAddDelButton.xfdl");
            obj.getSetter("targetGrid").set("TabMain.TabpagePOList.form.GridPoList");
            obj.set_visible("true");
            obj.getSetter("InitCompVisEna").set("0:0:0,1:1:1");
            this.TabMain.TabpagePOList.addChild(obj.name, obj);

            obj = new Div("DivBtnFormat",null,"6","40","35","8",null,null,null,null,null,this.TabMain.TabpagePOList.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("Comm::cmmFormatMenuButton.xfdl");
            obj.getSetter("targetGrid").set("TabMain.TabpagePOList.form.GridPoList");
            obj.set_visible("true");
            this.TabMain.TabpagePOList.addChild(obj.name, obj);

            obj = new Div("DivBtnGfilter",null,"6","40","35","58",null,null,null,null,null,this.TabMain.TabpagePOList.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_url("Comm::cmmGridFilterButton.xfdl");
            obj.getSetter("targetGrid").set("TabMain.TabpagePOList.form.GridPoList");
            obj.set_visible("true");
            this.TabMain.TabpagePOList.addChild(obj.name, obj);

            obj = new Button("Button00","111","167","240","36",null,null,null,null,null,null,this.TabMain.TabpagePOList.form);
            obj.set_taborder("4");
            obj.set_text("Button00");
            obj.set_visible("true");
            this.TabMain.TabpagePOList.addChild(obj.name, obj);

            obj = new Tabpage("TabpageExample",this.TabMain);
            obj.set_text("2.Example");
            this.TabMain.addChild(obj.name, obj);

            obj = new Button("Button_tp2_SortComma","10",null,"120","28",null,"42",null,null,null,null,this.TabMain.TabpageExample.form);
            obj.set_taborder("0");
            obj.set_text("S:Team,Name");
            this.TabMain.TabpageExample.addChild(obj.name, obj);

            obj = new Button("Button_tp2_GroupComma","349",null,"120","28",null,"42",null,null,null,null,this.TabMain.TabpageExample.form);
            obj.set_taborder("1");
            obj.set_text("G:Team,Name");
            this.TabMain.TabpageExample.addChild(obj.name, obj);

            obj = new Button("Button_tp2_InitSortGroup","477",null,"120","28",null,"42",null,null,null,null,this.TabMain.TabpageExample.form);
            obj.set_taborder("2");
            obj.set_text("INIT_SortGroup");
            this.TabMain.TabpageExample.addChild(obj.name, obj);

            obj = new Button("Button_tp2_GroupPlus","350",null,"120","28",null,"7",null,null,null,null,this.TabMain.TabpageExample.form);
            obj.set_taborder("3");
            obj.set_text("G:Team+Name");
            this.TabMain.TabpageExample.addChild(obj.name, obj);

            obj = new Button("Button_tp2_SortPlus","10",null,"120","28",null,"7",null,null,null,null,this.TabMain.TabpageExample.form);
            obj.set_taborder("4");
            obj.set_text("S:Team+Name");
            this.TabMain.TabpageExample.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","13",null,null,"12","82",null,null,null,null,this.TabMain.TabpageExample.form);
            obj.set_summarytype("top");
            obj.set_showselection("true");
            obj.getSetter("griduserproperty").set("!no,export,colfix,rowfix,sort,filter,initial,cellcopypaste,colhide,personal,subsum");
            obj.set_taborder("5");
            obj.set_binddataset("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"A\"/><Cell col=\"2\" text=\"B\"/><Cell col=\"3\" colspan=\"2\" text=\"C\"/><Cell col=\"5\" text=\"D\"/><Cell col=\"6\" text=\"E\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" text=\"H\"/><Cell row=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"1\" col=\"1\" text=\"팀\"/><Cell row=\"1\" col=\"2\" text=\"이름\"/><Cell row=\"1\" col=\"3\" text=\"Group\"/><Cell row=\"1\" col=\"4\" text=\"제품\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\" text=\"일자\"/><Cell row=\"1\" col=\"7\" text=\"수량\"/><Cell row=\"1\" col=\"8\" text=\"금액\"/><Cell row=\"1\" col=\"9\" text=\"ABC\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:ROW_CHK\"/><Cell col=\"1\" text=\"bind:Team\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:Name\" suppress=\"2\" expandsize=\"22\"/><Cell col=\"3\" text=\"bind:ProductGroup\" suppress=\"3\"/><Cell col=\"4\" text=\"bind:Product\" expandshow=\"show\" expandsize=\"24\" suppress=\"4\"/><Cell col=\"5\" imagestretch=\"fixaspectratio\" displaytype=\"imagecontrol\" edittype=\"normal\" background=\"#ffffff\" text=\"bind:ImageUrl\"/><Cell col=\"6\" text=\"bind:Date\"/><Cell col=\"7\" text=\"bind:Qty\"/><Cell col=\"8\" text=\"bind:Price\"/><Cell col=\"9\" text=\"bind:ABC\"/></Band></Format></Formats>");
            this.TabMain.TabpageExample.addChild(obj.name, obj);

            obj = new Button("Button_tp2_G_Team_S_Name","477",null,"120","28",null,"7",null,null,null,null,this.TabMain.TabpageExample.form);
            obj.set_taborder("6");
            obj.set_text("G:Team,S:Name ");
            this.TabMain.TabpageExample.addChild(obj.name, obj);

            obj = new Button("Button_tp2_G_M_Team_S_P_Name","607",null,"120","28",null,"7",null,null,null,null,this.TabMain.TabpageExample.form);
            obj.set_taborder("7");
            obj.set_text("G:-Team,S:+Name ");
            this.TabMain.TabpageExample.addChild(obj.name, obj);

            obj = new Button("Button_tp2_TeamSortNameGroup","136",null,"120","28",null,"42",null,null,null,null,this.TabMain.TabpageExample.form);
            obj.set_taborder("8");
            obj.set_text("S:Team,G:Name");
            this.TabMain.TabpageExample.addChild(obj.name, obj);

            obj = new Static("Static00","Button_tp2_TeamSortNameGroup:-122","Button_tp2_SortPlus:-28","206","28",null,null,null,null,null,null,this.TabMain.TabpageExample.form);
            obj.set_taborder("9");
            obj.set_text("단순 Sorting 기능만, 부분합X");
            this.TabMain.TabpageExample.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.TabMain);
            obj.set_text("PoHistory");
            this.TabMain.addChild(obj.name, obj);

            obj = new Grid("GridPoList00","9","10",null,null,"8","8",null,null,null,null,this.TabMain.Tabpage3.form);
            obj.set_summarytype("top");
            obj.set_showselection("true");
            obj.getSetter("griduserproperty").set("no,export,colfix,rowfix,sort,filter,initial,cellcopypaste,colhide,personal");
            obj.set_binddataset("ds_POHistory");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Sel\"/><Cell col=\"1\" text=\"Status\"/><Cell col=\"2\" text=\"Message\"/><Cell col=\"3\" text=\"Sales_Order\"/><Cell col=\"4\" text=\"Factory\"/><Cell col=\"5\" text=\"Type\"/><Cell col=\"6\" text=\"Style\"/><Cell col=\"7\" text=\"Payment_Terms\"/><Cell col=\"8\" text=\"Document_Type\"/><Cell col=\"9\" text=\"Incoterms\"/><Cell col=\"10\" text=\"Vendor\"/><Cell col=\"11\" text=\"Vendor_Name\"/><Cell col=\"12\" text=\"PO_Desc\"/><Cell col=\"13\" text=\"Material\"/><Cell col=\"14\" text=\"Item\"/><Cell col=\"15\" text=\"MTL_Code\"/><Cell col=\"16\" text=\"Text\"/><Cell col=\"17\" text=\"GMT_Color\"/><Cell col=\"18\" text=\"GMT_Color_code\"/><Cell col=\"19\" text=\"COLOR\"/><Cell col=\"20\" text=\"SIZE\"/><Cell col=\"21\" text=\"BOM_Qty\"/><Cell col=\"22\" text=\"Unit\"/><Cell col=\"23\" text=\"PO_Qty\"/><Cell col=\"24\" text=\"Order_Qty\"/><Cell col=\"25\" text=\"Order_Unit\"/><Cell col=\"26\" text=\"Price\"/><Cell col=\"27\" text=\"Per\"/><Cell col=\"28\" text=\"TTL_Amount\"/><Cell col=\"29\" text=\"Currency\"/><Cell col=\"30\" text=\"Goods_movement_Qty\"/><Cell col=\"31\" text=\"PurchGroup\"/><Cell col=\"32\" text=\"GR_Based_Inv_Verif\"/><Cell col=\"33\" text=\"OS_Price\"/><Cell col=\"34\" text=\"OS_Price_Unit\"/><Cell col=\"35\" text=\"OS_Currency\"/><Cell col=\"36\" text=\"OS_AMOUNT\"/><Cell col=\"37\" text=\"Delivery_Date\"/><Cell col=\"38\" text=\"More\"/><Cell col=\"39\" text=\"Less\"/><Cell col=\"40\" text=\"Delivery_Location\"/><Cell col=\"41\" text=\"Forwarder\"/><Cell col=\"42\" text=\"Remark\"/></Band><Band id=\"body\"><Cell text=\"bind:Sel\"/><Cell col=\"1\" text=\"bind:Status\"/><Cell col=\"2\" text=\"bind:Message\"/><Cell col=\"3\" text=\"bind:Sales_Order\"/><Cell col=\"4\" text=\"bind:Factory\"/><Cell col=\"5\" text=\"bind:Type\"/><Cell col=\"6\" text=\"bind:Style\"/><Cell col=\"7\" text=\"bind:Payment_Terms\"/><Cell col=\"8\" text=\"bind:Document_Type\"/><Cell col=\"9\" text=\"bind:Incoterms\"/><Cell col=\"10\" text=\"bind:Vendor\"/><Cell col=\"11\" text=\"bind:Vendor_Name\"/><Cell col=\"12\" text=\"bind:PO_Desc\"/><Cell col=\"13\" text=\"bind:Material\"/><Cell col=\"14\" text=\"bind:Item\"/><Cell col=\"15\" text=\"bind:MTL_Code\"/><Cell col=\"16\" text=\"bind:Text\"/><Cell col=\"17\" text=\"bind:GMT_Color\"/><Cell col=\"18\" text=\"bind:GMT_Color_code\"/><Cell col=\"19\" text=\"bind:COLOR\"/><Cell col=\"20\" text=\"bind:SIZE\"/><Cell col=\"21\" text=\"bind:BOM_Qty\"/><Cell col=\"22\" text=\"bind:Unit\"/><Cell col=\"23\" text=\"bind:PO_Qty\"/><Cell col=\"24\" text=\"bind:Order_Qty\"/><Cell col=\"25\" text=\"bind:Order_Unit\"/><Cell col=\"26\" text=\"bind:Price\"/><Cell col=\"27\" text=\"bind:Per\"/><Cell col=\"28\" text=\"bind:TTL_Amount\"/><Cell col=\"29\" text=\"bind:Currency\"/><Cell col=\"30\" text=\"bind:Goods_movement_Qty\"/><Cell col=\"31\" text=\"bind:PurchGroup\"/><Cell col=\"32\" text=\"bind:GR_Based_Inv_Verif\"/><Cell col=\"33\" text=\"bind:OS_Price\"/><Cell col=\"34\" text=\"bind:OS_Price_Unit\"/><Cell col=\"35\" text=\"bind:OS_Currency\"/><Cell col=\"36\" text=\"bind:OS_AMOUNT\"/><Cell col=\"37\" text=\"bind:Delivery_Date\"/><Cell col=\"38\" text=\"bind:More\"/><Cell col=\"39\" text=\"bind:Less\"/><Cell col=\"40\" text=\"bind:Delivery_Location\"/><Cell col=\"41\" text=\"bind:Forwarder\"/><Cell col=\"42\" text=\"bind:Remark\"/></Band></Format></Formats>");
            this.TabMain.Tabpage3.addChild(obj.name, obj);

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
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("DivCrudButton","8","8",null,"32","8",null,null,null,null,null,this);
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_search");
            obj.set_url("Comm::Comm_CrudButton.xfdl");
            obj.getSetter("InitCompVisEna").set("1:1:1:1,1:0:1:1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","806","121","254","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("트랜잭션");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01",null,"360","690",null,"19","63",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("gds_TrcInfo");
            obj.getSetter("griduserproperty").set("checkbox,sort");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"158\"/><Column size=\"363\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TrcSeq\"/><Cell col=\"1\" text=\"TrcName\"/><Cell col=\"2\" text=\"TrcId\"/></Band><Band id=\"body\"><Cell text=\"bind:TrcSeq\"/><Cell col=\"1\" text=\"bind:TrcName\"/><Cell col=\"2\" text=\"bind:TrcId\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","0",null,null,"100","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_PoSave_in");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"P_VBELN\"/><Cell col=\"1\" text=\"P_ZTERM\"/><Cell col=\"2\" text=\"P_BSART\"/><Cell col=\"3\" text=\"P_LIFNR\"/><Cell col=\"4\" text=\"P_MATNR\"/><Cell col=\"5\" text=\"P_USAGE\"/><Cell col=\"6\" text=\"P_BUYER_ITEM_CD\"/><Cell col=\"7\" text=\"P_TXZ01\"/><Cell col=\"8\" text=\"P_J_3ASIZE\"/><Cell col=\"9\" text=\"P_MENGE\"/><Cell col=\"10\" text=\"P_NETPR\"/><Cell col=\"11\" text=\"P_PEINH\"/><Cell col=\"12\" text=\"P_NETWR\"/><Cell col=\"13\" text=\"P_WAERS\"/><Cell col=\"14\" text=\"P_EKGRP\"/><Cell col=\"15\" text=\"P_WEBRE\"/><Cell col=\"16\" text=\"P_UEBTO\"/><Cell col=\"17\" text=\"P_UNTTO\"/><Cell col=\"18\" text=\"P_INCO1\"/><Cell col=\"19\" text=\"P_BUKRS\"/><Cell col=\"20\" text=\"P_MTL_SIZE_KEY\"/><Cell col=\"21\" text=\"P_MTL_COLOR_KEY\"/><Cell col=\"22\" text=\"P_MTL_ITEM_CD\"/><Cell col=\"23\" text=\"P_VBELP\"/><Cell col=\"24\" text=\"P_WERKS\"/><Cell col=\"25\" text=\"P_EKORG\"/><Cell col=\"26\" text=\"P_CRUD\"/><Cell col=\"27\" text=\"P_LOEKZ\"/><Cell col=\"28\" text=\"P_USER_ID\"/></Band><Band id=\"body\"><Cell text=\"bind:P_VBELN\"/><Cell col=\"1\" text=\"bind:P_ZTERM\"/><Cell col=\"2\" text=\"bind:P_BSART\"/><Cell col=\"3\" text=\"bind:P_LIFNR\"/><Cell col=\"4\" text=\"bind:P_MATNR\"/><Cell col=\"5\" text=\"bind:P_USAGE\"/><Cell col=\"6\" text=\"bind:P_BUYER_ITEM_CD\"/><Cell col=\"7\" text=\"bind:P_TXZ01\"/><Cell col=\"8\" text=\"bind:P_J_3ASIZE\"/><Cell col=\"9\" text=\"bind:P_MENGE\"/><Cell col=\"10\" text=\"bind:P_NETPR\"/><Cell col=\"11\" text=\"bind:P_PEINH\"/><Cell col=\"12\" text=\"bind:P_NETWR\"/><Cell col=\"13\" text=\"bind:P_WAERS\"/><Cell col=\"14\" text=\"bind:P_EKGRP\"/><Cell col=\"15\" text=\"bind:P_WEBRE\"/><Cell col=\"16\" text=\"bind:P_UEBTO\"/><Cell col=\"17\" text=\"bind:P_UNTTO\"/><Cell col=\"18\" text=\"bind:P_INCO1\"/><Cell col=\"19\" text=\"bind:P_BUKRS\"/><Cell col=\"20\" text=\"bind:P_MTL_SIZE_KEY\"/><Cell col=\"21\" text=\"bind:P_MTL_COLOR_KEY\"/><Cell col=\"22\" text=\"bind:P_MTL_ITEM_CD\"/><Cell col=\"23\" text=\"bind:P_VBELP\"/><Cell col=\"24\" text=\"bind:P_WERKS\"/><Cell col=\"25\" text=\"bind:P_EKORG\"/><Cell col=\"26\" text=\"bind:P_CRUD\"/><Cell col=\"27\" text=\"bind:P_LOEKZ\"/><Cell col=\"28\" text=\"bind:P_USER_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","35","430","490","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button01");
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
        this.addIncludeScript("POList_copy.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("POList_copy.xfdl", function() {
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

        var GridPoList = this.TabMain.TabpagePOList.form.GridPoList;
        /********************************************************************************************
        @desc	3. OnLoad
        ********************************************************************************************/
        /*
         *	초기화 함수
         */
        this.fn_reset = function()
        {
        														var gtrcPos	=	"POList.xfdl.fn_reset";
        														//	this.gtrace("nexacro.getApplication().gds_User.saveXML()->"+nexacro.getApplication().gds_User.saveXML(), gtrcPos);
        	// 기본 데이터 가져오기 + 콤보세팅 + word
        	{
        		this.gfn_getAllInitData();
        	}

        	// 데이터셋 초기화 ( clear+addrow )
        	{
        		//조건
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
        this.tfn_getPoListHistoryLoad = function(){

        	this.ds_POList.clearData();
        	this.ds_POHistory.clearData();
        	//	this.ds_in.setColumn(0, "p_osno1", "1126195724");
        	this.ds_in.setColumn(0, "p_user_id", this.gfn_getApplication().gds_User.getColumn(0, "USER_ID"));

        	//	http://nyc.panpacific.co.kr/QMENexacroSvr/common/commonAction.ppc
        	//	http://203.229.231.124/QMENexacroSvr/common/commonAction.ppc
        	//	AppSvr	JSP	-- http://nyc.panpacific.co.kr/QMENexacroSvr/
        	var sSvcID 			= "getPoListHistoryLoad";
        	var sURL 			= "AppSvr::common/commonAction.ppc";
        	var sInDatasets 	= "ds_in0=ds_in ds_in1=ds_in";
        	var sOutDatasets 	= "ds_POList=ds_out0 ds_POHistory=ds_out1";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("POMapper.getPOList POMapper.getPOHisList");

        	//공통 트랜잭션 사용
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }

        /*++
        @desc	POList , POHistory Load
        */
        this.tfn_savePO = function(){

        	var gtrcPos = "POList.xfdl.tfn_savePO";		this.gtrace("● PO저장트랜잭션", gtrcPos);

        	//	this.ds_POList.set_enableevent(false);
        	if(this.ds_POList.findRow("ROW_CHK","1") < 0 ){
        		this.gfn_alert("no checked data");
        		return;
        	}

        	{	//	beforeTrans
        		this.ds_POList.filter("ROW_CHK=='1'");
        		this.ds_PoSave_in.clearData();
        																		var sGtLdCol = "VBELN";	// Ouput 보고싶은 로드컬럼
         		for(var i=0; i < this.ds_POList.rowcount ;i++){
         			var iAdRp = this.ds_PoSave_in.addRow();
        								 											//	this.gtrace("내부param(i)--->"+i, gtrcPos);
        			for(var j=0; j < this.ds_paramMap.rowcount; j++){

        				var sLdCol = this.ds_paramMap.getColumn(j, "LoadCol");		//	if(i==0)	this.gtrace("내부param(sLdCol)--->"+sLdCol, gtrcPos);
        				var sSvCol = this.ds_paramMap.getColumn(j, "SaveCol");		//	if(i==0)	this.gtrace("내부param(sSvCol)--->"+sSvCol, gtrcPos);

        				if(this.gfn_nvl(sLdCol,"")!="" && this.gfn_nvl(sSvCol,"")!=""){
        																				if(sGtLdCol==sLdCol)	this.gtrace("변수맵핑(조회->저장)(ds_paramMap기준)--->"+sLdCol+"-->"+sSvCol, gtrcPos);
        					this.ds_PoSave_in.copyRow(iAdRp, this.ds_POList, i, sSvCol+"="+sLdCol)	//	"ToColumnID=FromColumnID"
        				}

        				{
        					//	P_BUKRS 값을 동일하게 세팅 ( 비맵핑컬럼 )
        					var sBukrs = this.ds_PoSave_in.getColumn(iAdRp, "P_BUKRS") ;
        							this.ds_PoSave_in.setColumn(iAdRp, "P_EKORG", sBukrs) ;
        							this.ds_PoSave_in.setColumn(iAdRp, "P_WERKS", sBukrs) ;

        					//	PO생성 구분자 "C" 입력
        					this.ds_PoSave_in.setColumn(iAdRp, "P_CRUD", "C") ;

        					this.gfn_setUser(this.ds_PoSave_in, "P_USER_ID");
        				}
        			}
         		}

        		this.ds_POList.filter("");
        	}

        	this.gtrace("트랜잭션데이터셋(ds_PoSave_in.saveXML)--->"+this.ds_PoSave_in.saveXML(), gtrcPos);
        	trace("트랜잭션데이터셋(ds_PoSave_in.saveXML)--->"+this.ds_PoSave_in.saveXML(), gtrcPos);

        	var sSvcID 			= "savePO";
        	var sURL 			= "AppSvr::po/savePO.ppc";
        	var sInDatasets 	= "ds_in0=ds_PoSave_in";
        	var sOutDatasets 	= "ds_result_savePO=ds_out0";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("");

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

        			case "getPoListHistoryLoad"	:
        				//	this.ds_POList.addColumn("gridcmmcheck", "STRING", 1);
        													//	this.gtrace(this.ds_POList.saveXML(), gtrcPos);


        				break;
        			case "savePO":
        					//	trace(this.ds_result_savePO.saveXML());
        					var sMSG		=	this.ds_result_savePO.getColumn(0, "O_MSG");	//	trace("sMSG--->"+sMSG);
        					var sLIFNR		=	this.ds_result_savePO.getColumn(0, "O_LIFNR");	//	trace("sLIFNR--->"+sLIFNR);
        					var sVBELN		=	this.ds_result_savePO.getColumn(0, "O_VBELN");	//	trace("sVBELN--->"+sVBELN);

        					//	this.gfn_alert("msg.err.validator", [msg], null, "gfn_validationCallback", "A");

        					var sCbMsg = "O_MSG:"+sMSG		+"\n"
        								+"O_LIFNR:"+sLIFNR	+"\n"
        								+"O_VBELN:"+sVBELN;

        					//	this.gfn_alert(sCbMsg, null, null, null, "A");
        					alert(sCbMsg);
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
        	{	//Validation 세팅 : Sample_Validation.xfdl 참조
        		this.gfn_clearValidation(this.ds_in);
        		//this.gfn_setValidation(this.ds_in, "p_osno1", "오더번호", "required,length:10");

        		if(this.gfn_isNull(this.ds_in.getColumn(0, "p_osno_list"))){
        			this.gfn_setValidation(this.ds_in, "p_osno1", "Sales Order", "required");
        		}

        // 		if(this.gfn_isNull(this.ds_in.getColumn(0, "p_matnr1_list"))){
        // 			this.gfn_setValidation(this.ds_in, "p_matnr1", "Style#", "required");
        // 		}
        	}

        	// trace("this.gfn_validation(this.ds_in, 'A')--->"+this.gfn_validation(this.ds_in, "A"));

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

        };

        /*
         *	저장
         */
        this.cfn_save = function()
        {
        	this.tfn_savePO();
        };

        /********************************************************************************************/
        /**   8. 사용자 함수                                                                        */
        /********************************************************************************************/


        /********************************************************************************************/
        /**   9. 이벤트(Event) 처리                                                                 */
        /********************************************************************************************/
        /*
         *	온로드
         */
        this.formOnload = function(obj,e)
        {
        	this.fn_reset();
        };

        this.POList_onclick = function(obj,e)
        {
        	trace("clientPos-->("+e.clientx+","+e.clienty+")");
        	trace("canvasPos-->("+e.canvasx+","+e.canvasy+")");
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.ds_in.setColumn(0, "p_osno1", 1126195724);
        	this.DivCrudButton.form.btn_search.click();
        };

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
        };

        this.fn_TotalAmountCalc = function(iCalcRp){
        	var sREMAIN_MENGE 	= nexacro.toNumber(this.ds_POList.getColumn(iCalcRp, "REMAIN_MENGE"));
        	var sPRICE 			= nexacro.toNumber(this.ds_POList.getColumn(iCalcRp, "PRICE"));
        	var sPEINH 			= nexacro.toNumber(this.ds_POList.getColumn(iCalcRp, "PEINH"));
        	var	nL_NETWR		= Eco.number.multiply(sREMAIN_MENGE, sPRICE, sPEINH);

        	this.ds_POList.setColumn(iCalcRp, "L_NETWR", nL_NETWR);
        	//	trace("곱하기--->"+Eco.number.multiply(sREMAIN_MENGE, sPRICE, sPEINH));
        }

        this.TabMain_TabpagePOList_Button00_onclick = function(obj,e)
        {
        	//	trace("gfn_decode---->"+this.gfn_decode());
        // 	trace("Eco.number._getMaxPrecision---->"+Eco.number._getMaxPrecision(1660));	//	1
        // 	trace("Eco.number._getMaxPrecision---->"+Eco.number._getMaxPrecision(-1559.9));		//	1.0000000000005
        // 	trace("Eco.number._getMaxPrecision---->"+Eco.number._getMaxPrecision(0.33));		//	1.000000000005
        // 	trace("곱하기--->"+Eco.number.multiply(1, 4, 2));
        // 	trace("곱하기--->"+Eco.number.multiply("1", "4", "2"));

        	//	trace("Eco-getTopLevelFormBox---->"+Eco.XComp.PositionSize.getTopLevelFormBox(GridPoList));
        	this.ds_POList.filter("");
        	this.ds_POList.filter("USAGE=='easlabel'");
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.ds_POList.filter("(USAGE=='')");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formOnload,this);
            this.addEventHandler("onclick",this.POList_onclick,this);
            this.TabMain.TabpagePOList.form.Button00.addEventHandler("onclick",this.TabMain_TabpagePOList_Button00_onclick,this);
            this.TabMain.TabpageExample.form.Button_tp2_SortComma.addEventHandler("onclick",this.Button_SortGroup_onclick,this);
            this.TabMain.TabpageExample.form.Button_tp2_GroupComma.addEventHandler("onclick",this.Button_SortGroup_onclick,this);
            this.TabMain.TabpageExample.form.Button_tp2_InitSortGroup.addEventHandler("onclick",this.Button_SortGroup_onclick,this);
            this.TabMain.TabpageExample.form.Button_tp2_GroupPlus.addEventHandler("onclick",this.Button_SortGroup_onclick,this);
            this.TabMain.TabpageExample.form.Button_tp2_SortPlus.addEventHandler("onclick",this.Button_SortGroup_onclick,this);
            this.TabMain.TabpageExample.form.Button_tp2_G_Team_S_Name.addEventHandler("onclick",this.Button_SortGroup_onclick,this);
            this.TabMain.TabpageExample.form.Button_tp2_G_M_Team_S_P_Name.addEventHandler("onclick",this.Button_SortGroup_onclick,this);
            this.TabMain.TabpageExample.form.Button_tp2_TeamSortNameGroup.addEventHandler("onclick",this.Button_SortGroup_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("POList_copy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
