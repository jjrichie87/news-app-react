import React, { Component } from 'react'
import TopNav from '../containers/TopNav'
import Summary from './Summary'
import Footer from '../containers/Footer'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import ErrorBoundary from '../containers/ErrorBoundary'
class App extends Component {

  constructor(props) {
    super(props);
  }
  tick = () => {
    var date = new Date().toLocaleString();
    this.setState({
      date: date
    });
  };

  // Fire this to keep updating the clock
  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
    //Fire API.
    // Amsterdam just a default string
    this.props.actions.fetchNews("amsterdam");
    //console.log(this.props.isFetching)
  }
  render() {
    // Has TopNav, Summary, Footer as containers, prop values are passed from state.
    return (
      <div className="container">
        <ErrorBoundary>
          <header>
            <TopNav summary={(this.props.summaryResponse.response) ? this.props.summaryResponse.response : null} />
          </header>
        </ErrorBoundary>
        {(this.props.isFetching) &&

          <div className="loader"></div>
        }
        {(!this.props.isFetching) &&
          <main role="main">
            <div className="mainCtr">
              <div className="cardCtr"><Summary dateVal={(this.state && this.state.date) ? this.state.date : ""} isFetching={this.props.isFetching} summary={(this.props.summaryResponse.response) ? this.props.summaryResponse.response : null} /></div>
              <div className="btnCtr"></div>
              <div className="footerCtr"><Footer /></div>
            </div>
          </main>}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    summaryResponse: state.summaryResponse,
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default App;

