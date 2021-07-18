import React from "react";
import { Link } from "react-router-dom";
import { Container, Image } from "semantic-ui-react";

export default function HomePage() {
  return (
    // <Container style={{marginTop:'7em'}}>
    <div className="container">
      <Image
        src="/assets/smis.png"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <div className="left">
        <h3>
          <Link to="/notat" style={{ color: "whitesmoke" }}>
            Vlereso Studentet
          </Link>
          <Link to="/konsultimet" style={{ color: "whitesmoke" }}>
            Shfaq Konsultimet
          </Link>
        </h3>
      </div>
    </div>
    // </Container>
  );
}
