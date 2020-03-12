(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("FILE ATTACHMENT");
            this.getSetter("classname").set("TEMPLATE001");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (Form == this.constructor)
            {
                this._setFormPosition(793,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"Files_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_File", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ROW_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AttachFile_ID\" type=\"STRING\" size=\"256\"/><Column id=\"Files_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"YR\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"FileUUID\" type=\"STRING\" size=\"256\"/><Column id=\"FileTitle\" type=\"STRING\" size=\"256\"/><Column id=\"FilesName\" type=\"STRING\" size=\"256\"/><Column id=\"FileExt\" type=\"STRING\" size=\"256\"/><Column id=\"FileSize\" type=\"STRING\" size=\"256\"/><Column id=\"ContentType\" type=\"STRING\" size=\"256\"/><Column id=\"SaveUser\" type=\"STRING\" size=\"256\"/><Column id=\"SaveDate\" type=\"STRING\" size=\"256\"/><Column id=\"OrgSrc\" type=\"STRING\" size=\"256\"/><Column id=\"OrgSrc_ID\" type=\"STRING\" size=\"256\"/><Column id=\"Width\" type=\"STRING\" size=\"256\"/><Column id=\"Height\" type=\"STRING\" size=\"256\"/><Column id=\"Path_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_STS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_File00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ROW_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AttachFile_ID\" type=\"STRING\" size=\"256\"/><Column id=\"Files_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FileSeq\" type=\"STRING\" size=\"256\"/><Column id=\"YR\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"FileUUID\" type=\"STRING\" size=\"256\"/><Column id=\"FileTitle\" type=\"STRING\" size=\"256\"/><Column id=\"FilesName\" type=\"STRING\" size=\"256\"/><Column id=\"FileExt\" type=\"STRING\" size=\"256\"/><Column id=\"FileSize\" type=\"STRING\" size=\"256\"/><Column id=\"ContentType\" type=\"STRING\" size=\"256\"/><Column id=\"SaveUser\" type=\"STRING\" size=\"256\"/><Column id=\"SaveDate\" type=\"STRING\" size=\"256\"/><Column id=\"OrgSrc\" type=\"STRING\" size=\"256\"/><Column id=\"OrgSrc_ID\" type=\"STRING\" size=\"256\"/><Column id=\"Width\" type=\"STRING\" size=\"256\"/><Column id=\"Height\" type=\"STRING\" size=\"256\"/><Column id=\"Path_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_STS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_fup",null,"185","75","25","76",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("scrollbars").set("none");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","817","213","143","33",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","816","249","81","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("File upload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc01","836","312","120","49",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일제목");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title01","7","3","67","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일선택");
            obj.getSetter("wordwrap").set("english");
            obj.set_cssclass("sta_WF_subtit");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","84","0",null,"28","180",null,null,null,null,null,this);
            obj.getSetter("innerdataset").set("@ds_File");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_taborder("4");
            obj.getSetter("retry").set("0");
            obj.getSetter("scrollbars").set("none");
            obj.set_multiselect("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown",null,"0","86","28","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_crud");
            obj.getSetter("userdata").set("A=D");
            obj.set_text("파일다운로드");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_FileList","0","29",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_File");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("userdata").set("A=U");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"25\"/><Column size=\"40\"/><Column size=\"538\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"#\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"0\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"파일명\"/></Band><Band id=\"body\"><Cell text=\"bind:ROW_STS\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:ROW_CHK\" autosizecol=\"default\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:FileSeq\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:FilesName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grid00","837","380","209","90",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.getSetter("useinputpanel").set("false");
            obj.set_visible("false");
            obj.set_binddataset("ds_File");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_PATH\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_SIZE\"/><Cell col=\"3\" text=\"FILE_SAVENM\"/><Cell col=\"4\" text=\"FILE_TYPE\"/><Cell col=\"5\" text=\"NUM\"/><Cell col=\"6\" text=\"CHK\"/><Cell col=\"7\" text=\"ROW_CHK\"/><Cell col=\"8\" text=\"ROW_STS\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_PATH\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/><Cell col=\"2\" text=\"bind:FILE_SIZE\"/><Cell col=\"3\" text=\"bind:FILE_SAVENM\"/><Cell col=\"4\" text=\"bind:FILE_TYPE\"/><Cell col=\"5\" text=\"bind:NUM\"/><Cell col=\"6\" text=\"bind:CHK\"/><Cell col=\"7\" text=\"bind:ROW_CHK\"/><Cell col=\"8\" text=\"bind:ROW_STS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("pgb_File","828","77","300","16",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete01",null,"0","86","28","90",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_WF_trash01");
            obj.getSetter("userdata").set("A=D");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AttachFilesPopup.xfdl","Library::Library.xjs");
        this.addIncludeScript("AttachFilesPopup.xfdl","Library::Library_sub.xjs");
        this.registerScript("AttachFilesPopup.xfdl", function() {
        /********************************************************************************************/
        /**   1. Include                                                                            */
        /********************************************************************************************/
        this.executeIncludeScript("Library::Library.xjs"); /*include "Library::Library.xjs"*/
        this.executeIncludeScript("Library::Library_sub.xjs"); /*include "Library::Library_sub.xjs"*/

        /********************************************************************************************/
        /**   2. Form 변수 선언부                                                                  */
        /********************************************************************************************/
        var pathId;
        //var vOpenMenuName = '';

        this.oBindDataset;
        this.sBindColumn;
        this.aFileList;

        /********************************************************************************************/
        /**   3. OnLoad                                                                             */
        /********************************************************************************************/
        this.fn_Onload = function(obj, e)
        {
        	this.FileUpload00.set_itemheight(28);
        	this.FileUpload00.set_buttontext('선택');

        	this.aFileList = new Array();
        }

        // this.initAttachFiles = function(val)
        // {
        // 	this.ds_in.clearData();
        // 	var nRow = this.ds_in.addRow();
        // 	this.ds_in.setColumn(nRow, "Files_ID", val);
        // 	this.fn_search();
        // }

        // 초기화
        this.initAttachFiles = function(oDataset, sColumn)
        {
        	if(!this.gfn_isNull(oDataset) && !this.gfn_isNull(oDataset)) this.fn_setBind(oDataset, sColumn);

        	// FileUpload Component가 올려진 Form name 을 가져온다
        	var vString = 'this.parent.parent.formurl';
        	var vAddString = '';
        	var vFormUrl = '';

        	while(this.gfn_isNull(vFormUrl)) {
        		vAddString += 'parent.';
        		vFormUrl = eval(vString.substr(0, 5) + vAddString + vString.substr(5, vString.length));

        		if(this.gfn_isNull(vFormUrl)) vFormUrl = '';
        	}

        	// 폴더명,확장자 제거
        	vFormUrl = vFormUrl.substring(vFormUrl.indexOf('::')+2, vFormUrl.indexOf('.xfdl'));

        	// 이곳에 Form name을 추가해서 옵션을 준다
        // 	switch(vFormUrl) {
        // 		this.FileUpload00.set_multiselect(false);
        // 		this.FileUpload00.set_multiselect(true);
        // 	}
        }

        this.fn_setBind = function(oDataset, sColumn)
        {
        	// 전역변수에 Binding 정보 설정
        	this.oBindDataset = oDataset;
        	this.sBindColumn = sColumn;

        	// Dataset의 컬럼 Bind 처리
        	var oBindItem = new BindItem("__BindAttachFile", "Files_ID", "value", oDataset.name, sColumn);

        	this.addChild("__BindAttachFile", oBindItem);

        	oBindItem.bind();

        	// Bind Dataset Event Handler 추가
        	oDataset.addEventHandler("onload", this.fn_datasetOnloadEvent, this);
        	oDataset.addEventHandler("onrowposchanged", this.fn_datasetOnrowposchangedEvent, this);
        }

        /*++
        @desc	Binding Dataset의 onload 이벤트
        */
        this.fn_datasetOnloadEvent = function(obj, e)
        {
        	trace("onload : " + obj.getColumn(obj.rowposition, this.sBindColumn));
        	this.fn_clearAttachFiles();

        	if(obj.rowposition >= 0) this.fn_search(obj.getColumn(obj.rowposition, this.sBindColumn));
        }

        /*++
        @desc	첨부파일 초기화
        */
        this.fn_clearAttachFiles = function()
        {
        	this.aFileList = new Array();

        	this.ds_File.clearData();
        }

        /*++
        @desc	Binding Dataset의 onrowposchanged 이벤트
        */
        this.fn_datasetOnrowposchangedEvent = function(obj, e)
        {
        	trace("onrowposchanged : " + obj.getColumn(obj.rowposition, this.sBindColumn));
        	this.fn_clearAttachFiles();

        	if(obj.rowposition >= 0) this.fn_search(obj.getColumn(obj.rowposition, this.sBindColumn));
        }

        /********************************************************************************************/
        /**   4. Validation 처리                                                                    */
        /********************************************************************************************/

        /********************************************************************************************/
        /**   5. 서비스 호출(Transaction)                                                           */
        /********************************************************************************************/
        //파일 업로드 처리
        this.uploadFile = function()
        {
        	if(this.aFileList.length < 1) {
        		this.gfn_msgAlert("첨부된 파일이 없습니다.");
        		return;
        	}

        	var sUrl = "";

        	var strUrl = "AppSvrLocalMsSql::FTPFileUpload.do";
        	strUrl += "?saveUser=" + this.gfn_BlankStr("TEST");
        	strUrl += "&filesId=" + this.gfn_BlankStr(encodeURI(this.oBindDataset.getColumn(this.oBindDataset.rowposition, this.sBindColumn)));

        // 	if(vOpenMenuName == 'MtlMaster') {
        // 		strUrl += "&pathId=" + this.gfn_BlankStr(8);
        // 	} else {
        		strUrl += "&pathId=" + this.gfn_BlankStr(0);
        //	}

        	strUrl += "&fileTitle=" + this.gfn_BlankStr(encodeURI(""));

        	trace('Upload....');

        	var bSucc = this.FileUpload00.upload(strUrl);

        	return bSucc;
        }

        //파일 업로드 처리(썸네일포함)
        this.uploadFileThumb = function(url)
        {
        	var bSucc = this.FileUpload00.upload(url);

        	return bSucc;
        }

        //조회
        this.fn_search = function(sFileId)
        {
        	this.ds_in.setColumn(0, 'Files_ID', sFileId);

         	var sSvcID			= "load_attach_files";
         	var sURL			= "AppSvrLocalMsSql::CommonSelectAction.do";
         	var sInDatasets		= "ds_in=ds_in";
         	var sOutDatasets	= "ds_File=ds_out0";
         	var sArguments		= "sqlId=" + nexacro.wrapQuote("load_attach_files");

         	this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }

        //삭제
        this.fn_deleteFiles = function()
        {
        	var sSvcID			= "delete_attachFiles";
        	var sURL			= "AppSvrLocalMsSql::FTPFileDelete.do";
        	var sInDatasets		= "ds_in=ds_File00";
        	var sOutDatasets	= "";
        	var sArguments		= "sqlId=" + nexacro.wrapQuote("delete_attachFiles");

        	this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        }

        /********************************************************************************************/
        /**   6. Callback                                                                           */
        /********************************************************************************************/
         this.callbackFunction = function(strSvcID, nErrorCode, strErrorMsg)
         {
        	// 에러 체크 영역
        	if(nErrorCode < 0)
        	{
        		alert(this.gfn_removeJavaErrMsg(strErrorMsg));
        		return;
        	}

        	switch(strSvcID)
        	{
        		case "delete_attachFiles" :
        			this.fn_search();
        			break;
        		case "load_attach_files" :
        // 			if(vOpenMenuName == 'POS') {
        // 				this.parent.fn_FileLoadComplete();
        // 			} else if(vOpenMenuName == 'F6002100P' || vOpenMenuName == 'F6003550P') {
        // 				this.parent.parent.parent.fn_FileLoadComplete();
        // 			}
        			break;
        	}

         }

        /********************************************************************************************/
        /**   8. 사용자 함수                                                                       */
        /********************************************************************************************/
        // 첨부파일 존재 여부 확인
        this.existAttachFiles = function()
        {
        	//return this.ds_File.rowcount > 0;
        	return this.aFileList.length > 0;
        }

        // 추가/삭제할 파일수
        this.getAttachFileCount = function()
        {
        	return this.aFileList.length;
        }

        // 파일수
        this.getFileCount = function()
        {
        	return this.ds_File.getRowCount();
        }

        this.hasAttachFiles = function()
        {
        	var brst = false;
        	for (var i=this.ds_File.getRowCount()-1; i>=0; i--) {
        		if (this.ds_File.getRowType(i) == Dataset.ROWTYPE_NORMAL) {
        			brst = true;
        			break;
        		}
        	}
        	return brst;
        }

        this.isAttachFiles = function()
        {
        	var brst = false;
        	for (var i=this.ds_File.getRowCount()-1; i>=0; i--) {
        		if (this.ds_File.getRowType(i) != Dataset.ROWTYPE_NORMAL) {
        			brst = true;
        			break;
        		}
        	}
        	return brst;
        }

        /********************************************************************************************/
        /**   9. 이벤트(Event) 처리                                                                 */
        /********************************************************************************************/
        //파일 선택시
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	if(this.ds_File.rowcount > 0) this.ds_File.clearData();

        	var vNewValue = e.newvalue.toString();

        	var rtnArr = vNewValue.split(",");
        	var sFilePath;
        	var sFileName;
        	var dirExpt;
        	var idx;
        	var vLen = rtnArr.length;

        	for(var i=0; i<vLen; i++){
        		sFilePath = rtnArr[i];
        		dirExpt = sFilePath.lastIndexOf("\\")+1;
        		sFileName = sFilePath.substr(dirExpt);

        		// MtlMaster 확장자 체크
        // 		if(vOpenMenuName == 'MtlMaster' || vOpenMenuName == 'AS' || vOpenMenuName == 'QA') {
        // 			var vFilterEXT = ['.jpg', '.png', '.gif'];
        // 			var vUPFileEXT = sFileName.substring(sFileName.length-4, sFileName.length).toLowerCase();
        // 			var vCheck = false;
        //
        // 			for(var j=0; j<vFilterEXT.length; j++) {
        // 				if(vUPFileEXT == vFilterEXT[j]) {
        // 					vCheck = true;
        // 					break;
        // 				}
        // 			}
        //
        // 			if(!vCheck) continue;
        // 		}

        		// AS 요청게시판 이미지는 5개까지 첨부가능
        // 		if(vOpenMenuName == 'AS' && this.ds_File.rowcount == 5) {
        // 			if(i == 5) break;
        // 			this.ds_File.setColumn(i, "FilePath", sFilePath);
        // 			this.ds_File.setColumn(i, "FilesName", sFileName);
        // 			this.ds_File.setColumn(i, "FileSeq", nexacro.toNumber(i)+1);
        // 		// QA 요청게시판 이미지는 5개까지 첨부가능
        // 		} else if(vOpenMenuName == 'QA' && this.ds_File.rowcount == 5) {
        // 			if(i == 5) break;
        // 			this.ds_File.setColumn(i, "FilePath", sFilePath);
        // 			this.ds_File.setColumn(i, "FilesName", sFileName);
        // 			this.ds_File.setColumn(i, "FileSeq", nexacro.toNumber(i)+1);
        // 		} else {
        			idx = this.ds_File.addRow();
        			this.ds_File.setColumn(idx, "FilePath", sFilePath);
        			this.ds_File.setColumn(idx, "FilesName", sFileName);
        			this.ds_File.setColumn(idx, "FileSeq", nexacro.toNumber(idx)+1);
        			this.ds_File.setColumn(idx, "ROW_STS", "I");

        			this.aFileList.push(rtnArr[i]);
        //		}
        	}

        	// MtlMaster > 이미지가 선택됐다는 표시 세팅
        // 	if(vOpenMenuName == 'MtlMaster' || vOpenMenuName == 'POS' || vOpenMenuName == 'AS' || vOpenMenuName == 'QA') {
        // 		this.parent.fn_SetImageSelected(this.ds_File.rowcount, this.ds_File.getColumn(idx, 'FilesName'), this.ds_File);
        // 	}
        }

        //파일 업로드 완료 후 필요한 parent 에 succ callback 전달
        this.FileUpload00_onsuccess = function(obj,e)
        {
        	trace("Upload success");
        	this.oBindDataset.setColumn(this.oBindDataset.rowposition, this.sBindColumn, e.datasets[0].getColumn(0, 'Files_ID'));

        	var vString = 'this.parent.fn_FileUploadSucc';
        	var vAddString = '';
        	var vFormUrl = '';

        	while(!(typeof eval(vFormUrl) === 'function')) {
        		vAddString += 'parent.';
        		vFormUrl = vString.substr(0, 5) + vAddString + vString.substr(5, vString.length);
        	}

        	eval(vFormUrl + '()');
        }

        // 삭제
        this.btnDelete_onclick = function(obj,  e)
        {
        	this.ds_File00.clearData();

        	if(this.gfn_DeleteCheckExist(this.ds_File)) {
        		if(this.gfn_Confirm("삭제 하시겠습니까?")) {
        			for(var i=this.ds_File.rowcount; i>=0; i--) {
        				//체크된 데이터만
        				if(this.ds_File.getColumn(i, "ROW_CHK") == 1 && this.ds_File.getColumn(i, "ROW_STS") == "S") {
        					this.ds_File00.copyRow(this.ds_File00.addRow(), this.ds_File, i);
        				} else if(this.ds_File.getColumn(i, "ROW_CHK") == 1 && this.ds_File.getColumn(i, "ROW_STS") == "I") {
        					this.ds_File.deleteRow(i);	// 아직 저장되지 않은 파일은 목록에서 제거
        				}
        			}
        			if(this.ds_File00.rowcount > 0) {
        				this.fn_deleteFiles();
        			}

        			this.FileUpload00.deleteItem(0);
        			this.FileUpload00.appendItem(0);
        		}
        	}
        	else {
        		this.gfn_msgAlert("삭제할 데이터를 선택해 주세요.");
        		return;
        	}
        }

        // 전체선택/해제
        this.grd_FileList_onheadclick = function(obj, e)
        {
        	this.gfn_multiAllChk(obj, "ROW_CHK", e.cell);
        }

        // 다운로드
        this.btnDown_onclick = function(obj, e)
        {
        	for(var i=0; i<this.ds_File.rowcount; i++) {
        		//체크된 데이터만
        		if(this.ds_File.getColumn(i, "ROW_CHK") == 1) {
        			//다운로드 시작
        			var sUrl = "";
        			var sAttachFilesId = this.ds_File.getColumn(i, "AttachFile_ID");
        			var sFilesNm = this.ds_File.getColumn(i, "FilesName");

        			// FTP 방식 처리시 WAS 직접 처리 (PortalSrv)
        			sUrl += "AppSvrLocalMsSql::FTPFileDownload.do?attachFilesId=" + sAttachFilesId + "&mode=download";

        			this.FileDownload00.downloadurl = sUrl;
        			this.FileDownload00.set_downloadfilename(sFilesNm);

        			var bSucc = this.FileDownload00.download();

        			trace("download : " + bSucc);
        		}
        	}
        }

        //기존목록 제거 체크
        this.FileUpload00_onfindclick = function(obj, e)
        {
        // 	if(this.ds_File.rowcount > 0) {
        // 		if(this.gfn_msgConfirm("새 파일 추가시 기존 추가된 파일목록은 지워집니다. 진행하시겠습니까?")) {
        // 			return true;
        // 		} else {
        // 			return false;
        // 		}
        // 	}

        	return true;
        }

        // 더블클릭 다운로드
        this.grd_FileList_oncelldblclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.ds_File.getColumn(e.row, "AttachFile_ID")))
        	{
        		var sAttachFileId = this.ds_File.getColumn(e.row, "AttachFile_ID");
        		var sAttachFileNm = this.ds_File.getColumn(e.row, "FilesName");

        		this.downloadFile(sAttachFileId, sAttachFileNm);

        		//다운로드 시작
        		var sUrl = "";

        		// FTP 방식 처리시 WAS 직접 처리 (PortalSrv)
        		sUrl += "AppSvrLocalMsSql::FTPFileDownload.do?attachFilesId=" + sAttachFileId + "&mode=download";

        		this.FileDownload00.downloadurl = sUrl;
        		this.FileDownload00.set_downloadfilename(sAttachFileNm);

        		var bSucc = this.FileDownload00.download();

        		trace("download : " + bSucc);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_Onload,this);
            this.Button00.addEventHandler("onclick",this.btn_upload,this);
            this.FileUpload00.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.FileUpload00.addEventHandler("onsuccess",this.FileUpload00_onsuccess,this);
            this.FileUpload00.addEventHandler("onfindclick",this.FileUpload00_onfindclick,this);
            this.btnDown.addEventHandler("onclick",this.btnDown_onclick,this);
            this.grd_FileList.addEventHandler("onheadclick",this.grd_FileList_onheadclick,this);
            this.grd_FileList.addEventHandler("oncelldblclick",this.grd_FileList_oncelldblclick,this);
            this.btn_Delete01.addEventHandler("onclick",this.btnDelete_onclick,this);
        };

        this.loadIncludeScript("AttachFilesPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
