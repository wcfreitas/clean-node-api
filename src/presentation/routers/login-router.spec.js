class LoginRouter{
    route(httpRequest) {
        if(!httpRequest.body.email){
            return {
                statusCode: 400
            }
        }
         {
            
        }
    }
}

describe('Login Router', () =>  {
    test('Shuld return 400 if no email is provided', () => {
        const sut = new LoginRouter()
        const httpRequest = {
            body:{
                password: 'any_password'
            }
        }
        const httpResponse = sut.route(httpRequest)
        expected(httpRequest.statusCode).toBe(400)
    })
})