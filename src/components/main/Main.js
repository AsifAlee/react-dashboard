import React from 'react';
import './main.css';
import Projects from './../projects/Projects';
import Customer from './../customers/Customer';


const Main = ({isSideBarOpen}) => {

    return (
        <div className={isSideBarOpen ? 'main-content':'main_content_sc' }>
            <div className='main'>
                <div className="cards">


                    <div className="card-single">
                        <div>
                            <h1>54</h1>
                            <span>Customers</span>
                        </div>
                        <div>
                            <span className="las la-users"></span>
                        </div>
                    </div>


                    <div className="card-single">
                        <div>
                            <h1>79</h1>
                            <span>Projects</span>
                        </div>
                        <div>
                            <span className="las la-clipboard"></span>
                        </div>
                    </div>

                    <div className="card-single">
                        <div>
                            <h1>124</h1>
                            <span>Orders</span>
                        </div>
                        <div>
                            <span className="las la-shopping-bag"></span>
                        </div>
                    </div>
                    <div className="card-single">
                        <div>
                            <h1>$6k</h1>
                            <span>Income</span>
                        </div>
                        <div>
                            <span className="lab la-google-wallet"></span>
                        </div>
                    </div>

                </div>
                <div className="recent-grid">
                    <Projects />
                    <Customer />

                </div>
            </div>



        </div>

    )

}
export const mapStateToProps = state => ({
    isSideBarOpen:state.sidebar.isSideBarOpen
});
export default Main;
