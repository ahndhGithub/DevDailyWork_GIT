(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridFilterPop");
            this.set_titletext("New Form");
            this.getSetter("classname").set("GridFilterPop");
            if (Form == this.constructor)
            {
                this._setFormPosition(150,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_codeLogic", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">and</Col><Col id=\"nm\">그리고</Col></Row><Row><Col id=\"cd\">or</Col><Col id=\"nm\">또는</Col></Row></Rows>");
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


            obj = new Dataset("ds_default", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"logic\" type=\"STRING\" size=\"256\"/><Column id=\"operator\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


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
            
            // UI Components Initialize
            obj = new Grid("grd_filterItem","4","5",null,"139","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_combo");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.getSetter("useinputpanel").set("false");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"70\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"cursor: ;\"/><Cell col=\"1\" text=\"조건\"/><Cell col=\"2\" text=\"값\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:currow == 0 ? 'normal' : 'combo'\" edittype=\"expr:currow == 0 ?  'none' : 'combo'\" style=\"align:left middle;\" text=\"bind:logic\" combodataset=\"ds_codeLogic\" combocodecol=\"cd\" combodatacol=\"nm\" combodisplay=\"expr:currow == 0 ?  'edit' : 'display'\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left middle;\" text=\"bind:operator\" combodataset=\"ds_codeOperator\" combocodecol=\"cd\" combodatacol=\"nm\" combodisplayrowcount=\"10\" combodisplay=\"display\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:value\" editautoselect=\"true\" editdisplay=\"display\"/></Band></Format><Format id=\"combo\"><Columns><Column size=\"30\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:text\"/></Band></Format><Format id=\"date\"><Columns><Column size=\"60\"/><Column size=\"70\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"cursor: ;\"/><Cell col=\"1\" text=\"조건\"/><Cell col=\"2\" text=\"값\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:currow == 0 ? 'normal' : 'combo'\" edittype=\"expr:currow == 0 ?  'none' : 'combo'\" text=\"bind:logic\" combodataset=\"ds_codeLogic\" combocodecol=\"cd\" combodatacol=\"nm\" combodisplay=\"expr:currow == 0 ?  'edit' : 'display'\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:operator\" combodataset=\"ds_codeOperator\" combocodecol=\"cd\" combodatacol=\"nm\" combodisplayrowcount=\"10\" combodisplay=\"display\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:value\" editautoselect=\"true\" editdisplay=\"edit\" calendardisplay=\"display\" calendardisplaynulltype=\"nulltext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","31","74","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","75","74","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
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
        this.addIncludeScript("GridFilterPop.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("GridFilterPop.xfdl", function() {
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;
        /*
         * 그리드 헤드 마우스 오버 필터 기능에서 사용되는 팝업화면
        */
        /**
         * 필터 정보를 화면에 표시
         * @param {string} filterType 필터 type
         * @param {array} filterInfo 필터 정보값
         */
        this.setFilterInfo = function(filterType, filterInfo)
        {
        	//	trace("this.parent.name--->"+this.parent.name);
        	this.gfn_getParentForm();
        //								trace("this.oFrmParnt ---->"+this.oFrmParnt.name);
        //								trace("this.oDivParnt ---->"+this.oDivParnt.name);
        // 								trace("this.oTargetGrid ---->"+this.oTargetGrid.name);
        // 								trace("this.oTargetDs ---->"+this.oTargetDs.name);
        // 								trace("this.sInitCompVisEna ---->"+this.sInitCompVisEna);

        	this.ds_codeOperator.filter("");

        	var info, row;

        	// 필터정보가 있다면 표시하고 아니면 기본값 지정
        	if ( filterType == "combo" )
        	{
        		//	var grid = Eco.XComp.getUserProperty(this, "grid");
        		var grid = Eco.XComp.getUserProperty(this.parent, "grid");
        		var headCellIndex = Eco.XComp.getUserProperty(this.parent, "filterHeadCellIndex");
        		var bodyCellIndex = this.oFrmParnt.getBodyCellIndex(grid, headCellIndex);
        		var dsName = grid.getCellProperty("body", bodyCellIndex, "combodataset");
        		var ds = Eco.XComp.lookup(grid.parent, dsName);
        		var code = grid.getCellProperty("body", bodyCellIndex, "combocodecol");
        		var data = grid.getCellProperty("body", bodyCellIndex, "combodatacol");

        		// 콤보 목록 생성
        		this.ds_combo.set_enableevent(false);
        		this.ds_combo.deleteAll();

        		for (var i=0,len=ds.rowcount; i<len; i++)
        		{
        			this.ds_combo.addRow();
        			this.ds_combo.setColumn(i, "chk", 0);
        			this.ds_combo.setColumn(i, "text", ds.getColumn(i, data));
        			this.ds_combo.setColumn(i, "val", ds.getColumn(i, code));
        		}
        		this.ds_combo.set_rowposition(-1);

        		// 필터 정보 지정
        		if ( !Eco.isEmpty(filterInfo) )
        		{
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
        		this.ds_combo.set_enableevent(true);

        		this.grd_filterItem.set_formatid("combo");
        		this.grd_filterItem.set_binddataset("ds_combo");

        		this.btn_add.set_visible(false);
        		this.btn_delete.set_visible(false);
        	}
        	else
        	{
        		if ( filterType == "date" || filterType == "number" )
        		{
        			this.ds_codeOperator.filter("group != 'String'");
        		}

        		this.ds_default.set_enableevent(false);
        		this.ds_default.deleteAll();

        		if ( Eco.isEmpty(filterInfo) )
        		{
        			row = this.ds_default.addRow();
        			this.ds_default.setColumn(row, "logic", "");
        			this.ds_default.setColumn(row, "operator", "equal");
        			this.ds_default.setColumn(row, "value", "");
        		}
        		else
        		{
        			for (var i=0,len=filterInfo.length; i<len; i++)
        			{
        				info = filterInfo[i];
        				row = this.ds_default.addRow();
        				this.ds_default.setColumn(row, "logic", info.logic);
        				this.ds_default.setColumn(row, "operator", info.operator);
        				this.ds_default.setColumn(row, "value", info.value);
        			}
        		}
        		this.ds_default.set_enableevent(true);

        		if ( filterType == "date" )
        		{
        			this.grd_filterItem.set_formatid("date");
        		}
        		else
        		{
        			this.grd_filterItem.set_formatid("default");
        		}

        		this.grd_filterItem.set_binddataset("ds_default");

        		this.btn_add.move(191, 146);
        		this.btn_delete.move(235, 146);

        		this.btn_add.set_visible(true);
        		this.btn_delete.set_visible(true);

        		this.grd_filterItem.setCellPos(1);
        	}
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
         * oncolumnchanged event handler
         * @param {Dataset} obj 이벤트가 발생한 Dataset
         * @param {DSColChangeEventInfo} e DSColChangeEventInfo
         */
        this.ds_default_oncolumnchanged = function(obj, e)
        {
        	this.applyNormalFilter(obj);
        }

        /**
         * onclick event handler - 필터 조건 추가
         * @param {Button} obj 이벤트가 발생한 Button
         * @param {ClickEventInfo} e ClickEventInfo
         */
        this.btn_add_onclick = function(obj,  e)
        {
        	if ( obj.formatid != "combo" )
        	{
        		var ds = this.objects[this.grd_filterItem.binddataset];
        		ds.set_enableevent(false);
        		var row = ds.addRow();
        		if ( row == 0 )
        		{
        			ds.setColumn(row, "logic", "");
        		}
        		else
        		{
        			ds.setColumn(row, "logic", "and");
        		}
        		ds.setColumn(row, "operator", "equal");
        		ds.setColumn(row, "value", "");
        		ds.set_enableevent(true);
        	}
        }

        /**
         * onclick event handler - 필터 조건 삭제
         * @param {Button} obj 이벤트가 발생한 Button
         * @param {ClickEventInfo} e ClickEventInfo
         */
        this.btn_delete_onclick = function(obj,  e)
        {
        	if ( obj.formatid != "combo" )
        	{
        		var ds = this.objects[this.grd_filterItem.binddataset];

        		// 첫번째 행은 삭제하지 않음.
        		if ( ds.rowposition == 0 ) return;

        		ds.set_enableevent(false);
        		ds.deleteRow(ds.rowposition);
        		ds.set_enableevent(true);

        		this.applyNormalFilter(ds);
        	}
        }

        /**
         * combo type 필터 적용
         * @param {Dataset} 필터 항목 Dataset
         */
        this.applyComboFilter = function(ds)
        {
        	//var grid = Eco.XComp.getUserProperty(this, "grid");
        	var grid = Eco.XComp.getUserProperty(this.parent, "grid");
        	var columnName = Eco.XComp.getUserProperty(this.parent, "filterColumnName");

        	// 선택된 데이터가 없거나 전체 선택일 경우 필터 정보 제거
        	var chkCount = ds.getCaseCount("chk==1");
        	if ( chkCount == 0 || ds.rowcount == chkCount )
        	{
        		this.oFrmParnt.removeFilterInfo(grid, columnName);
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

        		// 필터 정보 지정
        		this.oFrmParnt.setFilterInfo(grid, columnName, infos);
        	}

        	// 필터 실행
        	//	this.parent.executeFilter(grid);
        	this.oFrmParnt.executeFilter(grid);
        }

        /**
         * combo type 을 제외한 필터 적용
         * @param {Dataset} 필터 항목 Dataset
         */
        this.applyNormalFilter = function(ds)
        {
        	var grid = Eco.XComp.getUserProperty(this.parent, "grid");
        	var columnName = Eco.XComp.getUserProperty(this.parent, "filterColumnName");	trace("columnName---->"+columnName);

        	// 필터 정보 생성
        	var info;
        	var infos = [];
        	var logic, operator, value;

        	for (var i=0,len=ds.rowcount; i<len; i++)
        	{
        		logic = ds.getColumn(i, "logic");
        		operator = ds.getColumn(i, "operator");
        		value = ds.getColumn(i, "value");

        		if ( i > 0 && Eco.isEmpty(logic) ) continue;
        		if ( Eco.isEmpty(operator) || Eco.isEmpty(value) ) continue;

        		info = {
        			'logic': logic,
        			'operator': operator,
        			'value': value
        		};

        		infos.push(info);
        	}

        	if ( infos.length == 0 )
        	{
        		// 필터 제거
        		this.oFrmParnt.removeFilterInfo(grid, columnName);
        	}
        	else
        	{
        		// 필터 지정
        		this.oFrmParnt.setFilterInfo(grid, columnName, infos);
        	}

        	// 필터 실행
        	//	this.parent.form.executeFilter(grid);
        	this.oFrmParnt.executeFilter(grid);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_filterItem.addEventHandler("onheadclick",this.grd_filterItem_onheadclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.ds_combo.addEventHandler("oncolumnchanged",this.ds_combo_oncolumnchanged,this);
            this.ds_default.addEventHandler("oncolumnchanged",this.ds_default_oncolumnchanged,this);
        };

        this.loadIncludeScript("GridFilterPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
