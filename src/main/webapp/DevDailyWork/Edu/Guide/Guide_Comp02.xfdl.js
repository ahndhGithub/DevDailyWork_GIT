(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_Comp02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(814,1120);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static10","87","121","108","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","340","121","108","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("disabled");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","87","146","51","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("가나");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","87","172","62","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("가나다");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03","87","198","73","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Button("btn_04","87","224","84","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("가나다라마");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","343","172","62","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("가나다");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_05","343","198","73","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("가나다라");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_06","343","224","84","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("가나다라마");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_07","343","146","51","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("가나");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","51","172","29","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_color("red");
            obj.set_text("h21");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","85","336","108","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GuideStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","341","336","108","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GuideStatus");
            this.addChild(obj.name, obj);

            obj = new Button("btn_08","85","390","58","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("가나다");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_09","85","419","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("가나다라");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_10","85","448","84","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("가나다라마");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_11","341","390","58","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("가나다");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_12","341","419","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("가나다라");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_13","341","448","84","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("가나다라마");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_14","341","361","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("가나");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_15","85","361","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09","51","390","29","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_color("red");
            obj.set_text("h24");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_10","195","448","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("w84");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_11","195","419","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("w71");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_12","195","390","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("w58");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_13","195","361","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("w45");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","86","563","108","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GuideStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","342","563","108","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GuideStatus");
            this.addChild(obj.name, obj);

            obj = new Button("btn_20","86","617","58","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("가나다");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_21","86","646","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("가나다라");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_22","86","675","84","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("가나다라마");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_23","342","617","58","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("가나다");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_24","342","646","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("가나다라");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_25","342","675","84","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("가나다라마");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_26","342","588","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("가나");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_27","86","588","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_15","51","617","29","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_color("red");
            obj.set_text("h24");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("Static83","204","280","169","21",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("class : btn_WF_main1");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_30","503","361","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_31","551","361","58","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("가나다");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","548","358","3","35",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_22","535","392","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("w3");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","609","358","3","35",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_23","596","392","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("w3");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_32","612","361","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("가나다라");
            obj.set_cssclass("btn_WF_main1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_33","503","588","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_34","551","588","58","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("가나다");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","548","584","3","35",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_24","535","618","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("w3");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","609","584","3","35",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_25","596","618","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("w3");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_35","612","588","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("가나다라");
            obj.set_cssclass("btn_WF_sub1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_16","196","675","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("w84");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_17","196","646","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("w71");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_18","196","617","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("w58");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_19","196","588","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("w45");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_16","85","994","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_pop1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07","51","994","29","28",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_color("red");
            obj.set_text("h28");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Button("btn_17","151","994","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_pop2");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","328","998","169","21",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("class : btn_WF_pop1");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_51","261","994","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_pop1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_52","261","1026","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_pop2");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","328","1030","169","21",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("class : btn_WF_pop2");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_59","134","1025","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("w6");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static91","145","991","6","35",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_28","554","994","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("btn_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","585","994","184","21",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("class : btn_WF_search");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static93","83","790","108","20",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GuideStatus");
            this.addChild(obj.name, obj);

            obj = new Static("Static94","339","790","108","20",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GuideStatus");
            this.addChild(obj.name, obj);

            obj = new Button("btn_81","85","815","51","21",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_detail");
            this.addChild(obj.name, obj);

            obj = new Button("btn_82","85","841","62","21",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("가나다");
            obj.set_cssclass("btn_WF_detail");
            this.addChild(obj.name, obj);

            obj = new Button("btn_83","85","867","73","21",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("가나다라");
            obj.set_cssclass("btn_WF_detail");
            this.addChild(obj.name, obj);

            obj = new Button("btn_84","85","893","84","21",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("가나다라마");
            obj.set_cssclass("btn_WF_detail");
            this.addChild(obj.name, obj);

            obj = new Button("btn_85","339","815","51","21",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_detail");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_86","339","841","62","21",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("가나다");
            obj.set_cssclass("btn_WF_detail");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_87","339","893","84","21",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("가나다라마");
            obj.set_cssclass("btn_WF_detail");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_88","339","867","73","21",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("가나다라");
            obj.set_cssclass("btn_WF_detail");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_61","191","815","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("w51");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_62","191","841","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("w62");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_63","191","867","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("w73");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_64","191","893","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("w84");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10",null,"30","570",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("Components Design Guide - Button");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","18","60","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("Basic Button");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","28","90","240","21",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("최소 2글자 기준으로 한글자에 11px 증가");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","18","275","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("Main Button (주기능 버튼)");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","28","305","240","21",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("최소 2글자 기준으로 한글자에 13px 증가");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","18","502","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("Sub Button (부기능 버튼)");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","28","532","240","21",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("최소 2글자 기준으로 한글자에 13px 증가");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","203","507","169","21",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("class : btn_WF_sub1");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","18","729","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("Detail Button (상세영역 버튼)");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","28","759","240","21",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("최소 2글자 기준으로 한글자에 11px 증가");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","225","734","169","21",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("class : btn_WF_detail");
            obj.set_cssclass("sta_WF_guideBlueTxt");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_26","51","841","29","21",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_color("red");
            obj.set_text("h21");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Button("btn_44","502","146","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("가나다");
            this.addChild(obj.name, obj);

            obj = new Button("btn_45","569","146","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("가나다");
            this.addChild(obj.name, obj);

            obj = new Button("btn_46","636","146","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("가나다");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","564","143","5","35",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_32","554","177","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("w5");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","631","143","5","35",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_33","621","177","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("w5");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_71","503","815","51","21",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_detail");
            this.addChild(obj.name, obj);

            obj = new Button("btn_80","559","815","51","21",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_detail");
            this.addChild(obj.name, obj);

            obj = new Static("sta_58","544","847","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("w5");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static90","554","813","5","35",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","18","944","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("Popup Button");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","498","944","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("Search Button");
            obj.set_cssclass("sta_WF_title_sub");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27","522","994","27","21",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_color("red");
            obj.set_text("h21");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_guideRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","201","145","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("w51");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","201","171","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("w62");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","201","197","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("w73");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","201","223","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("w84");
            obj.set_cssclass("sta_WF_guideRedTxt");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",814,1120,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_Comp02.xfdl", function() {
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

        this.loadIncludeScript("Guide_Comp02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
