import { InvalidParamError } from '../../errors'
import { Validation } from './validation'

export class CompareFieldsValidation implements Validation {
  private readonly fieldName: string
  private readonly fielToComparedName: string

  constructor(fieldName: string, fielToComparedName: string) {
    this.fieldName = fieldName
    this.fielToComparedName = fielToComparedName
  }

  validate(input: any): Error {
    if (input[this.fieldName] !== input[this.fielToComparedName]) {
      return new InvalidParamError(this.fielToComparedName)
    }
  }
}