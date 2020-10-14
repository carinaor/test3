export const selectionChg = rules =>{
	
	console.log("aaaaaa");
	
	return {
		type: 'SELECTION_CHANGE',
		payload: rules
	}
}
export const getTodosState = store => store.engines
