import React from 'react';
import {Redirect} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography'

import BarChart from '../../components/Chart/Chart'


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

let id = 0;
function createData(eventName, totalParticipants, numberOfMales, numberOfFemales) {
  id += 1;
  return { id, eventName, totalParticipants, numberOfMales, numberOfFemales};
}

const rows = [
  createData('Developer Jobs 101', 159, 82, 68),
  createData('Public Speaking for Developers', 220, 94, 126),
  createData('React Workshop', 84, 59, 25),
  createData('Campus Roadshow', 42, 30, 12),

];
const totalParticipants = [159, 220, 84, 42]


class Dashboard extends React.Component {
    state ={
      showSnackbar: false,
      cancelled: false
    }
    
  
    handleSendMessage = () => {
      this.setState({ openDialog: false, showSnackbar: true,cancelled:false})
    };

    handleCancelMesage = () => {
      this.setState({ openDialog: false, showSnackbar: true, cancelled:true});
    }
  
    handleCloseSnackbar = () => {
      this.setState({ showSnackbar: false})
    };
    render(){
        const {classes, auth} = this.props
        if(!auth.isAuthenticated()){
            alert("You must be Authenticated")
            return <Redirect to="/"/>
        }
        const events = (
            <Table className={classes.table}>
            <TableHead>
              <TableRow>
              <TableCell>Upcoming Events</TableCell>
              <TableCell align="right">Registered participants</TableCell>
              <TableCell align="right">Number of Males</TableCell>
              <TableCell align="right">Number of Females</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.eventName}
                </TableCell>
                <TableCell align="right">{row.totalParticipants}</TableCell>
                <TableCell align="right">{row.numberOfMales}</TableCell>
                <TableCell align="right">{row.numberOfFemales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
     return (
            <div className={classes.root}>
                <br/> <br/> <br/> <br/>
              <Grid container>
                  <Paper className={classes.paper}>
                    {events}
                    <Typography variant="h5" gutterBottom={true} >
                       Graphical Representation of Event's Participants
                    </Typography> 
                    <BarChart totalParticipants={totalParticipants}/>             
                  </Paper>
              </Grid>
            </div>
        );
    }
  
}

export default withStyles(styles)(Dashboard)