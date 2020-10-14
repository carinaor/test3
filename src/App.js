import React from 'react';
import './css/bootstrap.min.css';
import './css/App.css';
import DropdownButton from './Components/DropdownButton'
import { useSelector, useDispatch } from 'react-redux'




class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state = { 
		searchtxt : '', 
		searchid : 0, 
		searchengines: [
			{ id:0, name: 'Google' }, 
			{ id:1, name: 'Bing' }, 
			{ id:2, name: 'Both' }
		]};
	}
	
	updateBox = (val)=>{
		//let dispatcher = useDispatch()
		//let AllData = useSelector(state => state.engines)
		//let Txt = useSelector(state => state.writtenTxt)

		this.setState({searchtxt: val})
	}

	render(){
		return (
			<div className="App">
					<div className="card-body">
						<h5 className="card-title">Search Box for Google and Bing</h5>
							<p className="card-text">Write down and test, but don't use more than 100 times per day (Google API restriction for free accounts)</p>
							<input className="form-control" type="text" onChange={ (ev)=>{this.updateBox(ev.target.value) } } />
					</div>
				<div>
				<DropdownButton engines={this.state.searchengines}/>
				</div>
			</div>
			);
	}
}

export default App;
