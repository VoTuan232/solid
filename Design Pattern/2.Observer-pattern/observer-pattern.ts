
/**
 * 1 class Observer sẽ implement 1 interface Observable và other interface
 * 1 class Observer sẽ có 1 thuộc tính Subject
 * 1 class Subject sẽ implement 1 interface Subject
 * 1 Subject sẽ có 1 thuộc tính observers[]
 */


interface Observer {
    update(temp: number, humidity: number, pressure: number): void;
}

interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObserver(): void;
}

interface DisplayElement {
    display(): void;
}

class WeatherData implements Subject {
    private temperature: number;
    private humidity: number;
    private pressure: number;
    private observers: Observer[] = [];

    registerObserver(observer: Observer): void {
        this.observers.push(observer)
    }

    removeObserver(observer: Observer): void {
        const idx = this.observers.indexOf(observer);
        if (idx >= 0 ) this.observers.splice(idx, 1)
    }

    notifyObserver(): void {
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this.temperature, this.humidity, this.pressure)
        }
    }

    measurementsChanged() {
        this.notifyObserver();
    }

    setMeasurements(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged()
    }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private subject: Subject;

    constructor(subject: Subject) {
        this.subject = subject;
        this.subject.registerObserver(this);
    }

    update(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp;
        this.humidity = humidity;
        this.display()
    }

    display(): void {
        console.log(`Current conditions: temperature ${this.temperature} F degress, humidity ${this.humidity}`)
    }
}

class StatisticsConditionsDisplay implements Observer, DisplayElement {
    private temperature: number;
    private subject: Subject;

    constructor(subject: Subject) {
        this.subject = subject;
        this.subject.registerObserver(this);
    }

    update(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp;
        this.display()
    }

    display(): void {
        console.log(`Statistics conditions: Avg/Max/Min = ${this.temperature}/${this.temperature}/${this.temperature}`)
    }
}

class WeatherStation {
    main() {
        const weatherData = new WeatherData();
        const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData)
        const statisticsConditionDisplay = new StatisticsConditionsDisplay(weatherData)
        weatherData.setMeasurements(100, 200, 300);
        weatherData.setMeasurements(101, 200, 300);
        weatherData.setMeasurements(102, 200, 300);
        weatherData.setMeasurements(103, 200, 300);
    }
}

const weatherStatiion = new WeatherStation()
weatherStatiion.main()