export default function (state = {fromDate:'',toDate:''}, action) {
   
	switch (action.type) {		
		case 'DATES_CHANGED' : 
				if (action.payload.fieldName === 'fromDate') 
					state.fromDate = action.payload.newDate 
				else if (action.payload.fieldName === 'toDate')
					state.toDate = action.payload.newDate
				console.log('ST',state)		
				return state;
		
		case 'CANCEL_CLICKED' :
				return (state = {fromDate:'',toDate:''});
			
		default: break;	
    	
	}
    
    return state;
}


