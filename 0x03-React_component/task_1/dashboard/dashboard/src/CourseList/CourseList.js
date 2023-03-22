import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { CourseShape } from '../shapes/CourseShape';

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow
          textFirstCell="Available courses"
          isHeader={true}
        />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
            />
          ))
        ) : (
          <tr>
            <td colSpan="2">No course available yet</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
