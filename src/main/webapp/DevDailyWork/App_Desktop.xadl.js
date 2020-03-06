(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
            // global dataset
            obj = new Dataset("gds_Menu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MenuID\" type=\"INT\" size=\"256\"/><Column id=\"MenuCode\" type=\"STRING\" size=\"256\"/><Column id=\"MenuName\" type=\"STRING\" size=\"256\"/><Column id=\"MenuLevel\" type=\"STRING\" size=\"256\"/><Column id=\"MenuGroup\" type=\"STRING\" size=\"256\"/><Column id=\"MenuSub\" type=\"STRING\" size=\"256\"/><Column id=\"MenuSeq\" type=\"STRING\" size=\"256\"/><Column id=\"FormCode\" type=\"STRING\" size=\"256\"/><Column id=\"MenuURL\" type=\"STRING\" size=\"256\"/><Column id=\"MenuDescr\" type=\"STRING\" size=\"256\"/><Column id=\"isLeaf\" type=\"STRING\" size=\"256\"/><Column id=\"isDUP\" type=\"STRING\" size=\"256\"/><Column id=\"isUseMobile\" type=\"STRING\" size=\"256\"/><Column id=\"isUse\" type=\"STRING\" size=\"256\"/><Column id=\"ProfileCode\" type=\"STRING\" size=\"256\"/><Column id=\"ProfileName\" type=\"STRING\" size=\"256\"/><Column id=\"FormStartUpCode\" type=\"STRING\" size=\"256\"/><Column id=\"DB_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MenuCode\">NewMenu3</Col><Col id=\"MenuName\">File</Col><Col id=\"MenuLevel\">0</Col><Col id=\"MenuDescr\"/><Col id=\"MenuID\">1</Col><Col id=\"isLeaf\">N</Col></Row><Row><Col id=\"MenuCode\">NewMenu24</Col><Col id=\"MenuName\">NewMenu24</Col><Col id=\"MenuLevel\">1</Col><Col id=\"MenuDescr\"/><Col id=\"MenuID\">2</Col><Col id=\"isLeaf\">Y</Col><Col id=\"MenuURL\">Basis::Template.xfdl</Col></Row><Row><Col id=\"MenuCode\">NewMenu25</Col><Col id=\"MenuName\">NewMenu25</Col><Col id=\"MenuLevel\">1</Col><Col id=\"MenuDescr\"/><Col id=\"MenuID\">3</Col><Col id=\"isLeaf\">Y</Col><Col id=\"MenuURL\">Basis::Template.xfdl</Col></Row><Row><Col id=\"MenuCode\">download</Col><Col id=\"MenuName\">Download</Col><Col id=\"MenuLevel\">1</Col><Col id=\"MenuDescr\"/><Col id=\"MenuID\">4</Col><Col id=\"MenuURL\">Basis::Template.xfdl</Col></Row><Row><Col id=\"MenuCode\">print</Col><Col id=\"MenuName\">Print</Col><Col id=\"MenuLevel\">1</Col><Col id=\"MenuDescr\"/><Col id=\"MenuURL\">Basis::Template.xfdl</Col></Row><Row><Col id=\"MenuCode\">exit</Col><Col id=\"MenuName\">Exit</Col><Col id=\"MenuLevel\">1</Col><Col id=\"MenuDescr\"/><Col id=\"MenuURL\">Basis::Template.xfdl</Col></Row><Row><Col id=\"MenuCode\">Master</Col><Col id=\"MenuName\">Basic Data</Col><Col id=\"MenuLevel\">0</Col><Col id=\"MenuDescr\"/><Col id=\"MenuURL\">Basis::Template.xfdl</Col><Col id=\"isLeaf\">N</Col></Row><Row><Col id=\"MenuCode\">Code</Col><Col id=\"MenuName\">Control Code</Col><Col id=\"MenuLevel\">1</Col><Col id=\"MenuDescr\"/></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_Logon", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"UserCode\" type=\"STRING\" size=\"256\"/><Column id=\"passWord\" type=\"STRING\" size=\"256\"/><Column id=\"ret\" type=\"STRING\" size=\"256\"/><Column id=\"msg\" type=\"STRING\" size=\"256\"/><Column id=\"CDTYP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_User", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD\" type=\"STRING\" size=\"256\"/><Column id=\"CERTIFY_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VENDOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CARRIER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_LANG\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VENDOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CARRIER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_DATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEWING_COUNT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EHR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GW_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_OpenMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MenuCode\" type=\"STRING\" size=\"256\"/><Column id=\"MenuName\" type=\"STRING\" size=\"256\"/><Column id=\"MenuURL\" type=\"STRING\" size=\"256\"/><Column id=\"DupCount\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_UserGridSet", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FormCode\" type=\"STRING\" size=\"256\"/><Column id=\"GridID\" type=\"STRING\" size=\"256\"/><Column id=\"UserCode\" type=\"STRING\" size=\"256\"/><Column id=\"xmlString\" type=\"STRING\" size=\"9999\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_MsgSet", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"EnMsg\" type=\"STRING\" size=\"256\"/><Column id=\"KoMsg\" type=\"STRING\" size=\"256\"/><Column id=\"Remark\" type=\"STRING\" size=\"256\"/><Column id=\"SaveUser\" type=\"STRING\" size=\"256\"/><Column id=\"SaveDate\" type=\"STRING\" size=\"256\"/><Column id=\"UpdateUser\" type=\"STRING\" size=\"256\"/><Column id=\"SpName\" type=\"STRING\" size=\"256\"/><Column id=\"EO_Trace\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_UserGridSetOut", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FormCode\" type=\"STRING\" size=\"256\"/><Column id=\"GridCode\" type=\"STRING\" size=\"256\"/><Column id=\"UserCode\" type=\"STRING\" size=\"256\"/><Column id=\"xmlString\" type=\"STRING\" size=\"9999\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_gridPopupMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"captionEN\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"userData\" type=\"STRING\" size=\"256\"/><Column id=\"upmenu\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">shapefix</Col><Col id=\"level\">0</Col><Col id=\"caption\">틀고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">shape fix</Col></Row><Row><Col id=\"id\">colfix</Col><Col id=\"level\">1</Col><Col id=\"caption\">열고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">column fix</Col></Row><Row><Col id=\"id\">colfixfree</Col><Col id=\"level\">1</Col><Col id=\"caption\">열고정해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">column fix free</Col></Row><Row><Col id=\"id\">rowfix</Col><Col id=\"level\">1</Col><Col id=\"caption\">행고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">row fix</Col></Row><Row><Col id=\"id\">rowfixfree</Col><Col id=\"level\">1</Col><Col id=\"caption\">행고정해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">row fix free</Col></Row><Row><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"level\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">filter</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">grid filter</Col></Row><Row><Col id=\"id\">filterfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">grid filter free</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">replace</Col><Col id=\"level\">0</Col><Col id=\"caption\">찾기/바꾸기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">find/replace</Col></Row><Row><Col id=\"id\">colhide</Col><Col id=\"level\">0</Col><Col id=\"caption\">컬럼 숨기기/보이기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">column show/hide</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">excel</Col><Col id=\"level\">0</Col><Col id=\"caption\">엑셀</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">excel</Col></Row><Row><Col id=\"id\">export</Col><Col id=\"level\">1</Col><Col id=\"caption\">내보내기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">excel</Col><Col id=\"captionEN\">export</Col></Row><Row><Col id=\"id\">import</Col><Col id=\"level\">1</Col><Col id=\"caption\">가져오기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">excel</Col><Col id=\"captionEN\">import</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">personal</Col><Col id=\"level\">0</Col><Col id=\"caption\">현재포맷저장</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">saving current format</Col></Row><Row><Col id=\"id\">initial</Col><Col id=\"level\">0</Col><Col id=\"caption\">초기상태로</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">initialization</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">subsum</Col><Col id=\"level\">0</Col><Col id=\"caption\">부분합</Col><Col id=\"captionEN\">sub-sum</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_CommCode", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_F\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_CD_FULL_F\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_gridPersonal", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sFormatId\" type=\"STRING\" size=\"256\"/><Column id=\"sFormat\" type=\"STRING\" size=\"2147483647\"/><Column id=\"sOrgFormat\" type=\"STRING\" size=\"2147483647\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_word", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"WORD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"KR\" type=\"STRING\" size=\"256\"/><Column id=\"EN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WORD_ID\">comp.static</Col></Row><Row><Col id=\"WORD_ID\">comp.check</Col></Row><Row><Col id=\"WORD_ID\">comp.button</Col></Row><Row><Col id=\"WORD_ID\">comp.box</Col></Row><Row><Col id=\"WORD_ID\">comp.combo</Col></Row><Row><Col id=\"WORD_ID\">comp.calendar</Col></Row><Row><Col id=\"WORD_ID\">comp.webbrowser</Col></Row><Row><Col id=\"WORD_ID\">comp.image</Col></Row><Row><Col id=\"WORD_ID\">comp.popup</Col></Row><Row><Col id=\"WORD_ID\">comp.radio</Col></Row><Row><Col id=\"WORD_ID\">comp.number</Col></Row><Row><Col id=\"WORD_ID\">comp.text</Col></Row><Row><Col id=\"WORD_ID\">comp.test</Col></Row><Row><Col id=\"WORD_ID\">comp.textmode</Col></Row><Row><Col id=\"WORD_ID\">frame.menu</Col></Row><Row><Col id=\"WORD_ID\">frame.favorites</Col></Row><Row><Col id=\"WORD_ID\">frame.searchMenu</Col></Row><Row><Col id=\"WORD_ID\">frame.searchMenu.button</Col></Row><Row><Col id=\"WORD_ID\">frame.logOut</Col></Row><Row><Col id=\"WORD_ID\">cmm.no</Col></Row><Row><Col id=\"WORD_ID\">cmm.status</Col></Row><Row><Col id=\"WORD_ID\">cmm.checkbox</Col></Row><Row><Col id=\"WORD_ID\">popup.notice</Col></Row><Row><Col id=\"WORD_ID\">popup.confirm</Col></Row><Row><Col id=\"WORD_ID\">popup.ok</Col></Row><Row><Col id=\"WORD_ID\">popup.close</Col></Row><Row><Col id=\"WORD_ID\">popup.cancel</Col></Row><Row><Col id=\"WORD_ID\">popup.periodselect</Col></Row><Row><Col id=\"WORD_ID\">popup.monthselect</Col></Row><Row><Col id=\"WORD_ID\">popup.dataselect</Col></Row><Row><Col id=\"WORD_ID\">popup.columnselect</Col></Row><Row><Col id=\"WORD_ID\">popup.modal</Col></Row><Row><Col id=\"WORD_ID\">popup.columnname</Col></Row><Row><Col id=\"WORD_ID\">popup.filtercriteria</Col></Row><Row><Col id=\"WORD_ID\">popup.findcondition</Col></Row><Row><Col id=\"WORD_ID\">popup.datafiltersetting</Col></Row><Row><Col id=\"WORD_ID\">popup.apply</Col></Row><Row><Col id=\"WORD_ID\">popup.datafindreplace</Col></Row><Row><Col id=\"WORD_ID\">popup.targetcolumn</Col></Row><Row><Col id=\"WORD_ID\">popup.findstring</Col></Row><Row><Col id=\"WORD_ID\">popup.replacestring</Col></Row><Row><Col id=\"WORD_ID\">popup.finddirection</Col></Row><Row><Col id=\"WORD_ID\">popup.findposition</Col></Row><Row><Col id=\"WORD_ID\">popup.find</Col></Row><Row><Col id=\"WORD_ID\">popup.replace</Col></Row><Row><Col id=\"WORD_ID\">popup.allchange</Col></Row><Row><Col id=\"WORD_ID\">popup.casesensitive</Col></Row><Row><Col id=\"WORD_ID\">popup.colshwohide</Col></Row><Row><Col id=\"WORD_ID\">popup.subsum</Col></Row><Row><Col id=\"WORD_ID\">search</Col></Row><Row><Col id=\"WORD_ID\">insert</Col><Col id=\"WORD_NAME\">입력</Col><Col id=\"KR\">입력</Col><Col id=\"EN\">INSERT</Col></Row><Row><Col id=\"WORD_ID\">delete</Col><Col id=\"WORD_NAME\">삭제</Col><Col id=\"KR\">삭제</Col><Col id=\"EN\">DELETE</Col></Row><Row><Col id=\"WORD_ID\">modify</Col><Col id=\"WORD_NAME\">수정</Col><Col id=\"KR\">수정</Col><Col id=\"EN\">UPDATE</Col></Row><Row><Col id=\"WORD_ID\">save</Col></Row><Row><Col id=\"WORD_ID\">print</Col></Row><Row><Col id=\"WORD_ID\">excel</Col></Row><Row><Col id=\"WORD_ID\">employee</Col></Row><Row><Col id=\"WORD_ID\">department</Col></Row><Row><Col id=\"WORD_ID\">company</Col></Row><Row><Col id=\"WORD_ID\">user</Col></Row><Row><Col id=\"WORD_ID\">user.jumin</Col></Row><Row><Col id=\"WORD_ID\">user.id</Col></Row><Row><Col id=\"WORD_ID\">designation</Col></Row><Row><Col id=\"WORD_ID\">useflg</Col></Row><Row><Col id=\"WORD_ID\">reguser</Col></Row><Row><Col id=\"WORD_ID\">description</Col></Row><Row><Col id=\"WORD_ID\">date.start</Col></Row><Row><Col id=\"WORD_ID\">date.end</Col></Row><Row><Col id=\"WORD_ID\">value.max</Col></Row><Row><Col id=\"WORD_ID\">value.interest</Col></Row><Row><Col id=\"WORD_ID\">value.1st</Col></Row><Row><Col id=\"WORD_ID\">value.2nd</Col></Row><Row><Col id=\"WORD_ID\">register</Col></Row><Row><Col id=\"WORD_ID\">info</Col></Row><Row><Col id=\"WORD_ID\">word</Col></Row><Row><Col id=\"WORD_ID\">dictionary</Col></Row><Row><Col id=\"WORD_ID\">nation</Col></Row><Row><Col id=\"WORD_ID\">language</Col></Row><Row><Col id=\"WORD_ID\">select</Col></Row><Row><Col id=\"WORD_ID\">initialize</Col></Row><Row><Col id=\"WORD_ID\">tab1</Col></Row><Row><Col id=\"WORD_ID\">tab2</Col></Row><Row><Col id=\"WORD_ID\">korean</Col></Row><Row><Col id=\"WORD_ID\">english</Col></Row><Row><Col id=\"WORD_ID\">sort</Col></Row><Row><Col id=\"WORD_ID\">colfix</Col></Row><Row><Col id=\"WORD_ID\">rowfix</Col></Row><Row><Col id=\"WORD_ID\">excel</Col></Row><Row><Col id=\"WORD_ID\">basicfunction</Col></Row><Row><Col id=\"WORD_ID\">complicatedgrid</Col></Row><Row><Col id=\"WORD_ID\">gridpersonal</Col></Row><Row><Col id=\"WORD_ID\">listcount</Col></Row><Row><Col id=\"WORD_ID\">etorangers</Col></Row><Row><Col id=\"WORD_ID\">sunday</Col></Row><Row><Col id=\"WORD_ID\">monday</Col></Row><Row><Col id=\"WORD_ID\">tuesday</Col></Row><Row><Col id=\"WORD_ID\">wednesday</Col></Row><Row><Col id=\"WORD_ID\">thursday</Col></Row><Row><Col id=\"WORD_ID\">friday</Col></Row><Row><Col id=\"WORD_ID\">saturday</Col></Row><Row><Col id=\"WORD_ID\">mon</Col></Row><Row><Col id=\"WORD_ID\">tue</Col></Row><Row><Col id=\"WORD_ID\">wed</Col></Row><Row><Col id=\"WORD_ID\">thu</Col></Row><Row><Col id=\"WORD_ID\">fri</Col></Row><Row><Col id=\"WORD_ID\">sat</Col></Row><Row><Col id=\"WORD_ID\">sun</Col></Row><Row><Col id=\"WORD_ID\">week</Col></Row><Row><Col id=\"WORD_ID\">emp.name</Col></Row><Row><Col id=\"WORD_ID\">emp.id</Col></Row><Row><Col id=\"WORD_ID\">POList</Col><Col id=\"WORD_NAME\">대상리스트</Col></Row><Row><Col id=\"WORD_ID\">StaticSalesOrder</Col><Col id=\"WORD_NAME\">판매오더</Col></Row><Row><Col id=\"WORD_ID\">PR_MENGE</Col><Col id=\"WORD_NAME\">그리드테</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_QmeLogonInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"p_user_id\" type=\"STRING\" size=\"256\"/><Column id=\"p_code_grp\" type=\"STRING\" size=\"256\"/><Column id=\"p_code_cd\" type=\"STRING\" size=\"256\"/><Column id=\"p_sub_cd1\" type=\"STRING\" size=\"256\"/><Column id=\"p_sub_cd2\" type=\"STRING\" size=\"256\"/><Column id=\"p_sub_cd3\" type=\"STRING\" size=\"256\"/><Column id=\"p_sub_cd4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_CommCodeIn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"p_code_grp\" type=\"STRING\" size=\"256\"/><Column id=\"p_code_cd\" type=\"STRING\" size=\"256\"/><Column id=\"p_sub_cd1\" type=\"STRING\" size=\"256\"/><Column id=\"p_sub_cd2\" type=\"STRING\" size=\"256\"/><Column id=\"p_sub_cd3\" type=\"STRING\" size=\"256\"/><Column id=\"p_sub_cd4\" type=\"STRING\" size=\"256\"/><Column id=\"p_sub_cd5\" type=\"STRING\" size=\"256\"/><Column id=\"p_user_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_Language", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEFAULT_LANG\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGE\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_QmeLogonInfo_in", this);
            obj._setContents("<ColumnInfo><Column id=\"p_user_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_Language_in", this);
            obj._setContents("<ColumnInfo><Column id=\"p_country_cd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_Lang", this);
            obj._setContents("<ColumnInfo><Column id=\"DEFAULT_LANG\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_KO\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_VI\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.length</Col><Col id=\"LANG_KO\">{0} 의 입력값은 {1} 자리이어야 합니다. </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.rangelength</Col><Col id=\"LANG_KO\">msg.err.validator.rangelength </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.maxlength</Col><Col id=\"LANG_KO\">msg.err.validator.maxlength </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.minlength</Col><Col id=\"LANG_KO\">msg.err.validator.minlength </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.maxlength</Col><Col id=\"LANG_KO\">msg.err.validator.maxlength </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.minlength</Col><Col id=\"LANG_KO\">msg.err.validator.minlength </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.digits</Col><Col id=\"LANG_KO\">{0} 은(는) 숫자만 입력 가능합니다. </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.min</Col><Col id=\"LANG_KO\">{0} 은(는) {1} 이상의 숫자만 입력 가능합니다. </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.max</Col><Col id=\"LANG_KO\">{0} 은(는) {1} 이하의 숫자만 입력 가능합니다. </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.declimit</Col><Col id=\"LANG_KO\">{0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다. </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.date</Col><Col id=\"LANG_KO\">{0} 은(는) 유효하지 않은 날짜 형식입니다. </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.dateym</Col><Col id=\"LANG_KO\">msg.err.validator.dateym </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.range</Col><Col id=\"LANG_KO\">msg.err.validator.range </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.code</Col><Col id=\"LANG_KO\">msg.err.validator.code </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.equalto</Col><Col id=\"LANG_KO\">msg.err.validator.equalto </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.fromto</Col><Col id=\"LANG_KO\">{0} 의 날짜가 {1} 의 날짜보다 작습니다. </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.comparebig</Col><Col id=\"LANG_KO\">{0} 이(가) {1} 보다 작습니다. </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.comparesmall</Col><Col id=\"LANG_KO\">{0} 이(가) {1} 보다 큽니다. </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.ssn</Col><Col id=\"LANG_KO\">{0} 은(는) 올바른 주민번호가 아닙니다. </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.email</Col><Col id=\"LANG_KO\">msg.err.validator.email </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.required</Col><Col id=\"LANG_KO\">{0} 은(는) 필수 입력 항목입니다. </Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator</Col><Col id=\"LANG_KO\">{0}</Col><Col id=\"LANG_VI\">{0}</Col><Col id=\"LANG_ID\">{0}</Col></Row><Row><Col id=\"DEFAULT_LANG\">msg</Col><Col id=\"LANG_KO\">{0}</Col><Col id=\"LANG_VI\">{0}</Col><Col id=\"LANG_ID\">{0}</Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.validator.selectrow</Col><Col id=\"LANG_KO\">Please select save data</Col><Col id=\"LANG_VI\">Please select save data</Col><Col id=\"LANG_ID\">Please select save data</Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.err.callback</Col><Col id=\"LANG_KO\">Transaction error</Col><Col id=\"LANG_VI\">Transaction error</Col><Col id=\"LANG_ID\">Transaction error</Col></Row><Row><Col id=\"DEFAULT_LANG\">아이디 </Col><Col id=\"LANG_KO\">ID</Col></Row><Row><Col id=\"DEFAULT_LANG\">popup.salesorder</Col><Col id=\"LANG_KO\">판매오더검색</Col></Row><Row><Col id=\"DEFAULT_LANG\">popup.massInput</Col><Col id=\"LANG_KO\">Mass Input</Col><Col id=\"LANG_VI\">Mass Input</Col><Col id=\"LANG_ID\">Mass Input</Col></Row><Row><Col id=\"DEFAULT_LANG\">popup.material</Col><Col id=\"LANG_KO\">자재검색</Col></Row><Row><Col id=\"DEFAULT_LANG\">popup.style</Col><Col id=\"LANG_KO\">스타일검색</Col></Row><Row><Col id=\"DEFAULT_LANG\">popup.vendor</Col><Col id=\"LANG_KO\">공급처검색</Col></Row><Row><Col id=\"DEFAULT_LANG\">popup.purchaseorder</Col><Col id=\"LANG_KO\">구매오더검색</Col></Row><Row><Col id=\"DEFAULT_LANG\">popup.multiselect</Col><Col id=\"LANG_KO\">멀티선택</Col><Col id=\"LANG_VI\"/></Row><Row><Col id=\"DEFAULT_LANG\">popup.SaveLayout</Col><Col id=\"LANG_KO\">레이아웃저장</Col><Col id=\"LANG_VI\">Save Layout</Col><Col id=\"LANG_ID\">Save Layout</Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.server.error</Col><Col id=\"LANG_KO\">Transaction Server Error{0}</Col><Col id=\"LANG_VI\">Transaction Server Error{0}</Col><Col id=\"LANG_ID\">Transaction Server Error{0}</Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.db.error</Col><Col id=\"LANG_KO\">DB Server Error{0}</Col><Col id=\"LANG_VI\">DB Server Error{0}</Col><Col id=\"LANG_ID\">DB Server Error{0}</Col></Row><Row><Col id=\"LANG_KO\">Save successfully.{0}</Col><Col id=\"DEFAULT_LANG\">msg.success</Col><Col id=\"LANG_VI\">Save successfully.{0}</Col><Col id=\"LANG_ID\">Save successfully.{0}</Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.checkMessage</Col><Col id=\"LANG_KO\">Please Check Message!</Col><Col id=\"LANG_VI\">Please Check Message!</Col><Col id=\"LANG_ID\">Please Check Message!</Col></Row><Row><Col id=\"DEFAULT_LANG\">msg.NoPoCreated</Col><Col id=\"LANG_KO\">Po NOT Created</Col><Col id=\"LANG_VI\">Po NOT Created</Col><Col id=\"LANG_ID\">Po NOT Created</Col></Row><Row><Col id=\"LANG_KO\">O/S type is not valid.</Col><Col id=\"LANG_VI\">O/S type is not valid.</Col><Col id=\"LANG_ID\">O/S type is not valid.</Col><Col id=\"DEFAULT_LANG\">msg.OStypeIsNotValid</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_SearchConditionType", this);
            obj._setContents("<ColumnInfo><Column id=\"TypeCode\" type=\"STRING\" size=\"256\"/><Column id=\"PopupUrl\" type=\"STRING\" size=\"256\"/><Column id=\"PopupTitle\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TypeCode\">SalesOrderNo</Col><Col id=\"PopupUrl\">Popup::PopupSalesOrder.xfdl</Col><Col id=\"PopupTitle\">popup.salesorder</Col></Row><Row><Col id=\"TypeCode\">StyleNo</Col><Col id=\"PopupUrl\">Popup::PopupStyle.xfdl</Col><Col id=\"PopupTitle\">popup.style</Col></Row><Row><Col id=\"TypeCode\">VendorCode</Col><Col id=\"PopupUrl\">Popup::PopupVendor.xfdl</Col><Col id=\"PopupTitle\">popup.vendor</Col></Row><Row><Col id=\"TypeCode\">MaterialCode</Col><Col id=\"PopupUrl\">Popup::PopupMaterial.xfdl</Col><Col id=\"PopupTitle\">popup.material</Col></Row><Row><Col id=\"TypeCode\">PurchaseOrderNo</Col><Col id=\"PopupUrl\">Popup::PopupPurchaseOrder.xfdl</Col><Col id=\"PopupTitle\">popup.purchaseorder</Col></Row><Row><Col id=\"TypeCode\">MultiSelect</Col><Col id=\"PopupUrl\">Popup::PopupMultiSelect.xfdl</Col><Col id=\"PopupTitle\">popup.multiselect</Col></Row><Row><Col id=\"TypeCode\">MassInput</Col><Col id=\"PopupUrl\">Popup::PopupMassInput.xfdl</Col><Col id=\"PopupTitle\">popup.massInput</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_FormatInDs", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_TrcInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ROW_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TrcSeq\" type=\"STRING\" size=\"256\"/><Column id=\"TrcName\" type=\"STRING\" size=\"256\"/><Column id=\"TrcId\" type=\"STRING\" size=\"256\"/><Column id=\"Comments\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TrcId\">cmmGridAddDelButton.xfdl.btn_del_onclick</Col><Col id=\"TrcName\"/><Col id=\"TrcSeq\">10</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">20</Col><Col id=\"TrcId\">cmmGridAddDelButton.xfdl.fn_deleteRow</Col><Col id=\"TrcName\"/><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">cmmGridAddDelButton.xfdl.fn_SaveLayoutPopup</Col><Col id=\"TrcName\"/><Col id=\"TrcSeq\">30</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">cmmGridAddDelButton.xjs.btn_GridFormat_onclick</Col><Col id=\"TrcName\"/><Col id=\"TrcSeq\">40</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">50</Col><Col id=\"ROW_CHK\"/><Col id=\"TrcName\"/><Col id=\"TrcId\">cmmGridAddDelButton.xfdl.form_onload</Col><Col id=\"Comments\"/></Row><Row><Col id=\"TrcId\">cmmGridFilterButton.xfdl.fn_SaveLayoutPopup</Col><Col id=\"TrcName\">그리드필터버튼(공통폼)</Col><Col id=\"TrcSeq\">50</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">cmmGridFilterButton.xfdl.form_onload</Col><Col id=\"TrcSeq\">60</Col><Col id=\"TrcName\">그리드필터버튼-온로드</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">cmmFormatMenuButton.xjs.btn_GridFormat_onclick</Col><Col id=\"TrcName\">포맷버튼클릭</Col><Col id=\"Comments\">사용자화버튼</Col><Col id=\"TrcSeq\">66</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Comm_CalFromTo.xfdl.ds_FromTo_oncolumnchanged</Col><Col id=\"TrcName\"/><Col id=\"TrcSeq\">70</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Comm_CalFromTo.xfdl.fn_parentDsChanged</Col><Col id=\"TrcSeq\">80</Col><Col id=\"TrcName\">달력온컬럼체인지드</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcName\"/><Col id=\"TrcId\">Comm_CalFromTo.xfdl.form_onload</Col><Col id=\"TrcSeq\">90</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">100</Col><Col id=\"TrcId\">Comm_CnC.xfdl.btn_ok_onclick</Col><Col id=\"TrcName\"/><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">110</Col><Col id=\"TrcName\"/><Col id=\"TrcId\">Comm_CnC.xfdl.fn_reset</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">120</Col><Col id=\"TrcName\">셋그리드</Col><Col id=\"TrcId\">Comm_ColumnHide.xfdl.fn_setGrd</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">130</Col><Col id=\"TrcId\">Comm_ColumnHide.xfdl.form_onload</Col><Col id=\"TrcName\">숨기기/보이기팝업</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">132</Col><Col id=\"TrcName\">검색조건콤보-온로드</Col><Col id=\"TrcId\">Comm_ComboConditionFromTo.xfdl.form_onload</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">140</Col><Col id=\"TrcId\">Comm_CrudButton.btnCrud_onclick</Col><Col id=\"TrcName\"/><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">150</Col><Col id=\"TrcName\"/><Col id=\"TrcId\">Comm_CrudButton.fn_setButtonVisEna</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">160</Col><Col id=\"TrcName\"/><Col id=\"TrcId\">Comm_CrudButton.form_onload</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">170</Col><Col id=\"TrcId\">Comm_GridAddDelButton.form_onload</Col><Col id=\"TrcName\"/><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">180</Col><Col id=\"TrcId\">Comm_GridFilter.xfdl.btn_filter_onclick</Col><Col id=\"TrcName\">필터적용 버튼</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">190</Col><Col id=\"TrcId\">Comm_SearchConditionFromTo.xfdl.div_search_btn_onclick</Col><Col id=\"TrcName\"/><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">200</Col><Col id=\"TrcId\">Comm_SearchConditionFromTo.xfdl.ds_FromTo_oncolumnchanged</Col><Col id=\"TrcName\"/><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Comm_SearchConditionFromTo.xfdl.EditFrom_onchanged</Col><Col id=\"TrcName\"/><Col id=\"TrcSeq\">210</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Comm_SearchConditionFromTo.xfdl.fn_parentDsChanged</Col><Col id=\"TrcName\">조건온컬럼체인지드</Col><Col id=\"TrcSeq\">220</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Comm_SearchConditionFromTo.xfdl.fn_popupCallback</Col><Col id=\"TrcSeq\">230</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Comm_SearchConditionFromTo.xfdl.form_onload</Col><Col id=\"TrcName\"/><Col id=\"TrcSeq\">240</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Comm_SubSum.xfdl.btn_ok_onclick</Col><Col id=\"TrcName\"/><Col id=\"TrcSeq\">250</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Comm_SubSum.xfdl.fn_getHeadTextAndBindingInfo</Col><Col id=\"TrcName\"/><Col id=\"TrcSeq\">260</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Comm_SubSum.xfdl.form_onload</Col><Col id=\"TrcName\"/><Col id=\"TrcSeq\">270</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">DevTableCreate.xfdl.callbackFunction</Col><Col id=\"TrcSeq\">271</Col><Col id=\"TrcName\">DevTableCreate.xfdl.callbackFunction</Col><Col id=\"Comments\">DevTableCreate</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">DevTableCreate.xfdl.tfn_tabl_crt_mast_save</Col><Col id=\"TrcSeq\">271</Col><Col id=\"TrcName\">DevTableCreate.xfdl.tfn_tabl_crt_mast_save</Col><Col id=\"Comments\">DevTableCreate</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">DevTableCreate.xfdl.callbackFunc_pop</Col><Col id=\"TrcSeq\">271</Col><Col id=\"TrcName\">DevTableCreate.xfdl.callbackFunc_pop</Col><Col id=\"Comments\">DevTableCreate</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">DevTableCreate.xfdl.fn_reset</Col><Col id=\"TrcSeq\">271</Col><Col id=\"TrcName\">DevTableCreate.xfdl.fn_reset</Col><Col id=\"Comments\">DevTableCreate</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">DevTableCreate.xfdl.tfn_tabl_crt_mast_search</Col><Col id=\"TrcSeq\">271</Col><Col id=\"TrcName\">DevTableCreate.xfdl.tfn_tabl_crt_mast_search</Col><Col id=\"Comments\">DevTableCreate</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">271</Col></Row><Row><Col id=\"TrcSeq\">271</Col></Row><Row><Col id=\"TrcId\">Excel.xjs.gfn_excelExport</Col><Col id=\"TrcName\">엑셀 내보내기</Col><Col id=\"TrcSeq\">280</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Form_Work.xfdl.Button_onclick</Col><Col id=\"TrcName\"/><Col id=\"TrcSeq\">290</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Frame.xjs.gfn_setLanguage</Col><Col id=\"TrcName\"/><Col id=\"TrcSeq\">300</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs._getGridUserProperty</Col><Col id=\"TrcSeq\">310</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs._getUniqueId</Col><Col id=\"TrcName\">그리드의 유니크 아이디 가져오기</Col><Col id=\"TrcSeq\">320</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs._gfn_getRowType</Col><Col id=\"TrcName\"/><Col id=\"TrcSeq\">330</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs._gfnGridAddProp</Col><Col id=\"TrcName\">userproperties , arrProp[i]값에 따라 sort--&gt;objGrid.sort = 'true'--실행</Col><Col id=\"TrcSeq\">340</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs._gfnGridcellFix</Col><Col id=\"TrcSeq\">350</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs._gfnGridCheckboxNoStatusAdd</Col><Col id=\"TrcSeq\">360</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs._gfnGridColHideShow</Col><Col id=\"TrcSeq\">370</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs._gfnGridFilter</Col><Col id=\"TrcSeq\">380</Col><Col id=\"Comments\"/><Col id=\"TrcName\">필터설정</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs._gfnGridPasteEvent</Col><Col id=\"TrcSeq\">390</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs._gfnGridSetCssclass</Col><Col id=\"TrcSeq\">400</Col><Col id=\"Comments\"/><Col id=\"TrcName\">틀고정 행 실행/해제</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs._gfnHeadCheckSelectAll</Col><Col id=\"TrcSeq\">410</Col><Col id=\"Comments\"/><Col id=\"TrcName\">-체크박스 : 전체선택 / 전체해제)</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs._gfnMakeGridPopupMenu</Col><Col id=\"TrcSeq\">420</Col><Col id=\"Comments\"/><Col id=\"TrcName\">우클릭 팝업메뉴</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs.gfn_grid_onheadclick</Col><Col id=\"TrcSeq\">430</Col><Col id=\"Comments\"/><Col id=\"TrcName\">그리드 헤드 클릭 (체크박스 : 전체선택 / 일반 : 정렬)</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs.gfn_grid_onrbuttondown</Col><Col id=\"TrcSeq\">440</Col><Col id=\"Comments\"/><Col id=\"TrcName\">그리드 우클릭 이벤트</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs.gfn_multiDatasetAdded</Col><Col id=\"TrcSeq\">450</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs.gfn_multiDatasetChanged</Col><Col id=\"TrcSeq\">460</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs.gfn_popupmenu_onmenuclick</Col><Col id=\"TrcSeq\">470</Col><Col id=\"Comments\"/><Col id=\"TrcName\">우클릭 팝업메뉴--메뉴클릭시</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs.gfn_setGrid</Col><Col id=\"TrcSeq\">480</Col><Col id=\"Comments\"/><Col id=\"TrcName\">그리드 세팅</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs.gfn_setGrid.timeCheck</Col><Col id=\"TrcSeq\">480</Col><Col id=\"Comments\"/><Col id=\"TrcName\">그리드세팅-타임체크</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs.gfn_setGrdDic</Col><Col id=\"TrcName\">딕셔너리세팅</Col><Col id=\"Comments\"/><Col id=\"TrcSeq\">490</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Grid.xjs.gfn_setGrdDic.bindHeaderText</Col><Col id=\"TrcSeq\">491</Col><Col id=\"Comments\"/><Col id=\"TrcName\">바인드명을헤더텍스트로</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">492</Col><Col id=\"TrcName\">경과시간체크</Col><Col id=\"TrcId\">Grid.xjs.gfn_setGrdDic.elapsedTime</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">493</Col><Col id=\"TrcName\">전체경과시간체크</Col><Col id=\"TrcId\">Grid.xjs.gfn_setGrdDic.totalElapsedTime</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">gtrace_191224_ColumnHide</Col><Col id=\"TrcSeq\">500</Col><Col id=\"Comments\"/><Col id=\"TrcName\">우클릭메뉴(컬럼 숨기기/보이기)</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">gtrace_191225_ExcelExport</Col><Col id=\"TrcSeq\">510</Col><Col id=\"Comments\"/><Col id=\"TrcName\">엑셀내보내기</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">gtrace_191226_CommCodeSetting</Col><Col id=\"TrcSeq\">520</Col><Col id=\"Comments\"/><Col id=\"TrcName\">초기데이터모두가져오기</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">gtrace_191229_Comm_ComboConditionFromTo</Col><Col id=\"TrcSeq\">530</Col><Col id=\"Comments\"/><Col id=\"TrcName\">콤보조건공통화_From_To</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">gtrace_191230_Comm_MultiCombo</Col><Col id=\"TrcSeq\">540</Col><Col id=\"Comments\"/><Col id=\"TrcName\">멀티콤보</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">gtrace_200104_cmmSearchConditionFromTo</Col><Col id=\"TrcSeq\">550</Col><Col id=\"Comments\"/><Col id=\"TrcName\">팝업조건공통화_From_To</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">gtrace_200107_cmmGridFilterButton</Col><Col id=\"TrcSeq\">560</Col><Col id=\"Comments\"/><Col id=\"TrcName\">그리드필터버튼클릭</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">gtrace_gfn_getParentForm</Col><Col id=\"TrcSeq\">570</Col><Col id=\"Comments\"/><Col id=\"TrcName\">부모폼가져오기(gfn_getParentForm)</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Message.xjs.gfn_alert</Col><Col id=\"TrcSeq\">580</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Order_recap.xfdl.fn_reset</Col><Col id=\"TrcSeq\">590</Col><Col id=\"Comments\">오더리캡</Col><Col id=\"TrcName\">오더리캡_리셋</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Order_recap.xfdl.tfn_sampleSave</Col><Col id=\"TrcName\">오더리캡_샘플저장</Col><Col id=\"Comments\">오더리캡</Col><Col id=\"TrcSeq\">590</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Order_recap.xfdl.callbackFunction</Col><Col id=\"TrcName\">오더리캡_콜백</Col><Col id=\"TrcSeq\">591</Col><Col id=\"ROW_CHK\"/><Col id=\"Comments\">오더리캡</Col></Row><Row><Col id=\"TrcId\">POList.xfdl.Button_SortGroup_onclick</Col><Col id=\"TrcSeq\">600</Col><Col id=\"Comments\">PO</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">POList.xfdl.callbackFunction</Col><Col id=\"TrcSeq\">610</Col><Col id=\"Comments\">PO</Col><Col id=\"ROW_CHK\"/><Col id=\"TrcName\">PO콜백</Col></Row><Row><Col id=\"TrcId\">POList.xfdl.callbackFunction.getPoListHistoryLoad</Col><Col id=\"TrcSeq\">620</Col><Col id=\"Comments\">PO</Col><Col id=\"ROW_CHK\"/><Col id=\"TrcName\">PO콜백-Search</Col></Row><Row><Col id=\"TrcName\">PO콜백-팝업</Col><Col id=\"TrcId\">POList.xfdl.callbackFunc_pop</Col><Col id=\"Comments\">PO</Col><Col id=\"TrcSeq\">622</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">POList.xfdl.fn_reset</Col><Col id=\"TrcSeq\">630</Col><Col id=\"Comments\">PO</Col><Col id=\"ROW_CHK\"/><Col id=\"TrcName\">PO_리셋</Col></Row><Row><Col id=\"TrcId\">POList.xfdl.tfn_tbl10_search</Col><Col id=\"TrcSeq\">640</Col><Col id=\"Comments\">PO</Col><Col id=\"TrcName\">tfn_tbl10_search트랜잭션</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">POList.xfdl.tfn_tbl10_save</Col><Col id=\"TrcSeq\">650</Col><Col id=\"Comments\">PO</Col><Col id=\"TrcName\">tfn_tbl10_save트랜잭션</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">POList.xfdl.tfn_deletePO</Col><Col id=\"TrcName\">PO삭제트랜잭션</Col><Col id=\"Comments\">PO</Col><Col id=\"TrcSeq\">650</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">650</Col><Col id=\"TrcName\">PO_PRINT트랜잭션</Col><Col id=\"TrcId\">POList.xfdl.tfn_PoPrint</Col><Col id=\"Comments\">PO</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">POList.xfdl.fn_TotalAmountCalc</Col><Col id=\"ROW_CHK\"/><Col id=\"TrcSeq\">652</Col><Col id=\"TrcName\">PO금액계산</Col><Col id=\"Comments\">PO</Col></Row><Row><Col id=\"TrcSeq\">654</Col><Col id=\"TrcId\">POList.xfdl.fn_validationCheck</Col><Col id=\"TrcName\">PO_체크로직</Col><Col id=\"ROW_CHK\"/><Col id=\"Comments\">PO</Col></Row><Row><Col id=\"TrcId\">POList.xfdl.fn_saveCommonCheck</Col><Col id=\"TrcName\">PO저장공통체크로직</Col><Col id=\"TrcSeq\">656</Col><Col id=\"ROW_CHK\"/><Col id=\"Comments\">PO</Col></Row><Row><Col id=\"TrcId\">POList.xfdl.fn_saveHistoryValidation</Col><Col id=\"TrcName\">POHist저장체크로직</Col><Col id=\"TrcSeq\">657</Col><Col id=\"ROW_CHK\"/><Col id=\"Comments\">PO</Col></Row><Row><Col id=\"TrcId\">PopupMassInput.xfdl.fn_reset</Col><Col id=\"TrcSeq\">658</Col><Col id=\"ROW_CHK\"/><Col id=\"TrcName\">MassInput리셋</Col><Col id=\"Comments\">팝업-MassInput</Col></Row><Row><Col id=\"TrcId\">PopupMassInput.xfdl.fn_CommCnc_OK</Col><Col id=\"TrcName\">MassInput-OK</Col><Col id=\"TrcSeq\">659</Col><Col id=\"ROW_CHK\"/><Col id=\"Comments\">팝업-MassInput</Col></Row><Row><Col id=\"TrcId\">PopupMultiSelect.xfdl.Form_onload</Col><Col id=\"TrcSeq\">660</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">PopupMultiSelect.xfdl.grd_list_onexpandup</Col><Col id=\"TrcSeq\">670</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">PopupSalesOrder.xfdl.btn_ok_onclick</Col><Col id=\"TrcSeq\">680</Col><Col id=\"Comments\">팝업검색</Col><Col id=\"ROW_CHK\"/><Col id=\"TrcName\">팝업-판매오더검색</Col></Row><Row><Col id=\"TrcId\">PopupSalesOrder.xfdl.Form_onload</Col><Col id=\"TrcSeq\">690</Col><Col id=\"Comments\">팝업검색</Col><Col id=\"ROW_CHK\"/><Col id=\"TrcName\">팝업-판매오더검색</Col></Row><Row><Col id=\"TrcId\">PopupVendor.xfdl.Form_onload</Col><Col id=\"Comments\">벤더검색</Col><Col id=\"TrcName\">벤더온로드(팝업</Col><Col id=\"ROW_CHK\"/><Col id=\"TrcSeq\">692</Col></Row><Row><Col id=\"TrcId\">PopupVendor.xfdl.tfn_VendorSearch</Col><Col id=\"Comments\">벤더검색</Col><Col id=\"TrcName\">벤더검색트랜잭션(팝업)</Col><Col id=\"TrcSeq\">692</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">PopupVendor.xfdl.callbackFunction</Col><Col id=\"TrcName\">콜백벤더검색(팝업)</Col><Col id=\"Comments\">벤더검색</Col><Col id=\"ROW_CHK\"/><Col id=\"TrcSeq\">692</Col></Row><Row><Col id=\"TrcId\">PopupSaveLayout.xfdl.callbackFunc_pop</Col><Col id=\"TrcSeq\">700</Col><Col id=\"Comments\">사용자화</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">PopupSaveLayout.xfdl.callbackFunction</Col><Col id=\"TrcSeq\">710</Col><Col id=\"Comments\">사용자화</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcSeq\">712</Col><Col id=\"TrcName\">사용자화콜백-저장(FormSave)</Col><Col id=\"TrcId\">PopupSaveLayout.xfdl.callbackFunction.FormatSave</Col><Col id=\"Comments\">사용자화</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">PopupSaveLayout.xfdl.fn_reset</Col><Col id=\"TrcSeq\">720</Col><Col id=\"Comments\">사용자화</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">PopupSaveLayout.xfdl.Form_onload</Col><Col id=\"TrcSeq\">730</Col><Col id=\"Comments\">사용자화</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">PopupSaveLayout.xfdl.tfn_FormatSave</Col><Col id=\"TrcSeq\">740</Col><Col id=\"Comments\">사용자화</Col><Col id=\"TrcName\">포맺저장트랜잭션</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">PopupSaveLayout.xfdl.tfn_FormatSearch</Col><Col id=\"TrcSeq\">750</Col><Col id=\"Comments\">사용자화</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Popup.xjs.gfn_openSearchPop</Col><Col id=\"Comments\">xjs-팝업</Col><Col id=\"TrcName\">검색팝업오픈공통화</Col><Col id=\"TrcSeq\">752</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">QmeNexa.xjs.gfn_getArrComboSetStr</Col><Col id=\"TrcSeq\">760</Col><Col id=\"Comments\"/><Col id=\"TrcName\">공통코드문자열처리</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">QmeNexa.xjs.gfn_onloadSequence</Col><Col id=\"TrcSeq\">770</Col><Col id=\"Comments\"/><Col id=\"TrcName\">온로드시퀀스</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">QmeNexa.xjs.gfn_qmeRedirectMenu</Col><Col id=\"ROW_CHK\"/><Col id=\"TrcSeq\">772</Col><Col id=\"TrcName\">QME메뉴호출-리다이렉트</Col></Row><Row><Col id=\"TrcId\">Transaction.xjs.gfn_callback</Col><Col id=\"TrcSeq\">780</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Transaction.xjs.gfn_transaction</Col><Col id=\"TrcSeq\">790</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Util_adh.xjs._getUserProperty</Col><Col id=\"TrcSeq\">800</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Util_adh.xjs.gfn_callbackFunction</Col><Col id=\"TrcSeq\">810</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Util_adh.xjs.gfn_commButtonAlignByVisible</Col><Col id=\"TrcSeq\">820</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Util_adh.xjs.gfn_getAllInitData</Col><Col id=\"TrcSeq\">830</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Util_adh.xjs.gfn_getParentForm</Col><Col id=\"TrcSeq\">840</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Util_adh.xjs.gfn_setUser</Col><Col id=\"TrcSeq\">850</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Util.xjs.gfn_SetFirstRow</Col><Col id=\"TrcSeq\">860</Col><Col id=\"Comments\"/><Col id=\"TrcName\">콤보첫줄삽입</Col><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Validation.xjs.gfn_clearValidation</Col><Col id=\"TrcSeq\">870</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Validation.xjs.gfn_setValidation</Col><Col id=\"TrcSeq\">880</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcName\"/><Col id=\"TrcId\">Validation.xjs.gfn_validation</Col><Col id=\"TrcSeq\">890</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Validation.xjs.gfn_validationCheckRule</Col><Col id=\"TrcName\"/><Col id=\"TrcSeq\">900</Col><Col id=\"Comments\"/><Col id=\"ROW_CHK\"/></Row><Row><Col id=\"TrcId\">Validation.xjs.gfn_rowMessageValidation</Col><Col id=\"TrcSeq\">920</Col><Col id=\"ROW_CHK\"/><Col id=\"TrcName\"> 체크로직-메세지세팅</Col><Col id=\"Comments\"/></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_TrcOutputTxt", this);
            obj._setContents("<ColumnInfo><Column id=\"OutputTxt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_FormatOutDs", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYOUT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SaveUser\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_1\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_2\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_3\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_4\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_5\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_6\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_7\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_8\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_9\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_10\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_outDs", this);
            obj._setContents("<ColumnInfo><Column id=\"outName\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/><Column id=\"dsCol\" type=\"STRING\" size=\"256\"/><Column id=\"dsColType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("QmeLogonUserId","");
            this._addVariable("LanguageKey","");
            this._addVariable("MultiTxtSplitChar","＾");
            this._addVariable("TrcOutputTxt","");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("App_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_showcascadestatustext("false");
            mainframe.set_openstatus("maximize");
            mainframe.set_resizable("true");
            mainframe.set_showcascadetitletext("true");
            mainframe.set_showtitleicon("true");
            mainframe.set_titletext("NewERP");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("vMainFrameSet",null,null,null,null,null,null,this);
            frame0.set_separatesize("36,*,36");
            frame0.set_showcascadestatustext("false");
            frame0.set_showtitlebar("false");
            frame0.set_showtitleicon("true");
            frame0.set_showcascadetitletext("true");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("TopFrame",null,null,null,null,null,null,"Frame::Form_Top.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_showstatusbar("false");
            frame1.set_dragmovetype("normal");
            frame1.set_showtitleicon("true");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("Frame::Form_Top.xfdl");


            var frame2 = new HFrameSet("hWorkFrameSet",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("240,*");
            frame2.set_showcascadestatustext("false");
            frame2.set_showcascadetitletext("true");
            frame2.set_showtitleicon("false");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"Frame::Form_Left.xfdl",frame2);
            frame3.set_showtitlebar("false");
            frame3.set_showstatusbar("false");
            frame3.set_dragmovetype("normal");
            frame3.set_showcascadetitletext("true");
            frame3.set_showtitleicon("true");
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("Frame::Form_Left.xfdl");


            var frame4 = new VFrameSet("vMdiFrameSet",null,null,null,null,null,null,frame2);
            frame4.set_separatesize("36,*");
            frame4.set_showcascadetitletext("true");
            frame4.set_showtitlebar("false");
            frame2.addChild(frame4.name, frame4);

            var frame5 = new ChildFrame("TabFrame",null,null,null,"36",null,null,"Frame::Form_Tab.xfdl",frame4);
            frame5.set_showtitlebar("false");
            frame5.set_showstatusbar("false");
            frame5.set_dragmovetype("normal");
            frame5.set_showcascadetitletext("true");
            frame5.set_showtitleicon("true");
            frame4.addChild(frame5.name, frame5);
            frame5.set_formurl("Frame::Form_Tab.xfdl");


            var frame6 = new FrameSet("FrameSet",null,null,null,null,null,null,frame4);
            frame6.set_showcascadetitletext("true");
            frame6.set_showtitlebar("false");
            frame6.set_showtitleicon("true");
            frame4.addChild(frame6.name, frame6);

            var frame7 = new ChildFrame("WorkFrame",null,null,null,null,null,null,"Frame::Form_Work.xfdl",frame6);
            frame7.set_showtitlebar("false");
            frame7.set_dragmovetype("normal");
            frame7.set_openstatus("maximize");
            frame7.set_showtitleicon("true");
            frame6.addChild(frame7.name, frame7);
            frame7.set_formurl("Frame::Form_Work.xfdl");


            var frame8 = new ChildFrame("LogonFrame",null,null,null,null,null,null,"Frame::Form_Logon.xfdl",frame0);
            frame8.set_showtitlebar("false");
            frame0.addChild(frame8.name, frame8);
            frame8.set_formurl("Frame::Form_Logon.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onloadingappvariables",this.Application_onloadingappvariables,this);
            this.addEventHandler("onbeforeexit",this.Application_onbeforeexit,this);
            this.addEventHandler("onexit",this.Application_onexit,this);
            this.addEventHandler("onerror",this.Application_onerror,this);
            this.addEventHandler("onload",this.Application_onload,this);
            this.mainframe.vMainFrameSet.hWorkFrameSet.vMdiFrameSet.FrameSet.addEventHandler("onsize",this.mainframe_vMainFrameSet_hWorkFrameSet_vMdiFrameSet_FrameSet_onsize,this);
        };
        
        // script Compiler
        this.addIncludeScript("App_Desktop.xadl","Library::Library.xjs");
        this.registerScript("App_Desktop.xadl", function() {
        this.executeIncludeScript("Library::Library.xjs"); /*include "Library::Library.xjs"*/;

        //var USERCODE ="";

        this.Application_onloadingappvariables = function(obj,e)
        {
        	// Form_Logon - callbackFunction에서 지정
        	this.USERCODE = "";
        	this.USERNAME = "";

        	this.PRD_SERVER = "http://erp.hints.com/erp";
        	this.QA_SERVER = "http://QA.hints.com/erp/";
        	this.DEV_SERVER = "http://localhost:8080/erp/";

        	this.gv_mainframe = obj.mainframe;

        	this.gv_MainFrameSet = obj.mainframe.vMainFrameSet;
        	this.gv_TopFrame = obj.mainframe.vMainFrameSet.TopFrame;
        	this.gv_WorkFrameSet = obj.mainframe.vMainFrameSet.hWorkFrameSet;
        	this.gv_LogonFrame = obj.mainframe.vMainFrameSet.LogonFrame;

        	this.gv_LeftFrame = obj.mainframe.vMainFrameSet.hWorkFrameSet.LeftFrame;
        	this.gv_MdiFrameSet = obj.mainframe.vMainFrameSet.hWorkFrameSet.vMdiFrameSet;
        	this.gv_TabFrame = obj.mainframe.vMainFrameSet.hWorkFrameSet.vMdiFrameSet.TabFrame;
        	this.gv_FrameSet = obj.mainframe.vMainFrameSet.hWorkFrameSet.vMdiFrameSet.FrameSet;
        	this.gv_WorkFrame = obj.mainframe.vMainFrameSet.hWorkFrameSet.vMdiFrameSet.FrameSet.WorkFrame;


        	this.gv_WinIdCol = "MenuCode";
        	this.gv_MsgTitle = "알림";

        // 	this.gv_openStatus = "maximize"; //새로운 프레임이 열려지는 상태
        // 	this.gv_openOnlyOne = true; //동일한 메뉴를 하나 이상 오픈가능 여부(true:하나만 오픈, false:하나이상 오픈)
        // 	this.gv_openMaxFrame = 20; //열리는 프레임 최대 갯수

        	this.gv_activeMenuId = "MenuCode";
        	this.gv_TopFrameHeigth = 40;
        	this.gv_LeftFrameShowWidth = 265;
        	this.gv_LeftFrameHideWidth = 10;
        	this.gv_RightFrameWidth = 2;
        	this.gv_openStatus = "";

        	/**********************************************************************************
        	 각 프레임에 해당되는 객체 참조 변수
        	 **********************************************************************************/
        	this.gv_AppWorkFrameSet = undefined; //업무화면을 관리하는 프레임셋
        	this.gv_AppTabPath = undefined; //MDI TAB 프레임
        	this.gv_AppTopPath = undefined; //상단 프레임
        	this.gv_AppLeftPath = undefined; //좌측 프레임
        	this.gv_AppRightPath = undefined; //우측 프레임
        	this.gv_AppMenuPath = undefined; //메뉴 프레임
        	this.gv_AppBodyFrameSet = undefined; //메뉴와 업무화면을 갖고있는 프레임셋
        	this.gv_AppMainFrame = undefined;
        	this.gv_MainForm = undefined;

        	/* 메뉴정보 칼럼 변수*/
        	/*
        	 (index 0 ~ 3에 권한속성을 설정 자리순서대로 insert|update|delete|print 순으로 설정한 걸 가정(각 자리 "1":가능, "0": 불가능)
        	 */
        	this.gv_MenuCodeCol = "MenuCode"; //아이디
        	this.gv_MenuNameCol = "MenuName"; //명칭
        	this.gv_MenuLevelCol = "MenuLevel"; //레벨
        	this.gv_MenuURLCol = "MenuURL"; //페이지경로
        	this.gv_MenuIsLeafCol = "isLeaf"; //메뉴 Leaf 유무
        	this.gv_MenuIsDUPCol = "isDUP"; //메뉴 DUP 유무

        };

        this.mainframe_vMainFrameSet_hWorkFrameSet_vMdiFrameSet_FrameSet_onsize = function(obj,e)
        {
        	// Form 여백
        // 	var iFramesCnt = QME.gv_FrameSet.frames.length;
        // 	for (var i=0; i<iFramesCnt; i++)
        // 	{
        // 		this.gv_FrameSet.frames[i].set_width(e.cx - 10);
        // 		this.gv_FrameSet.frames[i].set_height(e.cy - 10);
        // 		this.gv_FrameSet.frames[i].set_right(10);
        // 	}
        };

        this.Application_onbeforeexit = function(obj,e)
        {
        		return "종료하시겠습니까?";
        };

        this.Application_onexit = function(obj,e)
        {
        	this.gv_MainFrameSet.set_separatesize("0,0,*");
        };

        this.gfn_callFormFunction = function (sFuncNm, sArg)
        {
        	this.gv_FrameSet[this.gv_activeMenuId].form.fn_callFormFunction(sFuncNm, sArg);
        };

        this.Application_onerror = function (obj, e)
        {
        	if (e.errorcode == "0x80010049")
        	{
        		return true;
        	}
        };

        this.Application_onload = function(obj,e)
        {
        	this.gds_Menu.clearData();
        	this.gds_Logon.clearData();
        	this.gds_User.clearData();
        	this.gds_OpenMenu.clearData();
        	this.gds_UserGridSet.clearData();
        	this.gds_MsgSet.clearData();
        	this.gds_UserGridSetOut.clearData()
        	this.gds_CommCode.clearData();

        	trace("운영시 변경해야함");

        	this.gv_MainFrameSet.set_separatesize("40,*,0");

        };


        });

        this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("App_Desktop.xadl");
    };
}
)();
