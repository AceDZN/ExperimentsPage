import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ExperimentsList from '../constants/ExperimentsList';
import ExperimentsUL from '../components/ExperimentsUL';
import IconicDisplay from '../components/IconicDisplay';

export default class WelcomePage extends Component {
  render(){
    return (
      <div className="container">
        <div className="text-center">
          <h1>
            Welcome to my Experiments List
          </h1>
          <h3>just a bunch of junk examples from my <a href="http://www.github.com/AceDZN" target="_blank">GitHub</a> page</h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4 list-container">
            <div className="row">
              <div className="col-xs-6">
                <h3 className="section-title">ReactJS</h3>
              </div>
              <div className="col-xs-6 text-right platform-logo">
                <IconicDisplay svg="react" height="40" width="40" />
              </div>
            </div>
            <ExperimentsUL parent="react" list={ExperimentsList.react} />
          </div>
          <div className="col-xs-12 col-sm-4 list-container">
            <div className="row">
              <div className="col-xs-6">
                <h3 className="section-title">AngularJS</h3>
              </div>
              <div className="col-xs-6 text-right platform-logo">
                <IconicDisplay svg="angular" height="40" width="40" />
              </div>
            </div>
            <ExperimentsUL parent="angular" list={ExperimentsList.angular} />
          </div>
          <div className="col-xs-12 col-sm-4 list-container">
            <div className="row">
              <div className="col-xs-6">
                <h3 className="section-title">HTML5</h3>
              </div>
              <div className="col-xs-6 text-right platform-logo">
                <IconicDisplay svg="html5" height="40" width="40" />
              </div>
            </div>
            <ExperimentsUL parent="html5" list={ExperimentsList.html5} />
          </div>
        </div>
      </div>
    )
  }
}
