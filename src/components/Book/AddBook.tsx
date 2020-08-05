import React from "react";
import BookService from "../../service/BookService";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }),
)(InputBase);

interface AddBookProps {


}
interface AddBookState {

    name: string;
    author: string;
    image: string;

}
export class AddBook extends React.Component<AddBookProps, AddBookState>{
    constructor(props: AddBookProps) {
        super(props);
        this.state = {
            name: '',
            author: '',
            image: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const state = this.state;
        this.setState({
            ...state,
            [event.target.name]: event.target.value

        })
    }
    handleSubmit(event: any) {
        BookService.addBook(this.state).then(res => console.log(res));
        event.preventDefault();

    };
    render() {
        return (
            //             <div className="container col-lg-6">
            //             <br/>
            //             <br/>
            //           <h1 className="text-center">Registration</h1>
            //           <br/>
            //           <div className="card">
            //               <div className="card-body">
            //               <form onSubmit={this.handleSubmit}>
            //               <br />

            //               <FormControl>
            //                   <div className="form-group">
            //                       <span>Select:</span>

            //                       <select className="custom-select"  id="demo-customized-textbox" name="role" onChange={this.handleChange}>
            //                           <option>
            //                               ---Select---
            //                       </option>
            //                           <option>
            //                               User
            //                       </option>
            //                           <option>
            //                               Admin
            //                       </option>
            //                       </select>
            //                   </div>
            //               </FormControl>
            //               <br />
            //               <br />
            //               <FormControl>
            //                   <div className="form-group">
            //                       <span>Username: </span>
            //                       <br/>
            //                       <BootstrapInput id="demo-customized-textbox" type="text" placeholder="Enter Username" value={this.state.name} name="name" onChange={this.handleChange} />
            //                   </div>
            //               </FormControl>
            //               <br />
            //               <br />
            //               <FormControl>
            //                         <span>Email:</span>

            //                         <BootstrapInput id="demo-customized-textbox" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
            //                     </FormControl>
            //                     <br />
            //                     <br />
            //               <FormControl>
            //                   <div className="form-group">
            //                       <span>Password: </span>
            //                       <br/>
            //                       <BootstrapInput id="demo-customized-textbox" type="text" name="password" placeholder="Enter Password" onChange={this.handleChange} />
            //                   </div>
            //               </FormControl>

            //               <br />
            //               <br />
            //               <div className="form-group">
            //                   <Button type="submit" variant="contained" size="medium" color="primary">

            //                       REGISTER
            //   </Button>
            //               </div>

            //       </form>
            //       </div>
            //       </div>
            //       </div>
            <div className="container col-lg-6">
                <br />
                <br />
                <h1 className="text-center">Book Registration</h1>
                <br />
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <br />
                            <div>
                                <FormControl>
                                    <div className="form-group">
                                        <span>Name: </span>
                                        <br />
                                        <BootstrapInput id="demo-customized-textbox" type="text" placeholder="Book name" value={this.state.name} name="name" onChange={this.handleChange} />
                                    </div>
                                </FormControl>
                                <br />

                                <FormControl>
                                    <div className="form-group">
                                        <span>Author: </span>
                                        <br />
                                        <BootstrapInput id="demo-customized-textbox" type="text" name="author" placeholder="Author name" onChange={this.handleChange} />
                                    </div>
                                </FormControl>
                                <br />

                                <FormControl>
                                    <div className="form-group">
                                        <span>Image Url: </span>
                                        <br />
                                        <BootstrapInput id="demo-customized-textbox" type="text" name="image" placeholder="Image Url" onChange={this.handleChange} />
                                    </div>
                                </FormControl>
                                <br />
                                <br />
                                <FormControl>
                                    <div className="form-group">

                                        <Button type="submit" variant="contained" size="medium" color="primary">

                                            SUBMIT
        </Button>

                                    </div>
                                </FormControl>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddBook;