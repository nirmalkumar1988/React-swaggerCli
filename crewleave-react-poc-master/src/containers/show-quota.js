import React, {Component} from 'react';
import CreateBid from './create-bid';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {datesChanged} from '../actions/index';
import {cancelClicked} from '../actions/index';
import IconButton from '../components/IconButton';
import SelectableIconBadge from '../components/SelectableIconBadge';
import {DefaultApiFactory} from 'typescript-fetch-api';


class ShowQuota extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
		disabled:true,
		showResults:false,
		quota : 0
	};

  }
	
	
	 
	renderResults(){
		if(this.state.showResults) {
			return (
				<CreateBid fromDate={this.props.dates.fromDate} toDate={this.props.dates.toDate} quota={ this.state.quota}/>	
			)
		}
	}
	
	computequota(){
		let thisJxs = this;
		let crewapi = new DefaultApiFactory()		
			crewapi.leaveQuotaGet().then(function(crew){
		
		thisJxs.setvalue(crew);
				
		});
		
	}

	setvalue(crewObj){
		this.setState({quota : crewObj});
		console.log(crewObj);
	}
	
    render() {
		const style = { color: 'red' };
		const btnStyle = {float: 'right', padding:'2em'};
		const panelStyle = {margin:'2em'};
		
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
							<h3> Create leave bid request </h3>
						</div>
						<div className='cds-panel-header__suffix'>
			 				<IconButton name="question-mark_outlined_48px" size="32" theme="light"/> 
						</div>
					</div>
					<div className='panel-body'>
						<form>
							<div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 form-group'>
								<label htmlFor='fromDate'>From</label><span style={style}>*</span>
								<input type='date' className='form-control' value={this.props.dates.fromDate} name='fromDate' id='fromDate' onChange=
								{(event) => {this.props.datesChanged(event.target.value,'fromDate')
											this.setState({disabled:false})}}
								disabled={this.props.dates.fromDate}/>

							</div>
							<div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group' align='center'>
								<br/>
								-
							</div>
							<div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 form-group'>
								<label htmlFor='toDate'>To</label><span style={style}>*</span>
								<input type='date' className='form-control' value={this.props.dates.toDate} name='toDate' id='toDate' onChange=
								{(event) => {this.props.datesChanged(event.target.value,'toDate')
											this.setState({disabled:false})}}
								 disabled={this.props.dates.toDate}/>
							</div>
							<div className='form-group' style={btnStyle}>
								<br/><br/>
								<button type='button' className='btn btn-default' onClick={() => {this.props.cancelClicked(); this.setState({showResults:false})}}> Cancel </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								
								<button type='button' className='btn btn-primary' disabled={!this.props.dates.fromDate || !this.props.dates.toDate} 
								onClick={() => {this.computequota()
									this.setState({showResults:true})}}> Show Quota </button>
							</div>

						</form>
					</div>
				</div>
				
				{this.renderResults()}
				{console.log('props',this.props)}
			</div>
	);
}
	
}

function mapStateToProps(state) {
		return {
			dates : state.dates
		};
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({ datesChanged:datesChanged, cancelClicked:cancelClicked }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ShowQuota);

