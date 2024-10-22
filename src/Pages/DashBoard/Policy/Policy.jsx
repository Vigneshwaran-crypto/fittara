import React from "react";
import { Container } from "react-bootstrap";
import "../MenuOptionsStyles.css";
import "./styles.css";
import { Button } from "@mui/material";
const Policy = () => {
  return (
    <Container fluid className="tabScreens">
      <div className="policeParent">
        <div>
          <span></span>
          <span>
            <h4>Terms & Conditions</h4>
            <p>
              Terms and conditions (T&C) are a set of rules and guidelines that
              govern the use of a website, app, or service. They outline the
              rights and responsibilities of both the provider and the users.
            </p>

            <Button
              size="small"
              variant="contained"
              className="addProductBt"
              style={{ alignSelf: "flex-start", boxShadow: 0 }}
            >
              Update
            </Button>
          </span>
        </div>
        <div>
          <span></span>
          <span>
            <h4>Privacy Policy</h4>
            <p>
              Terms and conditions (T&C) are a set of rules and guidelines that
              govern the use of a website, app, or service. They outline the
              rights and responsibilities of both the provider and the users.
            </p>

            <Button
              size="small"
              variant="contained"
              className="addProductBt"
              style={{ alignSelf: "flex-start", boxShadow: 0 }}
            >
              Update
            </Button>
          </span>
        </div>
        <div>
          <span></span>
          <span>
            <h4>Shipment Policy</h4>
            <p>
              Terms and conditions (T&C) are a set of rules and guidelines that
              govern the use of a website, app, or service. They outline the
              rights and responsibilities of both the provider and the users.
            </p>

            <Button
              size="small"
              variant="contained"
              className="addProductBt"
              style={{ alignSelf: "flex-start", boxShadow: 0 }}
            >
              Update
            </Button>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Policy;
