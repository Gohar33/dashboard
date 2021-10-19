import React from 'react';
import './ModalView.styles.css';

export default function ModalView({ show, closeModalHandler }) {
    return (
        // <div className={show ? 'modal-wrapper' : 'modal-wrapper invisible'}>
        <div className="modal-wrapper"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}>
            <div className="modal-header">
                <p></p>
                <span class="close-modal-btn" onClick={closeModalHandler}>x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>What are MAUs?</h4>
                    <p>Monthly Active Users (MAUs) are an annual allocation and are represented as the total number of unique users/visitors that came to your site over the previous 30-day rolling period.
                    An MAU is a measure of the overall traffic to your site, not a measure of the percentage of the traffic you are experimenting on or a page view count.
                    MAUs are calculated based on decisions or tracking events.<br /> <br />
                    If a user ID interacts with your site in multiple sessions or on multiple devices, they are counted as one MAU.
                    The MAU usage chart shows you the number of unique user IDs per environment or project. Your usage is based on the total number of unique user IDs across your entire account. <br /> <br />
                    MAUs are shared across Web and Full Stack products. MAU charts count unique users for a specific Environment. Users can be active in multiple projects or environments, contributing to the unique user counts in each context.
                    To ensure an accurate MAU count, Optimizely removes duplicate unique visitors shared between Web and Full Stack products. MAUs roll over to the next month if not used. MAUs is an annual band and must be consumed within the 12-month period, albeit can be utilized from month to month.<br /> <br />
                        <a className="modal-link" href="https://help.optimizely.com/Account_Settings/What_are_monthly_active_users_(MAUs)_in_Optimizely" target="_blank">  Dive further into the technical details of MAUs.</a> </p>
                </div>
                {/* <div className="modal-footer">
                    <button onClick={closeModalHandler} className="btn-cancel">Close</button>
                </div> */}
            </div>
        </div>
    )
}