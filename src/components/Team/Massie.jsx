import React from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

class Massie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false,
        taco: {}
      //Next state Var
    }
    //Next state Method
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  

  componentWillMount() {
    fetch(`https://taco-randomizer.herokuapp.com/random/?full-taco=true`)
    .then(response => response.json())
    .then(taco => {
      this.setState({
        taco: taco
      })

    })
  }
  
  
  render() {
    console.log(this.state.taco)
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title={this.state.taco.name}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          
    <p>Shell: {this.state.taco.shell !== undefined ? this.state.taco.shell.name : `Naked`}</p>
    <p>Mixin: {this.state.taco.mixin !== undefined ? this.state.taco.shell.mixin : `None`}</p>
    <p>Seasoning: {this.state.taco.seasoning !== undefined ? this.state.taco.seasoning.name : `Plain`}</p>
    <p>Condiment: {this.state.taco.condiment !== undefined ? this.state.taco.condiment.name : `Plain`}</p>
    <p>Base Layer: {this.state.taco.base_layer !== undefined ? this.state.taco.base_layer.name : `Naked`}</p>
          
        </Modal>
      </div>
    );
  }
}
export default Massie;
