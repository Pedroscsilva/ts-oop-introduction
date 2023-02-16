import Race from './Race';

class Halfling extends Race {
  static instances = 0;
  private _maxLifePoints = 60;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Halfling.instances += 1;
    return Halfling.instances;
  }
}

export default Halfling;
