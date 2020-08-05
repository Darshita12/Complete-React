import { Constant } from "../constants/Constant";



class BookService {

    getToken(token: any) {
        localStorage.setItem("Authorization", token);
        Constant.accessToken = token;

    }
    getBook() {
        console.log(Constant.accessToken);
        return fetch(Constant.baseUrl + '/book/get',
            {
                method: 'GET',
                headers: {
                    // 'Authorization': 'Bearer ' + Constant.accessToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(
                res => res.json()
            )
            ;


    }
    addBook(value: any) {
        return fetch(Constant.baseUrl + '/book',
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
    updateBook(value: any) {
        return fetch(Constant.baseUrl + '/book',
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
    deleteBook(id: number) {
        return fetch(Constant.baseUrl + '/book/' + id,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + Constant.accessToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then((res => res.json()));
    }
    getBookById(id: number) {
        return fetch(Constant.baseUrl + '/book/' + id, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + Constant.accessToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res => res.json()));
    }

    authentication(value: any): Promise<any> {


        return fetch(Constant.baseUrl + '/users/authenticate', {
            method: 'POST',
            body: JSON.stringify(value),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res => res.json()));
    }
    assignedStatus(){
        console.log(Constant.accessToken);
        return fetch(Constant.baseUrl + '/users/admin',
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + Constant.accessToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res => res.json()));
    }
    bookAssign(userId:number,value:any){
        return fetch(Constant.baseUrl + '/users/assign/' + userId +'/'+ value,
        {
            method:'POST',
           
            headers:{
                'Authorization': 'Bearer ' + Constant.accessToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            }
        }
        ).then((res=>res.json()));
    }
    assignedBook(id:number){
        return fetch(Constant.baseUrl + '/users/assignedBook/' + id,
        {
            method:'GET',
            headers:{
                'Authorization': 'Bearer ' + Constant.accessToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            }
        }).then((res=>res.json()));
    }
    returnBook(id:number,value:any){
        return fetch(Constant.baseUrl + '/users/return/' + id,
        {
            method:'POST',
            body: JSON.stringify(value),
            headers:{
                'Authorization': 'Bearer ' + Constant.accessToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            }
        }).then((res=>res.json()));
    }
}
export default new BookService();