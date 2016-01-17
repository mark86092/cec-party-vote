var path = require('path');
var util = require('../util');
var paddingString = util.padding, Mapping = util.Mapping;

function addStation(node, startNumber, endNumber) {

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
	var sDir = path.dirname(node.link);

	//var sArea = retArea(sFirArea,sSecArea,sForArea);

	var iCounter = endNumber-startNumber+1;

	var arrOption = new Array();
	for (i=0;i<iCounter;i++) {
		sTemp = sDir + '/' + sArea1to12 + paddingString((startNumber + i).toString(), '0000') + sFilename.substr(16, sFilename.length-16);
		/*
		if (sFilename==sTemp) {
			arrOption[i] = "<option value='" + sTemp + "' selected>第 " + paddingString((startNumber + i).toString(), '0000') + " 投開票所</option>";
		}
		else {
			arrOption[i] = "<option value='" + sTemp + "'>第 " + paddingString((startNumber + i).toString(), '0000') + " 投開票所</option>";
		}
		*/
		node.addNode(new Mapping("第 " + paddingString((startNumber + i).toString(), '0000') + " 投開票所", sTemp));

	}

	//objDiv = window.document.getElementById('divForArea');
	//objDiv.innerHTML = "請選擇投開票所：<select id='selForArea' onchange='redirectURL(this.options[this.options.selectedIndex].value);'>" + "<option value='" + sArea1to12 + "0000" + sFilename.substr(16, sFilename.length-16) + "'>" + sArea + "</option>" + arrOption.join() + "</select>";
}


function addStations(node, Numbers) {

	var sURL = node.link;
	var arrURL = sURL.split('/');
	var sFilename = arrURL[arrURL.length-1];
	var sFirArea = sFilename.substr(1,1);//省Province
	var sSecArea = sFilename.substr(2,2);//縣市 county
	var sThrArea = sFilename.substr(4,2);//選區 Elecdiv
	var sForArea = sFilename.substr(6,2);//鄉鎮 township
	var sFivArea = sFilename.substr(8,4);//village 
	var sArea1to12 = sFilename.substr(0,12);

	var sDir = path.dirname(node.link);

	//var sArea = retArea(sFirArea,sSecArea,sForArea);

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
                
		sTemp = sDir + '/' + sArea1to12 + paddingString((startNumber + count).toString(), '0000') + sFilename.substr(16, sFilename.length-16);
		/*
		if (sFilename==sTemp) {
			arrOption[i] = "<option value='" + sTemp + "' selected>第 " + paddingString((startNumber + count).toString(), '0000') + " 投開票所</option>";
		}
		else {
			arrOption[i] = "<option value='" + sTemp + "'>第 " + paddingString((startNumber + count).toString(), '0000') + " 投開票所</option>";
		}
		*/
		node.addNode(new Mapping("第 " + paddingString((startNumber + count).toString(), '0000') + " 投開票所", sTemp));
            count++;
	}
}
	//objDiv = window.document.getElementById('divForArea');
	//objDiv.innerHTML = "請選擇投開票所：<select id='selForArea' onchange='redirectURL(this.options[this.options.selectedIndex].value);'>" + "<option value='" + sArea1to12 + "0000" + sFilename.substr(16, sFilename.length-16) + "'>" + sArea + "</option>" + arrOption.join() + "</select>";
}


