// import { Card } from "@mui/material";
// import React from "react";

// function ViewOrder() {
//   return (
//     <div style={{ paddingTop: "5%" }}>
//       <Card>
//         <h1 style={{ marginLeft: "auto" }}>Item Number:- 8568</h1>
//       </Card>
//     </div>
//   );
// }

// export default ViewOrder;

import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import Header from "../../components/Header";

function ViewOrder() {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "5%", paddingBottom: "5%", height: "50%" }}>
        <MDBContainer fluid className="my-5">
          <MDBRow className="justify-content-center">
            <MDBCol md="6">
              <MDBCard className="text-black">
                <MDBIcon
                  fab
                  icon="apple"
                  size="lg"
                  className="px-3 pt-3 pb-2"
                />
                <MDBCardImage
                  src="/product1.png"
                  position="top"
                  alt="Apple Computer"
                />
                <MDBCardBody>
                  <div className="text-center">
                    <MDBCardTitle>Believing is seeing</MDBCardTitle>
                    <p className="text-muted mb-4">Apple pro display XDR</p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Pro Display XDR</span>
                      <span>$5,999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Pro stand</span>
                      <span>$999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Vesa Mount Adapter</span>
                      <span>$199</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Total</span>
                    <span>$7,197.00</span>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default ViewOrder;
