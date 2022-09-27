class Settings {

    static instance: Settings = new Settings();
    public readonly mode = 'dark';
  
    // prevent new with private constructor
    private constructor() {
  
    }

    static getInstance(): Settings {
    //   if (!Settings.instance) {
    //     Settings.instance = new Settings();
    //   }
  
      return Settings.instance;
    }
  
  }
  
  // const settings = new Settings() // throws error: Constructor of class 'Settings' is private and only accessible within the class declaration.
  const settings2 = Settings.getInstance();
  console.log(settings2)
  const settings3 = Settings.getInstance();
  console.log(settings3)

  console.log(settings2 == settings3)
  console.log(settings2 === settings3)