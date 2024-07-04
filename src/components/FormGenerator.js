import React from "react";
import Field from "./Field";

const FormGenerator = ({ formData }) => {
    return (
        <div className="container mt-5">
            <h1>{formData.title}</h1>
            {formData.description && <p>{formData.description}</p>}
            <form>
                {formData.fields.map((field, idx) => (
                <Field key={idx} field={field} />
                ))}
                <div className="mt-3">
                {formData.buttons.includes('submit') && (
                    <button type="submit" className="btn btn-primary me-2">
                    Submit
                    </button>
                )}
                {formData.buttons.includes('clear') && (
                    <button type="reset" className="btn btn-secondary">
                    Clear
                    </button>
                )}
                </div>
            </form>
        </div>
    )
};

export default FormGenerator;