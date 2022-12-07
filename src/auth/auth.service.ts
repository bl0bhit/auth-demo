import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor (private usersService: UsersService,
                 private jwtService: JwtService){}


    async validateUser(username: string, password: string): Promise<any>{
        const user = await this.usersService.findOne(username);

        if(user && user.password === password){
            const { username, password, ...rest} = user;
            return rest
        }

        return null
    }


    async login(user: any){
        const payload = { name: user.name, sub: user.id};

        return {
            accessToken: this.jwtService.sign(payload)
        }
    }

}
