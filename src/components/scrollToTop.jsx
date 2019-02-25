import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    //console.log("pathname", );
    if (
      this.props.location !== prevProps.location &&
      this.props.location.pathname.indexOf("project") === 1
    ) {
      window.scrollTo(0, 175);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
