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
  componentDidMount(){
    this.setFrameHeight();
    window.onresize = this.setFrameHeight.bind(this);
  }
    renderCategoryPage(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-sm-offset-3 ">
                        <div className="row">
                            <div className="col-xs-9 text-left">
                                <h1>{this.state.category_title}</h1>
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
  setFrameHeight(){
    if(this.refs.exp_frame){
      var windowHeight = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
      var frameOffset =  this.refs.exp_frame.getBoundingClientRect().top;
      var frameHeight = windowHeight-frameOffset;
      this.setState({
        frameHeight
      })
    }
  }
  renderChildrenFrame(){
    var frameStyle={
      height: this.state.frameHeight
    }
    var childitem = ExperimentsList[this.props.route.name].filter(function(a){ return a.id == this.props.params.id }.bind(this))[0];
    return (
      <div>
        <div id="subheader">
          <h1 className="text-center">
            {this.state.category_title}<br /><span className="dash"> - </span>{childitem.title}{this.renderGitLink(childitem)}
          </h1>
          <hr className="mb0" />
        </div>
        <iframe style={frameStyle} ref="exp_frame" className="exp-frame" src={childitem.link} ></iframe>
      </div>
    )
  }
  renderGitLink(child){
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

    this.setFrameHeight();
  }
  render(){
    if(this.props.params.id){
      return this.renderChildrenFrame();
    }
    return this.renderCategoryPage();
  }
}
