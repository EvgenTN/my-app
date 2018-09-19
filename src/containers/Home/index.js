import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import data from '../../data.txt';
import * as dataAction from '../../actions/dataAction';
import {
  UserList,
} from '../../components';


class Home extends Component {

  state = {
    name: '',
    age: '',
    phone: '',
  };

  addName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  addAge = (e) => {
    this.setState({
      age: e.target.value,
    })
  }

  addPhone = (e) => {
    this.setState({
      phone: e.target.value,
    })
  }

  addUser = (e) => {
    e.preventDefault();
    let userContact = {
      image: this.props.users[0].image,
      name: this.state.name,
      age: this.state.age,
      phone: this.state.phone,
      phrase: 'no phrase',
    };
    this.setState({
      name: '',
      age: '',
      phone: '',
    })
    this.props.addUser(userContact);
  }

  componentWillMount() {
    fetch(data)
      .then(response => response.json())
      .then(data => { this.props.initData(data) })
  }

  render() {
    // console.log('home_props', this.props)
    // console.log('state', this.state)
    const {
      users,
      deleteUser,
      showPhrase,
    } = this.props;
    return (
      <div className='container home'>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
        <h1>Hello from home</h1>
        <UserList
          users={users}
          deleteUser={deleteUser}
          showPhrase={showPhrase}
          addUser={this.addUser}
          addName={this.addName}
          addAge={this.addAge}
          addPhone={this.addPhone}
          homeState={this.state}
        // isPhrase={isPhrase}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('state', state.data.users)
  return {
    users: state.data.users,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    initData: users => dispatch(dataAction.initUsers(users)),
    deleteUser: id => dispatch(dataAction.deleteUser(id)),
    showPhrase: (item, id) => dispatch(dataAction.showPhrase(item, id)),
    addUser: user => dispatch(dataAction.addUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);