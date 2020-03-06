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
            obj._setContents("<ColumnInfo><Column id=\"GridId\" type=\"STRING\" size=\"256\"/><Column id=\"BindCol\" type=\"STRING\" size=\"256\"/><Column id=\"HeaderText\" type=\"STRING\" size=\"256\"/><Column id=\"ColWidth\" type=\"INT\" size=\"256\"/><Column id=\"bDisplaytype\" type=\"STRING\" size=\"256\"/><Column id=\"bEdittype\" type=\"STRING\" size=\"256\"/><Column id=\"bTextAlign\" type=\"STRING\" size=\"256\"/><Column id=\"bSuppress\" type=\"STRING\" size=\"256\"/><Column id=\"bPadding\" type=\"STRING\" size=\"256\"/><Column id=\"bCombodataset\" type=\"STRING\" size=\"256\"/><Column id=\"bCombocodecol\" type=\"STRING\" size=\"256\"/><Column id=\"bCombodatacol\" type=\"STRING\" size=\"256\"/><Column id=\"bCombotype\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskedittype\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskeditlimitbymask\" type=\"STRING\" size=\"256\"/><Column id=\"bMaskeditformat\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A01</Col><Col id=\"HeaderText\">아이디</Col><Col id=\"bEdittype\">normal</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A02</Col><Col id=\"HeaderText\">명칭</Col><Col id=\"bEdittype\">normal</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A03</Col><Col id=\"HeaderText\">담당</Col><Col id=\"bEdittype\">normal</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A04</Col><Col id=\"HeaderText\">요청부서</Col><Col id=\"bEdittype\">normal</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A05</Col><Col id=\"HeaderText\">요청자</Col><Col id=\"bEdittype\">normal</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A06</Col><Col id=\"HeaderText\">계획일</Col><Col id=\"bEdittype\">normal</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A07</Col><Col id=\"HeaderText\">실행일</Col><Col id=\"bEdittype\">normal</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A08</Col><Col id=\"HeaderText\">담당자</Col><Col id=\"bEdittype\">normal</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A09</Col><Col id=\"HeaderText\">작업내역</Col><Col id=\"bEdittype\">normal</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A10</Col><Col id=\"HeaderText\">작업일</Col><Col id=\"bEdittype\">normal</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A11</Col><Col id=\"HeaderText\">투입기간</Col><Col id=\"bEdittype\">normal</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A12</Col><Col id=\"HeaderText\">시스템</Col><Col id=\"bEdittype\">normal</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A13</Col><Col id=\"HeaderText\">상태</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A14</Col><Col id=\"HeaderText\">등록일</Col></Row><Row><Col id=\"GridId\"/><Col id=\"BindCol\">A15</Col><Col id=\"HeaderText\">등록자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramMap", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DsName\" type=\"STRING\" size=\"256\"/><Column id=\"LoadCol\" type=\"STRING\" size=\"256\"/><Column id=\"SaveCol\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LoadCol\">Status</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">Message</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">VBELN</Col><Col id=\"SaveCol\">P_VBELN</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">CENTER_NM</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">TYPE</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">GMT_ITEM</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">ZTERM</Col><Col id=\"SaveCol\">P_ZTERM</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">DOC_TYPE</Col><Col id=\"SaveCol\">P_BSART</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">SUPPLIER_CODE1</Col><Col id=\"SaveCol\">P_LIFNR</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">SUPPLIER_NAME</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">PO_DESC</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">MATNR</Col><Col id=\"SaveCol\">P_MATNR</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">USAGE</Col><Col id=\"SaveCol\">P_USAGE</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">BUYER_ITEM_CD</Col><Col id=\"SaveCol\">P_BUYER_ITEM_CD</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">MTL_ITEM</Col><Col id=\"SaveCol\">P_TXZ01</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">GMT_COL</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">GMTColorcode</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">COLOR</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">SIZE</Col><Col id=\"SaveCol\">P_J_3ASIZE</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">OS_MENGE</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">UNIT</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">PO_MENGE</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">REMAIN_MENGE</Col><Col id=\"SaveCol\">P_MENGE</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">MEINS</Col><Col id=\"SaveCol\">P_MEINS</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">PRICE</Col><Col id=\"SaveCol\">P_NETPR</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">PEINH</Col><Col id=\"SaveCol\">P_PEINH</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">L_NETWR</Col><Col id=\"SaveCol\">P_NETWR</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">CURRENCY</Col><Col id=\"SaveCol\">P_WAERS</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"SaveCol\"/><Col id=\"LoadCol\">PR_MENGE</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">PURCGRP</Col><Col id=\"SaveCol\">P_EKGRP</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">WEBRE</Col><Col id=\"SaveCol\">P_WEBRE</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">OS_PRICE</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">OS_PEINH</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">L_WAERK</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">OS_AMOUNT</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">DELIVERY_DATE</Col><Col id=\"SaveCol\">P_EINDT</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">UEBTO</Col><Col id=\"SaveCol\">P_UEBTO</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">UNTTO</Col><Col id=\"SaveCol\">P_UNTTO</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">DeliveryLocation</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">Forwarder</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">BuyerCode</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">INCO1</Col><Col id=\"SaveCol\">P_INCO1</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">Remark</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">CENTER_CD</Col><Col id=\"SaveCol\">P_BUKRS</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">SORT_NUM</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">CRT</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">MSGBN</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">MTL_SIZE_KEY</Col><Col id=\"SaveCol\">P_MTL_SIZE_KEY</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">MTL_COLOR_KEY</Col><Col id=\"SaveCol\">P_MTL_COLOR_KEY</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">GOODS_MOV</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">MTL_ITEM_CD</Col><Col id=\"SaveCol\">P_MTL_ITEM_CD</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">ITEM_CD</Col><Col id=\"SaveCol\">P_ITEM_CD</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">OSSTS</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">GMTMATNR</Col><Col id=\"SaveCol\"/><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">POSNR</Col><Col id=\"SaveCol\">P_VBELP</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"LoadCol\">LOT_NO</Col><Col id=\"SaveCol\">P_LOT_NO</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"SaveCol\">P_WERKS</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"SaveCol\">P_EKORG</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"SaveCol\">P_CRUD</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"SaveCol\">P_LOEKZ</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"SaveCol\">USER_ID</Col><Col id=\"DsName\">ds_workList</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">Status</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">Message</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">VBELN</Col><Col id=\"SaveCol\">P_VBELN</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">CENTER_NM</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">TYPE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">GMT_ITEM</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">ZTERM</Col><Col id=\"SaveCol\">P_ZTERM</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">BSART_F</Col><Col id=\"SaveCol\">P_BSART</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">LIFNR</Col><Col id=\"SaveCol\">P_LIFNR</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">SUPPLIER_NAME</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">PO_DESC</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MATNR</Col><Col id=\"SaveCol\">P_MATNR</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">USAGE</Col><Col id=\"SaveCol\">P_USAGE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">BUYER_ITEM_CD</Col><Col id=\"SaveCol\">P_BUYER_ITEM_CD</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">TXZ01</Col><Col id=\"SaveCol\">P_TXZ01</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">GMT_COL</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">GMTColorcode</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MTL_COLOR</Col><Col id=\"SaveCol\">P_J_3ASIZE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">SIZE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">OS_MENGE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">UNIT</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">PO_MENGE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MENGE</Col><Col id=\"SaveCol\">P_MENGE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MEINS</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">NETPR</Col><Col id=\"SaveCol\">P_NETPR</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">PEINH</Col><Col id=\"SaveCol\">P_PEINH</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">NETWR</Col><Col id=\"SaveCol\">P_NETWR</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">WAERS</Col><Col id=\"SaveCol\">P_WAERS</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">PR_MENGE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">EKGRP</Col><Col id=\"SaveCol\">P_EKGRP</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">GR_BSD</Col><Col id=\"SaveCol\">P_WEBRE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">OS_PRICE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">OS_PEINH</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">L_WAERK</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">OS_AMOUNT</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">DELIVERY_DATE</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">UEBTO</Col><Col id=\"SaveCol\">P_UEBTO</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">UNTTO</Col><Col id=\"SaveCol\">P_UNTTO</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">DeliveryLocation</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">Forwarder</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">BuyerCode</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">INCO1</Col><Col id=\"SaveCol\">P_INCO1</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">Remark</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">CENTER_CD</Col><Col id=\"SaveCol\">P_BUKRS</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">SORT_NUM</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">CRT</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MSGBN</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MTL_SIZE_KEY</Col><Col id=\"SaveCol\">P_MTL_SIZE_KEY</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MTL_COLOR_KEY</Col><Col id=\"SaveCol\">P_MTL_COLOR_KEY</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">GOODS_MOV</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MTL_ITEM_CD</Col><Col id=\"SaveCol\">P_MTL_ITEM_CD</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">ITEM_CD</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">OSSTS</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">GMTMATNR</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">VBELP</Col><Col id=\"SaveCol\">P_VBELP</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">LOT_NO</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"SaveCol\">P_WERKS</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"SaveCol\">P_EKORG</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"SaveCol\">P_CRUD</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"SaveCol\">P_LOEKZ</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"SaveCol\">USER_ID</Col></Row><Row><Col id=\"SaveCol\">P_ZQME_PO</Col><Col id=\"LoadCol\">ZQME_PO</Col><Col id=\"DsName\">ds_POHistory</Col></Row><Row><Col id=\"LoadCol\">J_3AEBSP</Col><Col id=\"SaveCol\">P_J_3AEBSP</Col><Col id=\"DsName\">ds_POHistory</Col></Row><Row><Col id=\"DsName\">ds_POHistory</Col><Col id=\"LoadCol\">MENGE</Col><Col id=\"SaveCol\">P_MENGE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_workList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"A01\" type=\"STRING\" size=\"256\"/><Column id=\"A02\" type=\"STRING\" size=\"256\"/><Column id=\"A03\" type=\"STRING\" size=\"256\"/><Column id=\"A04\" type=\"STRING\" size=\"256\"/><Column id=\"A05\" type=\"STRING\" size=\"256\"/><Column id=\"A06\" type=\"STRING\" size=\"256\"/><Column id=\"A07\" type=\"STRING\" size=\"256\"/><Column id=\"A08\" type=\"STRING\" size=\"256\"/><Column id=\"A09\" type=\"STRING\" size=\"256\"/><Column id=\"A10\" type=\"STRING\" size=\"256\"/><Column id=\"A11\" type=\"STRING\" size=\"256\"/><Column id=\"A12\" type=\"STRING\" size=\"256\"/><Column id=\"A13\" type=\"STRING\" size=\"256\"/><Column id=\"A14\" type=\"STRING\" size=\"256\"/><Column id=\"A15\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_result_workList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("TabMain","8","146",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_border("1px solid gray,1px solid gray,1px solid gray,1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabpageDevWork",this.TabMain);
            obj.set_text("DevWork");
            obj.set_formscrolltype("none");
            obj.getSetter("griduserproperty").set("");
            this.TabMain.addChild(obj.name, obj);

            obj = new Div("DivBtnAddDel_GridPoList00","10","6","218","35",null,null,null,null,null,null,this.TabMain.TabpageDevWork.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("Comm::cmmGridAddDelButton.xfdl");
            obj.getSetter("targetGrid").set("GridPoList");
            obj.set_visible("true");
            obj.getSetter("InitCompVisEna").set("1:1:1,1:1:1");
            this.TabMain.TabpageDevWork.addChild(obj.name, obj);

            obj = new Div("DivBtnFormat",null,"8","40","28","8",null,null,null,null,null,this.TabMain.TabpageDevWork.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("Comm::cmmFormatMenuButton.xfdl");
            obj.getSetter("targetGrid").set("GridPoList");
            obj.set_visible("true");
            this.TabMain.TabpageDevWork.addChild(obj.name, obj);

            obj = new Div("DivBtnGfilter",null,"8","40","28","58",null,null,null,null,null,this.TabMain.TabpageDevWork.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("Comm::cmmGridFilterButton.xfdl");
            obj.getSetter("targetGrid").set("GridPoList");
            obj.set_visible("true");
            this.TabMain.TabpageDevWork.addChild(obj.name, obj);

            obj = new Grid("GridPoList","8","44",null,null,"8","8",null,null,null,null,this.TabMain.TabpageDevWork.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_workList");
            obj.getSetter("griduserproperty").set("subsum,no,status,checkbox,export,colfix,rowfix,sort,filter,initial,cellcopypaste,colhide,personal,seltype");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"A01\"/><Cell col=\"1\" text=\"A02\"/><Cell col=\"2\" text=\"A03\"/><Cell col=\"3\" text=\"A04\"/><Cell col=\"4\" text=\"A05\"/><Cell col=\"5\" text=\"A06\"/><Cell col=\"6\" text=\"A07\"/><Cell col=\"7\" text=\"A08\"/><Cell col=\"8\" text=\"A09\"/><Cell col=\"9\" text=\"A10\"/><Cell col=\"10\" text=\"A11\"/><Cell col=\"11\" text=\"A12\"/><Cell col=\"12\" text=\"A13\"/><Cell col=\"13\" text=\"A14\"/><Cell col=\"14\" text=\"A15\"/></Band><Band id=\"body\"><Cell text=\"bind:A01\"/><Cell col=\"1\" text=\"bind:A02\"/><Cell col=\"2\" text=\"bind:A03\"/><Cell col=\"3\" text=\"bind:A04\"/><Cell col=\"4\" text=\"bind:A05\"/><Cell col=\"5\" text=\"bind:A06\"/><Cell col=\"6\" text=\"bind:A07\"/><Cell col=\"7\" text=\"bind:A08\"/><Cell col=\"8\" text=\"bind:A09\"/><Cell col=\"9\" text=\"bind:A10\"/><Cell col=\"10\" text=\"bind:A11\"/><Cell col=\"11\" text=\"bind:A12\"/><Cell col=\"12\" text=\"bind:A13\"/><Cell col=\"13\" text=\"bind:A14\"/><Cell col=\"14\" text=\"bind:A15\"/></Band></Format></Formats>");
            this.TabMain.TabpageDevWork.addChild(obj.name, obj);

            obj = new Button("ButtonMassInput",null,"8","133","28","116",null,null,null,null,null,this.TabMain.TabpageDevWork.form);
            obj.set_taborder("4");
            obj.set_text("Mass Input");
            this.TabMain.TabpageDevWork.addChild(obj.name, obj);

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
            obj.set_text("Developer");
            obj.set_cssclass("sta_WF_searchLabel");
            this.DivCondition.addChild(obj.name, obj);

            obj = new Div("div_SalesOrderFromTo","118","8","431","21",null,null,null,null,null,null,this.DivCondition.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_SearchConditionFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            obj.set_formscrolltype("none");
            obj.getSetter("SearchConditionType").set("SalesOrderNo,ds_in,p_osno1,p_osno2,p_osno_list");
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
        this.addIncludeScript("DevDailyWork.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("DevDailyWork.xfdl", function() {
        /********************************************************************************************
        @desc	1. Include
        ********************************************************************************************/
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        /********************************************************************************************
        @desc	2. Form 변수 선언
        ********************************************************************************************/
        //공통코드 세팅
        this.COMBO_SET_STR = "ds_cmbPaymentTerms"	+"#"+"ZTERM"		+" "
        // 					+"ds_cmbDocumentType"	+"#"+"ERP_DOC"      +" "
        // 					+"ds_cmbIncoterms"		+"#"+"INCO1"        +" "
        // 					+"ds_cmbCurrency"		+"#"+"CURRENCY"     +" "
        					;

        //콤포넌트
        var GridPoList 					= this.TabMain.TabpageDevWork.form.GridPoList;
        var ButtonPOListHist 			= this.TabMain.TabpageDevWork.form.ButtonPOListHist;
        var DivCrudButtonDsPoListHist 	= this.TabMain.TabpageDevWork.form.DivCrudButtonDsPoListHist;
        var GridPOListHistory 			= this.TabMain.TabpageDevWork.form.GridPOListHistory;
        var GridPOListHistoryName 		= this.TabMain.TabpageDevWork.form.GridPOListHistoryName;
        var EditCidName					= this.TabMain.TabpageDevWork.form.EditCidName;
        var ButtonColChangeExec			= this.TabMain.TabpageDevWork.form.ButtonColChangeExec;

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
        // 		//Validation 세팅 : Sample_Validation.xfdl 참조
        // 		this.gfn_clearValidation(this.ds_in);
        //
        // 		//SalesOrder
        // 		this.gfn_setValidation(this.ds_in, "p_osno1||p_osno_list||p_matnr1||p_matnr_list", "Sales Order", "required");
        //
        //  		//STYLE
        // 		//	this.gfn_setValidation(this.ds_in, "p_matnr1||p_osno_list", "Style#", "required");
        	}
        }

        this.fn_setSaveValidation = function()
        {
        // 	this.gfn_clearValidation(this.ds_workList);
        //
        // 	var strVldtn_01	=	"CURRENCY"		;
        // 	var strVldtn_02	=	"REMAIN_MENGE"	;
        // 	var strVldtn_03	=	"L_NETWR"		;
        // 	var strVldtn_04	=	"SUPPLIER_CODE1";
        // 	var strVldtn_05	=	"CURRENCY"		;
        // 	var strVldtn_06	=	"PEINH"			;
        // 	var strVldtn_07	=	"SUPPLIER_CODE1";
        // 	var strVldtn_08	=	"DELIVERY_DATE"	;
        // 	var strVldtn_09	=	"DOC_TYPE"		;
        // 	var strVldtn_10	=	"ZTERM"			;
        //
        // 	this.gfn_setValidation(this.ds_workList, strVldtn_01, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_01, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_workList, strVldtn_02, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_02, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_workList, strVldtn_03, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_03, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_workList, strVldtn_04, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_04, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_workList, strVldtn_05, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_05, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_workList, strVldtn_06, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_06, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_workList, strVldtn_07, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_07, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_workList, strVldtn_08, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_08, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_workList, strVldtn_09, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_09, "HeaderText")	, "required");
        // 	this.gfn_setValidation(this.ds_workList, strVldtn_10, this.gfn_dsLookup(this.ds_grdDic, "BindCol", strVldtn_10, "HeaderText")	, "required");

        }

        // 정합성체크 : 폼별 특수 케이스
        this.fn_validationCheck = function(){

        // 	var gtrcPos = "POList.xfdl.fn_validationCheck";
        // 		this.gtrace("● PO 정합성체크", gtrcPos);
        //
        // 	var oTp = this.getTabpageType();
        // 		var ttpe = oTp.TAB_TYPE;
        // 		var tds  = oTp.T_DS;
        //
        // 	// 저장공통체크
        // 	var checkResult = this.fn_saveCommonCheck(ttpe, tds);
        //
        // 	if(checkResult){
        // 		switch(ttpe) {
        // 		case "PO_CREATE"	:
        // 				//	PO 생성 체크
        // 				checkResult = this.fn_savePoValidation(ttpe, tds);
        // 				break;
        // 		case "PO_UPDATE"	:
        // 				//	히스토리 저장 체크
        // 				checkResult = this.fn_saveHistoryValidation(ttpe, tds);
        // 				break;
        // 		default:
        // 				break;
        // 		}
        // 	}
        // 	return checkResult;
        }


        // 저장시 공통체크로직(CREATE / UPDATE)
        this.fn_saveCommonCheck = function(tabType, tabDs){

        // 	var gtrcPos = "POList.xfdl.fn_saveCommonCheck";
        // 		this.gtrace("●PO저장체크로직", gtrcPos);
        //
        // 	var bRtn = true;
        //
        // 	// 전체 돌면서 체크
        // 	tabDs.set_enableevent(false);
        // 	for(var i = 0 ; i < tabDs.rowcount ; i++){
        //
        // 		//체크된 것에 대해서만 적용
        // 		var ck = tabDs.getColumn(i, "ROW_CHK");
        //
        // 		if(ck == "1"){
        // 			//메세지초기화는 무조건 함
        // 			this.fn_setDsRowMessage(tabDs, i, "");
        // 			var ckDocType = tabDs.getColumn(i, "DOC_TYPE");
        //
        // 			// [P/O] 특정문서타입은 발주를 할수 없다. (''LN'', ''LC'', ''BM'')
        // 			// 에러메세지 : O/S type is not valid. (''LN'', ''LC'', ''BM'')
        // 			if(ckDocType == "LN" || ckDocType == "LC" || ckDocType == "BM"){
        // 				//O/S type is not valid.
        // 				bRtn = this.fn_setDsRowMessage(tabDs, i, "msg.OStypeIsNotValid");
        // 			}
        // 		}
        // 	}
        // 	tabDs.set_enableevent(true);
        //
        // 	this.gtrace("체크룰통과여부(validationCheck)-------->"+bRtn, gtrcPos);
        //
        // 	return bRtn;
        }

        // 히스토리 저장시 체크로직(UPDATE)
        this.fn_saveHistoryValidation = function(){

        // 	var gtrcPos = "POList.xfdl.fn_saveHistoryValidation";
        // 		this.gtrace("●PO히스토리저장체크로직", gtrcPos);
        //
        // 	var bRtn = true;
        // 	var targetDs = this.ds_POHistory;
        //
        // 	targetDs.set_enableevent(false);
        //
        // 	// 전체 돌면서 체크
        // 	for(var i = 0 ; i < targetDs.rowcount ; i++){
        //
        // 		var ck = targetDs.getColumn(i, "ROW_CHK");
        // 		var ckDOC_TYPE = targetDs.getColumn(i, "DOC_TYPE");
        // 		var iPOITEM = targetDs.getColumn(i, "POITEM");
        // 		var iLIFNR = targetDs.getColumn(i, "LIFNR");			//	Vendor ( SUPPLIER_CODE )
        // 		var iUEBTO = nexacro.toNumber(targetDs.getColumn(i, "UEBTO"));
        // 		var iUNTTO = nexacro.toNumber(targetDs.getColumn(i, "UNTTO"));
        //
        // 		//체크된 것에 대해서만 체크
        // 		if(ck=="1"){
        //
        // 			this.gtrace(i+"번째 행 DOC_TYPE-->"+ckDOC_TYPE, gtrcPos);
        //
        // 			if(ckDOC_TYPE == "NB" || ckDOC_TYPE == "IM")
        // 			{
        // 				//  NB' or 'IM' 으로 생성 및 변경시에는 TOL (more, less) 무조건 빈값
        // 				if(	!(iUEBTO==0 && iUNTTO==0)
        // 				){
        // 					bRtn = this.fn_setDsRowMessage(targetDs, i, "해당 Document Type은 TOL 값이 빈값이어야 합니다.");
        // 				}
        // 			}
        //
        // 			// 두번 Loop.
        // 			for(var k = 0 ; k < targetDs.rowcount ; k++)
        // 			{
        // 				var kPOITEM = targetDs.getColumn(k, "POITEM");
        // 				var kLIFNR = targetDs.getColumn(k, "LIFNR");	//	Vendor ( SUPPLIER_CODE )
        // 				var kROW_CHK = targetDs.getColumn(k, "ROW_CHK");	//	체크여부
        //
        // 				// [P/O HISTORY] 변경시 같은 PO인데 벤더가 다를경우 해당 에러 메시지
        // 				if(	iPOITEM == kPOITEM && iLIFNR != kLIFNR
        // 				){
        // 					this.gtrace(k+"번째 행 벤더코드-->"+kLIFNR+"!="+iLIFNR+"(체크된 벤더코드) at Purchase Number(POITEM)---->"+kPOITEM, gtrcPos);
        // 							var tmpMsg = "Please Select Equals PO AND Vendor Data!";
        // 							this.fn_setDsRowMessage(targetDs, i, tmpMsg);
        // 					bRtn = 	this.fn_setDsRowMessage(targetDs, k, tmpMsg);
        // 				}
        //
        // 				// [ALL] Document Type NB' or 'IM' 로 변경시 해당 PO ITEM 전체선택 안되고 저장 불가
        // 				if(ckDOC_TYPE == "NB" || ckDOC_TYPE == "IM")
        // 				{
        // 					if(	iPOITEM == kPOITEM && kROW_CHK != "1"
        // 					){
        // 						//	체크되지 않은 것에도 메세지 표시
        // 						this.gtrace(k+"번째 행 체크안됨(kROW_CHK)-->"+kROW_CHK+" - Purchase Number(POITEM-kPOITEM)---->"+kPOITEM, gtrcPos);
        // 						var tmpMsg = "Document Type NB' or 'IM' 'PO번호' 에 아이템을 전체선택해주세요";
        // 								this.fn_setDsRowMessage(targetDs, i, tmpMsg);
        // 						bRtn = 	this.fn_setDsRowMessage(targetDs, k, tmpMsg);
        // 					}
        // 				}
        // 			}
        // 		}
        // 	}
        //
        // 	targetDs.set_enableevent(true);
        //
        // 	this.gtrace("체크룰통과여부(validationCheck)-------->"+bRtn, gtrcPos);
        // 	return bRtn;
        }

        // PO 저장시 체크로직(CREATE)
        this.fn_savePoValidation = function(){
        	//	return true;
        }

        /********************************************************************************************
        @desc	5. 서비스 호출(Transaction)
        ********************************************************************************************/
        /*++
        @desc	POList , POHistory Load
        */
        this.tfn_tbl10_search = function(){

        	var gtrcPos = "POList.xfdl.tfn_tbl10_search";		this.gtrace("● POSearch트랜잭션", gtrcPos);

        	this.ds_workList.clearData();

        	this.ds_in.setColumn(0, "p_user_id", this.gfn_getApplication().gds_User.getColumn(0, "USER_ID"));

        	var sSvcID 			= "tbl10_search";
        	var sURL 			= "AppSvrLocalMsSql::CommonSaveAction_Return.do";
        	var sInDatasets 	= "ds_in0=ds_in";
        	var sOutDatasets 	= "ds_workList=ds_out0";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("tbl10_search");

        		this.gtrace("보내는 데이터셋(ds_in.saveXML())---->"+this.ds_in.saveXML(), gtrcPos);

        	//공통 트랜잭션 사용
        	this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }

        /*++
        @desc	POList , POHistory Load
        */
        this.tfn_tbl10_save = function(){
        	// I_CHECK "X" / ""

        	var gtrcPos = "POList.xfdl.tfn_tbl10_save";		this.gtrace("● 개발내역저장", gtrcPos);

        	var sSvcID 			= "tbl10_save";
        	var sURL 			=  "AppSvrLocalMsSql::CommonSaveAction_Return.do";;
        	var sInDatasets 	=  "ds_in0=ds_workList";
        	var sOutDatasets 	= "ds_result_workList=ds_out0";
        	var sArguments 		= "sqlId=" + nexacro.wrapQuote("tbl10_save");

        	//공통 트랜잭션 사용 : -1에러 발생시 자동 콜백처리됨.
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
        	var gtrcSearchPos = gtrcPos+".tbl10_search";
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

        		case "tbl10_search"	:	//	callback
        					this.gtrace(this.ds_workList.saveXML(), gtrcSearchPos);
        // 					this.gtrace(this.ds_POHistory.saveXML(), gtrcSearchPos)
        //
        // 					// 데이터조회후 금액 재계산
        // 					this.ds_workList.set_enableevent(false);
        // 					for(var i = 0 ; i < this.ds_workList.rowcount ; i++){
        // 						this.fn_TotalAmountCalc(i);
        // 					}
        // 					this.ds_workList.set_enableevent(true);
        //
        // 					this.ds_POHistory.set_enableevent(false);
        // 					for(var k = 0 ; k < this.ds_POHistory.rowcount ; k++){
        // 						this.fn_TotalAmountCalc(k);
        // 					}
        // 					this.ds_POHistory.set_enableevent(true);


        			break;
        		case "getPoHistoryOnlyLoad"	:	//	callback
        					this.gtrace(this.ds_POHistory.saveXML(), gtrcSearchPos)
        			break;

        		case "deletePO" : // callback

        			//	break;	//	일단 savePO와 동일하게...
        		case "tbl10_save":	//	callback
        				this.gtrace(this.ds_result_workList.saveXML(), gtrcPos);


        // 			//	성공한 오더번호가 하나도 없는 경우도 실패
        // 			if(arrEbeln.length == 0) bSucc = false;
        //
        // 			// 여기까지 bSucc가 false가 되지 않았다면 true
        // 			if(bSucc != false) bSucc = true;
        //
        // 			// 메세지 띄우기
        // 			if(bSucc){
        // 					//	전체적으로 성공완료
        // 					var sCbMsg = "msg.success";
        // 					this.gfn_alert(sCbMsg,["(" + arrEbeln+")"],"savePO_SUCCESS","callbackFunc_pop","A");
        // 			}else{
        // 				if(arrEbeln.length == 0){
        // 					//	SAP RFC는 탔으나 모두 실패 : PO가 하나도 생성되지 않음
        // 					var sCbMsg = "msg.NoPoCreated";
        // 					this.gfn_alert(sCbMsg,[],"savePO_NoPoCreated","callbackFunc_pop","A");
        // 				}else{
        // 					//	SAP RFC는 탔고 부분적으로 PO 생성 성공한 경우
        // 					var sCbMsg = "msg.checkMessage";
        // 					this.gfn_alert(sCbMsg,[],"savePO_CHECK","callbackFunc_pop","A");
        // 				}
        // 			}

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
        						this.tfn_tbl10_search();
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
        //   	if(this.gfn_validation(this.ds_in, "A"))	// Validation == true 이면
        // 	{
        		// 조회실행
        		this.tfn_tbl10_search();
        //	}
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
        // 	var oTpage = this.getTabpageType();
        // 		var checkDs  = oTpage.T_DS;
        //
        // 	// R : 체크한 행에 대해서만 체크
        // 	if(this.gfn_rowCheckValidation(checkDs, "msg.err.validator.selectrow"))
        // 	{
        // 		// 정합성체크 : 폼별 특수 케이스
        // 		if(this.fn_validationCheck("N")){
        			this.tfn_tbl10_save();
        // 		}
        // 	}
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
        		case 0 	: resultStr = "PO_CREATE"; 	resultDs = this.ds_workList; break;
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
        	this.ds_workList.setColumn(iCalcRp, amountCol, nL_NETWR);

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
        this.TabMain.TabpageDevWork.form.fn_tabGetUnitExpr = function(rp)
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
        			oDs = this.ds_workList;
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
        this.TabMain.TabpageDevWork.form.fn_tabGetCurrencyExpr = function(rp)
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
        			oDs = this.ds_workList;
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
         *	ds_workList_oncolumnchanged
         */
        this.ds_workList_oncolumnchanged = function(obj,e)
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
        this.TabMain_TabpageDevWork_ButtonSearchSample_onclick = function(obj,e)
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
        this.TabMain_TabpageDevWork_ButtonMassInput_onclick = function(obj,e)
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
        	trace(this.TabMain.TabpageDevWork.form.GridPoList.name);
        	trace(this.TabMain.TabpageDevWork.form.lookup("GridPoList"));
        	//trace(this.gfn_getMessage("msg.OStypeIsNotValid"));
        	//this.Sketch00.drawStroke( 3, 3, true );
        	//this.Sketch00.drawStroke( 5, 5, false );
        	//this.Sketch00.drawStroke( 5, 5 );
        // 	var chkVal = this.ds_workList.setColumn(0, "ROW_CHK");	trace("chkVal--->"+chkVal);
        // 	this.ds_workList.setColumn(0, "ROW_CHK" , (chkVal=="1"?"0":"1"));
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
        	// 	trace("this.gfn_getCompId(this.ds_workList)---------->"+this.gfn_getCompId(this.ds_workList));
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
            this.TabMain.TabpageDevWork.form.ButtonMassInput.addEventHandler("onclick",this.TabMain_TabpageDevWork_ButtonMassInput_onclick,this);
            this.TabMain.TabpagePOHistory.form.GridPoHistory.addEventHandler("oncellclick",this.TabMain_TabpagePOHistory_GridPoHistory_oncellclick,this);
            this.TabMain.TabpagePOHistory.form.ButtonSendMailOutlook.addEventHandler("onclick",this.TabMain_TabpagePOHistory_ButtonSendMailOutlook_onclick,this);
            this.TabMain.TabpagePOHistory.form.ButtonDownloadPoPrint.addEventHandler("onclick",this.TabMain_TabpagePOHistory_ButtonDownloadPoPrint_onclick,this);
            this.TabMain.TabpagePOHistory.form.ButtonPoPrintEn.addEventHandler("onclick",this.TabMain_TabpagePOHistory_ButtonPoPrintEn_onclick,this);
            this.TabMain.TabpagePOHistory.form.ButtonPoPrintKr.addEventHandler("onclick",this.TabMain_TabpagePOHistory_ButtonPoPrintKr_onclick,this);
            this.TabMain.TabpagePOHistory.form.ButtonMassInput.addEventHandler("onclick",this.TabMain_TabpagePOHistory_ButtonMassInput_onclick,this);
            this.TabMain.TabpagePOHistory.form.ButtonGoToImportRequest.addEventHandler("onclick",this.TabMain_TabpagePOHistory_ButtonGoToImportRequest_onclick,this);
            this.ButtonScriptTest.addEventHandler("onclick",this.ButtonScriptTest_onclick,this);
            this.ButtonSearchSample.addEventHandler("onclick",this.TabMain_TabpageDevWork_ButtonSearchSample_onclick,this);
            this.ButtonTrace.addEventHandler("onclick",this.ButtonTrace_onclick,this);
            this.ds_workList.addEventHandler("oncolumnchanged",this.ds_workList_oncolumnchanged,this);
            this.ds_POHistory.addEventHandler("oncolumnchanged",this.ds_POHistory_oncolumnchanged,this);
            this.ds_result_workList.addEventHandler("oncolumnchanged",this.ds_workList_oncolumnchanged,this);
        };

        this.loadIncludeScript("DevDailyWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
