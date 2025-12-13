export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Redéfinition de la méthode par défaut toString()
  toString() {
    return `[object ${this._code}]`;
  }
}
