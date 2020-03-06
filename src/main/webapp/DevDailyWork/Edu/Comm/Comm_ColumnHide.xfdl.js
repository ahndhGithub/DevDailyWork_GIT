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
            obj._setContents("<ColumnInfo><Column id=\"columnText\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"columnIndex\" type=\"STRING\" size=\"256\"/><Column id=\"body\" type=\"STRING\" size=\"256\"/><Column id=\"orgSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_copy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","20",null,"327","19",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_filter");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!sort,!rowfix,!colfix,!filter,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"225\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"컬럼선택\" expandchar=\"popup.columnselect\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:columnText\"/></Band></Format></Formats>");
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
        this.registerScript("Comm_ColumnHide.xfdl", function() {
        /**
        *  @Desction    그리드 컬럼 숨기기/보이기 공통팝업
        */

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.fv_targetGrid; 	  //대상그리드 OBJECT
        this.fv_targetDataset; //대상데이터셋 OBJECT

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	//초기값 설정
        	this.fv_targetGrid    = this.getOwnerFrame().pvGrid;
        	this.fv_targetDataset = this.fv_targetGrid.getBindDataset();
        	this.fn_getHeadText();

        	//compare grid setting
        	this.fn_setGrd();
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
        this.fn_getHeadText = function ()
        {
        	this.grd_list.set_enableredraw(false);
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
        			var headText = this.fv_targetGrid.getCellProperty("head", j, "text");
        			if( nRow == maxHeadRow && nCol == i ) columnText += "[" + headText + "]";
        		}

        		var nchk = 1;
        		var columnIndex = i;
        		if( this.fv_targetGrid.getRealColSize(columnIndex) == 0 ) nchk = 0;

        		if( columnText == "[순번]" || columnText == "[상태]" ) continue;
        		if( columnText == "[0]" && this.fv_targetGrid.getCellProperty("Body", i, "text") == "bind:gridcmmcheck" ) continue;
        		var nRow = this.ds_filter.addRow();
        		this.ds_filter.setColumn(nRow, "columnText",  columnText);
        		this.ds_filter.setColumn(nRow, "chk",  		 nchk);
        		this.ds_filter.setColumn(nRow, "columnIndex", columnIndex);
        	}
        	this.grd_list.set_enableredraw(true);
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_ok_onclick = function(obj,e)
        {
        	var nTarget =0;
        	var arr = this.fv_targetGrid.arrprop;
        	for(var n=0; n< arr.length; n++){
        		var tmp = this.fv_targetGrid.arrprop[n];
        		if( tmp == "checkbox" || tmp == "status" || tmp == "no" ){
        			nTarget += 1;
        		}
        	}
        	this.fv_targetGrid.set_enableredraw(false);
        	var nRowCnt = this.ds_filter.getRowCount();
        	for( var i=0; i<nRowCnt; i++)
        	{
        		var nChk    = this.ds_filter.getColumn(i, "chk");
        		var colidx  = nexacro.toNumber(this.ds_filter.getColumn(i, "columnIndex"));
        		var nSize= 0;
        		if(nChk == 1){
        			var orgCol = colidx - nTarget;
        			nSize = this.grd00.getFormatColSize(orgCol);
        		}
        		this.fv_targetGrid.setFormatColProperty(colidx, "size", nSize );
        	}
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

        this.loadIncludeScript("Comm_ColumnHide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
