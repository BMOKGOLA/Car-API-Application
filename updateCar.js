
export function updateCar(cars, id, make, model, color, regNumber) {
    const index = cars.findIndex(car => car.id == id);
    if (index !== -1) {
        cars[index] = { id: parseInt(id), make, model, color, regNumber };
    }
    return cars;
}