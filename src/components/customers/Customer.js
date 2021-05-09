import React from 'react';
import './customer.css';
import pf from './../../assets/pf.jpg';
const Customer = () => {
    return (
        <div className="customers">
            <div className="card">
                <div className="card-header">
                    <h3>New Customers</h3>
                    <button>See All <span className="las la-arrow-right"></span></button>
                </div>
                <div className="card-body">
                    <div className="customer">
                        <div className="info">
                            <img src={pf} width="40px" height="40px" alt="" />
                            <div>
                                <h4>Lewis S Cunningham</h4>
                                <small>CEO Excerpt</small>
                            </div>
                        </div>
                        <div className="contact">
                            <span className="las la-user-circle"></span>
                            <span className="las la-comment"></span>
                            <span className="las la-phone"></span>
                        </div>
                        <div>

                        </div>
                    </div>

                    <div className="customer">
                        <div className="info">
                            <img src={pf} width="40px" height="40px" alt="" />
                            <div>
                                <h4>Lewis S Cunningham</h4>
                                <small>CEO Excerpt</small>
                            </div>
                        </div>
                        <div className="contact">
                            <span className="las la-user-circle"></span>
                            <span className="las la-comment"></span>
                            <span className="las la-phone"></span>
                        </div>
                        <div>

                        </div>
                    </div>

                    <div className="customer">
                        <div className="info">
                            <img src={pf} width="40px" height="40px" alt="" />
                            <div>
                                <h4>Lewis S Cunningham</h4>
                                <small>CEO Excerpt</small>
                            </div>
                        </div>
                        <div className="contact">
                            <span className="las la-user-circle"></span>
                            <span className="las la-comment"></span>
                            <span className="las la-phone"></span>
                        </div>
                        <div>

                        </div>
                    </div>

                    <div className="customer">
                        <div className="info">
                            <img src={pf} width="40px" height="40px" alt="" />
                            <div>
                                <h4>Lewis S Cunningham</h4>
                                <small>CEO Excerpt</small>
                            </div>
                        </div>
                        <div className="contact">
                            <span className="las la-user-circle"></span>
                            <span className="las la-comment"></span>
                            <span className="las la-phone"></span>
                        </div>
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Customer;