// Write your code here
import './index.css'
import {Component} from 'react'
import LoginBtn from '../Login'
import LogoutBtn from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogin: false}

  onBtnClick = () => {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin,
    }))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          {isLogin ? (
            <Message message="Welcome User" />
          ) : (
            <Message message="Please Login" />
          )}
          {isLogin ? (
            <LogoutBtn onClick={this.onBtnClick} />
          ) : (
            <LoginBtn onClick={this.onBtnClick} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
