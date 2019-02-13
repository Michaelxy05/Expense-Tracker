import React, {Component} from 'react'
import './signin.css'
class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleInput = (e) => {
       this.setState({
           [e.target.name]: e.target.value
       })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        const user = {
            email: this.state.inputEmail,
            password: this.state.inputPassword
        }

        /// send the user object to the backend
        // axios.post('/login', user).then(res => console.log(res))

        console.log(user);
    }

    render() {
        return(

            <div class="container">
            <div className="background">
            
                <div className="imgCon"><img className="mb-4" src="https://lh3.googleusercontent.com/e6_uLaKqv_FBatcGyLmkU5oJnXxodOtVqViS9aHg1D260zY8fcQ1E4tJYL8w9QgrGgc" alt="" width="400" height="400"/></div>
                <form className="form-signin">
                    
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input onChange={this.handleInput} name="inputEmail" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input onChange={this.handleInput} name="inputPassword" type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <div className="checkbox mb-3">
               
                        <label>
                           
                        </label>
                    </div>
                    <button onClick={this.handleSubmit} className="btn btn-lg btn-primary btn-block" >Sign in</button> 
                   
                    <h2 className="h2 mb-3 font-weight-normal">Dont have a account?</h2>   

                    <button onClick={this.handleSubmit} className="register btn-lg btn-primary btn-block" >Register</button>
                    
                    
                 
                </form>
            </div>
          
          </div>
        )
        

    }
}

export default SignIn