function goSelArea(node) {


	var sURL = node.link;
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
  addStations(node, ["1,140"]);       
break;

case '10002':
  addStations(node, ["141,188","271,385"]);
 break;
case '10003':
  addStations(node, ["189,270"]);
 break;
case '10004':
  addStations(node, ["386,516"]);
 break;
case '10005':
  addStations(node, ["517,590","1316,1357"]);
 break;
case '10006':
  addStations(node, ["591,738"]);
 break;
case '10007':
  addStations(node, ["739,809"]);
 break;
case '10008':
  addStations(node, ["810,922"]);
 break;
case '10009':
  addStations(node, ["923,986","1520,1548"]);
 break;
case '10010':
  addStations(node, ["987,1174"]);
 break;
case '10011':
  addStations(node, ["1175,1315"]);
 break;
case '10012':
  addStations(node, ["1358,1519"]);
 break;
case '20001':
  addStations(node, ["1,10"]);
 break;
case '20002':
  addStations(node, ["11,28"]);
 break;
case '20003':
  addStations(node, ["29,121"]);
 break;
case '20004':
  addStations(node, ["122,139"]);
 break;
case '20005':
  addStations(node, ["140,189"]);
 break;
case '20006':
  addStations(node, ["190,236"]);
 break;
case '20007':
  addStations(node, ["237,283"]);
 break;
case '20008':
  addStations(node, ["284,386"]);
 break;
case '20009':
  addStations(node, ["387,427","428,622"]);
 break;
case '20010':
  addStations(node, ["623,838","839,867"]);
 break;
case '20011':
  addStations(node, ["868,978"]);
 break;
case '20012':
  addStations(node, ["979,1028"]);
 break;
case '20013':
  addStations(node, ["1029,1197","1198,1362"]);
 break;
case '20014':
  addStations(node, ["1363,1563","1564,1606"]);
 break;
case '20015':
  addStations(node, ["1607,1744"]);
 break;
case '20016':
  addStations(node, ["1745,1886"]);
 break;
case '20017':
  addStations(node, ["1887,1954"]);
 break;
case '20018':
  addStations(node, ["1955,2128"]);
 break;
case '20019':
  addStations(node, ["2129,2144"]);
 break;
case '20020':
  addStations(node, ["2145,2157"]);
 break;
case '20021':
  addStations(node, ["2158,2167"]);
 break;
case '20022':
  addStations(node, ["2168,2173"]);
 break;
case '20023':
  addStations(node, ["2174,2192"]);
 break;
case '20024':
  addStations(node, ["2193,2208"]);
 break;
case '20025':
  addStations(node, ["2209,2319"]);
 break;
case '20026':
  addStations(node, ["2320,2331"]);
 break;
case '20027':
  addStations(node, ["2332,2377"]);
 break;
case '20028':
  addStations(node, ["2378,2395"]);
 break;
case '20029':
  addStations(node, ["2396,2413"]);
 break;
case '30001':
  addStations(node, ["1,74"]);
 break;
case '30002':
  addStations(node, ["75,146"]);
 break;
case '30003':
  addStations(node, ["147,182","550,718"]);
 break;
case '30004':
  addStations(node, ["183,226"]);
 break;
case '30005':
  addStations(node, ["227,265"]);
 break;
case '30006':
  addStations(node, ["266,295"]);
 break;
case '30007':
  addStations(node, ["296,375"]);
 break;
case '30008':
  addStations(node, ["376,549","1063,1088"]);
 break;
case '30009':
  addStations(node, ["719,836"]);
 break;
case '30010':
  addStations(node, ["837,897"]);
 break;
case '30011':
  addStations(node, ["898,994"]);
 break;
case '30012':
  addStations(node, ["995,1052"]);
 break;
case '30013':
  addStations(node, ["1053,1062"]);
 break;
case '40001':
  addStations(node, ["1,54"]);
 break;
case '40002':
  addStations(node, ["55,70"]);
 break;
case '40003':
  addStations(node, ["71,90"]);
 break;
case '40004':
  addStations(node, ["91,149"]);
 break;
case '40005':
  addStations(node, ["150,184"]);
 break;
case '40006':
  addStations(node, ["185,235"]);
 break;
case '40007':
  addStations(node, ["236,278"]);
 break;
case '40008':
  addStations(node, ["279,311"]);
 break;
case '40009':
  addStations(node, ["312,349"]);
 break;
case '40010':
  addStations(node, ["350,392"]);
 break;
case '40011':
  addStations(node, ["393,400","1276,1365"]);
 break;
case '40012':
  addStations(node, ["401,433"]);
 break;
case '40013':
  addStations(node, ["434,475"]);
 break;
case '40014':
  addStations(node, ["476,521"]);
 break;
case '40015':
  addStations(node, ["522,570"]);
 break;
case '40016':
  addStations(node, ["571,685"]);
 break;
case '40017':
  addStations(node, ["686,784"]);
 break;
case '40018':
  addStations(node, ["785,916"]);
 break;
case '40019':
  addStations(node, ["917,1003"]);
 break;
case '40020':
  addStations(node, ["1004,1068"]);
 break;
case '40021':
  addStations(node, ["1069,1081"]);
 break;
case '40022':
  addStations(node, ["1082,1129"]);
 break;
case '40023':
  addStations(node, ["1130,1186"]);
 break;
case '40024':
  addStations(node, ["1187,1275"]);
 break;
case '40025':
  addStations(node, ["1366,1451"]);
 break;
case '40026':
  addStations(node, ["1452,1461"]);
 break;
case '40027':
  addStations(node, ["1462,1482"]);
 break;
case '40028':
  addStations(node, ["1483,1520"]);
 break;
case '40029':
  addStations(node, ["1521,1536"]);
 break;
case '50001':
  addStations(node, ["1,29"]);
 break;
case '50002':
  addStations(node, ["30,61"]);
 break;
case '50003':
  addStations(node, ["62,79"]);
 break;
case '50004':
  addStations(node, ["80,105"]);
 break;
case '50005':
  addStations(node, ["106,136"]);
 break;
case '50006':
  addStations(node, ["137,184"]);
 break;
case '50007':
  addStations(node, ["185,209"]);
 break;
case '50008':
  addStations(node, ["210,232"]);
 break;
case '50009':
  addStations(node, ["233,256"]);
 break;
case '50010':
  addStations(node, ["257,275"]);
 break;
case '50011':
  addStations(node, ["276,294"]);
 break;
case '50012':
  addStations(node, ["295,314"]);
 break;
case '50013':
  addStations(node, ["315,338"]);
 break;
case '50014':
  addStations(node, ["339,378"]);
 break;
case '50015':
  addStations(node, ["379,413"]);
 break;
case '50016':
  addStations(node, ["414,442"]);
 break;
case '50017':
  addStations(node, ["443,453"]);
 break;
case '50018':
  addStations(node, ["454,469"]);
 break;
case '50019':
  addStations(node, ["470,478"]);
 break;
case '50020':
  addStations(node, ["479,498"]);
 break;
case '50021':
  addStations(node, ["499,521"]);
 break;
case '50022':
  addStations(node, ["522,548"]);
 break;
case '50023':
  addStations(node, ["549,557"]);
 break;
case '50024':
  addStations(node, ["558,594"]);
 break;
case '50025':
  addStations(node, ["595,604"]);
 break;
case '50026':
  addStations(node, ["605,614"]);
 break;
case '50027':
  addStations(node, ["615,704"]);
 break;
case '50028':
  addStations(node, ["705,782"]);
 break;
case '50029':
  addStations(node, ["783,831"]);
 break;
case '50030':
  addStations(node, ["832,861"]);
 break;
case '50031':
  addStations(node, ["862,941"]);
 break;
case '50032':
  addStations(node, ["942,1035"]);
 break;
case '50033':
  addStations(node, ["1036,1177"]);
 break;
case '50034':
  addStations(node, ["1178,1226"]);
 break;
case '50035':
  addStations(node, ["1227,1271"]);
 break;
case '50036':
  addStations(node, ["1272,1302"]);
 break;
case '50037':
  addStations(node, ["1303,1310"]);
 break;
case '60001':
  addStations(node, ["1,8"]);
 break;
case '60002':
  addStations(node, ["9,12"]);
 break;
case '60003':
  addStations(node, ["13,19"]);
 break;
case '60004':
  addStations(node, ["20,31"]);
 break;
case '60005':
  addStations(node, ["32,41"]);
 break;
case '60006':
  addStations(node, ["42,59"]);
 break;
case '60007':
  addStations(node, ["60,94"]);
 break;
case '60008':
  addStations(node, ["95,126"]);
 break;
case '60009':
  addStations(node, ["127,129"]);
 break;
case '60010':
  addStations(node, ["130,150"]);
 break;
case '60011':
  addStations(node, ["151,162"]);
 break;
case '60012':
  addStations(node, ["163,187"]);
 break;
case '60013':
  addStations(node, ["188,211"]);
 break;
case '60014':
  addStations(node, ["212,243"]);
 break;
case '60015':
  addStations(node, ["244,263"]);
 break;
case '60016':
  addStations(node, ["264,287"]);
 break;
case '60017':
  addStations(node, ["288,328"]);
 break;
case '60018':
  addStations(node, ["329,340"]);
 break;
case '60019':
  addStations(node, ["341,412"]);
 break;
case '60020':
  addStations(node, ["413,430"]);
 break;
case '60021':
  addStations(node, ["431,458"]);
 break;
case '60022':
  addStations(node, ["459,489"]);
 break;
case '60023':
  addStations(node, ["490,581"]);
 break;
case '60024':
  addStations(node, ["582,680"]);
 break;
case '60025':
  addStations(node, ["681,725"]);
 break;
case '60026':
  addStations(node, ["726,753"]);
 break;
case '60027':
  addStations(node, ["754,834"]);
 break;
case '60028':
  addStations(node, ["835,885"]);
 break;
case '60029':
  addStations(node, ["886,959"]);
 break;
case '60030':
  addStations(node, ["960,983"]);
 break;
case '60031':
  addStations(node, ["984,1001"]);
 break;
case '60032':
  addStations(node, ["1002,1057","1058,1190"]);
 break;
case '60033':
  addStations(node, ["1191,1212"]);
 break;
case '60034':
  addStations(node, ["1213,1254"]);
 break;
case '60035':
  addStations(node, ["1255,1369"]);
 break;
case '60036':
  addStations(node, ["1370,1389","1702,1800"]);
 break;
case '60037':
  addStations(node, ["1390,1616"]);
 break;
case '60038':
  addStations(node, ["1617,1701"]);
 break;
case '70801':
  addStations(node, ["1,78"]);
 break;
case '70802':
  addStations(node, ["79,128"]);
 break;
case '70803':
  addStations(node, ["129,170"]);
 break;
case '70804':
  addStations(node, ["171,202"]);
 break;
case '70805':
  addStations(node, ["203,234"]);
 break;
case '70806':
  addStations(node, ["235,257"]);
 break;
case '70807':
  addStations(node, ["258,288"]);
 break;
case '70808':
  addStations(node, ["289,327"]);
 break;
case '70809':
  addStations(node, ["328,358"]);
 break;
case '70810':
  addStations(node, ["359,379"]);
 break;
case '70811':
  addStations(node, ["380,389"]);
 break;
case '70812':
  addStations(node, ["390,396"]);
 break;
case '70101':
  addStations(node, ["1,94"]);
 break;
case '70102':
  addStations(node, ["95,165"]);
 break;
case '70103':
  addStations(node, ["166,194"]);
 break;
case '70104':
  addStations(node, ["195,221"]);
 break;
case '70105':
  addStations(node, ["222,268"]);
 break;
case '70106':
  addStations(node, ["269,301"]);
 break;
case '70107':
  addStations(node, ["302,319"]);
 break;
case '70108':
  addStations(node, ["320,335"]);
 break;
case '70109':
  addStations(node, ["336,345"]);
 break;
case '70110':
  addStations(node, ["346,357"]);
 break;
case '70111':
  addStations(node, ["358,365"]);
 break;
case '70112':
  addStations(node, ["366,379"]);
 break;
case '70113':
  addStations(node, ["380,385"]);
 break;
case '70201':
  addStations(node, ["1,61"]);
 break;
case '70202':
  addStations(node, ["62,73"]);
 break;
case '70203':
  addStations(node, ["74,108"]);
 break;
case '70204':
  addStations(node, ["109,117"]);
 break;
case '70205':
  addStations(node, ["118,151"]);
 break;
case '70206':
  addStations(node, ["152,167"]);
 break;
case '70207':
  addStations(node, ["168,207"]);
 break;
case '70208':
  addStations(node, ["208,223"]);
 break;
case '70209':
  addStations(node, ["224,293"]);
 break;
case '70210':
  addStations(node, ["294,302"]);
 break;
case '70211':
  addStations(node, ["303,311"]);
 break;
case '70212':
  addStations(node, ["312,378"]);
 break;
case '70213':
  addStations(node, ["379,390"]);
 break;
case '70214':
  addStations(node, ["391,397"]);
 break;
case '70215':
  addStations(node, ["398,425"]);
 break;
case '70216':
  addStations(node, ["426,440"]);
 break;
case '70217':
  addStations(node, ["441,450"]);
 break;
case '70218':
  addStations(node, ["451,468"]);
 break;
case '70301':
  addStations(node, ["1,28"]);
 break;
case '70302':
  addStations(node, ["29,40"]);
 break;
case '70303':
  addStations(node, ["41,108"]);
 break;
case '70304':
  addStations(node, ["109,173"]);
 break;
case '70305':
  addStations(node, ["174,206"]);
 break;
case '70306':
  addStations(node, ["207,238"]);
 break;
case '70307':
  addStations(node, ["239,422"]);
 break;
case '70308':
  addStations(node, ["423,459"]);
 break;
case '70309':
  addStations(node, ["460,480"]);
 break;
case '70310':
  addStations(node, ["481,516"]);
 break;
case '70311':
  addStations(node, ["517,555"]);
 break;
case '70312':
  addStations(node, ["556,584"]);
 break;
case '70313':
  addStations(node, ["585,626"]);
 break;
case '70314':
  addStations(node, ["627,657"]);
 break;
case '70315':
  addStations(node, ["658,674"]);
 break;
case '70316':
  addStations(node, ["675,690"]);
 break;
case '70317':
  addStations(node, ["691,717"]);
 break;
case '70318':
  addStations(node, ["718,747"]);
 break;
case '70319':
  addStations(node, ["748,774"]);
 break;
case '70320':
  addStations(node, ["775,801"]);
 break;
case '70321':
  addStations(node, ["802,899"]);
 break;
case '70322':
  addStations(node, ["900,933"]);
 break;
case '70323':
  addStations(node, ["934,971"]);
 break;
case '70324':
  addStations(node, ["972,996"]);
 break;
case '70325':
  addStations(node, ["997,1032"]);
 break;
case '70326':
  addStations(node, ["1033,1049"]);
 break;
case '70401':
  addStations(node, ["1,74"]);
 break;
case '70402':
  addStations(node, ["75,94"]);
 break;
case '70403':
  addStations(node, ["95,162"]);
 break;
case '70404':
  addStations(node, ["163,187"]);
 break;
case '70405':
  addStations(node, ["188,211"]);
 break;
case '70406':
  addStations(node, ["212,236"]);
 break;
case '70407':
  addStations(node, ["237,317"]);
 break;
case '70408':
  addStations(node, ["318,354"]);
 break;
case '70409':
  addStations(node, ["355,367"]);
 break;
case '70410':
  addStations(node, ["368,420"]);
 break;
case '70411':
  addStations(node, ["421,441"]);
 break;
case '70412':
  addStations(node, ["442,463"]);
 break;
case '70413':
  addStations(node, ["464,483"]);
 break;
case '70501':
  addStations(node, ["1,26"]);
 break;
case '70502':
  addStations(node, ["27,48"]);
 break;
case '70503':
  addStations(node, ["49,63"]);
 break;
case '70504':
  addStations(node, ["64,75"]);
 break;
case '70505':
  addStations(node, ["76,102"]);
 break;
case '70506':
  addStations(node, ["103,147"]);
 break;
case '70507':
  addStations(node, ["148,171"]);
 break;
case '70508':
  addStations(node, ["172,196"]);
 break;
case '70509':
  addStations(node, ["197,221"]);
 break;
case '70510':
  addStations(node, ["222,247"]);
 break;
case '70511':
  addStations(node, ["248,288"]);
 break;
case '70512':
  addStations(node, ["289,308"]);
 break;
case '70513':
  addStations(node, ["309,331"]);
 break;
case '70514':
  addStations(node, ["332,365"]);
 break;
case '70515':
  addStations(node, ["366,387"]);
 break;
case '70516':
  addStations(node, ["388,402"]);
 break;
case '70517':
  addStations(node, ["403,470"]);
 break;
case '70518':
  addStations(node, ["471,488"]);
 break;
case '70519':
  addStations(node, ["489,519"]);
 break;
case '70520':
  addStations(node, ["520,546"]);
 break;
case '70601':
  addStations(node, ["1,30"]);
 break;
case '70602':
  addStations(node, ["31,57"]);
 break;
case '70603':
  addStations(node, ["58,92"]);
 break;
case '70604':
  addStations(node, ["93,121"]);
 break;
case '70605':
  addStations(node, ["122,150"]);
 break;
case '70606':
  addStations(node, ["151,176"]);
 break;
case '70607':
  addStations(node, ["177,196"]);
 break;
case '70608':
  addStations(node, ["197,235"]);
 break;
case '70609':
  addStations(node, ["236,252"]);
 break;
case '70610':
  addStations(node, ["253,277"]);
 break;
case '70611':
  addStations(node, ["278,299"]);
 break;
case '70612':
  addStations(node, ["300,329"]);
 break;
case '70613':
  addStations(node, ["330,373"]);
 break;
case '70614':
  addStations(node, ["374,409"]);
 break;
case '70615':
  addStations(node, ["410,443"]);
 break;
case '70616':
  addStations(node, ["444,458"]);
 break;
case '70617':
  addStations(node, ["459,471"]);
 break;
case '70618':
  addStations(node, ["472,480"]);
 break;
case '70701':
  addStations(node, ["1,20"]);
 break;
case '70702':
  addStations(node, ["21,42"]);
 break;
case '70703':
  addStations(node, ["43,52"]);
 break;
case '70704':
  addStations(node, ["53,60"]);
 break;
case '70705':
  addStations(node, ["61,74"]);
 break;
case '70706':
  addStations(node, ["75,92"]);
 break;
case '70707':
  addStations(node, ["93,114"]);
 break;
case '70708':
  addStations(node, ["115,155"]);
 break;
case '70709':
  addStations(node, ["156,163"]);
 break;
case '70710':
  addStations(node, ["164,170"]);
 break;
case '70711':
  addStations(node, ["171,186"]);
 break;
case '70712':
  addStations(node, ["187,203"]);
 break;
case '70713':
  addStations(node, ["204,243"]);
 break;
case '70714':
  addStations(node, ["244,371"]);
 break;
case '70715':
  addStations(node, ["372,381"]);
 break;
case '70716':
  addStations(node, ["382,420"]);
 break;
case '70717':
  addStations(node, ["421,448"]);
 break;
case '70718':
  addStations(node, ["449,459"]);
 break;
case '70719':
  addStations(node, ["460,470"]);
 break;
case '70720':
  addStations(node, ["471,482"]);
 break;
case '70721':
  addStations(node, ["483,491"]);
 break;
case '70722':
  addStations(node, ["492,527"]);
 break;
case '70723':
  addStations(node, ["528,541"]);
 break;
case '70724':
  addStations(node, ["542,557"]);
 break;
case '70725':
  addStations(node, ["558,579"]);
 break;
case '70726':
  addStations(node, ["580,585"]);
 break;
case '70727':
  addStations(node, ["586,591"]);
 break;
case '70728':
  addStations(node, ["592,599"]);
 break;
case '70729':
  addStations(node, ["600,606"]);
 break;
case '70730':
  addStations(node, ["607,619"]);
 break;
case '70731':
  addStations(node, ["620,627"]);
 break;
case '70732':
  addStations(node, ["628,652"]);
 break;
case '70733':
  addStations(node, ["653,661"]);
 break;
case '71001':
  addStations(node, ["1,69"]);
 break;
case '71002':
  addStations(node, ["70,86"]);
 break;
case '71003':
  addStations(node, ["87,95"]);
 break;
case '71004':
  addStations(node, ["96,117"]);
 break;
case '71005':
  addStations(node, ["118,127"]);
 break;
case '71006':
  addStations(node, ["128,140"]);
 break;
case '71007':
  addStations(node, ["141,151"]);
 break;
case '71008':
  addStations(node, ["152,161"]);
 break;
case '71009':
  addStations(node, ["162,176"]);
 break;
case '71010':
  addStations(node, ["177,182"]);
 break;
case '71011':
  addStations(node, ["183,186"]);
 break;
case '71012':
  addStations(node, ["187,192"]);
 break;
case '71013':
  addStations(node, ["193,197"]);
 break;
case '71014':
  addStations(node, ["198,202"]);
 break;
case '71015':
  addStations(node, ["203,209"]);
 break;
case '71016':
  addStations(node, ["210,213"]);
 break;
case '70901':
  addStations(node, ["1,81"]);
 break;
case '70902':
  addStations(node, ["82,100"]);
 break;
case '70903':
  addStations(node, ["101,114"]);
 break;
case '70904':
  addStations(node, ["115,173"]);
 break;
case '70905':
  addStations(node, ["174,194"]);
 break;
case '70906':
  addStations(node, ["195,209"]);
 break;
case '70907':
  addStations(node, ["210,226"]);
 break;
case '70908':
  addStations(node, ["227,233"]);
 break;
case '70909':
  addStations(node, ["234,240"]);
 break;
case '70910':
  addStations(node, ["241,253"]);
 break;
case '70911':
  addStations(node, ["254,276"]);
 break;
case '70912':
  addStations(node, ["277,289"]);
 break;
case '70913':
  addStations(node, ["290,300"]);
 break;
case '71101':
  addStations(node, ["1,48"]);
 break;
case '71102':
  addStations(node, ["49,71"]);
 break;
case '71103':
  addStations(node, ["72,86"]);
 break;
case '71104':
  addStations(node, ["87,98"]);
 break;
case '71105':
  addStations(node, ["99,108"]);
 break;
case '71106':
  addStations(node, ["109,114"]);
 break;
case '71201':
  addStations(node, ["1,35"]);
 break;
case '71202':
  addStations(node, ["36,68"]);
 break;
case '71203':
  addStations(node, ["69,103"]);
 break;
case '71204':
  addStations(node, ["104,135"]);
 break;
case '71205':
  addStations(node, ["136,183"]);
 break;
case '71206':
  addStations(node, ["184,211"]);
 break;
case '71207':
  addStations(node, ["212,249"]);
 break;
case '71301':
  addStations(node, ["1,134"]);
 break;
case '71302':
  addStations(node, ["135,235"]);
 break;
case '71303':
  addStations(node, ["236,289"]);
 break;
case '71401':
  addStations(node, ["1,82"]);
 break;
case '71402':
  addStations(node, ["83,178"]);
 break;
case '80101':
  addStations(node, ["1,19"]);
 break;
case '80102':
  addStations(node, ["20,35"]);
 break;
case '80103':
  addStations(node, ["36,41"]);
 break;
case '80104':
  addStations(node, ["42,43"]);
 break;
case '80105':
  addStations(node, ["44,56"]);
 break;
case '80106':
  addStations(node, ["57,68"]);
 break;
case '80201':
  addStations(node, ["1,3"]);
 break;
case '80202':
  addStations(node, ["4,5"]);
 break;
case '80203':
  addStations(node, ["6,7"]);
 break;
case '80204':
  addStations(node, ["8,8"]);
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
  addStation(node, 1,140);
 break;
case '1000102':
  addStation(node, 141,188);
 break;
case '1000202':
  addStation(node, 271,385);
 break;
case '1000203':
  addStation(node, 189,270);
 break;
case '1000304':
  addStation(node, 386,516);
 break;
case '1000305':
  addStation(node, 517,590);
 break;
case '1000705':
  addStation(node, 1316,1357);
 break;
case '1000406':
  addStation(node, 591,738);
 break;
case '1000407':
  addStation(node, 739,809);
 break;
case '1000508':
  addStation(node, 810,922);
 break;
case '1000509':
  addStation(node, 923,986);
 break;
case '1000809':
  addStation(node, 1520,1548);
 break;
case '1000610':
  addStation(node, 987,1174);
 break;
case '1000711':
  addStation(node, 1175,1315);
 break;
case '1000812':
  addStation(node, 1358,1519);
 break;
case '2000101':
  addStation(node, 1,10);
 break;
case '2000102':
  addStation(node, 11,28);
 break;
case '2000103':
  addStation(node, 29,121);
 break;
case '2000104':
  addStation(node, 122,139);
 break;
case '2000105':
  addStation(node, 140,189);
 break;
case '2000106':
  addStation(node, 190,236);
 break;
case '2000207':
  addStation(node, 237,283);
 break;
case '2000208':
  addStation(node, 284,386);
 break;
case '2000209':
  addStation(node, 387,427);
 break;
case '2000309':
  addStation(node, 428,622);
 break;
case '2000410':
  addStation(node, 623,838);
 break;
case '2000510':
  addStation(node, 839,867);
 break;
case '2000511':
  addStation(node, 868,978);
 break;
case '2000512':
  addStation(node, 979,1028);
 break;
case '2000613':
  addStation(node, 1029,1197);
 break;
case '2000713':
  addStation(node, 1198,1362);
 break;
case '2000814':
  addStation(node, 1363,1563);
 break;
case '2000914':
  addStation(node, 1564,1606);
 break;
case '2000915':
  addStation(node, 1607,1744);
 break;
case '2001016':
  addStation(node, 1745,1886);
 break;
case '2001017':
  addStation(node, 1887,1954);
 break;
case '2001118':
  addStation(node, 1955,2128);
 break;
case '2001119':
  addStation(node, 2129,2144);
 break;
case '2001120':
  addStation(node, 2145,2157);
 break;
case '2001121':
  addStation(node, 2158,2167);
 break;
case '2001122':
  addStation(node, 2168,2173);
 break;
case '2001223':
  addStation(node, 2174,2192);
 break;
case '2001224':
  addStation(node, 2193,2208);
 break;
case '2001225':
  addStation(node, 2209,2319);
 break;
case '2001226':
  addStation(node, 2320,2331);
 break;
case '2001227':
  addStation(node, 2332,2377);
 break;
case '2001228':
  addStation(node, 2378,2395);
 break;
case '2001229':
  addStation(node, 2396,2413);
 break;
case '3000101':
  addStation(node, 1,74);
 break;
case '3000102':
  addStation(node, 75,146);
 break;
case '3000103':
  addStation(node, 147,182);
 break;
case '3000403':
  addStation(node, 550,718);
 break;
case '3000204':
  addStation(node, 183,226);
 break;
case '3000205':
  addStation(node, 227,265);
 break;
case '3000206':
  addStation(node, 266,295);
 break;
case '3000207':
  addStation(node, 296,375);
 break;
case '3000308':
  addStation(node, 376,549);
 break;
case '3000608':
  addStation(node, 1063,1088);
 break;
case '3000509':
  addStation(node, 719,836);
 break;
case '3000510':
  addStation(node, 837,897);
 break;
case '3000611':
  addStation(node, 898,994);
 break;
case '3000612':
  addStation(node, 995,1052);
 break;
case '3000613':
  addStation(node, 1053,1062);
 break;
case '4000101':
  addStation(node, 1,54);
 break;
case '4000102':
  addStation(node, 55,70);
 break;
case '4000103':
  addStation(node, 71,90);
 break;
case '4000104':
  addStation(node, 91,149);
 break;
case '4000105':
  addStation(node, 150,184);
 break;
case '4000206':
  addStation(node, 185,235);
 break;
case '4000207':
  addStation(node, 236,278);
 break;
case '4000208':
  addStation(node, 279,311);
 break;
case '4000209':
  addStation(node, 312,349);
 break;
case '4000210':
  addStation(node, 350,392);
 break;
case '4000211':
  addStation(node, 393,400);
 break;
case '4000711':
  addStation(node, 1276,1365);
 break;
case '4000312':
  addStation(node, 401,433);
 break;
case '4000313':
  addStation(node, 434,475);
 break;
case '4000314':
  addStation(node, 476,521);
 break;
case '4000315':
  addStation(node, 522,570);
 break;
case '4000416':
  addStation(node, 571,685);
 break;
case '4000417':
  addStation(node, 686,784);
 break;
case '4000518':
  addStation(node, 785,916);
 break;
case '4000519':
  addStation(node, 917,1003);
 break;
case '4000620':
  addStation(node, 1004,1068);
 break;
case '4000621':
  addStation(node, 1069,1081);
 break;
case '4000622':
  addStation(node, 1082,1129);
 break;
case '4000623':
  addStation(node, 1130,1186);
 break;
case '4000724':
  addStation(node, 1187,1275);
 break;
case '4000825':
  addStation(node, 1366,1451);
 break;
case '4000826':
  addStation(node, 1452,1461);
 break;
case '4000827':
  addStation(node, 1462,1482);
 break;
case '4000828':
  addStation(node, 1483,1520);
 break;
case '4000829':
  addStation(node, 1521,1536);
 break;
case '5000101':
  addStation(node, 1,29);
 break;
case '5000102':
  addStation(node, 30,61);
 break;
case '5000103':
  addStation(node, 62,79);
 break;
case '5000104':
  addStation(node, 80,105);
 break;
case '5000105':
  addStation(node, 106,136);
 break;
case '5000106':
  addStation(node, 137,184);
 break;
case '5000107':
  addStation(node, 185,209);
 break;
case '5000108':
  addStation(node, 210,232);
 break;
case '5000109':
  addStation(node, 233,256);
 break;
case '5000110':
  addStation(node, 257,275);
 break;
case '5000111':
  addStation(node, 276,294);
 break;
case '5000112':
  addStation(node, 295,314);
 break;
case '5000213':
  addStation(node, 315,338);
 break;
case '5000214':
  addStation(node, 339,378);
 break;
case '5000215':
  addStation(node, 379,413);
 break;
case '5000216':
  addStation(node, 414,442);
 break;
case '5000217':
  addStation(node, 443,453);
 break;
case '5000218':
  addStation(node, 454,469);
 break;
case '5000219':
  addStation(node, 470,478);
 break;
case '5000220':
  addStation(node, 479,498);
 break;
case '5000221':
  addStation(node, 499,521);
 break;
case '5000222':
  addStation(node, 522,548);
 break;
case '5000223':
  addStation(node, 549,557);
 break;
case '5000224':
  addStation(node, 558,594);
 break;
case '5000225':
  addStation(node, 595,604);
 break;
case '5000226':
  addStation(node, 605,614);
 break;
case '5000327':
  addStation(node, 615,704);
 break;
case '5000328':
  addStation(node, 705,782);
 break;
case '5000329':
  addStation(node, 783,821);
 break;
case '5000430':
  addStation(node, 832,851);
 break;
case '5000431':
  addStation(node, 862,931);
 break;
case '5000432':
  addStation(node, 942,1035);
 break;
case '5000533':
  addStation(node, 1036,1177);
 break;
case '5000534':
  addStation(node, 1178,1226);
 break;
case '5000535':
  addStation(node, 1227,1271);
 break;
case '5000536':
  addStation(node, 1272,1302);
 break;
case '5000537':
  addStation(node, 1303,1310);
 break;
case '6000101':
  addStation(node, 1,8);
 break;
case '6000102':
  addStation(node, 9,12);
 break;
case '6000103':
  addStation(node, 13,19);
 break;
case '6000104':
  addStation(node, 20,31);
 break;
case '6000105':
  addStation(node, 32,41);
 break;
case '6000106':
  addStation(node, 42,59);
 break;
case '6000107':
  addStation(node, 60,94);
 break;
case '6000108':
  addStation(node, 95,126);
 break;
case '6000109':
  addStation(node, 127,129);
 break;
case '6000110':
  addStation(node, 130,150);
 break;
case '6000111':
  addStation(node, 151,162);
 break;
case '6000112':
  addStation(node, 163,187);
 break;
case '6000113':
  addStation(node, 188,211);
 break;
case '6000114':
  addStation(node, 212,243);
 break;
case '6000215':
  addStation(node, 244,263);
 break;
case '6000216':
  addStation(node, 264,287);
 break;
case '6000217':
  addStation(node, 288,328);
 break;
case '6000218':
  addStation(node, 329,340);
 break;
case '6000219':
  addStation(node, 341,412);
 break;
case '6000220':
  addStation(node, 413,430);
 break;
case '6000221':
  addStation(node, 431,458);
 break;
case '6000222':
  addStation(node, 459,489);
 break;
case '6000323':
  addStation(node, 490,581);
 break;
case '6000324':
  addStation(node, 582,680);
 break;
case '6000425':
  addStation(node, 681,725);
 break;
case '6000426':
  addStation(node, 726,753);
 break;
case '6000427':
  addStation(node, 754,834);
 break;
case '6000428':
  addStation(node, 835,885);
 break;
case '6000529':
  addStation(node, 886,959);
 break;
case '6000530':
  addStation(node, 960,983);
 break;
case '6000531':
  addStation(node, 984,1001);
 break;
case '6000532':
  addStation(node, 1002,1057);
 break;
case '6000632':
  addStation(node, 1058,1190);
 break;
case '6000733':
  addStation(node, 1191,1212);
 break;
case '6000734':
  addStation(node, 1213,1254);
 break;
case '6000735':
  addStation(node, 1255,1369);
 break;
case '6000736':
  addStation(node, 1370,1389);
 break;
case '6000936':
  addStation(node, 1702,1800);
 break;
case '6000837':
  addStation(node, 1390,1616);
 break;
case '6000938':
  addStation(node, 1617,1701);
 break;
case '7080101':
  addStation(node, 1,78);
 break;
case '7080102':
  addStation(node, 79,128);
 break;
case '7080103':
  addStation(node, 129,170);
 break;
case '7080104':
  addStation(node, 171,202);
 break;
case '7080105':
  addStation(node, 203,234);
 break;
case '7080106':
  addStation(node, 235,257);
 break;
case '7080107':
  addStation(node, 258,288);
 break;
case '7080108':
  addStation(node, 289,327);
 break;
case '7080109':
  addStation(node, 328,358);
 break;
case '7080110':
  addStation(node, 359,379);
 break;
case '7080111':
  addStation(node, 380,389);
 break;
case '7080112':
  addStation(node, 390,396);
 break;
case '7010101':
  addStation(node, 1,94);
 break;
case '7010102':
  addStation(node, 95,165);
 break;
case '7010103':
  addStation(node, 166,194);
 break;
case '7010104':
  addStation(node, 195,221);
 break;
case '7010105':
  addStation(node, 222,268);
 break;
case '7010106':
  addStation(node, 269,301);
 break;
case '7010107':
  addStation(node, 302,319);
 break;
case '7010108':
  addStation(node, 320,335);
 break;
case '7010109':
  addStation(node, 336,345);
 break;
case '7010110':
  addStation(node, 346,357);
 break;
case '7010111':
  addStation(node, 358,365);
 break;
case '7010112':
  addStation(node, 366,379);
 break;
case '7010113':
  addStation(node, 380,385);
 break;
case '7020101':
  addStation(node, 1,61);
 break;
case '7020102':
  addStation(node, 62,73);
 break;
case '7020103':
  addStation(node, 74,108);
 break;
case '7020104':
  addStation(node, 109,117);
 break;
case '7020105':
  addStation(node, 118,151);
 break;
case '7020106':
  addStation(node, 152,167);
 break;
case '7020107':
  addStation(node, 168,207);
 break;
case '7020108':
  addStation(node, 208,223);
 break;
case '7020209':
  addStation(node, 224,293);
 break;
case '7020210':
  addStation(node, 294,302);
 break;
case '7020211':
  addStation(node, 303,311);
 break;
case '7020212':
  addStation(node, 312,378);
 break;
case '7020213':
  addStation(node, 379,390);
 break;
case '7020214':
  addStation(node, 391,397);
 break;
case '7020215':
  addStation(node, 398,425);
 break;
case '7020216':
  addStation(node, 426,440);
 break;
case '7020217':
  addStation(node, 441,450);
 break;
case '7020218':
  addStation(node, 451,468);
 break;
case '7030101':
  addStation(node, 1,28);
 break;
case '7030102':
  addStation(node, 29,40);
 break;
case '7030103':
  addStation(node, 41,108);
 break;
case '7030104':
  addStation(node, 109,173);
 break;
case '7030105':
  addStation(node, 174,206);
 break;
case '7030106':
  addStation(node, 207,238);
 break;
case '7030207':
  addStation(node, 239,422);
 break;
case '7030208':
  addStation(node, 423,459);
 break;
case '7030209':
  addStation(node, 460,480);
 break;
case '7030310':
  addStation(node, 481,516);
 break;
case '7030311':
  addStation(node, 517,555);
 break;
case '7030312':
  addStation(node, 556,584);
 break;
case '7030313':
  addStation(node, 585,626);
 break;
case '7030314':
  addStation(node, 627,657);
 break;
case '7030315':
  addStation(node, 658,674);
 break;
case '7030316':
  addStation(node, 675,690);
 break;
case '7030317':
  addStation(node, 691,717);
 break;
case '7030318':
  addStation(node, 718,747);
 break;
case '7030319':
  addStation(node, 748,774);
 break;
case '7030420':
  addStation(node, 775,801);
 break;
case '7030421':
  addStation(node, 802,899);
 break;
case '7030422':
  addStation(node, 900,933);
 break;
case '7030423':
  addStation(node, 934,971);
 break;
case '7030424':
  addStation(node, 972,996);
 break;
case '7030425':
  addStation(node, 997,1032);
 break;
case '7030426':
  addStation(node, 1033,1049);
 break;
case '7040101':
  addStation(node, 1,74);
 break;
case '7040102':
  addStation(node, 75,94);
 break;
case '7040103':
  addStation(node, 95,162);
 break;
case '7040104':
  addStation(node, 163,187);
 break;
case '7040105':
  addStation(node, 188,211);
 break;
case '7040106':
  addStation(node, 212,236);
 break;
case '7040207':
  addStation(node, 237,317);
 break;
case '7040208':
  addStation(node, 318,354);
 break;
case '7040209':
  addStation(node, 355,367);
 break;
case '7040210':
  addStation(node, 368,420);
 break;
case '7040211':
  addStation(node, 421,441);
 break;
case '7040212':
  addStation(node, 442,463);
 break;
case '7040213':
  addStation(node, 464,483);
 break;
case '7050101':
  addStation(node, 1,26);
 break;
case '7050102':
  addStation(node, 27,48);
 break;
case '7050103':
  addStation(node, 49,63);
 break;
case '7050104':
  addStation(node, 64,75);
 break;
case '7050105':
  addStation(node, 76,102);
 break;
case '7050106':
  addStation(node, 103,147);
 break;
case '7050107':
  addStation(node, 148,171);
 break;
case '7050108':
  addStation(node, 172,196);
 break;
case '7050109':
  addStation(node, 197,221);
 break;
case '7050110':
  addStation(node, 222,247);
 break;
case '7050111':
  addStation(node, 248,288);
 break;
case '7050212':
  addStation(node, 289,308);
 break;
case '7050213':
  addStation(node, 309,331);
 break;
case '7050214':
  addStation(node, 332,365);
 break;
case '7050215':
  addStation(node, 366,387);
 break;
case '7050216':
  addStation(node, 388,402);
 break;
case '7050217':
  addStation(node, 403,470);
 break;
case '7050218':
  addStation(node, 471,488);
 break;
case '7050219':
  addStation(node, 489,519);
 break;
case '7050220':
  addStation(node, 520,546);
 break;
case '7060101':
  addStation(node, 1,30);
 break;
case '7060102':
  addStation(node, 31,57);
 break;
case '7060103':
  addStation(node, 58,92);
 break;
case '7060104':
  addStation(node, 93,121);
 break;
case '7060105':
  addStation(node, 122,150);
 break;
case '7060106':
  addStation(node, 151,176);
 break;
case '7060107':
  addStation(node, 177,196);
 break;
case '7060108':
  addStation(node, 197,235);
 break;
case '7060209':
  addStation(node, 236,252);
 break;
case '7060210':
  addStation(node, 253,277);
 break;
case '7060211':
  addStation(node, 278,299);
 break;
case '7060212':
  addStation(node, 300,329);
 break;
case '7060213':
  addStation(node, 330,373);
 break;
case '7060214':
  addStation(node, 374,409);
 break;
case '7060215':
  addStation(node, 410,443);
 break;
case '7060216':
  addStation(node, 444,458);
 break;
case '7060217':
  addStation(node, 459,471);
 break;
case '7060218':
  addStation(node, 472,480);
 break;
case '7070101':
  addStation(node, 1,20);
 break;
case '7070102':
  addStation(node, 21,42);
 break;
case '7070103':
  addStation(node, 43,52);
 break;
case '7070104':
  addStation(node, 53,60);
 break;
case '7070105':
  addStation(node, 61,74);
 break;
case '7070106':
  addStation(node, 75,92);
 break;
case '7070107':
  addStation(node, 93,114);
 break;
case '7070108':
  addStation(node, 115,155);
 break;
case '7070109':
  addStation(node, 156,163);
 break;
case '7070110':
  addStation(node, 164,170);
 break;
case '7070111':
  addStation(node, 171,186);
 break;
case '7070112':
  addStation(node, 187,203);
 break;
case '7070113':
  addStation(node, 204,243);
 break;
case '7070214':
  addStation(node, 244,371);
 break;
case '7070215':
  addStation(node, 372,381);
 break;
case '7070216':
  addStation(node, 382,420);
 break;
case '7070317':
  addStation(node, 421,448);
 break;
case '7070318':
  addStation(node, 449,459);
 break;
case '7070319':
  addStation(node, 460,470);
 break;
case '7070320':
  addStation(node, 471,482);
 break;
case '7070321':
  addStation(node, 483,491);
 break;
case '7070322':
  addStation(node, 492,527);
 break;
case '7070323':
  addStation(node, 528,541);
 break;
case '7070324':
  addStation(node, 542,557);
 break;
case '7070325':
  addStation(node, 558,579);
 break;
case '7070326':
  addStation(node, 580,585);
 break;
case '7070327':
  addStation(node, 586,591);
 break;
case '7070328':
  addStation(node, 592,599);
 break;
case '7070329':
  addStation(node, 500,606);
 break;
case '7070330':
  addStation(node, 607,619);
 break;
case '7070331':
  addStation(node, 620,627);
 break;
case '7070332':
  addStation(node, 628,652);
 break;
case '7070333':
  addStation(node, 653,661);
 break;
case '7100101':
  addStation(node, 1,69);
 break;
case '7100102':
  addStation(node, 70,86);
 break;
case '7100103':
  addStation(node, 87,95);
 break;
case '7100104':
  addStation(node, 96,117);
 break;
case '7100105':
  addStation(node, 118,127);
 break;
case '7100106':
  addStation(node, 128,140);
 break;
case '7100107':
  addStation(node, 141,151);
 break;
case '7100108':
  addStation(node, 152,161);
 break;
case '7100109':
  addStation(node, 162,176);
 break;
case '7100110':
  addStation(node, 177,182);
 break;
case '7100111':
  addStation(node, 183,186);
 break;
case '7100112':
  addStation(node, 187,192);
 break;
case '7100113':
  addStation(node, 193,197);
 break;
case '7100114':
  addStation(node, 198,202);
 break;
case '7100115':
  addStation(node, 203,209);
 break;
case '7100116':
  addStation(node, 210,213);
 break;
case '7090101':
  addStation(node, 1,81);
 break;
case '7090102':
  addStation(node, 82,100);
 break;
case '7090103':
  addStation(node, 101,114);
 break;
case '7090104':
  addStation(node, 115,173);
 break;
case '7090105':
  addStation(node, 174,194);
 break;
case '7090106':
  addStation(node, 195,209);
 break;
case '7090107':
  addStation(node, 210,226);
 break;
case '7090108':
  addStation(node, 227,233);
 break;
case '7090109':
  addStation(node, 234,240);
 break;
case '7090110':
  addStation(node, 241,253);
 break;
case '7090111':
  addStation(node, 254,276);
 break;
case '7090112':
  addStation(node, 277,289);
 break;
case '7090113':
  addStation(node, 290,300);
 break;
case '7110101':
  addStation(node, 1,48);
 break;
case '7110102':
  addStation(node, 49,71);
 break;
case '7110103':
  addStation(node, 72,86);
 break;
case '7110104':
  addStation(node, 87,98);
 break;
case '7110105':
  addStation(node, 99,108);
 break;
case '7110106':
  addStation(node, 109,114);
 break;
case '7120101':
  addStation(node, 1,35);
 break;
case '7120102':
  addStation(node, 36,68);
 break;
case '7120103':
  addStation(node, 69,103);
 break;
case '7120104':
  addStation(node, 104,135);
 break;
case '7120105':
  addStation(node, 136,183);
 break;
case '7120106':
  addStation(node, 184,211);
 break;
case '7120107':
  addStation(node, 212,249);
 break;
case '7130101':
  addStation(node, 1,134);
 break;
case '7130102':
  addStation(node, 135,235);
 break;
case '7130103':
  addStation(node, 236,289);
 break;
case '7140101':
  addStation(node, 1,82);
 break;
case '7140102':
  addStation(node, 83,178);
 break;
case '8010101':
  addStation(node, 1,19);
 break;
case '8010102':
  addStation(node, 20,35);
 break;
case '8010103':
  addStation(node, 36,41);
 break;
case '8010104':
  addStation(node, 42,43);
 break;
case '8010105':
  addStation(node, 44,56);
 break;
case '8010106':
  addStation(node, 57,68);
 break;
case '8020101':
  addStation(node, 1,3);
 break;
case '8020102':
  addStation(node, 4,5);
 break;
case '8020103':
  addStation(node, 6,7);
 break;
case '8020104':
  addStation(node, 8,8);
 break;
      }


}

module.exports = {
	goSelArea: goSelArea,
	goSelAreaT1: goSelAreaT1
};
