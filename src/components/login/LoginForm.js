var React    = require('react')
var mui      = require('material-ui')

var { Card, CardTitle, CardText, FlatButton, TextField } = mui;

class LoginForm extends React.Component {
    renderError() {
        if (this.props.viewBag.loginFailed) {
            return (
                <h1 style={{
                        color:"#616161",
                        fontWeight:"200",
                        fontSize:"1.4em",
                        margin: "10px 0 -10px 0"
                    }}>Pshh... Nice try!</h1>
            );
        } 
        return "";
    }
    
	render() {
		return (
		    <Card style={{textAlign:"center", marginTop:"10px"}}>
                <CardText>
                    {this.renderError()}
                    <form action="/login" method="post">
                        <div>
                            <TextField
                                hintText="Username"
                                name="username"
                                floatingLabelText="Username" />
                        </div>
                        <div>
                            <TextField
                                hintText="Password"
                                name="password"
                                floatingLabelText="Password"
                                type="password" />
                        </div>
                        <div>
                            <FlatButton 
                                label="Log In" 
                                type="submit"
                                primary={true}
                                style={{margin:"20px 0", fontSize:"1.7em", background:"#ddd" }}
                            />
                        </div>

                        <div>
                            <a 
                                target='_blank'
                                style={{color:"#655", textDecoration:"none"}}
                                href='https://www.visualstudio.com/en-us/integrate/get-started/auth/overview'>
                                What the heck do I log in with?
                            </a>
                        </div>
                    </form>                
                </CardText>
		    </Card>
	    );
  	}
};

module.exports = LoginForm;