import React from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

interface Props {
  
}

interface State {
  title: string,
  visible: boolean,
  shell: string,
  mixin: string,
  seasoning: string,
  condiment: string,
  base: string
}

class Massie extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
        visible: false,
        title: "",
        shell: "",
        mixin: "",
        seasoning: "",
        condiment: "",
        base: ""
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

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  

  componentDidMount() {
    fetch(`https://taco-randomizer.herokuapp.com/random/?full-taco=true`)
    .then(response => response.json())
    .then(taco => {
      console.log(taco)
      let title: string = taco.name
      let base: string = taco.base_layer !== undefined ? taco.base_layer.name : "No Base"
      let shell: string = taco.shell !== undefined ? taco.shell.name : "Naked"
      let mixin: string = taco.mixin !== undefined ? taco.mixin.name: "No Mix-in"
      let seasoning: string = taco.seasoning !== undefined ? taco.seasoning.name: "No Seasonings"
      let condiment: string = taco.condiment !== undefined ? taco.condiment.name: "No Condiments"
      console.log(base, shell, mixin, seasoning, condiment)  
    this.setState({
        title: title,
        base: base,
        shell: shell,
        mixin: mixin,
        seasoning: seasoning,
        condiment: condiment
        })
    })
  }
  
  
  render() {
    // console.log(this.state.taco)
    return (
      <div id="massie">
        <img src="/tacorando.png" alt="A Rad Taco"></img>
        <Button type="primary" onClick={this.showModal}>
        Dame un taco al azar
        </Button>
        <Modal
          title={this.state.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          
    <p>Shell: {this.state.shell}</p>
    <p>Mixin: {this.state.mixin}</p>
    <p>Seasoning: {this.state.seasoning}</p>
    <p>Condiment: {this.state.condiment}</p>
    <p>Base Layer: {this.state.base}</p>
          
        </Modal>
      </div>
    );
  }
}
export default Massie;
