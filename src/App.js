import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/Testimonial">
        <MDBBtn className="ms-3 mt-3">Testimonial</MDBBtn>
      </Link>
      <Link to="/Multiitem">
        <MDBBtn className="ms-3 mt-3">Multiitem</MDBBtn>
      </Link>
    </MDBContainer>
  );
}

export default App;
