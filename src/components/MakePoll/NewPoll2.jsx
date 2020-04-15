import React from 'react';
import './Poll.css'
import { Button, TextField } from '@material-ui/core'
import APIURL from '../../helpers/environment'

class NewPoll2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        pollQuestion: null,
        answer1: null,
        answer2: null, 
        tags: null,
        summary: null
    }
    this.pollSubmit = this.pollSubmit.bind(this)
}

    pollSubmit(event) {
        event.preventDefault()
        console.log("The Question is: ", this.state.pollQuestion)
        console.log("Option 1 is: ", this.state.answer1)
        console.log("Option 2 is: ", this.state.answer2)
        console.log("Tags: ", this.state.tags)
        console.log("Summary is: ", this.state.summary)

        //REQUIRE FORM VALIDATION
        let sessionToken = localStorage.getItem('session');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", sessionToken);
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify(
            {
                "question":this.state.pollQuestion,
                "answer1":this.state.answer1,
                "answer2":this.state.answer2,
                "tags":[this.state.tags],
                "summary":this.state.summary
            });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow'
        };

        fetch(`${APIURL}poll/new/newPoll`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            alert("Your Poll Has Been Recorded! In 48 Hours, We'll send your the community's response!")
        })
        
        .catch(error => console.log('error', error));
        }
    
  render() {
    return (
        <div className="home">
            <h2>Make a New Poll</h2>
            <div className="pollContainer">
                <form>
                    <div className="question">

                        <TextField required
                            label="Summarize the question you'd like help answering:"
                            id="outlined-helperText"
                            autoComplete="off" 
                            onChange={e => {
                                this.setState({
                                    pollQuestion: e.target.value,
                                })}}
                            fullWidth
                            variant="outlined"
                             />
                    </div>
                    <hr/>
                    <div className="question">
                        <div className="q1">
                            <TextField required
                            label="What's Your First Option?"
                            id="outlined-helperText"
                            autoComplete="off"
                            onChange={e => {
                                this.setState({
                                    answer1: e.target.value,
                                })}}
                            fullWidth
                            variant="outlined"
                           
                            />
                        </div>
                        <div className="q1">
                            
                            <TextField required 
                                label="What's Your Second Option?"
                                id="outlined-helperText" 
                                autoComplete="off" 
                                onChange={e => {
                                    this.setState({
                                        answer2: e.target.value,
                                    })}}
                                fullWidth
                                variant="outlined"
                                
                                />
                        </div>
                     </div>
                    <hr/>
                    <div className="question">
                        <TextField required
                        label="Category Tags (Comma Seperated)"
                        id="standard-required" 
                        autoComplete="off" 
                        onChange={e => {
                            this.setState({
                                tags: e.target.value,
                        })}} 
                        variant="outlined"
                        fullWidth/>
                        
                    </div>
                    <hr/>
                    <div className="question">
                        <TextField required
                        id="standard-required" 
                        label="Provide any context or background that might be helpful for us." 
                        autoComplete="off" 
                        onChange={e => {
                            this.setState({
                                summary: e.target.value,
                            })}} 
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                         />
                    </div>
                    <hr/>
                    <div className="question">
                        <div className="submitdiv">
                        <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="submit"
                        onClick={this.pollSubmit}>
                        Submit Poll
                    </Button>
                    </div>
                    <div className="notes">
                    <p>How it works: Fill Out the form above to create a poll 
                       that others users can vote on. After your poll closes 
                       in 48 hours, we'll send your results via email, or you 
                       can view your polls in your user profile.
                    </p>
                        </div>    
                    
                    </div> 
                        <div>
                           
                        </div>  
            
              
              
                
                </form>
            </div>
        </div>
        )
    }
}


export default NewPoll2;
