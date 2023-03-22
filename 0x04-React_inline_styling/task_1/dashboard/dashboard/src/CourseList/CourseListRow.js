import React from 'react'
import PropTypes from 'prop-types';

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
        ret = <tr style={RowStyle}><th style={headerRowsytle} colSpan = "2">{textFirstCell}</th></tr>
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


export default CourseListRow