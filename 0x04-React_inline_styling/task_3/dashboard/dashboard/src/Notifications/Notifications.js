import React from 'react';
import './Notifications.css';
import close_icon from './close-icon.png';
//import {getLatestNotification} from '../utils';
import NotificationItem from './NotificationItem.js';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';



class Notifications extends React.Component {
    constructor() {
        super()
        this.markAsRead = this.markAsRead.bind(this);
    }
    id = 0
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`)
    }
    render() {
    const {displayDrawer} = this.props
    const {listNotifications} = this.props
    const handelClose = () => {
        console.log('Close button has been clicked')
    }
    
    const buttonStyle = {
        display: 'inline-block',
        position: 'absolute',
        top: '35px',
        right: '20px',
        background: 0,
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        };

    if(!listNotifications.length){
        return (
            <div className="listNot">
                <p>No new notification for now</p>
            </div>
        )
    }


    if(displayDrawer){
        return(
        <div className="container">
            <div className="menuItem">
            <p>Your notifications</p>
            </div>
        <div className="Notifications">
        <button aria-label='close' style={buttonStyle} onClick={handelClose}><img src={close_icon} alt="" style={{ width: '12px', height: '12px' }} /></button>
        <p className = "text">Here is the list of notifications</p>
        <ul>
        {listNotifications.map((list) => <NotificationItem key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={this.markAsRead} />)}
        </ul>
        </div>
        </div>)

    }
   
    else {
        return( <div className="menuItem" id="not">
            <p>Your notifications</p>
            </div>)
    }
}
}
Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications : PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications : []
}


export default Notifications;