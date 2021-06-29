import { Authentication, AuthenticationModel } from "../../../domain/usecases/authentication";
import { LoadAccountByEmailRepository } from "../../protocols/db/load-account-by-email-repository";

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepositrory: LoadAccountByEmailRepository

  constructor (loadAccountByEmailRepositrory: LoadAccountByEmailRepository) {
    this.loadAccountByEmailRepositrory = loadAccountByEmailRepositrory
  }

  async auth (authentication: AuthenticationModel): Promise<string> {
    await this.loadAccountByEmailRepositrory.load(authentication.email)
    return null
  }
}
