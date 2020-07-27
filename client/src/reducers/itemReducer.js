import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types';
import { v1 as uuid } from 'uuid';

const initialState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Coffee' },
        { id: uuid(), name: 'Water' },
        { id: uuid(), name: 'Steak' }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS: 
            return {
                ...state
            }
            default: 
                return state;
    }
}