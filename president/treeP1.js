var util = require('./util'),
	Mapping = util.Mapping,
	padding = util.padding;

var firAreaName=new Array();

firAreaName[0]='臺北市';
firAreaName[1]='新北市';
firAreaName[2]='桃園市';
firAreaName[3]='臺中市';
firAreaName[4]='臺南市';
firAreaName[5]='高雄市';
firAreaName[6]='宜蘭縣';
firAreaName[7]='新竹縣';
firAreaName[8]='苗栗縣';
firAreaName[9]='彰化縣';
firAreaName[10]='南投縣';
firAreaName[11]='雲林縣';
firAreaName[12]='嘉義縣';
firAreaName[13]='屏東縣';
firAreaName[14]='臺東縣';
firAreaName[15]='花蓮縣';
firAreaName[16]='澎湖縣';
firAreaName[17]='基隆市';
firAreaName[18]='新竹市';
firAreaName[19]='嘉義市';
firAreaName[20]='金門縣';
firAreaName[21]='連江縣';

var firAreaID=new Array();

firAreaID[0]='100000000000000';
firAreaID[1]='200000000000000';
firAreaID[2]='300000000000000';
firAreaID[3]='400000000000000';
firAreaID[4]='500000000000000';
firAreaID[5]='600000000000000';
firAreaID[6]='708000000000000';
firAreaID[7]='701000000000000';
firAreaID[8]='702000000000000';
firAreaID[9]='703000000000000';
firAreaID[10]='704000000000000';
firAreaID[11]='705000000000000';
firAreaID[12]='706000000000000';
firAreaID[13]='707000000000000';
firAreaID[14]='710000000000000';
firAreaID[15]='709000000000000';
firAreaID[16]='711000000000000';
firAreaID[17]='712000000000000';
firAreaID[18]='713000000000000';
firAreaID[19]='714000000000000';
firAreaID[20]='801000000000000';
firAreaID[21]='802000000000000';

var thrAreaName=new Array(); 
var thrAreaID=new Array();

for (i=0;i<firAreaName.length;i++){
	thrAreaName[i]=new Array();
	thrAreaID[i]=new Array();
}

