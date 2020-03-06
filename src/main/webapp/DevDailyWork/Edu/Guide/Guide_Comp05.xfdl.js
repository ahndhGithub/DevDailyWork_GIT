(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_Comp05");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(814,1430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","10","80","789","57",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","95","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_00","94","0",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","28","95","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_01","94","28",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","98","4","687","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","98","32","687","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","104","77","1","67",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static18");
            obj.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static122","82","142","51","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1px 겹침");
            obj.set_cssclass("sta_WF_guideRedTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","482","108","120","1",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static18");
            obj.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","609","98","51","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1px 겹침");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","105","81","123","3",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","105","80","3","56",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","105","133","123","3",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","208","142","284","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사방여백 3px (배경 border포함 4px)");
            obj.set_cssclass("sta_WF_guideRedTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","105","109","123","3",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","795","80","3","57",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","547","185","179","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("class : sta_WF_detailLine");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","15","185","189","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("class : sta_WF_detailLabel");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","14","239","390","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("최소 7글자 기준으로 한 글자에 12px씩 증가");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","10","268","95","29",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("가나");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","10","302","95","29",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","10","336","95","29",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","11","370","107","29",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","11","404","119","29",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("가나다라마바사아");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","11","438","131","29",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("가나다라마바사아자");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","11","472","143","29",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","219","341","99","18",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("width : 95");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","219","370","99","29",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("width : 107");
            obj.set_cssclass("sta_WF_guideRedTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","219","404","99","29",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("width : 119");
            obj.set_cssclass("sta_WF_guideRedTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","219","438","99","29",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("width : 131");
            obj.set_cssclass("sta_WF_guideRedTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","219","472","99","29",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("width : 143");
            obj.set_cssclass("sta_WF_guideRedTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","109","268","39","29",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_color("red");
            obj.set_text("h29");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","10","555","178","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("여러줄일경우 28px씩 증가");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","612","729","29",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","95","29",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_00","94","0",null,"29","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","98","4","627","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static38","105","105","123","3",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","10","585","178","27",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("1줄 : Height 29px");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","10","825","729","85",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","95","29",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta_00","94","0",null,"29","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","0","28","95","29",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta_01","94","28",null,"29","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit00","98","4","627","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit01","98","32","627","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","0","56","95","29",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta_02","94","56",null,"29","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit02","98","60","627","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static40","10","798","138","27",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("3줄 : Height 85px");
            obj.getSetter("onchanged").set("Static40_onchanged");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","741","611","39","29",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_color("red");
            obj.set_text("h29");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","10","1155","794","57",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","95","29",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("sta_00","94","0",null,"29","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","0","28","95","29",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("sta_01","94","28",null,"29","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00","98","4","295","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit01","98","32","295","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","396","28","95","29",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","396","0","95","29",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit02","494","32","295","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit03","494","4","295","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static42","10","974","138","27",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("1단일 경우");
            obj.set_cssclass("sta_WF_GuideStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","10","954","138","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("여러단일경우");
            obj.set_cssclass("sta_WF_GuideTitle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","598","224","1","299",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_GuideLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","365","242","138","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("필수라벨");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","365","302","95","29",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","365","336","95","29",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","365","370","107","29",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","365","404","119","29",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("가나다라마바사아");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","365","268","95","29",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("가나");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","470","272","189","21",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("class : sta_WF_detailLabel_ess");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","10","706","729","57",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","95","29",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("sta_00","94","0",null,"29","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01","0","28","95","29",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("sta_01","94","28",null,"29","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit00","98","4","627","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("Edit01","98","32","627","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static44","10","679","138","27",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("2줄 : Height 57px");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","10","1118","138","27",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("2단일 경우");
            obj.set_cssclass("sta_WF_GuideStatus");
            this.addChild(obj.name, obj);

            obj = new Div("Div06","10","1291",null,"57","10",null,null,null,null,null,this);
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_00","94","0",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static01","0","28","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_01","94","28",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit00","98","4","155","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("4");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit01","98","32","155","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("5");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static02","256","28","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("6");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static03","256","0","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("7");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit02","620","32","165","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("8");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit03","620","4","165","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("9");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static04","522","28","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("10");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static05","522","0","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("11");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit04","354","32","165","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("12");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit05","354","4","165","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("13");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static56","10","1254","138","27",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("3단일 경우");
            obj.set_cssclass("sta_WF_GuideStatus");
            this.addChild(obj.name, obj);

            obj = new Div("Div07","10","1011","794","57",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","94","0",null,"29","0",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("sta_01","94","28",null,"29","0",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit00","98","4","692","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("1");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit01","98","32","692","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("3");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","95","29",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("4");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static01","0","28","95","29",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("5");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("sta_10","10","1073","94","20",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("w95");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_12","106","1073","699","20",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("w727");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_13","108","1188","295","19",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_color("red");
            obj.set_text("w295");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","366","1226","95","21",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("Left: 396");
            obj.set_visible("true");
            obj.set_color("dodgerblue");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_33","412","1207","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_background("dodgerblue");
            this.addChild(obj.name, obj);

            obj = new Static("sta_34","273","1343","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_background("dodgerblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","250","1364","48","21",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("Left: 256");
            obj.set_visible("true");
            obj.set_color("dodgerblue");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_35","546","1344","1","20",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_background("dodgerblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","523","1363","48","21",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("Left: 522");
            obj.set_visible("true");
            obj.set_color("dodgerblue");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","10","10",null,"30","702",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Detail Area");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","33","131","2","57",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("Static18");
            obj.set_background("#2391ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","564","138","2","47",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("Static18");
            obj.set_background("#2391ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","364","438","131","29",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("가나다라마바사아자");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","364","472","143","29",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","741","706","39","57",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_color("red");
            obj.set_text("h29");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","741","826","39","85",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_color("red");
            obj.set_text("h29");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","503","1188","295","19",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_color("red");
            obj.set_text("w295");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06","107","1324","155","19",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_color("red");
            obj.set_text("w155");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07","364","1324","165","19",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_color("red");
            obj.set_text("w165");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08","631","1324","165","19",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_color("red");
            obj.set_text("w165");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",814,1430,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_Comp05.xfdl", function() {
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

        this.loadIncludeScript("Guide_Comp05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
