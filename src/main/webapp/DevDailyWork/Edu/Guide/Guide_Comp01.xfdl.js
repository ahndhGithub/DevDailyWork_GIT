(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_Comp01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(814,1350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">01</Col><Col id=\"Column1\">가나다</Col></Row><Row><Col id=\"Column0\">02</Col><Col id=\"Column1\">가나다라</Col></Row><Row><Col id=\"Column0\">03</Col><Col id=\"Column1\">가나다라마</Col></Row><Row><Col id=\"Column0\">04</Col><Col id=\"Column1\">가나다라마바</Col></Row><Row><Col id=\"Column0\">05</Col><Col id=\"Column1\">가나다라마바</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column0\">06</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column0\">07</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">01</Col><Col id=\"Column1\">라디오</Col></Row><Row><Col id=\"Column0\">02</Col><Col id=\"Column1\">라디오01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">1</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column1\">C</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">U</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column1\">D</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column1\">7</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column1\">8</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column1\">9</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column1\">10</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">01</Col><Col id=\"Column2\">첫번째데이터</Col><Col id=\"Column3\">첫번째데이터</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">02</Col><Col id=\"Column2\">첫번째데이터01</Col><Col id=\"Column3\">첫번째데이터01</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">03</Col><Col id=\"Column2\">첫번째데이터02</Col><Col id=\"Column3\">첫번째데이터02</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">04</Col><Col id=\"Column2\">첫번째데이터03</Col><Col id=\"Column3\">첫번째데이터03</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">05</Col><Col id=\"Column2\">두번째데이터</Col><Col id=\"Column3\">두번째데이터</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">06</Col><Col id=\"Column2\">두번째데이터01</Col><Col id=\"Column3\">두번째데이터01</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">07</Col><Col id=\"Column2\">두번째데이터02</Col><Col id=\"Column3\">두번째데이터02</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">08</Col><Col id=\"Column2\">세번째데이터</Col><Col id=\"Column3\">세번째데이터</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">09</Col><Col id=\"Column2\">세번쨰데이터01</Col><Col id=\"Column3\">세번쨰데이터01</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column2\">세번쨰데이터02</Col><Col id=\"Column3\">세번쨰데이터02</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column2\">세번쨰데이터03</Col><Col id=\"Column3\">세번쨰데이터03</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column2\">네번째데이터</Col><Col id=\"Column3\">네번째데이터</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column2\">네번째데이터01</Col><Col id=\"Column3\">네번째데이터01</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column2\">네번째데이터02</Col><Col id=\"Column0\">14</Col><Col id=\"Column3\">네번째데이터02</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column2\">다섯번째데이터</Col><Col id=\"Column0\">15</Col><Col id=\"Column3\">다섯번째데이터</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column2\">다섯번째데이터01</Col><Col id=\"Column0\">16</Col><Col id=\"Column3\">다섯번째데이터01</Col><Col id=\"Column1\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd1", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">에디트</Col><Col id=\"Column2\">123456</Col><Col id=\"Column4\">20171217</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">김성명</Col><Col id=\"Column7\">가나다</Col><Col id=\"Column8\">123456789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column3\">01</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">에디트</Col><Col id=\"Column2\">123456</Col><Col id=\"Column4\">20171217</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">김성명</Col><Col id=\"Column7\">가나다라</Col><Col id=\"Column8\">123456789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column3\">02</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">에디트</Col><Col id=\"Column2\">123456</Col><Col id=\"Column4\">20171217</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">김성명</Col><Col id=\"Column7\">가나다라마</Col><Col id=\"Column8\">123456789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column3\">03</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">에디트</Col><Col id=\"Column2\">123456</Col><Col id=\"Column4\">20171217</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">김성명</Col><Col id=\"Column7\">가나다라마바</Col><Col id=\"Column8\">123456789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column3\">03</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">에디트</Col><Col id=\"Column2\">123456</Col><Col id=\"Column4\">20171217</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">김성명</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123456789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column3\">03</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd2", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">가나다라</Col><Col id=\"Column2\">가나다라마바</Col><Col id=\"Column3\">가나다라마바사</Col><Col id=\"Column4\">123456789</Col><Col id=\"Column5\">가나다라마바사</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">가나다라</Col><Col id=\"Column2\">가나다라마바</Col><Col id=\"Column3\">가나다라마바사</Col><Col id=\"Column4\">123456789</Col><Col id=\"Column5\">가나다라마바사</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">가나다라</Col><Col id=\"Column2\">가나다라마바</Col><Col id=\"Column3\">가나다라마바사</Col><Col id=\"Column4\">123456789</Col><Col id=\"Column5\">가나다라마바사</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">가나다라</Col><Col id=\"Column2\">가나다라마바</Col><Col id=\"Column3\">가나다라마바사</Col><Col id=\"Column4\">123456789</Col><Col id=\"Column5\">가나다라마바사</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">가나다라</Col><Col id=\"Column2\">가나다라마바</Col><Col id=\"Column3\">가나다라마바사</Col><Col id=\"Column4\">123456789</Col><Col id=\"Column5\">가나다라마바사</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04","100","50","678","31",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_border("1px solid #d5d5d5");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","80","100","164",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","0","243","100","77",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0","319","100","122",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","0","440","100","126",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","0","565","100","77",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","0","641","100","77",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","0","717","100","77",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","0","793","100","124",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","0","916","100","77",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","0","992","100","338",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","110","101","99","42",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("가나다라마바사\r\nABCDEFG abcdefg\r\n1234567890");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","279","92","99","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("가나다라마바사\r\nABCDEFG abcdefg\r\n1234567890");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","110","153","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Title");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","110","193","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Sub Title");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","161","58","51","14",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","318","58","61","14",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","662","58","61","14",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","484","58","62","14",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","110","265","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("가나다라마");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","279","265","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_value("가나다라마");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","617","265","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_value("가나다라마");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","447","264","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("가나다라마");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static122","447","285","92","14",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("class : essential");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","110","340","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("123456");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","279","340","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_format("###,###");
            obj.set_value("123456");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","617","340","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_format("###,###");
            obj.set_value("123456");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","447","340","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_format("###,###");
            obj.set_value("123456");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","110","385","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_value("123456");
            obj.set_format("123456-7890123");
            obj.set_cssclass("msk_WF_center");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05","279","385","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("123456");
            obj.set_format("123456-7890123");
            obj.set_cssclass("msk_WF_center");
            obj.set_type("string");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06","617","385","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_value("123456");
            obj.set_format("123456-7890123");
            obj.set_cssclass("msk_WF_center");
            obj.set_type("string");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07","447","385","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_value("123456");
            obj.set_format("123456-7890123");
            obj.set_cssclass("msk_WF_center_essential");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","110","461","150","70",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_value("가나다\n가나다라\n가나다라마바\n가나다라마바사\n가나다라마바사아\n가나다라마바사아자");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","279","461","150","70",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_value("가나다\n가나다라\n가나다라마바\n가나다라마바사\n가나다라마바사아\n가나다라마바사아자");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","617","461","150","70",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_value("가나다\n가나다라\n가나다라마바\n가나다라마바사\n가나다라마바사아\n가나다라마바사아자");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03","447","461","150","70",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_value("가나다\n가나다라\n가나다라마바\n가나다라마바사\n가나다라마바사아\n가나다라마바사아자");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","110","738","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("가나다");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","110","814","150","82",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","279","738","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_enable("false");
            obj.set_text("가나다");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","617","738","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_readonly("true");
            obj.set_text("가나다");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","447","738","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("essential");
            obj.set_text("가나다");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","279","811","150","80",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","110","662","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_value("123");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin01","279","662","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_enable("false");
            obj.set_value("123");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02","617","662","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_value("123");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin03","447","662","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("essential");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","110","1013","150","21",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("35");
            obj.set_value("20171219");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","279","1013","150","21",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("36");
            obj.set_value("20171219");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","617","1013","150","21",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("37");
            obj.set_value("20171219");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","447","1013","150","21",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("38");
            obj.set_value("20171219");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","110","1099","156","179",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("39");
            obj.set_value("20171219");
            obj.set_type("monthonly");
            obj.set_cssclass("cal_WF_month");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar09","110","1058","150","21",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("40");
            obj.set_value("20171219");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar10","447","1058","150","21",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("41");
            obj.set_value("20171219");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("spin");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","111","1301","124","14",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("class : cal_WF_Month");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09","109","1280","156","21",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_color("red");
            obj.set_text("w156");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_11","270","1099","30","179",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_color("red");
            obj.set_text("h179");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","108","586","68","21",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("체크01");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","176","586","68","21",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("체크02");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","347","586","68","21",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("체크02");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","277","586","68","21",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("체크01");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","515","586","68","21",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("체크02");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","444","586","68","21",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("체크01");
            obj.set_value("true");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","165","585","12","21",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_color("red");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","110","937","155","21",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","277","937","162","21",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02","444","937","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_direction("vertical");
            obj.set_cssclass("essential");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","15","152","44","20",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27","178","153","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("h30");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","178","193","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("h30");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","15","271","33","20",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","217","265","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("h21");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","243","777","1",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_background("#d5d5d5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","370","65","20",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","111","406","134","14",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("class : msk_WF_center");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","447","406","193","14",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("class : msk_WF_center_essential");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","0","440","777","1",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_background("#c5cfd9");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","447","361","92","14",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("class : essential");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","10","493","63","20",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","447","531","92","14",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("class : essential");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","565","777","1",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_background("#c5cfd9");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","10","669","36","20",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","447","683","92","14",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("class : essential");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","10","745","52","20",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","447","759","92","14",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("class : essential");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","10","845","52","20",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","10","593","67","20",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","10","944","44","20",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","10","1151","63","20",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","447","958","92","14",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("class : essential");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","447","1034","92","14",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("class : essential");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","447","1079","92","14",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("class : essential");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","447","606","92","14",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("class : essential");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","0","641","777","1",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_background("#c5cfd9");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","0","717","777","1",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_background("#c5cfd9");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","0","793","777","1",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_background("#c5cfd9");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","0","916","777","1",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_background("#c5cfd9");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","0","992","777","1",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_background("#c5cfd9");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","10","10","202","30",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("Components Design Guide");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","155","605","32","21",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_color("red");
            obj.set_text("w15");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","437","50","1","1280",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_background("#d5d5d5");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","607","50","1","1280",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_background("#d5d5d5");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","269","50","1","1280",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_background("#d5d5d5");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","0","319","777","1",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_background("#d5d5d5");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar05","279","1058","150","21",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("103");
            obj.set_value("20171219");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar06","617","1058","150","21",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("104");
            obj.set_value("20171219");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","0","50","101","31",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","777","50","1","1280",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_background("#d5d5d5");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","0","1329","777","1",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_background("#c5cfd9");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",814,1350,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_Comp01.xfdl", function() {

        this.Button03_onclick = function(obj,e)
        {
        	var i, j;
        	this.ProgressBar00.pos = 0;
        	for( i = 0 ; i < 200 ; i+=2 )
        	{
        		this.ProgressBar00.stepIt();
        		this.updateWindow();
        	}
        };

        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
        };

        this.loadIncludeScript("Guide_Comp01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
