import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../components/Navbar';
import MenuItems from '../constants/MenuItems';



export default class MainPage extends Component {
  render(){
    return (
      <div>
        <NavBar items={MenuItems} current={this.props.location.pathname} />
        {this.props.children}
      </div>
    )
  }
}
