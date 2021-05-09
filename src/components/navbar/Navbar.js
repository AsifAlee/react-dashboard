import React from 'react';
import './navbar.css';
import pf from './../../assets/pf.jpg';
import {connect} from 'react-redux';
import {SideBarActionTypes} from './../../redux/sidebar/sidebar.types';
import {toggleSideBar} from './../../redux/sidebar/sidebar.actions';

const Navbar = ({isSideBarOpen,toggleSideBar}) => {
    return (
        <div className= {isSideBarOpen ? 'header' :'header_sidebar_closed' }>

            <h2>
                <label className='nav-toggler'>
                    <span className="las la-bars"  onClick={() => {
                        toggleSideBar();
                    }}></span>
                </label>
            Dashboard
          </h2>
            <div className="search-wrapper">
                <span className="las la-search"></span>
                <input type="search" placeholder="search here" />
            </div>
            <div className="user-wrapper">
                <img src={pf} alt="" width="30px" height="30px" />
                <div>
                    <h4>John Doe</h4>
                    <small>Super Admin</small>
                </div>
            </div>

        </div>
    )
}

export const mapStateToProps = state => ({
    isSideBarOpen : state.sidebar.isSideBarOpen
});

export const mapDispatchToProps = dispatch =>({
    toggleSideBar:() => dispatch(toggleSideBar())
});
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);