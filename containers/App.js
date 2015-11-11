//Basic React component that renders a material-ui
//raised button with the text "Default"
const React = require('react');
import Header from '../components/header/Header'
import LeftMenu from '../components/leftnav/LeftMenu'
import TaskList from '../components/tasks/TaskList'

const MyAwesomeReactComponent = React.createClass({
	render() {
		return (
				<div>
					<Header title='Mobile VSO' />
					<LeftMenu />
					<TaskList tasks={[]} />
				</div>
		);
	},
});

module.exports = MyAwesomeReactComponent;