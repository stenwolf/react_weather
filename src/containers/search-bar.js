import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term: ''};

    //rule of thumb, if need to pass a callback, and callback change state
    //need to bind like this
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){

    //'this' is not the actual component, because this is callback function
    //so if do this, 'this' will be undefined, need to bind this in constructor
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    //tell browser not to submit the form
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    //clear the input after submit
    this.setState({term: ''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className='input-group'>
      <input
        placeholder='get forecast'
        className='form-control'
        value={this.state.term}
        onChange={this.onInputChange}
        />
      <span className='input-group-btn'>
        <button type='submit' className='btn btn-secondary'>Submit</button>
      </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

//mapDispatchToProps needs to be 2nd argument
//1st argument is state, in this case, dont need state
export default connect(null, mapDispatchToProps)(SearchBar);
