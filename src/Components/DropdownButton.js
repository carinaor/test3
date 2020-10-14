import React from 'react';
//import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';
import { useSelector, useDispatch, connect } from 'react-redux'

function DropdownMenu(props){
	let AllNames = useSelector(state => state.engines)
	return(
	  <div className={"card dropdownMenuBox" + props.className}>
	  {
		AllNames.map((engine)=>{ 
			return <DropdownItem key={engine.id} name={engine.name}></DropdownItem>
		})
	  }
	  </div>
	);
	
}


class DropdownButton extends React.Component{
	
	constructor(props){
		super(props);
		this.state = { showClass: ''};
	}
	showHide= () =>{
		if(this.state.showClass == ''){
			this.setState({showClass: 'Show'})
		}else{
			this.setState({showClass: ''})
		}
		
	}
	render(){
		
		return(
		<div className="dropdown col-sm-3 align-items-center">
		  <button onClick={()=>{ this.showHide() }} className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton">
			Search
		  </button>
		  <DropdownMenu className={this.state.showClass}/>
		</div>
		);
	}
}
export default DropdownButton;
