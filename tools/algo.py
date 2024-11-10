from scraper import getFoods
from operator import itemgetter
import random


arr = getFoods()

def isLow(pct, time):
    if time == 'lunch':
        return pct < .2
    elif time == 'dinner':
        return pct < .5
    elif time == 'latenight':
        return pct < .7
    
    
def removeDupes(arr):
    seenFoods = set()
    result = []
    
    for obj in arr:
        food = obj['name']
        if food not in seenFoods:
            seenFoods.add(food)
            result.append(obj)
            
    return result
   
def bestFoods(pctCalories, pctProtein, pctCarbs, pctFat, allergies, time):
    
    def foo(x):
            for a in allergies:
                if a in x['allergens']:
                    return False
            return True
    foods = removeDupes(arr)
    foods = list(filter(foo, foods))
    if time == 'breakfast':
        breakfastFoods = list(filter(lambda x: x['time'] == 'breakfast_menu' and x['calories'] > 80, foods))
        breakfastFoods = sorted(breakfastFoods, key=lambda x: x['nutritionVal'])[len(breakfastFoods):]
        finalFoods = random.sample(breakfastFoods, k=5)
        
    else:
        laterFoods = list(filter(lambda x: x['time'] == time+'_menu' and x['calories'] > 150, foods))
        
        if isLow(pctCalories, time):
            laterFoods = sorted(laterFoods, key=lambda x: x['calories'])
            finalFoods = random.sample(laterFoods[-10:-2], k=4)
            finalFoods.append(laterFoods[-1])
            
            
            
        elif isLow(pctProtein, time) and isLow(pctCarbs, time) and isLow(pctFat, time):
            finalFoods = random.sample(sorted(laterFoods, key=lambda x: x['protein'] + .5 * x['carbs']['total'] + .5 * x['fat']['total'])[-10:], k=5)
        elif isLow(pctProtein, time):
            finalFoods = random.sample(sorted(laterFoods, key=lambda x: x['protein'] / x['calories'])[-10:], k=5)
        else:
            finalFoods = random.sample(sorted(laterFoods, key=lambda x: .5 * x['protein'] + x['carbs']['total'] + x['fat']['total'])[-10:], k=5)
          
        return finalFoods
        
bestFoods(.7, .1, .7, .7, ["Milk"], 'dinner')






