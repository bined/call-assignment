import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormComponent from "./FormComponent";
import Listing from "./ListingComponent";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));


function App() {
    const [dataListing, setDataListing] = useState([]);
    const classes = useStyles();

    const onLoadData = function(data){
        setDataListing(data)
    }

    return (
        <Container component="main" maxWidth="md">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Call Assignment
                </Typography>
                {<FormComponent onLoadData={onLoadData}/>}
                {<Listing data={dataListing} />}
            </div>
        </Container>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
