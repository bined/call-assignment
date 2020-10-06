import React from 'react'

function FileInput({field, setFieldValue}) {
    return (
        <input
            id={field.name}
            name={field.name}
            type="file"
            onChange={(event) => {
                setFieldValue(field.name, event.currentTarget.files[0]);
            }}
        />
    )
}

export default FileInput;
