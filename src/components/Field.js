import React from "react";

const Field = ({ field }) => {
    switch (field.attrs.type) {
        case 'text':
            return (
                <div className="mb-3">
                    <label className="form-label">{field.label}</label>
                    <input className="form-control" {...field.attrs} />
                </div>
            )
        case 'textarea':
            return (
                <div className="mb-3">
                    <label className="form-label">{field.label}</label>
                    <textarea className="form-control" {...field.attrs}></textarea>
                </div>
            )
        case 'radio' :
            return (
                <div className="mb-3">
                    <label className="form-label">{field.label}</label>
                    {field.attrs.variants.map((variant, idx) => (
                        <div className="form-check" key={idx}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name={field.attrs.name}
                                value={variant.value}
                            />
                            <label className="form-check-label">
                                {variant.label}
                            </label>
                        </div>
                    ))}
                </div>
            )
        
        case 'select': 
            return (
                <div className="mb-3">
                    <label className="form-label">{field.label}</label>
                    <select className="form-select" name={field.attrs.name}>
                        {field.attrs.variants.map((variant, idx) => (
                        <option key={idx} value={variant.value}>
                            {variant.label}
                        </option>
                        ))}
                    </select>
                </div>
            )

        case 'checkbox':
            return(
                <div className="mb-3">
                <label className="form-label">{field.label}</label>
                {field.attrs.variants.map((variant, idx) => (
                    <div className="form-check" key={idx}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name={field.attrs.name}
                        value={variant.value}
                    />
                    <label className="form-check-label">
                        {variant.label}
                    </label>
                    </div>
                ))}
            </div>
            );
        default:
            return null;
    }
};

export default Field;