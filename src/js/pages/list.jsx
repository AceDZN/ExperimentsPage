import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MenuItems from '../constants/MenuItems';
import ExperimentsList from '../constants/ExperimentsList';
import ExperimentsUL from '../components/ExperimentsUL';
import IconicDisplay from '../components/IconicDisplay';

export default class ListPage extends Component {
  componentWillMount(){
    var currentMenu = MenuItems.filter((a)=>{return a.path==this.props.route.path});
    this.setState({
      category_title: currentMenu[0].title,
      category_name: currentMenu[0].name
    });
  }
  renderCategoryPage(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3 ">
            <div className="row">
              <div className="col-xs-9 text-left">
                <h1>
                  {this.state.category_title}
                </h1>
              </div>
              <div className="col-xs-3 text-right platform-logo">
                <IconicDisplay svg={this.state.category_name} height="40" width="40" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-sm-offset-4 list-container">
            <ExperimentsUL parent={this.state.category_name} list={ExperimentsList[this.state.category_name]} />
          </div>
        </div>
      </div>
    )
  }
  renderChildrenFrame(){
    var childitem = ExperimentsList[this.props.route.name].filter(function(a){ return a.id == this.props.params.id }.bind(this))[0];
    return (
      <div>
        <h1 className="text-center">
          {this.renderGitLink(childitem)}
          {this.state.category_title} - {childitem.title}
        </h1>
        <hr className="mb0" />
        <iframe className="exp-frame" src={childitem.link} ></iframe>
      </div>
    )
  }
  renderGitLink(child){
    console.log(child,"child");
    if(child.git){
      return (
        <a className="github-link" href={child.git} target="_blank" >
          <IconicDisplay svg="github" height="40" width="40" fill="#4c4c4c" />
        </a>
      )
    }
  }
  componentWillReceiveProps(nextProps){
    var currentMenu = MenuItems.filter((a)=>{return a.path==nextProps.route.path});
    this.setState({
      category_title: currentMenu[0].title,
      category_name: currentMenu[0].name
    });
  }
  render(){
    if(this.props.params.id){
      return this.renderChildrenFrame();
    }
    return this.renderCategoryPage();
  }
}
