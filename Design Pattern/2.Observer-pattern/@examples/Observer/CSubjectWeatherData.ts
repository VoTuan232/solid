import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

// Concrete Subject
export class CSubjectWeatherData implements ISubject {
	private observers: IObserver[] = [];
	private temperature: number;
	private humidity: number;
	private pressure: number;
	
	public constructor() {
		this.observers = [];
	}
	
	public registerObserver(o: IObserver) {
		this.observers.push(o);
	}
	
	public removeObserver(o: IObserver) {
		const i = this.observers.indexOf(o);
		if (i >= 0) {
			this.observers.splice(i, 1);
		}
	}
	
	notifyObservers() {
		for (let i = 0; i < this.observers.length; i++) {
			const observer: IObserver = this.observers[i];
			observer.update(this.temperature, this.humidity, this.pressure);
		}
	}
	
	private measurementsChanged() {
		this.notifyObservers();
	}
	
	public setMeasurements(temperature: number, humidity: number, pressure: number) {
		this.temperature = temperature;
		this.humidity = humidity;
		this.pressure = pressure;
		this.measurementsChanged();
	}
	
	public getTemperature(): number {
		return this.temperature;
	}
	
	public getHumidity(): number {
		return this.humidity;
	}
	
	public getPressure(): number {
		return this.pressure;
	}
}