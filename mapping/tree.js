/*
// JavaScript Document

var menuTitle = "查詢項目 (立法委員)";

var menuLevel_1 = "候選人得票數";
var menuLevel_2 = "政黨得票數 (不分區及僑居國外國民立法委員)";
var menuLevel_3 = "候選人簡歷";
var menuLevel_A = "區域立法委員";
var menuLevel_B = "平地原住民立法委員";
var menuLevel_C = "山地原住民立法委員";
var menuLevel_D = "不分區及僑居國外國民立法委員";
var menuLevel_4 = "不分區當選名額";
var menuLevel_5 = "不分區當選註記";
var menuLevel_6 = "當選人分析";
var menuLevel_7 = "選舉概況";

var strAll = "全部";
var strAllC = "全國";

var orderBy = checkOrder();
*/
var util = require('../util'),
	padding = util.padding;

var orderBy = 'n';
var secAreaNumber = new Array(); //選區數
var secCountyNumber = new Array(); //鄉鎮數

//選舉區中文名稱
var secCName=new Array("1","2","3","4","5","6","7","8","9","10","11","12","13"); 

//省份數量
secCountyNumber[0] = 1;
secCountyNumber[1] = 1;
secCountyNumber[2] = 1;
secCountyNumber[3] = 1;
secCountyNumber[4] = 1;
secCountyNumber[5] = 1;
secCountyNumber[6] = 14;
secCountyNumber[7] = 2; 

for(i=0;i<secCountyNumber.length;i++){
	secAreaNumber[i]=new Array();
	for(j=0;j<secCountyNumber[i];j++){
		secAreaNumber[i][j]=0;
	}
}

//選舉區數量
secAreaNumber[0][0] = 8;
secAreaNumber[1][0] = 12;
secAreaNumber[2][0] = 6;
secAreaNumber[3][0] = 8;
secAreaNumber[4][0] = 5;
secAreaNumber[5][0] = 9;
secAreaNumber[6][0] = 1;
secAreaNumber[6][1] = 2;
secAreaNumber[6][2] = 4;
secAreaNumber[6][3] = 2;
secAreaNumber[6][4] = 2;
secAreaNumber[6][5] = 2;
secAreaNumber[6][6] = 3;
secAreaNumber[6][7] = 1;
secAreaNumber[6][8] = 1;
secAreaNumber[6][9] = 1;
secAreaNumber[6][10] = 1;
secAreaNumber[6][11] = 1;
secAreaNumber[6][12] = 1;
secAreaNumber[6][13] = 1;
secAreaNumber[7][0] = 1;
secAreaNumber[7][1] = 1;

var secAreaName = new Array();
var secAreaID=new Array();

for(i=0;i<secCountyNumber.length;i++)
{
	secAreaName[i] = new Array();
	secAreaID[i] = new Array();
	for(j=0;j<secCountyNumber[i];j++){
		secAreaName[i][j]=new Array();
		secAreaID[i][j]=new Array();
	}
}

secAreaName[0][0][0] = "臺北市";
secAreaName[1][0][0] = "新北市";
secAreaName[2][0][0] = "桃園市";
secAreaName[3][0][0] = "臺中市";
secAreaName[4][0][0] = "臺南市";
secAreaName[5][0][0] = "高雄市";
secAreaName[6][0][0] = "新竹縣";
secAreaName[6][1][0] = "苗栗縣";
secAreaName[6][2][0] = "彰化縣";
secAreaName[6][3][0] = "南投縣";
secAreaName[6][4][0] = "雲林縣";
secAreaName[6][5][0] = "嘉義縣";
secAreaName[6][6][0] = "屏東縣";
secAreaName[6][7][0] = "宜蘭縣";
secAreaName[6][8][0] = "花蓮縣";
secAreaName[6][9][0] = "臺東縣";
secAreaName[6][10][0] = "澎湖縣";
secAreaName[6][11][0] = "基隆市";
secAreaName[6][12][0] = "新竹市";
secAreaName[6][13][0] = "嘉義市";
secAreaName[7][0][0] = "金門縣";
secAreaName[7][1][0] = "連江縣";

secAreaName[0][0][1] = "北投區";
secAreaName[0][0][2] = "士林區";
secAreaName[0][0][3] = "大同區";
secAreaName[0][0][4] = "中山區";
secAreaName[0][0][5] = "松山區";
secAreaName[0][0][6] = "內湖區";
secAreaName[0][0][7] = "南港區";
secAreaName[0][0][8] = "萬華區";
secAreaName[0][0][9] = "中正區";
secAreaName[0][0][10] = "大安區";
secAreaName[0][0][11] = "信義區";
secAreaName[0][0][12] = "文山區";

secAreaName[1][0][1] = "石門區";
secAreaName[1][0][2] = "三芝區";
secAreaName[1][0][3] = "淡水區";
secAreaName[1][0][4] = "八里區";
secAreaName[1][0][5] = "林口區";
secAreaName[1][0][6] = "泰山區";
secAreaName[1][0][7] = "五股區";
secAreaName[1][0][8] = "蘆洲區";
secAreaName[1][0][9] = "三重區";
secAreaName[1][0][10] = "新莊區";
secAreaName[1][0][11] = "樹林區";
secAreaName[1][0][12] = "鶯歌區";
secAreaName[1][0][13] = "板橋區";
secAreaName[1][0][14] = "中和區";
secAreaName[1][0][15] = "永和區";
secAreaName[1][0][16] = "土城區";
secAreaName[1][0][17] = "三峽區";
secAreaName[1][0][18] = "新店區";
secAreaName[1][0][19] = "深坑區";
secAreaName[1][0][20] = "石碇區";
secAreaName[1][0][21] = "坪林區";
secAreaName[1][0][22] = "烏來區";
secAreaName[1][0][23] = "金山區";
secAreaName[1][0][24] = "萬里區";
secAreaName[1][0][25] = "汐止區";
secAreaName[1][0][26] = "平溪區";
secAreaName[1][0][27] = "瑞芳區";
secAreaName[1][0][28] = "雙溪區";
secAreaName[1][0][29] = "貢寮區";

secAreaName[2][0][1] = "蘆竹區";
secAreaName[2][0][2] = "龜山區";
secAreaName[2][0][3] = "桃園區";
secAreaName[2][0][4] = "大園區";
secAreaName[2][0][5] = "觀音區";
secAreaName[2][0][6] = "新屋區";
secAreaName[2][0][7] = "楊梅區";
secAreaName[2][0][8] = "中壢區";
secAreaName[2][0][9] = "平鎮區";
secAreaName[2][0][10] = "龍潭區";
secAreaName[2][0][11] = "八德區";
secAreaName[2][0][12] = "大溪區";
secAreaName[2][0][13] = "復興區";

secAreaName[3][0][1] = "大甲區";
secAreaName[3][0][2] = "大安區";
secAreaName[3][0][3] = "外埔區";
secAreaName[3][0][4] = "清水區";
secAreaName[3][0][5] = "梧棲區";
secAreaName[3][0][6] = "沙鹿區";
secAreaName[3][0][7] = "龍井區";
secAreaName[3][0][8] = "大肚區";
secAreaName[3][0][9] = "烏日區";
secAreaName[3][0][10] = "霧峰區";
secAreaName[3][0][11] = "大里區";
secAreaName[3][0][12] = "后里區";
secAreaName[3][0][13] = "神岡區";
secAreaName[3][0][14] = "大雅區";
secAreaName[3][0][15] = "潭子區";
secAreaName[3][0][16] = "西屯區";
secAreaName[3][0][17] = "南屯區";
secAreaName[3][0][18] = "北屯區";
secAreaName[3][0][19] = "北區";
secAreaName[3][0][20] = "西區";
secAreaName[3][0][21] = "中區";
secAreaName[3][0][22] = "東區";
secAreaName[3][0][23] = "南區";
secAreaName[3][0][24] = "太平區";
secAreaName[3][0][25] = "豐原區";
secAreaName[3][0][26] = "石岡區";
secAreaName[3][0][27] = "新社區";
secAreaName[3][0][28] = "東勢區";
secAreaName[3][0][29] = "和平區";

secAreaName[4][0][1] = "後壁區";
secAreaName[4][0][2] = "白河區";
secAreaName[4][0][3] = "北門區";
secAreaName[4][0][4] = "學甲區";
secAreaName[4][0][5] = "鹽水區";
secAreaName[4][0][6] = "新營區";
secAreaName[4][0][7] = "柳營區";
secAreaName[4][0][8] = "東山區";
secAreaName[4][0][9] = "將軍區";
secAreaName[4][0][10] = "下營區";
secAreaName[4][0][11] = "六甲區";
secAreaName[4][0][12] = "官田區";
secAreaName[4][0][13] = "七股區";
secAreaName[4][0][14] = "佳里區";
secAreaName[4][0][15] = "麻豆區";
secAreaName[4][0][16] = "善化區";
secAreaName[4][0][17] = "大內區";
secAreaName[4][0][18] = "玉井區";
secAreaName[4][0][19] = "楠西區";
secAreaName[4][0][20] = "西港區";
secAreaName[4][0][21] = "安定區";
secAreaName[4][0][22] = "新市區";
secAreaName[4][0][23] = "山上區";
secAreaName[4][0][24] = "新化區";
secAreaName[4][0][25] = "左鎮區";
secAreaName[4][0][26] = "南化區";
secAreaName[4][0][27] = "安南區";
secAreaName[4][0][28] = "北區";
secAreaName[4][0][29] = "中西區";
secAreaName[4][0][30] = "安平區";
secAreaName[4][0][31] = "南區";
secAreaName[4][0][32] = "東區";
secAreaName[4][0][33] = "永康區";
secAreaName[4][0][34] = "仁德區";
secAreaName[4][0][35] = "歸仁區";
secAreaName[4][0][36] = "關廟區";
secAreaName[4][0][37] = "龍崎區";

secAreaName[5][0][1] = "桃源區";
secAreaName[5][0][2] = "那瑪夏區";
secAreaName[5][0][3] = "甲仙區";
secAreaName[5][0][4] = "六龜區";
secAreaName[5][0][5] = "杉林區";
secAreaName[5][0][6] = "內門區";
secAreaName[5][0][7] = "旗山區";
secAreaName[5][0][8] = "美濃區";
secAreaName[5][0][9] = "茂林區";
secAreaName[5][0][10] = "阿蓮區";
secAreaName[5][0][11] = "田寮區";
secAreaName[5][0][12] = "燕巢區";
secAreaName[5][0][13] = "大社區";
secAreaName[5][0][14] = "大樹區";
secAreaName[5][0][15] = "茄萣區";
secAreaName[5][0][16] = "湖內區";
secAreaName[5][0][17] = "路竹區";
secAreaName[5][0][18] = "永安區";
secAreaName[5][0][19] = "岡山區";
secAreaName[5][0][20] = "彌陀區";
secAreaName[5][0][21] = "梓官區";
secAreaName[5][0][22] = "橋頭區";
secAreaName[5][0][23] = "楠梓區";
secAreaName[5][0][24] = "左營區";
secAreaName[5][0][25] = "仁武區";
secAreaName[5][0][26] = "鳥松區";
secAreaName[5][0][27] = "大寮區";
secAreaName[5][0][28] = "林園區";
secAreaName[5][0][29] = "鼓山區";
secAreaName[5][0][30] = "鹽埕區";
secAreaName[5][0][31] = "旗津區";
secAreaName[5][0][32] = "三民區";
secAreaName[5][0][33] = "前金區";
secAreaName[5][0][34] = "新興區";
secAreaName[5][0][35] = "苓雅區";
secAreaName[5][0][36] = "前鎮區";
secAreaName[5][0][37] = "鳳山區";
secAreaName[5][0][38] = "小港區";


secAreaName[6][0][1] = "竹北市";
secAreaName[6][0][2] = "竹東鎮";
secAreaName[6][0][3] = "新埔鎮";
secAreaName[6][0][4] = "關西鎮";
secAreaName[6][0][5] = "湖口鄉";
secAreaName[6][0][6] = "新豐鄉";
secAreaName[6][0][7] = "芎林鄉";
secAreaName[6][0][8] = "橫山鄉";
secAreaName[6][0][9] = "北埔鄉";
secAreaName[6][0][10] = "寶山鄉";
secAreaName[6][0][11] = "峨眉鄉";
secAreaName[6][0][12] = "尖石鄉";
secAreaName[6][0][13] = "五峰鄉";

secAreaName[6][1][1] = "竹南鎮";
secAreaName[6][1][2] = "造橋鄉";
secAreaName[6][1][3] = "後龍鎮";
secAreaName[6][1][4] = "西湖鄉";
secAreaName[6][1][5] = "通霄鎮";
secAreaName[6][1][6] = "銅鑼鄉";
secAreaName[6][1][7] = "苑裡鎮";
secAreaName[6][1][8] = "三義鄉";
secAreaName[6][1][9] = "頭份市";
secAreaName[6][1][10] = "三灣鄉";
secAreaName[6][1][11] = "南庄鄉";
secAreaName[6][1][12] = "苗栗市";
secAreaName[6][1][13] = "頭屋鄉";
secAreaName[6][1][14] = "獅潭鄉";
secAreaName[6][1][15] = "公館鄉";
secAreaName[6][1][16] = "大湖鄉";
secAreaName[6][1][17] = "泰安鄉";
secAreaName[6][1][18] = "卓蘭鎮";

secAreaName[6][2][1] = "伸港鄉";
secAreaName[6][2][2] = "線西鄉";
secAreaName[6][2][3] = "和美鎮";
secAreaName[6][2][4] = "鹿港鎮";
secAreaName[6][2][5] = "福興鄉";
secAreaName[6][2][6] = "秀水鄉";
secAreaName[6][2][7] = "彰化市";
secAreaName[6][2][8] = "花壇鄉";
secAreaName[6][2][9] = "芬園鄉";
secAreaName[6][2][10] = "芳苑鄉";
secAreaName[6][2][11] = "二林鎮";
secAreaName[6][2][12] = "埔鹽鄉";
secAreaName[6][2][13] = "溪湖鎮";
secAreaName[6][2][14] = "埔心鄉";
secAreaName[6][2][15] = "大城鄉";
secAreaName[6][2][16] = "竹塘鄉";
secAreaName[6][2][17] = "埤頭鄉";
secAreaName[6][2][18] = "北斗鎮";
secAreaName[6][2][19] = "溪州鄉";
secAreaName[6][2][20] = "大村鄉";
secAreaName[6][2][21] = "員林市";
secAreaName[6][2][22] = "永靖鄉";
secAreaName[6][2][23] = "社頭鄉";
secAreaName[6][2][24] = "田尾鄉";
secAreaName[6][2][25] = "田中鎮";
secAreaName[6][2][26] = "二水鄉";

