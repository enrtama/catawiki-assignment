

/**
 * @file Main component
 * @author Enrique Tamames Sobrino
 * @module components/App
 * @version 0.0.1
 */

import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import Spinner from 'react-spinkit'
import { Offline } from 'react-detect-offline';
import { STOCKS_JSON_PATH, TIMEOUT, SIMULATED_DELAY, NOTIFICATION_LEVEL, NOTIFICATION_AUTODISMISS } from '../constants'
import { request } from '../api'

import logo from '../assets/catawiki-logo.png';
import '../styles/App.css';

//
// Use to simulate that the call to the endpoint takes "ms" to respond
// In this case, we show an loader indicator
//
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

class App extends Component {

  state = { stocks: [], headers: [], isLoading: false}
  _notificationSystem: null

  /**
   * async componentWillMount - description
   *
   * @return {type}  description
   */
  componentWillMount() {
    this.fetchData()
    this.interval = setInterval(this.fetchData.bind(this), TIMEOUT);
  }


  /**
   * componentDidMount - description
   *
   * @return {type}  description
   */
  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  /**
   * componentWillUnmount - description
   *
   * @return {type}  description
   */
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  /**
   * async fetchData - Get stocks from JSON file
   *
   * @return {type}  description
   */
  async fetchData() {
    this.setState({isLoading: true})
    await delay(SIMULATED_DELAY);
    const response = await request(STOCKS_JSON_PATH)
    if (response.message) {
      this.addNotification(response)
    } else {
      this.setState({stocks: response, headers: Object.keys(response[0])})
    }
    this.setState({isLoading: false})
  }

  /**
   * capitalizeFirstLetter - description
   *
   * @param  {type} string description
   * @return {type}        description
   */
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * addNotification - Add notification
   *
   * @param  {type} response description
   * @return {type}          description
   */
  addNotification(response) {
    this._notificationSystem.addNotification({
      message: response.message,
      level: NOTIFICATION_LEVEL.WARNING,
      autoDismiss: NOTIFICATION_AUTODISMISS,
      dismissible: 'none'
    })
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    const { stocks, headers, isLoading } = this.state
    return (
      <div className="App">
        <Offline><div className="offline">Not connected</div></Offline>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Catawiki assignment</h1>
        </header>
        <div className="App-intro">
        {stocks.length === 0 && <p className="App-nodata">No stock data is available</p>}
        <table>
          <thead>
            <tr>
            {headers.map((header, key) => {
              return <th key={key}>{this.capitalizeFirstLetter(header)}</th>
            })}
            </tr>
          </thead>
          <tbody>
          {stocks.map((stock, key) => {
            return <tr key={key}>
                     <td>{stock.company}</td>
                     <td>{stock.value}<span> &euro;</span></td>
                   </tr>
          })}
          </tbody>
        </table>
        </div>
        {isLoading && <Spinner name='circle' />}
        <NotificationSystem ref="notificationSystem" />
      </div>
    );
  }
}

export default App;
