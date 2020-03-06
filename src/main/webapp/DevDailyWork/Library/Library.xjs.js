//XJS=Library.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**********************************************************************************
         * Function Name:
         * Description  :
         * Arguments    :
         * Return       :
         **********************************************************************************/
        this.gfn_GetOS = function ()
        {
        	var OSVersion = system.osversion;
        	if (this.gfn_isNull(OSVersion))
        	{
        		return "ETC";
        	}

        	OSVersion = OSVersion.toUpperCase();

        	if (OSVersion.indexOf("ANDROID") >= 0)
        	{
        		return "ANDROID";
        	}
        	else if (OSVersion.indexOf("IOS") >= 0)
        	{
        		return "IOS";
        	}
        	else if (OSVersion.indexOf("WINDOWS") >= 0)
        	{
        		return "WINDOWS";
        	}
        	else
        	{
        		return "ETC";
        	}
        };
        /**********************************************************************************
         * Function Name:
         * Description  :
         * Arguments    :
         * Return       :
         **********************************************************************************/
        this.gfn_GetNavigator = function()
        {
        	var OSNavigator = system.navigatorname;

        	if (this.gfn_isNull(OSNavigator))
        	{
        		return "NOT DEFINE";
        	}

        	OSNavigator = OSNavigator.toUpperCase();
        	return OSNavigator;
        }
        /**********************************************************************************
         * Function Name:
         * Description  :
         * Arguments    :
         * Return       :
         **********************************************************************************/
        this.gfn_isNull = function(Val)
        {
        	if (new String(Val).valueOf() =="undefined"){
        		return true;
        	}
        	if (Val == null){
        		return true;
        	}
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")){
        		return true;
        	}
        	if (Val.length == 0){
        		return true;
        	}

        	return false;

        }
        /*******************************************************************************
         * Function Name: gfn_BlankStr
         * Description  :
         * Arguments    :
         * Return       :
         *******************************************************************************/
        this.gfn_BlankStr = function (oParam)
        {
        	var strParam = new String(oParam);

        	if (this.gfn_isNull(strParam))
        	{
        		// return "";
        		//
        		// if(strParam.valueOf() == "undefined") {
        		return "";
        	}

        	return oParam;
        };

        /*******************************************************************************
         * Function Name: gfn_BlankZero
         * Description  :  값이 없으면 0으로 return
         * Arguments    :
         * Return       :
         *******************************************************************************/
        this.gfn_BlankZero = function(oParam) {

        	var strParam = new String(oParam);
         	if(this.gfn_isNull(oParam)) {
        		return 0;
        	}

        	return nexacro.toNumber(oParam);
        }
        /*******************************************************************************
         * Function Name: gfn_isEmpty
         * Description  : 입력값이 Null이거나 빈값인지 체크한다.
         * Arguments    : sValue
         * Return       : true / false
         *******************************************************************************/
        this.gfn_isEmpty = function (Val)
        {
        	return this.gfn_isNull(Val);
        };

        /**********************************************************************************
         * Function명   : gfn_Left
         * 설명         : 문자열의 왼쪽부분을 지정한 길이만큼 Return 한다.
         * Parameter    : strString (왼쪽부분을 얻어올 원본 문자열)
         *                     nSize (얻어올 크기. [Default Value = 0])
         * Return       : String/왼쪽 부분이 얻어진 문자열.
         **********************************************************************************/
        this.gfn_Left = function(strString, nSize)
        {
            var rtnVal = "";
            if (nSize > String(strString).length || nSize == null)
                rtnVal = strString;
            else
                rtnVal = strString.substring(0, nSize);

            return rtnVal;
        }

        /**********************************************************************************
         * Function Name: gfn_Replace()
         * Description  : 입력된 문자열의 일부분을 다른 문자열로 치환하는 함수
         * Arguments    : strString 원본 문자열.
         *               strOld    원본 문자열에서 찾을 문자열.
         *               strNew    새로 바꿀 문자열.
         * return       : 대체된 문자열
         **********************************************************************************/
        this.gfn_Replace = function (Val, strOld, strNew)
        {
           //trace("=== gfn_Replace ===");
        	Val = this.gfn_ToString(Val);
        	Val = Val.split(eval("/" + strOld + "/g")).join(strNew);
        	// Val = Val.split(strOld).join(strNew);
        	return Val;
        }

        /*******************************************************************************
         * Function Name: gfn_ToString
         * Description  : 입력값을 String으로 변경한다.
         * Arguments    : Val
         * Return       : String
         *******************************************************************************/
        this.gfn_ToString = function (Val)
        {
        	if (this.gfn_isNull(Val))
        	{
        		return new String();
        	}
        	return new String(Val);
        }

        /*******************************************************************************
         * 함 수 명 	: gfn_Today
         * 함수설명 	: 해당 PC의 오늘 날짜를 가져온다
         * 입    력 	: None
         * 결    과 	: string
         ******************************************************************************/
        this.gfn_Today = function ()
        {
        	var strToday = "";
        	var objDate = new Date();
        	var strToday = objDate.getFullYear() + "";
        	strToday += this.gfn_Right("0" + (objDate.getMonth() + 1), 2);
        	strToday += this.gfn_Right("0" + objDate.getDate(), 2);

        	return strToday;
        };

        /*********************************************************************
         * 함 수 명 	: gfn_Right
         * 함수설명 	: 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
         * 입    력 	: strString	- 대상 문자열
         *			  	  nSize		- 얻어올 크기. [Default Value = 0]
         * 결    과 	: 오른쪽 부분이 얻어진 문자열.
         *********************************************************************/
        this.gfn_Right = function (strString, nSize)
        {
        	var nStart = String(strString).length;
        	var nEnd = Number(nStart) - Number(nSize);
        	var rtnVal = strString.substring(nStart, nEnd);

        	return rtnVal;
        };

        /**********************************************************************************
         * Function Name: gfn_openMenu
         * Description  : 메뉴 아이디를  기준으로 신규 윈도우 화면을 생성하고 open 시킴
         * Arguments    : menuid: 메뉴아이디, aArgs: 넘겨줄 Argument
         * Return       : 없음
         **********************************************************************************/
        this.gfn_openMenu = function (menucode, aArgs)
        {
        	var USER_CODE = HINTS.gds_User.getColumn(0,"UserCode");
        	switch(menucode) {
        		case "LoadMenu": // 메뉴 복구
        			HINTS.gds_Logon.clearData();

        			HINTS.gds_Logon.setColumn(HINTS.gds_Logon.addRow(), "UserCode",USER_CODE);
        			trace("HINTS.USERCODE: "+USER_CODE);

        			var sSvcID			= "load_menu";
        			var sURL			= "AppSvr::CommonSaveAction_Return.do";
        			var sInDatasets		= "ds_in0=gds_Logon";
        			var sOutDatasets	= "gds_Menu=ds_out0";
        			var sArguments		= "sqlId=" + nexacro.wrapQuote("load_menu");

        			this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        			break;
        		case "LoadLang": // 언어 복구
        			HINTS.gds_Logon.clearData();
        			HINTS.gds_Logon.setColumn(HINTS.gds_Logon.addRow(), "UserCode", USER_CODE);

        			var sSvcID			= "load_mssg";
        			var sURL			= "AppSvr::CommonSaveAction_Return.do";
        			var sInDatasets		= "ds_in0=gds_Logon";
        			var sOutDatasets	= "gds_MsgSet=ds_out0";
        			var sArguments		= "sqlId=" + nexacro.wrapQuote("load_mssg");

        			this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        			break;
        		case "LoadCtrl": // 공통코드 복구
        			HINTS.gds_Logon.clearData();
        			HINTS.gds_Logon.setColumn(HINTS.gds_Logon.addRow(), "UserCode", USER_CODE);

        			var sSvcID			= "load_ctrlitem";
        			var sURL			= "AppSvr::CommonSaveAction_Return.do";
        			var sInDatasets		= "ds_in0=gds_Logon";
        			var sOutDatasets	= "gds_CommCode=ds_out0";
        			var sArguments		= "sqlId=" + nexacro.wrapQuote("load_ctrlitem");

        			this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction");
        			break;
        		case "Close": // 종료
        			if(this.gfn_msgConfirm("로그아웃 하시겠습니까?")){
        				HINTS.gv_TopFrame.set_formurl("Frame::Form_Logon.xfdl");
        				HINTS.gv_MainFrameSet.set_separatesize("*,0");
        				HINTS.gv_TopFrame.form.fn_WriteAccessLogout();

        				// 오픈되어있는 팝업 종료.
        				var oPopup = HINTS.popupframes;
        				for(var j=(oPopup.length-1); j>=0; j--) {
        					oPopup[j].form.close(false);
        				}

        				// 오픈되어있는 화면 종료.
        				var oFrameSet = HINTS.gv_mdiFrameSet;
        				for (var i=(oFrameSet.all.length-1); i>=0; i--) {
        					oFrameSet.all[i].form.close();
        				}
        			}
        			break;
        		default:
        			var nRow = HINTS.gds_Menu.findRow(HINTS.gv_MenuCodeCol, menucode);
        			HINTS.gv_TabFrame.form.fn_MenuOpen(nRow);  //이때 중간에 form object명을 넣어야 됨
        		}
        }

         /**********************************************************************************
         * Function Name:  gfn_openDialog
         * Description  : 파라메터가 있는 다이얼로그 창을 타입별로 띄운다
         * Arguments    : 화면아이디, URL, 가로, 세로, 타입, 파라메터
         * Return       : 결과값
         **********************************************************************************/
        this.gfn_openDialog = function (strid, url, nPopupWidth, nPopupHeight, type, obj, arg, callback)
        {

        	if (type == "modal"){
        		// 동적으로 생성한 ChildFrame을 Modal Dialog로 보여줌.
        		this.gfn_showModal(strid, arg, url, callback, obj, nPopupWidth, nPopupHeight);
        	}
        	else{
        		this.gfn_openPopup(strid, arg, url, obj, nPopupWidth, nPopupHeight);
        	}
        }

        this.gfn_showModal = function (sPopupId, arrArguments, sPopupUrl, popupCallback, obj, nPopupWidth, nPopupHeight)
        {
        	// 현재 구동되는 정보를 업데이트 한다.
        	var childFrame = new ChildFrame();
        	var parentFrame = obj.getOwnerFrame();

        	var sOpenAlignType = "center middle";

        	var nPopupLeft = "";
        	var nPopupTop = "";

        	childFrame.init(sPopupId, nPopupLeft, nPopupTop, nexacro.toNumber(nPopupWidth) + 4, nexacro.toNumber(nPopupHeight) + 20 + 4, null, null, sPopupUrl);

        	childFrame.set_openalign(sOpenAlignType);
        	childFrame.set_autosize(false);
        	childFrame.set_dragmovetype("normal");

        	childFrame.set_showtitlebar(true);
        	childFrame.set_border("3 solid #351b6f");
        	childFrame.set_border("normal");

        	// 동적으로 생성한 ChildFrame을 Modal Dialog로 보여줌.
        	childFrame.showModal(parentFrame, arrArguments, obj, popupCallback, true);


        };

        this.gfn_openPopup = function(sPopupId, arrArguments, sPopupUrl, obj, nPopupWidth, nPopupHeight, bShowFrameTitle, bShowFrameStatus, sAlignType)
        {
        	var sShowStatus = "";

        	if (this.gfn_isNull(bShowFrameStatus) || bShowFrameStatus == false)
        	{
        		sShowStatus = false;
        	}
        	else if (bShowFrameStatus == true)
        	{
        		sShowStatus = true;
        	}

        	var sShowTitle = "";
        	if (this.gfn_isNull(bShowFrameTitle) || bShowFrameTitle == false)
        	{
        		sShowTitle = false;
        	}
        	else if (bShowFrameTitle == true)
        	{
        		sShowTitle = true;
        	}

        	var sOpenAlignType = "center middle";

        	if (!this.gfn_isNull(sAlignType))
        	{
        		sOpenAlignType = sAlignType;
        	}

        	var parentFrame = obj.getOwnerFrame();

        	var popupLeft = 0;
        	var popupTop = 0;
        	var sOpt = "showtitlebar="+sShowTitle+" showstatusbar="+sShowStatus+" openalign='"+sOpenAlignType+"'";	//only runtime

        	/*
        	for (var i = 0; i < nexacro.getPopupFrames().length; i++)
        	{
        		if (nexacro.getPopupFrames()[i].name == sID)
        		{
        			alert("화면이 열려있습니다.");
        			nexacro.getPopupFrames()[i].form.setFocus();
        			return false;
        		}
        	}
        	*/
        	// 신규 Modeless 팝업 호출
        	// application.open(sID, sURL, objMyFrame, sArg, sOpt, popupLeft, popupTop, nWidth, nHeight, this);
        	nexacro.open(sPopupId, sPopupUrl, parentFrame, arrArguments, sOpt, 100,100);
        };

         /**********************************************************************************
         * Function Name:  gfn_openDialogCenter
         * Description  : 파라메터가 있는 다이얼로그 창을 타입별로 띄운다
         * Arguments    : 화면아이디, URL, 가로, 세로, 타입, 파라메터
         * Return       : 결과값
         **********************************************************************************/
        this.gfn_openDialogCenter = function (strid, url, nPopupWidth, nPopupHieght, type, arg, callback, resize, titlebar)
        {
        	var posX;
        	var posY;
        	// this.parent.divMain말고 application.mainframe...이런식으로 접근해야 팝업의 팝업이 적용될 듯. 임시로 try catch 처리.
        	// height 125 빼는 것은 브라우저의 타이틀바 기본 사이즈..

        	// trace('11 : ' + application.mainframe.vStartFrameSet.vMainFrameSet.hMiddleFrameSet.vWorkFrameSet.mdiFrameSet.width );
        	try
        	{
        		posX = Math.round((HINTS.mainframe.vStartFrameSet.vMainFrameSet.width - nPopupWidth) / 2);
        		// posY = Math.round((application.mainframe.vStartFrameSet.vMainFrameSet.hMiddleFrameSet.vWorkFrameSet.mdiFrameSet.height - 125 - nPopupHieght)/2);
        		posY = Math.round((HINTS.mainframe.vStartFrameSet.vMainFrameSet.height - 125 - nPopupHieght) / 2);
        	}
        	catch (e)
        	{
        		posX = (1024 - nPopupWidth) / 2;
        		posY = (768 - 125 - nPopupHieght) / 2;
        	}
        	// var posY = 50;

        	var objNew = new ChildFrame();

        	objNew.init(strid, "absolute", posX, posY, nPopupWidth, nPopupHieght, null, null, url);
        	// objNew.set_visible(false);
        	objNew.set_showtitleicon(false);
        	objNew.style.set_border("2px solid red");
        	objNew.style.set_bordertype("round 3px 3px");
        	// objNew.set_openalign("center top");

        	if (resize == null)
        	{
        		objNew.set_resizable(true);
        	}
        	else
        	{
        		objNew.set_resizable(resize);
        	}

        	if (titlebar == null)
        	{
        		titlebar = true;
        	}
        	else
        	{
        		objNew.set_showtitlebar(titlebar);
        	}

        	if (type == "modeless")
        	{
        		result = nexacro.open(strid, url, null, arg, "showtitlebar=true showstatusbar=false", posX, posY, nPopupWidth, nPopupHieght, this);
        	}
        	else
        	{
        		result = objNew.showModal(strid, null, arg, this, callback);
        	}

        	return result;
        }

         /**********************************************************************************
         * Function Name:  gfn_getCommCode
         * Description  : Dataset 공통코드 처리
         * Arguments    :
         * Return       :
         **********************************************************************************/
        this.gfn_getCommCode = function(oDs, sGcd, gubn)
        {
        	oDs.clearData();
         	HINTS.gds_CommCode.filter("CodeGroup=='" + sGcd + "'");
         	oDs.copyData(HINTS.gds_CommCode, true);
         	if(gubn == true) oDs.insertRow(0);

         	HINTS.gds_CommCode.filter("");
        }

        /********************************************************************************
         * Function Name: gfn_Alert
         * Description	: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을
         *				  생성해서 해당 값을 보여주는 함수
         * Arguments	: strMsgId(MessageId)
         *				  strMsgType(메세지 종류 : ERR, WARN, INFO)
         *				  msgArr[](메세지값으로 치환될 Parameter Array)
         * Return 		: 팝업에 해당 메세지값을 표현
         ********************************************************************************/
        this.gfn_Alert = function (strMsgId, strMsgType, msgArr)
        {
        	// strMsgType : "default", "error", "question", "warning", "information" (default)

        	if (this.gfn_isNull(strMsgType))
        	{
        		strMsgType = "information";
        	}

        	// var strMsg = this.gfn_getDomainText(strMsgId, msgArr);
        	var strMsg = strMsgId;
        	this.alert(strMsg, HINTS.gv_MsgTitle, strMsgType);

        	return;
        };

         /**********************************************************************************
         * Function Name:  gfn_message
         * Description  : 파라메터에 따라 알람창 또는 확인창 띄움
         * Arguments    :  메시지아이디
         * Return       : 팝업창
         **********************************************************************************/
        this.gfn_message = function(gubun, sMsgStrId, sMsgStr)
        {
        	var cRp = HINTS.gds_MsgSet.findRow("idx", sMsgStrId);
        	var sMessage = String(HINTS.gds_MsgSet.getColumn(cRp, "KoMsg"));

        	if(this.gfn_BlankStr(sMessage)=="") sMessage=sMsgStrId;	//언어코드가 없는 경우 메세지를 그대로 출력
        	//"("+String(gds_MssgSet.getColumn(cRp, "idx"))+") "+
        	if(sMsgStr != null) {
        		var aMsg = new Array();
        		aMsg = String(sMsgStr).split(",");

        		for (var i = 0; i < aMsg.length; i++)
        		{
        			if (sMessage.indexOf("[@]") == -1) {
        				continue;
        			}

        			var sSlip1 = sMessage.substr(0, sMessage.indexOf("[@]") + 3);
        			var sSlip2 = sMessage.substr(sMessage.indexOf("[@]") + 3, sMessage.length);
        			sMessage = sSlip1.replace("[@]", aMsg[i]);
        			sMessage = sMessage + sSlip2;
        			sMessage = sMessage.replace("\n", "\n");
        		}
        	}

        	var tText = "";
        	if(this.gfn_BlankStr(HINTS.gds_MsgSet.getColumn(cRp, "idx"))!="")
        	{
        		tText ="["+this.gfn_BlankStr(HINTS.gds_MsgSet.getColumn(cRp, "idx"))+"]";
        	}

        	if(gubun)
        	{
        		//return HINTS.mainframe.alert(sMessage, "Message"+tText);
        		return this.alert(sMessage, "Message"+tText);
        	}
        	else
        	{
        		//return HINTS.mainframe.confirm(sMessage, "Confirm"+tText);
        		return this.confirm(sMessage, "Confirm"+tText);
        	}
        }

         /**********************************************************************************
         * Function Name:  gfn_msgConfirm
         * Description  : 파라메터에 따라 확인창을 띄움
         * Arguments    :  메시지아이디
         * Return       : 팝업창
         **********************************************************************************/
        this.gfn_msgConfirm = function(sMsgStrId, sMsgStr)
        {
        	//trace("sMsgStrId : " + sMsgStrId);
        	return this.gfn_message(false, sMsgStrId, sMsgStr);
        }

         /**********************************************************************************
         * Function Name:  gfn_msgAlert
         * Description  : 파라메터에 따라 알림창을 띄움
         * Arguments    :  메시지아이디, 메시지값
         * Return       : 팝업창
         **********************************************************************************/
        this.gfn_msgAlert = function(sMsgStrId, sMsgStr)
        {
        	//trace(sMsgStr);
        	return this.gfn_message(true, sMsgStrId, sMsgStr);
        }

        /********************************************************************************
         * Function Name: gfn_Confirm
         * Description	: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을
         *				  생성해서 해당 값을 보여주는 함수
         * Arguments	: strMsgId(MessageId)
         *				  strMsgType(메세지 종류 : ERR, WARN, INFO)
         *				  msgArr[](메세지값으로 치환될 Parameter Array)
         * Return 		: 팝업에 해당 메세지값을 표현
         ********************************************************************************/
        this.gfn_Confirm = function (strMsgId, strMsgType, msgArr)
        {
        	// strMsgType : "default", "error", "question", "warning", "information" (default)
        	if (this.gfn_isNull(strMsgType))
        	{
        		strMsgType = "question";
        	}

        	var strMsg = strMsgId ;//this.gfn_getDomainText(strMsgId, msgArr);

        	return this.confirm(strMsg, HINTS.gv_MsgTitle, strMsgType);
        }

         /**********************************************************************************
         * Function Name:  gfn_RemoveJavaErrMsg
         * Description  : 자바 에러메세지를 삭제하고 리턴
         * Arguments    :  메시지값
         * Return       :
         **********************************************************************************/
        this.gfn_RemoveJavaErrMsg = function(strErrorMag)
        {
        	var rtnMsg = this.gfn_BlankStr(strErrorMag);
        	var stCnt = 0;
        	var endCnt = 0;

        	stCnt = rtnMsg.indexOf("§");
        	endCnt = rtnMsg.indexOf("§", stCnt+1);
        	if(stCnt>-1) rtnMsg = rtnMsg.slice(stCnt+1, endCnt);
        	return rtnMsg;
        }

         /**********************************************************************************
         * Function Name:  gfn_SetCmbFirstRow
         * Description  :  콤보 첫번째 Row 처리
         * Arguments    :   objCmb 		  : 콤보명
        					 bFirstSel    : 첫번째 Row select 여부 (true/false)
        					 sCd          : 코드명
        					 sName        : 명칭
        					 sFirstGB     : 첫번째 값 구분 ('':row추가 안함, 'A':ALL, 'S':Select, 'B':빈 ROW추가
        					 , 'S ':값이 존재 하면 select,  없으면 row추가 없음
         * Return       :
         **********************************************************************************/
        this.gfn_SetCmbFirstRow = function (objCmb, bFirstSel, sCd, sName, sFirstGB, objMainDs, bUpdateControl, sDefaultVal)
        {
        	var objDs = objMainDs;

        	// if (this.gfn_GetCompType(objDs) != "Dataset" ) objDs = eval(objDs);

        	// 1. 첫 번째Row 추가
        	this.gfn_SetFirstRow(objDs, sCd, sName, sFirstGB);

        	// 2. 첫 번째값 선택 여부
        	if (bFirstSel == true)
        	{
        		if (bUpdateControl == true)
        		{
        			objMainDs.enableevent = false;
        		}
        		objCmb.set_index(0);
        		if (bUpdateControl == true)
        		{
        			objMainDs.enableevent = true;
        		}
        	}
        };
         /**********************************************************************************
         * Function Name:  gfn_SetFirstRow
         * Description  :
         * Arguments    :
         * Return       :
         **********************************************************************************/
        this.gfn_SetFirstRow = function (objDs, sCd, sName, sFirstGB)
        {
        	if (sFirstGB == 'A')
        	{
        		objDs.insertRow(0);
        		objDs.setColumn(0, sCd, '');
        		objDs.setColumn(0, sName, '<-All->');
        	}
        	else if (sFirstGB == 'S')
        	{
        		objDs.insertRow(0);
        		objDs.setColumn(0, sCd, '');
        		objDs.setColumn(0, sName, '<-Select->');
        	}
        	else if (sFirstGB == 'S ')
        	{
        		if (objDs.rowcount > 0)
        		{
        			objDs.insertRow(0);
        			objDs.setColumn(0, sCd, '');
        			objDs.setColumn(0, sName, '<-Select->');
        		}
        	}
        	else if (sFirstGB == 'B')
        	{
        		objDs.insertRow(0);
        		objDs.setColumn(0, sCd, '');
        		objDs.setColumn(0, sName, '');
        	}
        };

        this.gfn_callMain = function()
        {
        	var objNewWinMain = new ChildFrame;
        	objNewWinMain.init("MainForm", "absolute", 0, 0, this.gv_FrameSet.getOffsetWidth() - 0, this.gv_FrameSet.getOffsetHeight() - 0);
        	this.gv_FrameSet.addChild("MainForm", objNewWinMain);
        	objNewWinMain.set_formurl("Frame::Form_Main.xfdl");
        	objNewWinMain.set_dragmovetype("none");
        	objNewWinMain.set_showtitlebar(false);
        	objNewWinMain.set_resizable(false);
        	objNewWinMain.set_openstatus("maximize");
        	objNewWinMain.show();

        //	gv_vFrameSet1.set_separatesize("0,*");
        }


        /**********************************************************************************
         * Function Name:  gfn_setUserGrid
         * Description  : 사용자별 커스텀 그리드 세팅
         * Arguments    :
         * Return       :
         **********************************************************************************/
        this.gfn_setUserGrid = function (objGrid)
        {
        	HINTS.gds_UserGridSet.clearData();
        	HINTS.gds_UserGridSet.addRow();

        	var nMenuId = HINTS.gv_activeMenuId;
        	var nRow = HINTS.gds_Menu.findRow("MenuCode", nMenuId);
        	var nFormId = HINTS.gds_Menu.getColumn(nRow, "FormCode");

        	HINTS.gds_UserGridSet.setColumn(0, "FormCode", nFormId);
        	HINTS.gds_UserGridSet.setColumn(0, "GridID", objGrid);
        	HINTS.gds_UserGridSet.setColumn(0, "UserCode", HINTS.gds_User.getColumn(0, "UserCode"));

        	objGrid.orgFormat = objGrid.getCurFormatString(); //그리드 원본 포맷 정보 UserProperty로 설정

        	this.gfn_getGridFormat(objGrid); //설정 불러오기 함수 호출
        	nexacro.getEnvironment().set_usecontextmenu('none'); //브라우저에서 제공하는 ContextMenu 차단

        	// 공통팝업메뉴 오프젝트 생성
        	var objPopMenu = new PopupMenu();
        	objPopMenu.init("popMenu_" + objGrid.id, "absolute", 0, 0, 68, 65);

        	this.addChild(objPopMenu.name, objPopMenu);

        	objPopMenu.set_innerdataset(HINTS.gds_GridPopMenu);
        	objPopMenu.set_idcolumn("id");
        	objPopMenu.set_levelcolumn("level");
        	objPopMenu.set_captioncolumn("caption");

        	objPopMenu.addEventHandler("onmenuclick", this.popupmenu_onmenuclick, this); //이벤트 등록

        	objPopMenu.show();

        	// UserPropery 설정
        	objPopMenu.targetGrid = objGrid;
        	objGrid.targetHideColList = new Array();
        	objGrid.targetHideColSize = new Array();
        	objGrid.targetPopupMenu = objPopMenu;

        	objGrid.addEventHandler("onrbuttondown", this.grid_onrbuttondown, this);
        };


         /**********************************************************************************
         * Function Name:  gfn_getGridFormat
         * Description  : 사용자별 커스텀 그리드 설정 불러오기 함수
         * Arguments    :
         * Return       :
         **********************************************************************************/
        this.gfn_getGridFormat = function (objGrid)
        {
        	HINTS.gds_UserGridSetOut.clearData();

        	var sSvcID = "load_userGridSet";
        	var sURL = "AppSvr::CommonSelectAction.do";
        	var sInDatasets = "ds_in=gds_UserGridSet";
        	var sOutDatasets = "gds_UserGridSetOut=ds_out0";
        	var sArguments = "sqlId=" + nexacro.wrapQuote("load_userGridSet");

        	this.transaction(sSvcID, sURL, sInDatasets, sOutDatasets, sArguments, "callbackFunction", false);

        	var sGridFormat = HINTS.gds_UserGridSetOut.getColumn(0, "xmlString");

        	if (!this.gfn_isNull(sGridFormat))
        	{
        		objGrid.set_formats(("<Formats>" + sGridFormat + "</Formats>"));
        	}
        	else
        	{
        		objGrid.set_formats(("<Formats>" + objGrid.orgFormat + "</Formats>"));
        	}
        };

        // /////////////////////////////////////////////////////////////////////////////////////////////////
        // DATABASE




        /**********************************************************************************
         * Function Name: gfn_ExistColumnId
         * Description  : 해당 dataset에서 컬럼명이 존재 하는지 검사
         * Arguments    : objDs  - 검사할 dataset
                          sColId - 검사할 컬럼명
         * Return       : boolean
         **********************************************************************************/
        this.gfn_ExistColumnId = function(objDs, sColId){
        	var nColCnt = objDs.colcount;

        	for(var i=0; i < nColCnt; i++){
        		if (sColId == objDs.getColID(i)) return true;
        	}
        	return false;
        }

        /**********************************************************************************
         * Function Name: gfn_DsGetUpdated
         * Description  : Datset의 갱신여부를  Return 한다.
         * Arguments    : objDs	확인 대상 Dataset
         * Return       : boolean
         **********************************************************************************/
        this.gfn_DsGetUpdated = function (objDs)
        {
        	this.gfn_updateToDataset();
        	return this.gfn_DsIsUpdated(objDs);
        };

        /**********************************************************************************
         * Function Name: gfn_updateToDataset
         * Description  : 컨트롤이 Dataset에 bind되어 있을경우 즉시 value를 Dataset에 적용시킨다.
         * Arguments    :
         * Return       :
         **********************************************************************************/
        this.gfn_updateToDataset = function ()
        {
        	var objComp = this.getFocus();

        	if (objComp != null)
        	{
        		try
        		{
        			objComp.parent.applyChange();
        		}
        		catch (e)
        		{
        		}
        	}
        };

        /********************************************************************************
         * Function Name	: gfn_DsIsUpdated
         * Description		: dataSet의 Row 중에서 변경된 내용이 있는지 여부를
         *					  판단하는 함수
         * Arguments		: objDs(DataSet)
         * Return 			: true = 변경 된 데이터가 존재
         *					  false = 변경 된 데이터가 없음
         ********************************************************************************/
        this.gfn_DsIsUpdated = function (objDs)
        {
        	if (objDs.getDeletedRowCount() > 0)
        	{
        		return true;
        	}

        	if (objDs.findRowExpr("(this.getRowType(rowidx)==4)||(this.getRowType(rowidx)==2)") > 0)
        	{
        		return true;
        	}
        	return false;
        };

        /********************************************************************************
         * Function Name	: gfn_DsCheckValid
         * Description   	: DataSet 내의 데이터 무결성을 검사하는 함수
         * Parameter		: objDs(DataSet)
         * Return 			:
         ********************************************************************************/
        this.gfn_DsCheckValid = function (objDs)
        {
        	var objDsValid = this.objects[objDs.name + "Valid"];

        	if (this.gfn_isNull(objDsValid))
        	{
        		return true;
        	}

        	var nRowCnt = objDs.getRowCount();
        	var nColCnt = objDs.getColCount();

        	for (var i = 0; i < nRowCnt; i++)
        	{
        		for (var j = 0; j < nColCnt; j++)
        		{
        			if (objDs.getRowType(i) == 2 || objDs.getRowType(i) == 4)
        			{
        				var rtnVar = this.gfn_ItemCheck(i, j, objDs, objDsValid);
        				if (!rtnVar)
        				{
        					return false;
        				}
        			}
        		}
        	}
        	return true;
        };
        /********************************************************************************
         * Function Name	: gfn_ItemCheck
         * Description		: DataSet 내의 데이터 무결성을 검사하는 함수
         * Parameter		: rowNum = DataSet row position
         *					  colNum = DataSet Column Index
         *					  objGrd = DataSet(Grid에 bind된 DataSet)
         *					  objDsValid = Dataset(objGrd의 무결성 검사용 DataSet
         * Return 			: true = Data에 문제 없음
         *					  false = 무결성 위한
         ********************************************************************************/
        this.gfn_ItemCheck = function (rowNum, colNum, objGrd, objDsValid)
        {
        	return true;
        	// dbxor 일단 true
        	var arrItem = new Array();
        	var strColNm = objGrd.getColID(colNum);

        	if (objDsValid.getColumnInfo(strColNm) == null)
        	{
        		return true;
        	}

        	var strCol = objDsValid.getColumn(0, strColNm);
        	if (this.gfn_isNull(strCol))
        	{
        		return true;
        	}

        	arrItem = strCol.split(",");
        	var value = objGrd.getColumn(rowNum, colNum);

        	var returnVal;
        	var title = "";


        	for (var k = 0; k < arrItem.length; k++)
        	{
        		var arrItem2 = new Array();

        		arrItem2 = arrItem[k].split(":");
        		switch (arrItem2[0])
        		{
        			case "title":
        				title = this.gfn_getDomainText("domain." + arrItem2[1]);
        				break;
        			case "required":
        				if (arrItem2[1] == "true")
        				{
        					if (this.gfn_isNull(value))
        					{
        						this.gfn_Alert("msg.err.validator.required", "warning", title);
        						return false;
        					}
        				}
        				break;
        			case "minlength":
        				if (this.gfn_Length(value) < arrItem2[1])
        				{
        					this.gfn_Alert("msg.err.validator.minlength", "warning", title, arrItem2[1]);
        					return false;
        				}
        				break;
        			case "maxlength":
        				if (this.gfn_Length(value) > arrItem2[1])
        				{
        					this.gfn_Alert("msg.err.validator.maxlength", "warning", title, arrItem2[1]);
        					return false;
        				}
        				break;
        			case "num":
        				if (arrItem2[1] == "f" && !nexacro.isNumeric(value))
        				{
        					this.gfn_Alert("msg.err.validator.chknumber.f", "warning", title, arrItem2[1]);
        					return false;
        				}
        				else if (arrItem2[1] == "i" && !nexacro.isNumeric(value))
        				{
        					this.gfn_Alert("msg.err.validator.chknumber.i", "warning", title, arrItem2[1]);
        					return false;
        				}
        				else if (arrItem2[1] == "n" && !nexacro.isNumeric(value))
        				{
        					this.gfn_Alert("msg.err.validator.chknumber.n", "warning", title, arrItem2[1]);
        					return false;
        				}
        				break;
        			case "fromNum":
        				if (!nexacro.isNumeric(value) || (parseFloat(arrItem2[1]) > parseFloat(value)))
        				{
        					this.gfn_Alert("msg.err.validator.fromnum", "warning", title, arrItem2[1]);
        					return false;
        				}
        				break;
        			case "toNum":
        				if (!nexacro.isNumeric(value) || (parseFloat(arrItem2[1]) < parseFloat(value)))
        				{
        					this.gfn_Alert("msg.err.validator.tonum", "warning", title, arrItem2[1]);
        					return false;
        				}
        				break;
        			case "format":
        				if (this.gfn_isNull(value))
        				{
        					break;
        				}
        				if (arrItem2[1] == "mail" && !this.gfn_checkEmail(value))
        				{
        					this.gfn_Alert("msg.err.validator.email", "warning", title);
        					return false;
        				}
        				else if (arrItem2[1] == "phone" && !this.gfn_checkPhone(value))
        				{
        					this.gfn_Alert("msg.err.validator.phone", "warning", title);
        					return false;
        				}
        				else if (arrItem2[1] == "url" && !this.gfn_checkURL(value))
        				{
        					this.gfn_Alert("msg.err.validator.url", "warning", title);
        					return false;
        				}
        				else if (arrItem2[1] == "date" && !this.gfn_checkDate8(value))
        				{
        					this.gfn_Alert("msg.err.validator.date8", "warning", title);
        					return false;
        				}
        				else if (arrItem2[1] == "date10" && !this.gfn_checkDate10(value))
        				{
        					this.gfn_Alert("msg.err.validator.date10", "warning", title);
        					return false;
        				}
        				else if (arrItem2[1] == "zipcode" && !nexacro.isNumeric(value) && this.gfn_Length(this.gfn_Replace(value, " ", "")) != 6)
        				{
        					this.gfn_Alert("msg.err.validator.zipcode", "warning", title);
        					return false;
        				}
        				break;
        		}
        	}
        	return true;
        };

        /**********************************************************************************
         * Function Name: gfn_findData
         * Description  : dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
         * Arguments    : ObjDs:dataset, strIdCol:키칼럼, strId:키값,
         strSubCol:서브키칼럼, strSubId:서브 키값
         * Return       : rowpostion
         **********************************************************************************/
        this.gfn_findData = function (ObjDs, strIdCol, strId, strSubCol, strSubId)
        {
        	// var arrArgument = this.gfn_findData.arguments;

        	if (this.gfn_isNull(strSubCol))
        	{
        		return ObjDs.findRow(strIdCol, strId);
        	}
        	return ObjDs.findRowExpr(strIdCol + " == '" + strId + "' && " + strSubCol + " == '" + strSubId + "'");
        };

        /**********************************************************************************
         * Function Name: gfn_multiDatasetChanged
         * Description  : 멀티그리드 바인드데이터셋 체인지
         * Arguments    :
         * Return       :
         **********************************************************************************/
        this.gfn_multiDatasetChanged = function(obj, e)
        {

        	if(e.columnid == "ROW_STS" || e.columnid == "ROW_CHK") return;

        	var iRow = e.row;
        	var iRowType = obj.getRowType(iRow);

        	var sRowSts = obj.getColumn(iRow, "ROW_STS");
        	//var sRowChk = obj.getColumn(iRow, "ROW_CHK");

        	if (iRowType == Dataset.ROWTYPE_INSERT)
        	{
        		if (sRowSts != "I") obj.setColumn(iRow, "ROW_STS", "I");
        	}
        	else if (iRowType == Dataset.ROWTYPE_UPDATE)
        	{
        		if (sRowSts == undefined || sRowSts == "" || sRowSts == "N" || sRowSts == "D") obj.setColumn(iRow, "ROW_STS", "U");
        	}

        	//obj.setColumn(iRow, "ROW_CHK", "1");

        	return iRow;
        }


        ///////////////////////////////////////////////////////////////////////////////////////////////////
        // GRID
        /**********************************************************************************
         * Function Name: gfn_multiDatasetChanged
         * Description  : 그리드 전체체크/체크해제 실행 함수
         * Arguments    :  obj	   : 설정 그리드
        				   e	   : 이벤트 오브젝트
         * Return       : 없음
         **********************************************************************************/
        this.gfn_SetGridCheckAll = function (obj, e)
        {
        	var sChk;
        	var sVal;
        	var objDs;
        	var nCellIdx  = e.cell;
        	var sColumnId;

        	//그리드에 연결된 데이터셋 가져오기
        	objDs  = obj.getBindDataset();

        	//데이터셋에 데이터가 없을 경우 리턴
        	if(objDs.rowcount < 1) return;

        	//전체 체크/체크해제할 컬럼명 구하기
        	sColumnId = obj.getCellProperty("body", nCellIdx, "text");
        	sColumnId = sColumnId.toString().replace("bind:", "");

        	//Head의 현재 Check설정 값 가져오기
        	sVal = obj.getCellProperty("head", nCellIdx, "text");

        	//현재 체크상태일 경우
        	if (sVal == "1" )
        	{
        		//Head의 값을 체크해제로 설정
        		obj.setCellProperty("head", nCellIdx, "text", "0");
        		sChk="0";
        	}
        	//현재 체크해제상태일 경우
        	else {
        		//Head의 값을 체크로 설정
        		obj.setCellProperty("head", nCellIdx, "text", "1");
        		sChk="1";
        	}


        	//성능 개선을 위해 이벤트 발생 정지
        	objDs.set_enableevent(false);

        	// Body에 전체 체크/체크해제 상태 적용
        	for(var i=0 ; i< objDs.rowcount ; i++)
        	{
        		objDs.setColumn(i, sColumnId, sChk);
        	}

        	//성능 개선을 위해 이벤트 발생 재실행
        	objDs.set_enableevent(true);
        };

        /**********************************************************************************
         * Function Name: gfn_gridExportExcel
         * Description  : 그리드를 엑셀파일로 export
         * Arguments    :  obj	   : 설정 그리드
        				   e	   : 이벤트 오브젝트
         * Return       : 없음
         **********************************************************************************/
        this.gfn_gridExportExcel = function(obj, sSheetName, sFileName, bRunYn)
        {
         	if(this.gfn_isNull(sFileName)) sFileName = sSheetName;

        	this.exportObj = new ExcelExportObject("Export00", this);
        	this.exportObj.addEventHandler("onsuccess" , this.Export00_onsuccess , this);

        	this.exportObj.set_exportfilename(sFileName);

        	this.exportObj.set_exporturl("http://demo.nexacro.com/developer_guide/XExportImport");
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, obj, sSheetName+"!A1");

            var intExportedItem = this.exportObj.exportData();
            trace("Number of Exported Item: " + intExportedItem);
        }


        this.ExportExcel_onsuccess = function(obj, e)
        {
            trace("ExportExcel_onsuccess");
        }

        this.ExportExcel_onerror = function(obj, e)
        {
            trace("ExportExcel_onerror");
        }


        /**********************************************************************************
         * Function Name: gfn_GridValidCheck
         * Description  : 데이터셋 비교-Validation체크
         * Arguments    :  obj	   : 설정 그리드
        				   e	   : 이벤트 오브젝트
         * Return       : 없음
         **********************************************************************************/
        this.gfn_GridValidCheck = function(objBaseDs, objChkDs, objGrid, bChk, bRowChk ) {
        	if(this.gfn_isNull(bChk)) bChk = false;
        	if(this.gfn_isNull(bRowChk)) bRowChk = false;
        	var sChkCol = "";
        	var sColId = "";
        	var sColNm = "";
        	var sColValue = "";
        	var sCheck = "";
        	var sMsg   = "";
        	var strGubun = "";
        	var strFunction = "";
        	var sCheckArray, sComboDs ;
            //var objBaseDs = eval(objGrd.binddataset);

        	if(  bChk ) {
        		sChkCol = objGrd.getCellProperty("body",0,"text");
        		sChkCol = sChkCol.replace("bind:","");
        	}

            if(objChkDs.rowcount > 0 && objBaseDs.rowcount > 0 ) {
        		for(var ii = 0 ; ii < objBaseDs.rowcount ; ii ++ ) {
        			if(objBaseDs.getRowType(ii) == Dataset.ROWTYPE_INSERT || objBaseDs.getRowType(ii) == Dataset.ROWTYPE_UPDATE || bRowChk == true ) {
        				var sFilter = "";
        				for(var i = 0 ; i < objChkDs.rowcount ; i ++ ) {
        					sColId = objChkDs.getColumn(i,"colId");
        					sColNm = objChkDs.getColumn(i,"colNm");
        					sCheck = objChkDs.getColumn(i,"check");
        					sMsg   = objChkDs.getColumn(i,"message");
        					sComboDs = "";

        					if (this.gfn_ExistColumnId(objChkDs, "comboDs") == true){
        						sComboDs = objChkDs.getColumn(i, "comboDs");
        					}

        					if (this.gfn_isNull(sColId)) continue;

        					if(sColId == "func") {
        						if (typeof eval(sCheck) == "function"){
        							// 존재시 함수 호출
        							if(eval( sCheck ).call(this,objBaseDs,ii) == false )
        								return false;
        						}
        					}else{
        						sColValue = objBaseDs.getColumn(ii,sColId);
        						if((bChk  && objBaseDs.getColumn(ii,sChkCol) == '1' && this.gfn_ExistVal(sColId) ) || (!bChk && this.gfn_ExistVal(sColId))){
        							sCheckArray = sCheck.split(";");

        							/// 체크 부분
        							for(var k = 0 ; k < sCheckArray.length ; k ++ ) {
        								if(this.gfn_ExistVal(sCheckArray[k].trim())){
        									// 변수 값에 "=" 이 존재 가능하기때문에
        									if(sCheckArray[k].indexOf("=")  > -1 ) {
        										strFunction = "this.gfn_Chk" + sCheckArray[k].substring(0,sCheckArray[k].indexOf("=") );
        										strGubun    = sCheckArray[k].substr(sCheckArray[k].indexOf("=") +1);
        									}else {
        										strFunction = "this.gfn_Chk" + sCheckArray[k];
        										strGubun    = "";
        									}
        									//trace(strFunction);
        									//해당  Function 존재 여부 체크
        									if (typeof eval(strFunction) == "function"){
        										// 존재시 함수 호출
        										if(eval( strFunction ).call(this,sColId, sColNm,objBaseDs,ii,strGubun, sMsg, sComboDs) == false ) {
        											objBaseDs.rowposition = ii;
        											return false;
        										}
        									}
        								}
        							}
        						}
        					}
        				}
        			}
        		}
            }
        	return true;
        }
        /**********************************************************************************
         * Function Name: gfn_ExistVal
         * Description  : 값이 존재 하는지 검사
         * Arguments    :  sVal : 값이 존재하는지 검증할 값
        				   e	   : 이벤트 오브젝트
         * Return       : true/false
         **********************************************************************************/
        this.gfn_ExistVal = function(sVal){
        	if ( this.gfn_isNull(sVal) )
        		return false;
        	else
        		return true;
        }

        /**********************************************************************************
         * Function Name: gfn_GridDataSort(grdObj, nCell, resetCol)
         * Description  : 단일 Column Sort 처리
         * Arguments    : GridObject, nCell, [ResetCol]
        				   e	   : 이벤트 오브젝트
         * Return       : 없음
         **********************************************************************************/
        this.gv_AscMark  ="▲";		// Asc Mark
        this.gv_DescMark ="▼";		// Desc Mark
        this.gfn_GridDataSort = function(grdObj, nCell, nCol) {

        	var objDs = grdObj.getBindDataset();

        	for (var i = 0; i < grdObj.getCellCount("head"); i++)
        	{
        		var sHeadText = grdObj.getCellText(-1, i);

        		if (this.gfn_isNull(sHeadText)) break;
                var nLen      = sHeadText.length - 1;

        		/* In case of the clicked head cell */
        		if (i == nCell)
        		{
        			if (this.gfn_isNull(grdObj.getCellProperty("body", nCol,"text"))) break;

                    var sColId = (grdObj.getCellProperty("body", nCol, "text")).toString().split(":");

        			/* If the previous sort in ascending order, it will be sorted in descending order */
        			if (sHeadText.substr(nLen) == this.gv_AscMark)
        			{
        				grdObj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen)+ this.gv_DescMark);
        				objDs.set_keystring("S:-" + sColId[1]);
        			}
        			/* If the previous sort in descending order, it will be sorted in ascending order */
        			else if (sHeadText.substr(nLen) == this.gv_DescMark)
        			{
        				grdObj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen)+ this.gv_AscMark);
        				objDs.set_keystring("S:+" + sColId[1]);
        			}
        			/* If first sort, it will sort in ascending order */
        			else
        			{
        				grdObj.setCellProperty( "head", i, "text", sHeadText + this.gv_AscMark);
        				objDs.set_keystring("S:+" + sColId[1]);
        			}
        		}
        		/* In case of it's not the clicked head cell */
        		else
        		{

        			/* Remove the arrow indication is displayed in the head cell which are arranged previously */
        			if (sHeadText.substr(nLen) == this.gv_AscMark || sHeadText.substr(nLen) == this.gv_DescMark)
        			{
        				grdObj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen));
        			}

        		}
        	}
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
