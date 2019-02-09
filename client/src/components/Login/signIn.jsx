import React, {Component} from 'react'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <form className="form-signin">
                    <img className="mb-4" src="https://cdn.dribbble.com/users/718428/screenshots/3701840/coin_2.gif" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="hey" name="hey"/> hey
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted"> </p>
                </form>
            </div>
        )

    }
}

export default SignIn
