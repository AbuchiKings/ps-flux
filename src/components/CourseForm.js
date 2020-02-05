import React from "react";
import TextInput from './common/TextInput';
import PropTypes from "prop-types";

function CourseForm({ course, onTitleChange, onSubmit, errors }) {
    return (
        <form onSubmit={onSubmit}>
            <TextInput
                id="title"
                label="Title"
                name="title"
                value={course.title}
                onChange={onTitleChange}
                error={errors.title}
            />

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        name="authorId"
                        onChange={onTitleChange}
                        value={course.authorId || ""}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
                {errors.authorId && (<div className="alert alert-danger">{errors.authorId}</div>)}
            </div>


            <TextInput
                id="category"
                label="Category"
                name="category"
                onChange={onTitleChange}
                value={course.category}
                error={errors.category}
            />


            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };

export default CourseForm;
