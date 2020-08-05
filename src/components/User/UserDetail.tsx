import React from "react";
import BookService from "../../service/BookService";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { User } from "../../interfaces/User";
import UserService from "../../service/UserService";

interface UserDetailProps {
    id: number;

}
interface UserDetailState {

    user: User;

}
export class UserDetail extends React.Component<UserDetailProps, UserDetailState>{

    constructor(props: UserDetailProps) {
        super(props);
        this.state = {
            user: { id: 0, name: '', email: '', password: '', role: '' },

        }

    }
    // componentDidMount(){
    //     BookService.getBookById(book.id).then((res)=>{
    //         this.setState({book:res,isLoading:false})
    // });
    //}
    componentDidMount() {
        const id = this.props.id;
        UserService.getUserById(id).then((res) => {
            this.setState({ user: res })
        });

    }
    render() {

        return (

            <div style={{ marginLeft: '20px' }}>


                <br />
                <br />
                <label>Id:</label>
                {this.state.user.id}
                <br />

                <label>Name:</label>
                {this.state.user.name}
                <br />

                <label>Email:</label>
                {this.state.user.email}

            </div>
        );
    }
}
export default UserDetail