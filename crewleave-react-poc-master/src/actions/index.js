export const datesChanged = (newDate, fieldName) => {
	console.log("You clicked on datesChanged: ", newDate, fieldName);
    return {
        type: 'DATES_CHANGED',
        payload: {newDate : newDate, 
				  fieldName : fieldName}
    }
};


export const cancelClicked = () => {
    console.log("You clicked on cancelClicked: ");
    return {
        type: 'CANCEL_CLICKED'
    }
};

export const createBidClicked = (slots) => {
    console.log("You clicked on createBidClicked ",slots);
    return {
        type: 'CREATE_BID_CLICKED',
		payload: slots
    }
};



