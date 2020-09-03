import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateModel } from "../../redux/actions/modelAction";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner,
} from "reactstrap";
const initialState = {
  name: "",
  modelwear: "",
  height: 0,
  bust: 0,
  waist: 0,
  highhip: 0,
  lowhip: 0,
};
const ModelForm = ({ model }) => {
  useEffect(() => {
    if (model) {
      for (var prop in formData) {
        if (formData.hasOwnProperty(prop)) {
          formData[prop] = model[prop];
        }
      }
    }
  }, []);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { name, modelwear, height, bust, waist, highhip, lowhip } = formData;
  const changeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (model) {
      await dispatch(updateModel(model._id, formData));
    } else {
      //   await dispatch(addmodel(formData));
      setFormData(initialState);
    }
    setLoading(false);
  };
  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => changeFormData(e)}
          required
        />
      </FormGroup>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="modelwear">Size</Label>
            <Input
              type="select"
              name="modelwear"
              value={modelwear}
              onChange={(e) => changeFormData(e)}
              required
            >
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="height">Height</Label>
            <Input
              type="number"
              name="height"
              value={height}
              onChange={(e) => changeFormData(e)}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="bust">Bust</Label>
            <Input
              type="number"
              name="bust"
              value={bust}
              onChange={(e) => changeFormData(e)}
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="waist">Waist</Label>
            <Input
              type="number"
              name="waist"
              value={waist}
              onChange={(e) => changeFormData(e)}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="highhip">High Hip</Label>
            <Input
              type="number"
              name="highhip"
              value={highhip}
              onChange={(e) => changeFormData(e)}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="lowhip">Low Hip</Label>
            <Input
              type="number"
              name="lowhip"
              value={lowhip}
              onChange={(e) => changeFormData(e)}
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <Button color="warning">
        {loading ? <Spinner size="sm" /> : model ? "Update" : "Submit"}
      </Button>{" "}
    </Form>
  );
};

export default ModelForm;
