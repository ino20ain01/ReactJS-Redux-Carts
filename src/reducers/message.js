import * as Types from './../constants/ActionType';
import * as Message from './../constants/Message';

let initialState = Message.MSG_WELLCOME;

const message = (state = initialState, actions) => {
    switch (actions.type) {
        case Types.CHANGE_MESSAGE:
            return actions.message
        default: return state;
    }
}

export default message;