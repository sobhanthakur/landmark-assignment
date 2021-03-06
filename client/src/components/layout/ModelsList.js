import React, { useEffect } from "react";
import { Row, Col, Spinner, Container } from "reactstrap";
import { getModels } from "../../redux/actions/modelAction";
import { useDispatch, useSelector } from "react-redux";
import EditModel from "./EditModel";

const ModelsList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    models: state.modelReducer,
  }));
  useEffect(() => {
    dispatch(getModels());
  }, []);
  return (
    <>
      {state.models.loading ? (
        <Spinner type="grow" color="info" className="d-block m-auto" />
      ) : (
        state.models.models.map((model) => (
          <Container key={model._id}>
            <span
              style={{
                color: "#8E7B60",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {model.name}
            </span>
            <Row id="customFont">
              <Col xs="3">
                <Row>
                  <img
                    id="customImage"
                    src={model.images[0].url}
                    alt=""
                    width="200px"
                    height="200px"
                  />
                </Row>
              </Col>
              <Col xs="9" className="m-auto">
                <Row className="text-muted">
                  <Col>
                    <h6>SIZE:</h6>
                  </Col>
                  <Col>
                    <h6>HEIGHT:</h6>
                  </Col>
                  <Col>
                    <h6>BUST:</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>{model.modelwear}</h6>
                  </Col>
                  <Col>
                    <h6>
                      {model.height}
                      {" cm"}
                    </h6>
                  </Col>
                  <Col>
                    <h6>
                      {model.bust}
                      {" cm"}
                    </h6>
                  </Col>
                </Row>
                <Row className="text-muted mt-3">
                  <Col>
                    <h6>WAIST:</h6>
                  </Col>
                  <Col>
                    <h6>HIGH HIP:</h6>
                  </Col>
                  <Col>
                    <h6>LOW HIP:</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>
                      {model.waist}
                      {" cm"}
                    </h6>
                  </Col>
                  <Col>
                    <h6>
                      {model.highhip}
                      {" cm"}
                    </h6>
                  </Col>
                  <Col>
                    <h6>
                      {model.lowhip}
                      {" cm"}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <EditModel model={model} />
                </Row>
              </Col>
            </Row>
            <hr />
          </Container>
        ))
      )}
    </>
  );
};

export default ModelsList;
