import { CObserverCurrentConditionsDisplay } from "./CObserverCurrentDisplay";
import { CObserverForecastDisplay } from "./CObserverForecastDispay";
import { CSubjectWeatherData } from "./CSubjectWeatherData";
import { ISubject } from "./ISubject";

class MainWeatherStation {

	public static main() {
		const weatherData: CSubjectWeatherData = new CSubjectWeatherData();
	
		const currentDisplay = 
			new CObserverCurrentConditionsDisplay(weatherData);
		const forecastDisplay = new CObserverForecastDisplay(weatherData);

		weatherData.setMeasurements(80, 65, 30.4);
		weatherData.setMeasurements(82, 70, 29.2);
		weatherData.setMeasurements(78, 90, 29.2);
	}
}

MainWeatherStation.main();