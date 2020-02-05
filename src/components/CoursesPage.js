import React, { useState, useEffect } from 'react';
import store from '../stores/courseStore';
import { Link } from 'react-router-dom'
import { loadCourses, deleteCourse } from '../actions/courseActions';
import CourseList from './CourseList';

function CoursesPage() {

    const [courses, setCourses] = useState(store.getCourses());

    useEffect(() => {
        store.addChangeListener(onChange)
        if (store.getCourses().length === 0) loadCourses();
        return () => store.removeChangeListener(onChange)
    }, [courses.length]);

    function onChange() {
        setCourses(store.getCourses());

    }
    


    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">
                Add Course
             </Link>
            <CourseList courses={courses} delCourse={deleteCourse}/>
        </>
    )

}


export default CoursesPage;

// class CoursesPage extends React.Component {
//     state = {
//         courses: []
//     };

//     componentDidMount() {
//         getCourses().then(courses => {
//             this.setState({ courses: courses });
//         });
//     }

//     render() {
//         return (
//             <>
//                 <h2>Courses</h2>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Title</th>
//                             <th>Author</th>
//                             <th>Category</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.courses.map(course => {
//                                 return (
//                                     <tr key={course.id}>
//                                         <td>{course.title}</td>
//                                         <td>{course.authorId}</td>
//                                         <td>{course.category}</td>
//                                     </tr>
//                                 )
//                             })
//                         }
//                     </tbody>
//                 </table>
//             </>
//         )
//     }
// }
