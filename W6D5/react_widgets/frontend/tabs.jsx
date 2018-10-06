import React from 'react';

class Tab extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({selected: num});
    // alert(num);
  }

  render() {
    const obj1 = this.props.tabContent[0];
    const obj2 = this.props.tabContent[1];
    const obj3 = this.props.tabContent[2];

    return (
      <nav className = "flexfrog-everything">
        <ul className="flexfrog">
          <h1 onClick = { () => this.selectTab(0)}> {obj1.title}</h1>
          <h1 onClick = { () => this.selectTab(1)}> {obj2.title}</h1>
          <h1 onClick = { () => this.selectTab(2)}> {obj3.title}</h1>
         </ul>

        <article className="flexfrog-article">
          {this.props.tabContent[this.state.selected].content}
        </article>

      </nav>);
  }
}

export default Tab;
