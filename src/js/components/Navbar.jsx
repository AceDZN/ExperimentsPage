import React, {Component} from 'react';
import ExperimentsList from '../constants/ExperimentsList';
import Link from 'react-router/lib/Link';

import IconicDisplay from './IconicDisplay';
class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      navbarCollapse: 'out',
      active: this.props.current,
      open: false
    }
  }
  handleNavbarCollapse(){
    if(this.state.navbarCollapse == "in"){
      this.setState({navbarCollapse: "out"});
    } else {
      this.setState({navbarCollapse: "in"});
    }
  }
  renderChildList(menuchildren,parent){
    let children = [];
    for (var i=0; i<menuchildren.length; i++){
      children.push(
        <li key={menuchildren[i].id+"_link"} className={this.props.current == menuchildren[i].link ? "active" : ""}>
          <Link to={"/"+parent+"/"+menuchildren[i].id}>
            {menuchildren[i].title}
            <span className="sr-only">{this.props.current == menuchildren[i].link  ? "(current)" : ""}</span>
          </Link>
        </li>
      )
    }
    return (
      <ul className="dropdown-menu">
        {children}
      </ul>
    )
  }
  renderMenuList(){
    let items = [];
    const l = this.props.items.length;
    for (var i=0; i<l; i++){

      let path=this.props.items[i].path;
      let children,className,linkClassName,caret;

      if(ExperimentsList[this.props.items[i].name]){
        const experiments = ExperimentsList[this.props.items[i].name];
        const expLength = experiments.length;
        if(experiments && expLength > 0){
          children = this.renderChildList(experiments,this.props.items[i].name);
          className = "dropdown";
          linkClassName="dropdown-toggle";
          caret = <span className="caret"></span>;
        }
      }

      items.push(
        <li
          key={this.props.items[i].path+"_link"}
          onMouseOut={(e)=>{this.setState({open:false})}}
          onMouseOver={(e)=>{this.setState({open:path})}}
          className={className+" "+(this.props.current == this.props.items[i].path ? "active" : "")+" "+(this.state.open == this.props.items[i].path ? "open" : "")}
          >
          <Link to={this.props.items[i].path} className={linkClassName}>
            {this.props.items[i].title}
            <span className="sr-only">{this.props.current == this.props.items[i].path  ? "(current)" : ""}</span>
            {caret}
          </Link>
          {children}
        </li>
      )
    }
    return items
  }
  render(){
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed"onClick={this.handleNavbarCollapse.bind(this)}>
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="http://www.acedzn.com" target="_blank">
                  <IconicDisplay width="90" height="90" svg="logo" />
                </a>
              </div>
              <div className={"collapse navbar-collapse "+this.state.navbarCollapse}>
                <ul className="nav navbar-nav">
                  {this.renderMenuList()}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
