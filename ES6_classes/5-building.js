export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // Méthode "abstraite" à redéfinir par les sous-classes
  evacuationWarningMessage() {
    throw new Error(
      "Class extending Building must override evacuationWarningMessage"
    );
  }
}
