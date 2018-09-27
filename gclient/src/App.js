import React from 'react';
import NavigationBar from './components/layout/NavigationBar';
import SphinxHeader from './components/layout/SphinxHeader';

class App extends React.Component {
	render () {
		return (
			<div>
				<SphinxHeader/>
				<NavigationBar/>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
}
export default App;
