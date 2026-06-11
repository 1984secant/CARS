let cars = {
    fordMav: {
        make: 'Ford',
        model: 'W8P',
        year: 2026,
        category:'Crew Cab Pickup',
        colour: 'White',
        price: '46050',
        photo: 1,
        fuelType: 'Gas',
        horsePower: 250,
        seatingCapacity: 5
    },
 fordEsc: {
        make: 'Ford',
        model: 'U9G',
        year: 2025,
        category: 'Sport Utility',
        colour: 'Carbonized Gray',
        price: 33980,
        photo: 1,
        fuelType: 'Gas',
        horsePower: 180,
        seatingCapacity: 5
    },
 fordFus: {
        make: 'Ford',
        model: 'P0L',
        year: 2019,
        category: 'Sedan',
        colour: 'White',
        price: 15584,
        photo: 1,
        fuelType: 'Gas/Electric Hybrid',
        horsePower: 195,
        seatingCapacity: 5
    },
 fordBron: {
        make: 'Ford',
        model: 'E9B',
        year: 2025,
        category: 'Sport Utility',
        colour: 'Carbonized Gray',
        price: 59145,
        photo: 1,
        fuelType: 'Gas',
        horsePower: 300,
        seatingCapacity: 5
    },
 fordExp: {
        make: 'Ford',
        model: 'K8K',
        year: 2026,
        category: 'Sport Utility',
        colour: 'Space White Metallic',
        price: 52695,
        photo: 1,
        fuelType: 'Gas',
        horsePower: 300,
        seatingCapacity: 5
    }

}

document.getElementById('mavButton').addEventListener('click', showMav)
document.getElementById('escButton').addEventListener('click', showEsc)
document.getElementById('fusiButton').addEventListener('click', showFusi)
document.getElementById('bronButton').addEventListener('click', showBron)
document.getElementById('expButton').addEventListener('click', showExp)

function showMav(){
    document.getElementById('make').textContent = cars.fordMav.make; 
    document.getElementById('model').textContent = cars.fordMav.model;
    document.getElementById('year').textContent = cars.fordMav.year;
    document.getElementById('category').textContent = cars.fordMav.category;
    document.getElementById('color').textContent = cars.fordMav.colour;
    document.getElementById('price').textContent = cars.fordMav.price;
    document.getElementById('fuelType').textContent = cars.fordMav.fuelType;
    document.getElementById('horsePower').textContent = cars.fordMav.horsePower;
    document.getElementById('passengers').textContent = cars.fordMav.seatingCapacity;
}

function showEsc(){
    document.getElementById('make').textContent = cars.fordEsc.make; 
    document.getElementById('model').textContent = cars.fordEsc.model;
    document.getElementById('year').textContent = cars.fordEsc.year;
    document.getElementById('category').textContent = cars.fordEsc.category;
    document.getElementById('color').textContent = cars.fordEsc.colour;
    document.getElementById('price').textContent = cars.fordEsc.price;
    document.getElementById('fuelType').textContent = cars.fordEsc.fuelType;
    document.getElementById('horsePower').textContent = cars.fordEsc.horsePower;
    document.getElementById('passengers').textContent = cars.fordEsc.seatingCapacity;
}

function showFusi(){
    document.getElementById('make').textContent = cars.fordFus.make; 
    document.getElementById('model').textContent = cars.fordFus.model;
    document.getElementById('year').textContent = cars.fordFus.year;
    document.getElementById('category').textContent = cars.fordFus.category;
    document.getElementById('color').textContent = cars.fordFus.colour;
    document.getElementById('price').textContent = cars.fordFus.price;
    document.getElementById('fuelType').textContent = cars.fordFus.fuelType;
    document.getElementById('horsePower').textContent = cars.fordFus.horsePower;
    document.getElementById('passengers').textContent = cars.fordFus.seatingCapacity;
}

function showBron(){
    document.getElementById('make').textContent = cars.fordBron.make; 
    document.getElementById('model').textContent = cars.fordBron.model;
    document.getElementById('year').textContent = cars.fordBron.year;
    document.getElementById('category').textContent = cars.fordBron.category;
    document.getElementById('color').textContent = cars.fordBron.colour;
    document.getElementById('price').textContent = cars.fordBron.price;
    document.getElementById('fuelType').textContent = cars.fordBron.fuelType;
    document.getElementById('horsePower').textContent = cars.fordBron.horsePower;
    document.getElementById('passengers').textContent = cars.fordBron.seatingCapacity;
}

function showExp(){
    document.getElementById('make').textContent = cars.fordExp.make; 
    document.getElementById('model').textContent = cars.fordExp.model;
    document.getElementById('year').textContent = cars.fordExp.year;
    document.getElementById('category').textContent = cars.fordExp.category;
    document.getElementById('color').textContent = cars.fordExp.colour;
    document.getElementById('price').textContent = cars.fordExp.price;
    document.getElementById('fuelType').textContent = cars.fordExp.fuelType;
    document.getElementById('horsePower').textContent = cars.fordExp.horsePower;
    document.getElementById('passengers').textContent = cars.fordExp.seatingCapacity;
}