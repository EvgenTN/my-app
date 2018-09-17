import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import data from '../../data.txt';
import * as dataAction from '../../actions/dataAction';
import {
  UserList,
} from '../../components';


class Home extends Component {

  componentWillMount () {
    fetch (data)
    .then(response => response.json())
    .then(data => {this.props.initData(data)})
  }

  render() {
    // console.log('home_props', this.props)
    const {
      users,
      deleteUser,
      showPhrase,
      addUser,
      // isPhrase,
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
          addUser={addUser}
          // isPhrase={isPhrase}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    users: state.data.users,
    // isPhrase: state.data.isPhrase,
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

export default connect (mapStateToProps, mapDispatchToProps)(Home);