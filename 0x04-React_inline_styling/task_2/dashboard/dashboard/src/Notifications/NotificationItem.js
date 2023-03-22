
import React from 'react';
import { StyleSheet, css } from "aphrodite";
import PropTypes from 'prop-types';



class NotificationItem extends React.PureComponent {

  render() {
    const { type, html, value, id, markAsRead} = this.props
    let typeStyle = css(type === "urgent" ? styles.urgent : styles.default);
  
  if (type && value) {
      return <li className={typeStyle} data-priority={type} onClick={() => markAsRead(id)}>{value}</li>;
  }
  return <li className={typeStyle} data-priority={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>;
}
}


NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
  id: PropTypes.number,
}
NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  id: 0,
};


const styles = StyleSheet.create({
  default: {
    color: "blue",
  },

  urgent: {
    color: "red",
  },
});


export default NotificationItem;