import React from 'react';
import GlobalHeader from './smart/GlobalHeader';
import MyTasks from './smart/MyTasks';
import LoginForm from './login/LoginForm';
import {connect} from 'react-redux';

var selectState = function(state) {
	return { view: state.view };
};

@connect(selectState)
class App extends React.Component {
	renderView() {
		var views = {
			myTasks: <MyTasks />,
			login: <LoginForm />
		};
		
		return views[this.props.view] || `<h1>${this.props.view} view not found</h1>`
	}
  render() {
  	var views 
	  return (
	  	<div id="app-container">
				<AppHeader title="Mobile VSO" />
				{renderView()}
	  	</div>
	);
  }
 
}
export default App;
