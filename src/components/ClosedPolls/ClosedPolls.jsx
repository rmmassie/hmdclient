import React from 'react';
import './ClosedPolls.css';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import APIURL from '../../helpers/environment'

class OpenPoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           polls: undefined,
           pollId: null
        }
    }
//Prior to mounting, fetch all active polls, store them in and array, and push the array to the polls state variable
    componentDidMount() {

        let pollArray = []
        let sessionToken = localStorage.getItem('session');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", sessionToken);
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
        
        fetch(`${APIURL}poll/status/closed`, requestOptions)
        .then(response => response.json())
        .then(result => {        
            for (let i=0; i < result.length; i++) {
                let pollObj = {
                id: result[i].id,
                question: result[i].question,
                tags: result[i].tags,
                solution1: result[i].solution1,
                solution2: result[i].solution2
                }
            pollArray.push(pollObj)
            }
            
            
            this.setState({
                polls: pollArray
            })
        }).catch(err => console.log(err))
    }


    
    render() {
        if (this.state.polls !== undefined) {
            return ( 
                <>
                <h4 className="completedPoll">Completed Polls</h4>
                <p className="pollColor">These polls are closed and the results are in!</p>
                {
                this.state.polls.map(function(poll)
                {
                return (
                <ExpansionPanel key={poll.id}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-label="Expand" aria-controls="additional-actions1-content" id="additional-actions1-header">
                    <h3>{poll.question}</h3>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <p>{poll.solution1} or {poll.solution2}</p><br></br>
                        <Button variant="contained" color="secondary" onClick={() => this.props.setVote(true, poll.id)}>Results</Button>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                )}, this)
                }
                </>
                )}
        else {
          return (
            <div>
                <p>loading Polls</p>
            </div>
          )
        }
    }
}

export default OpenPoll