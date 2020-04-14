import React from 'react';
import {Modal, Button} from 'antd';
import 'antd/dist/antd.css';

class Quinn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            activity: '',
            type: ''
        }

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

    componentDidMount() {
        fetch('http://www.boredapi.com/api/activity/')
        .then(response => response.text())
        .then(result => console.log(result))
        .then(bored => {
            this.setState({
                activity: bored.activity,
                type: bored.type
            })
            .catch(error => {
                console.log('error', error);
            })
        })
    }

    render() {
        console.log(this.state.bored)
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal 
                title='Bored API'
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >

                    <p>Activity: {this.state.bored.activity}</p>
                    <p>Type: {this.state.bored.type}</p>
                </Modal>
            </div>
        )
    }
}
export default Quinn;