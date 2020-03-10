(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Editor_ToastUI");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ROW_STS\" type=\"STRING\" size=\"256\"/><Column id=\"Task_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TaskName\" type=\"STRING\" size=\"256\"/><Column id=\"TaskDescript\" type=\"STRING\" size=\"256\"/><Column id=\"TaskType\" type=\"STRING\" size=\"256\"/><Column id=\"TaskStatus\" type=\"STRING\" size=\"256\"/><Column id=\"RequestDept\" type=\"STRING\" size=\"256\"/><Column id=\"RequestUser\" type=\"STRING\" size=\"256\"/><Column id=\"ServiceCode\" type=\"STRING\" size=\"256\"/><Column id=\"TaskManager\" type=\"STRING\" size=\"256\"/><Column id=\"DutyUser_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PlanMD\" type=\"STRING\" size=\"256\"/><Column id=\"PlanStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"PlanEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"ActualMD\" type=\"STRING\" size=\"256\"/><Column id=\"ActualStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"ActualEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"DeployDate\" type=\"STRING\" size=\"256\"/><Column id=\"RefDocNo\" type=\"STRING\" size=\"256\"/><Column id=\"RefURL\" type=\"STRING\" size=\"256\"/><Column id=\"Files_ID\" type=\"STRING\" size=\"256\"/><Column id=\"Remark\" type=\"STRING\" size=\"256\"/><Column id=\"ModifiedUser\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_in", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ROW_STS\" type=\"STRING\" size=\"256\"/><Column id=\"Task_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TaskName\" type=\"STRING\" size=\"256\"/><Column id=\"TaskDescript\" type=\"STRING\" size=\"256\"/><Column id=\"ServiceCode\" type=\"STRING\" size=\"256\"/><Column id=\"TaskManager\" type=\"STRING\" size=\"256\"/><Column id=\"PlanStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"PlanEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"ActualStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"ActualEndDate\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","610","230",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","97","188","73","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","20","188","73","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("리스트\r\n조회");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","10","230","590",null,null,"10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_wordWrap("char");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","174","188","73","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("코드보기");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","251","188","73","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","10",null,"168","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_list");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Task_ID\"/><Cell col=\"1\" text=\"TaskName\"/><Cell col=\"2\" text=\"TaskDescript\"/><Cell col=\"3\" text=\"TaskType\"/><Cell col=\"4\" text=\"TaskStatus\"/><Cell col=\"5\" text=\"RequestDept\"/><Cell col=\"6\" text=\"RequestUser\"/><Cell col=\"7\" text=\"ServiceCode\"/><Cell col=\"8\" text=\"TaskManager\"/><Cell col=\"9\" text=\"DutyUser_ID\"/><Cell col=\"10\" text=\"PlanMD\"/><Cell col=\"11\" text=\"PlanStartDate\"/><Cell col=\"12\" text=\"PlanEndDate\"/><Cell col=\"13\" text=\"ActualMD\"/><Cell col=\"14\" text=\"ActualStartDate\"/><Cell col=\"15\" text=\"ActualEndDate\"/><Cell col=\"16\" text=\"DeployDate\"/><Cell col=\"17\" text=\"RefDocNo\"/><Cell col=\"18\" text=\"RefURL\"/><Cell col=\"19\" text=\"Files_ID\"/><Cell col=\"20\" text=\"Remark\"/><Cell col=\"21\" text=\"ModifiedUser\"/></Band><Band id=\"body\"><Cell text=\"bind:Task_ID\"/><Cell col=\"1\" text=\"bind:TaskName\"/><Cell col=\"2\" text=\"bind:TaskDescript\"/><Cell col=\"3\" text=\"bind:TaskType\"/><Cell col=\"4\" text=\"bind:TaskStatus\"/><Cell col=\"5\" text=\"bind:RequestDept\"/><Cell col=\"6\" text=\"bind:RequestUser\"/><Cell col=\"7\" text=\"bind:ServiceCode\"/><Cell col=\"8\" text=\"bind:TaskManager\"/><Cell col=\"9\" text=\"bind:DutyUser_ID\"/><Cell col=\"10\" text=\"bind:PlanMD\"/><Cell col=\"11\" text=\"bind:PlanStartDate\"/><Cell col=\"12\" text=\"bind:PlanEndDate\"/><Cell col=\"13\" text=\"bind:ActualMD\"/><Cell col=\"14\" text=\"bind:ActualStartDate\"/><Cell col=\"15\" text=\"bind:ActualEndDate\"/><Cell col=\"16\" text=\"bind:DeployDate\"/><Cell col=\"17\" text=\"bind:RefDocNo\"/><Cell col=\"18\" text=\"bind:RefURL\"/><Cell col=\"19\" text=\"bind:Files_ID\"/><Cell col=\"20\" text=\"bind:Remark\"/><Cell col=\"21\" text=\"bind:ModifiedUser\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","424","191","270","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","345","191","73","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("제목 :");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","TextArea00","value","ds_in","TaskDescript");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00","value","ds_in","TaskName");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Editor_ToastUI.xfdl", function() {

        this.Form_Work_oninit = function(obj,e)
        {

        };

        this.Form_Work_onload = function(obj,e)
        {
        	var domain = document.location.href;
            var arrdomain = domain.split('/');
            var currentfile = arrdomain[arrdomain.length-1];

        //   domain = domain.replace(currentfile, "../ckeditor/ckeditor.html")
        //	domain = domain.replace(currentfile, "/ckeditor/ToastUI.html");
        	domain = domain + "WebEditor/ToastUI.html";

            this.WebBrowser00.set_url(domain);
        };

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	_win = this.WebBrowser00.getProperty('window');
        };

        this.Button00_onclick = function(obj,e)
        {
        //	_win.callMethod("setData", "<p><strong>nexacro platform</strong></p><p><em>Nexacro Platform programming is divided into two parts</em></p><p>one to define user-visible screens visible and a second used for the scripts that implement business logic. Additionally, Nexacro Platform provides capabilities for applying and managing styles and themes in screens.</p>");
        	_win.callMethod("setData", this.ds_in.getColumn(0, 'TaskDescript'));
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	this.ds_in.setColumn(0, 'TaskDescript', _win.callMethod("getData"));
        };

        this.fn_Save = function ()
        {
        	var vTask_ID = this.ds_in.getColumn(0, 'Task_ID');
        	var vTaskName = this.ds_in.getColumn(0, 'TaskName');

        	if(vTaskName == null || vTaskName == 'undefined' || vTaskName == '') {
        		this.alert("제목을 입력해 주세요.");
        		 return;
        	}
        	if(!this.confirm("저장하시겠습니까?")) return;

        	this.TextArea00.set_enableevent(false);
        	this.ds_in.setColumn(0, 'TaskDescript', _win.callMethod("getData"));

        	if(vTask_ID == null || vTask_ID == 'undefined' || vTask_ID == '') {
        		this.ds_in.setColumn(0, 'ROW_STS', 'I');
        	} else {
        		this.ds_in.setColumn(0, 'ROW_STS', 'U');
        	}

        //	this.ds_in.setColumn(0, 'TaskDescript', _win.callMethod("getData"));

        	nexacro.getEnvironment().set_httptimeout(3600);

        	var sSvcID = "save";
        	var sURL = "AppSvrLocalMsSql::CommonSaveAction_Return.do";
        	var sInDatasets = "ds_in0=ds_in";
        	var sOutDatasets = "";
        	var sArguments = "sqlId=" + nexacro.wrapQuote("test_save_ckeditor");

        	this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        };

        this.fn_Load = function ()
        {
        // 	var sSvcID 			= "AppSvrLocalMsSqlTest";
        // 	var sURL 			= "AppSvrLocalMsSql::CommonSaveAction_Return.do";
        // 	var sInDatasets 	= "ds_in0=ds_in ds_in1=ds_in ds_in2=ds_in";
        // 	var sOutDatasets 	= "ds_out=ds_out0 ds_out22=ds_out1 ds_out33=ds_out2";
        // 	var sArguments 		= "sqlId=" + nexacro.wrapQuote("test_first_transaction test_second_transaction test_second_transaction");

        	this.ds_in.setColumn(0, 'ServiceCode', '');
        	this.ds_in.setColumn(0, 'TaskManager', '');
        	this.ds_in.setColumn(0, 'PlanStartDate', '');
        	this.ds_in.setColumn(0, 'PlanEndDate', '');
        	this.ds_in.setColumn(0, 'ActualStartDate', '');
        	this.ds_in.setColumn(0, 'ActualEndDate', '');

        	var sSvcID = "load";
        	var sURL = "AppSvrLocalMsSql::CommonSelectAction.do";
        	var sInDatasets = "ds_in=ds_in";
        	var sOutDatasets = "ds_in=ds_out0";

        	var vTask_Id = this.ds_in.getColumn(0, 'Task_ID');
        	if(vTask_Id == null || vTask_Id == 'undefined' || vTask_Id == '') sOutDatasets = "ds_list=ds_out0";

        	var sArguments = "sqlId=" + nexacro.wrapQuote("test_load_ckeditor");

        	this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        };

        /*++
         @desc	Callback Function
         */
        this.callbackFunction = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	// 에러 체크 영역
        	if (nErrorCode < 0)
        	{
        		alert(this.gfn_removeJavaErrMsg(strErrorMsg));
        		return;
        	}

        	switch (strSvcID)
        	{
        		case 'save':
        			nexacro.getEnvironment().set_httptimeout(60);
        			alert('저장완료');

        			this.ds_list.clearData();
        			this.ds_in.clearData();
        			this.ds_in.addRow();

        			this.TextArea00.set_enableevent(true);

        			_win.callMethod("setData", this.ds_in.getColumn(0, 'TaskDescript'));

        			this.ds_in.setColumn(0, 'Task_ID', '');

        			this.fn_Load();

        			break;
        		case 'load':
        			_win.callMethod("setData", this.ds_in.getColumn(0, 'TaskDescript'));
        			//alert('조회완료');
        			break;
        	}
        }

        this.Button00_00_00_onclick = function(obj,e)
        {
        	this.ds_in.setColumn(0, 'TaskDescript', _win.callMethod("getData"));
        };

        this.Button00_00_00_00_onclick = function(obj,e)
        {
        	this.ds_list.clearData();
        	this.ds_in.clearData();
        	this.ds_in.addRow();

        	_win.callMethod("setData", this.ds_in.getColumn(0, 'TaskDescript'));
        };

        this.fn_LoadList = function(obj,e)
        {
        	this.ds_in.setColumn(0, 'Task_ID', '');

        	this.fn_Load();
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.ds_in.setColumn(0, 'Task_ID', this.ds_list.getColumn(e.row, 'Task_ID'));

        	this.fn_Load();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.Form_Work_oninit,this);
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.Button00.addEventHandler("onclick",this.fn_Save,this);
            this.Button00_00.addEventHandler("onclick",this.fn_LoadList,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
            this.Button00_00_00_00.addEventHandler("onclick",this.Button00_00_00_00_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };

        this.loadIncludeScript("Editor_ToastUI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
