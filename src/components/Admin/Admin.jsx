import React from 'react';
import APIURL from '../../helpers/environment'
import './Admin.css'
import { Button } from '@material-ui/core/'
import ClearIcon from '@material-ui/icons/Clear';
import CreateIcon from '@material-ui/icons/Create';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: [],
        poll: [],
        response: [],
        deleted: ""
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

componentDidUpdate(prevState) {
  console.log(prevState.deleted, this.state.deleted)
}

componentDidMount() {
console.log(this.state.deleted)
let sessionToken = localStorage.getItem('session');
var myHeaders = new Headers();
myHeaders.append("Authorization", sessionToken);
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`${APIURL}admin/`, requestOptions)
  .then(response => response.json())
  .then(result => {
      this.setState({
        user: result[0], 
        poll: result[1],
        response: result[2],
        
      })
      
  })
  .catch(error => console.log('error', error));
}

handleDelete(id) {
  console.log(id)
  let sessionToken = localStorage.getItem('session');
  var myHeaders = new Headers();
  myHeaders.append("Authorization", sessionToken);
  myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
  fetch(`${APIURL}poll/delete/${id}`, requestOptions)
  .then(response => response.text())
  .then(text => {
    this.setState(
      {deleted: text}
    )
    
    
  })
}

  render() {
      return (
        <div id='Admin'>
          <h1>USER ADMIN</h1>
          <h2>Edit / Delete My Polls</h2>
          <div className='adminController'>
                {
                this.state.poll.map((poll, index) =>
                {
                  return (
                      
                      <div className='questionPoll' key={index}>
                        <h2 className='h3'>{poll.question}</h2>
                        <p className='p'>{poll.solution1} or {poll.solution2}</p>
                        <div>
                        <Button><ClearIcon color="secondary" onClick={() => this.handleDelete(poll.id)}/></Button>
                        <Button><CreateIcon color="primary"/></Button>
                        </div>
                      </div>
                      
                        )
                        
                })
                 
            }
            </div>
      </div>
      )}
      }
export default Admin;