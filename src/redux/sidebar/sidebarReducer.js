import  SideBarActionTypes from './sidebar.types';
import {toggleSideBar} from './sidebar.actions';

const  INITIAL_STATE = {
    isSideBarOpen:false
};

const sideBarReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case SideBarActionTypes.TOGGLE_SIDE_BAR:
            return{
                ...state,
                isSideBarOpen:!state.isSideBarOpen
            }
        default:
            return state;
    }
}
export default sideBarReducer;