export const users: IUser[] = [
    {
        username: 'user1',
        password: 'P4ssw0rd1'
    },
    {
        username: 'user2',
        password: 'P4ssw0rd2'
    }
];

export interface IUser {
    username: string;
    password: string;
}