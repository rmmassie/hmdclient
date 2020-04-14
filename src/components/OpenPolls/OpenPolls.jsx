import React from 'react';
import './OpenPolls.css';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
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
        fetch(`${APIURL}poll/status/active`)
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
            const handleClick = () => {};

            return ( 
                <>
                <h4 className="activePoll">Active Polls</h4>
                <p className="pollColor">Voting is still open on these polls. Cast your Vote!</p>
                {
                this.state.polls.map(function(poll)
                {
                return (
                <ExpansionPanel key={poll.id}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-label="Expand" aria-controls="additional-actions1-content" id="additional-actions1-header">
                   {poll.question}</ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <p className="pollSolution">{poll.solution1} or {poll.solution2}</p><br></br>
                        <Button variant="contained" color="secondary" onClick={() => this.props.setVote(true, poll.id)}>Vote!</Button>
                        {
                            poll.tags.map((tag, index) => {
                                return (
                                    <Chip id="Chip" key={index} label={tag} onClick={handleClick}/>
                                    )
                            }) 
                        }
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