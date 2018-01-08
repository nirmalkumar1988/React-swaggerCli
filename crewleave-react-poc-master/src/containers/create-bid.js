import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createBidClicked} from '../actions/index';
import SelectableIconBadge from '../components/SelectableIconBadge';

class CreateBid extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
		showModal: false 
	};
	this.open = this.open.bind(this);	
	}
	

  	close() {
    this.setState({ showModal: false });
  	}
	open() {
    this.setState({ showModal: true });
	}
	showResult(){
		if(this.state.showModal) {
		
			return (	
				<div id="myModal" className="modal fade show" role="dialog" aria-labelledby="exampleModalLiveLabel">
					<div className="modal-dialog">
        				<div className="modal-content">
        				
            				<div className="modal-header">
                				<h4 className="modal-title">Confirmation</h4>
            				</div>
            			<div className="modal-body">
							<span> <h5>Bid created successfully. {this.props.slots} slots available!!</h5>
							</span>
            			</div>
            			<div className="modal-footer">
                			<button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.close()}  >Close</button>
            			</div>
        			</div>
    			</div>
			</div>
			)
			
		}
	}
    render() {
		const panelStyle = {margin:'2em'};
		const btnStyle = {float: 'right', padding:'2em', marginTop:'2em'};	
		var from = this.props.fromDate;
		var to = this.props.toDate;
		//var diff =  Math.floor(( new Date(to) - new Date(from)) / (1000*60*60*24)) ;
		var diff = this.props.quota.availableQuota;
		console.log("diff"+diff);
		return(
			<div>
			<div className='panel panel-default' style={panelStyle} >
				<div className='panel-heading cds-panel-header'>
					<div className='cds-panel-header__prefix '>
						<div>
							<SelectableIconBadge name="travel-bag_filled_48px" size="32" color="green"/>
						</div>
					</div>
					<div className='cds-panel-header__main'>
						{this.props.fromDate}  -  {this.props.toDate}
						<br/>
						Quota : {diff}
						&nbsp; slots available
					</div>	
					<div className='cds-panel-header__suffix' style={btnStyle}>
						<button type='button' className='btn btn-primary' onClick={() => {this.props.createBidClicked(diff)
						this.open();}} > Create Bid </button>
					</div>  
										
				</div>	
			</div>
			{ this.showResult()	} 
		</div>
	);
}


}

function mapStateToProps(state) {
		return {
			slots : state.slots
		};
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({ createBidClicked:createBidClicked }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateBid);
