import React from 'react';
import { Formik, Field, Form } from "formik";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import FileInput from "./FileInputComponent";

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function FormComponent(props) {
    const classes = useStyles();
    return (
        <Formik initialValues={{ agents_file: undefined, leads_file: undefined }}

                onSubmit={async (input, { resetForm }) => {
                    var formdata = new FormData();
                    formdata.append("agents_file", input['agents_file']);
                    formdata.append("leads_file", input['leads_file']);

                    await axios.post(`/api/import`, formdata).then(response => {
                        if(response.data.success){
                            props.onLoadData(response.data.leads)
                        }
                        resetForm({})
                    })
                        .catch(err => {
                            console.log(err);
                        });
                }}
        >
            {({ errors, touched, setFieldValue }) => (

                <Form className={classes.form}>
                 <Field
                    name="agents_file"
                    label="Agents File"
                    component={FileInput}
                    setFieldValue={setFieldValue}
                />
                <Field
                    name="leads_file"
                    label="Leads File"
                    component={FileInput}
                    setFieldValue={setFieldValue}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Import
                </Button>
            </Form>
            )}
        </Formik>
    );
}

export default FormComponent;
