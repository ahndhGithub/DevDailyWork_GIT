(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_ColumnHide");
            if (Form == this.constructor)
            {
                this._setFormPosition(128,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_ok","0","0","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_pop1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","68","0","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_pop2");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",128,28,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Comm_CnC.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("Comm_CnC.xfdl", function() {
        /**
        *  @Desction    그리드 컬럼 숨기기/보이기 공통팝업
        */
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.oFrmParnt; 		//Parent폼
        var strReturnparms;
        var sSplitChar = this.gfn_getApplication().MultiTxtSplitChar;

        /********************************************************************************************
        @desc	3. OnLoad
        ********************************************************************************************/
        /*
         *	초기화 함수
         */
        this.fn_reset = function()
        {
        	var gtrcPos	=	"Comm_CnC.xfdl.fn_reset";
        	this.gtrace("● 확인/취소(fn_reset)", gtrcPos);

        	// 부모폼 세팅
         	this.gfn_getParentForm();

        	{	//	3. 그리드, 더블클릭이벤트 추가
        		if(!this.gfn_isNull(this.oTargetGrid))
        		{
        			if(!(this.oFrmParnt.name=="PopupMultiSelect")) // <-- 예외
        			{
        				this.oTargetGrid.addEventHandler("oncelldblclick", this.btn_ok_onclick, this);
        			}
        		}
        	}
        }

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
        * CALLBACK 콜백 처리부분
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_ok_onclick = function(obj,e)
        {
        	var gtrcPos = "Comm_CnC.xfdl.btn_ok_onclick";
        		this.gtrace("●확인버튼클릭(btn_ok_onclick)", gtrcPos);

            var sCode="";
            var sName="";
        	var sRtnEtc_00 ="";
        	var sRtnEtc_10 ="";
        	var sRtnEtc_20 = "";

        	//	폼에따라 다르게 적용
        	switch(this.oFrmParnt.name)
        	{
        		default :
        		case "PopupMaterial":
        		case "PopupPurchaseOrder":
        		case "PopupSalesOrder":
        		case "PopupSaveLayout":
        		case "PopupStyle":
        		case "PopupVendor":
        																				this.gtrace("************방금 닫힌 폼 "+this.oFrmParnt.name+"에서 확인버튼 클릭했을 때 발생한 이벤트 요약************", gtrcPos);
        																				this.gtrace("확인취소공통폼(Comm_CnC)을 가진 Div(this.oDivParnt)-->"+this.oDivParnt.name, gtrcPos);
        																				this.gtrace("위 Div를 포함한 최상위 부모폼 (this.oFrmParnt)-->"+this.oFrmParnt.name, gtrcPos);
        				//	데이터가져올 oDs : ex) ds_VendorList, ...
        				var oDs 			= this.oTargetDs;							this.gtrace("부모폼에 있는 데이터셋(this.oTargetDs)--->"+oDs.name, gtrcPos);
        				var arrReturnparms 	= this.returnparms.split(",");				this.gtrace("위 데이터셋에서 선택했을때 리턴할 컬럼들(arrReturnparms)은--->"+arrReturnparms+"이다.", gtrcPos);
        																				this.gtrace("즉, "+this.oFrmParnt.name+".xfdl 폼의 "+this.oDivParnt.name+"디비젼을 보면 userproperty(targetGrid,returnparms)에 '"+this.oTargetGrid.name+" 그리드에 바인딩된 데이터셋 "+oDs.name+"의 컬럼 "+arrReturnparms+"들을 리턴하라'고 규정되어 있다.", gtrcPos);
        																				this.gtrace("***************************************************************************************************************", gtrcPos);
        					this.gtrace("그리드가 널이면 리턴(this.oTargetGrid)--->"+this.oTargetGrid, gtrcPos);
        				if(this.gfn_isNull(this.oTargetGrid)) return; //그리드가 널이면 리턴

        										this.gtrace("arrReturnparms[0]--->"+arrReturnparms[0], gtrcPos);
        										this.gtrace("arrReturnparms[1]--->"+arrReturnparms[1], gtrcPos);
        										this.gtrace("arrReturnparms[2]--->"+arrReturnparms[2], gtrcPos);
        										this.gtrace("arrReturnparms[3]--->"+arrReturnparms[3], gtrcPos);
        										this.gtrace("arrReturnparms[4]--->"+arrReturnparms[4], gtrcPos);

        				if(!this.gfn_isNull(arrReturnparms[0])) sCode 			= oDs.getColumn(oDs.rowposition, arrReturnparms[0]);
        				if(!this.gfn_isNull(arrReturnparms[1])) sName 			= oDs.getColumn(oDs.rowposition, arrReturnparms[1]);
        				if(!this.gfn_isNull(arrReturnparms[2])) sRtnEtc_00 		= oDs.getColumn(oDs.rowposition, arrReturnparms[2]);
        				if(!this.gfn_isNull(arrReturnparms[3])) sRtnEtc_10 		= oDs.getColumn(oDs.rowposition, arrReturnparms[3]);
        				if(!this.gfn_isNull(arrReturnparms[4])) sRtnEtc_20 		= oDs.getColumn(oDs.rowposition, arrReturnparms[4]);
        			break;

        		case "PopupMultiSelect" :
        				if(!this.gfn_isNull(arrReturnparms[0]))
        				{
        					var sMulti="";
        					for(var i = 0 ; i < oDs.rowcount ; i++){
        						var tStr = oDs.getColumn(i, "MultiText");	//	this.gtrace("tStr---->"+tStr, gtrcPos);
        						if(!this.gfn_isNull(tStr)){
        							sMulti += (sMulti!=""?sSplitChar:"")+tStr;
        						}
        					}
        					sCode 	= sMulti;
        				}
        				if(!this.gfn_isNull(arrReturnparms[1])) sName 		= oDs.getColumn(oDs.rowposition, arrReturnparms[1]);
        				if(!this.gfn_isNull(arrReturnparms[2])) sRtnEtc_00 	= oDs.getColumn(oDs.rowposition, arrReturnparms[2]);
        				if(!this.gfn_isNull(arrReturnparms[3])) sRtnEtc_10 	= oDs.getColumn(oDs.rowposition, arrReturnparms[3]);

        			break;

        		case "PopupMassInput":

        			break;
        	}
        															this.gtrace("sCode--->"+sCode, gtrcPos);
        															this.gtrace("sName--->"+sName, gtrcPos);
        	// 리턴값 세팅
        	var objRtn = {
        					rtnStr 		: this.oFrmParnt.paramStr,
        					rtnNum 		: this.oFrmParnt.paramNum,
        					rtnObj 		: this.oFrmParnt.paramObj,	//	여기까지 받은 변수 그대로 넘김
        					sRtnKey		: sCode,
        					sRtnName	: sName,
        					sRtnEtc_00	: sRtnEtc_00,
        					sRtnEtc_10	: sRtnEtc_10,
        					sRtnEtc_20	: sRtnEtc_20
        					};

        	// 리턴실행;
        	switch(this.oFrmParnt.name)
        	{
        		default :
        				this.oFrmParnt.close(JSON.stringify(objRtn));
        			break;
        		case "PopupMultiSelect" :
        				this.oFrmParnt.close(JSON.stringify(objRtn));
        			break;

        		case "PopupSaveLayout" :
        				//	this.oFrmParnt.close(JSON.stringify(objRtn));
        				this.oFrmParnt.callbackFunc_pop(objRtn);
        			break;

        		case "PopupMassInput" :
        				this.oFrmParnt.fn_CommCnc_OK();
        			break;

        	}
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.oFrmParnt.close();
        };

        this.form_onload = function(obj,e)
        {
        	this.fn_reset();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };

        this.loadIncludeScript("Comm_CnC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
