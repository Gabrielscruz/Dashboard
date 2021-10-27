import { Request , Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'

class CreateUserController {
    async handle(request: Request, response: Response){
        const { name, login ,email, admin, registration, password, companies, occupation} = request.body

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, login ,email, admin, registration, password, companies, occupation})

        return response.json(user)
    }
}

export { CreateUserController}