secAreaName[6][3][1] = "草屯鎮";
secAreaName[6][3][2] = "國姓鄉";
secAreaName[6][3][3] = "埔里鎮";
secAreaName[6][3][4] = "仁愛鄉";
secAreaName[6][3][5] = "中寮鄉";
secAreaName[6][3][6] = "魚池鄉";
secAreaName[6][3][7] = "南投市";
secAreaName[6][3][8] = "名間鄉";
secAreaName[6][3][9] = "集集鎮";
secAreaName[6][3][10] = "竹山鎮";
secAreaName[6][3][11] = "鹿谷鄉";
secAreaName[6][3][12] = "水里鄉";
secAreaName[6][3][13] = "信義鄉";

secAreaName[6][4][1] = "麥寮鄉";
secAreaName[6][4][2] = "臺西鄉";
secAreaName[6][4][3] = "東勢鄉";
secAreaName[6][4][4] = "褒忠鄉";
secAreaName[6][4][5] = "土庫鎮";
secAreaName[6][4][6] = "虎尾鎮";
secAreaName[6][4][7] = "四湖鄉";
secAreaName[6][4][8] = "元長鄉";
secAreaName[6][4][9] = "口湖鄉";
secAreaName[6][4][10] = "水林鄉";
secAreaName[6][4][11] = "北港鎮";
secAreaName[6][4][12] = "崙背鄉";
secAreaName[6][4][13] = "二崙鄉";
secAreaName[6][4][14] = "西螺鎮";
secAreaName[6][4][15] = "莿桐鄉";
secAreaName[6][4][16] = "林內鄉";
secAreaName[6][4][17] = "斗六市";
secAreaName[6][4][18] = "大埤鄉";
secAreaName[6][4][19] = "斗南鎮";
secAreaName[6][4][20] = "古坑鄉";

secAreaName[6][5][1] = "六腳鄉";
secAreaName[6][5][2] = "東石鄉";
secAreaName[6][5][3] = "朴子市";
secAreaName[6][5][4] = "太保市";
secAreaName[6][5][5] = "布袋鎮";
secAreaName[6][5][6] = "義竹鄉";
secAreaName[6][5][7] = "鹿草鄉";
secAreaName[6][5][8] = "水上鄉";
secAreaName[6][5][9] = "溪口鄉";
secAreaName[6][5][10] = "大林鎮";
secAreaName[6][5][11] = "梅山鄉";
secAreaName[6][5][12] = "新港鄉";
secAreaName[6][5][13] = "民雄鄉";
secAreaName[6][5][14] = "竹崎鄉";
secAreaName[6][5][15] = "中埔鄉";
secAreaName[6][5][16] = "番路鄉";
secAreaName[6][5][17] = "阿里山鄉";
secAreaName[6][5][18] = "大埔鄉";

secAreaName[6][6][1] = "里港鄉";
secAreaName[6][6][2] = "高樹鄉";
secAreaName[6][6][3] = "三地門鄉";
secAreaName[6][6][4] = "霧臺鄉";
secAreaName[6][6][5] = "九如鄉";
secAreaName[6][6][6] = "鹽埔鄉";
secAreaName[6][6][7] = "長治鄉";
secAreaName[6][6][8] = "內埔鄉";
secAreaName[6][6][9] = "瑪家鄉";
secAreaName[6][6][10] = "泰武鄉";
secAreaName[6][6][11] = "竹田鄉";
secAreaName[6][6][12] = "萬巒鄉";
secAreaName[6][6][13] = "潮州鎮";
secAreaName[6][6][14] = "屏東市";
secAreaName[6][6][15] = "麟洛鄉";
secAreaName[6][6][16] = "萬丹鄉";
secAreaName[6][6][17] = "新園鄉";
secAreaName[6][6][18] = "崁頂鄉";
secAreaName[6][6][19] = "南州鄉";
secAreaName[6][6][20] = "新埤鄉";
secAreaName[6][6][21] = "來義鄉";
secAreaName[6][6][22] = "東港鎮";
secAreaName[6][6][23] = "林邊鄉";
secAreaName[6][6][24] = "佳冬鄉";
secAreaName[6][6][25] = "枋寮鄉";
secAreaName[6][6][26] = "春日鄉";
secAreaName[6][6][27] = "枋山鄉";
secAreaName[6][6][28] = "獅子鄉";
secAreaName[6][6][29] = "牡丹鄉";
secAreaName[6][6][30] = "車城鄉";
secAreaName[6][6][31] = "滿州鄉";
secAreaName[6][6][32] = "恆春鎮";
secAreaName[6][6][33] = "琉球鄉";

secAreaName[6][7][1] = "宜蘭市";
secAreaName[6][7][2] = "羅東鎮";
secAreaName[6][7][3] = "蘇澳鎮";
secAreaName[6][7][4] = "頭城鎮";
secAreaName[6][7][5] = "礁溪鄉";
secAreaName[6][7][6] = "壯圍鄉";
secAreaName[6][7][7] = "員山鄉";
secAreaName[6][7][8] = "冬山鄉";
secAreaName[6][7][9] = "五結鄉";
secAreaName[6][7][10] = "三星鄉";
secAreaName[6][7][11] = "大同鄉";
secAreaName[6][7][12] = "南澳鄉";

secAreaName[6][8][1] = "花蓮市";
secAreaName[6][8][2] = "新城鄉";
secAreaName[6][8][3] = "秀林鄉";
secAreaName[6][8][4] = "吉安鄉";
secAreaName[6][8][5] = "壽豐鄉";
secAreaName[6][8][6] = "鳳林鎮";
secAreaName[6][8][7] = "光復鄉";
secAreaName[6][8][8] = "豐濱鄉";
secAreaName[6][8][9] = "萬榮鄉";
secAreaName[6][8][10] = "瑞穗鄉";
secAreaName[6][8][11] = "玉里鎮";
secAreaName[6][8][12] = "富里鄉";
secAreaName[6][8][13] = "卓溪鄉";

secAreaName[6][9][1] = "臺東市";
secAreaName[6][9][2] = "成功鎮";
secAreaName[6][9][3] = "關山鎮";
secAreaName[6][9][4] = "卑南鄉";
secAreaName[6][9][5] = "鹿野鄉";
secAreaName[6][9][6] = "池上鄉";
secAreaName[6][9][7] = "東河鄉";
secAreaName[6][9][8] = "長濱鄉";
secAreaName[6][9][9] = "太麻里鄉";
secAreaName[6][9][10] = "大武鄉";
secAreaName[6][9][11] = "綠島鄉";
secAreaName[6][9][12] = "海端鄉";
secAreaName[6][9][13] = "延平鄉";
secAreaName[6][9][14] = "金峰鄉";
secAreaName[6][9][15] = "達仁鄉";
secAreaName[6][9][16] = "蘭嶼鄉";

secAreaName[6][10][1] = "馬公市";
secAreaName[6][10][2] = "湖西鄉";
secAreaName[6][10][3] = "白沙鄉";
secAreaName[6][10][4] = "西嶼鄉";
secAreaName[6][10][5] = "望安鄉";
secAreaName[6][10][6] = "七美鄉";

secAreaName[6][11][1] = "中正區";
secAreaName[6][11][2] = "信義區";
secAreaName[6][11][3] = "仁愛區";
secAreaName[6][11][4] = "中山區";
secAreaName[6][11][5] = "安樂區";
secAreaName[6][11][6] = "暖暖區";
secAreaName[6][11][7] = "七堵區";

secAreaName[6][12][1] = "東區";
secAreaName[6][12][2] = "北區";
secAreaName[6][12][3] = "香山區";

secAreaName[6][13][1] = "東區";
secAreaName[6][13][2] = "西區";

secAreaName[7][0][1] = "金城鎮";
secAreaName[7][0][2] = "金寧鄉";
secAreaName[7][0][3] = "烈嶼鄉";
secAreaName[7][0][4] = "烏坵鄉";
secAreaName[7][0][5] = "金湖鎮";
secAreaName[7][0][6] = "金沙鎮";
secAreaName[7][1][1] = "南竿鄉";
secAreaName[7][1][2] = "北竿鄉";
secAreaName[7][1][3] = "莒光鄉";
secAreaName[7][1][4] = "東引鄉";

for(i=0;i<secCountyNumber.length;i++){
	for(j=0;j<secCountyNumber[i];j++){
		for(k=0;k<secAreaName[i][j].length;k++){
			if(i<=5){
				secAreaID[i][j][k] = padding((i+1).toString(),'0')+padding((j).toString(),'00')+'00'+padding(k.toString(),'00')+'0000'+'0000';
			}
			else{
				secAreaID[i][j][k] = padding((i+1).toString(),'0')+padding((j+1).toString(),'00')+'00'+padding(k.toString(),'00')+'0000'+'0000';
			}
		}
	}
}


var thrAreaName = new Array();
var thrAreaID = new Array();
for(i=0;i<secCountyNumber.length;i++){
	thrAreaName[i]=new Array(); 	
	thrAreaID[i]=new Array();
	for(j=0;j<secCountyNumber[i];j++){
		thrAreaName[i][j]=new Array(); 	
		thrAreaID[i][j]=new Array();
		for(k=0;k<=secAreaNumber[i][j];k++){
			thrAreaName[i][j][k]=new Array(); 	
			thrAreaID[i][j][k]=new Array();
			if(k!=0){
				if(secAreaNumber[i][j]==1)  
					thrAreaName[i][j][k][0]="選舉區";
				else
					thrAreaName[i][j][k][0]="第"+secCName[k-1]+"選舉區";
			} 
		}
	}
}

//thrAreaName[省][縣市][選區][鄉鎮市]
//thrAreaName[Province][County][ElecDiv][Township]
thrAreaName[0][0][0][0]="臺北市";
thrAreaID[0][0][0][0]=padding('1','0')+padding('0','00')+padding('0','00')+'00';
thrAreaID[0][0][1][0]=padding('1','0')+padding('0','00')+padding('01','00')+'00';
thrAreaID[0][0][2][0]=padding('1','0')+padding('0','00')+padding('02','00')+'00';
thrAreaID[0][0][3][0]=padding('1','0')+padding('0','00')+padding('03','00')+'00';
thrAreaID[0][0][4][0]=padding('1','0')+padding('0','00')+padding('04','00')+'00';
thrAreaID[0][0][5][0]=padding('1','0')+padding('0','00')+padding('05','00')+'00';
thrAreaID[0][0][6][0]=padding('1','0')+padding('0','00')+padding('06','00')+'00';
thrAreaID[0][0][7][0]=padding('1','0')+padding('0','00')+padding('07','00')+'00';
thrAreaID[0][0][8][0]=padding('1','0')+padding('0','00')+padding('08','00')+'00';

thrAreaName[1][0][0][0] = "新北市";
thrAreaID[1][0][0][0]=padding('2','0')+padding('0','00')+padding('0','00')+'00';
thrAreaID[1][0][1][0]=padding('2','0')+padding('0','00')+padding('1','00')+'00';
thrAreaID[1][0][2][0]=padding('2','0')+padding('0','00')+padding('2','00')+'00';
thrAreaID[1][0][3][0]=padding('2','0')+padding('0','00')+padding('3','00')+'00';
thrAreaID[1][0][4][0]=padding('2','0')+padding('0','00')+padding('4','00')+'00';
thrAreaID[1][0][5][0]=padding('2','0')+padding('0','00')+padding('5','00')+'00';
thrAreaID[1][0][6][0]=padding('2','0')+padding('0','00')+padding('6','00')+'00';
thrAreaID[1][0][7][0]=padding('2','0')+padding('0','00')+padding('7','00')+'00';
thrAreaID[1][0][8][0]=padding('2','0')+padding('0','00')+padding('8','00')+'00';
thrAreaID[1][0][9][0]=padding('2','0')+padding('0','00')+padding('9','00')+'00';
thrAreaID[1][0][10][0]=padding('2','0')+padding('0','00')+padding('10','00')+'00';
thrAreaID[1][0][11][0]=padding('2','0')+padding('0','00')+padding('11','00')+'00';
thrAreaID[1][0][12][0]=padding('2','0')+padding('0','00')+padding('12','00')+'00';

thrAreaName[2][0][0][0] = "桃園市";
thrAreaID[2][0][0][0]=padding('3','0')+padding('0','00')+padding('0','00')+'00';
thrAreaID[2][0][1][0]=padding('3','0')+padding('0','00')+padding('1','00')+'00';
thrAreaID[2][0][2][0]=padding('3','0')+padding('0','00')+padding('2','00')+'00';
thrAreaID[2][0][3][0]=padding('3','0')+padding('0','00')+padding('3','00')+'00';
thrAreaID[2][0][4][0]=padding('3','0')+padding('0','00')+padding('4','00')+'00';
thrAreaID[2][0][5][0]=padding('3','0')+padding('0','00')+padding('5','00')+'00';
thrAreaID[2][0][6][0]=padding('3','0')+padding('0','00')+padding('6','00')+'00';

thrAreaName[3][0][0][0] = "臺中市";
thrAreaID[3][0][0][0]=padding('4','0')+padding('0','00')+padding('0','00')+'00';
thrAreaID[3][0][1][0]=padding('4','0')+padding('0','00')+padding('1','00')+'00';
thrAreaID[3][0][2][0]=padding('4','0')+padding('0','00')+padding('2','00')+'00';
thrAreaID[3][0][3][0]=padding('4','0')+padding('0','00')+padding('3','00')+'00';
thrAreaID[3][0][4][0]=padding('4','0')+padding('0','00')+padding('4','00')+'00';
thrAreaID[3][0][5][0]=padding('4','0')+padding('0','00')+padding('5','00')+'00';
thrAreaID[3][0][6][0]=padding('4','0')+padding('0','00')+padding('6','00')+'00';
thrAreaID[3][0][7][0]=padding('4','0')+padding('0','00')+padding('7','00')+'00';
thrAreaID[3][0][8][0]=padding('4','0')+padding('0','00')+padding('8','00')+'00';

thrAreaName[4][0][0][0] = "臺南市";
thrAreaID[4][0][0][0]=padding('5','0')+padding('0','00')+padding('0','00')+'00';
thrAreaID[4][0][1][0]=padding('5','0')+padding('0','00')+padding('1','00')+'00';
thrAreaID[4][0][2][0]=padding('5','0')+padding('0','00')+padding('2','00')+'00';
thrAreaID[4][0][3][0]=padding('5','0')+padding('0','00')+padding('3','00')+'00';
thrAreaID[4][0][4][0]=padding('5','0')+padding('0','00')+padding('4','00')+'00';
thrAreaID[4][0][5][0]=padding('5','0')+padding('0','00')+padding('5','00')+'00';

