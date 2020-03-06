(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Grid_subsumText");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_keystring("G:+Column0,+Column1");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">10</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">20</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">30</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">40</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","47","48","566","285",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" subsumtext=\"expr:dataset.getRowLevel(currow) == 1? '1차소계':'2차소계'\"/><Cell col=\"1\" text=\"bind:Column1\" subsumtext=\"expr:dataset.getRowLevel(currow) == 1? '':''\"/><Cell col=\"2\" text=\"bind:Column2\" subsumtext=\"expr:dataset.getRowLevel(currow) == 1 ?  dataset.getCaseSum(&quot;Column0 ==&quot;+dataset.getColumn(currow-1,&quot;Column0&quot;)+ &quot;&amp;&amp; Column1 ==&quot;+dataset.getColumn(currow-1,&quot;Column1&quot;)   , &quot;Column2&quot;): dataset.getCaseSum(&quot;Column0 ==&quot;+dataset.getColumn(currow-1,&quot;Column0&quot;)   , &quot;Column2&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Grid_Height_onload,this);
        };

        this.loadIncludeScript("Z201910_2019100101-Grid_subsumText.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
