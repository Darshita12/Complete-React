import React from "react";
import BookService from "../service/BookService";
import { Book } from "../interfaces/Book";
interface BookAssignProps{
    id:number;
}
interface BookAssignState{
    book:Book;
}
export class BookAssign extends React.Component<BookAssignProps,BookAssignState>{
    constructor(props:BookAssignProps){
        super(props);
        this.state={
            book: { id: 0, name: '', author: '', image: '' },
        }
    }
    componentDidMount(){
        const id=this.props.id;
        const userid=123
        BookService.getBookById(id).then((res)=>this.setState({book:res}));
        BookService.bookAssign(userid,id).then(res=>console.log(res));
    }
    render(){
        return(
            <div>
                <h2>Book Assigned</h2>
            </div>
        )
    }
}