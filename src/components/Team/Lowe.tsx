import React from 'react'
import 'antd/dist/antd.css'
import {Modal, Button} from 'antd'




interface Props {
    setup: string,
    delivery: string,
}

interface State {
    joke: [string]
    setup: string,
    delivery: string,
    visible: boolean
}

class Lowe extends React.Component<Props, State> {  
    constructor(props:Props) {             
      super(props);
      this.state = {
        joke: [''],
        setup: "",
        delivery: "",
        visible: false
      }
      this.showModal=this.showModal.bind(this);
      this.handleOk=this.handleOk.bind(this);
      this.handleCancel=this.handleCancel.bind(this)
  
    }


    componentDidMount () {      
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=twopart?contains=0%75")
       .then(response => response.json())
       .then(result => {
           console.log(result)
       this.setState({
            setup: result.setup,
            delivery: result.delivery
       });
       console.log(result[0].setup)
       console.log(result[0].delivery)
   
       })
       .catch(error => console.log('error', error));
       }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        console.log();
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = () => {
        console.log();
        this.setState({
          visible: false,
        });
      }
  
      render() {
        return (
            <div className=  "Results" >
            <Button type="primary" onClick={this.showModal}>
              Open Modal
            </Button>
            <Modal
              title="Wanna Hear a Joke?"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Riddle: {this.state.setup}</p>
              <p>Answer: {this.state.delivery}</p>
              
            </Modal>
          </div>
        );
      }
    }
  
    export default Lowe;