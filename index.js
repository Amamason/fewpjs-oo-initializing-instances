// Write your code here
class Breakfast {
    constructor(food, drink ){
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;

    }
}
let todaysLunch = new Lunch('ham', 'toast','tea');
todaysLunch;
console.log(todaysLunch);

class Dinner {
    constructor(salad, soup, entree, _dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = _dessert;
    }
}

let tonightsDinner = new Dinner('french', 'peaham', 'prawns', 'chocolate');
console.log(tonightsDinner);