thrAreaName[5][0][0][0]= "高雄市";
thrAreaID[5][0][0][0]=padding('6','0')+padding('0','00')+padding('0','00')+'00';
thrAreaID[5][0][1][0]=padding('6','0')+padding('0','00')+padding('1','00')+'00';
thrAreaID[5][0][2][0]=padding('6','0')+padding('0','00')+padding('2','00')+'00';
thrAreaID[5][0][3][0]=padding('6','0')+padding('0','00')+padding('3','00')+'00';
thrAreaID[5][0][4][0]=padding('6','0')+padding('0','00')+padding('4','00')+'00';
thrAreaID[5][0][5][0]=padding('6','0')+padding('0','00')+padding('5','00')+'00';
thrAreaID[5][0][6][0]=padding('6','0')+padding('0','00')+padding('6','00')+'00';
thrAreaID[5][0][7][0]=padding('6','0')+padding('0','00')+padding('7','00')+'00';
thrAreaID[5][0][8][0]=padding('6','0')+padding('0','00')+padding('8','00')+'00';
thrAreaID[5][0][9][0]=padding('6','0')+padding('0','00')+padding('9','00')+'00';

thrAreaName[6][0][0][0] = "新竹縣";
thrAreaID[6][0][0][0]=padding('7','0')+padding('1','00')+padding('0','00')+'00';
thrAreaID[6][0][1][0]=padding('7','0')+padding('1','00')+padding('1','00')+'00';

thrAreaName[6][1][0][0] = "苗栗縣";
thrAreaID[6][1][0][0]=padding('7','0')+padding('2','00')+padding('0','00')+'00';
thrAreaID[6][1][1][0]=padding('7','0')+padding('2','00')+padding('1','00')+'00';
thrAreaID[6][1][2][0]=padding('7','0')+padding('2','00')+padding('2','00')+'00';

thrAreaName[6][2][0][0] = "彰化縣";
thrAreaID[6][2][0][0]=padding('7','0')+padding('3','00')+padding('0','00')+'00';
thrAreaID[6][2][1][0]=padding('7','0')+padding('3','00')+padding('1','00')+'00';
thrAreaID[6][2][2][0]=padding('7','0')+padding('3','00')+padding('2','00')+'00';
thrAreaID[6][2][3][0]=padding('7','0')+padding('3','00')+padding('3','00')+'00';
thrAreaID[6][2][4][0]=padding('7','0')+padding('3','00')+padding('4','00')+'00';

thrAreaName[6][3][0][0] = "南投縣";
thrAreaID[6][3][0][0]=padding('7','0')+padding('4','00')+padding('0','00')+'00';
thrAreaID[6][3][1][0]=padding('7','0')+padding('4','00')+padding('1','00')+'00';
thrAreaID[6][3][2][0]=padding('7','0')+padding('4','00')+padding('2','00')+'00';

thrAreaName[6][4][0][0] = "雲林縣";
thrAreaID[6][4][0][0]=padding('7','0')+padding('5','00')+padding('0','00')+'00';
thrAreaID[6][4][1][0]=padding('7','0')+padding('5','00')+padding('1','00')+'00';
thrAreaID[6][4][2][0]=padding('7','0')+padding('5','00')+padding('2','00')+'00';

thrAreaName[6][5][0][0] = "嘉義縣";
thrAreaID[6][5][0][0]=padding('7','0')+padding('6','00')+padding('0','00')+'00';
thrAreaID[6][5][1][0]=padding('7','0')+padding('6','00')+padding('1','00')+'00';
thrAreaID[6][5][2][0]=padding('7','0')+padding('6','00')+padding('2','00')+'00';

thrAreaName[6][6][0][0] = "屏東縣";
thrAreaID[6][6][0][0]=padding('7','0')+padding('7','00')+padding('0','00')+'00';
thrAreaID[6][6][1][0]=padding('7','0')+padding('7','00')+padding('1','00')+'00';
thrAreaID[6][6][2][0]=padding('7','0')+padding('7','00')+padding('2','00')+'00';
thrAreaID[6][6][3][0]=padding('7','0')+padding('7','00')+padding('3','00')+'00';

thrAreaName[6][7][0][0] = "宜蘭縣";
thrAreaID[6][7][0][0]=padding('7','0')+padding('8','00')+padding('0','00')+'00';
thrAreaID[6][7][1][0]=padding('7','0')+padding('8','00')+padding('1','00')+'00';

thrAreaName[6][8][0][0] = "花蓮縣";
thrAreaID[6][8][0][0]=padding('7','0')+padding('9','00')+padding('0','00')+'00';
thrAreaID[6][8][1][0]=padding('7','0')+padding('9','00')+padding('1','00')+'00';

thrAreaName[6][9][0][0] = "臺東縣";
thrAreaID[6][9][0][0]=padding('7','0')+padding('10','00')+padding('0','00')+'00';
thrAreaID[6][9][1][0]=padding('7','0')+padding('10','00')+padding('1','00')+'00';

thrAreaName[6][10][0][0] = "澎湖縣";
thrAreaID[6][10][0][0]=padding('7','0')+padding('11','00')+padding('0','00')+'00';
thrAreaID[6][10][1][0]=padding('7','0')+padding('11','00')+padding('1','00')+'00';

thrAreaName[6][11][0][0] = "基隆市";
thrAreaID[6][11][0][0]=padding('7','0')+padding('12','00')+padding('0','00')+'00';
thrAreaID[6][11][1][0]=padding('7','0')+padding('12','00')+padding('1','00')+'00';

thrAreaName[6][12][0][0] = "新竹市";
thrAreaID[6][12][0][0]=padding('7','0')+padding('13','00')+padding('0','00')+'00';
thrAreaID[6][12][1][0]=padding('7','0')+padding('13','00')+padding('1','00')+'00';

thrAreaName[6][13][0][0] = "嘉義市";
thrAreaID[6][13][0][0]=padding('7','0')+padding('14','00')+padding('0','00')+'00';
thrAreaID[6][13][1][0]=padding('7','0')+padding('14','00')+padding('1','00')+'00';

thrAreaName[7][0][0][0] = "金門縣";
thrAreaID[7][0][0][0]=padding('8','0')+padding('1','00')+padding('0','00')+'00';
thrAreaID[7][0][1][0]=padding('8','0')+padding('1','00')+padding('1','00')+'00';

thrAreaName[7][1][0][0] = "連江縣";
thrAreaID[7][1][0][0]=padding('8','0')+padding('2','00')+padding('0','00')+'00';
thrAreaID[7][1][1][0]=padding('8','0')+padding('2','00')+padding('1','00')+'00';

//--------------------------------------------------------------------------------

thrAreaName[0][0][1][1] = "北投區";
thrAreaID[0][0][1][1]=padding('1','0')+padding('0','00')+padding('1','00')+padding('1','00');
thrAreaName[0][0][1][2] = "士林區";
thrAreaID[0][0][1][2]=padding('1','0')+padding('0','00')+padding('1','00')+padding('2','00');
thrAreaName[0][0][2][2] = "士林區";
thrAreaID[0][0][2][2]=padding('1','0')+padding('0','00')+padding('2','00')+padding('2','00');
thrAreaName[0][0][2][3] = "大同區";
thrAreaID[0][0][2][3]=padding('1','0')+padding('0','00')+padding('2','00')+padding('3','00');
thrAreaName[0][0][3][4] = "中山區";
thrAreaID[0][0][3][4]=padding('1','0')+padding('0','00')+padding('3','00')+padding('4','00');
thrAreaName[0][0][3][5] = "松山區";
thrAreaID[0][0][3][5]=padding('1','0')+padding('0','00')+padding('3','00')+padding('5','00');
thrAreaName[0][0][7][5] = "松山區";
thrAreaID[0][0][7][5]=padding('1','0')+padding('0','00')+padding('7','00')+padding('5','00');
thrAreaName[0][0][4][6] = "內湖區";
thrAreaID[0][0][4][6]=padding('1','0')+padding('0','00')+padding('4','00')+padding('6','00');
thrAreaName[0][0][4][7] = "南港區";
thrAreaID[0][0][4][7]=padding('1','0')+padding('0','00')+padding('4','00')+padding('7','00');
thrAreaName[0][0][5][8] = "萬華區";
thrAreaID[0][0][5][8]=padding('1','0')+padding('0','00')+padding('5','00')+padding('8','00');
thrAreaName[0][0][5][9] = "中正區";
thrAreaID[0][0][5][9]=padding('1','0')+padding('0','00')+padding('5','00')+padding('9','00');
thrAreaName[0][0][8][9] = "中正區";
thrAreaID[0][0][8][9]=padding('1','0')+padding('0','00')+padding('8','00')+padding('9','00');
thrAreaName[0][0][6][10] = "大安區";
thrAreaID[0][0][6][10]=padding('1','0')+padding('0','00')+padding('6','00')+padding('10','00');
thrAreaName[0][0][7][11] = "信義區";
thrAreaID[0][0][7][11]=padding('1','0')+padding('0','00')+padding('7','00')+padding('11','00');
thrAreaName[0][0][8][12] = "文山區";
thrAreaID[0][0][8][12]=padding('1','0')+padding('0','00')+padding('8','00')+padding('12','00');
thrAreaName[1][0][1][1] = "石門區";
thrAreaID[1][0][1][1]=padding('2','0')+padding('0','00')+padding('1','00')+padding('1','00');
thrAreaName[1][0][1][2] = "三芝區";
thrAreaID[1][0][1][2]=padding('2','0')+padding('0','00')+padding('1','00')+padding('2','00');
thrAreaName[1][0][1][3] = "淡水區";
thrAreaID[1][0][1][3]=padding('2','0')+padding('0','00')+padding('1','00')+padding('3','00');
thrAreaName[1][0][1][4] = "八里區";
thrAreaID[1][0][1][4]=padding('2','0')+padding('0','00')+padding('1','00')+padding('4','00');
thrAreaName[1][0][1][5] = "林口區";
thrAreaID[1][0][1][5]=padding('2','0')+padding('0','00')+padding('1','00')+padding('5','00');
thrAreaName[1][0][1][6] = "泰山區";
thrAreaID[1][0][1][6]=padding('2','0')+padding('0','00')+padding('1','00')+padding('6','00');
thrAreaName[1][0][2][7] = "五股區";
thrAreaID[1][0][2][7]=padding('2','0')+padding('0','00')+padding('2','00')+padding('7','00');
thrAreaName[1][0][2][8] = "蘆洲區";
thrAreaID[1][0][2][8]=padding('2','0')+padding('0','00')+padding('2','00')+padding('8','00');
thrAreaName[1][0][2][9] = "三重區";
thrAreaID[1][0][2][9]=padding('2','0')+padding('0','00')+padding('2','00')+padding('9','00');
thrAreaName[1][0][3][9] = "三重區";
thrAreaID[1][0][3][9]=padding('2','0')+padding('0','00')+padding('3','00')+padding('9','00');
thrAreaName[1][0][4][10] = "新莊區";
thrAreaID[1][0][4][10]=padding('2','0')+padding('0','00')+padding('4','00')+padding('10','00');
thrAreaName[1][0][5][10] = "新莊區";
thrAreaID[1][0][5][10]=padding('2','0')+padding('0','00')+padding('5','00')+padding('10','00');
thrAreaName[1][0][5][11] = "樹林區";
thrAreaID[1][0][5][11]=padding('2','0')+padding('0','00')+padding('5','00')+padding('11','00');
thrAreaName[1][0][5][12] = "鶯歌區";
thrAreaID[1][0][5][12]=padding('2','0')+padding('0','00')+padding('5','00')+padding('12','00');
thrAreaName[1][0][6][13] = "板橋區";
thrAreaID[1][0][6][13]=padding('2','0')+padding('0','00')+padding('6','00')+padding('13','00');
thrAreaName[1][0][7][13] = "板橋區";
thrAreaID[1][0][7][13]=padding('2','0')+padding('0','00')+padding('7','00')+padding('13','00');
thrAreaName[1][0][8][14] = "中和區";
thrAreaID[1][0][8][14]=padding('2','0')+padding('0','00')+padding('8','00')+padding('14','00');
thrAreaName[1][0][9][14] = "中和區";
thrAreaID[1][0][9][14]=padding('2','0')+padding('0','00')+padding('9','00')+padding('14','00');
thrAreaName[1][0][9][15] = "永和區";
thrAreaID[1][0][9][15]=padding('2','0')+padding('0','00')+padding('9','00')+padding('15','00');
thrAreaName[1][0][10][16] = "土城區";
thrAreaID[1][0][10][16]=padding('2','0')+padding('0','00')+padding('10','00')+padding('16','00');
thrAreaName[1][0][10][17] = "三峽區";
thrAreaID[1][0][10][17]=padding('2','0')+padding('0','00')+padding('10','00')+padding('17','00');
thrAreaName[1][0][11][18] = "新店區";
thrAreaID[1][0][11][18]=padding('2','0')+padding('0','00')+padding('11','00')+padding('18','00');
thrAreaName[1][0][11][19] = "深坑區";
thrAreaID[1][0][11][19]=padding('2','0')+padding('0','00')+padding('11','00')+padding('19','00');
thrAreaName[1][0][11][20] = "石碇區";
thrAreaID[1][0][11][20]=padding('2','0')+padding('0','00')+padding('11','00')+padding('20','00');
thrAreaName[1][0][11][21] = "坪林區";
thrAreaID[1][0][11][21]=padding('2','0')+padding('0','00')+padding('11','00')+padding('21','00');
thrAreaName[1][0][11][22] = "烏來區";
thrAreaID[1][0][11][22]=padding('2','0')+padding('0','00')+padding('11','00')+padding('22','00');
thrAreaName[1][0][12][23] = "金山區";
thrAreaID[1][0][12][23]=padding('2','0')+padding('0','00')+padding('12','00')+padding('23','00');
thrAreaName[1][0][12][24] = "萬里區";
thrAreaID[1][0][12][24]=padding('2','0')+padding('0','00')+padding('12','00')+padding('24','00');
thrAreaName[1][0][12][25] = "汐止區";
thrAreaID[1][0][12][25]=padding('2','0')+padding('0','00')+padding('12','00')+padding('25','00');
thrAreaName[1][0][12][26] = "平溪區";
thrAreaID[1][0][12][26]=padding('2','0')+padding('0','00')+padding('12','00')+padding('26','00');
thrAreaName[1][0][12][27] = "瑞芳區";
thrAreaID[1][0][12][27]=padding('2','0')+padding('0','00')+padding('12','00')+padding('27','00');
thrAreaName[1][0][12][28] = "雙溪區";
thrAreaID[1][0][12][28]=padding('2','0')+padding('0','00')+padding('12','00')+padding('28','00');
thrAreaName[1][0][12][29] = "貢寮區";
thrAreaID[1][0][12][29]=padding('2','0')+padding('0','00')+padding('12','00')+padding('29','00');

