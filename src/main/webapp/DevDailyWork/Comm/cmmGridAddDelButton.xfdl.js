(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmGridAddDelButton");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(208,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_del","72","0","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","0","0","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delMulti","144","0","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("체크삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("StaticDevTxt","14",null,"180","14",null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("cmmGridAddDelButton.xfdl");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Verdana\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",208,28,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("cmmGridAddDelButton.xfdl","Src_HintsEduLib::All_EduLib.xjs");
        this.registerScript("cmmGridAddDelButton.xfdl", function() {
        this.executeIncludeScript("Src_HintsEduLib::All_EduLib.xjs"); /*include "Src_HintsEduLib::All_EduLib.xjs"*/;

        // this.oDivParnt;			// 부모Div
        // this.oTargetDs;			//타겟데이터셋 : ROW_CHK, ROW_STS 컬럼만 존재하면 작동함 (그리드의 Status 속성여부와 무관함)
        // this.sInitCompVisEna;
        this.arrBtns = Array();

        this.form_onload = function(obj,e)
        {
        	this.StaticDevTxt.set_visible(false);	//	개발자용텍스트 숨기기

        	var gtrcPos = "cmmGridAddDelButton.xfdl.form_onload";
        		this.gtrace("● 그리드 행추가 : cmmGridAddDelButton"				, gtrcPos);

        	this.gfn_getParentForm();	// 공통화폼의 경우 무조건 실행


        				this.gtrace(" - this.oFrmParnt.name    --->"+this.oFrmParnt.name		, gtrcPos);
        				this.gtrace(" - this.oDivParnt.name    --->"+this.oDivParnt.name		, gtrcPos);
        				this.gtrace(" - this.oTargetGrid       --->"+this.oTargetGrid			, gtrcPos);
        				this.gtrace(" - this.oTargetDs         --->"+this.oTargetDs				, gtrcPos);
        				this.gtrace(" - this.sInitCompVisEna   --->"+this.sInitCompVisEna		, gtrcPos);
        };

        this.fn_setButtonVisEna = function()
        {
        					var gtrcPos = "cmmGridAddDelButton.fn_setButtonVisEna";

        	{	//	1. 부모Div 담기, UserProperty 가져오기
        		this.sInitCompVisEna 	= this.oDivParnt.InitCompVisEna;
        						this.gtrace("this.sInitCompVisEna--->"+this.sInitCompVisEna, gtrcPos);
        	}

         	{	//	3. 버튼 Enable / Disable 처리 : 부모폼의 세팅값(미정)에 따라 활성화 여부를 결정하는 로직 향후 필요함.
        		var arrInitSts = this.sInitCompVisEna.split(",");
        		var arrVis = arrInitSts[0].split(":");
        		var arrEna = arrInitSts[1].split(":");
        					this.gtrace("this.arrBtns.length--->"+this.arrBtns.length, gtrcPos);

        		// 이 순서를 바꾸지 말자
        		this.arrBtns.push(this.btn_add);		//1.
        		this.arrBtns.push(this.btn_del);		//2.
        		this.arrBtns.push(this.btn_delMulti);	//3.

        		for(var i=0;i<this.arrBtns.length;i++){
        			this.arrBtns[i].set_visible((arrVis[i]=="1"?true:false));
        			this.arrBtns[i].set_enable((arrEna[i]=="1"?true:false));
        		}

        		//	Visible 여부와 부모Div의 좌우정렬에 따라 버튼의 위치를 자동배치
        		this.gfn_commButtonAlignByVisible(this.oDivParnt, this.arrBtns, [this.btn_add.left, this.btn_del.left, this.btn_delMulti.left])
        	}
        }


        this.fn_deleteRow = function(delRow, multiSingleType)
        {
        							 								var gtrcPos = "cmmGridAddDelButton.xfdl.fn_deleteRow";
        	var nRow = delRow;											this.gtrace("delRow--->"+delRow, gtrcPos);
        	var sRowSts = this.oTargetDs.getColumn(nRow, "ROW_STS");
        																this.gtrace("ROW_STS--->"+sRowSts, gtrcPos);
        																this.gtrace("RowType--->"+this.oTargetDs.getRowType(nRow), gtrcPos);
        	//	this.oTargetDs.setRowType(nRow, Dataset.ROWTYPE_DELETE);

        	//화면에서 추가된 것은 바로 삭제
        	if (sRowSts == "I"){
        		this.oTargetDs.deleteRow(nRow);
        	}
        	//D상태였다면 U로 변경(실제적변경사항이 있었는지 없었는지 알 수 없다.)
        	else if (sRowSts == "D"){
        		if(multiSingleType=="single"){	//	단일삭제 버튼인 경우만 적용
        			this.oTargetDs.setColumn(nRow, "ROW_STS", "U");
        		}
        	}
        	// 아니면 D 세팅 : DB로 구분자를 보냄
        	else{
        		//	this.oTargetDs.setRowType(nRow, Dataset.ROWTYPE_DELETE); //<-- 이상하게도 안먹는다.수정된 상태로 되어 있음
        		this.oTargetDs.setColumn(nRow, "ROW_STS", "D");
        	}
        }
        // 입력
        this.btn_add_onclick = function(obj,e)
        {
            var nRow = this.oTargetDs.addRow();
        						//	this.oTargetDs.setRowType(nRow, Dataset.ROWTYPE_INSERT); // 해도그만 안해도 그만
        	//	AddRow 상황에서는 oncolumnchanged 이벤트가 안일어나므로 ROW_STS에 I를 셋 해 주어야 한다.
        	//	onrowposchanged 이벤트에 넣었으므로 여기서 I 추가할 필요 없다. 191215.
        	//	this.oTargetDs.setColumn(nRow, "ROW_STS", "I");
        };

        //삭제
        this.btn_del_onclick = function(obj,e)
        {
        															var gtrcPos = "cmmGridAddDelButton.xfdl.btn_del_onclick";
        	this.fn_deleteRow(this.oTargetDs.rowposition, "single");
        };

        //멀티삭제
        this.btn_delMulti_onclick = function(obj,e)
        {
        	for(var i = this.oTargetDs.rowcount - 1 ; i >= 0 ; i--){
        		var sROW_CHK = this.oTargetDs.getColumn(i, "ROW_CHK");
        		if(sROW_CHK=="1"){
        			this.fn_deleteRow(i, "multi");
        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delMulti.addEventHandler("onclick",this.btn_delMulti_onclick,this);
        };

        this.loadIncludeScript("cmmGridAddDelButton.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
