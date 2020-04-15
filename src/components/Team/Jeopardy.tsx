import React from 'react'
import 'antd/dist/antd.css'
import {Modal, Button} from 'antd'
import 'antd/dist/antd.css'


interface Props {
  question: string,
  answer: string

}

interface State {
  question: string;
  answer: string;
  visible: boolean

}

class Jeopardy extends React.Component<Props, State> {  
  constructor(props:Props) {             
    super(props);
    this.state = {
      question: "",
      answer: "",
      visible: false
    }
    this.showModal=this.showModal.bind(this);
    this.handleOk=this.handleOk.bind(this);
    this.handleCancel=this.handleCancel.bind(this)

  }
    
    componentDidMount () {      
     fetch("https://jservice.io/api/random")
    .then(response => response.json())
    .then(result => {
    this.setState({
      question: result[0].question,
      answer: result[0].answer
    });
    console.log(result[0].question)
    console.log(result[0].answer)

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
            title="Let's Play Jeopardy!"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Quesiton: {this.state.question}</p>
            <p>Answer: {this.state.answer}</p>
            
          </Modal>
        </div>
      );
    }
  }

  export default Jeopardy;
  

  
  