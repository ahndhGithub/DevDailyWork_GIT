(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_initvalueid("iv_Form0");
            this.set_name("CSVC0200");
            this.set_titletext("분류코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(385,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gridPopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"VISIBLE\" type=\"STRING\" size=\"256\"/><Column id=\"USERDATA\" type=\"STRING\" size=\"256\"/><Column id=\"UPMENU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">filterCreate</Col><Col id=\"LEVEL\">0</Col><Col id=\"CAPTION\">필터 생성</Col><Col id=\"ENABLE\">true</Col><Col id=\"USERDATA\">0</Col><Col id=\"VISIBLE\">true</Col></Row><Row><Col id=\"ID\">filterClear</Col><Col id=\"LEVEL\">0</Col><Col id=\"CAPTION\">필터 초기화</Col><Col id=\"ENABLE\">true</Col><Col id=\"USERDATA\">0</Col><Col id=\"VISIBLE\">true</Col></Row><Row><Col id=\"LEVEL\">0</Col><Col id=\"CAPTION\">필터 삭제</Col><Col id=\"ENABLE\">true</Col><Col id=\"USERDATA\">0</Col><Col id=\"VISIBLE\">true</Col><Col id=\"ID\">filterDelete</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","25","25","329","346",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","70","335","231",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.div_00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",385,480,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Y201909_2019090162-temp2.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.div_00.form.grd_00.addEventHandler("onrbuttondown", this.gfn_grid_onrbuttondown, this); 	//헤드클릭이벤트추가

        	var objParentForm = this.div_00.form.grd_00.parent;

        	var objPopMenu = new PopupMenu("PopMenu", 0, 0, 100, 100); //임시로 위치 및 size 설정

        	this.addChild(objPopMenu.name, objPopMenu);

        	objPopMenu.set_innerdataset(this.ds_gridPopupMenu);   //popupmenu bind dataset
        	objPopMenu.set_captioncolumn("CAPTION");       //popupmenu에 보여줄 메뉴명 컬럼
        	objPopMenu.set_enablecolumn("ENABLE");         //popupmenu에 enable=true/false
        	//objPopMenu.set_visiblecolumn("VISIBLE");     //popupmenu에 visiblecolumn이라는 속성은 없음.
        	objPopMenu.set_idcolumn("ID");                 //popupmenu click시 click한 menu id
        	objPopMenu.set_levelcolumn("LEVEL");           //popupmenu top/down방식에서 level
         	objPopMenu.addEventHandler("onmenuclick", this.gfn_popupmenu_onmenuclick, objParentForm);
        	objPopMenu.show();

        	objPopMenu.set_itemheight(28);
        	this.div_00.form.grd_00.popupMenu       = objPopMenu;
        };


        this.gfn_grid_onrbuttondown = function (objGrid, e)
        {
        	var objApp = pForm.gfn_getApplication();

        	// trackPopupByComponent 이용
        	var x = nexacro.toNumber(system.getCursorX()) - nexacro.toNumber(system.clientToScreenX(objGrid, 0));
        	var y = nexacro.toNumber(system.getCursorY()) - nexacro.toNumber(system.clientToScreenY(objGrid, 0));

        	// 스튜디오 사용시 팝업메뉴 위치 조정
        	//var sRunMode = nexacro.getEnvironmentVariable("ev_quikView");
        	//if (sRunMode == "Y") { y += 83; }

        	//objGrid.popupMenu는 User Property 이다. (popup메뉴가 set되어 있음)
        	this.div_00.form.grd_00.popupMenu.trackPopupByComponent(this.div_00.form.grd_00, x, y);
        };


        this.gfn_popupmenu_onmenuclick = function (objMenu, e)
        {
        	var selectId   = e.id;
        	switch(selectId) {
        	case "filterCreate": //필터 생성
        		this.gfn_gridHeadFilterCreate();
        		break;
        	}
        };

        this.gfn_gridHeadFilterCreate = function()
        {
        	trace('ok - gfn_gridHeadFilterCreate');
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };

        this.loadIncludeScript("Y201909_2019090162-temp2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
