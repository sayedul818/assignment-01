function formatString(input: string, toUpper: boolean = true): string {
    if (toUpper) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];

    for (let i = 0; i < arrays.length; i++) {
        result = result.concat(arrays[i]);
    }

    return result;
}


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}


function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2;
    }
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }

    let maxProduct = products[0];

    for (let i = 1; i < products.length; i++) {
        if (products[i].price > maxProduct.price) {
            maxProduct = products[i];
        }
    }

    return maxProduct;
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function getDayType(day: Day): string {
    if (day === Day.Friday || day === Day.Saturday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}
async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        n < 0
          ? reject(new Error("Negative number not allowed"))
          : resolve(n * n);
      }, 1000);
    });
  }
  