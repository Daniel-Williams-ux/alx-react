import React from 'react'
import BodySection from './BodySection'
import { StyleSheet, css } from "aphrodite";
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends React.Component{
    render() {
        return(
            <div className={css(style.bodySectionWithMargin)} >
                < BodySection {...this.props} />
            </div>
        )
    }
}


const style = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
    }
})
export default BodySectionWithMarginBottom

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string
}

BodySectionWithMarginBottom.defaultProps = {
    title : ''

}