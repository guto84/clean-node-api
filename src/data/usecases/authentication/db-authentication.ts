import { Authentication, AuthenticationModel } from "../../../domain/usecases/authentication";
import { HashComparer } from "../../protocols/cryptography/hash-comparer";
import { LoadAccountByEmailRepository } from "../../protocols/db/load-account-by-email-repository";

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepositrory: LoadAccountByEmailRepository
  private readonly hashComparer: HashComparer

  constructor (loadAccountByEmailRepositrory: LoadAccountByEmailRepository, hashComparer: HashComparer) {
    this.loadAccountByEmailRepositrory = loadAccountByEmailRepositrory
    this.hashComparer = hashComparer
  }

  async auth (authentication: AuthenticationModel): Promise<string> {
    const account = await this.loadAccountByEmailRepositrory.load(authentication.email)
    if (account) {
      await this.hashComparer.compare(authentication.password, account.password)
    }
    return null
  }
}
