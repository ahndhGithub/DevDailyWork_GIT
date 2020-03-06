(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_CrudButton");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_search","0","0","72","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Search");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new","76","0","72","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("New");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_main1");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","228","0","72","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Delete");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","152","0","72","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Save");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Static("StaticDevTxt","80",null,"140","14",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Comm_CrudButton.xfdl");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Verdana\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,28,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Comm_CrudButton.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("Comm_CrudButton.xfdl", function() {
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        this.arrBtns = Array();


        this.form_onload = function(obj,e)
        {
        	this.StaticDevTxt.set_visible(false);	//	개발자용텍스트 숨기기

        	var gtrcPos = "Comm_CrudButton.form_onload";

        	this.fn_searchName 	= this.parent.fn_searchName;	this.gtrace("this.fn_searchName--->"+this.fn_searchName, gtrcPos);
        	this.fn_newName 	= this.parent.fn_newName;		this.gtrace("this.fn_newName--->"+this.fn_newName, gtrcPos);
        	this.fn_saveName 	= this.parent.fn_saveName;		this.gtrace("this.fn_saveName--->"+this.fn_saveName, gtrcPos);
        	this.fn_deleteName 	= this.parent.fn_deleteName;	this.gtrace("this.fn_deleteName--->"+this.fn_deleteName, gtrcPos);

        	this.gfn_getParentForm();	// 공통화폼의 경우 무조건 실행
        };


        this.fn_setButtonVisEna = function()
        {
        					var gtrcPos = "Comm_CrudButton.fn_setButtonVisEna";

        	this.sInitCompVisEna = this.oDivParnt.InitCompVisEna;
        						this.gtrace("InitCompVisEna--->"+this.sInitCompVisEna, gtrcPos);

        	var arrInitSts = this.sInitCompVisEna.split(",");
        	var arrVis = arrInitSts[0].split(":");
        	var arrEna = arrInitSts[1].split(":");

        	// 이 순서를 바꾸지 말자
        	this.arrBtns.push(this.btn_search);		//1.
        	this.arrBtns.push(this.btn_new);		//2.
        	this.arrBtns.push(this.btn_save);		//3.
        	this.arrBtns.push(this.btn_delete);		//4.

        				this.gtrace("this.arrBtns.length--->"+this.arrBtns.length, gtrcPos);

        	for(var i=0;i<this.arrBtns.length;i++){
        					this.gtrace("arrVis[i]--->"+arrVis[i], gtrcPos);
        		this.arrBtns[i].set_visible((arrVis[i]=="1"?true:false));
        		this.arrBtns[i].set_enable((arrEna[i]=="1"?true:false));
        	}

        	//	Visible 여부와 부모Div의 좌우정렬에 따라 버튼의 위치를 자동배치
        		this.gfn_commButtonAlignByVisible(this.oDivParnt, this.arrBtns, [0, 76, 152, 228])
        }

        this.btn_Crud_onclick = function(obj,e)
        {
        	var gtrcPos = "Comm_CrudButton.btnCrud_onclick";
        			this.gtrace("obj.name----->"+obj.name,gtrcPos);
        	switch(obj.name) {
        	case "btn_search":										this.gtrace("case btn_search----->",gtrcPos);
        															this.gtrace("this.oFrmParnt --->"+this.oFrmParnt.name, gtrcPos);
        															this.gtrace("this.fn_searchName --->"+this.fn_searchName, gtrcPos);
        						if(this.gfn_nvl(this.fn_searchName,"")=="")	this.oFrmParnt.cfn_search();
        						else 			     eval("this.oFrmParnt."+this.fn_searchName+"()");//	this.oFrmParnt.lookup(this.fn_searchName).call();
        		break;
        	case "btn_new":
        						if(this.gfn_nvl(this.fn_newName,"")=="")	this.oFrmParnt.cfn_new();
        						else 			     eval("this.oFrmParnt."+this.fn_newName+"()");//	this.oFrmParnt.lookup(this.fn_newName).call();
        		break;
        	case "btn_save":
        						if(this.gfn_nvl(this.fn_saveName,"")=="")	this.oFrmParnt.cfn_save();
        						else 			     eval("this.oFrmParnt."+this.fn_saveName+"()");//	this.oFrmParnt.lookup(this.fn_saveName).call();
        		break;
        	case "btn_delete":
        						if(this.gfn_nvl(this.fn_deleteName,"")=="")	this.oFrmParnt.cfn_del();
        						else 			     eval("this.oFrmParnt."+this.fn_deleteName+"()");//	this.oFrmParnt.lookup(this.fn_deleteName).call();
        		break;
        	default:
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_Crud_onclick,this);
            this.btn_new.addEventHandler("onclick",this.btn_Crud_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_Crud_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_Crud_onclick,this);
        };

        this.loadIncludeScript("Comm_CrudButton.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
