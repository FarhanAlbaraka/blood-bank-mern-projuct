import React, { Component } from 'react'




class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    
    
    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Welcome User`)
        console.log(this.state);
        
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Login</h1>
                    
                    <label>Username :</label> <input type="text" value={this.state.Username} onChange={this.lasthandler} placeholder="Username..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    
                        
                    <br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
