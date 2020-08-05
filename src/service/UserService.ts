import { Constant } from "../constants/Constant";
import { Link, Redirect } from "react-router-dom";
import { NotFound } from "../components/NotFound";



class UserService {

    getToken(token: any) {
        localStorage.setItem("Authorization", token);
        Constant.accessToken = token;

    }
    getUser() {
        console.log(Constant.accessToken);
        // if(Constant.accessToken!==null){
        return fetch(Constant.baseUrl + '/users',
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + Constant.accessToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(
                res => res.json()
            );
            // }
// else{
//     return ;
// }

    }
    addUser(value: any) {
        return fetch(Constant.baseUrl + '/users/register',
            {
                method: 'POST',
                body: JSON.stringify(value),
                headers: {
                    'Authorization': 'Bearer ' + Constant.accessToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res => res.json()));
    }
    updateUser(value: any) {
        return fetch(Constant.baseUrl + '/users' ,
            {
                method: 'PUT',
                body: JSON.stringify(value),
                headers: {
                    'Authorization': 'Bearer ' + Constant.accessToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
    }
    deleteUser(id: number) {
        return fetch(Constant.baseUrl + '/users/' + id,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + Constant.accessToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then((res => res.json()));
    }
    getUserById(id: number) {
        return fetch(Constant.baseUrl + '/users/' + id, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + Constant.accessToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res => res.json()));
    }
    getUserByName(name:string){
        return fetch(Constant.baseUrl + '/users/getUserId/' +name,
        {
            method:'GET',
            headers:{
                'Authorization': 'Bearer ' + Constant.accessToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res=>res.json()));
    }

    // authentication(value: any): Promise<any> {


    //     return fetch(Constant.baseUrl + '/users/authenticate', {
    //         method: 'POST',
    //         body: JSON.stringify(value),
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //     }).then((res => res.json()));
    // }

}
export default new UserService();