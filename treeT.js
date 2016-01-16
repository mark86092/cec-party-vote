//var orderBy = checkOrder();
function padding (str, pat) {
	return pat.substr(0, (pat.length-str.length) ) + str.toString(); 
}
var secAreaNumber = new Array(); //選區數
var secCountyNumber = new Array(); //鄉鎮數

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


//政黨得票數 不分區

var data = [];
for(i=0; i<secAreaName.length; i++){
	for(j=0; j<secAreaName[i].length; j++){
		var nodes = [];
		data.push({
			name: secAreaName[i][j][0],
			link: "http://www.cec.gov.tw/zh_TW/T4/"+'n'+secAreaID[i][j][0]+".html",
			nodes: nodes
		});
		for(k=1; k<secAreaName[i][j].length; k++) {
			nodes.push({
				name: secAreaName[i][j][k],
				link: "http://www.cec.gov.tw/zh_TW/T4/"+'n'+secAreaID[i][j][k]+".html"
			});
		}
	}
}

module.exports = data;