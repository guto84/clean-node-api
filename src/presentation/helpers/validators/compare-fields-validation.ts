import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fielToComparedName: string
  ) {
    this.fieldName = fieldName
    this.fielToComparedName = fielToComparedName
  }

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fielToComparedName]) {
      return new InvalidParamError(this.fielToComparedName)
    }
  }
}
