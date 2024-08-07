export function createCar(cars, color, make, model, regNumber) {
    let newCar = {
        color: color,
        make: make,
        model: model,
        regNumber: regNumber
    };
    cars.push(newCar);
    return cars;
}




