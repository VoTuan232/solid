import { IDisplayElement } from "./IDisplayElement";
import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

export class CObserverForecastDisplay implements IObserver, IDisplayElement {
  private currentPressure = 29.92;
  private lastPressure: number;

  public constructor(weatherData: ISubject) {
    weatherData.registerObserver(this);
  }

  public update(temp: number, humidity: number, pressure: number) {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;
    this.display();
  }

  public display() {
    console.log("Forecast: ");
    if (this.currentPressure > this.lastPressure) {
      console.log("Improving weather on the way!");
    } else if (this.currentPressure == this.lastPressure) {
      console.log("More of the same");
    } else if (this.currentPressure < this.lastPressure) {
      console.log("Watch out for cooler, rainy weather");
    }
  }
}
