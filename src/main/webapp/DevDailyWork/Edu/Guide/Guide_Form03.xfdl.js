(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_Form01");
            this.set_titletext("기본화면구성2");
            if (Form == this.constructor)
            {
                this._setFormPosition(814,529);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"20\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"BONUS\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"11\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"50\"/><Column id=\"BIRTH_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"WEDD_DAY\" type=\"DATE\" size=\"20\"/><Column id=\"IMG_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp13.png</Col><Col id=\"COL_CHK\">0</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col><Col id=\"PHONE_NO\">0105339755</Col><Col id=\"BIRTH_DAY\">19890325</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR240</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20110508</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Elsa@nexacro.com</Col><Col id=\"PHONE_NO\">0107401829</Col><Col id=\"BIRTH_DAY\">19700122</Col><Col id=\"WEDD_DAY\">20051004</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp19.png</Col><Col id=\"E_MAIL\">Bts@nexacro.com</Col><Col id=\"PHONE_NO\">0104293599</Col><Col id=\"BIRTH_DAY\">19781222</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Ted </Col><Col id=\"EMPL_ID\">CN210</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp19.png</Col><Col id=\"E_MAIL\">Ted@nexacro.com</Col><Col id=\"PHONE_NO\">0107726763</Col><Col id=\"BIRTH_DAY\">19640204</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Diana</Col><Col id=\"EMPL_ID\">JP020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6500</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp11.png</Col><Col id=\"E_MAIL\">Diana@nexacro.com</Col><Col id=\"PHONE_NO\">0107314011</Col><Col id=\"BIRTH_DAY\">19720513</Col><Col id=\"WEDD_DAY\">19871015</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Issac</Col><Col id=\"EMPL_ID\">CN010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">900</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Issac@nexacro.com</Col><Col id=\"PHONE_NO\">0104316461</Col><Col id=\"BIRTH_DAY\">19940512</Col><Col id=\"WEDD_DAY\">19980502</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Henry </Col><Col id=\"EMPL_ID\">CN220</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp20.png</Col><Col id=\"E_MAIL\">Henry@nexacro.com</Col><Col id=\"PHONE_NO\">0102320795</Col><Col id=\"BIRTH_DAY\">19970926</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8500</Col><Col id=\"BONUS\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Kate@nexacro.com</Col><Col id=\"PHONE_NO\">0106348086</Col><Col id=\"BIRTH_DAY\">19861119</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR140</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20101109</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp18.png</Col><Col id=\"E_MAIL\">Twice@nexacro.com</Col><Col id=\"PHONE_NO\">0101251107</Col><Col id=\"BIRTH_DAY\">19790318</Col><Col id=\"WEDD_DAY\">20050203</Col><Col id=\"SALARY\">7300</Col><Col id=\"BONUS\">3000</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Dennis </Col><Col id=\"EMPL_ID\">JP130</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"SALARY\">5600</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp17.png</Col><Col id=\"E_MAIL\">Dennis@nexacro.com</Col><Col id=\"PHONE_NO\">0104457429</Col><Col id=\"BIRTH_DAY\">19600427</Col><Col id=\"WEDD_DAY\">19880505</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Max </Col><Col id=\"EMPL_ID\">CN020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">3500</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp11.png</Col><Col id=\"E_MAIL\">Max@nexacro.com</Col><Col id=\"PHONE_NO\">0109825316</Col><Col id=\"BIRTH_DAY\">19691021</Col><Col id=\"WEDD_DAY\">19861022</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6800</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp11.png</Col><Col id=\"E_MAIL\">Jackson@nexacro.com</Col><Col id=\"PHONE_NO\">0103173402</Col><Col id=\"BIRTH_DAY\">19700302</Col><Col id=\"WEDD_DAY\">19971030</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">8600</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp12.png</Col><Col id=\"E_MAIL\">Adamr@nexacro.com</Col><Col id=\"PHONE_NO\">0104643738</Col><Col id=\"BIRTH_DAY\">19890618</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">7700</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Belle@nexacro.com</Col><Col id=\"PHONE_NO\">0102989094</Col><Col id=\"BIRTH_DAY\">19760227</Col><Col id=\"WEDD_DAY\">19910519</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Lexy</Col><Col id=\"EMPL_ID\">JP040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">2000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp13.png</Col><Col id=\"E_MAIL\">Lexy@nexacro.com</Col><Col id=\"PHONE_NO\">0107956572</Col><Col id=\"BIRTH_DAY\">19780808</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Lucy</Col><Col id=\"EMPL_ID\">JP050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Lucy@nexacro.com</Col><Col id=\"PHONE_NO\">0107903476</Col><Col id=\"BIRTH_DAY\">19770924</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp15.png</Col><Col id=\"E_MAIL\">Kein@nexacro.com</Col><Col id=\"PHONE_NO\">0108938528</Col><Col id=\"BIRTH_DAY\">19800206</Col><Col id=\"WEDD_DAY\">20050407</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Juliana</Col><Col id=\"EMPL_ID\">JP110</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp15.png</Col><Col id=\"E_MAIL\">Juliana@nexacro.com</Col><Col id=\"PHONE_NO\">0108234435</Col><Col id=\"BIRTH_DAY\">19610312</Col><Col id=\"WEDD_DAY\">20130416</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp17.png</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"PHONE_NO\">0106851530</Col><Col id=\"BIRTH_DAY\">19641212</Col><Col id=\"WEDD_DAY\">19880623</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">900</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp20.png</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col><Col id=\"PHONE_NO\">0108230482</Col><Col id=\"BIRTH_DAY\">19751109</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Maria</Col><Col id=\"EMPL_ID\">JP030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">6500</Col><Col id=\"BONUS\">4000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp12.png</Col><Col id=\"E_MAIL\">Maria@nexacro.com</Col><Col id=\"PHONE_NO\">0105053225</Col><Col id=\"BIRTH_DAY\">19810531</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Eddy</Col><Col id=\"EMPL_ID\">JP010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">7000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Eddy@nexacro.com</Col><Col id=\"PHONE_NO\">0107218351</Col><Col id=\"BIRTH_DAY\">19731019</Col><Col id=\"WEDD_DAY\">19890505</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Sarah</Col><Col id=\"EMPL_ID\">JP120</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">5000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp16.png</Col><Col id=\"E_MAIL\">Sarah@nexacro.com</Col><Col id=\"PHONE_NO\">0105784137</Col><Col id=\"BIRTH_DAY\">19821130</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\">8500</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp16.png</Col><Col id=\"E_MAIL\">Ivy@nexacro.com</Col><Col id=\"PHONE_NO\">0107642474</Col><Col id=\"BIRTH_DAY\">19790905</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Noel </Col><Col id=\"EMPL_ID\">CN030</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">7300</Col><Col id=\"BONUS\">400</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp12.png</Col><Col id=\"E_MAIL\">Noel@nexacro.com</Col><Col id=\"PHONE_NO\">0104794523</Col><Col id=\"BIRTH_DAY\">19970717</Col><Col id=\"WEDD_DAY\">20140720</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Arnold</Col><Col id=\"EMPL_ID\">CN240</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20110508</Col><Col id=\"SALARY\">5600</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">Arnold@nexacro.com</Col><Col id=\"PHONE_NO\">0102255131</Col><Col id=\"BIRTH_DAY\">19920531</Col><Col id=\"WEDD_DAY\">19971116</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Alex </Col><Col id=\"EMPL_ID\">CN230</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">3500</Col><Col id=\"BONUS\">1200</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Alex@nexacro.com</Col><Col id=\"PHONE_NO\">0106638982</Col><Col id=\"BIRTH_DAY\">19730718</Col><Col id=\"WEDD_DAY\">20010602</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">800</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp10.png</Col><Col id=\"E_MAIL\">John@nexacro.com</Col><Col id=\"PHONE_NO\">0109863248</Col><Col id=\"BIRTH_DAY\">19730621</Col><Col id=\"WEDD_DAY\">20090305</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Steven </Col><Col id=\"EMPL_ID\">CN050</Col><Col id=\"POS_CODE\">10</Col><Col id=\"HIRE_DATE\">20131120</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">900</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp14.png</Col><Col id=\"E_MAIL\">Steven@nexacro.com</Col><Col id=\"PHONE_NO\">0103786348</Col><Col id=\"BIRTH_DAY\">19661021</Col><Col id=\"WEDD_DAY\"/></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Donald </Col><Col id=\"EMPL_ID\">JP140</Col><Col id=\"POS_CODE\">20</Col><Col id=\"HIRE_DATE\">20101109</Col><Col id=\"SALARY\">5000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"IMG_URL\">Images::img_emp18.png</Col><Col id=\"E_MAIL\">Donald@nexacro.com</Col><Col id=\"PHONE_NO\">0108208010</Col><Col id=\"BIRTH_DAY\">19840814</Col><Col id=\"WEDD_DAY\">20180201</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Ray </Col><Col id=\"EMPL_ID\">CN040</Col><Col id=\"POS_CODE\">30</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">3000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"IMG_URL\">Images::img_emp13.png</Col><Col id=\"E_MAIL\">Ray@nexacro.com</Col><Col id=\"PHONE_NO\">0101330259</Col><Col id=\"BIRTH_DAY\">19930402</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_corp", this);
            obj._setContents("<ColumnInfo><Column id=\"CORP_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"DEPT_NAME\">Education(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"DEPT_NAME\">Marketing(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"DEPT_NAME\">Sales(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"DEPT_NAME\">Education(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"DEPT_NAME\">Sales(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"DEPT_NAME\">Education(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row><Row><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"DEPT_NAME\">Marketing(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","10","10",null,"39","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_text("");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","8","61","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_searchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_corp","61","8","150","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_corp");
            obj.set_codecolumn("CORP_CODE");
            obj.set_datacolumn("CORP_NAME");
            obj.set_cssclass("essential");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","272","8","150","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","211","8","61","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_searchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","422","8","61","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_searchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","483","8","150","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","59","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","89",null,"431","429",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_emp");
            obj.set_scrolltype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"115\"/><Column size=\"137\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"법인\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"입사일자\"/><Cell col=\"5\" text=\"연봉\"/></Band><Band id=\"body\"><Cell text=\"bind:CORP_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_corp\" combocodecol=\"CORP_CODE\" combodatacol=\"CORP_NAME\"/><Cell col=\"1\" text=\"bind:EMPL_ID\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\" calendarpopupsize=\"156 179\"/><Cell col=\"5\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","49",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Div("Div06","395","59","409","431",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","31","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_00","94","31",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static01","0","59","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_01","94","59",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static06","0","87","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("4");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_detailLabel_ess");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_02","94","87",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static12","0","0","97","30",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("6");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_title");
            this.Div06.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","98","35","154","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("edt_name","98","64","154","20",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("8");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_03","94","115",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_04","94","143",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_05","94","171",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_06","94","199",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_07","94","227",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static02","0","143","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("15");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static03","0","115","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("16");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static04","0","199","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("17");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static07","0","171","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("18");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static08","0","227","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("19");
            obj.set_text("E-mail");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","98","91","154","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("21");
            obj.set_format("AA-###");
            obj.set_type("string");
            this.Div06.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","98","203","154","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("22");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("edt_name00","98","175","154","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("23");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("edt_name01","98","231","154","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("24");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static09","0","292","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("25");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_08","94","292",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static11","0","348","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("27");
            obj.set_text("연봉");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static13","0","260","97","30",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("28");
            obj.set_text("부가정보");
            obj.set_cssclass("sta_WF_title_sub");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static14","0","320","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("29");
            obj.set_text("결혼기념일");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_09","94","320",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static15","0","376","95","29",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("31");
            obj.set_text("상여금");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","98","296","154","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("32");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static16","0","256",null,"5","-376",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_10","94","348",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("sta_11","94","376",null,"29","0",null,null,null,null,null,this.Div06.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_detailLine");
            this.Div06.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","98","325","154","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("33");
            this.Div06.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","98","379","154","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("35");
            this.Div06.addChild(obj.name, obj);

            obj = new Radio("Radio00","98","121","154","20",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var Div06_form_Radio00_innerdataset = new nexacro.NormalDataset("Div06_form_Radio00_innerdataset", obj);
            Div06_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(Div06_form_Radio00_innerdataset);
            this.Div06.addChild(obj.name, obj);

            obj = new Combo("cmb_dept00","98","147","154","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.Div06.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","98","353","154","21",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("34");
            this.Div06.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",814,529,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_Form03.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.div_search.form.cmb_corp.addEventHandler("onitemchanged",this.div_search_cmb_corp_onitemchanged,this);
            this.Div06.form.Static11.addEventHandler("onclick",this.Div06_Static11_onclick,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
        };

        this.loadIncludeScript("Guide_Form03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();