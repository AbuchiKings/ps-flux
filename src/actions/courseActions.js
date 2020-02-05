import dispatcher from "../appDispatcher";
import * as courseApi from '../api/courseApi';
import actionTypes from "./actionTypes";


export function saveCourse(course) {
    courseApi.saveCourse(course).then(savedCourse => {
        dispatcher.dispatch({
            actionType: actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    });

}

export function loadCourses(course) {
    courseApi.getCourses().then(courses => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_COURSES,
            courses
        });
    });

}