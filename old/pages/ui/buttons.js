import React, { useState } from 'react';
import { Button, ButtonGroup, Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

const Buttons = () => {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  const onRadioBtnClick = (vSelected) => {
    setRSelected(vSelected);
  };

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Buttons
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Button className="btn" color="primary">
                  primary
                </Button>
                <Button className="btn" color="secondary">
                  secondary
                </Button>
                <Button className="btn" color="success">
                  success
                </Button>
                <Button className="btn" color="info">
                  info
                </Button>
                <Button className="btn" color="warning">
                  warning
                </Button>
                <Button className="btn" color="danger">
                  danger
                </Button>
                <Button className="btn" color="link">
                  link
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-2*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Outline Buttons
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Button className="btn" outline color="primary">
                  primary
                </Button>
                <Button className="btn" outline color="secondary">
                  secondary
                </Button>
                <Button className="btn" outline color="success">
                  success
                </Button>
                <Button className="btn" outline color="info">
                  info
                </Button>
                <Button className="btn" outline color="warning">
                  warning
                </Button>
                <Button className="btn" outline color="danger">
                  danger
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Large Size Buttons
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Button className="btn" color="primary" size="lg">
                  Large Button
                </Button>
                <Button className="btn" color="secondary" size="lg">
                  Large Button
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-4*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Small Size Buttons
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Button className="btn" color="primary" size="sm">
                  Small Button
                </Button>
                <Button className="btn" color="secondary" size="sm">
                  Small Button
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-6*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Active State Buttons
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Button className="btn" color="primary" size="lg" active>
                  Primary link
                </Button>
                <Button className="btn" color="secondary" size="lg" active>
                  Link
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-7*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Disabled State Buttons
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Button className="btn" color="primary" size="lg" disabled>
                  Primary button
                </Button>
                <Button className="btn" color="secondary" size="lg" disabled>
                  Button
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-5*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Block Buttons
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Button className="btn" color="primary" size="lg" block>
                  Block level button
                </Button>
                <Button className="btn" color="secondary" size="lg" block>
                  Block level button
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-6*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Checkbox(Stateful Buttons)
            </CardTitle>
            <CardBody className="">
              <h5>Checkbox Buttons</h5>
              <ButtonGroup>
                <Button
                  color="primary"
                  onClick={() => onCheckboxBtnClick(1)}
                  active={cSelected.includes(1)}
                >
                  One
                </Button>
                <Button
                  color="primary"
                  onClick={() => onCheckboxBtnClick(2)}
                  active={cSelected.includes(2)}
                >
                  Two
                </Button>
                <Button
                  color="primary"
                  onClick={() => onCheckboxBtnClick(3)}
                  active={cSelected.includes(3)}
                >
                  Three
                </Button>
              </ButtonGroup>
              <p className="mb-0">Selected: {JSON.stringify(cSelected)}</p>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-6*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Radio Buttons (Stateful Buttons)
            </CardTitle>
            <CardBody className="">
              <h5>Radio Buttons</h5>
              <ButtonGroup>
                <Button color="primary" onClick={() => onRadioBtnClick(1)} active={rSelected === 1}>
                  One
                </Button>
                <Button color="primary" onClick={() => onRadioBtnClick(2)} active={rSelected === 2}>
                  Two
                </Button>
                <Button color="primary" onClick={() => onRadioBtnClick(3)} active={rSelected === 3}>
                  Three
                </Button>
              </ButtonGroup>
              <p className="mb-0">Selected: {rSelected}</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Buttons;
