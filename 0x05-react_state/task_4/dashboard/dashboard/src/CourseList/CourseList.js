import React from 'react'
import CourseListRow from './CourseListRow.js'
import { StyleSheet, css } from "aphrodite";
import CourseShape from './CourseShape.js'
import PropTypes from 'prop-types';

function CourseList({ listCourses }){
    return(
        <table className={css(styles.list)} id="CourseList">
        <thead className="title">
            <CourseListRow isHeader textFirstCell="Available courses" />
            <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
        {!listCourses.length && (
          <CourseListRow textFirstCell='No course available yet' isHeader={false}/>
        )}

        {listCourses.map((course) => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>
        ))}
      </tbody>
    </table>
    )
}
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};
CourseList.defaultProps = {
    listCourses: [],
};

const Css = {
  borderTableColor: "rgb(170, 170, 170);",
};

const styles = StyleSheet.create({
  list: {
    border: `1px solid ${Css.borderTableColor}`,
    borderCollapse: "collapse",
    width: "95%",
    margin: "40px auto 0 auto",
  },
});


export default CourseList