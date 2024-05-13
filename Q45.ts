function carInfo(manufacturer: string, model: string, ...details: { [key: string]: string }[]): { [key: string]: string } {
    const car: { [key: string]: string } = {
        "Manufacturer": manufacturer,
        "Model": model
    };

    details.forEach(detail => {
        const key = Object.keys(detail)[0];
        car[key] = detail[key];
    });

    return car;
}

const car1 = carInfo("Toyota", "Corolla", { "Color": "Red" }, { "Year": "2022" });
console.log(car1);

const car2 = carInfo("Honda", "Civic", { "Color": "Blue" }, { "Year": "2020" }, { "Feature": "Sunroof" });
console.log(car2);
