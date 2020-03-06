(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_Confirm");
            this.set_titletext("Confirm");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("uWord").set("popup.notice");
            obj.set_cssclass("sta_WF_msg_bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_16","10","87",null,"1","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_msg_line");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_msg","80","25","216","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("txt_WF_msg");
            obj.set_wordWrap("char");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","102","103","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_pop1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","168","103","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_pop2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_icon","32","27","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_msg_confirm");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",330,150,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Comm_Confirm.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("Comm_Confirm.xfdl", function() {
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        /**
        *  공통메세지
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this); //초기화[필수]

        	var sContents = this.getOwnerFrame().paramContents;
        	this.fn_msgSet(sContents);
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 메세지설정
        */
          this.fn_msgSet = function (sMsgContent)
         {
         	this.txt_msg.set_value(sMsgContent);
         };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description 확인버튼
        */
        this.btn_ok_onclick = function(obj,e)
        {
        	this.close(true);
        };

        /**
        * @description 취소버튼
        */
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };

        this.loadIncludeScript("Comm_Confirm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
