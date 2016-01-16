import json

with open('不分區立委資料.json', 'r') as f:
    data = json.load(f)

party = [x['政黨'] for x in data[0]['data']]

with open('不分區立委資料.csv', 'w') as f:
    print("區,{},網址".format(",".join(party)), file = f)

    for county in data:
        a = []
        for i in range(len(county['data'])):
            if county['data'][i]['政黨'] != party[i]:
                print("error")
            a.append(county['data'][i]['得票數'].replace(",", ""))

        print("{},{},{}".format(county['name'], ",".join(a), county['link']), file =f)
        
        for subcounty in county['nodes']:
            a = []
            for i in range(len(subcounty['data'])):
                if subcounty['data'][i]['政黨'] != party[i]:
                    print("error")
                a.append(subcounty['data'][i]['得票數'].replace(",", ""))

            print("{},{},{}".format(county['name'] + subcounty['name'], ",".join(a), subcounty['link']), file =f)