thrAreaName[2][0][1][1] = "蘆竹區";
thrAreaID[2][0][1][1]=padding('3','0')+padding('0','00')+padding('1','00')+padding('1','00');
thrAreaName[2][0][1][2] = "龜山區";
thrAreaID[2][0][1][2]=padding('3','0')+padding('0','00')+padding('1','00')+padding('2','00');
thrAreaName[2][0][1][3] = "桃園區";
thrAreaID[2][0][1][3]=padding('3','0')+padding('0','00')+padding('1','00')+padding('3','00');
thrAreaName[2][0][4][3] = "桃園區";
thrAreaID[2][0][4][3]=padding('3','0')+padding('0','00')+padding('4','00')+padding('3','00');
thrAreaName[2][0][2][4] = "大園區";
thrAreaID[2][0][2][4]=padding('3','0')+padding('0','00')+padding('2','00')+padding('4','00');
thrAreaName[2][0][2][5] = "觀音區";
thrAreaID[2][0][2][5]=padding('3','0')+padding('0','00')+padding('2','00')+padding('5','00');
thrAreaName[2][0][2][6] = "新屋區";
thrAreaID[2][0][2][6]=padding('3','0')+padding('0','00')+padding('2','00')+padding('6','00');
thrAreaName[2][0][2][7] = "楊梅區";
thrAreaID[2][0][2][7]=padding('3','0')+padding('0','00')+padding('2','00')+padding('7','00');
thrAreaName[2][0][3][8] = "中壢區";
thrAreaID[2][0][3][8]=padding('3','0')+padding('0','00')+padding('3','00')+padding('8','00');
thrAreaName[2][0][6][8] = "中壢區";
thrAreaID[2][0][6][8]=padding('3','0')+padding('0','00')+padding('6','00')+padding('8','00');
thrAreaName[2][0][5][9] = "平鎮區";
thrAreaID[2][0][5][9]=padding('3','0')+padding('0','00')+padding('5','00')+padding('9','00');
thrAreaName[2][0][5][10] = "龍潭區";
thrAreaID[2][0][5][10]=padding('3','0')+padding('0','00')+padding('5','00')+padding('10','00');
thrAreaName[2][0][6][11] = "八德區";
thrAreaID[2][0][6][11]=padding('3','0')+padding('0','00')+padding('6','00')+padding('11','00');
thrAreaName[2][0][6][12] = "大溪區";
thrAreaID[2][0][6][12]=padding('3','0')+padding('0','00')+padding('6','00')+padding('12','00');
thrAreaName[2][0][6][13] = "復興區";
thrAreaID[2][0][6][13]=padding('3','0')+padding('0','00')+padding('6','00')+padding('13','00');

thrAreaName[3][0][1][1] = "大甲區";
thrAreaID[3][0][1][1]=padding('4','0')+padding('0','00')+padding('1','00')+padding('1','00');
thrAreaName[3][0][1][2] = "大安區";
thrAreaID[3][0][1][2]=padding('4','0')+padding('0','00')+padding('1','00')+padding('2','00');
thrAreaName[3][0][1][3] = "外埔區";
thrAreaID[3][0][1][3]=padding('4','0')+padding('0','00')+padding('1','00')+padding('3','00');
thrAreaName[3][0][1][4] = "清水區";
thrAreaID[3][0][1][4]=padding('4','0')+padding('0','00')+padding('1','00')+padding('4','00');
thrAreaName[3][0][1][5] = "梧棲區";
thrAreaID[3][0][1][5]=padding('4','0')+padding('0','00')+padding('1','00')+padding('5','00');
thrAreaName[3][0][2][6] = "沙鹿區";
thrAreaID[3][0][2][6]=padding('4','0')+padding('0','00')+padding('2','00')+padding('6','00');
thrAreaName[3][0][2][7] = "龍井區";
thrAreaID[3][0][2][7]=padding('4','0')+padding('0','00')+padding('2','00')+padding('7','00');
thrAreaName[3][0][2][8] = "大肚區";
thrAreaID[3][0][2][8]=padding('4','0')+padding('0','00')+padding('2','00')+padding('8','00');
thrAreaName[3][0][2][9] = "烏日區";
thrAreaID[3][0][2][9]=padding('4','0')+padding('0','00')+padding('2','00')+padding('9','00');
thrAreaName[3][0][2][10] = "霧峰區";
thrAreaID[3][0][2][10]=padding('4','0')+padding('0','00')+padding('2','00')+padding('10','00');
thrAreaName[3][0][2][11] = "大里區";
thrAreaID[3][0][2][11]=padding('4','0')+padding('0','00')+padding('2','00')+padding('11','00');
thrAreaName[3][0][7][11] = "大里區";
thrAreaID[3][0][7][11]=padding('4','0')+padding('0','00')+padding('7','00')+padding('11','00');
thrAreaName[3][0][3][12] = "后里區";
thrAreaID[3][0][3][12]=padding('4','0')+padding('0','00')+padding('3','00')+padding('12','00');
thrAreaName[3][0][3][13] = "神岡區";
thrAreaID[3][0][3][13]=padding('4','0')+padding('0','00')+padding('3','00')+padding('13','00');
thrAreaName[3][0][3][14] = "大雅區";
thrAreaID[3][0][3][14]=padding('4','0')+padding('0','00')+padding('3','00')+padding('14','00');
thrAreaName[3][0][3][15] = "潭子區";
thrAreaID[3][0][3][15]=padding('4','0')+padding('0','00')+padding('3','00')+padding('15','00');
thrAreaName[3][0][4][16] = "西屯區";
thrAreaID[3][0][4][16]=padding('4','0')+padding('0','00')+padding('4','00')+padding('16','00');
thrAreaName[3][0][4][17] = "南屯區";
thrAreaID[3][0][4][17]=padding('4','0')+padding('0','00')+padding('4','00')+padding('17','00');
thrAreaName[3][0][5][18] = "北屯區";
thrAreaID[3][0][5][18]=padding('4','0')+padding('0','00')+padding('5','00')+padding('18','00');
thrAreaName[3][0][5][19] = "北區";
thrAreaID[3][0][5][19]=padding('4','0')+padding('0','00')+padding('5','00')+padding('19','00');
thrAreaName[3][0][6][20] = "西區";
thrAreaID[3][0][6][20]=padding('4','0')+padding('0','00')+padding('6','00')+padding('20','00');
thrAreaName[3][0][6][21] = "中區";
thrAreaID[3][0][6][21]=padding('4','0')+padding('0','00')+padding('6','00')+padding('21','00');
thrAreaName[3][0][6][22] = "東區";
thrAreaID[3][0][6][22]=padding('4','0')+padding('0','00')+padding('6','00')+padding('22','00');
thrAreaName[3][0][6][23] = "南區";
thrAreaID[3][0][6][23]=padding('4','0')+padding('0','00')+padding('6','00')+padding('23','00');
thrAreaName[3][0][7][24] = "太平區";
thrAreaID[3][0][7][24]=padding('4','0')+padding('0','00')+padding('7','00')+padding('24','00');
thrAreaName[3][0][8][25] = "豐原區";
thrAreaID[3][0][8][25]=padding('4','0')+padding('0','00')+padding('8','00')+padding('25','00');
thrAreaName[3][0][8][26] = "石岡區";
thrAreaID[3][0][8][26]=padding('4','0')+padding('0','00')+padding('8','00')+padding('26','00');
thrAreaName[3][0][8][27] = "新社區";
thrAreaID[3][0][8][27]=padding('4','0')+padding('0','00')+padding('8','00')+padding('27','00');
thrAreaName[3][0][8][28] = "東勢區";
thrAreaID[3][0][8][28]=padding('4','0')+padding('0','00')+padding('8','00')+padding('28','00');
thrAreaName[3][0][8][29] = "和平區";
thrAreaID[3][0][8][29]=padding('4','0')+padding('0','00')+padding('8','00')+padding('29','00');

thrAreaName[4][0][1][1] = "後壁區";
thrAreaID[4][0][1][1]=padding('5','0')+padding('0','00')+padding('1','00')+padding('1','00');
thrAreaName[4][0][1][2] = "白河區";
thrAreaID[4][0][1][2]=padding('5','0')+padding('0','00')+padding('1','00')+padding('2','00');
thrAreaName[4][0][1][3] = "北門區";
thrAreaID[4][0][1][3]=padding('5','0')+padding('0','00')+padding('1','00')+padding('3','00');
thrAreaName[4][0][1][4] = "學甲區";
thrAreaID[4][0][1][4]=padding('5','0')+padding('0','00')+padding('1','00')+padding('4','00');
thrAreaName[4][0][1][5] = "鹽水區";
thrAreaID[4][0][1][5]=padding('5','0')+padding('0','00')+padding('1','00')+padding('5','00');
thrAreaName[4][0][1][6] = "新營區";
thrAreaID[4][0][1][6]=padding('5','0')+padding('0','00')+padding('1','00')+padding('6','00');
thrAreaName[4][0][1][7] = "柳營區";
thrAreaID[4][0][1][7]=padding('5','0')+padding('0','00')+padding('1','00')+padding('7','00');
thrAreaName[4][0][1][8] = "東山區";
thrAreaID[4][0][1][8]=padding('5','0')+padding('0','00')+padding('1','00')+padding('8','00');
thrAreaName[4][0][1][9] = "將軍區";
thrAreaID[4][0][1][9]=padding('5','0')+padding('0','00')+padding('1','00')+padding('9','00');
thrAreaName[4][0][1][10] = "下營區";
thrAreaID[4][0][1][10]=padding('5','0')+padding('0','00')+padding('1','00')+padding('10','00');
thrAreaName[4][0][1][11] = "六甲區";
thrAreaID[4][0][1][11]=padding('5','0')+padding('0','00')+padding('1','00')+padding('11','00');
thrAreaName[4][0][1][12] = "官田區";
thrAreaID[4][0][1][12]=padding('5','0')+padding('0','00')+padding('1','00')+padding('12','00');
thrAreaName[4][0][2][13] = "七股區";
thrAreaID[4][0][2][13]=padding('5','0')+padding('0','00')+padding('2','00')+padding('13','00');
thrAreaName[4][0][2][14] = "佳里區";
thrAreaID[4][0][2][14]=padding('5','0')+padding('0','00')+padding('2','00')+padding('14','00');
thrAreaName[4][0][2][15] = "麻豆區";
thrAreaID[4][0][2][15]=padding('5','0')+padding('0','00')+padding('2','00')+padding('15','00');
thrAreaName[4][0][2][16] = "善化區";
thrAreaID[4][0][2][16]=padding('5','0')+padding('0','00')+padding('2','00')+padding('16','00');
thrAreaName[4][0][2][17] = "大內區";
thrAreaID[4][0][2][17]=padding('5','0')+padding('0','00')+padding('2','00')+padding('17','00');
thrAreaName[4][0][2][18] = "玉井區";
thrAreaID[4][0][2][18]=padding('5','0')+padding('0','00')+padding('2','00')+padding('18','00');
thrAreaName[4][0][2][19] = "楠西區";
thrAreaID[4][0][2][19]=padding('5','0')+padding('0','00')+padding('2','00')+padding('19','00');
thrAreaName[4][0][2][20] = "西港區";
thrAreaID[4][0][2][20]=padding('5','0')+padding('0','00')+padding('2','00')+padding('20','00');
thrAreaName[4][0][2][21] = "安定區";
thrAreaID[4][0][2][21]=padding('5','0')+padding('0','00')+padding('2','00')+padding('21','00');
thrAreaName[4][0][2][22] = "新市區";
thrAreaID[4][0][2][22]=padding('5','0')+padding('0','00')+padding('2','00')+padding('22','00');
thrAreaName[4][0][2][23] = "山上區";
thrAreaID[4][0][2][23]=padding('5','0')+padding('0','00')+padding('2','00')+padding('23','00');
thrAreaName[4][0][2][24] = "新化區";
thrAreaID[4][0][2][24]=padding('5','0')+padding('0','00')+padding('2','00')+padding('24','00');
thrAreaName[4][0][2][25] = "左鎮區";
thrAreaID[4][0][2][25]=padding('5','0')+padding('0','00')+padding('2','00')+padding('25','00');
thrAreaName[4][0][2][26] = "南化區";
thrAreaID[4][0][2][26]=padding('5','0')+padding('0','00')+padding('2','00')+padding('26','00');
thrAreaName[4][0][3][27] = "安南區";
thrAreaID[4][0][3][27]=padding('5','0')+padding('0','00')+padding('3','00')+padding('27','00');
thrAreaName[4][0][3][28] = "北區";
thrAreaID[4][0][3][28]=padding('5','0')+padding('0','00')+padding('3','00')+padding('28','00');
thrAreaName[4][0][3][29] = "中西區";
thrAreaID[4][0][3][29]=padding('5','0')+padding('0','00')+padding('3','00')+padding('29','00');
thrAreaName[4][0][4][30] = "安平區";
thrAreaID[4][0][4][30]=padding('5','0')+padding('0','00')+padding('4','00')+padding('30','00');
thrAreaName[4][0][4][31] = "南區";
thrAreaID[4][0][4][31]=padding('5','0')+padding('0','00')+padding('4','00')+padding('31','00');
thrAreaName[4][0][4][32] = "東區";
thrAreaID[4][0][4][32]=padding('5','0')+padding('0','00')+padding('4','00')+padding('32','00');
thrAreaName[4][0][5][33] = "永康區";
thrAreaID[4][0][5][33]=padding('5','0')+padding('0','00')+padding('5','00')+padding('33','00');
thrAreaName[4][0][5][34] = "仁德區";
thrAreaID[4][0][5][34]=padding('5','0')+padding('0','00')+padding('5','00')+padding('34','00');
thrAreaName[4][0][5][35] = "歸仁區";
thrAreaID[4][0][5][35]=padding('5','0')+padding('0','00')+padding('5','00')+padding('35','00');
thrAreaName[4][0][5][36] = "關廟區";
thrAreaID[4][0][5][36]=padding('5','0')+padding('0','00')+padding('5','00')+padding('36','00');
thrAreaName[4][0][5][37] = "龍崎區";
thrAreaID[4][0][5][37]=padding('5','0')+padding('0','00')+padding('5','00')+padding('37','00');

