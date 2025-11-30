import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { getHello } from "../../Api/ShopService";

const Notes = () => {
  useEffect(() => {
    getHelloWorld();
  }, []);

  const getHelloWorld = () => {
    getHello()
      .then((res) => {
        console.log("getHello res:", res);
      })
      .catch((err) => {
        console.log("getHello err", err);
      });
  };

  return (
    <Container fluid className="homeContainer">
      <div className="notesCont">
        <h3>Notes</h3>
        <div>
          <div>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Description" />
            <Button onClick={getHelloWorld}>Add</Button>
          </div>
          <div>
            <span>
              <h5>Title</h5>
              <p>Descripion</p>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Notes;
