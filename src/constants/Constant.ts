import { User } from "../interfaces/User";

export class Constant {
    public static accessToken: string = localStorage.getItem("Authorization") || '';
    public static baseUrl = 'http://localhost:8080';
    public static isLoggedIn=false;
    public static users:Array<User>=[];
    
}