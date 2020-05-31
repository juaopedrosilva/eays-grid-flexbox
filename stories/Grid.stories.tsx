import React from "react";
import { storiesOf } from "@storybook/react";

import { Row, Col, Container } from "../src";

storiesOf("Grid", module).add("Default", () => (
  <>
    <Container>
      <Row>
        <Col mobile={12} tablet={12} desktop={4}>
          1
        </Col>
        <Col mobile={12} tablet={12} desktop={4}>
          1
        </Col>
      </Row>
      <Row spaceBetween>
        <Col mobile={12} tablet={12} desktop={4}>
          2
        </Col>
        <Col mobile={12} tablet={12} desktop={4}>
          2
        </Col>
      </Row>
    </Container>
  </>
));
