
function redirectURL(sURL) {
	document.location = sURL;
}

function paddingString(str, pat) {
	return pat.substr(0, (pat.length-str.length) ) + str.toString(); 
}

function retArea(FirArea,SecArea, ForArea) {

	var sArea = FirArea.toString()+SecArea.toString() + ForArea.toString();
	var sRet ="";
	switch (sArea) {
case '10001':     
 sRet='北投區';
break;
case '10002':
 sRet = "士林區";
 break;
case '10003':
 sRet = "大同區";
 break;
case '10004':
 sRet = "中山區";
 break;
case '10005':
 sRet = "松山區";
 break;
case '10006':
 sRet = "內湖區";
 break;
case '10007':
 sRet = "南港區";
 break;
case '10008':
 sRet = "萬華區";
 break;
case '10009':
 sRet = "中正區";
 break;
case '10010':
 sRet = "大安區";
 break;
case '10011':
 sRet = "信義區";
 break;
case '10012':
 sRet = "文山區";
 break;
case '20001':
 sRet = "石門區";
 break;
case '20002':
 sRet = "三芝區";
 break;
case '20003':
 sRet = "淡水區";
 break;
case '20004':
 sRet = "八里區";
 break;
case '20005':
 sRet = "林口區";
 break;
case '20006':
 sRet = "泰山區";
 break;
case '20007':
 sRet = "五股區";
 break;
case '20008':
 sRet = "蘆洲區";
 break;
case '20009':
 sRet = "三重區";
 break;
case '20010':
 sRet = "新莊區";
 break;
case '20011':
 sRet = "樹林區";
 break;
case '20012':
 sRet = "鶯歌區";
 break;
case '20013':
 sRet = "板橋區";
 break;
case '20014':
 sRet = "中和區";
 break;
case '20015':
 sRet = "永和區";
 break;
case '20016':
 sRet = "土城區";
 break;
case '20017':
 sRet = "三峽區";
 break;
case '20018':
 sRet = "新店區";
 break;
case '20019':
 sRet = "深坑區";
 break;
case '20020':
 sRet = "石碇區";
 break;
case '20021':
 sRet = "坪林區";
 break;
case '20022':
 sRet = "烏來區";
 break;
case '20023':
 sRet = "金山區";
 break;
case '20024':
 sRet = "萬里區";
 break;
case '20025':
 sRet = "汐止區";
 break;
case '20026':
 sRet = "平溪區";
 break;
case '20027':
 sRet = "瑞芳區";
 break;
case '20028':
 sRet = "雙溪區";
 break;
case '20029':
 sRet = "貢寮區";
 break;
case '30001':
 sRet = "蘆竹鄉";
 break;
case '30002':
 sRet = "龜山鄉";
 break;
case '30003':
 sRet = "桃園市";
 break;
case '30004':
 sRet = "大園鄉";
 break;
case '30005':
 sRet = "觀音鄉";
 break;
case '30006':
 sRet = "新屋鄉";
 break;
case '30007':
 sRet = "楊梅市";
 break;
case '30008':
 sRet = "中壢市";
 break;
case '30009':
 sRet = "平鎮市";
 break;
case '30010':
 sRet = "龍潭鄉";
 break;
case '30011':
 sRet = "八德市";
 break;
case '30012':
 sRet = "大溪鎮";
 break;
case '30013':
 sRet = "復興鄉";
 break;
case '40001':
 sRet = "大甲區";
 break;
case '40002':
 sRet = "大安區";
 break;
case '40003':
 sRet = "外埔區";
 break;
case '40004':
 sRet = "清水區";
 break;
case '40005':
 sRet = "梧棲區";
 break;
case '40006':
 sRet = "沙鹿區";
 break;
case '40007':
 sRet = "龍井區";
 break;
case '40008':
 sRet = "大肚區";
 break;
case '40009':
 sRet = "烏日區";
 break;
case '40010':
 sRet = "霧峰區";
 break;
case '40011':
 sRet = "大里區";
 break;
case '40012':
 sRet = "后里區";
 break;
case '40013':
 sRet = "神岡區";
 break;
case '40014':
 sRet = "大雅區";
 break;
case '40015':
 sRet = "潭子區";
 break;
case '40016':
 sRet = "西屯區";
 break;
case '40017':
 sRet = "南屯區";
 break;
case '40018':
 sRet = "北屯區";
 break;
case '40019':
 sRet = "北區";
 break;
case '40020':
 sRet = "西區";
 break;
case '40021':
 sRet = "中區";
 break;
case '40022':
 sRet = "東區";
 break;
case '40023':
 sRet = "南區";
 break;
case '40024':
 sRet = "太平區";
 break;
case '40025':
 sRet = "豐原區";
 break;
case '40026':
 sRet = "石岡區";
 break;
case '40027':
 sRet = "新社區";
 break;
case '40028':
 sRet = "東勢區";
 break;
case '40029':
 sRet = "和平區";
 break;
case '50001':
 sRet = "後壁區";
 break;
case '50002':
 sRet = "白河區";
 break;
case '50003':
 sRet = "北門區";
 break;
case '50004':
 sRet = "學甲區";
 break;
case '50005':
 sRet = "鹽水區";
 break;
case '50006':
 sRet = "新營區";
 break;
case '50007':
 sRet = "柳營區";
 break;
case '50008':
 sRet = "東山區";
 break;
case '50009':
 sRet = "將軍區";
 break;
case '50010':
 sRet = "下營區";
 break;
case '50011':
 sRet = "六甲區";
 break;
case '50012':
 sRet = "官田區";
 break;
case '50013':
 sRet = "七股區";
 break;
case '50014':
 sRet = "佳里區";
 break;
case '50015':
 sRet = "麻豆區";
 break;
case '50016':
 sRet = "善化區";
 break;
case '50017':
 sRet = "大內區";
 break;
case '50018':
 sRet = "玉井區";
 break;
case '50019':
 sRet = "楠西區";
 break;
case '50020':
 sRet = "西港區";
 break;
case '50021':
 sRet = "安定區";
 break;
case '50022':
 sRet = "新市區";
 break;
case '50023':
 sRet = "山上區";
 break;
case '50024':
 sRet = "新化區";
 break;
case '50025':
 sRet = "左鎮區";
 break;
case '50026':
 sRet = "南化區";
 break;
case '50027':
 sRet = "安南區";
 break;
case '50028':
 sRet = "北區";
 break;
case '50029':
 sRet = "中西區";
 break;
case '50030':
 sRet = "安平區";
 break;
case '50031':
 sRet = "南區";
 break;
case '50032':
 sRet = "東區";
 break;
case '50033':
 sRet = "永康區";
 break;
case '50034':
 sRet = "仁德區";
 break;
case '50035':
 sRet = "歸仁區";
 break;
case '50036':
 sRet = "關廟區";
 break;
case '50037':
 sRet = "龍崎區";
 break;
case '60001':
 sRet = "桃源區";
 break;
case '60002':
 sRet = "那瑪夏區";
 break;
case '60003':
 sRet = "甲仙區";
 break;
case '60004':
 sRet = "六龜區";
 break;
case '60005':
 sRet = "杉林區";
 break;
case '60006':
 sRet = "內門區";
 break;
case '60007':
 sRet = "旗山區";
 break;
case '60008':
 sRet = "美濃區";
 break;
case '60009':
 sRet = "茂林區";
 break;
case '60010':
 sRet = "阿蓮區";
 break;
case '60011':
 sRet = "田寮區";
 break;
case '60012':
 sRet = "燕巢區";
 break;
case '60013':
 sRet = "大社區";
 break;
case '60014':
 sRet = "大樹區";
 break;
case '60015':
 sRet = "茄萣區";
 break;
case '60016':
 sRet = "湖內區";
 break;
case '60017':
 sRet = "路竹區";
 break;
case '60018':
 sRet = "永安區";
 break;
case '60019':
 sRet = "岡山區";
 break;
case '60020':
 sRet = "彌陀區";
 break;
case '60021':
 sRet = "梓官區";
 break;
case '60022':
 sRet = "橋頭區";
 break;
case '60023':
 sRet = "楠梓區";
 break;
case '60024':
 sRet = "左營區";
 break;
case '60025':
 sRet = "仁武區";
 break;
case '60026':
 sRet = "鳥松區";
 break;
case '60027':
 sRet = "大寮區";
 break;
case '60028':
 sRet = "林園區";
 break;
case '60029':
 sRet = "鼓山區";
 break;
case '60030':
 sRet = "鹽埕區";
 break;
case '60031':
 sRet = "旗津區";
 break;
case '60032':
 sRet = "三民區";
 break;
case '60033':
 sRet = "前金區";
 break;
case '60034':
 sRet = "新興區";
 break;
case '60035':
 sRet = "苓雅區";
 break;
case '60036':
 sRet = "前鎮區";
 break;
case '60037':
 sRet = "鳳山區";
 break;
case '60038':
 sRet = "小港區";
 break;
case '70801':
 sRet = "宜蘭市";
 break;
case '70802':
 sRet = "羅東鎮";
 break;
case '70803':
 sRet = "蘇澳鎮";
 break;
case '70804':
 sRet = "頭城鎮";
 break;
case '70805':
 sRet = "礁溪鄉";
 break;
case '70806':
 sRet = "壯圍鄉";
 break;
case '70807':
 sRet = "員山鄉";
 break;
case '70808':
 sRet = "冬山鄉";
 break;
case '70809':
 sRet = "五結鄉";
 break;
case '70810':
 sRet = "三星鄉";
 break;
case '70811':
 sRet = "大同鄉";
 break;
case '70812':
 sRet = "南澳鄉";
 break;
case '70101':
 sRet = "竹北市";
 break;
case '70102':
 sRet = "竹東鎮";
 break;
case '70103':
 sRet = "新埔鎮";
 break;
case '70104':
 sRet = "關西鎮";
 break;
case '70105':
 sRet = "湖口鄉";
 break;
case '70106':
 sRet = "新豐鄉";
 break;
case '70107':
 sRet = "芎林鄉";
 break;
case '70108':
 sRet = "橫山鄉";
 break;
case '70109':
 sRet = "北埔鄉";
 break;
case '70110':
 sRet = "寶山鄉";
 break;
case '70111':
 sRet = "峨眉鄉";
 break;
case '70112':
 sRet = "尖石鄉";
 break;
case '70113':
 sRet = "五峰鄉";
 break;
case '70201':
 sRet = "竹南鎮";
 break;
case '70202':
 sRet = "造橋鄉";
 break;
case '70203':
 sRet = "後龍鎮";
 break;
case '70204':
 sRet = "西湖鄉";
 break;
case '70205':
 sRet = "通霄鎮";
 break;
case '70206':
 sRet = "銅鑼鄉";
 break;
case '70207':
 sRet = "苑裡鎮";
 break;
case '70208':
 sRet = "三義鄉";
 break;
case '70209':
 sRet = "頭份市";
 break;
case '70210':
 sRet = "三灣鄉";
 break;
case '70211':
 sRet = "南庄鄉";
 break;
case '70212':
 sRet = "苗栗市";
 break;
case '70213':
 sRet = "頭屋鄉";
 break;
case '70214':
 sRet = "獅潭鄉";
 break;
case '70215':
 sRet = "公館鄉";
 break;
case '70216':
 sRet = "大湖鄉";
 break;
case '70217':
 sRet = "泰安鄉";
 break;
case '70218':
 sRet = "卓蘭鎮";
 break;
 sRet = "田尾鄉";
 break;
case '70301':
 sRet = "伸港鄉";
 break;
case '70302':
 sRet = "線西鄉";
 break;
case '70303':
 sRet = "和美鎮";
 break;
case '70304':
 sRet = "鹿港鎮";
 break;
case '70305':
 sRet = "福興鄉";
 break;
case '70306':
 sRet = "秀水鄉";
 break;
case '70307':
 sRet = "彰化市";
 break;
case '70308':
 sRet = "花壇鄉";
 break;
case '70309':
 sRet = "芬園鄉";
 break;
case '70310':
 sRet = "芳苑鄉";
 break;
case '70311':
 sRet = "二林鎮";
 break;
case '70312':
 sRet = "埔鹽鄉";
 break;
case '70313':
 sRet = "溪湖鎮";
 break;
case '70314':
 sRet = "埔心鄉";
 break;
case '70315':
 sRet = "大城鄉";
 break;
case '70316':
 sRet = "竹塘鄉";
 break;
case '70317':
 sRet = "埤頭鄉";
 break;
case '70318':
 sRet = "北斗鎮";
 break;
case '70319':
 sRet = "溪州鄉";
 break;
case '70320':
 sRet = "大村鄉";
 break;
case '70321':
 sRet = "員林市";
 break;
case '70322':
 sRet = "永靖鄉";
 break;
case '70323':
 sRet = "社頭鄉";
 break;
case '70324':
 sRet = "田尾鄉";
 break;
case '70325':
 sRet = "田中鎮";
 break;
case '70326':
 sRet = "二水鄉";
 break;
case '70401':
 sRet = "草屯鎮";
 break;
case '70402':
 sRet = "國姓鄉";
 break;
case '70403':
 sRet = "埔里鎮";
 break;
case '70404':
 sRet = "仁愛鄉";
 break;
case '70405':
 sRet = "中寮鄉";
 break;
case '70406':
 sRet = "魚池鄉";
 break;
case '70407':
 sRet = "南投市";
 break;
case '70408':
 sRet = "名間鄉";
 break;
case '70409':
 sRet = "集集鎮";
 break;
case '70410':
 sRet = "竹山鎮";
 break;
case '70411':
 sRet = "鹿谷鄉";
 break;
case '70412':
 sRet = "水里鄉";
 break;
case '70413':
 sRet = "信義鄉";
 break;
case '70501':
 sRet = "麥寮鄉";
 break;
case '70502':
 sRet = "臺西鄉";
 break;
case '70503':
 sRet = "東勢鄉";
 break;
case '70504':
 sRet = "褒忠鄉";
 break;
case '70505':
 sRet = "土庫鎮";
 break;
case '70506':
 sRet = "虎尾鎮";
 break;
case '70507':
 sRet = "四湖鄉";
 break;
case '70508':
 sRet = "元長鄉";
 break;
case '70509':
 sRet = "口湖鄉";
 break;
case '70510':
 sRet = "水林鄉";
 break;
case '70511':
 sRet = "北港鎮";
 break;
case '70512':
 sRet = "崙背鄉";
 break;
case '70513':
 sRet = "二崙鄉";
 break;
case '70514':
 sRet = "西螺鎮";
 break;
case '70515':
 sRet = "莿桐鄉";
 break;
case '70516':
 sRet = "林內鄉";
 break;
case '70517':
 sRet = "斗六市";
 break;
case '70518':
 sRet = "大埤鄉";
 break;
case '70519':
 sRet = "斗南鎮";
 break;
case '70520':
 sRet = "古坑鄉";
 break;
case '70601':
 sRet = "六腳鄉";
 break;
case '70602':
 sRet = "東石鄉";
 break;
case '70603':
 sRet = "朴子市";
 break;
case '70604':
 sRet = "太保市";
 break;
case '70605':
 sRet = "布袋鎮";
 break;
case '70606':
 sRet = "義竹鄉";
 break;
case '70607':
 sRet = "鹿草鄉";
 break;
case '70608':
 sRet = "水上鄉";
 break;
case '70609':
 sRet = "溪口鄉";
 break;
case '70610':
 sRet = "大林鎮";
 break;
case '70611':
 sRet = "梅山鄉";
 break;
case '70612':
 sRet = "新港鄉";
 break;
case '70613':
 sRet = "民雄鄉";
 break;
case '70614':
 sRet = "竹崎鄉";
 break;
case '70615':
 sRet = "中埔鄉";
 break;
case '70616':
 sRet = "番路鄉";
 break;
case '70617':
 sRet = "阿里山鄉";
 break;
case '70618':
 sRet = "大埔鄉";
 break;
case '70701':
 sRet = "里港鄉";
 break;
case '70702':
 sRet = "高樹鄉";
 break;
case '70703':
 sRet = "三地門鄉";
 break;
case '70704':
 sRet = "霧臺鄉";
 break;
case '70705':
 sRet = "九如鄉";
 break;
case '70706':
 sRet = "鹽埔鄉";
 break;
case '70707':
 sRet = "長治鄉";
 break;
case '70708':
 sRet = "內埔鄉";
 break;
case '70709':
 sRet = "瑪家鄉";
 break;
case '70710':
 sRet = "泰武鄉";
 break;
case '70711':
 sRet = "竹田鄉";
 break;
case '70712':
 sRet = "萬巒鄉";
 break;
case '70713':
 sRet = "潮州鎮";
 break;
case '70714':
 sRet = "屏東市";
 break;
case '70715':
 sRet = "麟洛鄉";
 break;
case '70716':
 sRet = "萬丹鄉";
 break;
case '70717':
 sRet = "新園鄉";
 break;
case '70718':
 sRet = "崁頂鄉";
 break;
case '70719':
 sRet = "南州鄉";
 break;
case '70720':
 sRet = "新埤鄉";
 break;
case '70721':
 sRet = "來義鄉";
 break;
case '70722':
 sRet = "東港鎮";
 break;
case '70723':
 sRet = "林邊鄉";
 break;
case '70724':
 sRet = "佳冬鄉";
 break;
case '70725':
 sRet = "枋寮鄉";
 break;
case '70726':
 sRet = "春日鄉";
 break;
case '70727':
 sRet = "枋山鄉";
 break;
case '70728':
 sRet = "獅子鄉";
 break;
case '70729':
 sRet = "牡丹鄉";
 break;
case '70730':
 sRet = "車城鄉";
 break;
case '70731':
 sRet = "滿州鄉";
 break;
case '70732':
 sRet = "恆春鎮";
 break;
case '70733':
 sRet = "琉球鄉";
 break;
case '71001':
 sRet = "臺東市";
 break;
case '71002':
 sRet = "成功鎮";
 break;
case '71003':
 sRet = "關山鎮";
 break;
case '71004':
 sRet = "卑南鄉";
 break;
case '71005':
 sRet = "鹿野鄉";
 break;
case '71006':
 sRet = "池上鄉";
 break;
case '71007':
 sRet = "東河鄉";
 break;
case '71008':
 sRet = "長濱鄉";
 break;
case '71009':
 sRet = "太麻里鄉";
 break;
case '71010':
 sRet = "大武鄉";
 break;
case '71011':
 sRet = "綠島鄉";
 break;
case '71012':
 sRet = "海端鄉";
 break;
case '71013':
 sRet = "延平鄉";
 break;
case '71014':
 sRet = "金峰鄉";
 break;
case '71015':
 sRet = "達仁鄉";
 break;
case '71016':
 sRet = "蘭嶼鄉";
 break;
case '70901':
 sRet = "花蓮市";
 break;
case '70902':
 sRet = "新城鄉";
 break;
case '70903':
 sRet = "秀林鄉";
 break;
case '70904':
 sRet = "吉安鄉";
 break;
case '70905':
 sRet = "壽豐鄉";
 break;
case '70906':
 sRet = "鳳林鎮";
 break;
case '70907':
 sRet = "光復鄉";
 break;
case '70908':
 sRet = "豐濱鄉";
 break;
case '70909':
 sRet = "萬榮鄉";
 break;
case '70910':
 sRet = "瑞穗鄉";
 break;
case '70911':
 sRet = "玉里鎮";
 break;
case '70912':
 sRet = "富里鄉";
 break;
case '70913':
 sRet = "卓溪鄉";
 break;
case '71101':
 sRet = "馬公市";
 break;
case '71102':
 sRet = "湖西鄉";
 break;
case '71103':
 sRet = "白沙鄉";
 break;
case '71104':
 sRet = "西嶼鄉";
 break;
case '71105':
 sRet = "望安鄉";
 break;
case '71106':
 sRet = "七美鄉";
 break;
case '71201':
 sRet = "中正區";
 break;
case '71202':
 sRet = "信義區";
 break;
case '71203':
 sRet = "仁愛區";
 break;
case '71204':
 sRet = "中山區";
 break;
case '71205':
 sRet = "安樂區";
 break;
case '71206':
 sRet = "暖暖區";
 break;
case '71207':
 sRet = "七堵區";
 break;
case '71301':
 sRet = "東區";
 break;
case '71302':
 sRet = "北區";
 break;
case '71303':
 sRet = "香山區";
 break;
case '71401':
 sRet = "東區";
 break;
case '71402':
 sRet = "西區";
 break;
case '80101':
 sRet = "金城鎮";
 break;
case '80102':
 sRet = "金寧鄉";
 break;
case '80103':
 sRet = "烈嶼鄉";
 break;
case '80104':
 sRet = "烏坵鄉";
 break;
case '80105':
 sRet = "金湖鎮";
 break;
case '80106':
 sRet = "金沙鎮";
 break;
case '80201':
 sRet = "南竿鄉";
 break;
case '80202':
 sRet = "北竿鄉";
 break;
case '80203':
 sRet = "莒光鄉";
 break;
case '80204':
 sRet = "東引鄉";
 break;
 
       default:
         break;
 
	       }
	return sRet+"總計";	
}





