let cars = {
    fordMav: {
        make: "Ford",
        model: "W8P",
        year: 2026,
        category:"Crew Cab Pickup",
        colour: "White",
        price: "46050",
        photo: 1,
        fuelType: "Gas",
        horsePower: 250,
        seatingCapacity: 5
    },
 fordEsc: {
        make: "Ford",
        model: "U9G",
        year: 2025,
        category: "Sport Utility",
        colour: "Carbonized Gray",
        price: 33980,
        photo: 1,
        fuelType: "Gas",
        horsePower: 180,
        seatingCapacity: 5
    },
 fordFus: {
        make: "Ford",
        model: "P0L",
        year: 2019,
        category: 1,
        colour: "White",
        price: "15584",
        photo: 1,
        fuelType: "Gas/Electric Hybrid",
        horsePower: 195,
        seatingCapacity: 5
    },
 car4: {
        make: 1,
        model: 1,
        year: 1,
        category: 1,
        colour: 1,
        price: 1,
        photo: 1,
        fuelType: 1,
        horsePower: 1,
        seatingCapacity: 1
    },
 car5: {
        make: 1,
        model: 1,
        year: 1,
        category: 1,
        colour: 1,
        price: 1,
        photo: 1,
        fuelType: 1,
        horsePower: 1,
        seatingCapacity: 1
    }

}

document.getElementById('fordMav').addEventListener('click', fordMav)

function fordMav(){
    document.getElementById('make').textContent = cars.fordMav.make; 
    document.getElementById('model').textContent = cars.fordMav.model;
    document.getElementById('year').textContent = cars.fordMav.year;
    document.getElementById('category').textContent = cars.fordMav.category;
    document.getElementById('color').textContent = cars.fordMav.colour;
    document.getElementById('price').textContent = cars.fordMav.price;
    document.getElementById('fuelType').textContent = cars.fordMav.fuelType;
    document.getElementById('horsePower').textContent = cars.fordMav.horsePower;
    document.getElementById('seatingCapacity').textContent = cars.fordMav.seatingCapacity;
    // document.getElementById('').textContent = cars.fordMav.x;
}