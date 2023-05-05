const express = require('express')
const router = express.Router()

module.exports = () =>{
    const router = new SignUpRouter()
    router.post('/signup', new ExpressRouterAdapter.adapt(router));
}

class ExpressRouterAdapter{
    static adapt (router){
        return async (req, res) => {
            const httpRequest = {
                body: req.body
            }
            const httpResponse = await router.route(httpRequest)
            res.status(httpResponse.statusCode).json(httpResponse.body)
        }
    }
}

// Presentation
//signup-router
class SignUpRouter{
    async route(httpRequest) {
        const {email, password, repeatPasword} = httpRequest.body
        const user = new SignUpUseCase().signUp(email, password, repeatPasword)
        return{
            statusCode: 200,
            body: user
        }
    }
}

// Domain
//signup-usecase
class SignUpUseCase {
    async signUp(email, password, repeatPasword){
        if(password === repeatPasword) {
            new AddAcountRepository().add(email, password)
        }
    }
}

// Infra
//add-acount-repository
const mongoose = require('mongoose')
const AccountModel = mongoose.model('Account')

class AddAcountRepository {
    async add (email, password, repeatPasword){
        const user = await AccountModel.create({email, password})
        return user
    }
}