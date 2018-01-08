export default function (state = 0, action) {
    switch (action.type) {
        case 'CREATE_BID_CLICKED':
            return action.payload;			
		default: break;					
    }
    
	return state;
}
