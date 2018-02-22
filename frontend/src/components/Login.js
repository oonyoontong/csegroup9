import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
//import {LoginInput} from "./LoginInput";
import {axios} from 'axios';
import { login } from "../actions/accountActions"

export class Login extends Component{
    constructor(props){
        super(props)
        this.baseURL = "http://localhost:5000"
        this.state = {
            username: "",
            password: ""
        }
    }




    handleSubmit(event){
        console.log(this.props.username);
        console.log(this.props.password);


        axios.post(this.baseURL + "account/login",{
            username:this.props.username,
            password:this.props.password
        }).then((response)=>{
            this.props.login(response.data);
            console.log(response.data);
        })

    }

    render(){
        return(

            <div className = "container-fluid">
                <div className = "navbar">
                    <a className="navbar-brand"> AppName</a>
                </div>


                <header className="masthead text-black text-center">
                    <div className="col-2 offset-5">
                        {/*<form onSubmit = {this.handleSubmit}>*/}
                            <div className="form-group">

                                <input type="text" className="form-control" value = {this.props.username} aria-describedby="Username" placeholder="username"/>
                            </div>
                            <div className="form-group">

                                <input type="password" className="form-control" value = {this.props.password} placeholder="Password"/>
                            </div>

                            <button onClick={this.handleSubmit.bind(this)} type="button" className="btn btn-primary">Submit</button>
                     {/*   </form>*/}
                        </div>
                        {/*<input type="text" className = "form-control" placeholder="Username"/>
                    </div>

                    <div className="col-2 offset-5">
                        <input type="password" className = "form-control" placeholder="Password"/>
                    </div>

                    <div className="col-2 offset-5">
                        <button onClick={this.authenticate.bind(this)} className="btn btn-primary btn-block">Sign In</button>*/}
                </header>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        account: state.account
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        login: (account) => {
            dispatch(login(account));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);