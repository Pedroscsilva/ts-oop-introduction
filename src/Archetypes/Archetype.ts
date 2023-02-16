import { EnergyType } from '../Energy';

abstract class Archetype {
  _name: string;
  _special: number;
  _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  get name() { return this._name; }
  get special() { return this._special; }
  get cost() { return this._cost; }

  abstract get energyType(): EnergyType;
}

export default Archetype;
