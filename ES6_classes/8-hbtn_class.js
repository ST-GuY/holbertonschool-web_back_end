export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Conversion en nombre
  valueOf() {
    return this._size;
  }

  // Conversion en string
  toString() {
    return this._location;
  }
}
