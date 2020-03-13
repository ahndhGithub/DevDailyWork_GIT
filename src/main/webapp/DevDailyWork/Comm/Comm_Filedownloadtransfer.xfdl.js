(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_filedownloadtransfer_01");
            this.set_titletext("New Form");
            this.set_border("");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"project\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"URL\">https://github.com/TOBESOFT-DOCS/sample_nexacroplatform_17/archive/master.zip</Col><Col id=\"project\">sample_nexacroplatform_17</Col></Row><Row><Col id=\"URL\">https://github.com/TOBESOFT-DOCS/demo_nexacroplatform_17_DeviceAPI/archive/master.zip</Col><Col id=\"project\">demo_nexacroplatform_17_DeviceAPI</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownloadTransfer("FileDownloadTransfer00", this);
            obj.getSetter("onsuccess").set("FileDownloadTransfer00_onsuccess");
            obj.getSetter("onerror").set("FileDownloadTransfer00_onerror");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","24","30","832","122",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"230\"/><Column size=\"600\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"project\"/><Cell col=\"1\" text=\"URL\"/></Band><Band id=\"body\"><Cell text=\"bind:project\"/><Cell col=\"1\" text=\"bind:URL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","24","170","290","100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("FileDownload00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comm_Filedownloadtransfer.xfdl", function() {
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	trace('test');
        	this.FileDownloadTransfer00.download(this.Dataset00.getColumn(e.row , 1), "master.zip");
        	//this.FileDownload00.download(this.Dataset00.getColumn(e.row , 1));
        };
        this.FileDownload00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.FileDownload00.addEventHandler("onerror",this.FileDownload00_onerror,this);
            this.FileDownload00.addEventHandler("onsuccess",this.FileDownload00_onsuccess,this);
            this.FileDownload00.addEventHandler("onclick",this.FileDownload00_onclick,this);
        };

        this.loadIncludeScript("Comm_Filedownloadtransfer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
