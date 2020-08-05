import React from "react";
import BookService from "../../service/BookService";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UserService from "../../service/UserService";

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

interface AddUserProps {


}
interface AddUserState {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;

}
export class AddUser extends React.Component<AddUserProps, AddUserState>{
    constructor(props: AddUserProps) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            email: '',
            password: '',
            role: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // componentDidMount(){
    //     BookService.addBook().then(res=> console.log(res));
    // }
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
        UserService.addUser(this.state).then(res => console.log(res));
        event.preventDefault();
        // fetch(`http://localhost:8080/postBook`, {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name: this.state.name,
        //         author: this.state.author
        //     })

        // });
    };
    render() {
        return (
            <div className="container col-lg-6">
            <br/>
            <br/>
          <h1 className="text-center">Registration</h1>
          <br/>
          <div className="card">
              <div className="card-body">
              <form onSubmit={this.handleSubmit}>
              <br />

              <FormControl>
                  <div className="form-group">
                      <span>Select:</span>

                      <select className="custom-select"  id="demo-customized-textbox" name="role" onChange={this.handleChange}>
                          <option>
                              ---Select---
                      </option>
                          <option>
                              User
                      </option>
                          <option>
                              Admin
                      </option>
                      </select>
                  </div>
              </FormControl>
              <br />
              <br />
              <FormControl>
                  <div className="form-group">
                      <span>Username: </span>
                      <br/>
                      <BootstrapInput id="demo-customized-textbox" type="text" placeholder="Enter Username" value={this.state.name} name="name" onChange={this.handleChange} />
                  </div>
              </FormControl>
              <br />
              <br />
              <FormControl>
                        <span>Email:</span>

                        <BootstrapInput id="demo-customized-textbox" type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} />
                    </FormControl>
                    <br />
                    <br />
              <FormControl>
                  <div className="form-group">
                      <span>Password: </span>
                      <br/>
                      <BootstrapInput id="demo-customized-textbox" type="text" name="password" placeholder="Enter Password" onChange={this.handleChange} />
                  </div>
              </FormControl>

              <br />
              <br />
              <div className="form-group">
                  <Button type="submit" variant="contained" size="medium" color="primary">

                      REGISTER
  </Button>
              </div>
          
      </form>
      </div>
      </div>
      </div>
        //     <form onSubmit={this.handleSubmit}>
        //         <div>
        //             <br />

        //             <FormControl>
        //                 <span>Select:</span>
        //                 <select id="demo-customized-textbox" name="role" onChange={this.handleChange}>
        //                     <option>
        //                         ---Select---
        // </option>
        //                     <option>
        //                         User
        // </option>
        //                     <option>
        //                         Admin
        // </option>
        //                 </select>
        //             </FormControl>
        //             <br />
        //             <br />
        //             <FormControl>
        //                 <span>Name:</span>
        //                 <BootstrapInput id="demo-customized-textbox" type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
        //             </FormControl>
        //             <br />
        //             <br />
        //             <FormControl>
        //                 <span>Email:</span>

        //                 <BootstrapInput id="demo-customized-textbox" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
        //             </FormControl>
        //             <br />
        //             <br />
        //             <FormControl>
        //                 <span>Password::</span>

        //                 <BootstrapInput id="demo-customized-textbox" type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
        //             </FormControl>
        //             <br />
        //             <br />
        //             <Button type="submit" variant="contained" size="medium" color="primary">

        //                 REGISTER
        // </Button>

        //         </div>
        //     </form>
        );
    }
}
export default AddUser;