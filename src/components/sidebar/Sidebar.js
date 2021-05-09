import React from 'react';

import './sidebar.css';
import {connect} from 'react-redux';

const Sidebar = ({isSideBarOpen}) => {
   console.log("is sidebaropen:",isSideBarOpen);
    return(
        <div className= {isSideBarOpen ? 'sidebar' : 'sidebar_close'}>
        <div className="sidebar-brand">
            <h2><span className="lab la-accusoft"></span><span>Accusoft</span></h2>

        </div>

        <div className="sidebar-menu">
            <ul>
                <li>
                    <a href="" className="active"><span className="las la-igloo"></span>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href=""><span className="las la-users"></span>
                        <span>Customers</span>
                    </a>
                </li>
                <li>
                    <a href=""><span className="las la-clipboard-list"></span>
                        <span>Projects</span>
                    </a>
                </li>
                <li>
                    <a href=""><span className="las la-shopping-bag"></span>
                        <span>Orders</span>
                    </a>
                </li>
                <li>
                    <a href=""><span className="las la-receipt"></span>
                        <span>Inventory</span>
                    </a>
                </li>
                <li>
                    <a href=""><span className="las la-user-circle"></span>
                        <span>Accounts</span>
                    </a>
                </li>

                <li>
                    <a href=""><span className="las la-clipboard-list"></span>
                        <span>Tasks</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
    
}

export const mapStateToProps = state => ({
    isSideBarOpen:state.sidebar.isSideBarOpen
});
export default connect(mapStateToProps)(Sidebar);