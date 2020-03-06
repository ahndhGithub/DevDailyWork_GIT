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
            this.getSetter("classname").set("GridFilterDiv");
            if (Form == this.constructor)
            {
                this._setFormPosition(100,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_codeOperator", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"group\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\"/><Col id=\"nm\">없음</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">equal</Col><Col id=\"nm\">=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">notEqual</Col><Col id=\"nm\">&lt;&gt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">greaterThan</Col><Col id=\"nm\">&gt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">greaterThanOrEqual</Col><Col id=\"nm\">&gt;=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">lessThan</Col><Col id=\"nm\">&lt;</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">lessThanOrEqual</Col><Col id=\"nm\">&lt;=</Col><Col id=\"group\">All</Col></Row><Row><Col id=\"cd\">startWith</Col><Col id=\"nm\">시작문자</Col><Col id=\"group\">String</Col></Row><Row><Col id=\"cd\">endWith</Col><Col id=\"nm\">종료문자</Col><Col id=\"group\">String</Col></Row><Row><Col id=\"cd\">contains</Col><Col id=\"nm\">포함</Col><Col id=\"group\">String</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"val\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cmb_operator","0","62","95","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            obj.set_innerdataset("ds_codeOperator");
            obj.set_codecolumn("cd");
            obj.set_datacolumn("nm");
            obj.set_text("=");
            obj.set_value("equal");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_filter","1","15","76","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_combo","2","131","150","120",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.getSetter("scrollbars").set("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_combo","0","0","150","120",null,null,null,null,null,null,this.pdiv_combo.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_combo");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.getSetter("useinputpanel").set("false");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:text\"/></Band></Format></Formats>");
            this.pdiv_combo.addChild(obj.name, obj);

            obj = new Calendar("cal_filter","0","90","94","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_filter","79","15","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","3","40","17",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button00");
            obj.set_visible("false");
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
        this.addIncludeScript("GridFilterDiv_EcoBackup.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("GridFilterDiv_EcoBackup.xfdl", function() {
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        /*
         * 그리드 헤드 영역 추가 필터 기능에서 필터 영역에 사용될 화면
        */

        var pForm = null;

        /**
         * Form onload event handler - 로드시 초기 지정
         * @param {Form} obj 대상 Form Component
         * @param {LoadEventInfo} e LoadEventInfo
         */
        this.GridFilterDiv_onload = function(obj, e)
        {
        	pForm = Eco.XComp.getScriptForm(this.parent);

        	var imageSize = pForm.FILTER_ENABLE_IMAGE_SIZE;		//	trace("imageSize--->"+imageSize);

        	this.img_filter.resize(imageSize[0], imageSize[1]);
        	this.img_filter.set_border("0px none #ffffff");
        	this.img_filter.set_background("transparent URL('"+ pForm.FILTER_ENABLE_IMAGE_URL+"') center middle");

        	this.cmb_operator.set_border("0px none #ffffff");
        	this.cmb_operator.set_background("transparent");

        	this.resizeComps(obj.getOffsetWidth(), obj.getOffsetHeight());
        }

        /**
         * Form onsetfocus event handler
         * @param {Form} obj 대상 Form Component
         * @param {SetFocusEventInfo} e SetFocusEventInfo
         */
        this.GridFilterDiv_onsetfocus = function(obj, e)
        {
        	// 현재 포커스 정보를 그리드에 지정하여
        	// arrangeAppendFilterComps 후 포커스 지정을 위함.
         	var grid = Eco.XComp.getUserProperty(this.parent, "grid");	trace("grid--->"+grid);

         	Eco.XComp.setUserProperty(grid, "currentFocusDiv", this);
        }

        /**
         * Form onsize event handler - 사이즈 변경 시 컴포넌트 위치조정
         * @param {Form} obj 대상 Form Component
         * @param {SizeEventInfo} e SizeEventInfo
         */
        this.GridFilterDiv_onsize = function(obj, e)
        {
        	this.resizeComps(e.cx, e.cy);
        }

        /**
         * 컴포넌트 위치 조정
         * @param {number} formW Form Width
         * @param {number} formH Form Height
         */
        this.resizeComps = function(formW, formH)
        {
        	var l, t, w, h, gap = 2;
        	var imageSize = pForm.FILTER_ENABLE_IMAGE_SIZE;

        	l = gap;
        	t = gap;
        	w = formW - (gap * 2) - imageSize[0];
        	h = formH - (gap * 2);

        	this.edt_filter.move(l, t, w, h);
        	this.cal_filter.move(l, t, w, h);

        	l = l + w + gap;
        	t = Math.round((formH- imageSize[1])/2);

        	this.img_filter.move(l, t);

        	l = this.img_filter.getOffsetLeft();
        	t = this.img_filter.getOffsetTop();
        	w = this.img_filter.getOffsetWidth();
        	h = this.img_filter.getOffsetHeight();

        	this.cmb_operator.move(l+2, t+2, w-4, h-4);
        	this.cmb_operator.moveToNext(this.img_filter);
        }

        /**
         * 컴포넌트 내용 초기화
         */
        this.initValue = function()
        {
        	this.edt_filter.set_value("");
        	this.img_filter.set_border("0px none #ffffff");
        	this.img_filter.set_background("transparent URL('"+pForm.FILTER_ENABLE_IMAGE_URL+"') center middle");
        	this.cmb_operator.set_index(1);
        	this.cal_filter.set_value("");
        }

        /**
         * 필터 정보를 화면에 표시
         */
        this.setFilterInfo = function()
        {
        	//	trace("this.parent.name--->"+this.parent.name);
        	this.gfn_getParentForm();
        //								trace("this.oFrmParnt ---->"+this.oFrmParnt.name);
        //								trace("this.oDivParnt ---->"+this.oDivParnt.name);
        // 								trace("this.oTargetGrid ---->"+this.oTargetGrid.name);
        // 								trace("this.oTargetDs ---->"+this.oTargetDs.name);
        // 								trace("this.sInitCompVisEna ---->"+this.sInitCompVisEna);

        	//	var grid = Eco.XComp.getUserProperty(this, "grid");
        	var grid = Eco.XComp.getUserProperty(this.parent, "grid");						//	trace("grid--->"+grid);
        	var type = Eco.XComp.getUserProperty(this.parent, "displayType");				//	trace("type--->"+type);
        	var columnName = Eco.XComp.getUserProperty(this.parent, "filterColumnName");	//	trace("columnName--->"+columnName);
        	var filterInfo = Eco.XComp.getUserProperty(this.parent, "filterInfo");			//	trace("filterInfo--->"+filterInfo);


        	// 필터 표시 이미지 변경
        	this.setFilterImage(filterInfo);

        	var refCell = Eco.XComp.getUserProperty(this.parent, "refCell");
        	var headCellIndex = pForm.getCellObjectIndex(refCell);
        	var bodyCellIndex = pForm.getBodyCellIndex(grid, headCellIndex);

        	if ( type == "combocontrol" )
        	{
        		this.edt_filter.set_visible(false);
        		this.cal_filter.set_visible(false);

        		var dsName = grid.getCellProperty("body", bodyCellIndex, "combodataset");			//	trace("dsName--->"+dsName);
        		//var ds = Eco.XComp.lookup(grid.parent, dsName);
        		var ds = Eco.XComp.lookup(this.oFrmParnt, dsName);	//	trace("ds.name--->"+ds.name);
        		var codeColumn = grid.getCellProperty("body", bodyCellIndex, "combocodecol");	//	trace("codeColumn--->"+codeColumn);
        		var dataColumn = grid.getCellProperty("body", bodyCellIndex, "combodatacol");	//	trace("dataColumn--->"+dataColumn);

        		this.ds_combo.set_enableevent(false);
        		this.ds_combo.deleteAll();

        		// 콤보 목록 생성
        		for (var i=0,len=ds.rowcount; i<len; i++)
        		{
        			this.ds_combo.addRow();
        			this.ds_combo.setColumn(i, "chk", 0);
        			this.ds_combo.setColumn(i, "text", ds.getColumn(i, dataColumn));
        			this.ds_combo.setColumn(i, "val", ds.getColumn(i, codeColumn));
        		}
        		this.ds_combo.set_rowposition(-1);

        		// 필터 정보 지정
        		if ( !Eco.isEmpty(filterInfo) )
        		{
        			var row, info;
        			for (var i=0,len=filterInfo.length; i<len; i++)
        			{
        				info = filterInfo[i];
        				row = this.ds_combo.findRow("val", info.value);
        				if ( row > -1 )
        				{
        					this.ds_combo.setColumn(row, "chk", 1);
        				}
        			}
        		}

        		this.ds_combo.set_enableevent(true);			//	trace(this.ds_combo.saveXML());
        	}
        	else if ( type == "date" )
        	{
        		this.edt_filter.set_visible(false);
        		this.cal_filter.set_visible(true);

        		if ( !Eco.isEmpty(filterInfo) )
        		{
        			var val = filterInfo[0].value;
        			if ( !Eco.isEmpty(val) )
        			{
        				this.cal_filter.set_value(val);
        			}

        			this.setOperator(filterInfo[0].operator);
        		}
        	}
        	else if ( type == "number" )
        	{
        		this.edt_filter.set_visible(true);
        		this.cal_filter.set_visible(false);
        		this.edt_filter.set_inputtype("number");

        		if ( !Eco.isEmpty(filterInfo) )
        		{
        			var val = filterInfo[0].value;
        			if ( !Eco.isEmpty(val) )
        			{
        				this.edt_filter.set_value(val);
        			}

        			this.setOperator(filterInfo[0].operator);
        		}
        	}
        	else
        	{
        		this.edt_filter.set_visible(true);
        		this.cal_filter.set_visible(false);
        		this.edt_filter.set_inputtype("normal");

        		if ( !Eco.isEmpty(filterInfo) )
        		{
        			var val = filterInfo[0].value;
        			if ( !Eco.isEmpty(val) )
        			{
        				this.edt_filter.set_value(val);
        			}

        			this.setOperator(filterInfo[0].operator);
        		}
        	}
        }

        /**
         * 연산자 콤보 index 지정
         * @param {string} operator 연산자
         */
        this.setOperator = function(operator)
        {
        	var row = this.ds_codeOperator.findRow("cd", operator);
        	if ( row > -1 )
        	{
        		this.cmb_operator.set_index(row);
        	}
        }

        /**
         * 필터 이미지 지정
         * @param {array} infos 필터 정보
         */
        this.setFilterImage = function(infos)
        {
        	var bg = "transparent URL('";
        	if ( Eco.isEmpty(infos) )
        	{
        		bg += pForm.FILTER_ENABLE_IMAGE_URL;
        	}
        	else
        	{
        		bg += pForm.FILTER_APPLY_IMAGE_URL;
        	}
        	bg += "') center middle";

        	this.img_filter.set_background(bg);
        }

        /**
         * oncolumnchanged event handler
         * @param {Dataset} obj 이벤트가 발생한 Dataset
         * @param {DSColChangeEventInfo} e DSColChangeEventInfo
         */
        this.ds_combo_oncolumnchanged = function(obj, e)
        {
        	this.applyComboFilter(obj);
        }

        /**
         * onkeydown Event Handler
         * @param {Edit} obj Event가 발생한 Edit Component
         * @param {KeyEventInfo} e KeyEventInfo
         */
        this.edt_filter_onkeydown = function(obj, e)
        {
        	if ( e.keycode == 13 )
        	{
        		this.applyNormalFilter(this.cmb_operator.value, obj.value);
        	}
        }

        /**
         * onsetfocus Event Handler
         * @param {Edit} obj Event가 발생한 Edit Component
         * @param {SetFocusEventInfo} e SetFocusEventInfo
         */
        this.edt_filter_onsetfocus = function(obj, e)
        {
        	Eco.XComp.setUserProperty(obj, "focusValue", obj.value);
        }

        /**
         * onkillfocus Event Handler
         * @param {Edit} obj Event가 발생한 Edit Component
         * @param {KillFocusEventInfo} e KillFocusEventInfo
         */
        this.edt_filter_onkillfocus = function(obj, e)
        {
        	if ( Eco.XComp.getUserProperty(obj, "focusValue") != obj.value )
        	{
        		this.applyNormalFilter(this.cmb_operator.value, obj.value);
        	}
        }

        /**
         * onclick Event Handler
         * @param {ImageViewer} obj Event가 발생한 ImageViewer Component
         * @param {ClickEventInfo} e ClickEventInfo
         */
        this.img_filter_onclick = function(obj,  e)
        {
        	var grid = Eco.XComp.getUserProperty(this.parent, "grid");
        	var type = Eco.XComp.getUserProperty(this.parent, "displayType");

        	if ( type == "normal" )
        	{
        		this.ds_codeOperator.filter("");
        		this.cmb_operator.dropdown();
        	}
        	else if ( type == "number" || type == "date" )
        	{
        		this.ds_codeOperator.filter("group != 'String'");
        		this.cmb_operator.dropdown();
        	}
        	else if ( type == "combocontrol" )
        	{
        		// 팝업 호출
        		this.pdiv_combo.trackPopupByComponent(obj, 0, obj.getOffsetHeight());
        	}
        }

        /**
         * onitemclick Event Handler
         * @param {Combo} obj Event가 발생한 Combo Component
         * @param {ListBoxClickEventInfo} e ListBoxClickEventInfo
         */
        this.cmb_operator_onitemchanged = function(obj, e)
        {
        	var value;
        	var type = Eco.XComp.getUserProperty(this.parent, "displayType");

        	if ( type == "normal")
        	{
        		value = this.edt_filter.value;
        	}
        	else if ( type == "number")
        	{
        		value = parseInt(this.edt_filter.value);
        	}
        	else if ( type == "date")
        	{
        		value = this.cal_filter.value;
        	}

        	this.applyNormalFilter(e.postvalue, value);
        }

        /**
         * onkeydown Event Handler
         * @param {Calendar} obj Event가 발생한 Calendar Component
         * @param {KeyEventInfo} e KeyEventInfo
         */
        this.cal_filter_onkeydown = function(obj, e)
        {
        	if ( e.keycode == 13 )
        	{
        		this.applyNormalFilter(this.cmb_operator.value, obj.value);
        	}
        }

        /**
         * onsetfocus Event Handler
         * @param {Edit} obj Event가 발생한 Calendar Component
         * @param {SetFocusEventInfo} e SetFocusEventInfo
         */
        this.cal_filter_onsetfocus = function(obj, e)
        {
        	Eco.XComp.setUserProperty(obj, "focusValue", obj.value);
        }

        /**
         * onkillfocus Event Handler
         * @param {Edit} obj Event가 발생한 Calendar Component
         * @param {KillFocusEventInfo} e KillFocusEventInfo
         */
        this.cal_filter_onkillfocus = function(obj, e)
        {
        	if ( Eco.XComp.getUserProperty(obj, "focusValue") != obj.value )
        	{
        		this.applyNormalFilter(this.cmb_operator.value, obj.value);
        	}
        }

        /**
         * oncloseup Event Handler
         * @param {Calendar} obj Event가 발생한 Calendar Component
         * @param {CalendarCloseUpEventInfo} e CalendarCloseUpEventInfo
         */
        this.cal_filter_oncloseup = function(obj, e)
        {
        	if ( e.prevalue != e.postvalue )
        	{
        		this.applyNormalFilter(this.cmb_operator.value, e.postvalue);
        	}
        }

        /**
         * Combo type 필터 적용
         * @param {Dataset} 필터 항목 Dataset
         */
        this.applyComboFilter = function(ds)
        {
        	var grid = Eco.XComp.getUserProperty(this.parent, "grid");
        	var columnName = Eco.XComp.getUserProperty(this.parent, "filterColumnName");	trace("columnName--->"+columnName);

        	// 선택된 데이터가 없거나 전체 선택일 경우 필터 정보 제거
        	var ds = this.ds_combo;
        	var chkCount = ds.getCaseCount("chk==1");
        	if ( chkCount == 0 || ds.rowcount == chkCount )
        	{
        		pForm.removeFilterInfo(grid, columnName);
        	}
        	else
        	{
        		// 필터 정보 생성
        		var info;
        		var infos = [];
        		for (var i=0,len=ds.rowcount; i<len; i++)
        		{
        			if ( ds.getColumn(i, "chk") == 1 )
        			{
        				info = {};

        				if ( infos.length == 0 )
        				{
        					info.logic = "";
        				}
        				else
        				{
        					info.logic = "or";
        				}

        				info.operator = "equal";
        				info.value = ds.getColumn(i, "val");

        				infos.push(info);
        			}
        		}
        // 									trace("grid--->"+grid.name);
        // 									trace("columnName--->"+columnName);
        // 									trace("infos--->"+infos[0].value);
        		// 필터 정보 지정
        		pForm.setFilterInfo(grid, columnName, infos);
        	}

        	var visible = grid.vscrollbar ? grid.vscrollbar.visible : false;

        	// 필터 실행
        	pForm.executeFilter(grid);

        	var visible2 = grid.vscrollbar ? grid.vscrollbar.visible : false;

        	// vscrolbar 의 변화가 있다면 컴포넌트 재정렬
        	if ( visible != visible2 )
        	{
        		pForm.arrangeAppendFilterComps(grid);
        	}

        	// 필터 표시 이미지 변경
        	this.setFilterImage(infos);
        }

        /**
         * combo type 을 제외한 필터 적용
         * @param {string} operator 연산자
         * @param {*} value 피연산자
         */
        this.applyNormalFilter = function(operator, value)
        {
        	var grid = Eco.XComp.getUserProperty(this.parent, "grid");
        	var columnName = Eco.XComp.getUserProperty(this.parent, "filterColumnName");

        	var infos = [];

        	if ( Eco.isEmpty(operator) )
        	{
        		// 필터 정보 제거
        		pForm.removeFilterInfo(grid, columnName);
        	}
        	else
        	{
        		infos.push({
        			'logic': "",
        			'operator': operator,
        			'value': value
        		});

        		// 필터 정보 지정
        			pForm.setFilterInfo(grid, columnName, infos);
        	}

        	var visible = grid.vscrollbar ? grid.vscrollbar.visible : false;

        	// 필터 실행
        	pForm.executeFilter(grid);

        	var visible2 = grid.vscrollbar ? grid.vscrollbar.visible : false;

        	// vscrolbar 의 변화가 있다면 컴포넌트 재정렬
        	if ( visible != visible2 )
        	{
        		pForm.arrangeAppendFilterComps(grid);
        	}

        	// 필터 표시 이미지 변경
        	this.setFilterImage(infos);
        }
        // this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	//	this.oFrmParnt.form.setFilterInfo();
        // 	this.oFrmParnt.setFilterInfo();
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GridFilterDiv_onload,this);
            this.addEventHandler("onsize",this.GridFilterDiv_onsize,this);
            this.addEventHandler("onsetfocus",this.GridFilterDiv_onsetfocus,this);
            this.cmb_operator.addEventHandler("onitemchanged",this.cmb_operator_onitemchanged,this);
            this.edt_filter.addEventHandler("onsetfocus",this.edt_filter_onsetfocus,this);
            this.edt_filter.addEventHandler("onkillfocus",this.edt_filter_onkillfocus,this);
            this.edt_filter.addEventHandler("onkeydown",this.edt_filter_onkeydown,this);
            this.cal_filter.addEventHandler("oncloseup",this.cal_filter_oncloseup,this);
            this.cal_filter.addEventHandler("onkeydown",this.cal_filter_onkeydown,this);
            this.cal_filter.addEventHandler("onsetfocus",this.cal_filter_onsetfocus,this);
            this.cal_filter.addEventHandler("onkillfocus",this.cal_filter_onkillfocus,this);
            this.img_filter.addEventHandler("onclick",this.img_filter_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.ds_combo.addEventHandler("oncolumnchanged",this.ds_combo_oncolumnchanged,this);
        };

        this.loadIncludeScript("GridFilterDiv_EcoBackup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
