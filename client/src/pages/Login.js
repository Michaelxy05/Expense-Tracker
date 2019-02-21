import React, { Component } from 'react'
import "../components/MainCSS/signin.css"


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
        ///depending on the respond that comes back it depend on the user is sent.
        ///history.push (the url that we want expenses?)

        console.log(user);
    }

    render() {
        return (
            <div className="background">

                <div className="container">


                    <div className="imgCon"><img className="mb-4" src="https://files.slack.com/files-pri/TBXH4981L-FG5J7J108/photogrid_1550088033888.jpg" alt="" width="400" height="400" /></div>
                    <div className="hero-image">
                        <div className="hero-text">
                            <h1>All Out Expense Tracker</h1>


                        </div>
                    </div>

                    <form className="form-signin">

                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input onChange={this.handleInput} name="inputEmail" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input onChange={this.handleInput} name="inputPassword" type="password" id="inputPassword" className="form-control" placeholder="Password" required />
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
