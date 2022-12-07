import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;

}


@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Marius',
            username: 'marius',
            password: 'securiTee'
        },
        {
            id: 2,
            name: 'mogambo',
            username: 'gumgamboOo',
            password: 'suttebaaj'
        },
    ];


    async findOne(username: string){
        return this.users.find(user => user.username === username);

    }
}
