import React from 'react';
import Proptypes from "prop-types";
import { Link } from 'react-router-dom';

function CourseList(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.courses.map(course => {
                        return (
                            <tr key={course.id}>
                                <td className="btn btn-outline-danger"
                                    onClick={() => props.delCourse(course.id)}>Delete</td>
                                <td><Link to={"/course/" + course.slug}>{course.title}</Link></td>
                                <td>{course.authorId}</td>
                                <td>{course.category}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
    delCourse: Proptypes.func.isRequired,
    courses: Proptypes.arrayOf(Proptypes.shape({
        id: Proptypes.number.isRequired,
        title: Proptypes.string.isRequired,
        authorId: Proptypes.number.isRequired,
        category: Proptypes.string.isRequired,
    })).isRequired
};


export default CourseList;