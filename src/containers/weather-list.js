import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component{

  renderWeather(cityData){
    const name = cityData.city.name;
    //for each weather in list, return weather.main.temp
    const temps = cityData.list.map(weather => (weather.main.temp - 273.15)*1.8 + 32);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color='orange' unit='F'/></td>
        <td><Chart data={pressures} color='green' unit='hPa'/></td>
        <td><Chart data={humidities} color='blue' unit='%'/></td>
      </tr>
    );
  }

  render(){
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

//ES6 same as below
function mapStateToProps({weather}){
  return {weather}; //same as weather: weather
}
// function mapStateToProps(state){
//   //assigned weather reducer to weather key in combined reducer
//   //=> use state.weather
//   return{weather: state.weather};
// }

export default connect(mapStateToProps)(WeatherList);
