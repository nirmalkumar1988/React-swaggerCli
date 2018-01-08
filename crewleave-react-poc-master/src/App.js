import React, { Component } from 'react';
import ShowQuota from './containers/show-quota';
import 'crewmodules-design-system/dist/css/crewmodules-design-system.css';
import './styles/styles.css';


class App extends Component {
  render() {
    return (
	<div>	
		<div className="app-header">
			<div className="app-heading"><h3>CREW LEAVE</h3> </div>
			<div className="cds-logo_without-boeing-margin-25-percent app-logo" > </div>
       </div>
		<ShowQuota />
	</div>	
    );
  }
}

export default App;