function addStation(startNumber, endNumber) {

	var sURL = document.location.toString();
	var arrURL = sURL.split('/');
	var sFilename = arrURL[arrURL.length-1];
	
	//var sPriArea = sFilename.substr(1,1);
	//var sFirArea = sFilename.substr(2,2);
	//var sThrArea = sFilename.substr(6,2);
	//var sArea1to8 = sFilename.substr(0, 8);

	var sFirArea = sFilename.substr(1,1);//省Province
	var sSecArea = sFilename.substr(2,2);//縣市 county
	var sThrArea = sFilename.substr(4,2);//選區 Elecdiv
	var sForArea = sFilename.substr(6,2);//鄉鎮 township
	var sFivArea = sFilename.substr(8,4);//village 
	var sArea1to12 = sFilename.substr(0,12)

	var sArea = retArea(sFirArea,sSecArea,sForArea);

	var iCounter = endNumber-startNumber+1;

	var arrOption = new Array();
	for (i=0;i<iCounter;i++) {
		sTemp = sArea1to12 + paddingString((startNumber + i).toString(), '0000') + sFilename.substr(16, sFilename.length-16);
		if (sFilename==sTemp) {
			arrOption[i] = "<option value='" + sTemp + "' selected>第 " + paddingString((startNumber + i).toString(), '0000') + " 投開票所</option>";
		}
		else {
			arrOption[i] = "<option value='" + sTemp + "'>第 " + paddingString((startNumber + i).toString(), '0000') + " 投開票所</option>";
		}
	}

	objDiv = window.document.getElementById('divForArea');
	objDiv.innerHTML = "請選擇投開票所：<select id='selForArea' onchange='redirectURL(this.options[this.options.selectedIndex].value);'>" + "<option value='" + sArea1to12 + "0000" + sFilename.substr(16, sFilename.length-16) + "'>" + sArea + "</option>" + arrOption.join() + "</select>";
}


