(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_Message");
            this.set_titletext("Sample_Message");
            if (Form == this.constructor)
            {
                this._setFormPosition(814,529);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_list","10","40",null,null,"264","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gds_message");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"MSG_ID\"/><Cell col=\"1\" text=\"MSG_TEXT\"/><Cell col=\"2\" text=\"MSG_TYPE\"/></Band><Band id=\"body\"><Cell text=\"bind:MSG_ID\"/><Cell col=\"1\" text=\"bind:MSG_TEXT\"/><Cell col=\"2\" text=\"bind:MSG_TYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0",null,"100.00%","10",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_guide1");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","10","86","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Message");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Button("btn_word",null,"10","75","24","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Word");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_alert",null,"10","125","24","393",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Message-Alert");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_word",null,"40","244",null,"10","10",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("gds_word");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"WORD_ID\"/><Cell col=\"1\" text=\"KR\"/></Band><Band id=\"body\"><Cell text=\"bind:WORD_ID\"/><Cell col=\"1\" text=\"bind:KR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm",null,"10","125","24","262",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Message-Confirm");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",814,529,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample_Message.xfdl", function() {

        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };

        /*
         * @class 메세지 알림, 확인창 호출
         * AppVariables Datasets gds_message에 메세지 등록 후 사용
         *
         *
         * 메세지 호출
           var sMsgId       = "msg.err.validator.length";   //메세지 ID
           var arrArg       = ["사원번호", "5자리"];      //메세지 치환 될 배열 값 [생략가능]
           var sPopId       = sMsgId;                       //메세지 팝업창 ID [생략가능]
           var sMsgCallback = "fn_msgCallback"              //팝업 콜백 [생략가능, Confirm성 메세지 사용시 필수]
           this.gfn_alert(sMsgId, arrArg);
           this.gfn_alert(sMsgId, arrArg, sPopId, sMsgCallback);

         */

        this.btn_alert_onclick = function(obj,e)
        {
            //{0}의 입력값의 길이는 {1} 이하이어야 합니다.
            this.gfn_alert("msg.err.validator.length", ["사원번호", "5자리"]);
        };

        this.btn_confirm_onclick = function(obj,e)
        {
            //변경된 내역을 저장 하시겠습니까?
           var sMsgId       = "confirm.before.save";
           var arrArg       = "";
           var sPopId       = sMsgId;
           var sMsgCallback = "fn_msgCallback"
           this.gfn_alert(sMsgId, arrArg, sPopId, sMsgCallback);
        };

        this.fn_msgCallback = function(sPopupId, sValue)
        {
            if(sPopupId == "confirm.before.save"){
                if(sValue){
                    //Save Script
                    trace(sPopupId + " : " + sValue);
                }
            }
        }


        this.btn_word_onclick = function(obj,e)
        {
            var sWord = this.gfn_getWord("user.jumin")
            this.alert(sWord);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btn_word.addEventHandler("onclick",this.btn_word_onclick,this);
            this.btn_alert.addEventHandler("onclick",this.btn_alert_onclick,this);
            this.grd_word.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
        };

        this.loadIncludeScript("Sample_Message.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
