import React,{Component} from 'react';
import {Redirect} from 'react-router-dom'
//import {LoginInput} from "./LoginInput";

export class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            authenticated: false
        }

    }


    authenticate(){
        this.setState({authenticated: true});
        return <Redirect to="DashBoard" push = {true}/>
    }

    render(){
        if (this.state.authenticated) {
            return <Redirect to="DashBoard"/>
        }
        return(

            <div className = "container-fluid">
                <div className = "navbar">
                    <a className="navbar-brand"> AppName</a>
                </div>


                <header className="masthead text-black text-center">
                    <div className="col-2 offset-5">
                        <input type="text" className = "form-control" placeholder="Username"/>
                    </div>

                    <div className="col-2 offset-5">
                        <input type="password" className = "form-control" placeholder="Password"/>
                    </div>

                    <div className="col-2 offset-5">
                        <button onClick={this.authenticate.bind(this)} className="btn btn-primary btn-block">Sign In</button>
                    </div>



                </header>

            </div>
        )
    }
}
