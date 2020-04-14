import React from 'react';
import {Modal, Button} from 'antd';
import 'antd/dist/antd.css';

interface Props {
    activity: string,
    type: string
  }

interface State {
    activity: string;
    type: string;
    visible: boolean
  }

class Quinn extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activity: '',
            type: '',
            visible: false,
        }

        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    
    componentDidMount() {
        fetch('http://www.boredapi.com/api/activity/')
        .then(response => response.json())
        .then(result => {
            this.setState({
                activity: result.activity,
                type: result.type
            });
        console.log(result.activity)
        console.log(result.type)

        })
        .catch(error => console.log('error', error));
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

    render() {
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

                    <p>Activity: {this.state.activity}</p>
                    <p>Type: {this.state.type}</p>
                </Modal>
            </div>
        )
    }
}
export default Quinn;