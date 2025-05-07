/**
 * Represents a ChargePoint.
 * @class
 */
export default class ChargePoint {
  /**
   * @param {Object} params
   * @param {string} params.id - UUID of the charge point.
   * @param {string} params.identity - OCPP identity of the charge point (required).
   * @param {string|Object} params.cpo - Organization id or object (Charge Point Operator).
   */
  constructor({ id, identity, cpo }) {
    this.id = id;
    this.identity = identity;
    this.cpo = cpo;
  }
}
