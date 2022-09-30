// Concrete Observer 

import { IDisplayElement } from "./IDisplayElement";
import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

export class CObserverCurrentConditionsDisplay implements IObserver, IDisplayElement {
	private temperature: number;
	private humidity: number;
	
	public constructor(weatherData: ISubject) {
        weatherData.registerObserver(this);
	}
	
	public update(temperature: number, humidity: number, pressure: number) {
		this.temperature = temperature;
		this.humidity = humidity;
		this.display();
	}
	
	public display() {
		console.log("Current conditions: " + this.temperature 
			+ "F degrees and " + this.humidity + "% humidity");
	}
}