thrAreaName[5][0][1][1] = "桃源區";
thrAreaID[5][0][1][1]=padding('6','0')+padding('0','00')+padding('1','00')+padding('1','00');
thrAreaName[5][0][1][2] = "那瑪夏區";
thrAreaID[5][0][1][2]=padding('6','0')+padding('0','00')+padding('1','00')+padding('2','00');
thrAreaName[5][0][1][3] = "甲仙區";
thrAreaID[5][0][1][3]=padding('6','0')+padding('0','00')+padding('1','00')+padding('3','00');
thrAreaName[5][0][1][4] = "六龜區";
thrAreaID[5][0][1][4]=padding('6','0')+padding('0','00')+padding('1','00')+padding('4','00');
thrAreaName[5][0][1][5] = "杉林區";
thrAreaID[5][0][1][5]=padding('6','0')+padding('0','00')+padding('1','00')+padding('5','00');
thrAreaName[5][0][1][6] = "內門區";
thrAreaID[5][0][1][6]=padding('6','0')+padding('0','00')+padding('1','00')+padding('6','00');
thrAreaName[5][0][1][7] = "旗山區";
thrAreaID[5][0][1][7]=padding('6','0')+padding('0','00')+padding('1','00')+padding('7','00');
thrAreaName[5][0][1][8] = "美濃區";
thrAreaID[5][0][1][8]=padding('6','0')+padding('0','00')+padding('1','00')+padding('8','00');
thrAreaName[5][0][1][9] = "茂林區";
thrAreaID[5][0][1][9]=padding('6','0')+padding('0','00')+padding('1','00')+padding('9','00');
thrAreaName[5][0][1][10] = "阿蓮區";
thrAreaID[5][0][1][10]=padding('6','0')+padding('0','00')+padding('1','00')+padding('10','00');
thrAreaName[5][0][1][11] = "田寮區";
thrAreaID[5][0][1][11]=padding('6','0')+padding('0','00')+padding('1','00')+padding('11','00');
thrAreaName[5][0][1][12] = "燕巢區";
thrAreaID[5][0][1][12]=padding('6','0')+padding('0','00')+padding('1','00')+padding('12','00');
thrAreaName[5][0][1][13] = "大社區";
thrAreaID[5][0][1][13]=padding('6','0')+padding('0','00')+padding('1','00')+padding('13','00');
thrAreaName[5][0][1][14] = "大樹區";
thrAreaID[5][0][1][14]=padding('6','0')+padding('0','00')+padding('1','00')+padding('14','00');
thrAreaName[5][0][2][15] = "茄萣區";
thrAreaID[5][0][2][15]=padding('6','0')+padding('0','00')+padding('2','00')+padding('15','00');
thrAreaName[5][0][2][16] = "湖內區";
thrAreaID[5][0][2][16]=padding('6','0')+padding('0','00')+padding('2','00')+padding('16','00');
thrAreaName[5][0][2][17] = "路竹區";
thrAreaID[5][0][2][17]=padding('6','0')+padding('0','00')+padding('2','00')+padding('17','00');
thrAreaName[5][0][2][18] = "永安區";
thrAreaID[5][0][2][18]=padding('6','0')+padding('0','00')+padding('2','00')+padding('18','00');
thrAreaName[5][0][2][19] = "岡山區";
thrAreaID[5][0][2][19]=padding('6','0')+padding('0','00')+padding('2','00')+padding('19','00');
thrAreaName[5][0][2][20] = "彌陀區";
thrAreaID[5][0][2][20]=padding('6','0')+padding('0','00')+padding('2','00')+padding('20','00');
thrAreaName[5][0][2][21] = "梓官區";
thrAreaID[5][0][2][21]=padding('6','0')+padding('0','00')+padding('2','00')+padding('21','00');
thrAreaName[5][0][2][22] = "橋頭區";
thrAreaID[5][0][2][22]=padding('6','0')+padding('0','00')+padding('2','00')+padding('22','00');
thrAreaName[5][0][3][23] = "楠梓區";
thrAreaID[5][0][3][23]=padding('6','0')+padding('0','00')+padding('3','00')+padding('23','00');
thrAreaName[5][0][3][24] = "左營區";
thrAreaID[5][0][3][24]=padding('6','0')+padding('0','00')+padding('3','00')+padding('24','00');
thrAreaName[5][0][4][25] = "仁武區";
thrAreaID[5][0][4][25]=padding('6','0')+padding('0','00')+padding('4','00')+padding('25','00');
thrAreaName[5][0][4][26] = "鳥松區";
thrAreaID[5][0][4][26]=padding('6','0')+padding('0','00')+padding('4','00')+padding('26','00');
thrAreaName[5][0][4][27] = "大寮區";
thrAreaID[5][0][4][27]=padding('6','0')+padding('0','00')+padding('4','00')+padding('27','00');
thrAreaName[5][0][4][28] = "林園區";
thrAreaID[5][0][4][28]=padding('6','0')+padding('0','00')+padding('4','00')+padding('28','00');
thrAreaName[5][0][5][29] = "鼓山區";
thrAreaID[5][0][5][29]=padding('6','0')+padding('0','00')+padding('5','00')+padding('29','00');
thrAreaName[5][0][5][30] = "鹽埕區";
thrAreaID[5][0][5][30]=padding('6','0')+padding('0','00')+padding('5','00')+padding('30','00');
thrAreaName[5][0][5][31] = "旗津區";
thrAreaID[5][0][5][31]=padding('6','0')+padding('0','00')+padding('5','00')+padding('31','00');
thrAreaName[5][0][5][32] = "三民區";
thrAreaID[5][0][5][32]=padding('6','0')+padding('0','00')+padding('5','00')+padding('32','00');
thrAreaName[5][0][6][32] = "三民區";
thrAreaID[5][0][6][32]=padding('6','0')+padding('0','00')+padding('6','00')+padding('32','00');
thrAreaName[5][0][7][33] = "前金區";
thrAreaID[5][0][7][33]=padding('6','0')+padding('0','00')+padding('7','00')+padding('33','00');
thrAreaName[5][0][7][34] = "新興區";
thrAreaID[5][0][7][34]=padding('6','0')+padding('0','00')+padding('7','00')+padding('34','00');
thrAreaName[5][0][7][35] = "苓雅區";
thrAreaID[5][0][7][35]=padding('6','0')+padding('0','00')+padding('7','00')+padding('35','00');
thrAreaName[5][0][7][36] = "前鎮區";
thrAreaID[5][0][7][36]=padding('6','0')+padding('0','00')+padding('7','00')+padding('36','00');
thrAreaName[5][0][9][36] = "前鎮區";
thrAreaID[5][0][9][36]=padding('6','0')+padding('0','00')+padding('9','00')+padding('36','00');
thrAreaName[5][0][8][37] = "鳳山區";
thrAreaID[5][0][8][37]=padding('6','0')+padding('0','00')+padding('8','00')+padding('37','00');
thrAreaName[5][0][9][38] = "小港區";
thrAreaID[5][0][9][38]=padding('6','0')+padding('0','00')+padding('9','00')+padding('38','00');

thrAreaName[6][0][1][1] = "竹北市";
thrAreaID[6][0][1][1]=padding('7','0')+padding('1','00')+padding('1','00')+padding('1','00');
thrAreaName[6][0][1][2] = "竹東鎮";
thrAreaID[6][0][1][2]=padding('7','0')+padding('1','00')+padding('1','00')+padding('2','00');
thrAreaName[6][0][1][3] = "新埔鎮";
thrAreaID[6][0][1][3]=padding('7','0')+padding('1','00')+padding('1','00')+padding('3','00');
thrAreaName[6][0][1][4] = "關西鎮";
thrAreaID[6][0][1][4]=padding('7','0')+padding('1','00')+padding('1','00')+padding('4','00');
thrAreaName[6][0][1][5] = "湖口鄉";
thrAreaID[6][0][1][5]=padding('7','0')+padding('1','00')+padding('1','00')+padding('5','00');
thrAreaName[6][0][1][6] = "新豐鄉";
thrAreaID[6][0][1][6]=padding('7','0')+padding('1','00')+padding('1','00')+padding('6','00');
thrAreaName[6][0][1][7] = "芎林鄉";
thrAreaID[6][0][1][7]=padding('7','0')+padding('1','00')+padding('1','00')+padding('7','00');
thrAreaName[6][0][1][8] = "橫山鄉";
thrAreaID[6][0][1][8]=padding('7','0')+padding('1','00')+padding('1','00')+padding('8','00');
thrAreaName[6][0][1][9] = "北埔鄉";
thrAreaID[6][0][1][9]=padding('7','0')+padding('1','00')+padding('1','00')+padding('9','00');
thrAreaName[6][0][1][10] = "寶山鄉";
thrAreaID[6][0][1][10]=padding('7','0')+padding('1','00')+padding('1','00')+padding('10','00');
thrAreaName[6][0][1][11] = "峨眉鄉";
thrAreaID[6][0][1][11]=padding('7','0')+padding('1','00')+padding('1','00')+padding('11','00');
thrAreaName[6][0][1][12] = "尖石鄉";
thrAreaID[6][0][1][12]=padding('7','0')+padding('1','00')+padding('1','00')+padding('12','00');
thrAreaName[6][0][1][13] = "五峰鄉";
thrAreaID[6][0][1][13]=padding('7','0')+padding('1','00')+padding('1','00')+padding('13','00');

thrAreaName[6][1][1][1] = "竹南鎮";
thrAreaID[6][1][1][1]=padding('7','0')+padding('2','00')+padding('1','00')+padding('1','00');
thrAreaName[6][1][1][2] = "造橋鄉";
thrAreaID[6][1][1][2]=padding('7','0')+padding('2','00')+padding('1','00')+padding('2','00');
thrAreaName[6][1][1][3] = "後龍鎮";
thrAreaID[6][1][1][3]=padding('7','0')+padding('2','00')+padding('1','00')+padding('3','00');
thrAreaName[6][1][1][4] = "西湖鄉";
thrAreaID[6][1][1][4]=padding('7','0')+padding('2','00')+padding('1','00')+padding('4','00');
thrAreaName[6][1][1][5] = "通霄鎮";
thrAreaID[6][1][1][5]=padding('7','0')+padding('2','00')+padding('1','00')+padding('5','00');
thrAreaName[6][1][1][6] = "銅鑼鄉";
thrAreaID[6][1][1][6]=padding('7','0')+padding('2','00')+padding('1','00')+padding('6','00');
thrAreaName[6][1][1][7] = "苑裡鎮";
thrAreaID[6][1][1][7]=padding('7','0')+padding('2','00')+padding('1','00')+padding('7','00');
thrAreaName[6][1][1][8] = "三義鄉";
thrAreaID[6][1][1][8]=padding('7','0')+padding('2','00')+padding('1','00')+padding('8','00');
thrAreaName[6][1][2][9] = "頭份市";
thrAreaID[6][1][2][9]=padding('7','0')+padding('2','00')+padding('2','00')+padding('9','00');
thrAreaName[6][1][2][10] = "三灣鄉";
thrAreaID[6][1][2][10]=padding('7','0')+padding('2','00')+padding('2','00')+padding('10','00');
thrAreaName[6][1][2][11] = "南庄鄉";
thrAreaID[6][1][2][11]=padding('7','0')+padding('2','00')+padding('2','00')+padding('11','00');
thrAreaName[6][1][2][12] = "苗栗市";
thrAreaID[6][1][2][12]=padding('7','0')+padding('2','00')+padding('2','00')+padding('12','00');
thrAreaName[6][1][2][13] = "頭屋鄉";
thrAreaID[6][1][2][13]=padding('7','0')+padding('2','00')+padding('2','00')+padding('13','00');
thrAreaName[6][1][2][14] = "獅潭鄉";
thrAreaID[6][1][2][14]=padding('7','0')+padding('2','00')+padding('2','00')+padding('14','00');
thrAreaName[6][1][2][15] = "公館鄉";
thrAreaID[6][1][2][15]=padding('7','0')+padding('2','00')+padding('2','00')+padding('15','00');
thrAreaName[6][1][2][16] = "大湖鄉";
thrAreaID[6][1][2][16]=padding('7','0')+padding('2','00')+padding('2','00')+padding('16','00');
thrAreaName[6][1][2][17] = "泰安鄉";
thrAreaID[6][1][2][17]=padding('7','0')+padding('2','00')+padding('2','00')+padding('17','00');
thrAreaName[6][1][2][18] = "卓蘭鎮";
thrAreaID[6][1][2][18]=padding('7','0')+padding('2','00')+padding('2','00')+padding('18','00');

thrAreaName[6][2][1][1] = "伸港鄉";
thrAreaID[6][2][1][1]=padding('7','0')+padding('3','00')+padding('1','00')+padding('1','00');
thrAreaName[6][2][1][2] = "線西鄉";
thrAreaID[6][2][1][2]=padding('7','0')+padding('3','00')+padding('1','00')+padding('2','00');
thrAreaName[6][2][1][3] = "和美鎮";
thrAreaID[6][2][1][3]=padding('7','0')+padding('3','00')+padding('1','00')+padding('3','00');
thrAreaName[6][2][1][4] = "鹿港鎮";
thrAreaID[6][2][1][4]=padding('7','0')+padding('3','00')+padding('1','00')+padding('4','00');
thrAreaName[6][2][1][5] = "福興鄉";
thrAreaID[6][2][1][5]=padding('7','0')+padding('3','00')+padding('1','00')+padding('5','00');
thrAreaName[6][2][1][6] = "秀水鄉";
thrAreaID[6][2][1][6]=padding('7','0')+padding('3','00')+padding('1','00')+padding('6','00');
thrAreaName[6][2][2][7] = "彰化市";
thrAreaID[6][2][2][7]=padding('7','0')+padding('3','00')+padding('2','00')+padding('7','00');
thrAreaName[6][2][2][8] = "花壇鄉";
thrAreaID[6][2][2][8]=padding('7','0')+padding('3','00')+padding('2','00')+padding('8','00');
thrAreaName[6][2][2][9] = "芬園鄉";
thrAreaID[6][2][2][9]=padding('7','0')+padding('3','00')+padding('2','00')+padding('9','00');
thrAreaName[6][2][3][10] = "芳苑鄉";
thrAreaID[6][2][3][10]=padding('7','0')+padding('3','00')+padding('3','00')+padding('10','00');
thrAreaName[6][2][3][11] = "二林鎮";
thrAreaID[6][2][3][11]=padding('7','0')+padding('3','00')+padding('3','00')+padding('11','00');
thrAreaName[6][2][3][12] = "埔鹽鄉";
thrAreaID[6][2][3][12]=padding('7','0')+padding('3','00')+padding('3','00')+padding('12','00');
thrAreaName[6][2][3][13] = "溪湖鎮";
thrAreaID[6][2][3][13]=padding('7','0')+padding('3','00')+padding('3','00')+padding('13','00');
thrAreaName[6][2][3][14] = "埔心鄉";
thrAreaID[6][2][3][14]=padding('7','0')+padding('3','00')+padding('3','00')+padding('14','00');
thrAreaName[6][2][3][15] = "大城鄉";
thrAreaID[6][2][3][15]=padding('7','0')+padding('3','00')+padding('3','00')+padding('15','00');
thrAreaName[6][2][3][16] = "竹塘鄉";
thrAreaID[6][2][3][16]=padding('7','0')+padding('3','00')+padding('3','00')+padding('16','00');
thrAreaName[6][2][3][17] = "埤頭鄉";
thrAreaID[6][2][3][17]=padding('7','0')+padding('3','00')+padding('3','00')+padding('17','00');
thrAreaName[6][2][3][18] = "北斗鎮";
thrAreaID[6][2][3][18]=padding('7','0')+padding('3','00')+padding('3','00')+padding('18','00');
thrAreaName[6][2][3][19] = "溪州鄉";
thrAreaID[6][2][3][19]=padding('7','0')+padding('3','00')+padding('3','00')+padding('19','00');
thrAreaName[6][2][4][20] = "大村鄉";
thrAreaID[6][2][4][20]=padding('7','0')+padding('3','00')+padding('4','00')+padding('20','00');
thrAreaName[6][2][4][21] = "員林市";
thrAreaID[6][2][4][21]=padding('7','0')+padding('3','00')+padding('4','00')+padding('21','00');
thrAreaName[6][2][4][22] = "永靖鄉";
thrAreaID[6][2][4][22]=padding('7','0')+padding('3','00')+padding('4','00')+padding('22','00');
thrAreaName[6][2][4][23] = "社頭鄉";
thrAreaID[6][2][4][23]=padding('7','0')+padding('3','00')+padding('4','00')+padding('23','00');
thrAreaName[6][2][4][24] = "田尾鄉";
thrAreaID[6][2][4][24]=padding('7','0')+padding('3','00')+padding('4','00')+padding('24','00');
thrAreaName[6][2][4][25] = "田中鎮";
thrAreaID[6][2][4][25]=padding('7','0')+padding('3','00')+padding('4','00')+padding('25','00');
thrAreaName[6][2][4][26] = "二水鄉";
thrAreaID[6][2][4][26]=padding('7','0')+padding('3','00')+padding('4','00')+padding('26','00');

