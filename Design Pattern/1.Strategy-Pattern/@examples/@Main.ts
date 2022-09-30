import { CFlyRocketPowered } from "./CFlyRocketPowered";
import { SubCMallardDuck } from "./SubCMallarDuck";
import { SubCModeldDuck } from "./SubCModelDuck";

class Main {
    main() {
        const mallard = new SubCMallardDuck();
		mallard.performQuack();
		mallard.performFly();
   
		const model = new SubCModeldDuck();
		model.performFly();
		model.setFlyBehavior(new CFlyRocketPowered());
		model.performFly();
    }
}

new Main().main()