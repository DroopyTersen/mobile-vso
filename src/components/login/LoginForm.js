var React    = require('react')
var mui      = require('material-ui')

var { Card, CardTitle, CardText, FlatButton, TextField } = mui;

class LoginForm extends React.Component {
	render() {
		return (
		    <Card style={{textAlign:"center", marginTop:"10px"}}>
                <CardText>
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