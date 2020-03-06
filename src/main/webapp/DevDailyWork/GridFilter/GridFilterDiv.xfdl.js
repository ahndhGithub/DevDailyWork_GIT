(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridFilterDiv");
            this.set_titletext("New Form");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(130,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_codeOperater", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"group\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">none</Col><Col id=\"nm\">없음</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">equal</Col><Col id=\"nm\">=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">notEqual</Col><Col id=\"nm\">&lt;&gt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">greaterThan</Col><Col id=\"nm\">&gt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">greaterThanOrEqual</Col><Col id=\"nm\">&gt;=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">lessThan</Col><Col id=\"nm\">&lt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">lessThanOrEqual</Col><Col id=\"nm\">&lt;=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">startWith</Col><Col id=\"nm\">시작문자</Col><Col id=\"group\">String</Col></Row><Row><Col id=\"cd\">endWith</Col><Col id=\"nm\">종료문자</Col><Col id=\"group\">String</Col></Row><Row><Col id=\"cd\">contains</Col><Col id=\"nm\">포함</Col><Col id=\"group\">String</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"val\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_distinct", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cmb_operater","0","62","95","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            obj.set_innerdataset("ds_codeOperater");
            obj.set_codecolumn("cd");
            obj.set_datacolumn("nm");
            obj.set_background("transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_combo","2","131","306","260",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_border("1px solid darkgreen");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_combo","0","0",null,null,"0","0",null,null,null,null,this.pdiv_combo.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_combo");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj.set_background("white");
            obj.set_border("0px none darkgreen");
            obj.set_scrollbartype("auto");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"276\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" edittype=\"text\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:text\" textAlign=\"left\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.pdiv_combo.addChild(obj.name, obj);

            obj = new Calendar("cal_filter","0","90","94","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_borderRadius("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_filter","78","16","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_cursor("hand");
            obj.set_cssclass("GD_btnAdd_ft01");
            obj.set_background("url(\'imagerc::grd_filter_combo.png\') no-repeat center center #f3f7f7");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_filter","1","17","76","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_border("1px solid rgba(211,211,211,1)");
            obj.set_borderRadius("0px");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("GridFilterDiv.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("GridFilterDiv.xfdl", function() {
        /********************************************************************************************
        @desc	1. Include
        ********************************************************************************************/
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        // Filter 가능 표시 이미지
        this.FILTER_ENABLE_IMAGE_URL = "imagerc::grd_filter_combo.png";
        //this.FILTER_ENABLE_IMAGE_URL = "img::img_TreeClose.png";
        this.FILTER_ENABLE_IMAGE_SIZE = [30, 30];

        // Filter 적용 표시 이미지
        this.FILTER_APPLY_IMAGE_URL = "imagerc::grd_filter_check.png";
        this.FILTER_APPLY_IMAGE_SIZE = [30, 30];

        /*
         * Grid Filter Sample at XPLATFORM
         *
         * Copyright (c) 2014 EcoSystem of TOBESOFT
         * Licensed Free under XPLATFORM.
         */

        /**
         * Form onload event handler - 로드시 초기 지정
         * @param {Form} obj 대상 Form Component
         * @param {LoadEventInfo} e LoadEventInfo
         */
        this.GridFilterDiv_onload = function (obj, e)
        {
        	var imageSize = this.FILTER_ENABLE_IMAGE_SIZE;

        	this.btn_filter.resize(imageSize[0], imageSize[1]);
        	this.btn_filter.set_border("0px none #ffffff");
        	this.btn_filter.set_background("url('"+this.FILTER_ENABLE_IMAGE_URL+"') no-repeat center center #f3f7f7");
        	//URL('imagerc::grd_filter_combo.png')
        	//this.FILTER_ENABLE_IMAGE_URL = "imagerc::grd_filter_combo.png";
        	this.cmb_operater.set_border("0px none #ffffff");

        	this.resizeComps(obj.getOffsetWidth(), obj.getOffsetHeight());

        	this.ds_distinct.filter("");
        	this.ds_combo.filter("");
        };

        /**
         * Form onsize event handler - 사이즈 변경 시 컴포넌트 위치조정
         * @param {Form} obj 대상 Form Component
         * @param {SizeEventInfo} e SizeEventInfo
         */
        this.GridFilterDiv_onsize = function (obj, e)
        {
        	this.resizeComps(e.cx, e.cy);
        };

        /**
         * 컴포넌트 내용 초기화
         */
        this.initValue = function ()
        {
        	this.edt_filter.set_value("");
        	this.btn_filter.set_border("0px none #ffffff");
        	this.btn_filter.set_background("url('"+this.FILTER_ENABLE_IMAGE_URL+"') no-repeat center center #f3f7f7");
        	this.cmb_operater.set_index(-1);
        	this.cal_filter.set_value("");
        };

        /**
         * 컴포넌트 위치 조정
         * @param {number} formW Form Width
         * @param {number} formH Form Height
         */
        this.resizeComps = function (formW, formH)
        {
        	var l,t,w,h,gap = 2;
        	var imageSize = this.FILTER_ENABLE_IMAGE_SIZE;

        	l = gap;
        	t = gap;
        	w = formW - (gap * 2) - imageSize[0];
        	h = formH - (gap * 2);

        	this.edt_filter.move(l, t, w, h);
        	this.cal_filter.move(l, t, w, h);

        	l = l + w + gap;
        	t = Math.round((formH - imageSize[1]) / 2);

        	this.btn_filter.move(l, t);

        	l = this.btn_filter.getOffsetLeft();
        	t = this.btn_filter.getOffsetTop();
        	w = this.btn_filter.getOffsetWidth();
        	h = this.btn_filter.getOffsetBottom();

        	this.cmb_operater.move(l, t, w, h);
        };

        /**
         * filter type 별 형태/데이터 지정
         */
        this.setFilterType = function ()
        {
        	var grid = this.parent.grid;		//	trace("grid.name-->"+grid.name);
        	var type = this.parent.filterType;	//	trace("type-->"+type);
        	var column = this.parent.filterColumn;
        	var bodyCellIndex = this.parent.bodyCellIndex;
        	var filterData = this.parent.filterData;
        	var cellMaskedittype = grid.getCellProperty("body", bodyCellIndex, "maskedittype");

        	if (type == "combo" || type == "combocontrol")
        	{
        		this.edt_filter.set_visible(false);
        		this.cal_filter.set_visible(false);

        		var dsName = grid.getCellProperty("body", bodyCellIndex, "combodataset");
        		var ds = this.gfn_Lookup(grid.parent, dsName);	//	trace("ds.name--->"+ds.name);
        		var codeColumn = grid.getCellProperty("body", bodyCellIndex, "combocodecol");
        		var dataColumn = grid.getCellProperty("body", bodyCellIndex, "combodatacol");

        		this.ds_combo.set_enableevent(false);
        		this.ds_combo.deleteAll();

        		var row;
        		var defaultVal = this.gfn_isNull(filterData) ? true : false;		//	trace("defaultVal--->"+defaultVal);
        		for (var i = 0,len = ds.rowcount; i < len; i++)
        		{
        			row = this.ds_combo.addRow();
        			this.ds_combo.setColumn(row, "chk", (defaultVal ? 0 : filterData[i]));
        			this.ds_combo.setColumn(row, "text", ds.getColumn(i, dataColumn));
        			this.ds_combo.setColumn(row, "val", ds.getColumn(i, codeColumn));
        		}

        		this.ds_combo.set_rowposition(-1);
        		this.ds_combo.set_enableevent(true);
        	}
        	else if (type == "date")
        	{
        		this.edt_filter.set_visible(false);
        		this.cal_filter.set_visible(true);
        	}
        	else if (type == "number")
        	{
        		this.edt_filter.set_visible(true);
        		this.cal_filter.set_visible(false);
        		this.edt_filter.set_inputtype("number");
        	}
        	else
        	{
        		this.edt_filter.set_visible(true);
        		this.cal_filter.set_visible(false);
        		this.edt_filter.set_inputtype("normal");
        	}
        };

        /**
         * onkeydown Event Handler
         * @param {Edit} obj Event가 발생한 Edit Component
         * @param {KeyEventInfo} e KeyEventInfo
         */
        this.edt_filter_onkeydown = function (obj, e)
        {
        	if (e.keycode == 13)
        	{
        		this.applyFilter(this.cmb_operater.value, obj.value, obj.value);
        	}
        };

        /**
         * onsetfocus Event Handler
         * @param {Edit} obj Event가 발생한 Edit Component
         * @param {SetFocusEventInfo} e SetFocusEventInfo
         */
        this.edt_filter_onsetfocus = function (obj, e)
        {
        	obj.focusValue = obj.value;
        };

        /**
         * onkillfocus Event Handler
         * @param {Edit} obj Event가 발생한 Edit Component
         * @param {KillFocusEventInfo} e KillFocusEventInfo
         */
        this.edt_filter_onkillfocus = function (obj, e)
        {
        	if (obj.focusValue != obj.value)
        	{
        		this.applyFilter(this.cmb_operater.value, obj.value, obj.value);
        	}
        };

        /**
         * onclick Event Handler
         * @param {Button} obj Event가 발생한 Button Component
         * @param {ClickEventInfo} e ClickEventInfo
         */
        this.btn_filter_onclick = function (obj, e)
        {
        	var grid = this.parent.grid;
        	var type = this.parent.filterType;
        	var bodyCellIndex = this.parent.bodyCellIndex;
        	var cellMaskedittype = grid.getCellProperty("body", bodyCellIndex, "maskedittype");

        	if (type == "normal")
        	{
        // 		{	//	오퍼레이터 버젼
        // 			this.ds_codeOperater.filter("");
        // 			this.cmb_operater.dropdown();
        // 		}

        		{	//	텍스트Disctinct체크버젼

        			this.edt_filter.set_visible(true);
        			this.cal_filter.set_visible(false);
        			this.edt_filter.set_inputtype("normal");

        			var filterData = this.parent.filterData;

        			var ds = this.gfn_Lookup(grid.parent, grid.binddataset);	//	trace("ds.name--->"+ds.name);
        			var bindColNm = grid.getCellProperty("body", bodyCellIndex, "text").replace("bind:",""); //	trace("bindColNm---->"+bindColNm);

        			var cFilterStr = ds.filterstr;			//	trace("filterstr--->"+ds.filterstr );

        			////////////////////////////////////////////
        			this.ds_distinct.set_enableevent(false);
        			ds.set_enableevent(false);
        			////////////////////////////////////////////

        			this.ds_distinct.filter("");
        			this.ds_distinct.clearData();
        			//	필터된 컬럼이면 전체를 보여줌 , 아니면 필터 내에서만 보여줌
        			this.ds_distinct.copyData(ds, ( cFilterStr.indexOf(bindColNm+"==") > -1 ? false : true ));

        			//	중복제거 가져오기
        			this.gfn_distincDsFilter(this.ds_distinct, bindColNm);

        			////////////////////////////////////////////
        			this.ds_distinct.set_enableevent(true);
        			ds.set_enableevent(true);
        			////////////////////////////////////////////

        			this.ds_combo.set_enableevent(false);
        			this.ds_combo.deleteAll();

        			for (var i = 0,len = this.ds_distinct.rowcount; i < len; i++)
        			{
        				var row = this.ds_combo.addRow();
        				var colVal = this.ds_distinct.getColumn(i, bindColNm);
        				var isCheckedStr = bindColNm+"=="+nexacro.wrapQuote(colVal); //	trace("isCheckedStr--->"+isCheckedStr);
        									//	this.ds_combo.setColumn(row, "chk", (defaultVal ? 0 : filterData[i]));
        									//	trace("cFilterStr.indexOf(isCheckedStr---->"+cFilterStr.indexOf(isCheckedStr));
        				//해당값에 필터가 걸려 있다면 체크표시
        				this.ds_combo.setColumn(row, "chk", (cFilterStr.indexOf(isCheckedStr) > -1 ? "1":"0"));
        				this.ds_combo.setColumn(row, "text", colVal);
        				this.ds_combo.setColumn(row, "val", colVal);
        			}

        			this.ds_combo.set_keystring("S:text");
        			this.ds_combo.set_rowposition(-1);
        			this.ds_combo.set_enableevent(true);

        			var imageSize = this.FILTER_ENABLE_IMAGE_SIZE;
        			var x = e.clientx + grid.getOffsetLeft() + 1050 - this.parent.posX;
        			var y = e.clienty + grid.getOffsetTop() + 165;

        			var z = parseInt(this.getOffsetWidth() + 1);
        			var nNum = nexacro.round(0.76 * z);

        			//	this.pdiv_combo.set_width(z);
        			this.pdiv_combo.set_width(300);
        			this.pdiv_combo.trackPopupByComponent(obj, -nNum, 22);
        		}
        	}
        	else if (type == "number" || type == "date")
        	{
        		this.ds_codeOperater.filter("group != 'String'");
        		this.cmb_operater.dropdown();
        	}
        	else if (type == "combo" || type == "combocontrol")
        	{
        		var imageSize = this.FILTER_ENABLE_IMAGE_SIZE;
        		var x = e.clientx + grid.getOffsetLeft() + 1050 - this.parent.posX;
        		var y = e.clienty + grid.getOffsetTop() + 165;

        		var z = parseInt(this.getOffsetWidth() + 1);
        		var nNum = nexacro.round(0.76 * z);

        		//	this.pdiv_combo.set_width(z);
        		this.pdiv_combo.set_width(300);
        		this.pdiv_combo.trackPopupByComponent(obj, -nNum, 22);
        	}
        };

        /**
         * onitemclick Event Handler
         * @param {Combo} obj Event가 발생한 Combo Component
         * @param {ListBoxClickEventInfo} e ListBoxClickEventInfo
         */
        this.cmb_operater_onitemclick = function (obj, e)
        {
        	var value;
        	var type = this.parent.filterType;
        	var grid = this.parent.grid;		//	trace("grid.name-->"+grid.name);
        	var bodyCellIndex = this.parent.bodyCellIndex;
        	var cellMaskedittype = grid.getCellProperty("body", bodyCellIndex, "maskedittype");

        	if (type == "normal")
        	{
        		value = this.edt_filter.value;
        	}
        	else if (type == "number")
        	{
        		value = parseInt(this.edt_filter.value);
        	}
        	else if (type == "date")
        	{
        		value = this.cal_filter.value;
        	}

        	this.applyFilter(e.itemvalue, value, value);
        };

        /**
         * oncloseup Event Handler
         * @param {Calendar} obj Event가 발생한 Calendar Component
         * @param {CalendarCloseUpEventInfo} e CalendarCloseUpEventInfo
         */
        this.cal_filter_oncloseup = function (obj, e)
        {
        	if (e.prevalue != e.postvalue)
        	{
        		this.applyFilter(this.cmb_operater.value, e.postvalue, e.postvalue);
        	}
        };

        /**
         * oncloseup Event Handler
         * @param {PopupDiv} obj Event가 발생한 PopupDiv Component
         * @param {EventInfo} e EventInfo
         */
        this.pdiv_combo_oncloseup = function (obj, e)
        {
        	var value = [];
        	var cnt = this.ds_combo.rowcount;
        	var chk = 0;
        	var filterData = [];
        	for (var i = 0; i < cnt; i++)
        	{
        		if (this.ds_combo.getColumn(i, "chk") == 1)
        		{
        			chk += 1;
        			value.push(this.ds_combo.getColumn(i, "val"));
        		}
        		filterData.push(this.ds_combo.getColumn(i, "chk"));
        	}
        	if (chk == cnt)
        	{
        		value = [];
        	}

        	this.applyFilter("equal", value, filterData);
        };

        /**
         * 필터 적용
         * @param {string} operater 연산자
         * @param {string} value 비교값
         */
        this.applyFilter = function (operater, value, filterData)
        {
        	var grid = this.parent.grid;
        	var column = this.parent.filterColumn;
        	var headCellIndex = this.parent.headCellIndex;

        	var ds = this.gfn_Lookup(grid.parent, grid.binddataset);
        	var colType = ds.getColumnInfo(column).type;
        	var filterString = "";
        	var str = "";

        	// filter string 생성
        	if (!this.gfn_isNull(value))
        	{
        		//if (!this.gfn_IsArray(value))
        		if(Object.prototype.toString.call( value ) != '[object Array]')
        		{
        			value = [value];
        		}

        		var val;
        		for (var i = 0,len = value.length; i < len; i++)
        		{
        			val = value[i];
        			if (!this.gfn_isNull(operater))
        			{
        				if (!this.gfn_isNull(filterString))
        				{
        					filterString += " || ";
        				}
        				filterString += column;

        				switch (operater)
        				{
        					case 'equal':
        						str = "==" + (colType == "STRING" ? nexacro.wrapQuote(val) : val);
        						break;
        					case 'notEqual':
        						str = "!=" + (colType == "STRING" ? nexacro.wrapQuote(val) : val);
        						break;
        					case 'greaterThan':
        						str = ">" + (colType == "STRING" ? nexacro.wrapQuote(val) : val);
        						break;
        					case 'greaterThanOrEqual':
        						str = ">=" + (colType == "STRING" ? nexacro.wrapQuote(val) : val);
        						break;
        					case 'lessThan':
        						str = "<" + (colType == "STRING" ? nexacro.wrapQuote(val) : val);
        						break;
        					case 'lessThanOrEqual':
        						str = "<=" + (colType == "STRING" ? nexacro.wrapQuote(val) : val);
        						break;
        					case 'startWith':
        						str = ".toString().substr(0, " + val.length + ") == '" + val + "'";
        						break;
        					case 'endWith':
        						str = ".toString().substr(" + column + ".toString().length-" + val.length + ") == '" + val + "'";
        						break;
        					case 'contains':
        						str = ".toString().search('" + val + "') > -1";
        						break;
        				}

        				filterString += str;
        			}
        		}
        	}

        	// 필터 표시 이미지 변경
        	if (this.gfn_isNull(filterString))
        	{
        		this.btn_filter.set_background("url('"+this.FILTER_ENABLE_IMAGE_URL+"') no-repeat center center #f3f7f7");
        	}
        	else
        	{
        		filterString = "(" + filterString + ")";
        		this.btn_filter.set_background("url('"+this.FILTER_APPLY_IMAGE_URL+"') no-repeat center center #f3f7f7");
        	}

        	// 필터 실행
        	//	this.parent.parent.executeFilter(grid, headCellIndex, filterString, filterData);
        	this.executeFilter(grid, headCellIndex, filterString, filterData);
        };



        /**
         * 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
         * @public
         * @param {xpComp} p 찾을 대상
         * @param {string} name 찾을 대상 이름
         * @return {xpComp} 검색된 component, object
         * @example
         *
         * // this = Form
         * // Form 에 Button11 존재
         * trace(Base.XPComp.lookup(this, "Button11"));	// output : [object Button]
         *
         * // Button12 는 Div01 에 존재하지 않으나 Div01 의 상위 컴포넌트인 Form 에 존재
         * trace(Base.XPComp.lookup(Div01, "Button11"));	// output : [object Button]
         *
         * @memberOf Base.XPComp
         */
        this.gfn_Lookup = function (p, name)
        {
        	var o;
        	while (p)
        	{
        		o = p.components;
        		if (o && o[name])
        		{
        			return o[name];
        		}

        		o = p.objects;
        		if (o && o[name])
        		{
        			return o[name];
        		}

        		p = p.parent;
        	}
        	return null;
        };

        this.pdiv_combo_grd_combo_onheadclick = function(obj,e)
        {
        	if(e.col==0){
        		var iChkRp = this.ds_combo.findRow("chk","1");
        		var iChk;
        		if(iChkRp > -1){iChk="0";}
        		else{iChk="1";}
        		for(var i = 0 ; i < this.ds_combo.rowcount ; i++){
        			this.ds_combo.setColumn(i, "chk", iChk);
        		}
        	}
        };

        this.edt_filter_onkeyup = function(obj,e)
        {
        	//	this.dsList.filter("String(Column0).indexOf('" + obj.text + "') >= 0");

         	if(!this.gfn_isNull(obj.text))
         	{
        		var grid = this.parent.grid;
        		var column = this.parent.filterColumn;
        		var headCellIndex = this.parent.headCellIndex;
        		var filterStr = "String("+column+").indexOf('" + obj.text + "') >= 0"
        		var filterData = this.parent.filterData;
        		this.executeFilter(grid, headCellIndex, filterStr, filterData);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GridFilterDiv_onload,this);
            this.addEventHandler("onsize",this.GridFilterDiv_onsize,this);
            this.cmb_operater.addEventHandler("onitemclick",this.cmb_operater_onitemclick,this);
            this.pdiv_combo.addEventHandler("oncloseup",this.pdiv_combo_oncloseup,this);
            this.pdiv_combo.form.grd_combo.addEventHandler("onheadclick",this.pdiv_combo_grd_combo_onheadclick,this);
            this.cal_filter.addEventHandler("oncloseup",this.cal_filter_oncloseup,this);
            this.btn_filter.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.edt_filter.addEventHandler("onsetfocus",this.edt_filter_onsetfocus,this);
            this.edt_filter.addEventHandler("onkillfocus",this.edt_filter_onkillfocus,this);
            this.edt_filter.addEventHandler("onkeydown",this.edt_filter_onkeydown,this);
            this.edt_filter.addEventHandler("onkeyup",this.edt_filter_onkeyup,this);
        };

        this.loadIncludeScript("GridFilterDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
