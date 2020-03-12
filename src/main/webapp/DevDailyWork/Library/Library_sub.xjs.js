//XJS=Library_sub.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        //include "Library::Library.xjs"

        /////////////////////////////////////////////////////////////////
        // method name	: gfn_multiAllChk
        // description	: 멀티그리드 전부 체크 전부 해제
        // parameter	:
        // return		:
        // example		:
        /////////////////////////////////////////////////////////////////
        this.gfn_multiAllChk = function(obj, cellNm, cellIdx)
        {
        	var bindDs = eval("this." + obj.binddataset);
        	var sTitle;
        	sTitle = obj.getCellProperty( "head", cellIdx, "text");

        	if (sTitle == "1" )
        		sTitle = "0";
        	else
        		sTitle = "1";

        	obj.setCellProperty( "head", cellIdx, "text", sTitle);

        	for(idx=0; idx<bindDs.rowcount; idx++)
        	{
        		bindDs.setColumn(idx,cellNm,sTitle);
        	}
        }

        /**********************************************************************************
        // description	: 자바 에러메세지를 삭제하고 리턴
        ***********************************************************************************/
        this.gfn_removeJavaErrMsg = function(strErrorMag)
        {
        	var rtnMsg = this.gfn_BlankStr(strErrorMag);
        	var stCnt = 0;
        	var endCnt = 0;

        	stCnt = rtnMsg.indexOf("§");
        	endCnt = rtnMsg.indexOf("§", stCnt+1);
        	if(stCnt>-1) rtnMsg = rtnMsg.slice(stCnt+1, endCnt);
        	return rtnMsg;
        }

        /*++
        @desc  체크된 Row가 존재 하는지 검사
        @name  gfn_DeleteCheckExist
        @param  objDS - 검사할 Dataset name
        @return  true  - check row존재
        @return  false - check row 미 존재
        */
        this.gfn_DeleteCheckExist = function(objDS)
        {
        	var nRow = objDS.findRow("ROW_CHK", "1");

        	//1. 체크된 Row가 없을 경우
        	if (nRow < 0){
        		//gfn_Alert('WRN00054'); //삭제할 항목을 선택하세요.
        		return false;
        	//2. 체크된 Row가 있을 경우
        	}else{
        		return true;
        	}
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
