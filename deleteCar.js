export function deleteCar(cars, id) {
    return cars.filter(car => car.id != id);
}