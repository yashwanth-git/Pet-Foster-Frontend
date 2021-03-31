import { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import ImageAvatar from "./ImageAvatar";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: "10px",
    padding: "20px",
  },
}));

const FormRow = props => {
  return (
    <Grid container item xs={12}>
      <Grid item xs={5}>
        {props.label && (
          <Typography variant="subtitle1">{props.label}:</Typography>
        )}
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">{props.value}</Typography>
      </Grid>
    </Grid>
  );
};

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const FosterHistory = () => {
  const classes = useStyles();
  const [openOwnerDetails, setOpenOwnerDetails] = useState(false);

  const fosterHistory = [
    {
      id: 1,
      image: "static/images/cards/dog.jpeg",
      name: "Goofy",
      age: "2 years",
      type: "Dog",
      duration: "May 21, 2021 to May 29, 2020",
    },
    {
      id: 2,
      image: "static/images/details/dog2.jpeg",
      name: "Scooby",
      age: "1 year",
      type: "Dog",
      duration: "Aug 21, 2021 to Sept 1, 2020",
    },
    {
      id: 3,
      image: "static/images/details/cat.jpeg",
      name: "Bella",
      age: "9 months",
      type: "Cat",
      duration: "June 21, 2021 to July 1, 2020",
    },
  ];

  return (
    <Container>
      <Grid container direction="column">
        {fosterHistory.map(item => (
          <Grid container item key={item.id}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid container item xs={4}>
                  <Grid>
                    <ImageAvatar image={item.image} name={item.name} />
                    <Button
                      onClick={() => setOpenOwnerDetails(true)}
                      color="primary"
                      variant="contained"
                      size="small"
                    >
                      View owner details
                    </Button>
                  </Grid>
                </Grid>
                <Grid container item xs={8}>
                  <FormRow label="Name" value={item.name} />
                  <FormRow label="Breed" value={item.type} />
                  <FormRow label="Age" value={item.age} />
                  <FormRow label="Duration" value={item.duration} />
                </Grid>
              </Grid>
            </Paper>
            <Dialog
              onClose={() => setOpenOwnerDetails(false)}
              aria-labelledby="customized-dialog-title"
              open={openOwnerDetails}
            >
              <DialogContent dividers>
                <Typography gutterBottom>Owner Information</Typography>
                <Grid container item xs={10}>
                  <Typography gutterBottom>Owner Details:</Typography>
                  <FormRow label="Name" value="Alex" />
                  <FormRow label="Location" value="3 Filmore St. SF, 41202" />
                  <FormRow label="Phone number" value="213-456-7890" />
                  <FormRow label="Email" value="alex@g.com" />
                  <Typography gutterBottom> Happy Fostering! </Typography>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button
                  autoFocus
                  onClick={() => setOpenOwnerDetails(false)}
                  color="primary"
                >
                  Okay
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FosterHistory;