(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("stc_system_computername");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00","54","67","216","46",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_result","54","15","46","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("result");
            this.addChild(obj.name, obj);

            obj = new Static("stc_strRepl","104","15","156","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_computername","54","115","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("system.computername");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_cpuarchitecture","54","148","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("system.cpuarchitecture");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_cpucount","54","181","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("system.cpucount");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_cputype","54","214","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("system.cputype");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_locale","54","247","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("system.locale");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_loginuser","54","280","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("system.loginuser");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_mobileorientation","54","313","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("system.mobileorientation");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_mobileproducttype","54","346","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("system.mobileproducttype");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_monitorcount","54","379","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("system.monitorcount");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_navigatorfullname","54","412","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("system.navigatorfullname");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_navigatorname","54","445","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("system.navigatorname");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_navigatorversion","54","478","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("system.navigatorversion");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_notificationtoken","54","511","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("system.notificationtoken");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_osversion","54","544","212","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("system.osversion");
            this.addChild(obj.name, obj);

            obj = new Static("stc_system_taskbarsize","54","577","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("system.taskbarsize");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","214","511","653","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_value("어플리케이션이 실행된 모바일 기기에서 Push 알림을 받기 위한 Device Token 값을 갖는 읽기전용 속성입니다.");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_text("어플리케이션이 실행된 모바일 기기에서 Push 알림을 받기 위한 Device Token 값을 갖는 읽기전용 속성입니다.");
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
        this.registerScript("Reading_Library.xfdl", function() {
        this.Static_onclick = function(obj,e)
        {
        	var strRepl = obj.name.replace("stc_system_", "system.");
        	var trcTxt = eval(strRepl);
        	this.stc_strRepl.set_text(strRepl);
        	this.Edit00.set_value(trcTxt);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.stc_result.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_strRepl.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_computername.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_cpuarchitecture.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_cpucount.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_cputype.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_locale.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_loginuser.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_mobileorientation.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_mobileproducttype.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_monitorcount.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_navigatorfullname.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_navigatorname.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_navigatorversion.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_notificationtoken.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_osversion.addEventHandler("onclick",this.Static_onclick,this);
            this.stc_system_taskbarsize.addEventHandler("onclick",this.Static_onclick,this);
        };

        this.loadIncludeScript("Reading_Library.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
