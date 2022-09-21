
interface Observer2 {
    update(args?: object): void;
}

interface DisplayElement {
    display(): void;
}


class Observable2 {
    private observers: Observer2[] = [];
    private changed = false;

    addObserver(observer: Observer2) {
        this.observers.push(observer)
    }

    deleteObserver(observer: Observer2) {
        const idx = this.observers.indexOf(observer);
        if (idx >= 0) this.observers.splice(idx, 1);
    }

    nofityObservers(args?: object) {
        if (this.changed) {
            for (let i = 0; i < this.observers.length; i++) {
                this.observers[i].update(args);
            }
            this.changed = false
        }
    }

    protected setChanged() {
        this.changed = true;
    }
}

class WeatherData2 extends Observable2 {
    private temperature: number;
    private humidity: number;
    private pressure: number;

    measurementChanged() {
        this.setChanged();
        this.nofityObservers()
    }

    setMeasurments(temp: number, humidity: number, pressure: number) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementChanged();
    }

    getTemperature() {
        return this.temperature;
    }

    getHumidity() {
        return this.humidity;
    }

    getPressure() {
        return this.pressure;
    }
}

class GeneralDisplay implements Observer2, DisplayElement {
    private temp: number;
    private humidity: number;
    private observable: Observable2;

    constructor(observable: Observable2) {
        this.observable = observable;
        observable.addObserver(this)
    }

    update(args?: object): void {
        if (this.observable instanceof WeatherData2) {
            this.temp = this.observable.getTemperature();
            this.humidity = this.observable.getHumidity();
        }
        this.display();
    }

    display() {
        console.log(`[GeneralDisplay]: Temp = ${this.temp}, Humidity = ${this.humidity}`)
    }
}

class ForecastDisplay implements Observer2, DisplayElement {
    private currentPressure: number = 10;
    private lastPressure: number;
    private observable: Observable2;

    constructor(observable: Observable2) {
        this.observable = observable;
        observable.addObserver(this)
    }

    update(args?: object) {
        if (this.observable instanceof WeatherData2) {
            this.lastPressure = this.currentPressure;
            this.currentPressure = this.observable.getPressure();
        }
        this.display();
    }

    display() {
        console.log(`[ForecastDisplay]: Current = ${this.currentPressure}, Last = ${this.lastPressure}`)
    }
}

class WeatherStation2 {
    main() {
        const weather = new WeatherData2()
        const generalDisplay = new GeneralDisplay(weather)
        const forecastDisplay = new ForecastDisplay(weather)
        weather.setMeasurments(100, 200, 300)
        weather.setMeasurments(101, 201, 301)
        weather.setMeasurments(102, 202, 302)
    }
}

new WeatherStation2().main()