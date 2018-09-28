import React from 'react';

  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date()
      };
    }

    render() {
      (
        <div>
          <h1>what a big face you have... (~˘▾˘)~  ___ (◕‿◕✿)</h1>
        </div>
      );
    }
}

export default Clock;
