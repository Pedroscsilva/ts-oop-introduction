import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static instances = 0;
  private _energyType: EnergyType = 'mana';

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    Mage.instances += 1;
    return Mage.instances;
  }
}

export default Mage;