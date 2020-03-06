(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("N440559");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_keystring("Column0+,Column0+,Column0+Column1+,Column0+Column1+,S:Column0+Column1+Column2+Column3-");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">00산업</Col><Col id=\"Column1\">개발</Col><Col id=\"Column2\">고속도로</Col><Col id=\"Column3\">융자</Col><Col id=\"Column4\">10</Col></Row><Row><Col id=\"Column0\">00산업</Col><Col id=\"Column1\">개발</Col><Col id=\"Column2\">고속도로</Col><Col id=\"Column3\">보증</Col><Col id=\"Column4\">20</Col></Row><Row><Col id=\"Column0\">00산업</Col><Col id=\"Column1\">개발</Col><Col id=\"Column2\">공항</Col><Col id=\"Column3\">융자</Col><Col id=\"Column4\">30</Col></Row><Row><Col id=\"Column0\">00산업</Col><Col id=\"Column1\">개발</Col><Col id=\"Column2\">공항</Col><Col id=\"Column3\">보증</Col><Col id=\"Column4\">40</Col></Row><Row><Col id=\"Column0\">00산업</Col><Col id=\"Column1\">설계</Col><Col id=\"Column2\">고속도로</Col><Col id=\"Column3\">융자</Col><Col id=\"Column4\">50</Col></Row><Row><Col id=\"Column1\">설계</Col><Col id=\"Column0\">00산업</Col><Col id=\"Column2\">고속도로</Col><Col id=\"Column3\">보증</Col><Col id=\"Column4\">60</Col></Row><Row><Col id=\"Column0\">00산업</Col><Col id=\"Column1\">설계</Col><Col id=\"Column2\">공항</Col><Col id=\"Column3\">융자</Col><Col id=\"Column4\">70</Col></Row><Row><Col id=\"Column0\">00산업</Col><Col id=\"Column1\">설계</Col><Col id=\"Column2\">공항</Col><Col id=\"Column3\">보증</Col><Col id=\"Column4\">80</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","35","19","425","410",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:Column1\" suppress=\"1\" suppressalign=\"middle\" expr=\"dataset.getRowLevel(currow)==1?&quot;소계&quot;:dataset.getRowLevel(currow)==2?&quot;소계&quot;:dataset.getRowLevel(currow)==3?&quot;합계&quot;:dataset.getRowLevel(currow)==4?&quot;합계&quot;:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" suppress=\"2\" suppressalign=\"middle\" expr=\"dataset.getRowLevel(currow)==1?&quot;소계&quot;:dataset.getRowLevel(currow)==2?&quot;소계&quot;:dataset.getRowLevel(currow)==3?&quot;합계&quot;:dataset.getRowLevel(currow)==4?&quot;합계&quot;:Column2\"/><Cell col=\"3\" text=\"bind:Column3\" suppress=\"0\" expr=\"(dataset.getRowLevel(currow)==1||dataset.getRowLevel(currow)==3)?&quot;융자&quot;:(dataset.getRowLevel(currow)==2||dataset.getRowLevel(currow)==4)?&quot;보증&quot;:Column3\"/><Cell col=\"4\" text=\"bind:Column4\" subsumtext=\"expr:dataset.getRowLevel(currow)==1?dataset.getCaseSum(&quot;Column3=='융자'&quot;,&quot;Column4&quot;,dataset.getGroupRangeStart(currow),dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow)):dataset.getRowLevel(currow)==2?dataset.getCaseSum(&quot;Column3=='보증'&quot;,&quot;Column4&quot;,dataset.getGroupRangeStart(currow),dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow)):dataset.getRowLevel(currow)==3?dataset.getCaseSum(&quot;Column3=='융자'&quot;,&quot;Column4&quot;,dataset.getGroupRangeStart(currow),dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow)):dataset.getRowLevel(currow)==4?dataset.getCaseSum(&quot;Column3=='보증'&quot;,&quot;Column4&quot;,dataset.getGroupRangeStart(currow),dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow)):&quot;&quot;\" edittype=\"normal\"/></Band><Band id=\"summary\"><Cell rowspan=\"2\" text=\"전체\"/><Cell col=\"1\" rowspan=\"2\" colspan=\"2\" text=\"총계\"/><Cell col=\"3\" text=\"융자\"/><Cell col=\"4\" expr=\"dataset.getCaseSum(&quot;Column3=='융자'&quot;, &quot;Column4&quot;)\"/><Cell row=\"1\" col=\"3\" text=\"보증\"/><Cell row=\"1\" col=\"4\" expr=\"dataset.getCaseSum(&quot;Column3=='보증'&quot;, &quot;Column4&quot;)\"/></Band></Format></Formats>");
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

        };

        this.loadIncludeScript("Z201911_2019110119-N440559.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