//臺北市
thrAreaName[0][1]='北投區'
thrAreaID[0][1]=padding('1','0')+padding('0','00')+'00'+padding('1','00');
thrAreaName[0][2]='士林區'
thrAreaID[0][2]=padding('1','0')+padding('0','00')+'00'+padding('2','00');
thrAreaName[0][3]='大同區'
thrAreaID[0][3]=padding('1','0')+padding('0','00')+'00'+padding('3','00');
thrAreaName[0][4]='中山區'
thrAreaID[0][4]=padding('1','0')+padding('0','00')+'00'+padding('4','00');
thrAreaName[0][5]='松山區'
thrAreaID[0][5]=padding('1','0')+padding('0','00')+'00'+padding('5','00');
thrAreaName[0][6]='內湖區'
thrAreaID[0][6]=padding('1','0')+padding('0','00')+'00'+padding('6','00');
thrAreaName[0][7]='南港區'
thrAreaID[0][7]=padding('1','0')+padding('0','00')+'00'+padding('7','00');
thrAreaName[0][8]='萬華區'
thrAreaID[0][8]=padding('1','0')+padding('0','00')+'00'+padding('8','00');
thrAreaName[0][9]='中正區'
thrAreaID[0][9]=padding('1','0')+padding('0','00')+'00'+padding('9','00');
thrAreaName[0][10]='大安區'
thrAreaID[0][10]=padding('1','0')+padding('0','00')+'00'+padding('10','00');
thrAreaName[0][11]='信義區'
thrAreaID[0][11]=padding('1','0')+padding('0','00')+'00'+padding('11','00');
thrAreaName[0][12]='文山區'
thrAreaID[0][12]=padding('1','0')+padding('0','00')+'00'+padding('12','00');
thrAreaName[1][1]='石門區'
thrAreaID[1][1]=padding('2','0')+padding('0','00')+'00'+padding('1','00');
thrAreaName[1][2]='三芝區'
thrAreaID[1][2]=padding('2','0')+padding('0','00')+'00'+padding('2','00');
thrAreaName[1][3]='淡水區'
thrAreaID[1][3]=padding('2','0')+padding('0','00')+'00'+padding('3','00');
thrAreaName[1][4]='八里區'
thrAreaID[1][4]=padding('2','0')+padding('0','00')+'00'+padding('4','00');
thrAreaName[1][5]='林口區'
thrAreaID[1][5]=padding('2','0')+padding('0','00')+'00'+padding('5','00');
thrAreaName[1][6]='泰山區'
thrAreaID[1][6]=padding('2','0')+padding('0','00')+'00'+padding('6','00');
thrAreaName[1][7]='五股區'
thrAreaID[1][7]=padding('2','0')+padding('0','00')+'00'+padding('7','00');
thrAreaName[1][8]='蘆洲區'
thrAreaID[1][8]=padding('2','0')+padding('0','00')+'00'+padding('8','00');
thrAreaName[1][9]='三重區'
thrAreaID[1][9]=padding('2','0')+padding('0','00')+'00'+padding('9','00');
thrAreaName[1][10]='新莊區'
thrAreaID[1][10]=padding('2','0')+padding('0','00')+'00'+padding('10','00');
thrAreaName[1][11]='樹林區'
thrAreaID[1][11]=padding('2','0')+padding('0','00')+'00'+padding('11','00');
thrAreaName[1][12]='鶯歌區'
thrAreaID[1][12]=padding('2','0')+padding('0','00')+'00'+padding('12','00');
thrAreaName[1][13]='板橋區'
thrAreaID[1][13]=padding('2','0')+padding('0','00')+'00'+padding('13','00');
thrAreaName[1][14]='中和區'
thrAreaID[1][14]=padding('2','0')+padding('0','00')+'00'+padding('14','00');
thrAreaName[1][15]='永和區'
thrAreaID[1][15]=padding('2','0')+padding('0','00')+'00'+padding('15','00');
thrAreaName[1][16]='土城區'
thrAreaID[1][16]=padding('2','0')+padding('0','00')+'00'+padding('16','00');
thrAreaName[1][17]='三峽區'
thrAreaID[1][17]=padding('2','0')+padding('0','00')+'00'+padding('17','00');
thrAreaName[1][18]='新店區'
thrAreaID[1][18]=padding('2','0')+padding('0','00')+'00'+padding('18','00');
thrAreaName[1][19]='深坑區'
thrAreaID[1][19]=padding('2','0')+padding('0','00')+'00'+padding('19','00');
thrAreaName[1][20]='石碇區'
thrAreaID[1][20]=padding('2','0')+padding('0','00')+'00'+padding('20','00');
thrAreaName[1][21]='坪林區'
thrAreaID[1][21]=padding('2','0')+padding('0','00')+'00'+padding('21','00');
thrAreaName[1][22]='烏來區'
thrAreaID[1][22]=padding('2','0')+padding('0','00')+'00'+padding('22','00');
thrAreaName[1][23]='金山區'
thrAreaID[1][23]=padding('2','0')+padding('0','00')+'00'+padding('23','00');
thrAreaName[1][24]='萬里區'
thrAreaID[1][24]=padding('2','0')+padding('0','00')+'00'+padding('24','00');
thrAreaName[1][25]='汐止區'
thrAreaID[1][25]=padding('2','0')+padding('0','00')+'00'+padding('25','00');
thrAreaName[1][26]='平溪區'
thrAreaID[1][26]=padding('2','0')+padding('0','00')+'00'+padding('26','00');
thrAreaName[1][27]='瑞芳區'
thrAreaID[1][27]=padding('2','0')+padding('0','00')+'00'+padding('27','00');
thrAreaName[1][28]='雙溪區'
thrAreaID[1][28]=padding('2','0')+padding('0','00')+'00'+padding('28','00');
thrAreaName[1][29]='貢寮區'
thrAreaID[1][29]=padding('2','0')+padding('0','00')+'00'+padding('29','00');
thrAreaName[2][1]='蘆竹區'
thrAreaID[2][1]=padding('3','0')+padding('0','00')+'00'+padding('1','00');
thrAreaName[2][2]='龜山區'
thrAreaID[2][2]=padding('3','0')+padding('0','00')+'00'+padding('2','00');
thrAreaName[2][3]='桃園區'
thrAreaID[2][3]=padding('3','0')+padding('0','00')+'00'+padding('3','00');
thrAreaName[2][4]='大園區'
thrAreaID[2][4]=padding('3','0')+padding('0','00')+'00'+padding('4','00');
thrAreaName[2][5]='觀音區'
thrAreaID[2][5]=padding('3','0')+padding('0','00')+'00'+padding('5','00');
thrAreaName[2][6]='新屋區'
thrAreaID[2][6]=padding('3','0')+padding('0','00')+'00'+padding('6','00');
thrAreaName[2][7]='楊梅區'
thrAreaID[2][7]=padding('3','0')+padding('0','00')+'00'+padding('7','00');
thrAreaName[2][8]='中壢區'
thrAreaID[2][8]=padding('3','0')+padding('0','00')+'00'+padding('8','00');
thrAreaName[2][9]='平鎮區'
thrAreaID[2][9]=padding('3','0')+padding('0','00')+'00'+padding('9','00');
thrAreaName[2][10]='龍潭區'
thrAreaID[2][10]=padding('3','0')+padding('0','00')+'00'+padding('10','00');
thrAreaName[2][11]='八德區'
thrAreaID[2][11]=padding('3','0')+padding('0','00')+'00'+padding('11','00');
thrAreaName[2][12]='大溪區'
thrAreaID[2][12]=padding('3','0')+padding('0','00')+'00'+padding('12','00');
thrAreaName[2][13]='復興區'
thrAreaID[2][13]=padding('3','0')+padding('0','00')+'00'+padding('13','00');
thrAreaName[3][1]='大甲區'
thrAreaID[3][1]=padding('4','0')+padding('0','00')+'00'+padding('1','00');
thrAreaName[3][2]='大安區'
thrAreaID[3][2]=padding('4','0')+padding('0','00')+'00'+padding('2','00');
thrAreaName[3][3]='外埔區'
thrAreaID[3][3]=padding('4','0')+padding('0','00')+'00'+padding('3','00');
thrAreaName[3][4]='清水區'
thrAreaID[3][4]=padding('4','0')+padding('0','00')+'00'+padding('4','00');
thrAreaName[3][5]='梧棲區'
thrAreaID[3][5]=padding('4','0')+padding('0','00')+'00'+padding('5','00');
thrAreaName[3][6]='沙鹿區'
thrAreaID[3][6]=padding('4','0')+padding('0','00')+'00'+padding('6','00');
thrAreaName[3][7]='龍井區'
thrAreaID[3][7]=padding('4','0')+padding('0','00')+'00'+padding('7','00');
thrAreaName[3][8]='大肚區'
thrAreaID[3][8]=padding('4','0')+padding('0','00')+'00'+padding('8','00');
thrAreaName[3][9]='烏日區'
thrAreaID[3][9]=padding('4','0')+padding('0','00')+'00'+padding('9','00');
thrAreaName[3][10]='霧峰區'
thrAreaID[3][10]=padding('4','0')+padding('0','00')+'00'+padding('10','00');
thrAreaName[3][11]='大里區'
thrAreaID[3][11]=padding('4','0')+padding('0','00')+'00'+padding('11','00');
thrAreaName[3][12]='后里區'
thrAreaID[3][12]=padding('4','0')+padding('0','00')+'00'+padding('12','00');
thrAreaName[3][13]='神岡區'
thrAreaID[3][13]=padding('4','0')+padding('0','00')+'00'+padding('13','00');
thrAreaName[3][14]='大雅區'
thrAreaID[3][14]=padding('4','0')+padding('0','00')+'00'+padding('14','00');
thrAreaName[3][15]='潭子區'
thrAreaID[3][15]=padding('4','0')+padding('0','00')+'00'+padding('15','00');
thrAreaName[3][16]='西屯區'
thrAreaID[3][16]=padding('4','0')+padding('0','00')+'00'+padding('16','00');
thrAreaName[3][17]='南屯區'
thrAreaID[3][17]=padding('4','0')+padding('0','00')+'00'+padding('17','00');
thrAreaName[3][18]='北屯區'
thrAreaID[3][18]=padding('4','0')+padding('0','00')+'00'+padding('18','00');
thrAreaName[3][19]='北區'
thrAreaID[3][19]=padding('4','0')+padding('0','00')+'00'+padding('19','00');
thrAreaName[3][20]='西區'
thrAreaID[3][20]=padding('4','0')+padding('0','00')+'00'+padding('20','00');
thrAreaName[3][21]='中區'
thrAreaID[3][21]=padding('4','0')+padding('0','00')+'00'+padding('21','00');
thrAreaName[3][22]='東區'
thrAreaID[3][22]=padding('4','0')+padding('0','00')+'00'+padding('22','00');
thrAreaName[3][23]='南區'
thrAreaID[3][23]=padding('4','0')+padding('0','00')+'00'+padding('23','00');
thrAreaName[3][24]='太平區'
thrAreaID[3][24]=padding('4','0')+padding('0','00')+'00'+padding('24','00');
thrAreaName[3][25]='豐原區'
thrAreaID[3][25]=padding('4','0')+padding('0','00')+'00'+padding('25','00');
thrAreaName[3][26]='石岡區'
thrAreaID[3][26]=padding('4','0')+padding('0','00')+'00'+padding('26','00');
thrAreaName[3][27]='新社區'
thrAreaID[3][27]=padding('4','0')+padding('0','00')+'00'+padding('27','00');
thrAreaName[3][28]='東勢區'
thrAreaID[3][28]=padding('4','0')+padding('0','00')+'00'+padding('28','00');
thrAreaName[3][29]='和平區'
thrAreaID[3][29]=padding('4','0')+padding('0','00')+'00'+padding('29','00');
thrAreaName[4][1]='後壁區'
thrAreaID[4][1]=padding('5','0')+padding('0','00')+'00'+padding('1','00');
thrAreaName[4][2]='白河區'
thrAreaID[4][2]=padding('5','0')+padding('0','00')+'00'+padding('2','00');
thrAreaName[4][3]='北門區'
thrAreaID[4][3]=padding('5','0')+padding('0','00')+'00'+padding('3','00');
thrAreaName[4][4]='學甲區'
thrAreaID[4][4]=padding('5','0')+padding('0','00')+'00'+padding('4','00');
thrAreaName[4][5]='鹽水區'
thrAreaID[4][5]=padding('5','0')+padding('0','00')+'00'+padding('5','00');
thrAreaName[4][6]='新營區'
thrAreaID[4][6]=padding('5','0')+padding('0','00')+'00'+padding('6','00');
thrAreaName[4][7]='柳營區'
thrAreaID[4][7]=padding('5','0')+padding('0','00')+'00'+padding('7','00');
thrAreaName[4][8]='東山區'
thrAreaID[4][8]=padding('5','0')+padding('0','00')+'00'+padding('8','00');
thrAreaName[4][9]='將軍區'
thrAreaID[4][9]=padding('5','0')+padding('0','00')+'00'+padding('9','00');
thrAreaName[4][10]='下營區'
thrAreaID[4][10]=padding('5','0')+padding('0','00')+'00'+padding('10','00');
thrAreaName[4][11]='六甲區'
thrAreaID[4][11]=padding('5','0')+padding('0','00')+'00'+padding('11','00');
thrAreaName[4][12]='官田區'
thrAreaID[4][12]=padding('5','0')+padding('0','00')+'00'+padding('12','00');
thrAreaName[4][13]='七股區'
thrAreaID[4][13]=padding('5','0')+padding('0','00')+'00'+padding('13','00');
thrAreaName[4][14]='佳里區'
thrAreaID[4][14]=padding('5','0')+padding('0','00')+'00'+padding('14','00');
thrAreaName[4][15]='麻豆區'
thrAreaID[4][15]=padding('5','0')+padding('0','00')+'00'+padding('15','00');
thrAreaName[4][16]='善化區'
thrAreaID[4][16]=padding('5','0')+padding('0','00')+'00'+padding('16','00');
thrAreaName[4][17]='大內區'
thrAreaID[4][17]=padding('5','0')+padding('0','00')+'00'+padding('17','00');
thrAreaName[4][18]='玉井區'
thrAreaID[4][18]=padding('5','0')+padding('0','00')+'00'+padding('18','00');
thrAreaName[4][19]='楠西區'
thrAreaID[4][19]=padding('5','0')+padding('0','00')+'00'+padding('19','00');
thrAreaName[4][20]='西港區'
thrAreaID[4][20]=padding('5','0')+padding('0','00')+'00'+padding('20','00');
thrAreaName[4][21]='安定區'
thrAreaID[4][21]=padding('5','0')+padding('0','00')+'00'+padding('21','00');
thrAreaName[4][22]='新市區'
thrAreaID[4][22]=padding('5','0')+padding('0','00')+'00'+padding('22','00');
thrAreaName[4][23]='山上區'
thrAreaID[4][23]=padding('5','0')+padding('0','00')+'00'+padding('23','00');
thrAreaName[4][24]='新化區'
thrAreaID[4][24]=padding('5','0')+padding('0','00')+'00'+padding('24','00');
thrAreaName[4][25]='左鎮區'
thrAreaID[4][25]=padding('5','0')+padding('0','00')+'00'+padding('25','00');
thrAreaName[4][26]='南化區'
thrAreaID[4][26]=padding('5','0')+padding('0','00')+'00'+padding('26','00');
thrAreaName[4][27]='安南區'
thrAreaID[4][27]=padding('5','0')+padding('0','00')+'00'+padding('27','00');
thrAreaName[4][28]='北區'
thrAreaID[4][28]=padding('5','0')+padding('0','00')+'00'+padding('28','00');
thrAreaName[4][29]='中西區'
thrAreaID[4][29]=padding('5','0')+padding('0','00')+'00'+padding('29','00');
thrAreaName[4][30]='安平區'
thrAreaID[4][30]=padding('5','0')+padding('0','00')+'00'+padding('30','00');
thrAreaName[4][31]='南區'
thrAreaID[4][31]=padding('5','0')+padding('0','00')+'00'+padding('31','00');
thrAreaName[4][32]='東區'
thrAreaID[4][32]=padding('5','0')+padding('0','00')+'00'+padding('32','00');
thrAreaName[4][33]='永康區'
thrAreaID[4][33]=padding('5','0')+padding('0','00')+'00'+padding('33','00');
thrAreaName[4][34]='仁德區'
thrAreaID[4][34]=padding('5','0')+padding('0','00')+'00'+padding('34','00');
thrAreaName[4][35]='歸仁區'
thrAreaID[4][35]=padding('5','0')+padding('0','00')+'00'+padding('35','00');
thrAreaName[4][36]='關廟區'
thrAreaID[4][36]=padding('5','0')+padding('0','00')+'00'+padding('36','00');
thrAreaName[4][37]='龍崎區'
thrAreaID[4][37]=padding('5','0')+padding('0','00')+'00'+padding('37','00');
thrAreaName[5][1]='桃源區'
thrAreaID[5][1]=padding('6','0')+padding('0','00')+'00'+padding('1','00');
thrAreaName[5][2]='那瑪夏區'
thrAreaID[5][2]=padding('6','0')+padding('0','00')+'00'+padding('2','00');
thrAreaName[5][3]='甲仙區'
thrAreaID[5][3]=padding('6','0')+padding('0','00')+'00'+padding('3','00');
thrAreaName[5][4]='六龜區'
thrAreaID[5][4]=padding('6','0')+padding('0','00')+'00'+padding('4','00');
thrAreaName[5][5]='杉林區'
thrAreaID[5][5]=padding('6','0')+padding('0','00')+'00'+padding('5','00');
thrAreaName[5][6]='內門區'
thrAreaID[5][6]=padding('6','0')+padding('0','00')+'00'+padding('6','00');
thrAreaName[5][7]='旗山區'
thrAreaID[5][7]=padding('6','0')+padding('0','00')+'00'+padding('7','00');
thrAreaName[5][8]='美濃區'
thrAreaID[5][8]=padding('6','0')+padding('0','00')+'00'+padding('8','00');
thrAreaName[5][9]='茂林區'
thrAreaID[5][9]=padding('6','0')+padding('0','00')+'00'+padding('9','00');
thrAreaName[5][10]='阿蓮區'
thrAreaID[5][10]=padding('6','0')+padding('0','00')+'00'+padding('10','00');
thrAreaName[5][11]='田寮區'
thrAreaID[5][11]=padding('6','0')+padding('0','00')+'00'+padding('11','00');
thrAreaName[5][12]='燕巢區'
thrAreaID[5][12]=padding('6','0')+padding('0','00')+'00'+padding('12','00');
thrAreaName[5][13]='大社區'
thrAreaID[5][13]=padding('6','0')+padding('0','00')+'00'+padding('13','00');
thrAreaName[5][14]='大樹區'
thrAreaID[5][14]=padding('6','0')+padding('0','00')+'00'+padding('14','00');
thrAreaName[5][15]='茄萣區'
thrAreaID[5][15]=padding('6','0')+padding('0','00')+'00'+padding('15','00');
thrAreaName[5][16]='湖內區'
thrAreaID[5][16]=padding('6','0')+padding('0','00')+'00'+padding('16','00');
thrAreaName[5][17]='路竹區'
thrAreaID[5][17]=padding('6','0')+padding('0','00')+'00'+padding('17','00');
thrAreaName[5][18]='永安區'
thrAreaID[5][18]=padding('6','0')+padding('0','00')+'00'+padding('18','00');
thrAreaName[5][19]='岡山區'
thrAreaID[5][19]=padding('6','0')+padding('0','00')+'00'+padding('19','00');
thrAreaName[5][20]='彌陀區'
thrAreaID[5][20]=padding('6','0')+padding('0','00')+'00'+padding('20','00');
thrAreaName[5][21]='梓官區'
thrAreaID[5][21]=padding('6','0')+padding('0','00')+'00'+padding('21','00');
thrAreaName[5][22]='橋頭區'
thrAreaID[5][22]=padding('6','0')+padding('0','00')+'00'+padding('22','00');
thrAreaName[5][23]='楠梓區'
thrAreaID[5][23]=padding('6','0')+padding('0','00')+'00'+padding('23','00');
thrAreaName[5][24]='左營區'
thrAreaID[5][24]=padding('6','0')+padding('0','00')+'00'+padding('24','00');
thrAreaName[5][25]='仁武區'
thrAreaID[5][25]=padding('6','0')+padding('0','00')+'00'+padding('25','00');
thrAreaName[5][26]='鳥松區'
thrAreaID[5][26]=padding('6','0')+padding('0','00')+'00'+padding('26','00');
thrAreaName[5][27]='大寮區'
thrAreaID[5][27]=padding('6','0')+padding('0','00')+'00'+padding('27','00');
thrAreaName[5][28]='林園區'
thrAreaID[5][28]=padding('6','0')+padding('0','00')+'00'+padding('28','00');
thrAreaName[5][29]='鼓山區'
thrAreaID[5][29]=padding('6','0')+padding('0','00')+'00'+padding('29','00');
thrAreaName[5][30]='鹽埕區'
thrAreaID[5][30]=padding('6','0')+padding('0','00')+'00'+padding('30','00');
thrAreaName[5][31]='旗津區'
thrAreaID[5][31]=padding('6','0')+padding('0','00')+'00'+padding('31','00');
thrAreaName[5][32]='三民區'
thrAreaID[5][32]=padding('6','0')+padding('0','00')+'00'+padding('32','00');
thrAreaName[5][33]='前金區'
thrAreaID[5][33]=padding('6','0')+padding('0','00')+'00'+padding('33','00');
thrAreaName[5][34]='新興區'
thrAreaID[5][34]=padding('6','0')+padding('0','00')+'00'+padding('34','00');
thrAreaName[5][35]='苓雅區'
thrAreaID[5][35]=padding('6','0')+padding('0','00')+'00'+padding('35','00');
thrAreaName[5][36]='前鎮區'
thrAreaID[5][36]=padding('6','0')+padding('0','00')+'00'+padding('36','00');
thrAreaName[5][37]='鳳山區'
thrAreaID[5][37]=padding('6','0')+padding('0','00')+'00'+padding('37','00');
thrAreaName[5][38]='小港區'
thrAreaID[5][38]=padding('6','0')+padding('0','00')+'00'+padding('38','00');
thrAreaName[6][1]='宜蘭市'
thrAreaID[6][1]=padding('7','0')+padding('8','00')+'00'+padding('1','00');
thrAreaName[6][2]='羅東鎮'
thrAreaID[6][2]=padding('7','0')+padding('8','00')+'00'+padding('2','00');
thrAreaName[6][3]='蘇澳鎮'
thrAreaID[6][3]=padding('7','0')+padding('8','00')+'00'+padding('3','00');
thrAreaName[6][4]='頭城鎮'
thrAreaID[6][4]=padding('7','0')+padding('8','00')+'00'+padding('4','00');
thrAreaName[6][5]='礁溪鄉'
thrAreaID[6][5]=padding('7','0')+padding('8','00')+'00'+padding('5','00');
thrAreaName[6][6]='壯圍鄉'
thrAreaID[6][6]=padding('7','0')+padding('8','00')+'00'+padding('6','00');
thrAreaName[6][7]='員山鄉'
thrAreaID[6][7]=padding('7','0')+padding('8','00')+'00'+padding('7','00');
thrAreaName[6][8]='冬山鄉'
thrAreaID[6][8]=padding('7','0')+padding('8','00')+'00'+padding('8','00');
thrAreaName[6][9]='五結鄉'
thrAreaID[6][9]=padding('7','0')+padding('8','00')+'00'+padding('9','00');
thrAreaName[6][10]='三星鄉'
thrAreaID[6][10]=padding('7','0')+padding('8','00')+'00'+padding('10','00');
thrAreaName[6][11]='大同鄉'
thrAreaID[6][11]=padding('7','0')+padding('8','00')+'00'+padding('11','00');
thrAreaName[6][12]='南澳鄉'
thrAreaID[6][12]=padding('7','0')+padding('8','00')+'00'+padding('12','00');
thrAreaName[7][1]='竹北市'
thrAreaID[7][1]=padding('7','0')+padding('1','00')+'00'+padding('1','00');
thrAreaName[7][2]='竹東鎮'
thrAreaID[7][2]=padding('7','0')+padding('1','00')+'00'+padding('2','00');
thrAreaName[7][3]='新埔鎮'
thrAreaID[7][3]=padding('7','0')+padding('1','00')+'00'+padding('3','00');
thrAreaName[7][4]='關西鎮'
thrAreaID[7][4]=padding('7','0')+padding('1','00')+'00'+padding('4','00');
thrAreaName[7][5]='湖口鄉'
thrAreaID[7][5]=padding('7','0')+padding('1','00')+'00'+padding('5','00');
thrAreaName[7][6]='新豐鄉'
thrAreaID[7][6]=padding('7','0')+padding('1','00')+'00'+padding('6','00');
thrAreaName[7][7]='芎林鄉'
thrAreaID[7][7]=padding('7','0')+padding('1','00')+'00'+padding('7','00');
thrAreaName[7][8]='橫山鄉'
thrAreaID[7][8]=padding('7','0')+padding('1','00')+'00'+padding('8','00');
thrAreaName[7][9]='北埔鄉'
thrAreaID[7][9]=padding('7','0')+padding('1','00')+'00'+padding('9','00');
thrAreaName[7][10]='寶山鄉'
thrAreaID[7][10]=padding('7','0')+padding('1','00')+'00'+padding('10','00');
thrAreaName[7][11]='峨眉鄉'
thrAreaID[7][11]=padding('7','0')+padding('1','00')+'00'+padding('11','00');
thrAreaName[7][12]='尖石鄉'
thrAreaID[7][12]=padding('7','0')+padding('1','00')+'00'+padding('12','00');
thrAreaName[7][13]='五峰鄉'
thrAreaID[7][13]=padding('7','0')+padding('1','00')+'00'+padding('13','00');
thrAreaName[8][1]='竹南鎮'
thrAreaID[8][1]=padding('7','0')+padding('2','00')+'00'+padding('1','00');
thrAreaName[8][2]='造橋鄉'
thrAreaID[8][2]=padding('7','0')+padding('2','00')+'00'+padding('2','00');
thrAreaName[8][3]='後龍鎮'
thrAreaID[8][3]=padding('7','0')+padding('2','00')+'00'+padding('3','00');
thrAreaName[8][4]='西湖鄉'
thrAreaID[8][4]=padding('7','0')+padding('2','00')+'00'+padding('4','00');
thrAreaName[8][5]='通霄鎮'
thrAreaID[8][5]=padding('7','0')+padding('2','00')+'00'+padding('5','00');
thrAreaName[8][6]='銅鑼鄉'
thrAreaID[8][6]=padding('7','0')+padding('2','00')+'00'+padding('6','00');
thrAreaName[8][7]='苑裡鎮'
thrAreaID[8][7]=padding('7','0')+padding('2','00')+'00'+padding('7','00');
thrAreaName[8][8]='三義鄉'
thrAreaID[8][8]=padding('7','0')+padding('2','00')+'00'+padding('8','00');
thrAreaName[8][9]='頭份市'
thrAreaID[8][9]=padding('7','0')+padding('2','00')+'00'+padding('9','00');
thrAreaName[8][10]='三灣鄉'
thrAreaID[8][10]=padding('7','0')+padding('2','00')+'00'+padding('10','00');
thrAreaName[8][11]='南庄鄉'
thrAreaID[8][11]=padding('7','0')+padding('2','00')+'00'+padding('11','00');
thrAreaName[8][12]='苗栗市'
thrAreaID[8][12]=padding('7','0')+padding('2','00')+'00'+padding('12','00');
thrAreaName[8][13]='頭屋鄉'
thrAreaID[8][13]=padding('7','0')+padding('2','00')+'00'+padding('13','00');
thrAreaName[8][14]='獅潭鄉'
thrAreaID[8][14]=padding('7','0')+padding('2','00')+'00'+padding('14','00');
thrAreaName[8][15]='公館鄉'
thrAreaID[8][15]=padding('7','0')+padding('2','00')+'00'+padding('15','00');
thrAreaName[8][16]='大湖鄉'
thrAreaID[8][16]=padding('7','0')+padding('2','00')+'00'+padding('16','00');
thrAreaName[8][17]='泰安鄉'
thrAreaID[8][17]=padding('7','0')+padding('2','00')+'00'+padding('17','00');
thrAreaName[8][18]='卓蘭鎮'
thrAreaID[8][18]=padding('7','0')+padding('2','00')+'00'+padding('18','00');
thrAreaName[9][1]='伸港鄉'
thrAreaID[9][1]=padding('7','0')+padding('3','00')+'00'+padding('1','00');
thrAreaName[9][2]='線西鄉'
thrAreaID[9][2]=padding('7','0')+padding('3','00')+'00'+padding('2','00');
thrAreaName[9][3]='和美鎮'
thrAreaID[9][3]=padding('7','0')+padding('3','00')+'00'+padding('3','00');
thrAreaName[9][4]='鹿港鎮'
thrAreaID[9][4]=padding('7','0')+padding('3','00')+'00'+padding('4','00');
thrAreaName[9][5]='褔興鄉'
thrAreaID[9][5]=padding('7','0')+padding('3','00')+'00'+padding('5','00');
thrAreaName[9][6]='秀水鄉'
thrAreaID[9][6]=padding('7','0')+padding('3','00')+'00'+padding('6','00');
thrAreaName[9][7]='彰化市'
thrAreaID[9][7]=padding('7','0')+padding('3','00')+'00'+padding('7','00');
thrAreaName[9][8]='花壇鄉'
thrAreaID[9][8]=padding('7','0')+padding('3','00')+'00'+padding('8','00');
thrAreaName[9][9]='芬園鄉'
thrAreaID[9][9]=padding('7','0')+padding('3','00')+'00'+padding('9','00');
thrAreaName[9][10]='芳苑鄉'
thrAreaID[9][10]=padding('7','0')+padding('3','00')+'00'+padding('10','00');
thrAreaName[9][11]='二林鎮'
thrAreaID[9][11]=padding('7','0')+padding('3','00')+'00'+padding('11','00');
thrAreaName[9][12]='埔鹽鄉'
thrAreaID[9][12]=padding('7','0')+padding('3','00')+'00'+padding('12','00');
thrAreaName[9][13]='溪湖鎮'
thrAreaID[9][13]=padding('7','0')+padding('3','00')+'00'+padding('13','00');
thrAreaName[9][14]='埔心鄉'
thrAreaID[9][14]=padding('7','0')+padding('3','00')+'00'+padding('14','00');
thrAreaName[9][15]='大城鄉'
thrAreaID[9][15]=padding('7','0')+padding('3','00')+'00'+padding('15','00');
thrAreaName[9][16]='竹塘鄉'
thrAreaID[9][16]=padding('7','0')+padding('3','00')+'00'+padding('16','00');
thrAreaName[9][17]='埤頭鄉'
thrAreaID[9][17]=padding('7','0')+padding('3','00')+'00'+padding('17','00');
thrAreaName[9][18]='北斗鎮'
thrAreaID[9][18]=padding('7','0')+padding('3','00')+'00'+padding('18','00');
thrAreaName[9][19]='溪州鄉'
thrAreaID[9][19]=padding('7','0')+padding('3','00')+'00'+padding('19','00');
thrAreaName[9][20]='大村鄉'
thrAreaID[9][20]=padding('7','0')+padding('3','00')+'00'+padding('20','00');
thrAreaName[9][21]='員林市'
thrAreaID[9][21]=padding('7','0')+padding('3','00')+'00'+padding('21','00');
thrAreaName[9][22]='永靖鄉'
thrAreaID[9][22]=padding('7','0')+padding('3','00')+'00'+padding('22','00');
thrAreaName[9][23]='社頭鄉'
thrAreaID[9][23]=padding('7','0')+padding('3','00')+'00'+padding('23','00');
thrAreaName[9][24]='田尾鄉'
thrAreaID[9][24]=padding('7','0')+padding('3','00')+'00'+padding('24','00');
thrAreaName[9][25]='田中鎮'
thrAreaID[9][25]=padding('7','0')+padding('3','00')+'00'+padding('25','00');
thrAreaName[9][26]='二水鄉'
thrAreaID[9][26]=padding('7','0')+padding('3','00')+'00'+padding('26','00');
thrAreaName[10][1]='草屯鎮'
thrAreaID[10][1]=padding('7','0')+padding('4','00')+'00'+padding('1','00');
thrAreaName[10][2]='國姓鄉'
thrAreaID[10][2]=padding('7','0')+padding('4','00')+'00'+padding('2','00');
thrAreaName[10][3]='埔里鎮'
thrAreaID[10][3]=padding('7','0')+padding('4','00')+'00'+padding('3','00');
thrAreaName[10][4]='仁愛鄉'
thrAreaID[10][4]=padding('7','0')+padding('4','00')+'00'+padding('4','00');
thrAreaName[10][5]='中寮鄉'
thrAreaID[10][5]=padding('7','0')+padding('4','00')+'00'+padding('5','00');
thrAreaName[10][6]='魚池鄉'
thrAreaID[10][6]=padding('7','0')+padding('4','00')+'00'+padding('6','00');
thrAreaName[10][7]='南投市'
thrAreaID[10][7]=padding('7','0')+padding('4','00')+'00'+padding('7','00');
thrAreaName[10][8]='名間鄉'
thrAreaID[10][8]=padding('7','0')+padding('4','00')+'00'+padding('8','00');
thrAreaName[10][9]='集集鎮'
thrAreaID[10][9]=padding('7','0')+padding('4','00')+'00'+padding('9','00');
thrAreaName[10][10]='竹山鎮'
thrAreaID[10][10]=padding('7','0')+padding('4','00')+'00'+padding('10','00');
thrAreaName[10][11]='鹿谷鄉'
thrAreaID[10][11]=padding('7','0')+padding('4','00')+'00'+padding('11','00');
thrAreaName[10][12]='水里鄉'
thrAreaID[10][12]=padding('7','0')+padding('4','00')+'00'+padding('12','00');
thrAreaName[10][13]='信義鄉'
thrAreaID[10][13]=padding('7','0')+padding('4','00')+'00'+padding('13','00');
thrAreaName[11][1]='麥寮鄉'
thrAreaID[11][1]=padding('7','0')+padding('5','00')+'00'+padding('1','00');
thrAreaName[11][2]='臺西鄉'
thrAreaID[11][2]=padding('7','0')+padding('5','00')+'00'+padding('2','00');
thrAreaName[11][3]='東勢鄉'
thrAreaID[11][3]=padding('7','0')+padding('5','00')+'00'+padding('3','00');
thrAreaName[11][4]='褒忠鄉'
thrAreaID[11][4]=padding('7','0')+padding('5','00')+'00'+padding('4','00');
thrAreaName[11][5]='土庫鎮'
thrAreaID[11][5]=padding('7','0')+padding('5','00')+'00'+padding('5','00');
thrAreaName[11][6]='虎尾鎮'
thrAreaID[11][6]=padding('7','0')+padding('5','00')+'00'+padding('6','00');
thrAreaName[11][7]='四湖鄉'
thrAreaID[11][7]=padding('7','0')+padding('5','00')+'00'+padding('7','00');
thrAreaName[11][8]='元長鄉'
thrAreaID[11][8]=padding('7','0')+padding('5','00')+'00'+padding('8','00');
thrAreaName[11][9]='口湖鄉'
thrAreaID[11][9]=padding('7','0')+padding('5','00')+'00'+padding('9','00');
thrAreaName[11][10]='水林鄉'
thrAreaID[11][10]=padding('7','0')+padding('5','00')+'00'+padding('10','00');
thrAreaName[11][11]='北港鎮'
thrAreaID[11][11]=padding('7','0')+padding('5','00')+'00'+padding('11','00');
thrAreaName[11][12]='崙背鄉'
thrAreaID[11][12]=padding('7','0')+padding('5','00')+'00'+padding('12','00');
thrAreaName[11][13]='二崙鄉'
thrAreaID[11][13]=padding('7','0')+padding('5','00')+'00'+padding('13','00');
thrAreaName[11][14]='西螺鎮'
thrAreaID[11][14]=padding('7','0')+padding('5','00')+'00'+padding('14','00');
thrAreaName[11][15]='莿桐鄉'
thrAreaID[11][15]=padding('7','0')+padding('5','00')+'00'+padding('15','00');
thrAreaName[11][16]='林內鄉'
thrAreaID[11][16]=padding('7','0')+padding('5','00')+'00'+padding('16','00');
thrAreaName[11][17]='斗六市'
thrAreaID[11][17]=padding('7','0')+padding('5','00')+'00'+padding('17','00');
thrAreaName[11][18]='大埤鄉'
thrAreaID[11][18]=padding('7','0')+padding('5','00')+'00'+padding('18','00');
thrAreaName[11][19]='斗南鎮'
thrAreaID[11][19]=padding('7','0')+padding('5','00')+'00'+padding('19','00');
thrAreaName[11][20]='古坑鄉'
thrAreaID[11][20]=padding('7','0')+padding('5','00')+'00'+padding('20','00');
thrAreaName[12][1]='六腳鄉'
thrAreaID[12][1]=padding('7','0')+padding('6','00')+'00'+padding('1','00');
thrAreaName[12][2]='東石鄉'
thrAreaID[12][2]=padding('7','0')+padding('6','00')+'00'+padding('2','00');
thrAreaName[12][3]='朴子市'
thrAreaID[12][3]=padding('7','0')+padding('6','00')+'00'+padding('3','00');
thrAreaName[12][4]='太保市'
thrAreaID[12][4]=padding('7','0')+padding('6','00')+'00'+padding('4','00');
thrAreaName[12][5]='布袋鎮'
thrAreaID[12][5]=padding('7','0')+padding('6','00')+'00'+padding('5','00');
thrAreaName[12][6]='義竹鄉'
thrAreaID[12][6]=padding('7','0')+padding('6','00')+'00'+padding('6','00');
thrAreaName[12][7]='鹿草鄉'
thrAreaID[12][7]=padding('7','0')+padding('6','00')+'00'+padding('7','00');
thrAreaName[12][8]='水上鄉'
thrAreaID[12][8]=padding('7','0')+padding('6','00')+'00'+padding('8','00');
thrAreaName[12][9]='溪口鄉'
thrAreaID[12][9]=padding('7','0')+padding('6','00')+'00'+padding('9','00');
thrAreaName[12][10]='大林鎮'
thrAreaID[12][10]=padding('7','0')+padding('6','00')+'00'+padding('10','00');
thrAreaName[12][11]='梅山鄉'
thrAreaID[12][11]=padding('7','0')+padding('6','00')+'00'+padding('11','00');
thrAreaName[12][12]='新港鄉'
thrAreaID[12][12]=padding('7','0')+padding('6','00')+'00'+padding('12','00');
thrAreaName[12][13]='民雄鄉'
thrAreaID[12][13]=padding('7','0')+padding('6','00')+'00'+padding('13','00');
thrAreaName[12][14]='竹崎鄉'
thrAreaID[12][14]=padding('7','0')+padding('6','00')+'00'+padding('14','00');
thrAreaName[12][15]='中埔鄉'
thrAreaID[12][15]=padding('7','0')+padding('6','00')+'00'+padding('15','00');
thrAreaName[12][16]='番路鄉'
thrAreaID[12][16]=padding('7','0')+padding('6','00')+'00'+padding('16','00');
thrAreaName[12][17]='阿里山鄉'
thrAreaID[12][17]=padding('7','0')+padding('6','00')+'00'+padding('17','00');
thrAreaName[12][18]='大埔鄉'
thrAreaID[12][18]=padding('7','0')+padding('6','00')+'00'+padding('18','00');
thrAreaName[13][1]='里港鄉'
thrAreaID[13][1]=padding('7','0')+padding('7','00')+'00'+padding('1','00');
thrAreaName[13][2]='高樹鄉'
thrAreaID[13][2]=padding('7','0')+padding('7','00')+'00'+padding('2','00');
thrAreaName[13][3]='三地門鄉'
thrAreaID[13][3]=padding('7','0')+padding('7','00')+'00'+padding('3','00');
thrAreaName[13][4]='霧臺鄉'
thrAreaID[13][4]=padding('7','0')+padding('7','00')+'00'+padding('4','00');
thrAreaName[13][5]='九如鄉'
thrAreaID[13][5]=padding('7','0')+padding('7','00')+'00'+padding('5','00');
thrAreaName[13][6]='鹽埔鄉'
thrAreaID[13][6]=padding('7','0')+padding('7','00')+'00'+padding('6','00');
thrAreaName[13][7]='長治鄉'
thrAreaID[13][7]=padding('7','0')+padding('7','00')+'00'+padding('7','00');
thrAreaName[13][8]='內埔鄉'
thrAreaID[13][8]=padding('7','0')+padding('7','00')+'00'+padding('8','00');
thrAreaName[13][9]='瑪家鄉'
thrAreaID[13][9]=padding('7','0')+padding('7','00')+'00'+padding('9','00');
thrAreaName[13][10]='泰武鄉'
thrAreaID[13][10]=padding('7','0')+padding('7','00')+'00'+padding('10','00');
thrAreaName[13][11]='竹田鄉'
thrAreaID[13][11]=padding('7','0')+padding('7','00')+'00'+padding('11','00');
thrAreaName[13][12]='萬巒鄉'
thrAreaID[13][12]=padding('7','0')+padding('7','00')+'00'+padding('12','00');
thrAreaName[13][13]='潮州鎮'
thrAreaID[13][13]=padding('7','0')+padding('7','00')+'00'+padding('13','00');
thrAreaName[13][14]='屏東市'
thrAreaID[13][14]=padding('7','0')+padding('7','00')+'00'+padding('14','00');
thrAreaName[13][15]='麟洛鄉'
thrAreaID[13][15]=padding('7','0')+padding('7','00')+'00'+padding('15','00');
thrAreaName[13][16]='萬丹鄉'
thrAreaID[13][16]=padding('7','0')+padding('7','00')+'00'+padding('16','00');
thrAreaName[13][17]='新園鄉'
thrAreaID[13][17]=padding('7','0')+padding('7','00')+'00'+padding('17','00');
thrAreaName[13][18]='崁頂鄉'
thrAreaID[13][18]=padding('7','0')+padding('7','00')+'00'+padding('18','00');
thrAreaName[13][19]='南州鄉'
thrAreaID[13][19]=padding('7','0')+padding('7','00')+'00'+padding('19','00');
thrAreaName[13][20]='新埤鄉'
thrAreaID[13][20]=padding('7','0')+padding('7','00')+'00'+padding('20','00');
thrAreaName[13][21]='來義鄉'
thrAreaID[13][21]=padding('7','0')+padding('7','00')+'00'+padding('21','00');
thrAreaName[13][22]='東港鎮'
thrAreaID[13][22]=padding('7','0')+padding('7','00')+'00'+padding('22','00');
thrAreaName[13][23]='林邊鄉'
thrAreaID[13][23]=padding('7','0')+padding('7','00')+'00'+padding('23','00');
thrAreaName[13][24]='佳冬鄉'
thrAreaID[13][24]=padding('7','0')+padding('7','00')+'00'+padding('24','00');
thrAreaName[13][25]='枋寮鄉'
thrAreaID[13][25]=padding('7','0')+padding('7','00')+'00'+padding('25','00');
thrAreaName[13][26]='春日鄉'
thrAreaID[13][26]=padding('7','0')+padding('7','00')+'00'+padding('26','00');
thrAreaName[13][27]='枋山鄉'
thrAreaID[13][27]=padding('7','0')+padding('7','00')+'00'+padding('27','00');
thrAreaName[13][28]='獅子鄉'
thrAreaID[13][28]=padding('7','0')+padding('7','00')+'00'+padding('28','00');
thrAreaName[13][29]='牡丹鄉'
thrAreaID[13][29]=padding('7','0')+padding('7','00')+'00'+padding('29','00');
thrAreaName[13][30]='車城鄉'
thrAreaID[13][30]=padding('7','0')+padding('7','00')+'00'+padding('30','00');
thrAreaName[13][31]='滿州鄉'
thrAreaID[13][31]=padding('7','0')+padding('7','00')+'00'+padding('31','00');
thrAreaName[13][32]='恆春鎮'
thrAreaID[13][32]=padding('7','0')+padding('7','00')+'00'+padding('32','00');
thrAreaName[13][33]='琉球鄉'
thrAreaID[13][33]=padding('7','0')+padding('7','00')+'00'+padding('33','00');
thrAreaName[14][1]='臺東市'
thrAreaID[14][1]=padding('7','0')+padding('10','00')+'00'+padding('1','00');
thrAreaName[14][2]='成功鎮'
thrAreaID[14][2]=padding('7','0')+padding('10','00')+'00'+padding('2','00');
thrAreaName[14][3]='關山鎮'
thrAreaID[14][3]=padding('7','0')+padding('10','00')+'00'+padding('3','00');
thrAreaName[14][4]='卑南鄉'
thrAreaID[14][4]=padding('7','0')+padding('10','00')+'00'+padding('4','00');
thrAreaName[14][5]='鹿野鄉'
thrAreaID[14][5]=padding('7','0')+padding('10','00')+'00'+padding('5','00');
thrAreaName[14][6]='池上鄉'
thrAreaID[14][6]=padding('7','0')+padding('10','00')+'00'+padding('6','00');
thrAreaName[14][7]='東河鄉'
thrAreaID[14][7]=padding('7','0')+padding('10','00')+'00'+padding('7','00');
thrAreaName[14][8]='長濱鄉'
thrAreaID[14][8]=padding('7','0')+padding('10','00')+'00'+padding('8','00');
thrAreaName[14][9]='太麻里鄉'
thrAreaID[14][9]=padding('7','0')+padding('10','00')+'00'+padding('9','00');
thrAreaName[14][10]='大武鄉'
thrAreaID[14][10]=padding('7','0')+padding('10','00')+'00'+padding('10','00');
thrAreaName[14][11]='綠島鄉'
thrAreaID[14][11]=padding('7','0')+padding('10','00')+'00'+padding('11','00');
thrAreaName[14][12]='海端鄉'
thrAreaID[14][12]=padding('7','0')+padding('10','00')+'00'+padding('12','00');
thrAreaName[14][13]='延平鄉'
thrAreaID[14][13]=padding('7','0')+padding('10','00')+'00'+padding('13','00');
thrAreaName[14][14]='金峰鄉'
thrAreaID[14][14]=padding('7','0')+padding('10','00')+'00'+padding('14','00');
thrAreaName[14][15]='達仁鄉'
thrAreaID[14][15]=padding('7','0')+padding('10','00')+'00'+padding('15','00');
thrAreaName[14][16]='蘭嶼鄉'
thrAreaID[14][16]=padding('7','0')+padding('10','00')+'00'+padding('16','00');
thrAreaName[15][1]='花蓮市'
thrAreaID[15][1]=padding('7','0')+padding('9','00')+'00'+padding('1','00');
thrAreaName[15][2]='新城鄉'
thrAreaID[15][2]=padding('7','0')+padding('9','00')+'00'+padding('2','00');
thrAreaName[15][3]='秀林鄉'
thrAreaID[15][3]=padding('7','0')+padding('9','00')+'00'+padding('3','00');
thrAreaName[15][4]='吉安鄉'
thrAreaID[15][4]=padding('7','0')+padding('9','00')+'00'+padding('4','00');
thrAreaName[15][5]='壽豐鄉'
thrAreaID[15][5]=padding('7','0')+padding('9','00')+'00'+padding('5','00');
thrAreaName[15][6]='鳳林鎮'
thrAreaID[15][6]=padding('7','0')+padding('9','00')+'00'+padding('6','00');
thrAreaName[15][7]='光復鄉'
thrAreaID[15][7]=padding('7','0')+padding('9','00')+'00'+padding('7','00');
thrAreaName[15][8]='豐濱鄉'
thrAreaID[15][8]=padding('7','0')+padding('9','00')+'00'+padding('8','00');
thrAreaName[15][9]='萬榮鄉'
thrAreaID[15][9]=padding('7','0')+padding('9','00')+'00'+padding('9','00');
thrAreaName[15][10]='瑞穗鄉'
thrAreaID[15][10]=padding('7','0')+padding('9','00')+'00'+padding('10','00');
thrAreaName[15][11]='玉里鎮'
thrAreaID[15][11]=padding('7','0')+padding('9','00')+'00'+padding('11','00');
thrAreaName[15][12]='富里鄉'
thrAreaID[15][12]=padding('7','0')+padding('9','00')+'00'+padding('12','00');
thrAreaName[15][13]='卓溪鄉'
thrAreaID[15][13]=padding('7','0')+padding('9','00')+'00'+padding('13','00');
thrAreaName[16][1]='馬公市'
thrAreaID[16][1]=padding('7','0')+padding('11','00')+'00'+padding('1','00');
thrAreaName[16][2]='湖西鄉'
thrAreaID[16][2]=padding('7','0')+padding('11','00')+'00'+padding('2','00');
thrAreaName[16][3]='白沙鄉'
thrAreaID[16][3]=padding('7','0')+padding('11','00')+'00'+padding('3','00');
thrAreaName[16][4]='西嶼鄉'
thrAreaID[16][4]=padding('7','0')+padding('11','00')+'00'+padding('4','00');
thrAreaName[16][5]='望安鄉'
thrAreaID[16][5]=padding('7','0')+padding('11','00')+'00'+padding('5','00');
thrAreaName[16][6]='七美鄉'
thrAreaID[16][6]=padding('7','0')+padding('11','00')+'00'+padding('6','00');
thrAreaName[17][1]='中正區'
thrAreaID[17][1]=padding('7','0')+padding('12','00')+'00'+padding('1','00');
thrAreaName[17][2]='信義區'
thrAreaID[17][2]=padding('7','0')+padding('12','00')+'00'+padding('2','00');
thrAreaName[17][3]='仁愛區'
thrAreaID[17][3]=padding('7','0')+padding('12','00')+'00'+padding('3','00');
thrAreaName[17][4]='中山區'
thrAreaID[17][4]=padding('7','0')+padding('12','00')+'00'+padding('4','00');
thrAreaName[17][5]='安樂區'
thrAreaID[17][5]=padding('7','0')+padding('12','00')+'00'+padding('5','00');
thrAreaName[17][6]='暖暖區'
thrAreaID[17][6]=padding('7','0')+padding('12','00')+'00'+padding('6','00');
thrAreaName[17][7]='七堵區'
thrAreaID[17][7]=padding('7','0')+padding('12','00')+'00'+padding('7','00');
thrAreaName[18][1]='東區'
thrAreaID[18][1]=padding('7','0')+padding('13','00')+'00'+padding('1','00');
thrAreaName[18][2]='北區'
thrAreaID[18][2]=padding('7','0')+padding('13','00')+'00'+padding('2','00');
thrAreaName[18][3]='香山區'
thrAreaID[18][3]=padding('7','0')+padding('13','00')+'00'+padding('3','00');
thrAreaName[19][1]='東區'
thrAreaID[19][1]=padding('7','0')+padding('14','00')+'00'+padding('1','00');
thrAreaName[19][2]='西區'
thrAreaID[19][2]=padding('7','0')+padding('14','00')+'00'+padding('2','00');
thrAreaName[20][1]='金城鎮'
thrAreaID[20][1]=padding('8','0')+padding('1','00')+'00'+padding('1','00');
thrAreaName[20][2]='金寧鄉'
thrAreaID[20][2]=padding('8','0')+padding('1','00')+'00'+padding('2','00');
thrAreaName[20][3]='烈嶼鄉'
thrAreaID[20][3]=padding('8','0')+padding('1','00')+'00'+padding('3','00');
thrAreaName[20][4]='烏坵鄉'
thrAreaID[20][4]=padding('8','0')+padding('1','00')+'00'+padding('4','00');
thrAreaName[20][5]='金湖鎮'
thrAreaID[20][5]=padding('8','0')+padding('1','00')+'00'+padding('5','00');
thrAreaName[20][6]='金沙鎮'
thrAreaID[20][6]=padding('8','0')+padding('1','00')+'00'+padding('6','00');
thrAreaName[21][1]='南竿鄉'
thrAreaID[21][1]=padding('8','0')+padding('2','00')+'00'+padding('1','00');
thrAreaName[21][2]='北竿鄉'
thrAreaID[21][2]=padding('8','0')+padding('2','00')+'00'+padding('2','00');
thrAreaName[21][3]='莒光鄉'
thrAreaID[21][3]=padding('8','0')+padding('2','00')+'00'+padding('3','00');
thrAreaName[21][4]='東引鄉'
thrAreaID[21][4]=padding('8','0')+padding('2','00')+'00'+padding('4','00');

var arrOrder=new Array(0,1,2,3,4,5,7,8,9,10,11,12,13,6,15,14,16,17,18,19,20,21);

var root = new Mapping('候選人得票數 (總統副總統)', 'http://www.cec.gov.tw/zh_TW/P1/n100000200000000.html');

for (var x = 0; x < firAreaName.length; x++) {
	var i=arrOrder[x];
	var node = root.addNode(new Mapping(firAreaName[i], 'http://www.cec.gov.tw/zh_TW/P1/n' + firAreaID[i] + '.html'));

	for (var j = 1; j < thrAreaName[i].length; j++) {
		node.addNode(new Mapping(thrAreaName[i][j], 'http://www.cec.gov.tw/zh_TW/P1/n' + thrAreaID[i][j]+'00000000' + '.html'));
	}
}

module.exports = root;