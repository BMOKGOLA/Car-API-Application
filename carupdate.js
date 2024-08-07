
// Get the list of cars
export const getCars = (req, res) => {
    res.send(carsData); // Send the list of cars
};

// Update a car by registration number
export const updateCar = (req, res) => {
    const regNumber = req.params.reg_number;
    const updatedCar = req.body;
    let carFound = false;

    carsData = carsData.map(car => {
        if (car.reg_number === regNumber) {
            carFound = true;
            return { ...car, ...updatedCar }; // Merge existing car with updates
        }
        return car;
    });

    if (carFound) {
        res.send(updatedCar); // Respond with updated car
    } else {
        res.status(404).send({ error: 'Car not found' });
    }
};

// Delete a car by registration number
export const deleteCar = (req, res) => {
    const regNumber = req.params.reg_number;
    const initialLength = carsData.length;

    // Remove car from the array
    carsData = carsData.filter(car => car.reg_number !== regNumber);

    if (carsData.length < initialLength) {
        res.status(204).send(); // No content to send back
    } else {
        res.status(404).send({ error: 'Car not found' });
    }
};
