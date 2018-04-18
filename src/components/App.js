
/**
 *
 */

import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import { Offline, Online } from 'react-detect-offline';
import { STOCKS_JSON_PATH, TIMEOUT, NOTIFICATION_LEVEL } from '../constants'
import { request } from '../api'

import logo from '../assets/logo.svg';
import '../styles/App.css';

class App extends Component {

  state = { stocks: [], headers: []}
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
   * async fetchData - description
   *
   * @return {type}  description
   */
  async fetchData() {
    const response = await request(STOCKS_JSON_PATH)
    if (response.message) {
      this.addNotification(response)
    } else {
      this.setState({stocks: response, headers: Object.keys(response[0])})
    }
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
   * _addNotification - description
   *
   * @param  {type} event description
   * @return {type}       description
   */
  addNotification(response) {
    console.log(response);
    this._notificationSystem.addNotification({
      message: response.message,
      level: NOTIFICATION_LEVEL.WARNING,
      autoDismiss: 0,
      dismissible: 'none'
    })
  }

  /**
   * render - description
   *
   * @return {type}  description
   */
  render() {
    const { stocks, headers } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Online><div className="online" /></Online>
          <Offline><div className="offline" /></Offline>
          <h1 className="App-title">Welcome to Catawiki assignment</h1>
        </header>
        <div className="App-intro">
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
        <NotificationSystem ref="notificationSystem" />
      </div>
    );
  }
}

export default App;
