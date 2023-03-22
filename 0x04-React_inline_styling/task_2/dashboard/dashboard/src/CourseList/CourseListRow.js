import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
  }
CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

function CourseListRow({isHeader = false, textFirstCell , textSecondCell = null}){
    const RowStyle = {
        backgroundColor: '#f5f5f5ab'
    }
    const headerRowsytle = {
        backgroundColor: '#deb5b545'
    } 
    let ret = "";
    if (isHeader && textSecondCell  === null){
        ret = <tr style={RowStyle}><th className={css(styles.CourseListThSpan2)} style={headerRowsytle} colSpan = "2">{textFirstCell}</th></tr>
        return ret

    }
    if(isHeader && !!textSecondCell ){
        ret = <tr style={RowStyle}><th style={headerRowsytle}>{textFirstCell}</th><th style={headerRowsytle}>{textSecondCell}</th></tr>
        return ret
    }
    else{
        ret =<tr style={RowStyle}><td>{textFirstCell}</td><td>{textSecondCell}</td></tr>
        return ret
    }
}

const Css = {
    borderTableColor: "rgb(170, 170, 170);",
  };
  
  const styles = StyleSheet.create({
    CourseListTh: {
      borderTop: `1px solid ${Css.borderTableColor}`,
      borderBottom: `1px solid ${Css.borderTableColor}`,
      textAlign: "left",
      fontSize: "18px",
    },
  
    CourseListThSpan2: {
      textAlign: "center",
    },
  
    CourseListTd: {
      textAlign: "left",
    },
})

export default CourseListRow