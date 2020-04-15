import React from 'react';
import APIURL from '../../helpers/environment'
import './Admin.css'

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
let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
let sessionToken = localStorage.getItem('session');
let body = JSON.stringify({"token": sessionToken});
console.log(body)
let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: body,
  redirect: 'follow'
};
console.log(requestOptions)
fetch(`${APIURL}admin/`, requestOptions)
  .then(response => response.json())
  .then(result => {
      this.setState({
        user: result[0], 
        poll: result[1],
        response: result[2]
      })
      console.log(this.state)
  })
  .catch(error => console.log('error', error));
}
  render() {
      return (
          <div id='Admin'>
            {
                this.state.poll.map((poll, index) => {
                    console.log('The index is:', index, 'The poll is:', poll.question)
                    return (
                        <div className='adminController'>
                          <div className='questionPoll'>
                            <h3 className='h3'>{poll.question}</h3>
                            <p className='p'>{poll.solution1} or {poll.solution2}</p>
                          </div>
                        </div>
                        )
                }) 
            }
      </div>
      )}
      }
export default Admin;