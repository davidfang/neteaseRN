import * as actionTypes from '../constants/banner'

const initialState = {
    isFetching: false,
    data: {}
}

export default function banner(state = initialState, action) {
	switch (action.type) {
		case actionTypes.pending:
			return {...state, isFetching: true}
		case actionTypes.success: 
			return {...state, isFetching: false, data: action.data}
		case actionTypes.error:
			return {...state, isFetching: false}
		default:
			return state
	}
}