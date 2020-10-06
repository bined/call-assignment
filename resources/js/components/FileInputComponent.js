import React from 'react'

function FileInput({field, label, setFieldValue}) {
    return (
        <div>
           <label htmlFor={label}><strong>{label}</strong></label>
            <input
            id={field.name}
            name={field.name}
            type="file"
            onChange={(event) => {
                setFieldValue(field.name, event.currentTarget.files[0]);
            }}
            />
        </div>
    )
}

export default FileInput;
