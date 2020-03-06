(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","37","30",null,null,"230","170",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px dashed darkgray");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","37",null,"190","40",null,"115",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Play");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","460",null,"190","40",null,"115",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Stop");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","255",null,"190","40",null,"115",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Pause");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","665",null,"190","40",null,"115",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Size");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonOpenWindow","37",null,"190","40",null,"65",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("OpenWindow");
            this.addChild(obj.name, obj);

            obj = new Button("ButtonOpenerOpen","257",null,"190","40",null,"65",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("opener.openProgram");
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
        this.registerScript("Z201910_2019100005-webbrowser_youtube.xfdl", function() {
        this.test_onload = function(obj,e)
        {
        		this.WebBrowser00.set_url("http://localhost:8080/QME/QME_UI/QmeNexHtml/youtubePlayer.html");		//	https://developers.google.com/youtube/iframe_api_reference?hl=ko
        	//	this.WebBrowser00.set_url("http://nyc.panpacific.co.kr/QMEServer/");		//	https://developers.google.com/youtube/iframe_api_reference?hl=ko
        	//	this.WebBrowser00.set_url("http://naver.com");		//	https://developers.google.com/youtube/iframe_api_reference?hl=ko
        	//	this.WebBrowser00.set_url("http://192.168.11.193:8101/nexos/html/main/main.html?ver=20181022_03#LC00000M");
        };

        this.ButtonPlay_onclick = function(obj,e)
        {
        	this.WebBrowser00.callMethod("playVideo");
        };

        this.ButtonStop_onclick = function(obj,e)
        {
        	this.WebBrowser00.callMethod("stopVideo");
        };

        this.ButtonPause_onclick = function(obj,e)
        {
        	this.WebBrowser00.callMethod("pauseVideo");
        };

        this.ButtonSize_onclick = function(obj,e)
        {
        	var iFormWidth 	= this.width;
        	var iFormHeight = this.height;
        	var iObjLeft 	= obj.left;
        	var iObjRight 	= obj.right;
        	var iObjTop 	= obj.top;
        	var iObjBottom 	= obj.bottom;

        	var iWebBrawserWidth 	= iFormWidth - iObjLeft - iObjRight - 50	;
        	var iWebBrawserHeight 	= iFormHeight - iObjTop - iObjBottom - 50	;

        	this.WebBrowser00.callMethod("setYouTubeIframeSize", iWebBrawserWidth, iWebBrawserHeight);
        };

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	var iFormWidth 	= this.width;
        	var iFormHeight = this.height;
        	var iObjLeft 	= obj.left;
        	var iObjRight 	= obj.right;
        	var iObjTop 	= obj.top;
        	var iObjBottom 	= obj.bottom;

        	var iWebBrawserWidth 	= iFormWidth - iObjLeft - iObjRight - 50	;
        	var iWebBrawserHeight 	= iFormHeight - iObjTop - iObjBottom - 50	;

        	this.WebBrowser00.callMethod("setYouTubeIframeAPIReady", "M7lc1UVf-VE", iWebBrawserWidth, iWebBrawserHeight);

        	// 	this.WebBrowser00.setProperty("allowfullscreen", ""); // webbrowser에 allowfullscreen 세팅
        	// 	this.WebBrowser00.callMethod("set_allowfullscreen",url); // 링크된 html 의 함수 호출, html 파일은 비고란 참조

        };

        this.ButtonOpenWindow_onclick = function(obj,e)
        {
        	this.WebBrowser00.callMethod("callUrl", "www.naver.com");
        };

        this.ButtonOpenerOpen_onclick = function(obj,e)
        {
        	this.WebBrowser00.callMethod("qmeOpenProgram");
        	//	qmeOpenProgram();
        };

        function qmeOpenProgram(){
        	var param = new Object();
        	param.polist = "4500571397＾4500571724";
        	opener.openProgram(param);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test_onload,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.Button00.addEventHandler("onclick",this.ButtonPlay_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.ButtonStop_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.ButtonPause_onclick,this);
            this.Button00_01.addEventHandler("onclick",this.ButtonSize_onclick,this);
            this.ButtonOpenWindow.addEventHandler("onclick",this.ButtonOpenWindow_onclick,this);
            this.ButtonOpenerOpen.addEventHandler("onclick",this.ButtonOpenerOpen_onclick,this);
        };

        this.loadIncludeScript("Z201910_2019100005-webbrowser_youtube.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
