import React from 'react';
import './Vote.css'
import { Pie } from 'react-chartjs-2';



class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
        data: {
            labels: [
                this.props.solutions[0],
                this.props.solutions[1]
            ],
            datasets: [{
                data: [this.props.solutions[2], this.props.solutions[3]],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        }
    }
    
}
 


render() {
    console.log(this.props)
    return (
    <div className="chart">
        <Pie height="110" data={this.state.data} options={{
          responsive: true,
          maintainAspectRatio: true
        }}/>
    </div>
    )
    
}
}

export default Chart;