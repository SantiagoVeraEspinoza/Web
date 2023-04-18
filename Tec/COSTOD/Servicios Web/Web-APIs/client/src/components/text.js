import React from 'react';

class Text extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data: null
        };
    }
    
    componentDidMount() {
        fetch("/api/posts")
            .then((res) => res.json())
            .then((data) => this.setState({ data: data.instapost1.content }));
        /*fetch("/api/posts")
            .then((res) => res.json())
            .then((data) => this.setState({ data: data[0].content }));*/
    }

    render() {
      return (
        <div>
          <p>
            {!this.state.data ? "Loading..." : this.state.data}
          </p>
        </div>
      );
    }
}

export default Text;

  