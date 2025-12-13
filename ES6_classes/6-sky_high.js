import Building from "./5-building";

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Initialise sqft dans la classe parent
    this._floors = floors;
  }

  // Getter pour floors
  get floors() {
    return this._floors;
  }

  // Getter pour sqft (optionnel, déjà dans parent)
  get sqft() {
    return this._sqft;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
