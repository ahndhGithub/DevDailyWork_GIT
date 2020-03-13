if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();

    env.on_init = function ()
    {
        this.set_themeid("theme::default");
    };

    env.on_initEvent = function ()
    {
        // add event handler
        this.addEventHandler("onerror",this.Environment_onerror,this);
    };

    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "0");
        nexacro._addService("Frame", "form", "./Frame/", "session", null, "", "0", "0");
        nexacro._addService("Base", "form", "./Base/", "session", null, "", "0", "0");
        nexacro._addService("Library", "js", "./Library/", "none", null, "", "0", "0");
        nexacro._addService("HintsEduLib", "js", "./nexacro17lib/component/HintsEduLib/", "none", null, "", "0", "0");
        nexacro._addService("Src_HintsEduLib", "js", "./Src_HintsEduLib/", "none", null, "", "0", "0");
        nexacro._addService("Comm", "form", "./Comm/", "session", null, "", "0", "0");
        nexacro._addService("Edu_Comm", "form", "./Edu/Comm/", "session", null, "", "0", "0");
        nexacro._addService("Edu_Form", "form", "./Edu/Form/", "session", null, "", "0", "0");
        nexacro._addService("Edu_Guide", "form", "./Edu/Guide/", "session", null, "", "0", "0");
        nexacro._addService("Edu_Sample", "form", "./Edu/Sample/", "session", null, "", "0", "0");
        nexacro._addService("Popup", "form", "./Popup/", "session", null, "", "0", "0");
        nexacro._addService("ComComp", "js", "./nexacro17lib/component/ComComp/", "session", null, "", "0", "0");
        nexacro._addService("GridFilter", "form", "./GridFilter/", "none", null, "", "0", "0");
        nexacro._addService("Images", "file", "./Images/", "session", null, "", "0", "0");
        nexacro._addService("Recycle", "form", "./Recycle/", "session", null, "", "0", "0");
        nexacro._addService("QmeNexHtml", "file", "./QmeNexHtml/", "session", null, "", "0", "0");
        nexacro._addService("AppSvrLocalMsSql", "JSP", "http://10.101.44.160:8080/", "none", null, "", "0", "0");
        nexacro._addService("ImgSvrTest", "JSP", "http://192.168.11.193:8081/ImageViewer.do?realFileNm=", "none", null, "", "0", "0");
        nexacro._addService("EcoLibrary", "file", "./EcoLibrary/", "session", null, "", "0", "0");
        nexacro._addService("AppSvrLocalMsSql2", "JSP", "http://10.101.44.160:8080/DevDailyWork_GIT/", "session", null, "", "0", "0");
        nexacro._addService("RichTextEditor", "form", "./RichTextEditor/", "none", null, "", "0", "0");
        nexacro._addService("Library_RichTextEditor", "js", "./Library_RichTextEditor/", "none", null, "", "0", "0");

    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacro17lib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";

    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
        		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"Sketch", "classname":"nexacro.Sketch", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };

    env.on_loadVariables = function ()
    {
        // Variables
        nexacro.setEnvironmentVariable("QME", "");
        nexacro.setEnvironmentVariable("ev_Val", "");
        nexacro.setEnvironmentVariable("ev_messagePopup", "true");

        // Cookies
        nexacro.setCookieVariable("JSESSIONID", "", "false");

        // HTTP Header

    };

	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};

    // User Script
    env.registerScript("environment.xml", function() {
    HINTS = nexacro.getApplication();
    /**
     * @description 통신오류 알림
    */
    this.Environment_onerror = function(obj,e)
    {
    	// 스크립트 에러
    	if (e.statuscode == 0) {
    		//alert(e.statuscode + "\n"+e.errormsg);
    	}
    	else if (e.statuscode == 404) {
    		alert(e.statuscode+"\n"+"Page Not Found"+"\n"+e.errormsg);
    	}
    	else if (e.statuscode == 408) {
    		alert(e.statuscode+"\n"+"Request Timeout" + "\n"+e.errormsg);
    	}
    	else if (e.statuscode == 500) {
    		alert(e.statuscode+"\n"+"Internal Server Error" + "\n"+e.errormsg);
    	}
    	else if (e.statuscode == 503) {
    		alert(e.statuscode+"\n"+"The service is unavailable" + "\n"+e.errormsg);
    	}
    	else if (e.statuscode == 12029) {
    		alert(e.statuscode+"\n"+"A connection with the server could not be established" + "\n"+e.errormsg);
    	}
    	// 미등록 오류 발생
    	else {
    		alert(e.statuscode + "\n" + e.errormsg);
    	}

    };

    });
					
    env = null;
}

