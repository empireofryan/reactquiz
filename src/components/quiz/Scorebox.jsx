import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Scorebox extends Component{

  render(){
    return(
      <div className="well">
        Question {this.props.current} out of {this.props.questions.length} <span className="pull-right"><b>Score: {this.props.score}</b></span>
      </div>
    )
  }
}

export default Scorebox
