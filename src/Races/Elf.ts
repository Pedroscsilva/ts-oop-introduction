import Race from './Race';

class Elf extends Race {
  static instances = 0;
  private _maxLifePoints = 99;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Elf.instances += 1;
    return Elf.instances;
  }
}

export default Elf;
