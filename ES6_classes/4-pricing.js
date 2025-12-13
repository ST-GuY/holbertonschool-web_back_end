import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter & Setter
  get amount() {
    return this._amount;
  }
  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }
  set currency(value) {
    this._currency = value;
  }

  // Méthode d’instance
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Méthode statique
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
