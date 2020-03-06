(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_ColumnHide");
            this.set_titletext("그리드컬럼숨김");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,415);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_filter", this);
            obj.set_keystring("S:+ROW_CHK");
            obj._setContents("<ColumnInfo><Column id=\"columnText\" type=\"STRING\" size=\"256\"/><Column id=\"columnIndex\" type=\"STRING\" size=\"256\"/><Column id=\"body\" type=\"STRING\" size=\"256\"/><Column id=\"orgSize\" type=\"STRING\" size=\"256\"/><Column id=\"bindCol\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_copy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","20",null,"327","19",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_filter");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!sort,checkbox,!sort,!rowfix,!colfix,!filter,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"225\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"컬럼선택\" expandchar=\"popup.columnselect\"/></Band><Band id=\"body\"><Cell text=\"bind:columnText\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","87","367","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_tabstop("true");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_WF_pop1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","153","367","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.close");
            obj.set_cssclass("btn_WF_pop2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","301","20","261","327",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n20");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","15","347",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h5");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,415,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Comm_SubSum.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("Comm_SubSum.xfdl", function() {
        /**
        *  @Desction    그리드 컬럼 숨기기/보이기 공통팝업
        */
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.fv_targetGrid; 	  	//대상그리드 OBJECT
        this.fv_targetDataset; 		//대상데이터셋 OBJECT

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        																		var gtrcPos = "Comm_SubSum.xfdl.form_onload";

        	this.gfn_formOnLoad(this);

        	//초기값 설정
        	this.fv_targetGrid    = this.getOwnerFrame().pvGrid;				this.gtrace("fv_targetGrid.name--->"+this.fv_targetGrid.name, gtrcPos);
        	this.fv_targetDataset = this.fv_targetGrid.getBindDataset();		this.gtrace("fv_targetDataset.name--->"+this.fv_targetDataset.name, gtrcPos);
        	this.fn_getHeadTextAndBindingInfo();

        	//compare grid setting
        	this.fn_setGrd();

        	//체크된 것 위로
        	this.ds_filter.set_keystring("S:-ROW_CHK+currow");
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
        * CALLBACK 콜백 처리부분
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * @description 비교그리드 세팅
        */
        this.fn_setGrd = function()
        {
        	this.grd00.set_enableredraw(false);
        	this.grd00.set_formats(this.fv_targetGrid.orgformat2);
        	this.grd00.set_enableredraw(true);
        };

        /**
         * @description 그리드의 헤드정보를 받아와 콤보 세팅
        */
        this.fn_getHeadTextAndBindingInfo = function ()
        {
        															var gtrcPos = "Comm_SubSum.xfdl.fn_getHeadTextAndBindingInfo";
        	this.grd_list.set_enableredraw(false);
        // 																this.gtrace("getCellCount(body)--->"+this.fv_targetGrid.getCellCount("body"),gtrcPos);
        // 																this.gtrace("getCellCount(head)--->"+this.fv_targetGrid.getCellCount("head"),gtrcPos);
        // 																this.gtrace("getFormatColCount--->"+this.fv_targetGrid.getFormatColCount(),gtrcPos);
        //																this.gtrace("fv_targetDataset.keystring --->"+this.gfn_nvl(this.fv_targetDataset.keystring,"") , gtrcPos);

        	for( var i=0; i<this.fv_targetGrid.getFormatColCount(); i++)
        	{
        		var columnText = "";//i + "번째 컬럼 ";

        		for (var j=0, len=this.fv_targetGrid.getCellCount("head"); j<len; j++) {
        			var maxHeadRow = 0;
        			var row = this.fv_targetGrid.getCellProperty("head", j, "row");
        			if (maxHeadRow < row) {
        				maxHeadRow = row;
        			}
        			var nRow = parseInt(this.fv_targetGrid.getCellProperty("head", j, "row"));
        			var nCol = parseInt(this.fv_targetGrid.getCellProperty("head",j, "col"));
        			var headText = this.gfn_nvl(this.fv_targetGrid.getCellProperty("head", j, "text"), " ");
        			if( nRow == maxHeadRow && nCol == i )
        			{
        				columnText += "[" + headText + "]";
        			}
        		}

        		var nchk = 0;		// 기본 체크 안되도록 함.
        		var columnIndex = i;
        		if( this.fv_targetGrid.getRealColSize(columnIndex) == 0 ) nchk = 0;

        		if( columnText == "[Seq.]" || columnText == "[상태]" ) continue;
        		if( columnText == "[0]" && this.fv_targetGrid.getCellProperty("Body", i, "text") == "bind:gridcmmcheck" ) continue;
        		var nRow = this.ds_filter.addRow();
        		this.ds_filter.setColumn(nRow, "columnText",  columnText);
        		this.ds_filter.setColumn(nRow, "ROW_CHK",  		 nchk);
        		this.ds_filter.setColumn(nRow, "columnIndex", columnIndex);
        		this.ds_filter.setColumn(nRow, "bindCol", this.fv_targetGrid.getCellProperty("Body", i, "text").replace("bind:",""));
        	}

        	var arrKeyStrBindCol = this.fv_targetDataset.keystring.split(",");

        	for(var k=0 ; k < arrKeyStrBindCol.length ; k++)
        	{
        																//				this.gtrace("arrKeyStrBindCol["+k+"]--->"+arrKeyStrBindCol[k], gtrcPos);
        		var tempBindCol = arrKeyStrBindCol[k].replace("G:","");					this.gtrace("tempBindCol--->"+tempBindCol, gtrcPos);
        		var fRow = this.ds_filter.findRow("bindCol",tempBindCol);	this.gtrace("fRow--->"+fRow, gtrcPos);
        		this.ds_filter.setColumn(fRow, "ROW_CHK","1");
        	}

        this.grd_list.set_enableredraw(true);
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_ok_onclick = function(obj,e)
        {
        													var gtrcPos = "Comm_SubSum.xfdl.btn_ok_onclick";
        	var sNewKeyStr = "";
         	this.fv_targetGrid.set_enableredraw(false);

         	var nRowCnt = this.ds_filter.getRowCount();			this.gtrace("nRowCnt--->"+nRowCnt, gtrcPos);
        	for( var i=0; i<nRowCnt; i++)
        	{
        		var nChk    = this.ds_filter.getColumn(i, "ROW_CHK");
        		var sBindCol= this.ds_filter.getColumn(i, "bindCol");

        		if(nChk == 1)
        		{
        			sNewKeyStr += (sNewKeyStr!=""?",":"") + "G:" + sBindCol;
        		}
        	}
        														this.gtrace("sNewKeyStr--->"+sNewKeyStr, gtrcPos);
        	this.fv_targetDataset.set_keystring("");	// 초기화
        	this.fv_targetDataset.set_keystring(sNewKeyStr);

        	this.fv_targetGrid.set_enableredraw(true);

        	this.close();
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };

        this.loadIncludeScript("Comm_SubSum.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
