import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static instances = 0;
  private _energyType: EnergyType = 'stamina';

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    Ranger.instances += 1;
    return Ranger.instances;
  }
}

export default Ranger;