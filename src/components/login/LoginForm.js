import React from 'react'
import mui from "material-ui";
var { Card, CardTitle, CardText, FlatButton, TextField } = mui;
export default class LoginForm extends React.Component {
	render() {
		return (
		    <Card>
                <CardTitle title='Login' />
                <CardText>
                    <form action="/login" method="post">
                        <div>
                            <TextField
                                hintText="Username"
                                floatingLabelText="Username" />
                        </div>
                        <div>
                            <TextField
                                hintText="Password"
                                floatingLabelText="Password"
                                type="password" />
                        </div>
                        <div>
                            <FlatButton 
                                label="Log In" 
                                primary={true}
                                containerElement={<button type='submit'></button>}
                            />
                        </div>
                        <div>
                            <a 
                                target='_blank'
                                href='https://www.visualstudio.com/en-us/integrate/get-started/auth/overview'>
                                Setup your VSO profile with Alternate Credentials
                            </a>
                        </div>
                    </form>                
                </CardText>
		    </Card>
            
	    );
  	}
};
