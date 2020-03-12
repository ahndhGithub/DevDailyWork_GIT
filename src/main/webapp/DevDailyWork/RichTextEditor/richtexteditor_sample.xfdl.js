(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("richtexteditor_sample");
            this.set_titletext("New Form");
            this.getSetter("classname").set("RichTextEditorSample");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_images", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"savefilename\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"selected\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"selected\">Y</Col><Col id=\"filename\">birthday.jpg</Col><Col id=\"savefilename\">birthday.jpg</Col><Col id=\"filesize\">14168</Col></Row><Row><Col id=\"filename\">ChristmasTree.jpg</Col><Col id=\"savefilename\">ChristmasTree.jpg</Col><Col id=\"filesize\">12215</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_reversesubsum("false");
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filetype\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"tranfilesize\" type=\"INT\" size=\"256\"/><Column id=\"prog\" type=\"INT\" size=\"256\"/><Column id=\"rmimg\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"filekey\" type=\"STRING\" size=\"256\"/><Column id=\"downcnt\" type=\"STRING\" size=\"256\"/><Column id=\"savefilename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_upload", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delFiles", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"savefilename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ROW_STS\" type=\"STRING\" size=\"256\"/><Column id=\"Task_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TaskName\" type=\"STRING\" size=\"256\"/><Column id=\"TaskDescript\" type=\"STRING\" size=\"256\"/><Column id=\"TaskType\" type=\"STRING\" size=\"256\"/><Column id=\"TaskStatus\" type=\"STRING\" size=\"256\"/><Column id=\"RequestDept\" type=\"STRING\" size=\"256\"/><Column id=\"RequestUser\" type=\"STRING\" size=\"256\"/><Column id=\"ServiceCode\" type=\"STRING\" size=\"256\"/><Column id=\"TaskManager\" type=\"STRING\" size=\"256\"/><Column id=\"DutyUser_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PlanMD\" type=\"STRING\" size=\"256\"/><Column id=\"PlanStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"PlanEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"ActualMD\" type=\"STRING\" size=\"256\"/><Column id=\"ActualStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"ActualEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"DeployDate\" type=\"STRING\" size=\"256\"/><Column id=\"RefDocNo\" type=\"STRING\" size=\"256\"/><Column id=\"RefURL\" type=\"STRING\" size=\"256\"/><Column id=\"Files_ID\" type=\"STRING\" size=\"256\"/><Column id=\"Remark\" type=\"STRING\" size=\"256\"/><Column id=\"ModifiedUser\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_in", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ROW_STS\" type=\"STRING\" size=\"256\"/><Column id=\"Task_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TaskName\" type=\"STRING\" size=\"256\"/><Column id=\"TaskDescript\" type=\"STRING\" size=\"256\"/><Column id=\"ServiceCode\" type=\"STRING\" size=\"256\"/><Column id=\"TaskManager\" type=\"STRING\" size=\"256\"/><Column id=\"PlanStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"PlanEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"ActualStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"ActualEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"Files_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_editor","10","10",null,null,"330","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_async("false");
            obj.set_url("RichTextEditor::richtexteditor.xfdl");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btn_load",null,"188","85","33","-101",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("샘플데이터\r\n조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_preview",null,"10","75","33","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("미리보기");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00",null,"91","312",null,"10","180",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Task_ID\"/><Cell col=\"1\" text=\"TaskName\"/><Cell col=\"2\" text=\"TaskDescript\"/><Cell col=\"3\" text=\"TaskType\"/><Cell col=\"4\" text=\"TaskStatus\"/><Cell col=\"5\" text=\"RequestDept\"/><Cell col=\"6\" text=\"RequestUser\"/><Cell col=\"7\" text=\"ServiceCode\"/><Cell col=\"8\" text=\"TaskManager\"/><Cell col=\"9\" text=\"DutyUser_ID\"/><Cell col=\"10\" text=\"PlanMD\"/><Cell col=\"11\" text=\"PlanStartDate\"/><Cell col=\"12\" text=\"PlanEndDate\"/><Cell col=\"13\" text=\"ActualMD\"/><Cell col=\"14\" text=\"ActualStartDate\"/><Cell col=\"15\" text=\"ActualEndDate\"/><Cell col=\"16\" text=\"DeployDate\"/><Cell col=\"17\" text=\"RefDocNo\"/><Cell col=\"18\" text=\"RefURL\"/><Cell col=\"19\" text=\"Files_ID\"/><Cell col=\"20\" text=\"Remark\"/><Cell col=\"21\" text=\"ModifiedUser\"/></Band><Band id=\"body\"><Cell text=\"bind:Task_ID\"/><Cell col=\"1\" text=\"bind:TaskName\"/><Cell col=\"2\" text=\"bind:TaskDescript\"/><Cell col=\"3\" text=\"bind:TaskType\"/><Cell col=\"4\" text=\"bind:TaskStatus\"/><Cell col=\"5\" text=\"bind:RequestDept\"/><Cell col=\"6\" text=\"bind:RequestUser\"/><Cell col=\"7\" text=\"bind:ServiceCode\"/><Cell col=\"8\" text=\"bind:TaskManager\"/><Cell col=\"9\" text=\"bind:DutyUser_ID\"/><Cell col=\"10\" text=\"bind:PlanMD\"/><Cell col=\"11\" text=\"bind:PlanStartDate\"/><Cell col=\"12\" text=\"bind:PlanEndDate\"/><Cell col=\"13\" text=\"bind:ActualMD\"/><Cell col=\"14\" text=\"bind:ActualStartDate\"/><Cell col=\"15\" text=\"bind:ActualEndDate\"/><Cell col=\"16\" text=\"bind:DeployDate\"/><Cell col=\"17\" text=\"bind:RefDocNo\"/><Cell col=\"18\" text=\"bind:RefURL\"/><Cell col=\"19\" text=\"bind:Files_ID\"/><Cell col=\"20\" text=\"bind:Remark\"/><Cell col=\"21\" text=\"bind:ModifiedUser\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","75","33","247",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("리스트\r\n조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","75","33","168",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"10","75","33","89",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"53","53","28","263",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("제목 :");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00",null,"53","247","28","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Div("divAttachFiles",null,null,"310","160","10","10",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_url("Base::AttachFilesPopup.xfdl");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_in","TaskName");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","RichTextEditor::richtexteditor.xfdl");
            this._addPreloadList("fdl","Base::AttachFilesPopup.xfdl");
        };
        
        // User Script
        this.addIncludeScript("richtexteditor_sample.xfdl","Library_RichTextEditor::lib_base.xjs");
        this.addIncludeScript("richtexteditor_sample.xfdl","Library::Library.xjs");
        this.registerScript("richtexteditor_sample.xfdl", function() {
        this.executeIncludeScript("Library_RichTextEditor::lib_base.xjs"); /*include "Library_RichTextEditor::lib_base.xjs"*/;
        this.executeIncludeScript("Library::Library.xjs"); /*include "Library::Library.xjs"*/

        this.RichTextEditorSample_onload = function(obj, e)
        {
        	var userConfig = {
        		editor : {
        			loadCallback : this.onloadEditor,
        			resizeCallback : this.onresizeEditor
        		},
        		image : {
        			loadCallback : this.onloadImage,
        			removeCallback : this.onremoveImage
        		}
        	};
        	this.div_editor.form.initialize(userConfig, obj);

        	// 파일컴포넌트 binding
        	this.divAttachFiles.form.initAttachFiles(this.ds_in, "Files_ID");
        }

        // editor loading 이 완료되었을 때
        this.onloadEditor = function(obj)
        {
            // obj 는 this.div_editor 임.
        }

        // editor resize 가 발생할 때
        this.onresizeEditor = function(obj, e)
        {
        	// obj 는 this.div_editor 이고 e 는 nexacro.SizeEventInfo 임.
        }

        // editor image (up/down) loading 이 완료되었을 때
        this.onloadImage = function(type, errorcode, errormsg, dataset)
        {
        	// - upload 는 본문에 이미지가 추가될 때 마다 실시간으로 서버에 저장된 후 호출됨.
        	// - dataset 은 실제 업로드된 파일 정보를 담은 Dataset reference
        	if ( type == "upload" )
        	{
        		var row = -1;
        		var cnt = dataset.rowcount;
        		this.ds_images.set_enableevent(false);
        		for (var i=0; i<cnt; i++)
        		{
        			row = this.ds_images.addRow();
        			this.ds_images.setColumn(row, "filename", dataset.getColumn(i, "filename"));
        			this.ds_images.setColumn(row, "savefilename", dataset.getColumn(i, "savefilename"));
        			this.ds_images.setColumn(row, "filesize", dataset.getColumn(i, "filesize"));
        		}
        		this.ds_images.set_enableevent(true);
        	}
        }

        // editor image 삭제가 완료되었을 때
        this.onremoveImage = function(errorcode, errormsg, dataset)
        {
        	// - 실제 서버에서 삭제된 후 호출됨.
        	// - dataset 은 삭제한 파일 정보를 담은 Dataset reference
        	var row = -1;
        	var cnt = dataset.rowcount;
        	this.ds_images.set_enableevent(false);
        	for (var i=0; i<cnt; i++)
        	{
        		row = this.ds_images.findRow("savefilename", dataset.getColumn(i, "savefilename"));
        		if ( row > -1 )
        		{
        			this.ds_images.deleteRow(row);
        		}
        	}
        	this.ds_images.set_enableevent(true);
        }

        // 데이터 로드
        this.btn_load_onclick = function(obj,  e)
        {
        	// 컨텐츠에 포함된 테스트 이미지 경로 지정
        	var image1 = "http://localhost:8080/DevDailyWork/RichTextEditor/repository/00.png";
        	var image2 = "http://localhost:8080/DevDailyWork/RichTextEditor/repository/01.png";

        	var contents = "<div>This is a <font color=\"#ff8000\" size=\"5\">Rich Text Editor </font>created in a nexacro platform.</div><div><div>Let's create a schedule !!</div><div><font size=\"6\">12 </font><font size=\"2\"><span style=\"line-height: 19.5px;\">2014 DECEMBER</span></font></div><div><table style=\"border: currentColor; font-family: Verdana, malgun gothic; font-size: 10pt; border-collapse: collapse;\" border=\"0\" cellSpacing=\"0\" cellPadding=\"0\" width=\"690\"><tbody><tr><td style=\"border-width: 1px; border-style: solid none solid solid; border-color: rgb(147, 165, 186) rgb(36, 98, 175) rgb(147, 165, 186) rgb(147, 165, 186); padding: 3px 4px 2px; width: 98px; height: 24px; background-color: rgb(232, 236, 240);\"><p><font color=\"#ff0000\"><b>sun</b></font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>mon</b></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>tue</b></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>wed</b></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>thu</b></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>fri</b></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>sat</b></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: middle; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p style=\"text-align: left;\"><font face=\"Arial Black\">1</font><font face=\"Arial Black\"><br></font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">2</font></p><p><font face=\"Arial Black\"><br></font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">3</font></p><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">4</font></p><p><font face=\"Arial Black\"><br></font></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">5</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">6</font></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\"><p><font color=\"#ff0000\" face=\"Arial Black\">7</font></p><p><font color=\"#ff0000\" face=\"Arial Black\"></font>&nbsp;</p><p><font color=\"#ff0000\" face=\"Arial Black\"></font>&nbsp;</p><p><font color=\"#ff0000\" face=\"Arial Black\"></font>&nbsp;</p><p><font color=\"#ff0000\" face=\"Arial Black\"></font>&nbsp;</p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">8</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">9</font></p><p style='font-family: \"Arial Black\";'><p><img style=\"width: 70px; height: 47px;\" id=\"Div_7eeeb85f-a392-3307-b3f6-38942616bef9\" src=\""+image2+"\" width=\"200\" height=\"133\"></p><p id=\"Div_7eeeb85f-a392-3307-b3f6-38942616bef9_focus\"><font face=\"Verdana\">birthday !!</font></p></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">10</font></p><p><font face=\"Arial Black\"><br></font></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">11</font></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">12</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">13</font></p><p><font face=\"Verdana\">CSR</font></p><p><font face=\"Verdana\">(AM 9:00 ~)</font></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\"><p><font color=\"#ff0000\" face=\"Arial Black\">14</font></p><font color=\"#ff0000\" face=\"Arial Black\"><p><br>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></font></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">15</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">16</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">17</font></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">18</font></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">19</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">20</font></p><p><font face=\"Verdana\">Year end party</font></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\"><p><font color=\"#ff0000\" face=\"Arial Black\">21</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">22</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">23</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">24</font></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 24px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font color=\"#ff0000\" face=\"Arial Black\">25</font></p><p><font color=\"#ff0000\" face=\"Arial Black\"><p><img style=\"width: 50px; height: 50px;\" id=\"Div_552854ed-48c5-1648-b795-38926acb0bed\" src=\""+image1+"\" width=\"280\" height=\"280\"></p><p id=\"Div_552854ed-48c5-1648-b795-38926acb0bed_focus\"><font color=\"#000000\" face=\"Verdana\">X-mas party</font></p></font></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">26</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">27</font></p><p>Hiking</p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 96px; height: 78px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\" rowSpan=\"2\" colSpan=\"1\"><p><font color=\"#ff0000\" face=\"Arial Black\">28</font></p><p><font face=\"Verdana\">HJ's Wedding ceremony</font></p><p>&nbsp;</p><p>&nbsp;</p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 53px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 128);\"><p><font face=\"Arial Black\">29</font></p><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 53px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 128);\"><p><font face=\"Arial Black\">30</font></p><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 53px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 128);\"><p><font face=\"Arial Black\">31</font></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 78px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\" rowSpan=\"2\" colSpan=\"1\"><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 78px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\" rowSpan=\"2\" colSpan=\"1\"><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 78px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\" rowSpan=\"2\" colSpan=\"1\"><p><br></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 297px; height: 1px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 128);\" rowSpan=\"1\" colSpan=\"3\"><p><span style=\"font-family: Verdana;\"><a href=\"https://www.google.co.kr/maps/@39.3789984,21.2065119,7z\" target=\"_blank\"></a><a href=\"https://www.google.co.kr/maps/place/%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84/@33.3613101,126.5504608,11z/data=!4m2!3m1!1s0x350ce3544cc84045:0x66bc36d2981ebf31\" target=\"_blank\">vacation</a></span></p></td></tr></tbody></table><p><br></p><br></div></div>";

        	// 컨텐츠 지정
        	this.div_editor.form.setContent(contents);

        	/*
        		기 등록된 본문이미지 정보를 지정한다.
        		- fileName : 원본 파일명
        		- saveFileName : 저정된 파일명
        		- fileSize : 파일 사이즈
        		- selected : 대표 이미지 여부 (true/false)
        	*/
        	var attachInfo = [];

        	for (var i=0, len=this.ds_images.rowcount; i<len; i++)
        	{
        		var info = {
        			"fileName": this.ds_images.getColumn(i, "filename"),
        			"saveFileName": this.ds_images.getColumn(i, "savefilename"),
        			"fileSize": this.ds_images.getColumn(i, "filesize")
        		};

        		if ( this.ds_images.getColumn(i, "selected") == "Y" )
        		{
        			info.selected = true;
        		}

        		attachInfo.push(info);
        	}

        	this.div_editor.form.setAttachImages(attachInfo);
        }

        // preview
        this.btn_preview_onclick = function(obj,  e)
        {
        	var content = this.div_editor.form.getContent();

        	if ( this.gfnIsEmpty(content) )
        	{
        		this.gfn_msgAlert("미리보기 내용이 없습니다.");
        		return;
        	}

        	var child = new ChildFrame();
        	child.init("preview", "absolute", 0, 0, 800, 630);
        	child.set_formurl("RichTextEditor::richtexteditor_previewsample.xfdl");
        	child.set_openalign("center middle");

        	var arg = {
        		'content': content
        	}
        	child.showModal(this.getOwnerFrame(), arg);
        }

        // 리스트 조회
        this.fn_LoadList = function(obj,e)
        {
        	this.ds_in.setColumn(0, 'Task_ID', '');

        	this.fn_Load();
        };

        // 데이터 저장
        this.fn_Save = function(obj,e)
        {
        	var vTask_ID = this.ds_in.getColumn(0, 'Task_ID');
        	var vTaskName = this.ds_in.getColumn(0, 'TaskName');

        	if(vTaskName == null || vTaskName == 'undefined' || vTaskName == '') {
        		this.gfn_msgAlert("제목을 입력해 주세요.");
        		return;
        	}
        	if(!this.gfn_msgConfirm("저장하시겠습니까?")) return;

        	this.ds_in.setColumn(0, 'TaskDescript', this.div_editor.form.getContent());

        	if(vTask_ID == null || vTask_ID == 'undefined' || vTask_ID == '') {
        		this.ds_in.setColumn(0, 'ROW_STS', 'I');
        	} else {
        		this.ds_in.setColumn(0, 'ROW_STS', 'U');
        	}

        	nexacro.getEnvironment().set_httptimeout(3600);

        	// 첨부파일 O
        	if(this.divAttachFiles.form.existAttachFiles()) {
        		this.divAttachFiles.form.uploadFile(this.ds_in.getColumn(0, 'Files_ID'));
        	} else {
        	// 첨부파일 X
        		var sSvcID = "save";
        		var sURL = "AppSvrLocalMsSql::CommonSaveAction_Return.do";
        		var sInDatasets = "ds_in0=ds_in";
        		var sOutDatasets = "";
        		var sArguments = "sqlId=" + nexacro.wrapQuote("test_save_ckeditor");

        		this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        	}
        };

        // 파일 업로드 완료 callback
        this.fn_FileUploadSucc = function()
        {
        	var sSvcID = "save";
        	var sURL = "AppSvrLocalMsSql::CommonSaveAction_Return.do";
        	var sInDatasets = "ds_in0=ds_in";
        	var sOutDatasets = "";
        	var sArguments = "sqlId=" + nexacro.wrapQuote("test_save_ckeditor");

        	this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }

        // 조회
        this.fn_Load = function ()
        {
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

        // 콜백
        this.callbackFunction = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	// 에러 체크 영역
        	if (nErrorCode < 0)
        	{
        		this.gfn_msgAlert(this.gfn_removeJavaErrMsg(strErrorMsg));
        		return;
        	}

        	switch (strSvcID)
        	{
        		case 'save':
        			nexacro.getEnvironment().set_httptimeout(60);

        			this.gfn_msgAlert('저장완료');

        			this.Button00_00_00_00.click();

        			this.fn_Load();

        			break;
        		case 'load':
        			this.div_editor.form.setContent(this.ds_in.getColumn(0, 'TaskDescript'));
        			//this.gfn_msgAlert('조회완료');
        			break;
        	}
        }

        // 초기화
        this.Button00_00_00_00_onclick = function(obj,e)
        {
        	this.ds_list.clearData();
        	this.ds_in.clearData();
        	this.ds_in.addRow();

        	this.div_editor.form.setContent('');
        	this.div_editor.form.resetAttachImages();
        };

        // 데이터 조회
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.ds_in.copyRow(0, this.ds_list, e.row)

        	this.fn_Load();
        };

        // MtlMaster 이미지 하나만 등록가능하도록
        this.fn_CallBy = function()
        {
        	return this.url;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.RichTextEditorSample_onload,this);
            this.btn_load.addEventHandler("onclick",this.btn_load_onclick,this);
            this.btn_preview.addEventHandler("onclick",this.btn_preview_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Button00_00.addEventHandler("onclick",this.fn_LoadList,this);
            this.Button00.addEventHandler("onclick",this.fn_Save,this);
            this.Button00_00_00_00.addEventHandler("onclick",this.Button00_00_00_00_onclick,this);
        };

        this.loadIncludeScript("richtexteditor_sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
