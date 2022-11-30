export interface IUser {
    name: string;
    age: number
  }

export const getUsersApi = (): Promise<IUser[]> => {
    const users = [
        { name: 'Tsunode', age: 24 },
        { name: 'Gabriel', age: 23 },
        { name: 'Fernandes', age: 21 },
        { name: 'Arielle', age: 19 },
    ];

    return new Promise(resolve => 
        setTimeout(() => resolve(users), 2000)
    );
}