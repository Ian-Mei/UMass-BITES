from bs4 import BeautifulSoup
import requests
import json


halls = ["berkshire", "franklin", "hampshire", "worcester"]

arr = []

for h in halls:
    #normal dining halls
    url = 'https://umassdining.com/locations-menus/'+ h + '/menu'
    page = requests.get(url)

    soup = BeautifulSoup(page.text, "html.parser")

    results = soup.find_all('li', attrs={'class':'lightbox-nutrition'});

    
    for  i in range (len(results)):
        r = results[i].a

        foodResults = {
            'name': r.text,
            'servingSize': r['data-serving-size'].split(" ")[0],
            'servingUnit': r['data-serving-size'].split(" ")[1],
            'calories': r['data-calories'],
            'calsFromFat': r['data-calories-from-fat'],
            'fat': {
                'total': r['data-total-fat'],
                'saturated': r['data-sat-fat'],
                'trans': r['data-trans-fat'],
            },
            'cholesterol': r['data-cholesterol'],
            'sodium': r['data-sodium'],
            'carbs': {
                'total': r['data-total-carb'],
                'fiber': r['data-dietary-fiber'],
                'sugar': r['data-sugars'],
            },
            'protein': r['data-protein'],
            'ingredients': r['data-ingredient-list'],
            'allergens': r['data-allergens'].split(", "),
        }
        #arr.append(json.dumps(foodResults))
        requests.post('http://localhost:3001/food/add', json=json.dumps(foodResults))
        
    #grab n gos
    
    urlG = 'https://umassdining.com/menu/'+h+'-grab-n-go'
    if (h.__eq__("berkshire")):
        urlG+="-menu"
    pageG = requests.get(urlG)

    soupG = BeautifulSoup(pageG.text, "html.parser")
    
    day = soupG.find('div', attrs={'id':'content_text'})
    
    closed = day.text
    print(closed)
    
    if ("closed" not in closed):
        resultsG = soup.find_all('li', attrs={'class':'lightbox-nutrition'});

    
        for  i in range (len(resultsG)):
            rG = results[i].a

            foodResults = {
                'name': rG.text,
                'servingSize': rG['data-serving-size'].split(" ")[0],
                'servingUnit': rG['data-serving-size'].split(" ")[1],
                'calories': rG['data-calories'],
                'calsFromFat': rG['data-calories-from-fat'],
                'fat': {
                    'total': rG['data-total-fat'],
                    'saturated': rG['data-sat-fat'],
                    'trans': rG['data-trans-fat'],
                },
                'cholesterol': rG['data-cholesterol'],
                'sodium': rG['data-sodium'],
                'carbs': {
                    'total': rG['data-total-carb'],
                    'fiber': rG['data-dietary-fiber'],
                    'sugar': rG['data-sugars'],
                },
                'protein': rG['data-protein'],
                'ingredients': rG['data-ingredient-list'],
                'allergens': rG['data-allergens'].split(", "),
            }
            #arr.append(json.dumps(foodResults))
            requests.post('http://localhost:3001/food/add', json=json.dumps(foodResults))
    
    
    