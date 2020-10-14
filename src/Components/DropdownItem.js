import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
import { selectionChg, getTodosState } from '../actions/rulesActions.js'

const mapStateToProps = (state, ownProps) => ({
  writtenTxt: ownProps.writtenTxt
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(selectionChg(ownProps.selectionChg))
})

class DropdownItem extends React.Component{
	constructor(){
		super();
		this.state = {selection: 5 };
	}
	handleChange = () => {
		// dispatches actions to add todo
		selectionChg(this.state.selection)
		console.log(this.state);
		// sets state back to empty string
		this.setState({ selection: 7 })
	  }
	/*handleAddTodo = () => {
		// dispatches actions to add todo
		this.props.selectionChg(this.state.input)

		// sets state back to empty string
		this.setState({ input: '' })
	  }	*/
	render(){
		return(
			<div className="dropdown-item" onClick={()=>{ this.handleChange() }} id={this.props.id}>{this.props.name}</div>
		);
	}
}

export default connect(
  state=> ({ todos: getTodosState(state) }),
  selectionChg
)(DropdownItem);

