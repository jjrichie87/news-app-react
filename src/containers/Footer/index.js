import React from 'react';
import { connect } from 'react-redux';

let Footer = ({  }) => (

  <footer className="container" id="footerCtr">
    <p className="float-right"><a href="#">Back to top</a></p>
    <p>© 2017-2018 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
  </footer>
)

const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
})

Footer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default Footer;
