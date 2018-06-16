import * as types from './../constants/ActionType';
import * as msg from './../constants/Message';

let initialState = msg.MSG_WELLCOME;

const message = (state = initialState, actions) => {

    switch (actions.type) {
        case types.CHANGE_MESSAGE:
            break;
        default: return state;
    }
}

export default message;