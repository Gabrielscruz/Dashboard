import { getCustomRepository} from 'typeorm'
import { UsersRepositories  } from '../repositories/UsersRepositories'
import { compare } from 'bcryptjs'
import {sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
    login: string;
    password: string;
}

class AuthenticateUserService {
    async execute({login , password} : IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories)

        let data ={ token: '',id:'', access : false, user:{}}

        // Verifica se login existe 
        const User = await usersRepositories.findOne({
            login
        })

        if(!User) {
            return data
        }
        // Verifica se senha esta correta
        const passwordMatch = await compare(password, User.password)

        if(!passwordMatch) {
            return data
        }
        // Gera token
        const token = sign({
             login: User.login,
        },'f4f234e3f84c8982c2b3893588c1fee0',{
            subject: User.id,
            expiresIn: '1d'
        })


        data = {
            token: token,
            id: User.id,
            access: true,
            user: User
        }

        return data;

    }
} 

export {AuthenticateUserService}