thrAreaName[6][3][1][1] = "草屯鎮";
thrAreaID[6][3][1][1]=padding('7','0')+padding('4','00')+padding('1','00')+padding('1','00');
thrAreaName[6][3][1][2] = "國姓鄉";
thrAreaID[6][3][1][2]=padding('7','0')+padding('4','00')+padding('1','00')+padding('2','00');
thrAreaName[6][3][1][3] = "埔里鎮";
thrAreaID[6][3][1][3]=padding('7','0')+padding('4','00')+padding('1','00')+padding('3','00');
thrAreaName[6][3][1][4] = "仁愛鄉";
thrAreaID[6][3][1][4]=padding('7','0')+padding('4','00')+padding('1','00')+padding('4','00');
thrAreaName[6][3][1][5] = "中寮鄉";
thrAreaID[6][3][1][5]=padding('7','0')+padding('4','00')+padding('1','00')+padding('5','00');
thrAreaName[6][3][1][6] = "魚池鄉";
thrAreaID[6][3][1][6]=padding('7','0')+padding('4','00')+padding('1','00')+padding('6','00');
thrAreaName[6][3][2][7] = "南投市";
thrAreaID[6][3][2][7]=padding('7','0')+padding('4','00')+padding('2','00')+padding('7','00');
thrAreaName[6][3][2][8] = "名間鄉";
thrAreaID[6][3][2][8]=padding('7','0')+padding('4','00')+padding('2','00')+padding('8','00');
thrAreaName[6][3][2][9] = "集集鎮";
thrAreaID[6][3][2][9]=padding('7','0')+padding('4','00')+padding('2','00')+padding('9','00');
thrAreaName[6][3][2][10] = "竹山鎮";
thrAreaID[6][3][2][10]=padding('7','0')+padding('4','00')+padding('2','00')+padding('10','00');
thrAreaName[6][3][2][11] = "鹿谷鄉";
thrAreaID[6][3][2][11]=padding('7','0')+padding('4','00')+padding('2','00')+padding('11','00');
thrAreaName[6][3][2][12] = "水里鄉";
thrAreaID[6][3][2][12]=padding('7','0')+padding('4','00')+padding('2','00')+padding('12','00');
thrAreaName[6][3][2][13] = "信義鄉";
thrAreaID[6][3][2][13]=padding('7','0')+padding('4','00')+padding('2','00')+padding('13','00');

thrAreaName[6][4][1][1] = "麥寮鄉";
thrAreaID[6][4][1][1]=padding('7','0')+padding('5','00')+padding('1','00')+padding('1','00');
thrAreaName[6][4][1][2] = "臺西鄉";
thrAreaID[6][4][1][2]=padding('7','0')+padding('5','00')+padding('1','00')+padding('2','00');
thrAreaName[6][4][1][3] = "東勢鄉";
thrAreaID[6][4][1][3]=padding('7','0')+padding('5','00')+padding('1','00')+padding('3','00');
thrAreaName[6][4][1][4] = "褒忠鄉";
thrAreaID[6][4][1][4]=padding('7','0')+padding('5','00')+padding('1','00')+padding('4','00');
thrAreaName[6][4][1][5] = "土庫鎮";
thrAreaID[6][4][1][5]=padding('7','0')+padding('5','00')+padding('1','00')+padding('5','00');
thrAreaName[6][4][1][6] = "虎尾鎮";
thrAreaID[6][4][1][6]=padding('7','0')+padding('5','00')+padding('1','00')+padding('6','00');
thrAreaName[6][4][1][7] = "四湖鄉";
thrAreaID[6][4][1][7]=padding('7','0')+padding('5','00')+padding('1','00')+padding('7','00');
thrAreaName[6][4][1][8] = "元長鄉";
thrAreaID[6][4][1][8]=padding('7','0')+padding('5','00')+padding('1','00')+padding('8','00');
thrAreaName[6][4][1][9] = "口湖鄉";
thrAreaID[6][4][1][9]=padding('7','0')+padding('5','00')+padding('1','00')+padding('9','00');
thrAreaName[6][4][1][10] = "水林鄉";
thrAreaID[6][4][1][10]=padding('7','0')+padding('5','00')+padding('1','00')+padding('10','00');
thrAreaName[6][4][1][11] = "北港鎮";
thrAreaID[6][4][1][11]=padding('7','0')+padding('5','00')+padding('1','00')+padding('11','00');
thrAreaName[6][4][2][12] = "崙背鄉";
thrAreaID[6][4][2][12]=padding('7','0')+padding('5','00')+padding('2','00')+padding('12','00');
thrAreaName[6][4][2][13] = "二崙鄉";
thrAreaID[6][4][2][13]=padding('7','0')+padding('5','00')+padding('2','00')+padding('13','00');
thrAreaName[6][4][2][14] = "西螺鎮";
thrAreaID[6][4][2][14]=padding('7','0')+padding('5','00')+padding('2','00')+padding('14','00');
thrAreaName[6][4][2][15] = "莿桐鄉";
thrAreaID[6][4][2][15]=padding('7','0')+padding('5','00')+padding('2','00')+padding('15','00');
thrAreaName[6][4][2][16] = "林內鄉";
thrAreaID[6][4][2][16]=padding('7','0')+padding('5','00')+padding('2','00')+padding('16','00');
thrAreaName[6][4][2][17] = "斗六市";
thrAreaID[6][4][2][17]=padding('7','0')+padding('5','00')+padding('2','00')+padding('17','00');
thrAreaName[6][4][2][18] = "大埤鄉";
thrAreaID[6][4][2][18]=padding('7','0')+padding('5','00')+padding('2','00')+padding('18','00');
thrAreaName[6][4][2][19] = "斗南鎮";
thrAreaID[6][4][2][19]=padding('7','0')+padding('5','00')+padding('2','00')+padding('19','00');
thrAreaName[6][4][2][20] = "古坑鄉";
thrAreaID[6][4][2][20]=padding('7','0')+padding('5','00')+padding('2','00')+padding('20','00');

thrAreaName[6][5][1][1] = "六腳鄉";
thrAreaID[6][5][1][1]=padding('7','0')+padding('6','00')+padding('1','00')+padding('1','00');
thrAreaName[6][5][1][2] = "東石鄉";
thrAreaID[6][5][1][2]=padding('7','0')+padding('6','00')+padding('1','00')+padding('2','00');
thrAreaName[6][5][1][3] = "朴子市";
thrAreaID[6][5][1][3]=padding('7','0')+padding('6','00')+padding('1','00')+padding('3','00');
thrAreaName[6][5][1][4] = "太保市";
thrAreaID[6][5][1][4]=padding('7','0')+padding('6','00')+padding('1','00')+padding('4','00');
thrAreaName[6][5][1][5] = "布袋鎮";
thrAreaID[6][5][1][5]=padding('7','0')+padding('6','00')+padding('1','00')+padding('5','00');
thrAreaName[6][5][1][6] = "義竹鄉";
thrAreaID[6][5][1][6]=padding('7','0')+padding('6','00')+padding('1','00')+padding('6','00');
thrAreaName[6][5][1][7] = "鹿草鄉";
thrAreaID[6][5][1][7]=padding('7','0')+padding('6','00')+padding('1','00')+padding('7','00');
thrAreaName[6][5][1][8] = "水上鄉";
thrAreaID[6][5][1][8]=padding('7','0')+padding('6','00')+padding('1','00')+padding('8','00');
thrAreaName[6][5][2][9] = "溪口鄉";
thrAreaID[6][5][2][9]=padding('7','0')+padding('6','00')+padding('2','00')+padding('9','00');
thrAreaName[6][5][2][10] = "大林鎮";
thrAreaID[6][5][2][10]=padding('7','0')+padding('6','00')+padding('2','00')+padding('10','00');
thrAreaName[6][5][2][11] = "梅山鄉";
thrAreaID[6][5][2][11]=padding('7','0')+padding('6','00')+padding('2','00')+padding('11','00');
thrAreaName[6][5][2][12] = "新港鄉";
thrAreaID[6][5][2][12]=padding('7','0')+padding('6','00')+padding('2','00')+padding('12','00');
thrAreaName[6][5][2][13] = "民雄鄉";
thrAreaID[6][5][2][13]=padding('7','0')+padding('6','00')+padding('2','00')+padding('13','00');
thrAreaName[6][5][2][14] = "竹崎鄉";
thrAreaID[6][5][2][14]=padding('7','0')+padding('6','00')+padding('2','00')+padding('14','00');
thrAreaName[6][5][2][15] = "中埔鄉";
thrAreaID[6][5][2][15]=padding('7','0')+padding('6','00')+padding('2','00')+padding('15','00');
thrAreaName[6][5][2][16] = "番路鄉";
thrAreaID[6][5][2][16]=padding('7','0')+padding('6','00')+padding('2','00')+padding('16','00');
thrAreaName[6][5][2][17] = "阿里山鄉";
thrAreaID[6][5][2][17]=padding('7','0')+padding('6','00')+padding('2','00')+padding('17','00');
thrAreaName[6][5][2][18] = "大埔鄉";
thrAreaID[6][5][2][18]=padding('7','0')+padding('6','00')+padding('2','00')+padding('18','00');

thrAreaName[6][6][1][1] = "里港鄉";
thrAreaID[6][6][1][1]=padding('7','0')+padding('7','00')+padding('1','00')+padding('1','00');
thrAreaName[6][6][1][2] = "高樹鄉";
thrAreaID[6][6][1][2]=padding('7','0')+padding('7','00')+padding('1','00')+padding('2','00');
thrAreaName[6][6][1][3] = "三地門鄉";
thrAreaID[6][6][1][3]=padding('7','0')+padding('7','00')+padding('1','00')+padding('3','00');
thrAreaName[6][6][1][4] = "霧臺鄉";
thrAreaID[6][6][1][4]=padding('7','0')+padding('7','00')+padding('1','00')+padding('4','00');
thrAreaName[6][6][1][5] = "九如鄉";
thrAreaID[6][6][1][5]=padding('7','0')+padding('7','00')+padding('1','00')+padding('5','00');
thrAreaName[6][6][1][6] = "鹽埔鄉";
thrAreaID[6][6][1][6]=padding('7','0')+padding('7','00')+padding('1','00')+padding('6','00');
thrAreaName[6][6][1][7] = "長治鄉";
thrAreaID[6][6][1][7]=padding('7','0')+padding('7','00')+padding('1','00')+padding('7','00');
thrAreaName[6][6][1][8] = "內埔鄉";
thrAreaID[6][6][1][8]=padding('7','0')+padding('7','00')+padding('1','00')+padding('8','00');
thrAreaName[6][6][1][9] = "瑪家鄉";
thrAreaID[6][6][1][9]=padding('7','0')+padding('7','00')+padding('1','00')+padding('9','00');
thrAreaName[6][6][1][10] = "泰武鄉";
thrAreaID[6][6][1][10]=padding('7','0')+padding('7','00')+padding('1','00')+padding('10','00');
thrAreaName[6][6][1][11] = "竹田鄉";
thrAreaID[6][6][1][11]=padding('7','0')+padding('7','00')+padding('1','00')+padding('11','00');
thrAreaName[6][6][1][12] = "萬巒鄉";
thrAreaID[6][6][1][12]=padding('7','0')+padding('7','00')+padding('1','00')+padding('12','00');
thrAreaName[6][6][1][13] = "潮州鎮";
thrAreaID[6][6][1][13]=padding('7','0')+padding('7','00')+padding('1','00')+padding('13','00');
thrAreaName[6][6][2][14] = "屏東市";
thrAreaID[6][6][2][14]=padding('7','0')+padding('7','00')+padding('2','00')+padding('14','00');
thrAreaName[6][6][2][15] = "麟洛鄉";
thrAreaID[6][6][2][15]=padding('7','0')+padding('7','00')+padding('2','00')+padding('15','00');
thrAreaName[6][6][2][16] = "萬丹鄉";
thrAreaID[6][6][2][16]=padding('7','0')+padding('7','00')+padding('2','00')+padding('16','00');
thrAreaName[6][6][3][17] = "新園鄉";
thrAreaID[6][6][3][17]=padding('7','0')+padding('7','00')+padding('3','00')+padding('17','00');
thrAreaName[6][6][3][18] = "崁頂鄉";
thrAreaID[6][6][3][18]=padding('7','0')+padding('7','00')+padding('3','00')+padding('18','00');
thrAreaName[6][6][3][19] = "南州鄉";
thrAreaID[6][6][3][19]=padding('7','0')+padding('7','00')+padding('3','00')+padding('19','00');
thrAreaName[6][6][3][20] = "新埤鄉";
thrAreaID[6][6][3][20]=padding('7','0')+padding('7','00')+padding('3','00')+padding('20','00');
thrAreaName[6][6][3][21] = "來義鄉";
thrAreaID[6][6][3][21]=padding('7','0')+padding('7','00')+padding('3','00')+padding('21','00');
thrAreaName[6][6][3][22] = "東港鎮";
thrAreaID[6][6][3][22]=padding('7','0')+padding('7','00')+padding('3','00')+padding('22','00');
thrAreaName[6][6][3][23] = "林邊鄉";
thrAreaID[6][6][3][23]=padding('7','0')+padding('7','00')+padding('3','00')+padding('23','00');
thrAreaName[6][6][3][24] = "佳冬鄉";
thrAreaID[6][6][3][24]=padding('7','0')+padding('7','00')+padding('3','00')+padding('24','00');
thrAreaName[6][6][3][25] = "枋寮鄉";
thrAreaID[6][6][3][25]=padding('7','0')+padding('7','00')+padding('3','00')+padding('25','00');
thrAreaName[6][6][3][26] = "春日鄉";
thrAreaID[6][6][3][26]=padding('7','0')+padding('7','00')+padding('3','00')+padding('26','00');
thrAreaName[6][6][3][27] = "枋山鄉";
thrAreaID[6][6][3][27]=padding('7','0')+padding('7','00')+padding('3','00')+padding('27','00');
thrAreaName[6][6][3][28] = "獅子鄉";
thrAreaID[6][6][3][28]=padding('7','0')+padding('7','00')+padding('3','00')+padding('28','00');
thrAreaName[6][6][3][29] = "牡丹鄉";
thrAreaID[6][6][3][29]=padding('7','0')+padding('7','00')+padding('3','00')+padding('29','00');
thrAreaName[6][6][3][30] = "車城鄉";
thrAreaID[6][6][3][30]=padding('7','0')+padding('7','00')+padding('3','00')+padding('30','00');
thrAreaName[6][6][3][31] = "滿州鄉";
thrAreaID[6][6][3][31]=padding('7','0')+padding('7','00')+padding('3','00')+padding('31','00');
thrAreaName[6][6][3][32] = "恆春鎮";
thrAreaID[6][6][3][32]=padding('7','0')+padding('7','00')+padding('3','00')+padding('32','00');
thrAreaName[6][6][3][33] = "琉球鄉";
thrAreaID[6][6][3][33]=padding('7','0')+padding('7','00')+padding('3','00')+padding('33','00');

