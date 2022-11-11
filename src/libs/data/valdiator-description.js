export default class ValidatorDescription {
  constructor() {
    this.moniker = 'Silk Nodes'
    this.identity = 'string'
    this.website = 'https://explorer.silknodes.io'
    this.security_contact = 'string'
    this.details = 'string'
  }

  init(element) {
    if (element != null) {
      this.moniker = element.moniker
      this.identity = element.identity
      this.website = element.website
      this.security_contact = element.security_contact
      this.details = element.details
    }
    return this
  }
}
