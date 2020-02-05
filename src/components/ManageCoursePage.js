 import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseActions from "../actions/courseActions";
import { toast } from "react-toastify"
import store from "../stores/courseStore";


const ManageCoursePage = (props) => {
    //console.log(props)
    const [errors, setErrors] = useState({});
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    useEffect(()=>{
        const slug = props.match.params.slug;
        if(slug){
            setCourse(getCourseBySlug(slug));
        }
    }, [props.match.params.slug])

    function handleTitleChange({ target }) {
        //console.log('Typing...')
        const updatedCourse = { ...course, [target.name]: target.value };
        setCourse(updatedCourse);

    }

    function formIsValid() {
        const _errors = {};
        if (!course.title) _errors.title = "Title is required";
        if (!course.authorId) _errors.authorId = "Author Id is required";
        if (!course.category) _errors.category = "Category is required";

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        courseActions.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success("Course saved.")
        });
    }

    return (
        <>
            <h2>Manage Course</h2>
            {/* <Prompt when={true} message="Are you sure?" /> */}
            <CourseForm course={course}
                errors={errors}
                onTitleChange={handleTitleChange}
                onSubmit={handleSubmit}
            />
        </>
    )
}

export default ManageCoursePage;