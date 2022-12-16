import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  first: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 300
  },
  parentPaper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1600
  },
  standalone: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 150
  }
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.parentPaper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.standalone}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs container direction="column" spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.first}>xs=4</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.first}>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                        <Grid item xs container direction="row" spacing={1}>
                          <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=4</Paper>
                          </Grid>
                          <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=4</Paper>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                        <Grid item xs container direction="row" spacing={1}>
                          <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=4</Paper>
                          </Grid>
                          <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=4</Paper>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                        <Grid item xs container direction="row" spacing={1}>
                          <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=4</Paper>
                          </Grid>
                          <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=4</Paper>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}