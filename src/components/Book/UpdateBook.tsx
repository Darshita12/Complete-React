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


interface UpdateBookProps {
    id: number
}
interface UpdateBookState {

    id: number;
    name: string;
    author: string;
    image: string;

}
export class UpdateBook extends React.Component<UpdateBookProps, UpdateBookState>{
    constructor(props: UpdateBookProps) {
        super(props);
        this.state = {
            id: this.props.id,
            name: '',
            author: '',
            image: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event: any) {
        //     let nam = event.target.name;
        // let val = event.target.value;
        const state = this.state;
        this.setState({
            ...state,
            [event.target.name]: event.target.value

        })
    }
    handleSubmit(event: any) {
        BookService.updateBook(this.state).then(res => console.log(res));
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{ marginLeft: '20px' }}>
                    <br />
                    <FormControl>
                        <span>Id:</span>
                        <BootstrapInput id="demo-customized-textbox" type="text" placeholder="Id" value={this.state.id} name="id" onChange={this.handleChange} />
                    </FormControl>
                    <br />
                    <br />
                    <FormControl>
                        <span>Name:</span>
                        <BootstrapInput id="demo-customized-textbox" type="text" placeholder="Book name" value={this.state.name} name="name" onChange={this.handleChange} />
                    </FormControl>
                    <br />
                    <br />
                    <FormControl>
                        <span>Author:</span>
                        <BootstrapInput id="demo-customized-textbox" type="text" name="author" placeholder="Author name" onChange={this.handleChange} />
                    </FormControl>
                    <br />
                    <br />
                    <FormControl>
                        <span>Image Url:</span>

                        <BootstrapInput id="demo-customized-textbox" type="text" name="image" placeholder="Image Url" onChange={this.handleChange} />
                    </FormControl>
                    <br />
                    <br />
                    <Button type="submit" variant="contained" size="medium" color="primary">
                        UPDATE
        </Button>
                </div>

            </form>
        );
    }
}