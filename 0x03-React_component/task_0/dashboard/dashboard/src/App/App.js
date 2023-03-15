import './App.css'
import Header from './components/Header';
import Notifications from './components/Notifications';
import Login from './components/Login';
import Footer from './components/Footer';
import PropTypes from 'prop-types';
import CourseList from '.components/CourseList';

export default function App(props) {
  const { isLoggedIn } = props;
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];
  return (
    <div>
      <Notifications />
      <Header />
     {isLoggedIn ? <CourseList /> : <Login />}
     <CourseList listCourses={listCourses} />
      <Footer />
    </div>
  )
}

App.propTypes = {
isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
isLoggedIn: false,
};
