import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static instances = 0;
  private _energyType: EnergyType = 'stamina';

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    Warrior.instances += 1;
    return Warrior.instances;
  }
}

export default Warrior;