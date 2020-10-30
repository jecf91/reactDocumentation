import React, { Component } from 'react'

import { UserContext } from './Context';

import Form from './Components/Form';
import Clock from './Components/Clock';
import Post from './Components/Posts';
import WarningBanner from './Components/WarningBanner';
import Button from './Components/Button';
import FancyBorder from './Components/FancyBorder';
import UserInfo from './Components/UserInfo';
import Modal from './Components/Modal';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      date: new Date(),
      posts: [1,2,3,4,5,6,7,8,9],
      isLoggedIn: false,
      user: {
        name:'',
        password:''
      },
    }

    this.handleClick = this.handleClick.bind(this); 
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  handleClick(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  }

  handleLogin() {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState( prevState => ({
      ...prevState,
      user: {
        ...prevState.user,
        [name]: value
      }
    }))
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <>
        <UserContext.Provider value={this.state.user.name}>
          <FancyBorder>
            <Clock dateInfo={this.state.date} />
            <Button nameTag="Alert" handlerFunction={this.handleClick}/>
            {this.state.posts && <Post posts={this.state.posts}/>}
            <Button 
              nameTag={this.state.isLoggedIn ? "Sign out" : "Login"} 
              handlerFunction={this.handleLogin}
              />
            <WarningBanner isLoggedIn={this.state.isLoggedIn}/>
            <Form 
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              value={this.state.user}  
            />
            <UserInfo/>
          </FancyBorder>
          <Modal />
        </UserContext.Provider>
      </>
    )
  }
}
