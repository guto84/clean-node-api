import { InvalidParamError } from '../../presentation/errors'
import { Validation } from '../../presentation/protocols'

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