thrAreaName[6][7][1][1] = "宜蘭市";
thrAreaID[6][7][1][1]=padding('7','0')+padding('8','00')+padding('1','00')+padding('1','00');
thrAreaName[6][7][1][2] = "羅東鎮";
thrAreaID[6][7][1][2]=padding('7','0')+padding('8','00')+padding('1','00')+padding('2','00');
thrAreaName[6][7][1][3] = "蘇澳鎮";
thrAreaID[6][7][1][3]=padding('7','0')+padding('8','00')+padding('1','00')+padding('3','00');
thrAreaName[6][7][1][4] = "頭城鎮";
thrAreaID[6][7][1][4]=padding('7','0')+padding('8','00')+padding('1','00')+padding('4','00');
thrAreaName[6][7][1][5] = "礁溪鄉";
thrAreaID[6][7][1][5]=padding('7','0')+padding('8','00')+padding('1','00')+padding('5','00');
thrAreaName[6][7][1][6] = "壯圍鄉";
thrAreaID[6][7][1][6]=padding('7','0')+padding('8','00')+padding('1','00')+padding('6','00');
thrAreaName[6][7][1][7] = "員山鄉";
thrAreaID[6][7][1][7]=padding('7','0')+padding('8','00')+padding('1','00')+padding('7','00');
thrAreaName[6][7][1][8] = "冬山鄉";
thrAreaID[6][7][1][8]=padding('7','0')+padding('8','00')+padding('1','00')+padding('8','00');
thrAreaName[6][7][1][9] = "五結鄉";
thrAreaID[6][7][1][9]=padding('7','0')+padding('8','00')+padding('1','00')+padding('9','00');
thrAreaName[6][7][1][10] = "三星鄉";
thrAreaID[6][7][1][10]=padding('7','0')+padding('8','00')+padding('1','00')+padding('10','00');
thrAreaName[6][7][1][11] = "大同鄉";
thrAreaID[6][7][1][11]=padding('7','0')+padding('8','00')+padding('1','00')+padding('11','00');
thrAreaName[6][7][1][12] = "南澳鄉";
thrAreaID[6][7][1][12]=padding('7','0')+padding('8','00')+padding('1','00')+padding('12','00');

thrAreaName[6][8][1][1] = "花蓮市";
thrAreaID[6][8][1][1]=padding('7','0')+padding('9','00')+padding('1','00')+padding('1','00');
thrAreaName[6][8][1][2] = "新城鄉";
thrAreaID[6][8][1][2]=padding('7','0')+padding('9','00')+padding('1','00')+padding('2','00');
thrAreaName[6][8][1][3] = "秀林鄉";
thrAreaID[6][8][1][3]=padding('7','0')+padding('9','00')+padding('1','00')+padding('3','00');
thrAreaName[6][8][1][4] = "吉安鄉";
thrAreaID[6][8][1][4]=padding('7','0')+padding('9','00')+padding('1','00')+padding('4','00');
thrAreaName[6][8][1][5] = "壽豐鄉";
thrAreaID[6][8][1][5]=padding('7','0')+padding('9','00')+padding('1','00')+padding('5','00');
thrAreaName[6][8][1][6] = "鳳林鎮";
thrAreaID[6][8][1][6]=padding('7','0')+padding('9','00')+padding('1','00')+padding('6','00');
thrAreaName[6][8][1][7] = "光復鄉";
thrAreaID[6][8][1][7]=padding('7','0')+padding('9','00')+padding('1','00')+padding('7','00');
thrAreaName[6][8][1][8] = "豐濱鄉";
thrAreaID[6][8][1][8]=padding('7','0')+padding('9','00')+padding('1','00')+padding('8','00');
thrAreaName[6][8][1][9] = "萬榮鄉";
thrAreaID[6][8][1][9]=padding('7','0')+padding('9','00')+padding('1','00')+padding('9','00');
thrAreaName[6][8][1][10] = "瑞穗鄉";
thrAreaID[6][8][1][10]=padding('7','0')+padding('9','00')+padding('1','00')+padding('10','00');
thrAreaName[6][8][1][11] = "玉里鎮";
thrAreaID[6][8][1][11]=padding('7','0')+padding('9','00')+padding('1','00')+padding('11','00');
thrAreaName[6][8][1][12] = "富里鄉";
thrAreaID[6][8][1][12]=padding('7','0')+padding('9','00')+padding('1','00')+padding('12','00');
thrAreaName[6][8][1][13] = "卓溪鄉";
thrAreaID[6][8][1][13]=padding('7','0')+padding('9','00')+padding('1','00')+padding('13','00');

thrAreaName[6][9][1][1] = "臺東市";
thrAreaID[6][9][1][1]=padding('7','0')+padding('10','00')+padding('1','00')+padding('1','00');
thrAreaName[6][9][1][2] = "成功鎮";
thrAreaID[6][9][1][2]=padding('7','0')+padding('10','00')+padding('1','00')+padding('2','00');
thrAreaName[6][9][1][3] = "關山鎮";
thrAreaID[6][9][1][3]=padding('7','0')+padding('10','00')+padding('1','00')+padding('3','00');
thrAreaName[6][9][1][4] = "卑南鄉";
thrAreaID[6][9][1][4]=padding('7','0')+padding('10','00')+padding('1','00')+padding('4','00');
thrAreaName[6][9][1][5] = "鹿野鄉";
thrAreaID[6][9][1][5]=padding('7','0')+padding('10','00')+padding('1','00')+padding('5','00');
thrAreaName[6][9][1][6] = "池上鄉";
thrAreaID[6][9][1][6]=padding('7','0')+padding('10','00')+padding('1','00')+padding('6','00');
thrAreaName[6][9][1][7] = "東河鄉";
thrAreaID[6][9][1][7]=padding('7','0')+padding('10','00')+padding('1','00')+padding('7','00');
thrAreaName[6][9][1][8] = "長濱鄉";
thrAreaID[6][9][1][8]=padding('7','0')+padding('10','00')+padding('1','00')+padding('8','00');
thrAreaName[6][9][1][9] = "太麻里鄉";
thrAreaID[6][9][1][9]=padding('7','0')+padding('10','00')+padding('1','00')+padding('9','00');
thrAreaName[6][9][1][10] = "大武鄉";
thrAreaID[6][9][1][10]=padding('7','0')+padding('10','00')+padding('1','00')+padding('10','00');
thrAreaName[6][9][1][11] = "綠島鄉";
thrAreaID[6][9][1][11]=padding('7','0')+padding('10','00')+padding('1','00')+padding('11','00');
thrAreaName[6][9][1][12] = "海端鄉";
thrAreaID[6][9][1][12]=padding('7','0')+padding('10','00')+padding('1','00')+padding('12','00');
thrAreaName[6][9][1][13] = "延平鄉";
thrAreaID[6][9][1][13]=padding('7','0')+padding('10','00')+padding('1','00')+padding('13','00');
thrAreaName[6][9][1][14] = "金峰鄉";
thrAreaID[6][9][1][14]=padding('7','0')+padding('10','00')+padding('1','00')+padding('14','00');
thrAreaName[6][9][1][15] = "達仁鄉";
thrAreaID[6][9][1][15]=padding('7','0')+padding('10','00')+padding('1','00')+padding('15','00');
thrAreaName[6][9][1][16] = "蘭嶼鄉";
thrAreaID[6][9][1][16]=padding('7','0')+padding('10','00')+padding('1','00')+padding('16','00');

thrAreaName[6][10][1][1] = "馬公市";
thrAreaID[6][10][1][1]=padding('7','0')+padding('11','00')+padding('1','00')+padding('1','00');
thrAreaName[6][10][1][2] = "湖西鄉";
thrAreaID[6][10][1][2]=padding('7','0')+padding('11','00')+padding('1','00')+padding('2','00');
thrAreaName[6][10][1][3] = "白沙鄉";
thrAreaID[6][10][1][3]=padding('7','0')+padding('11','00')+padding('1','00')+padding('3','00');
thrAreaName[6][10][1][4] = "西嶼鄉";
thrAreaID[6][10][1][4]=padding('7','0')+padding('11','00')+padding('1','00')+padding('4','00');
thrAreaName[6][10][1][5] = "望安鄉";
thrAreaID[6][10][1][5]=padding('7','0')+padding('11','00')+padding('1','00')+padding('5','00');
thrAreaName[6][10][1][6] = "七美鄉";
thrAreaID[6][10][1][6]=padding('7','0')+padding('11','00')+padding('1','00')+padding('6','00');

thrAreaName[6][11][1][1] = "中正區";
thrAreaID[6][11][1][1]=padding('7','0')+padding('12','00')+padding('1','00')+padding('1','00');
thrAreaName[6][11][1][2] = "信義區";
thrAreaID[6][11][1][2]=padding('7','0')+padding('12','00')+padding('1','00')+padding('2','00');
thrAreaName[6][11][1][3] = "仁愛區";
thrAreaID[6][11][1][3]=padding('7','0')+padding('12','00')+padding('1','00')+padding('3','00');
thrAreaName[6][11][1][4] = "中山區";
thrAreaID[6][11][1][4]=padding('7','0')+padding('12','00')+padding('1','00')+padding('4','00');
thrAreaName[6][11][1][5] = "安樂區";
thrAreaID[6][11][1][5]=padding('7','0')+padding('12','00')+padding('1','00')+padding('5','00');
thrAreaName[6][11][1][6] = "暖暖區";
thrAreaID[6][11][1][6]=padding('7','0')+padding('12','00')+padding('1','00')+padding('6','00');
thrAreaName[6][11][1][7] = "七堵區";
thrAreaID[6][11][1][7]=padding('7','0')+padding('12','00')+padding('1','00')+padding('7','00');

thrAreaName[6][12][1][1] = "東區";
thrAreaID[6][12][1][1]=padding('7','0')+padding('13','00')+padding('1','00')+padding('1','00');
thrAreaName[6][12][1][2] = "北區";
thrAreaID[6][12][1][2]=padding('7','0')+padding('13','00')+padding('1','00')+padding('2','00');
thrAreaName[6][12][1][3] = "香山區";
thrAreaID[6][12][1][3]=padding('7','0')+padding('13','00')+padding('1','00')+padding('3','00');

thrAreaName[6][13][1][1] = "東區";
thrAreaID[6][13][1][1]=padding('7','0')+padding('14','00')+padding('1','00')+padding('1','00');
thrAreaName[6][13][1][2] = "西區";
thrAreaID[6][13][1][2]=padding('7','0')+padding('14','00')+padding('1','00')+padding('2','00');

thrAreaName[7][0][1][1] = "金城鎮";
thrAreaID[7][0][1][1]=padding('8','0')+padding('1','00')+padding('1','00')+padding('1','00');
thrAreaName[7][0][1][2] = "金寧鄉";
thrAreaID[7][0][1][2]=padding('8','0')+padding('1','00')+padding('1','00')+padding('2','00');
thrAreaName[7][0][1][3] = "烈嶼鄉";
thrAreaID[7][0][1][3]=padding('8','0')+padding('1','00')+padding('1','00')+padding('3','00');
thrAreaName[7][0][1][4] = "烏坵鄉";
thrAreaID[7][0][1][4]=padding('8','0')+padding('1','00')+padding('1','00')+padding('4','00');
thrAreaName[7][0][1][5] = "金湖鎮";
thrAreaID[7][0][1][5]=padding('8','0')+padding('1','00')+padding('1','00')+padding('5','00');
thrAreaName[7][0][1][6] = "金沙鎮";
thrAreaID[7][0][1][6]=padding('8','0')+padding('1','00')+padding('1','00')+padding('6','00');

thrAreaName[7][1][1][1] = "南竿鄉";
thrAreaID[7][1][1][1]=padding('8','0')+padding('2','00')+padding('1','00')+padding('1','00');
thrAreaName[7][1][1][2] = "北竿鄉";
thrAreaID[7][1][1][2]=padding('8','0')+padding('2','00')+padding('1','00')+padding('2','00');
thrAreaName[7][1][1][3] = "莒光鄉";
thrAreaID[7][1][1][3]=padding('8','0')+padding('2','00')+padding('1','00')+padding('3','00');
thrAreaName[7][1][1][4] = "東引鄉";
thrAreaID[7][1][1][4]=padding('8','0')+padding('2','00')+padding('1','00')+padding('4','00');

/*
//Tree
BUILDALL = 0;
HIGHLIGHT = 1;
HIGHLIGHT_BG = '#ff7f00';
HIGHLIGHT_COLOR = 'white';
ICONPATH = '../images/';
PRESERVESTATE = 1;
STARTALLOPEN = 0;
USEFRAMES = 0;
USEICONS = 0; //
USETEXTLINKS = 1;
WRAPTEXT = 1;

foldersTree = gFld(menuTitle);
*/

