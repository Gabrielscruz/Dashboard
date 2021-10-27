import { getCustomRepository } from "typeorm";
import { UsersRepositories } from '../repositories/UsersRepositories'
import { hash } from 'bcryptjs'

interface IUserRequest {
    name:   string;
    email:  string;
    admin?: number;
    login: string;
    registration: number;
    password: string;
    companies: string;
    occupation: string;
}

class CreateUserService {
    async execute ({name,login, email, admin, registration, password , companies , occupation} : IUserRequest ){
        const usersRepository = getCustomRepository(UsersRepositories);
        const passwordHash = await hash(password,8);
        if(!email){
            throw new Error('Email incorrect')
        }

        const userAlreadyExists = await usersRepository.findOne({
            login
        })

        if(userAlreadyExists){
            throw new Error('User already exists')
        }

        const user = usersRepository.create({
            name,
            login, 
            email, 
            admin, 
            registration, 
            companies, 
            occupation,
            password: passwordHash
        })

        await usersRepository.save(user)

        return user;
    }
}

export { CreateUserService }