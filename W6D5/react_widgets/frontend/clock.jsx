import React from 'react';

  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date()
      };

      this.tick = this.tick.bind(this);
    }

    componentDidMount() {
      this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.intervalId);
    }

    render() {
      var time = this.state.time;
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      return (
        <div>
          <h1>what a big face you have... (~˘▾˘)~  ___ (◕‿◕✿)</h1>
          <div className="McSpicyFont">
            <h2 className="clock-time">
              THE TIME IS NOW!!!! {hours}:{minutes}:{seconds}
            </h2>

            <h2>
              THIS IS THE DATE, OK? {time.toDateString()}
            </h2>

          </div>
        </div>
      );
    }

    tick() {
      this.setState({time: new Date()});
    }
}

export default Clock;
