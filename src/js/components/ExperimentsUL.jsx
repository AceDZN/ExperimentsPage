import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Link from 'react-router/lib/Link';


export default class ExperimentsUL extends Component {

  renderListItems(){
    let renderedList=[];
    if(this.props.list && this.props.list.length>1){
      this.props.list.sort(function(a,b) {return (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0);} );
      for(var i=0; i<this.props.list.length; i++){
        renderedList.push(
          <li key={this.props.parent+"_"+this.props.list[i].id+"_item"} className="list-group-item">
            <Link to={"/"+this.props.parent+"/"+this.props.list[i].id}>
              {this.props.list[i].title}
            </Link>
          </li>
        );
      }
    }
    return renderedList
  }
  render(){
    return (
      <ul className="list-group">
        {this.renderListItems()}
      </ul>
    )
  }
}

ExperimentsUL.defaultProps = {list: []};
