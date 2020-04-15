import React from 'react';
import APIURL from '../../helpers/environment'

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: [],
        poll: [],
        response: []
    }
  }

componentDidMount() {
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
        response: result[2]
      })
      
  })
  .catch(error => console.log('error', error));
}
  render() {
      return (
          <div>
            {
                this.state.poll.map((poll, index) => {
                    console.log('The index is:', index, 'The poll is:', poll.question)
                    return (
                        <div>
                            <h3>{poll.question}</h3>
                            <p>{poll.solution1} or {poll.solution2}</p>
                        </div>
                        )
                }) 
            }
      </div>
      )}
      }
export default Admin;