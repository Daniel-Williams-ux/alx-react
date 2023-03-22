import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<CourseList />);
    expect(getByTestId('course-list')).toBeInTheDocument();
  });

  it('renders 5 different rows', () => {
    const courses = [
      {
        id: 1,
        title: 'Course 1',
        description: 'Description for course 1',
        image: 'course1.jpg',
        link: 'course1.html'
      },
      {
        id: 2,
        title: 'Course 2',
        description: 'Description for course 2',
        image: 'course2.jpg',
        link: 'course2.html'
      },
      {
        id: 3,
        title: 'Course 3',
        description: 'Description for course 3',
        image: 'course3.jpg',
        link: 'course3.html'
      },
      {
        id: 4,
        title: 'Course 4',
        description: 'Description for course 4',
        image: 'course4.jpg',
        link: 'course4.html'
      },
      {
        id: 5,
        title: 'Course 5',
        description: 'Description for course 5',
        image: 'course5.jpg',
        link: 'course5.html'
      }
    ];
    const { getAllByTestId } = render(<CourseList courses={courses} />);
    expect(getAllByTestId('course-card')).toHaveLength(5);
  });
});