function addStations(Numbers) {

	var sURL = document.location.toString();
	var arrURL = sURL.split('/');
	var sFilename = arrURL[arrURL.length-1];
	var sFirArea = sFilename.substr(1,1);//省Province
	var sSecArea = sFilename.substr(2,2);//縣市 county
	var sThrArea = sFilename.substr(4,2);//選區 Elecdiv
	var sForArea = sFilename.substr(6,2);//鄉鎮 township
	var sFivArea = sFilename.substr(8,4);//village 
	var sArea1to12 = sFilename.substr(0,12)

	var sArea = retArea(sFirArea,sSecArea,sForArea);

        var arrOption = new Array();
        for(j=0;j<Numbers.length;j++){
        var Interval= Numbers[j];
        var Times=Interval.split(",");
        var startNumber=parseInt(Times[0]);
        var endNumber=parseInt(Times[1]);
	var iCounter = endNumber-startNumber+1;
        var k=0;
        var count=0;
	if(arrOption!=null){
           k=arrOption.length;
     	   iCounter=iCounter+arrOption.length;
        }
	for (i=k;i<iCounter;i++) {
                
		sTemp = sArea1to12 + paddingString((startNumber + count).toString(), '0000') + sFilename.substr(16, sFilename.length-16);
		if (sFilename==sTemp) {
			arrOption[i] = "<option value='" + sTemp + "' selected>第 " + paddingString((startNumber + count).toString(), '0000') + " 投開票所</option>";
		}
		else {
			arrOption[i] = "<option value='" + sTemp + "'>第 " + paddingString((startNumber + count).toString(), '0000') + " 投開票所</option>";
		}
            count++;
	}
}
	objDiv = window.document.getElementById('divForArea');
	objDiv.innerHTML = "請選擇投開票所：<select id='selForArea' onchange='redirectURL(this.options[this.options.selectedIndex].value);'>" + "<option value='" + sArea1to12 + "0000" + sFilename.substr(16, sFilename.length-16) + "'>" + sArea + "</option>" + arrOption.join() + "</select>";
}


