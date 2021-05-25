import { SignupController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignupController()
    const httpRequest = {
      email: 'any@email.com',
      password: 'any_password',
      password_confirmation: 'any_password'
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
