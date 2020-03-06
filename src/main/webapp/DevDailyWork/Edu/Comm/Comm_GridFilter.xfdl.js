(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_GridFilter");
            this.set_titletext("그리드필터");
            if (Form == this.constructor)
            {
                this._setFormPosition(470,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_filterType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row><Col id=\"code\">=</Col><Col id=\"name\">같은</Col></Row><Row><Col id=\"code\">&gt;</Col><Col id=\"name\">보다 큰</Col></Row><Row><Col id=\"code\">&lt;</Col><Col id=\"name\">보다 작은</Col></Row><Row><Col id=\"code\">!=</Col><Col id=\"name\">같지않는</Col></Row><Row><Col id=\"code\">like</Col><Col id=\"name\">포함하는</Col></Row><Row><Col id=\"code\">nolike</Col><Col id=\"name\">포함하지 않는</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_filter", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"filtertype\" type=\"STRING\" size=\"256\"/><Column id=\"columid\" type=\"STRING\" size=\"256\"/><Column id=\"filtervalue\" type=\"STRING\" size=\"256\"/><Column id=\"displaytype\" type=\"STRING\" size=\"256\"/><Column id=\"combocodecol\" type=\"STRING\" size=\"256\"/><Column id=\"combodatacol\" type=\"STRING\" size=\"256\"/><Column id=\"combodataset\" type=\"STRING\" size=\"256\"/><Column id=\"col\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"col\" type=\"INT\" size=\"256\"/><Column id=\"body\" type=\"STRING\" size=\"256\"/><Column id=\"filtertype\" type=\"STRING\" size=\"256\"/><Column id=\"displaytype\" type=\"STRING\" size=\"256\"/><Column id=\"edittype\" type=\"STRING\" size=\"256\"/><Column id=\"combodatacol\" type=\"STRING\" size=\"256\"/><Column id=\"combocodecol\" type=\"STRING\" size=\"256\"/><Column id=\"combodataset\" type=\"STRING\" size=\"256\"/><Column id=\"filtervalue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","20","45","430","158",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_filter");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!sort,!rowfix,!colfix,!filter,!initial");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"143\"/><Column size=\"109\"/><Column size=\"179\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"컬럼명\" expandchar=\"popup.columnname\"/><Cell col=\"1\" text=\"필터기준\" expandchar=\"popup.filtercriteria\"/><Cell col=\"2\" text=\"찾을조건\" expandchar=\"popup.findcondition\"/></Band><Band id=\"body\"><Cell text=\"bind:title\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_filterType\" combodatacol=\"name\" combocodecol=\"code\" text=\"bind:filtertype\"/><Cell col=\"2\" text=\"bind:filtervalue\" displaytype=\"normal\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","334","20","66","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("필터취소");
            obj.getSetter("uWord").set("popup.cancel");
            obj.set_cssclass("btn_WF_detail");
            this.addChild(obj.name, obj);

            obj = new Button("btn_up","409","20","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("▲");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_padding("0px");
            obj.set_border("0px none");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down","431","20","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("▼");
            obj.set_padding("0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_filter","325","222","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("적용");
            obj.getSetter("uWord").set("popup.apply");
            obj.set_cssclass("btn_WF_pop1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","390","222","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.close");
            obj.set_cssclass("btn_WF_pop2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n20");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n20");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","0","202",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h5");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","0","40",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",470,270,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comm_GridFilter.xfdl", function() {
        /**
           그리드 필터를 수행할 공통팝업
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

        	this.fv_targetGrid = this.getOwnerFrame().pvGrid;
        	this.fv_targetDataset = this.fv_targetGrid.getBindDataset();

        	var bUserHeader = this._gfnGridUserHeaderFlg(this.fv_targetGrid);
        	if( !bUserHeader) {
        		this.fn_getHeadText(this.fv_targetGrid);
        	}else{
        		this.fn_getUserHeader(this.fv_targetGrid);
        	}
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
         * @description 그리드의 헤드정보를 받아와 콤보 세팅(userHeader prop 사용)
        */
        this.fn_getUserHeader = function (objGrid)
        {
        	var nheadcnt = objGrid.getCellCount("head");
        	for( var i=0; i<nheadcnt; i++){
        		var bindcol = objGrid.getCellProperty("head", i, "calendarweekformat");
        		if( this.gfn_isNull(bindcol)) continue;

        		for( var j=0; j<objGrid.getCellCount("body"); j++)
        		{
        			var nCell =0;
        			if( bindcol == objGrid.getCellProperty("body", j,"text")){
        				nCell = j;
        				var columname = objGrid.getCellProperty("body", nCell, "text");
        				var nRow = this.ds_temp.addRow();
        				var displaytype = objGrid.getCellProperty("body", nCell, "displaytype");

        				if( displaytype == "combotext" || displaytype == "combocontrol"){
        					displaytype = "combo";
        					columname = objGrid.getCellProperty("body", nCell, "text").substring(5);
        					this.fv_targetDataset.set_enableevent(false);
        					this.fv_targetDataset.set_updatecontrol(false);
        					this.fv_targetDataset.addColumn(columname+"_text");
        					for(var n=0; n<this.fv_targetDataset.getRowCount(); n++)
        					{
        						this.fv_targetDataset.setColumn(n, columname+"_text", this.fv_targetGrid.getCellText(n, j));
        					}
        					this.fv_targetDataset.set_enableevent(true);
        					this.fv_targetDataset.set_updatecontrol(true);
        					trace("columname :: " + columname);
        					this.ds_temp.setColumn(nRow, "body", "bind:"+columname+"_text");
        				}else{
        					this.ds_temp.setColumn(nRow, "body", columname);
        				}
        				this.ds_temp.setColumn(nRow, "col", j);
        				this.ds_temp.setColumn(nRow, "displaytype",  displaytype);
        				this.ds_temp.setColumn(nRow, "combocodecol", objGrid.getCellProperty("body", j, "combocodecol"));
        				this.ds_temp.setColumn(nRow, "combodatacol", objGrid.getCellProperty("body", j, "combodatacol"));
        				this.ds_temp.setColumn(nRow, "combodataset", objGrid.getCellProperty("body", j, "combodataset"));
        				this.ds_temp.setColumn(nRow, "title", objGrid.getCellProperty("head", i, "text"));
        			}
        		}
        	}
        	this.fn_filterSetup();
        };

        /**
         * @description 그리드의 헤드정보를 받아와 콤보 세팅(defualt)
        */
        this.fn_getHeadText = function (objGrid)
        {
        	// 바디의 갯수만큼 디스플레이정보 및 콤보의 정보를 설정한다.
            for(var i=0;i<objGrid.getCellCount("Body");i++)
            {
                if( objGrid.getCellProperty("Body", i, "displaytype") != "image" )
                {
        			var sText = objGrid.getCellProperty("Body", i, "text");
        			if( sText == "bind:gridcmmcheck") continue; //공통체크박스 제외
        			var sBind;
        			if ( this.gfn_isNull(sText) == false ){
        				sBind = sText.substr(0, 5);
        			}else {
        				sBind = "";
        			}

        			if (sBind == "bind:")
        			{
        				var nrow = this.ds_temp.addRow();

        				var displaytype = "text";
        				if( objGrid.getCellProperty("Body", i, "displaytype") == "combotext" ||objGrid.getCellProperty("Body", i, "displaytype") == "combocontrol")
        				{
        					displaytype = "combo";

        					// 콤보의 경우는 TEXT로 필터링이 되질않기 때문에 해당 _text 를 동적으로 생성해서 그 값을 이용하도록 한다.
        					var columname = objGrid.getCellProperty("Body", i, "text").substring(5);
        					if( this.gfn_isNull(this.fv_targetDataset.getColumnInfo(columname+"_text")) )
        					{
        						this.fv_targetDataset.set_enableevent(false);
        						this.fv_targetDataset.set_updatecontrol(false);
        						this.fv_targetDataset.addColumn(columname+"_text");
        						for(var j=0;j<this.fv_targetDataset.getRowCount();j++)
        						{
        							this.fv_targetDataset.setColumn(j, columname+"_text", this.fv_targetGrid.getCellText(j, i));
        						}
        						this.fv_targetDataset.set_enableevent(true);
        						this.fv_targetDataset.set_updatecontrol(true);
        					}

        					this.ds_temp.setColumn(nrow, "body", "bind:"+columname+"_text");
        				}
        				else
        				{
        					this.ds_temp.setColumn(nrow, "body", objGrid.getCellProperty("Body", i, "text"));
        				}

        				this.ds_temp.setColumn(nrow, "col", i);
        				this.ds_temp.setColumn(nrow, "displaytype",  displaytype);
        				this.ds_temp.setColumn(nrow, "combocodecol", objGrid.getCellProperty("Body", i, "combocodecol"));
        				this.ds_temp.setColumn(nrow, "combodatacol", objGrid.getCellProperty("Body", i, "combodatacol"));
        				this.ds_temp.setColumn(nrow, "combodataset", objGrid.getCellProperty("Body", i, "combodataset"));
        			}
                }
            }
        	// 바디에 매칭되는 헤더의 타이틀을 설정한다.
            for(var i=0; i<objGrid.getCellCount("Head");i++)
            {
                var title  = objGrid.getCellProperty("Head", i,   "text");
                var col    = objGrid.getCellProperty("Head", i,   "col");
                var body   = objGrid.getCellProperty("Body", i,   "text");

                //  콤보일때는 _text 로 처리한다.
                var display = objGrid.getCellProperty("Body", col, "displaytype");
                if( display == "combotext" || display=="combocontrol")
                {
                    body = "bind:"+body.substring(5)+"_text";
                }

                var nrow = this.ds_temp.findRow("body", body);
                if( nrow != -1 )
                {
                    //this.ds_temp.setColumn(nrow, "col",   col);
                    this.ds_temp.setColumn(nrow, "title", title);
                }
            }

        	this.fn_filterSetup();
        };


        this.fn_filterSetup = function ()
        {
        	var filterlist= new Array();
            var filterstr = this.fv_targetDataset.filterstr;
            var tempbuff  = filterstr.split("&&");
            for(var i=0;i<tempbuff.length;i++)
            {
                var columinfo = tempbuff[i].trim();
                var columname   = "";
                var condition   = "";
                var filtertype  = "";
                var filtervalue = columinfo.split("'")[1];

                for(var j=0;j<columinfo.length;j++)
                {
                    if( "1234567890_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(columinfo.charAt(j)) == -1 )
                    {
                        columname = columinfo.substring(0, j);
                        condition = columinfo.substring(j);
                        break;
                    }
                }

                // 포함여부
                if( condition.indexOf("indexOf") != -1 )
                {
        			// ITO : 필터 선택 콤보 오류
                    if( condition.indexOf("==") != -1 )
                    {
                        filtertype = "notlike";
                    }
                    else
                    {
                        filtertype = "like";
                    }
                }
                else
                {
                    if( condition.indexOf("==") != -1 )
                    {
                        filtertype = "=";
                    }
                    else if( condition.indexOf("!=") != -1 )
                    {
                        filtertype = "!=";
                    }
                    else if( condition.indexOf(">") != -1 )
                    {
                        filtertype = ">";
                    }
                    else if( condition.indexOf("<") != -1 )
                    {
                        filtertype = "<";
                    }
                }

                filterlist.push({body:"bind:"+columname, filtertype:filtertype, filtervalue:filtervalue});
            }

        	// 이전의 필터조건을 이용해서 설정하고 소팅처리한다.
            for(var i=0;i<filterlist.length;i++)
            {
                var nrow = this.ds_temp.findRow("body", filterlist[i].body);
                this.ds_temp.setColumn(nrow, "col",       -(filterlist.length-i)     );
                this.ds_temp.setColumn(nrow, "filtertype",  filterlist[i].filtertype );
                this.ds_temp.setColumn(nrow, "filtervalue", filterlist[i].filtervalue);
            }

            this.ds_temp.set_keystring("S:col");
            for(var i=0;i<this.ds_temp.getRowCount();i++)
            {
                var body = this.ds_temp.getColumn(i, "body").substring(5);
                var sTitle = this.ds_temp.getColumn(i, "title");
        		if ( this.gfn_isNull(sTitle) == false )
        	    {
        			var nRow = this.ds_filter.addRow();
        			this.ds_filter.setColumn(nRow, "title",       sTitle);
        			this.ds_filter.setColumn(nRow, "filtertype",  this.ds_temp.getColumn(i, "filtertype"));
        			this.ds_filter.setColumn(nRow, "filtervalue", this.ds_temp.getColumn(i, "filtervalue"));
        			this.ds_filter.setColumn(nRow, "columid",     body);
        			this.ds_filter.setColumn(nRow, "displaytype", this.ds_temp.getColumn(i, "displaytype"));
        			this.ds_filter.setColumn(nRow, "combocodecol",this.ds_temp.getColumn(i, "combocodecol"));
        			this.ds_filter.setColumn(nRow, "combodatacol",this.ds_temp.getColumn(i, "combodatacol"));
        			this.ds_filter.setColumn(nRow, "combodataset",this.ds_temp.getColumn(i, "combodataset"));
                }
            }
            this.ds_filter.set_rowposition(-1);
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
         * @description 필터취소 버튼클릭이벤트
        */
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.fv_targetDataset.set_filterstr("");
        };

        /**
         * @description 업 버튼클릭이벤트
        */
        this.btn_up_onclick = function(obj,e)
        {
        	var currow = this.ds_filter.rowposition;

            if( currow == 0 ) return;

            this.ds_filter.moveRow(currow, --currow);
        };

        /**
         * @description 다운 버튼클릭이벤트
        */
        this.btn_down_onclick = function(obj,e)
        {
        	var currow = this.ds_filter.rowposition;

            if( currow == this.ds_filter.getRowCount()-1 ) return;

            this.ds_filter.moveRow(currow, ++currow);
        };

        /**
         * @description 적용 버튼클릭이벤트
        */
        this.btn_filter_onclick = function(obj,e)
        {
        	var dataset = this.fv_targetDataset;
            var filterstr = "";

            for(var i=0;i<this.ds_filter.getRowCount();i++)
            {
                var columid    = this.ds_filter.getColumn(i, "columid");
                var filtervalue= this.ds_filter.getColumn(i, "filtervalue");
                var filtertype = this.ds_filter.getColumn(i, "filtertype");

                if( !this.gfn_isNull(filtertype) && !this.gfn_isNull(filtervalue) )
                {
                    var tempfilter = "";

                    if( filtertype == "=" )
                    {
                        tempfilter = columid+"=='"+filtervalue+"'";
                    }
                    else if( filtertype == "!=" )
                    {
                        tempfilter = columid+"!='"+filtervalue+"'";
                    }
                    else if( filtertype == ">" )
                    {
                        tempfilter = columid+">'"+filtervalue+"'";
                    }
                    else if( filtertype == "<" )
                    {
                        tempfilter = columid+"<'"+filtervalue+"'";
                    }
                    else if( filtertype == "like" )
                    {
                        tempfilter = columid+".indexOf('"+filtervalue+"')!=-1";
                    }
                    else if( filtertype == "notlike" )
                    {
                        tempfilter = columid+".indexOf('"+filtervalue+"')==-1";
                    }

                    if( this.gfn_isNull(filterstr) )
                        filterstr = tempfilter;
                    else
                        filterstr += " && "+tempfilter;
                }
            }

            dataset.set_filterstr(filterstr);
        };

        /**
         * @description 닫기 버튼클릭이벤트
        */
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_up.addEventHandler("onclick",this.btn_up_onclick,this);
            this.btn_down.addEventHandler("onclick",this.btn_down_onclick,this);
            this.btn_filter.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };

        this.loadIncludeScript("Comm_GridFilter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