function goSelArea() {


	var sURL = document.location.toString();
	var arrURL = sURL.split('/');
	var sFilename = arrURL[arrURL.length-1];
	var sOrder =  sFilename.substr(0,1);
	var sFirArea = sFilename.substr(1,1); //province
	var sSecArea = sFilename.substr(2,2); //county
	var sThrArea = sFilename.substr(4,2); //ElecDiv
	var sForArea = sFilename.substr(6,2); //Township
	var sFivArea = sFilename.substr(8,4);
	var sSixArea = sFilename.substr(12,4);

	var sArea = sFirArea.toString()+sSecArea.toString() +sForArea.toString();

       switch(sArea){
case '10001':
  addStations(["1,140"]);       
break;

case '10002':
  addStations(["141,188","271,385"]);
 break;
case '10003':
  addStations(["189,270"]);
 break;
case '10004':
  addStations(["386,516"]);
 break;
case '10005':
  addStations(["517,590","1316,1357"]);
 break;
case '10006':
  addStations(["591,738"]);
 break;
case '10007':
  addStations(["739,809"]);
 break;
case '10008':
  addStations(["810,922"]);
 break;
case '10009':
  addStations(["923,986","1520,1548"]);
 break;
case '10010':
  addStations(["987,1174"]);
 break;
case '10011':
  addStations(["1175,1315"]);
 break;
case '10012':
  addStations(["1358,1519"]);
 break;
case '20001':
  addStations(["1,10"]);
 break;
case '20002':
  addStations(["11,28"]);
 break;
case '20003':
  addStations(["29,121"]);
 break;
case '20004':
  addStations(["122,139"]);
 break;
case '20005':
  addStations(["140,189"]);
 break;
case '20006':
  addStations(["190,236"]);
 break;
case '20007':
  addStations(["237,283"]);
 break;
case '20008':
  addStations(["284,386"]);
 break;
case '20009':
  addStations(["387,427","428,622"]);
 break;
case '20010':
  addStations(["623,838","839,867"]);
 break;
case '20011':
  addStations(["868,978"]);
 break;
case '20012':
  addStations(["979,1028"]);
 break;
case '20013':
  addStations(["1029,1197","1198,1362"]);
 break;
case '20014':
  addStations(["1363,1563","1564,1606"]);
 break;
case '20015':
  addStations(["1607,1744"]);
 break;
case '20016':
  addStations(["1745,1886"]);
 break;
case '20017':
  addStations(["1887,1954"]);
 break;
case '20018':
  addStations(["1955,2128"]);
 break;
case '20019':
  addStations(["2129,2144"]);
 break;
case '20020':
  addStations(["2145,2157"]);
 break;
case '20021':
  addStations(["2158,2167"]);
 break;
case '20022':
  addStations(["2168,2173"]);
 break;
case '20023':
  addStations(["2174,2192"]);
 break;
case '20024':
  addStations(["2193,2208"]);
 break;
case '20025':
  addStations(["2209,2319"]);
 break;
case '20026':
  addStations(["2320,2331"]);
 break;
case '20027':
  addStations(["2332,2377"]);
 break;
case '20028':
  addStations(["2378,2395"]);
 break;
case '20029':
  addStations(["2396,2413"]);
 break;
case '30001':
  addStations(["1,74"]);
 break;
case '30002':
  addStations(["75,146"]);
 break;
case '30003':
  addStations(["147,182","550,718"]);
 break;
case '30004':
  addStations(["183,226"]);
 break;
case '30005':
  addStations(["227,265"]);
 break;
case '30006':
  addStations(["266,295"]);
 break;
case '30007':
  addStations(["296,375"]);
 break;
case '30008':
  addStations(["376,549","1063,1088"]);
 break;
case '30009':
  addStations(["719,836"]);
 break;
case '30010':
  addStations(["837,897"]);
 break;
case '30011':
  addStations(["898,994"]);
 break;
case '30012':
  addStations(["995,1052"]);
 break;
case '30013':
  addStations(["1053,1062"]);
 break;
case '40001':
  addStations(["1,54"]);
 break;
case '40002':
  addStations(["55,70"]);
 break;
case '40003':
  addStations(["71,90"]);
 break;
case '40004':
  addStations(["91,149"]);
 break;
case '40005':
  addStations(["150,184"]);
 break;
case '40006':
  addStations(["185,235"]);
 break;
case '40007':
  addStations(["236,278"]);
 break;
case '40008':
  addStations(["279,311"]);
 break;
case '40009':
  addStations(["312,349"]);
 break;
case '40010':
  addStations(["350,392"]);
 break;
case '40011':
  addStations(["393,400","1276,1365"]);
 break;
case '40012':
  addStations(["401,433"]);
 break;
case '40013':
  addStations(["434,475"]);
 break;
case '40014':
  addStations(["476,521"]);
 break;
case '40015':
  addStations(["522,570"]);
 break;
case '40016':
  addStations(["571,685"]);
 break;
case '40017':
  addStations(["686,784"]);
 break;
case '40018':
  addStations(["785,916"]);
 break;
case '40019':
  addStations(["917,1003"]);
 break;
case '40020':
  addStations(["1004,1068"]);
 break;
case '40021':
  addStations(["1069,1081"]);
 break;
case '40022':
  addStations(["1082,1129"]);
 break;
case '40023':
  addStations(["1130,1186"]);
 break;
case '40024':
  addStations(["1187,1275"]);
 break;
case '40025':
  addStations(["1366,1451"]);
 break;
case '40026':
  addStations(["1452,1461"]);
 break;
case '40027':
  addStations(["1462,1482"]);
 break;
case '40028':
  addStations(["1483,1520"]);
 break;
case '40029':
  addStations(["1521,1536"]);
 break;
case '50001':
  addStations(["1,29"]);
 break;
case '50002':
  addStations(["30,61"]);
 break;
case '50003':
  addStations(["62,79"]);
 break;
case '50004':
  addStations(["80,105"]);
 break;
case '50005':
  addStations(["106,136"]);
 break;
case '50006':
  addStations(["137,184"]);
 break;
case '50007':
  addStations(["185,209"]);
 break;
case '50008':
  addStations(["210,232"]);
 break;
case '50009':
  addStations(["233,256"]);
 break;
case '50010':
  addStations(["257,275"]);
 break;
case '50011':
  addStations(["276,294"]);
 break;
case '50012':
  addStations(["295,314"]);
 break;
case '50013':
  addStations(["315,338"]);
 break;
case '50014':
  addStations(["339,378"]);
 break;
case '50015':
  addStations(["379,413"]);
 break;
case '50016':
  addStations(["414,442"]);
 break;
case '50017':
  addStations(["443,453"]);
 break;
case '50018':
  addStations(["454,469"]);
 break;
case '50019':
  addStations(["470,478"]);
 break;
case '50020':
  addStations(["479,498"]);
 break;
case '50021':
  addStations(["499,521"]);
 break;
case '50022':
  addStations(["522,548"]);
 break;
case '50023':
  addStations(["549,557"]);
 break;
case '50024':
  addStations(["558,594"]);
 break;
case '50025':
  addStations(["595,604"]);
 break;
case '50026':
  addStations(["605,614"]);
 break;
case '50027':
  addStations(["615,704"]);
 break;
case '50028':
  addStations(["705,782"]);
 break;
case '50029':
  addStations(["783,831"]);
 break;
case '50030':
  addStations(["832,861"]);
 break;
case '50031':
  addStations(["862,941"]);
 break;
case '50032':
  addStations(["942,1035"]);
 break;
case '50033':
  addStations(["1036,1177"]);
 break;
case '50034':
  addStations(["1178,1226"]);
 break;
case '50035':
  addStations(["1227,1271"]);
 break;
case '50036':
  addStations(["1272,1302"]);
 break;
case '50037':
  addStations(["1303,1310"]);
 break;
case '60001':
  addStations(["1,8"]);
 break;
case '60002':
  addStations(["9,12"]);
 break;
case '60003':
  addStations(["13,19"]);
 break;
case '60004':
  addStations(["20,31"]);
 break;
case '60005':
  addStations(["32,41"]);
 break;
case '60006':
  addStations(["42,59"]);
 break;
case '60007':
  addStations(["60,94"]);
 break;
case '60008':
  addStations(["95,126"]);
 break;
case '60009':
  addStations(["127,129"]);
 break;
case '60010':
  addStations(["130,150"]);
 break;
case '60011':
  addStations(["151,162"]);
 break;
case '60012':
  addStations(["163,187"]);
 break;
case '60013':
  addStations(["188,211"]);
 break;
case '60014':
  addStations(["212,243"]);
 break;
case '60015':
  addStations(["244,263"]);
 break;
case '60016':
  addStations(["264,287"]);
 break;
case '60017':
  addStations(["288,328"]);
 break;
case '60018':
  addStations(["329,340"]);
 break;
case '60019':
  addStations(["341,412"]);
 break;
case '60020':
  addStations(["413,430"]);
 break;
case '60021':
  addStations(["431,458"]);
 break;
case '60022':
  addStations(["459,489"]);
 break;
case '60023':
  addStations(["490,581"]);
 break;
case '60024':
  addStations(["582,680"]);
 break;
case '60025':
  addStations(["681,725"]);
 break;
case '60026':
  addStations(["726,753"]);
 break;
case '60027':
  addStations(["754,834"]);
 break;
case '60028':
  addStations(["835,885"]);
 break;
case '60029':
  addStations(["886,959"]);
 break;
case '60030':
  addStations(["960,983"]);
 break;
case '60031':
  addStations(["984,1001"]);
 break;
case '60032':
  addStations(["1002,1057","1058,1190"]);
 break;
case '60033':
  addStations(["1191,1212"]);
 break;
case '60034':
  addStations(["1213,1254"]);
 break;
case '60035':
  addStations(["1255,1369"]);
 break;
case '60036':
  addStations(["1370,1389","1702,1800"]);
 break;
case '60037':
  addStations(["1390,1616"]);
 break;
case '60038':
  addStations(["1617,1701"]);
 break;
case '70801':
  addStations(["1,78"]);
 break;
case '70802':
  addStations(["79,128"]);
 break;
case '70803':
  addStations(["129,170"]);
 break;
case '70804':
  addStations(["171,202"]);
 break;
case '70805':
  addStations(["203,234"]);
 break;
case '70806':
  addStations(["235,257"]);
 break;
case '70807':
  addStations(["258,288"]);
 break;
case '70808':
  addStations(["289,327"]);
 break;
case '70809':
  addStations(["328,358"]);
 break;
case '70810':
  addStations(["359,379"]);
 break;
case '70811':
  addStations(["380,389"]);
 break;
case '70812':
  addStations(["390,396"]);
 break;
case '70101':
  addStations(["1,94"]);
 break;
case '70102':
  addStations(["95,165"]);
 break;
case '70103':
  addStations(["166,194"]);
 break;
case '70104':
  addStations(["195,221"]);
 break;
case '70105':
  addStations(["222,268"]);
 break;
case '70106':
  addStations(["269,301"]);
 break;
case '70107':
  addStations(["302,319"]);
 break;
case '70108':
  addStations(["320,335"]);
 break;
case '70109':
  addStations(["336,345"]);
 break;
case '70110':
  addStations(["346,357"]);
 break;
case '70111':
  addStations(["358,365"]);
 break;
case '70112':
  addStations(["366,379"]);
 break;
case '70113':
  addStations(["380,385"]);
 break;
case '70201':
  addStations(["1,61"]);
 break;
case '70202':
  addStations(["62,73"]);
 break;
case '70203':
  addStations(["74,108"]);
 break;
case '70204':
  addStations(["109,117"]);
 break;
case '70205':
  addStations(["118,151"]);
 break;
case '70206':
  addStations(["152,167"]);
 break;
case '70207':
  addStations(["168,207"]);
 break;
case '70208':
  addStations(["208,223"]);
 break;
case '70209':
  addStations(["224,293"]);
 break;
case '70210':
  addStations(["294,302"]);
 break;
case '70211':
  addStations(["303,311"]);
 break;
case '70212':
  addStations(["312,378"]);
 break;
case '70213':
  addStations(["379,390"]);
 break;
case '70214':
  addStations(["391,397"]);
 break;
case '70215':
  addStations(["398,425"]);
 break;
case '70216':
  addStations(["426,440"]);
 break;
case '70217':
  addStations(["441,450"]);
 break;
case '70218':
  addStations(["451,468"]);
 break;
case '70301':
  addStations(["1,28"]);
 break;
case '70302':
  addStations(["29,40"]);
 break;
case '70303':
  addStations(["41,108"]);
 break;
case '70304':
  addStations(["109,173"]);
 break;
case '70305':
  addStations(["174,206"]);
 break;
case '70306':
  addStations(["207,238"]);
 break;
case '70307':
  addStations(["239,422"]);
 break;
case '70308':
  addStations(["423,459"]);
 break;
case '70309':
  addStations(["460,480"]);
 break;
case '70310':
  addStations(["481,516"]);
 break;
case '70311':
  addStations(["517,555"]);
 break;
case '70312':
  addStations(["556,584"]);
 break;
case '70313':
  addStations(["585,626"]);
 break;
case '70314':
  addStations(["627,657"]);
 break;
case '70315':
  addStations(["658,674"]);
 break;
case '70316':
  addStations(["675,690"]);
 break;
case '70317':
  addStations(["691,717"]);
 break;
case '70318':
  addStations(["718,747"]);
 break;
case '70319':
  addStations(["748,774"]);
 break;
case '70320':
  addStations(["775,801"]);
 break;
case '70321':
  addStations(["802,899"]);
 break;
case '70322':
  addStations(["900,933"]);
 break;
case '70323':
  addStations(["934,971"]);
 break;
case '70324':
  addStations(["972,996"]);
 break;
case '70325':
  addStations(["997,1032"]);
 break;
case '70326':
  addStations(["1033,1049"]);
 break;
case '70401':
  addStations(["1,74"]);
 break;
case '70402':
  addStations(["75,94"]);
 break;
case '70403':
  addStations(["95,162"]);
 break;
case '70404':
  addStations(["163,187"]);
 break;
case '70405':
  addStations(["188,211"]);
 break;
case '70406':
  addStations(["212,236"]);
 break;
case '70407':
  addStations(["237,317"]);
 break;
case '70408':
  addStations(["318,354"]);
 break;
case '70409':
  addStations(["355,367"]);
 break;
case '70410':
  addStations(["368,420"]);
 break;
case '70411':
  addStations(["421,441"]);
 break;
case '70412':
  addStations(["442,463"]);
 break;
case '70413':
  addStations(["464,483"]);
 break;
case '70501':
  addStations(["1,26"]);
 break;
case '70502':
  addStations(["27,48"]);
 break;
case '70503':
  addStations(["49,63"]);
 break;
case '70504':
  addStations(["64,75"]);
 break;
case '70505':
  addStations(["76,102"]);
 break;
case '70506':
  addStations(["103,147"]);
 break;
case '70507':
  addStations(["148,171"]);
 break;
case '70508':
  addStations(["172,196"]);
 break;
case '70509':
  addStations(["197,221"]);
 break;
case '70510':
  addStations(["222,247"]);
 break;
case '70511':
  addStations(["248,288"]);
 break;
case '70512':
  addStations(["289,308"]);
 break;
case '70513':
  addStations(["309,331"]);
 break;
case '70514':
  addStations(["332,365"]);
 break;
case '70515':
  addStations(["366,387"]);
 break;
case '70516':
  addStations(["388,402"]);
 break;
case '70517':
  addStations(["403,470"]);
 break;
case '70518':
  addStations(["471,488"]);
 break;
case '70519':
  addStations(["489,519"]);
 break;
case '70520':
  addStations(["520,546"]);
 break;
case '70601':
  addStations(["1,30"]);
 break;
case '70602':
  addStations(["31,57"]);
 break;
case '70603':
  addStations(["58,92"]);
 break;
case '70604':
  addStations(["93,121"]);
 break;
case '70605':
  addStations(["122,150"]);
 break;
case '70606':
  addStations(["151,176"]);
 break;
case '70607':
  addStations(["177,196"]);
 break;
case '70608':
  addStations(["197,235"]);
 break;
case '70609':
  addStations(["236,252"]);
 break;
case '70610':
  addStations(["253,277"]);
 break;
case '70611':
  addStations(["278,299"]);
 break;
case '70612':
  addStations(["300,329"]);
 break;
case '70613':
  addStations(["330,373"]);
 break;
case '70614':
  addStations(["374,409"]);
 break;
case '70615':
  addStations(["410,443"]);
 break;
case '70616':
  addStations(["444,458"]);
 break;
case '70617':
  addStations(["459,471"]);
 break;
case '70618':
  addStations(["472,480"]);
 break;
case '70701':
  addStations(["1,20"]);
 break;
case '70702':
  addStations(["21,42"]);
 break;
case '70703':
  addStations(["43,52"]);
 break;
case '70704':
  addStations(["53,60"]);
 break;
case '70705':
  addStations(["61,74"]);
 break;
case '70706':
  addStations(["75,92"]);
 break;
case '70707':
  addStations(["93,114"]);
 break;
case '70708':
  addStations(["115,155"]);
 break;
case '70709':
  addStations(["156,163"]);
 break;
case '70710':
  addStations(["164,170"]);
 break;
case '70711':
  addStations(["171,186"]);
 break;
case '70712':
  addStations(["187,203"]);
 break;
case '70713':
  addStations(["204,243"]);
 break;
case '70714':
  addStations(["244,371"]);
 break;
case '70715':
  addStations(["372,381"]);
 break;
case '70716':
  addStations(["382,420"]);
 break;
case '70717':
  addStations(["421,448"]);
 break;
case '70718':
  addStations(["449,459"]);
 break;
case '70719':
  addStations(["460,470"]);
 break;
case '70720':
  addStations(["471,482"]);
 break;
case '70721':
  addStations(["483,491"]);
 break;
case '70722':
  addStations(["492,527"]);
 break;
case '70723':
  addStations(["528,541"]);
 break;
case '70724':
  addStations(["542,557"]);
 break;
case '70725':
  addStations(["558,579"]);
 break;
case '70726':
  addStations(["580,585"]);
 break;
case '70727':
  addStations(["586,591"]);
 break;
case '70728':
  addStations(["592,599"]);
 break;
case '70729':
  addStations(["600,606"]);
 break;
case '70730':
  addStations(["607,619"]);
 break;
case '70731':
  addStations(["620,627"]);
 break;
case '70732':
  addStations(["628,652"]);
 break;
case '70733':
  addStations(["653,661"]);
 break;
case '71001':
  addStations(["1,69"]);
 break;
case '71002':
  addStations(["70,86"]);
 break;
case '71003':
  addStations(["87,95"]);
 break;
case '71004':
  addStations(["96,117"]);
 break;
case '71005':
  addStations(["118,127"]);
 break;
case '71006':
  addStations(["128,140"]);
 break;
case '71007':
  addStations(["141,151"]);
 break;
case '71008':
  addStations(["152,161"]);
 break;
case '71009':
  addStations(["162,176"]);
 break;
case '71010':
  addStations(["177,182"]);
 break;
case '71011':
  addStations(["183,186"]);
 break;
case '71012':
  addStations(["187,192"]);
 break;
case '71013':
  addStations(["193,197"]);
 break;
case '71014':
  addStations(["198,202"]);
 break;
case '71015':
  addStations(["203,209"]);
 break;
case '71016':
  addStations(["210,213"]);
 break;
case '70901':
  addStations(["1,81"]);
 break;
case '70902':
  addStations(["82,100"]);
 break;
case '70903':
  addStations(["101,114"]);
 break;
case '70904':
  addStations(["115,173"]);
 break;
case '70905':
  addStations(["174,194"]);
 break;
case '70906':
  addStations(["195,209"]);
 break;
case '70907':
  addStations(["210,226"]);
 break;
case '70908':
  addStations(["227,233"]);
 break;
case '70909':
  addStations(["234,240"]);
 break;
case '70910':
  addStations(["241,253"]);
 break;
case '70911':
  addStations(["254,276"]);
 break;
case '70912':
  addStations(["277,289"]);
 break;
case '70913':
  addStations(["290,300"]);
 break;
case '71101':
  addStations(["1,48"]);
 break;
case '71102':
  addStations(["49,71"]);
 break;
case '71103':
  addStations(["72,86"]);
 break;
case '71104':
  addStations(["87,98"]);
 break;
case '71105':
  addStations(["99,108"]);
 break;
case '71106':
  addStations(["109,114"]);
 break;
case '71201':
  addStations(["1,35"]);
 break;
case '71202':
  addStations(["36,68"]);
 break;
case '71203':
  addStations(["69,103"]);
 break;
case '71204':
  addStations(["104,135"]);
 break;
case '71205':
  addStations(["136,183"]);
 break;
case '71206':
  addStations(["184,211"]);
 break;
case '71207':
  addStations(["212,249"]);
 break;
case '71301':
  addStations(["1,134"]);
 break;
case '71302':
  addStations(["135,235"]);
 break;
case '71303':
  addStations(["236,289"]);
 break;
case '71401':
  addStations(["1,82"]);
 break;
case '71402':
  addStations(["83,178"]);
 break;
case '80101':
  addStations(["1,19"]);
 break;
case '80102':
  addStations(["20,35"]);
 break;
case '80103':
  addStations(["36,41"]);
 break;
case '80104':
  addStations(["42,43"]);
 break;
case '80105':
  addStations(["44,56"]);
 break;
case '80106':
  addStations(["57,68"]);
 break;
case '80201':
  addStations(["1,3"]);
 break;
case '80202':
  addStations(["4,5"]);
 break;
case '80203':
  addStations(["6,7"]);
 break;
case '80204':
  addStations(["8,8"]);
 break;
	}	
}


