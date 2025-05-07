/**
 * Represents an Organization.
 * @class
 */
export default class Organization {
  /**
   * @param {Object} params
   * @param {string} params.id - UUID of the organization.
   * @param {string} params.name - Name of the organization (required).
   * @param {string} [params.legalEntity] - Legal entity (optional).
   */
  constructor({ id, name, legalEntity }) {
    this.id = id;
    this.name = name;
    this.legalEntity = legalEntity;
  }
}