var aux_arr_1 = new Array();
var aux_arr_1_a = new Array();
var aux_arr_2 = new Array();
var aux_arr_3 = new Array();
var aux_arr_4 = new Array();
var can_arr_1 = new Array();

//候選人得票數
/*
aux_1 = insFld(foldersTree, gFld(menuLevel_1, ""));
*/
var Mapping = util.Mapping;

//區域立委
var root_T1 = module.exports.root_T1 = new Mapping('區域立法委員');
//area_t1=insFld(aux_1, gFld(menuLevel_A, ""));

for(i=0;i<secCountyNumber.length;i++){
	for(j=0;j<secCountyNumber[i];j++){
		for(k=0;k<=secAreaNumber[i][j];k++){
			aux_arr_1_a[i] = new Array();
			for(l=0;l<thrAreaName[i][j][k].length;l++){
				if(thrAreaName[i][j][k][l]!="" && thrAreaName[i][j][k][l]!=undefined && thrAreaID[i][j][k][l]!=undefined){
					//縣市
					if(k==0 && l==0){
						aux_arr_1[i] = root_T1.addNode(new Mapping(thrAreaName[i][j][k][l]));
						//insFld(area_t1, gFld(thrAreaName[i][j][k][l], ""));
					}
					//選區 
					if(k!=0 && l==0){
						aux_arr_1_a[i][j] = aux_arr_1[i].addNode(new Mapping(
							thrAreaName[i][j][k][l],
							'http://www.cec.gov.tw/zh_TW/T1/' + orderBy+thrAreaID[i][j][k][l]+"0000"+"0000"+".html"
						));
						//insFld( aux_arr_1[i], gFld(thrAreaName[i][j][k][l], "../T1/"+orderBy+thrAreaID[i][j][k][l]+"0000"+"0000"+".html"));
					}
					//鄉鎮
					else  
					{
						if(k!=0 && l!=0 ){	
							if( aux_arr_1_a[i][j]!=null){
								aux_arr_1_a[i][j].addNode(new Mapping(
									thrAreaName[i][j][k][l],
									'http://www.cec.gov.tw/zh_TW/T1/' + orderBy+thrAreaID[i][j][k][l]+"0000"+"0000"+".html"
								));
								//insDoc(aux_arr_1_a[i][j], gLnk("S", thrAreaName[i][j][k][l], "../T1/"+orderBy+thrAreaID[i][j][k][l]+"0000"+"0000"+".html"));
							}
							else{
								aux_arr_1[i].addNode(new Mapping(
									thrAreaName[i][j][k][l],
									'http://www.cec.gov.tw/zh_TW/T1/' + orderBy+thrAreaID[i][j][k][l]+"0000"+"0000"+".html"
								));
								//insDoc(aux_arr_1[i], gLnk("S", thrAreaName[i][j][k][l], "../T1/"+orderBy+thrAreaID[i][j][k][l]+"0000"+"0000"+".html"));
							}
						}     
					}
				}
			}
		}
	} 
}
/*
//平地原住民立委
area_t2=insFld(aux_1, gFld(menuLevel_B, "../T2/"+orderBy+"000000000000000.html"));

for(i=0;i<secCountyNumber.length;i++){
	for(j=0;j<secCountyNumber[i];j++){
		for(k=0;k<secAreaName[i][j].length;k++)	{
			if(secAreaName[i][j][k]!=""){
				if(k==0){
					aux_arr_2[i] = insFld(area_t2, gFld(secAreaName[i][j][0], "../T2/"+orderBy+secAreaID[i][j][k]+".html"));
				}
				else{
					insDoc(aux_arr_2[i], gLnk("S", secAreaName[i][j][k], "../T2/"+orderBy+secAreaID[i][j][k]+".html"));
				}
			}
		}
	}
}
//山地原住民立委
area_t3=insFld(aux_1, gFld(menuLevel_C, "../T3/"+orderBy+"000000000000000.html"));

for(i=0;i<secCountyNumber.length;i++){
	for(j=0;j<secCountyNumber[i];j++){
		for(k=0;k<secAreaName[i][j].length;k++)	{
			if(secAreaName[i][j][k]!=""){
				if(k==0){
					aux_arr_3[i] = insFld(area_t3, gFld(secAreaName[i][j][0], "../T3/"+orderBy+secAreaID[i][j][k]+".html"));
				}
				else{
					insDoc(aux_arr_3[i], gLnk("S", secAreaName[i][j][k], "../T3/"+orderBy+secAreaID[i][j][k]+".html"));
				}
			}
		}
	}
}
*/
//不分區
var root_T4 = module.exports.root_T4 = new Mapping('政黨得票數', "http://www.cec.gov.tw/zh_TW/T4/"+orderBy+"000000000000000.html");
//aux_2 = insFld(foldersTree, gFld(menuLevel_2, "../T4/"+orderBy+"000000000000000.html"));

for(i=0;i<secCountyNumber.length;i++){
	for(j=0;j<secCountyNumber[i];j++){
		for(k=0;k<secAreaName[i][j].length;k++)	{
			if(secAreaName[i][j][k]!=""){
				if(k==0){
					//aux_arr_4[i] = insFld(aux_2, gFld(secAreaName[i][j][0], "../T4/"+orderBy+secAreaID[i][j][k]+".html"));
					aux_arr_4[i] = root_T4.addNode(new Mapping(
						secAreaName[i][j][0],
						'http://www.cec.gov.tw/zh_TW/T4/' + orderBy+secAreaID[i][j][k]+".html"
					));
				}
				else{
					//insDoc(aux_arr_4[i], gLnk("S", secAreaName[i][j][k], "../T4/"+orderBy+secAreaID[i][j][k]+".html"));
					aux_arr_4[i].addNode(new Mapping(
						secAreaName[i][j][0],
						'http://www.cec.gov.tw/zh_TW/T4/' + orderBy+secAreaID[i][j][k]+".html"
					));
				}
			}
		}
	}
}
/*
//候選人簡歷
aux_3 = insFld(foldersTree, gFld(menuLevel_3, ""));
//區域立委
can_t1=insFld(aux_3, gFld(menuLevel_A, ""));
for(i=0;i<secCountyNumber.length;i++){
	for(j=0;j<secCountyNumber[i];j++){
		for(k=0;k<=secAreaNumber[i][j];k++){
			aux_arr_1_a[i] = new Array();
			for(l=0;l<thrAreaName[i][j][k].length;l++){
				if(thrAreaName[i][j][k][l]!="" && thrAreaName[i][j][k][l]!=undefined && thrAreaID[i][j][k][l]!=undefined){
					if(k==0 && l==0){ //縣市
						can_arr_1[i] = insFld(can_t1, gFld(thrAreaName[i][j][k][l]));
					}
					//選區
					if(k!=0 && l==0){
						aux_arr_1_a[i][j] = insFld( can_arr_1[i], gFld(thrAreaName[i][j][k][l], "../CT1/"+thrAreaID[i][j][k][l]+"0000"+"0000"+".html"));
					}
				}
			}
		}
	}
}
//平地原住民立委
can_t2=insFld(aux_3, gFld(menuLevel_B, "../CT2/000000000000000.html"));
//山地原住民立委 
can_t3=insFld(aux_3, gFld(menuLevel_C, "../CT3/000000000000000.html"));
can_t4=insFld(aux_3, gFld(menuLevel_D, ""));

var partyName=new Array();
var partyID=new Array();

partyName[0]= "軍公教聯盟黨";
partyName[1]= "中華統一促進黨";
partyName[2]= "無黨團結聯盟";
partyName[3]= "信心希望聯盟";
partyName[4]= "親民黨";
partyName[5]= "中國國民黨";
partyName[6] = "和平鴿聯盟黨";
partyName[7] = "健保免費連線";
partyName[8] = "台灣團結聯盟";
partyName[9] = "民主進步黨";
partyName[10] = "新黨";
partyName[11] = "時代力量";
partyName[12] = "綠黨社會民主黨聯盟";
partyName[13] = "樹黨";
partyName[14] = "台灣獨立黨";
partyName[15] = "自由台灣黨";
partyName[16] = "民國黨";
partyName[17] = "大愛憲改聯盟";

partyID[0]=258;
partyID[1]=113;
partyID[2]=106;
partyID[3]=283;
partyID[4]=90;
partyID[5]=1;
partyID[6]=266;
partyID[7]=189;
partyID[8]=95;
partyID[9]=16;
partyID[10]=74;
partyID[11]=267;
partyID[12]=281;
partyID[13]=259;
partyID[14]=273;
partyID[15]=272;
partyID[16]=268;
partyID[17]=134;

var partyOrder=new Array(9,4,15,6,0,16,3,1,5,8,11,17,12,14,2,10,7,13);
for(i=0;i<partyOrder.length;i++){
	insDoc(can_t4,gLnk("S",partyName[partyOrder[i]],"../CT4/"+partyID[partyOrder[i]]+".html"));
}

//不分區當選名額
aux_4 = insDoc(foldersTree, gFld(menuLevel_4, "../FP/"+orderBy+"000000000000000.html"));

//不分區當選註記
aux_5 = insFld(foldersTree, gFld(menuLevel_5, ""));
for(i=0;i<partyOrder.length;i++){
	insDoc(aux_5, gLnk("S", partyName[partyOrder[i]], "../FR/"+partyID[partyOrder[i]]+".html"));
}

//當選人分析
aux_6 = insFld(foldersTree, gFld(menuLevel_6, ""));
//全部
var FT_ALL=insFld(aux_6, gFld(strAll, "../FT/T000000000000000.html"));
//區域立委
var FT_t1=insFld(aux_6, gFld(menuLevel_A,  "../FT/T1000000000000000.html"));
var FT_arr_1_a = new Array();

for(i=0;i<secCountyNumber.length;i++){
	for(j=0;j<secCountyNumber[i];j++){
		for(k=0;k<=secAreaNumber[i][j];k++){
			FT_arr_1_a[i] = new Array();
			for(l=0;l<thrAreaName[i][j][k].length;l++){
				if(thrAreaName[i][j][k][l]!="" && thrAreaName[i][j][k][l]!=undefined && thrAreaID[i][j][k][l]!=undefined){
					if(k==0 && l==0){ //縣 市
						FT_arr_1_a[i] = insFld(FT_t1, gFld(thrAreaName[i][j][k][l], "../FT/T1"+thrAreaID[i][j][k][l]+"0000"+"0000"+".html"));
					}
				}
			}
		}
	}
}
//平地原住民立委
var FT_t2=insFld(aux_6, gFld(menuLevel_B, "../FT/T2000000000000000.html"));
//山地原住民立委
var FT_t3=insFld(aux_6, gFld(menuLevel_C, "../FT/T3000000000000000.html"));
//不分區
var FT_t4=insFld(aux_6, gFld(menuLevel_D, "../FT/T4000000000000000.html"));


//選舉概況
aux_7 = insFld(foldersTree, gFld(menuLevel_7, ""));
//區域立委
var s_t1=insFld(aux_7, gFld(menuLevel_A,"../S1/000000000000000.html" ));
var s_arr_1= new Array();
var s_arr_1_a = new Array();
for(i=0;i<secCountyNumber.length;i++){
        for(j=0;j<secCountyNumber[i];j++){
                for(k=0;k<=secAreaNumber[i][j];k++){
			s_arr_1_a[i] = new Array();
			for(l=0;l<thrAreaName[i][j][k].length;l++){
				if(thrAreaName[i][j][k][l]!="" && thrAreaName[i][j][k][l]!=undefined && thrAreaID[i][j][k][l]!=undefined){
					//縣市
					if(k==0 && l==0)
						s_arr_1[i] = insFld(s_t1, gFld(thrAreaName[i][j][k][l], "../S1/"+thrAreaID[i][j][k][l]+"0000"+"0000"+".html"));
					//選區
					if(k!=0 && l==0){
						s_arr_1_a[i][j] = insFld( s_arr_1[i], gFld(thrAreaName[i][j][k][l], "../S1/"+thrAreaID[i][j][k][l]+"0000"+"0000"+".html"));
					}
					//鄉鎮
					else
					{
						if(k!=0 && l!=0 ){
							if(s_arr_1_a[i][j]!=null)
								insDoc(s_arr_1_a[i][j], gLnk("S", thrAreaName[i][j][k][l], "../S1/"+thrAreaID[i][j][k][l]+"0000"+"0000"+".html"));
							else
								insDoc(s_arr_1[i], gLnk("S", thrAreaName[i][j][k][l], "../S1/"+thrAreaID[i][j][k][l]+"0000"+"0000"+".html"));
						}
					}
				}
			}
		}
	}
}

//平地原住民立委
var s_t2=insFld(aux_7, gFld(menuLevel_B, "../S2/000000000000000.html"));
var s_arr_2=new Array();

for(i=0;i<secCountyNumber.length;i++){
        for(j=0;j<secCountyNumber[i];j++){
                for(k=0;k<secAreaName[i][j].length;k++) {
			if(secAreaName[i][j][k]!=""){
				if(k==0){
					s_arr_2[i] = insFld(s_t2, gFld(secAreaName[i][j][0], "../S2/"+secAreaID[i][j][k]+".html"));
				}
				else{
					insDoc(s_arr_2[i], gLnk("S", secAreaName[i][j][k], "../S2/"+secAreaID[i][j][k]+".html"));
				}
			}
		}
	}
}
//山地原住民立委
var s_t3=insFld(aux_7, gFld(menuLevel_C, "../S3/000000000000000.html"));
var s_arr_3=new Array();
for(i=0;i<secCountyNumber.length;i++){
        for(j=0;j<secCountyNumber[i];j++){
                for(k=0;k<secAreaName[i][j].length;k++) {
			if(secAreaName[i][j][k]!=""){
				if(k==0){
					s_arr_3[i] = insFld(s_t3, gFld(secAreaName[i][j][0], "../S3/"+secAreaID[i][j][k]+".html"));
				}
				else{
					insDoc(s_arr_3[i], gLnk("S", secAreaName[i][j][k], "../S3/"+secAreaID[i][j][k]+".html"));
				}
			}
		}
	}
}
//不分區
var s_t4=insFld(aux_7, gFld(menuLevel_D, "../S4/000000000000000.html"));
var s_arr_4=new Array();
for(i=0;i<secCountyNumber.length;i++){
        for(j=0;j<secCountyNumber[i];j++){
                for(k=0;k<secAreaName[i][j].length;k++) {
			if(secAreaName[i][j][k]!=""){
				if(k==0){
					s_arr_4[i] = insFld(s_t4, gFld(secAreaName[i][j][0], "../S4/"+secAreaID[i][j][k]+".html"));
				}
				else{
					insDoc(s_arr_4[i], gLnk("S", secAreaName[i][j][k], "../S4/"+secAreaID[i][j][k]+".html"));
				}
			}
		}
	}
}
*/