//T1投開票所會依照選區不同 有所不相同
function goSelAreaT1() {


	var sURL = document.location.toString();
	var arrURL = sURL.split('/');
	var sFilename = arrURL[arrURL.length-1];
	var sOrder =  sFilename.substr(0,1);
	var sFirArea = sFilename.substr(1,1); //province
	var sSecArea = sFilename.substr(2,2); //county
	var sThrArea = sFilename.substr(4,2); //ElecDiv
	var sForArea = sFilename.substr(6,2); //Township
	var sFivArea = sFilename.substr(8,4);
	var sSixArea = sFilename.substr(12,4);

	var sArea = sFirArea.toString()+sSecArea.toString()+sThrArea.toString() +sForArea.toString();

      switch(sArea){
case '1000101':
  addStation(1,140);
 break;
case '1000102':
  addStation(141,188);
 break;
case '1000202':
  addStation(271,385);
 break;
case '1000203':
  addStation(189,270);
 break;
case '1000304':
  addStation(386,516);
 break;
case '1000305':
  addStation(517,590);
 break;
case '1000705':
  addStation(1316,1357);
 break;
case '1000406':
  addStation(591,738);
 break;
case '1000407':
  addStation(739,809);
 break;
case '1000508':
  addStation(810,922);
 break;
case '1000509':
  addStation(923,986);
 break;
case '1000809':
  addStation(1520,1548);
 break;
case '1000610':
  addStation(987,1174);
 break;
case '1000711':
  addStation(1175,1315);
 break;
case '1000812':
  addStation(1358,1519);
 break;
case '2000101':
  addStation(1,10);
 break;
case '2000102':
  addStation(11,28);
 break;
case '2000103':
  addStation(29,121);
 break;
case '2000104':
  addStation(122,139);
 break;
case '2000105':
  addStation(140,189);
 break;
case '2000106':
  addStation(190,236);
 break;
case '2000207':
  addStation(237,283);
 break;
case '2000208':
  addStation(284,386);
 break;
case '2000209':
  addStation(387,427);
 break;
case '2000309':
  addStation(428,622);
 break;
case '2000410':
  addStation(623,838);
 break;
case '2000510':
  addStation(839,867);
 break;
case '2000511':
  addStation(868,978);
 break;
case '2000512':
  addStation(979,1028);
 break;
case '2000613':
  addStation(1029,1197);
 break;
case '2000713':
  addStation(1198,1362);
 break;
case '2000814':
  addStation(1363,1563);
 break;
case '2000914':
  addStation(1564,1606);
 break;
case '2000915':
  addStation(1607,1744);
 break;
case '2001016':
  addStation(1745,1886);
 break;
case '2001017':
  addStation(1887,1954);
 break;
case '2001118':
  addStation(1955,2128);
 break;
case '2001119':
  addStation(2129,2144);
 break;
case '2001120':
  addStation(2145,2157);
 break;
case '2001121':
  addStation(2158,2167);
 break;
case '2001122':
  addStation(2168,2173);
 break;
case '2001223':
  addStation(2174,2192);
 break;
case '2001224':
  addStation(2193,2208);
 break;
case '2001225':
  addStation(2209,2319);
 break;
case '2001226':
  addStation(2320,2331);
 break;
case '2001227':
  addStation(2332,2377);
 break;
case '2001228':
  addStation(2378,2395);
 break;
case '2001229':
  addStation(2396,2413);
 break;
case '3000101':
  addStation(1,74);
 break;
case '3000102':
  addStation(75,146);
 break;
case '3000103':
  addStation(147,182);
 break;
case '3000403':
  addStation(550,718);
 break;
case '3000204':
  addStation(183,226);
 break;
case '3000205':
  addStation(227,265);
 break;
case '3000206':
  addStation(266,295);
 break;
case '3000207':
  addStation(296,375);
 break;
case '3000308':
  addStation(376,549);
 break;
case '3000608':
  addStation(1063,1088);
 break;
case '3000509':
  addStation(719,836);
 break;
case '3000510':
  addStation(837,897);
 break;
case '3000611':
  addStation(898,994);
 break;
case '3000612':
  addStation(995,1052);
 break;
case '3000613':
  addStation(1053,1062);
 break;
case '4000101':
  addStation(1,54);
 break;
case '4000102':
  addStation(55,70);
 break;
case '4000103':
  addStation(71,90);
 break;
case '4000104':
  addStation(91,149);
 break;
case '4000105':
  addStation(150,184);
 break;
case '4000206':
  addStation(185,235);
 break;
case '4000207':
  addStation(236,278);
 break;
case '4000208':
  addStation(279,311);
 break;
case '4000209':
  addStation(312,349);
 break;
case '4000210':
  addStation(350,392);
 break;
case '4000211':
  addStation(393,400);
 break;
case '4000711':
  addStation(1276,1365);
 break;
case '4000312':
  addStation(401,433);
 break;
case '4000313':
  addStation(434,475);
 break;
case '4000314':
  addStation(476,521);
 break;
case '4000315':
  addStation(522,570);
 break;
case '4000416':
  addStation(571,685);
 break;
case '4000417':
  addStation(686,784);
 break;
case '4000518':
  addStation(785,916);
 break;
case '4000519':
  addStation(917,1003);
 break;
case '4000620':
  addStation(1004,1068);
 break;
case '4000621':
  addStation(1069,1081);
 break;
case '4000622':
  addStation(1082,1129);
 break;
case '4000623':
  addStation(1130,1186);
 break;
case '4000724':
  addStation(1187,1275);
 break;
case '4000825':
  addStation(1366,1451);
 break;
case '4000826':
  addStation(1452,1461);
 break;
case '4000827':
  addStation(1462,1482);
 break;
case '4000828':
  addStation(1483,1520);
 break;
case '4000829':
  addStation(1521,1536);
 break;
case '5000101':
  addStation(1,29);
 break;
case '5000102':
  addStation(30,61);
 break;
case '5000103':
  addStation(62,79);
 break;
case '5000104':
  addStation(80,105);
 break;
case '5000105':
  addStation(106,136);
 break;
case '5000106':
  addStation(137,184);
 break;
case '5000107':
  addStation(185,209);
 break;
case '5000108':
  addStation(210,232);
 break;
case '5000109':
  addStation(233,256);
 break;
case '5000110':
  addStation(257,275);
 break;
case '5000111':
  addStation(276,294);
 break;
case '5000112':
  addStation(295,314);
 break;
case '5000213':
  addStation(315,338);
 break;
case '5000214':
  addStation(339,378);
 break;
case '5000215':
  addStation(379,413);
 break;
case '5000216':
  addStation(414,442);
 break;
case '5000217':
  addStation(443,453);
 break;
case '5000218':
  addStation(454,469);
 break;
case '5000219':
  addStation(470,478);
 break;
case '5000220':
  addStation(479,498);
 break;
case '5000221':
  addStation(499,521);
 break;
case '5000222':
  addStation(522,548);
 break;
case '5000223':
  addStation(549,557);
 break;
case '5000224':
  addStation(558,594);
 break;
case '5000225':
  addStation(595,604);
 break;
case '5000226':
  addStation(605,614);
 break;
case '5000327':
  addStation(615,704);
 break;
case '5000328':
  addStation(705,782);
 break;
case '5000329':
  addStation(783,821);
 break;
case '5000430':
  addStation(832,851);
 break;
case '5000431':
  addStation(862,931);
 break;
case '5000432':
  addStation(942,1035);
 break;
case '5000533':
  addStation(1036,1177);
 break;
case '5000534':
  addStation(1178,1226);
 break;
case '5000535':
  addStation(1227,1271);
 break;
case '5000536':
  addStation(1272,1302);
 break;
case '5000537':
  addStation(1303,1310);
 break;
case '6000101':
  addStation(1,8);
 break;
case '6000102':
  addStation(9,12);
 break;
case '6000103':
  addStation(13,19);
 break;
case '6000104':
  addStation(20,31);
 break;
case '6000105':
  addStation(32,41);
 break;
case '6000106':
  addStation(42,59);
 break;
case '6000107':
  addStation(60,94);
 break;
case '6000108':
  addStation(95,126);
 break;
case '6000109':
  addStation(127,129);
 break;
case '6000110':
  addStation(130,150);
 break;
case '6000111':
  addStation(151,162);
 break;
case '6000112':
  addStation(163,187);
 break;
case '6000113':
  addStation(188,211);
 break;
case '6000114':
  addStation(212,243);
 break;
case '6000215':
  addStation(244,263);
 break;
case '6000216':
  addStation(264,287);
 break;
case '6000217':
  addStation(288,328);
 break;
case '6000218':
  addStation(329,340);
 break;
case '6000219':
  addStation(341,412);
 break;
case '6000220':
  addStation(413,430);
 break;
case '6000221':
  addStation(431,458);
 break;
case '6000222':
  addStation(459,489);
 break;
case '6000323':
  addStation(490,581);
 break;
case '6000324':
  addStation(582,680);
 break;
case '6000425':
  addStation(681,725);
 break;
case '6000426':
  addStation(726,753);
 break;
case '6000427':
  addStation(754,834);
 break;
case '6000428':
  addStation(835,885);
 break;
case '6000529':
  addStation(886,959);
 break;
case '6000530':
  addStation(960,983);
 break;
case '6000531':
  addStation(984,1001);
 break;
case '6000532':
  addStation(1002,1057);
 break;
case '6000632':
  addStation(1058,1190);
 break;
case '6000733':
  addStation(1191,1212);
 break;
case '6000734':
  addStation(1213,1254);
 break;
case '6000735':
  addStation(1255,1369);
 break;
case '6000736':
  addStation(1370,1389);
 break;
case '6000936':
  addStation(1702,1800);
 break;
case '6000837':
  addStation(1390,1616);
 break;
case '6000938':
  addStation(1617,1701);
 break;
case '7080101':
  addStation(1,78);
 break;
case '7080102':
  addStation(79,128);
 break;
case '7080103':
  addStation(129,170);
 break;
case '7080104':
  addStation(171,202);
 break;
case '7080105':
  addStation(203,234);
 break;
case '7080106':
  addStation(235,257);
 break;
case '7080107':
  addStation(258,288);
 break;
case '7080108':
  addStation(289,327);
 break;
case '7080109':
  addStation(328,358);
 break;
case '7080110':
  addStation(359,379);
 break;
case '7080111':
  addStation(380,389);
 break;
case '7080112':
  addStation(390,396);
 break;
case '7010101':
  addStation(1,94);
 break;
case '7010102':
  addStation(95,165);
 break;
case '7010103':
  addStation(166,194);
 break;
case '7010104':
  addStation(195,221);
 break;
case '7010105':
  addStation(222,268);
 break;
case '7010106':
  addStation(269,301);
 break;
case '7010107':
  addStation(302,319);
 break;
case '7010108':
  addStation(320,335);
 break;
case '7010109':
  addStation(336,345);
 break;
case '7010110':
  addStation(346,357);
 break;
case '7010111':
  addStation(358,365);
 break;
case '7010112':
  addStation(366,379);
 break;
case '7010113':
  addStation(380,385);
 break;
case '7020101':
  addStation(1,61);
 break;
case '7020102':
  addStation(62,73);
 break;
case '7020103':
  addStation(74,108);
 break;
case '7020104':
  addStation(109,117);
 break;
case '7020105':
  addStation(118,151);
 break;
case '7020106':
  addStation(152,167);
 break;
case '7020107':
  addStation(168,207);
 break;
case '7020108':
  addStation(208,223);
 break;
case '7020209':
  addStation(224,293);
 break;
case '7020210':
  addStation(294,302);
 break;
case '7020211':
  addStation(303,311);
 break;
case '7020212':
  addStation(312,378);
 break;
case '7020213':
  addStation(379,390);
 break;
case '7020214':
  addStation(391,397);
 break;
case '7020215':
  addStation(398,425);
 break;
case '7020216':
  addStation(426,440);
 break;
case '7020217':
  addStation(441,450);
 break;
case '7020218':
  addStation(451,468);
 break;
case '7030101':
  addStation(1,28);
 break;
case '7030102':
  addStation(29,40);
 break;
case '7030103':
  addStation(41,108);
 break;
case '7030104':
  addStation(109,173);
 break;
case '7030105':
  addStation(174,206);
 break;
case '7030106':
  addStation(207,238);
 break;
case '7030207':
  addStation(239,422);
 break;
case '7030208':
  addStation(423,459);
 break;
case '7030209':
  addStation(460,480);
 break;
case '7030310':
  addStation(481,516);
 break;
case '7030311':
  addStation(517,555);
 break;
case '7030312':
  addStation(556,584);
 break;
case '7030313':
  addStation(585,626);
 break;
case '7030314':
  addStation(627,657);
 break;
case '7030315':
  addStation(658,674);
 break;
case '7030316':
  addStation(675,690);
 break;
case '7030317':
  addStation(691,717);
 break;
case '7030318':
  addStation(718,747);
 break;
case '7030319':
  addStation(748,774);
 break;
case '7030420':
  addStation(775,801);
 break;
case '7030421':
  addStation(802,899);
 break;
case '7030422':
  addStation(900,933);
 break;
case '7030423':
  addStation(934,971);
 break;
case '7030424':
  addStation(972,996);
 break;
case '7030425':
  addStation(997,1032);
 break;
case '7030426':
  addStation(1033,1049);
 break;
case '7040101':
  addStation(1,74);
 break;
case '7040102':
  addStation(75,94);
 break;
case '7040103':
  addStation(95,162);
 break;
case '7040104':
  addStation(163,187);
 break;
case '7040105':
  addStation(188,211);
 break;
case '7040106':
  addStation(212,236);
 break;
case '7040207':
  addStation(237,317);
 break;
case '7040208':
  addStation(318,354);
 break;
case '7040209':
  addStation(355,367);
 break;
case '7040210':
  addStation(368,420);
 break;
case '7040211':
  addStation(421,441);
 break;
case '7040212':
  addStation(442,463);
 break;
case '7040213':
  addStation(464,483);
 break;
case '7050101':
  addStation(1,26);
 break;
case '7050102':
  addStation(27,48);
 break;
case '7050103':
  addStation(49,63);
 break;
case '7050104':
  addStation(64,75);
 break;
case '7050105':
  addStation(76,102);
 break;
case '7050106':
  addStation(103,147);
 break;
case '7050107':
  addStation(148,171);
 break;
case '7050108':
  addStation(172,196);
 break;
case '7050109':
  addStation(197,221);
 break;
case '7050110':
  addStation(222,247);
 break;
case '7050111':
  addStation(248,288);
 break;
case '7050212':
  addStation(289,308);
 break;
case '7050213':
  addStation(309,331);
 break;
case '7050214':
  addStation(332,365);
 break;
case '7050215':
  addStation(366,387);
 break;
case '7050216':
  addStation(388,402);
 break;
case '7050217':
  addStation(403,470);
 break;
case '7050218':
  addStation(471,488);
 break;
case '7050219':
  addStation(489,519);
 break;
case '7050220':
  addStation(520,546);
 break;
case '7060101':
  addStation(1,30);
 break;
case '7060102':
  addStation(31,57);
 break;
case '7060103':
  addStation(58,92);
 break;
case '7060104':
  addStation(93,121);
 break;
case '7060105':
  addStation(122,150);
 break;
case '7060106':
  addStation(151,176);
 break;
case '7060107':
  addStation(177,196);
 break;
case '7060108':
  addStation(197,235);
 break;
case '7060209':
  addStation(236,252);
 break;
case '7060210':
  addStation(253,277);
 break;
case '7060211':
  addStation(278,299);
 break;
case '7060212':
  addStation(300,329);
 break;
case '7060213':
  addStation(330,373);
 break;
case '7060214':
  addStation(374,409);
 break;
case '7060215':
  addStation(410,443);
 break;
case '7060216':
  addStation(444,458);
 break;
case '7060217':
  addStation(459,471);
 break;
case '7060218':
  addStation(472,480);
 break;
case '7070101':
  addStation(1,20);
 break;
case '7070102':
  addStation(21,42);
 break;
case '7070103':
  addStation(43,52);
 break;
case '7070104':
  addStation(53,60);
 break;
case '7070105':
  addStation(61,74);
 break;
case '7070106':
  addStation(75,92);
 break;
case '7070107':
  addStation(93,114);
 break;
case '7070108':
  addStation(115,155);
 break;
case '7070109':
  addStation(156,163);
 break;
case '7070110':
  addStation(164,170);
 break;
case '7070111':
  addStation(171,186);
 break;
case '7070112':
  addStation(187,203);
 break;
case '7070113':
  addStation(204,243);
 break;
case '7070214':
  addStation(244,371);
 break;
case '7070215':
  addStation(372,381);
 break;
case '7070216':
  addStation(382,420);
 break;
case '7070317':
  addStation(421,448);
 break;
case '7070318':
  addStation(449,459);
 break;
case '7070319':
  addStation(460,470);
 break;
case '7070320':
  addStation(471,482);
 break;
case '7070321':
  addStation(483,491);
 break;
case '7070322':
  addStation(492,527);
 break;
case '7070323':
  addStation(528,541);
 break;
case '7070324':
  addStation(542,557);
 break;
case '7070325':
  addStation(558,579);
 break;
case '7070326':
  addStation(580,585);
 break;
case '7070327':
  addStation(586,591);
 break;
case '7070328':
  addStation(592,599);
 break;
case '7070329':
  addStation(500,606);
 break;
case '7070330':
  addStation(607,619);
 break;
case '7070331':
  addStation(620,627);
 break;
case '7070332':
  addStation(628,652);
 break;
case '7070333':
  addStation(653,661);
 break;
case '7100101':
  addStation(1,69);
 break;
case '7100102':
  addStation(70,86);
 break;
case '7100103':
  addStation(87,95);
 break;
case '7100104':
  addStation(96,117);
 break;
case '7100105':
  addStation(118,127);
 break;
case '7100106':
  addStation(128,140);
 break;
case '7100107':
  addStation(141,151);
 break;
case '7100108':
  addStation(152,161);
 break;
case '7100109':
  addStation(162,176);
 break;
case '7100110':
  addStation(177,182);
 break;
case '7100111':
  addStation(183,186);
 break;
case '7100112':
  addStation(187,192);
 break;
case '7100113':
  addStation(193,197);
 break;
case '7100114':
  addStation(198,202);
 break;
case '7100115':
  addStation(203,209);
 break;
case '7100116':
  addStation(210,213);
 break;
case '7090101':
  addStation(1,81);
 break;
case '7090102':
  addStation(82,100);
 break;
case '7090103':
  addStation(101,114);
 break;
case '7090104':
  addStation(115,173);
 break;
case '7090105':
  addStation(174,194);
 break;
case '7090106':
  addStation(195,209);
 break;
case '7090107':
  addStation(210,226);
 break;
case '7090108':
  addStation(227,233);
 break;
case '7090109':
  addStation(234,240);
 break;
case '7090110':
  addStation(241,253);
 break;
case '7090111':
  addStation(254,276);
 break;
case '7090112':
  addStation(277,289);
 break;
case '7090113':
  addStation(290,300);
 break;
case '7110101':
  addStation(1,48);
 break;
case '7110102':
  addStation(49,71);
 break;
case '7110103':
  addStation(72,86);
 break;
case '7110104':
  addStation(87,98);
 break;
case '7110105':
  addStation(99,108);
 break;
case '7110106':
  addStation(109,114);
 break;
case '7120101':
  addStation(1,35);
 break;
case '7120102':
  addStation(36,68);
 break;
case '7120103':
  addStation(69,103);
 break;
case '7120104':
  addStation(104,135);
 break;
case '7120105':
  addStation(136,183);
 break;
case '7120106':
  addStation(184,211);
 break;
case '7120107':
  addStation(212,249);
 break;
case '7130101':
  addStation(1,134);
 break;
case '7130102':
  addStation(135,235);
 break;
case '7130103':
  addStation(236,289);
 break;
case '7140101':
  addStation(1,82);
 break;
case '7140102':
  addStation(83,178);
 break;
case '8010101':
  addStation(1,19);
 break;
case '8010102':
  addStation(20,35);
 break;
case '8010103':
  addStation(36,41);
 break;
case '8010104':
  addStation(42,43);
 break;
case '8010105':
  addStation(44,56);
 break;
case '8010106':
  addStation(57,68);
 break;
case '8020101':
  addStation(1,3);
 break;
case '8020102':
  addStation(4,5);
 break;
case '8020103':
  addStation(6,7);
 break;
case '8020104':
  addStation(8,8);
 break;
      }


}
