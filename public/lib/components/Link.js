import React from "react";

class Link extends React.Component {
  render() {
    let {title, url, safe, like} = this.props.link;

    return (
      <div className="link text-center">
        <div style={ {border: (like? '5px solid red':'1px solid black')}  }>
          <a href={url} style={{color: (safe? 'green':'black')} }>{title}</a>
        </div>
      </div>
    );
  }
}

export default Link;
