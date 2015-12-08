import React from "react";
import Link from "./Link";
import LinkActions from '../actions/LinkActions';

class List extends React.Component {
  deleteBookmark(bookmark,e){

    LinkActions.deleteLink(bookmark);
  }
  likeBookmark(bookmark,e){
    console.log(bookmark);
    LinkActions.likeLink(bookmark);
  }
  render() {
    var content = this.props.bookmarks.map(bookmark => {
      return (<div><Link key={bookmark.id} link={bookmark} /> &nbsp;
       <button className="btn btn-primary" id={bookmark.id} onClick={this.deleteBookmark.bind(this, bookmark.id)}> Delete </button>
       <button className="btn btn-info" id={bookmark.id} onClick={this.likeBookmark.bind(this, bookmark)}> Like/Dislike </button>
       </div>)
    });
    return (
      <div className=" text-center list">
        {content}
      </div>
    );
  }
}

export default List;
