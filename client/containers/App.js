import React from 'react';
import AppHeader from '../components/header/Header'
import TaskList from '../components/tasks/TaskList'

class App extends React.Component {
  render() {
	  return (
	  <div id="app-container">
		<AppHeader title="Mobile VSO" />
		<TaskList />
	  </div>
	);
  }
 
}
export default App;
