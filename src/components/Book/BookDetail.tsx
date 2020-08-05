import React from "react";
import BookService from "../../service/BookService";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Book } from "../../interfaces/Book";

interface BookDetailProps {
    id: number;

}
interface BookDetailState {

    book: Book;

}
export class BookDetail extends React.Component<BookDetailProps, BookDetailState>{

    constructor(props: BookDetailProps) {
        super(props);
        this.state = {
            book: { id: 0, name: '', author: '', image: '' },

        }

    }
    // componentDidMount(){
    //     BookService.getBookById(book.id).then((res)=>{
    //         this.setState({book:res,isLoading:false})
    // });
    //}
    componentDidMount() {
        const id = this.props.id;
        BookService.getBookById(id).then((res) => {
            this.setState({ book: res })
        });

    }
    render() {

        return (

            <div style={{ marginLeft: '20px' }}>
                <br />

                <img style={{ width: '80px' }} src={this.state.book.image}></img>
                <br />
                <br />
                <label>BookName:</label>
                {this.state.book.name}
                <br />

                <label>Author:</label>
                {this.state.book.author}

            </div>
        );
    }
}
export default BookDetail