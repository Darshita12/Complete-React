import React from "react";
import { Button, FormControl, InputBase } from "@material-ui/core";
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import BookService from "../service/BookService";
import { Constant } from "../constants/Constant";
import { useHistory, Link } from "react-router-dom";

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
export interface LoginProps {
    username: string;
    password: string;
    role: string;
}
export interface LoginState {
    username: string;
    password: string;
    role: string;
    isLoggedIn:boolean;
}
export class Login extends React.Component<LoginProps, LoginState>{
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
            role: '',
            isLoggedIn:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange(event: any) {

        const state = this.state;
        this.setState({
            ...state,
            [event.target.name]: event.target.value,
          

        });
       
    }

    handleSubmit(event: any) {
        event.preventDefault();
        // return fetch(Constant.baseUrl + '/users/authenticate', {
        //     method: 'POST',
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        // }).then((res => {
        //     res.json();
        //    // localStorage.setItem("Authorization",res.jwtToken);


        // }));
        // const history=useHistory();
        this.setState({isLoggedIn:true});

        BookService.authentication(this.state)
            .then((response) => {
                BookService.getToken(response.jwtToken);
            });
            Constant.isLoggedIn=this.state.isLoggedIn
            // userHasAuthenticated(true);
            // history.push("/login");






    };

    render() {
        return ( 
         
            
            <div className="container col-lg-6">
                  <br/>
                  <br/>
                <h1 className="text-center">LOGIN</h1>
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
                            <BootstrapInput id="demo-customized-textbox" type="text" placeholder="Enter Username" value={this.state.username} name="username" onChange={this.handleChange} />
                        </div>
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
                    <FormControl>
                    <div className="form-group">
                        <Button type="submit" variant="contained" size="medium" color="primary">

                            LOGIN
        </Button>
      
                    </div>
                    </FormControl>
                
            
            {/* <FormControl>
                    <div style={{marginLeft:'20px'}} className="form-group">
                    {this.state.isLoggedIn===true && 
                        <Button style={{color:'red'}} type="submit" variant="contained" size="medium" >
<Link className="link" to={"/logout"} >
                            Logout</Link>
        </Button>
    }
                    </div>
                    </FormControl> */}
        
                    </form>
            </div>
            </div>
            </div>

        );
    }
}