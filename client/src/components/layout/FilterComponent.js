import React, { useState } from "react";
import {
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { getModels } from "../../redux/actions/modelAction";

const initialState = {
  name: "",
  modelwear: "S",
  waist: {
    from: "",
    to: "",
  },
  bust: {
    from: "",
    to: "",
  },
  height: {
    from: "",
    to: "",
  },
};
const FilterComponent = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // Filter Checkboxes
  const [namecheck, setNamecheck] = useState(false);
  const [modelwearcheck, setModelwearcheck] = useState(false);
  const [waistcheck, setWaistcheck] = useState(false);
  const [bustcheck, setBustcheck] = useState(false);
  const [heightcheck, setHeightcheck] = useState(false);

  const dispatch = useDispatch();

  // Filter State
  const [filter, setFilter] = useState(initialState);

  const { name, height, waist, bust, modelwear } = filter;

  const onSubmit = (e) => {
    e.preventDefault();
    let obj = {};
    namecheck && (obj["name"] = name);
    modelwearcheck && (obj["modelwear"] = modelwear);
    waistcheck && (obj["waist"] = waist);
    bustcheck && (obj["bust"] = bust);
    heightcheck && (obj["height"] = height);
    dispatch(getModels(obj));
    toggle();
  };

  const resetFilters = () => {
    setFilter(initialState);
    setModelwearcheck(false);
    setNamecheck(false);
    setHeightcheck(false);
    setWaistcheck(false);
    setBustcheck(false);
    dispatch(getModels());
  };

  return (
    <div className="mb-3">
      <Button color="info" onClick={toggle} size="sm">
        Apply Filters
      </Button>
      <Button color="danger" className="ml-1" onClick={resetFilters} size="sm">
        Reset Filters
      </Button>
      <a href="/register">
        <Button color="success" className="ml-1" size="sm">
          Add new Model
        </Button>
      </a>

      <Modal isOpen={modal} toggle={toggle} size="sm">
        <ModalHeader toggle={toggle}>Filters</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => onSubmit(e)}>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  onChange={(e) => {
                    setNamecheck(!namecheck);
                  }}
                  checked={namecheck}
                />{" "}
                Name
              </Label>
            </FormGroup>
            {namecheck && (
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) =>
                    setFilter({ ...filter, name: e.target.value })
                  }
                  required={namecheck}
                />
              </FormGroup>
            )}
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  onChange={(e) => setModelwearcheck(!modelwearcheck)}
                  checked={modelwearcheck}
                />{" "}
                Model Wear
              </Label>
            </FormGroup>
            {modelwearcheck && (
              <FormGroup>
                <Input
                  type="select"
                  value={modelwear}
                  onChange={(e) =>
                    setFilter({ ...filter, modelwear: e.target.value })
                  }
                >
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </Input>
              </FormGroup>
            )}
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  onChange={(e) => setWaistcheck(!waistcheck)}
                  checked={waistcheck}
                />{" "}
                Waist (In cm.)
              </Label>
            </FormGroup>
            {waistcheck && (
              <FormGroup row>
                <Col sm={6}>
                  <Input
                    type="number"
                    placeholder="From"
                    value={waist.from}
                    required={waistcheck}
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        waist: { ...waist, from: e.target.value },
                      })
                    }
                  />
                </Col>
                <Col sm={6}>
                  <Input
                    type="number"
                    placeholder="To"
                    value={waist.to}
                    required={waistcheck}
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        waist: { ...waist, to: e.target.value },
                      })
                    }
                  />
                </Col>
              </FormGroup>
            )}
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  onChange={(e) => setBustcheck(!bustcheck)}
                  checked={bustcheck}
                />{" "}
                Bust (In cm.)
              </Label>
            </FormGroup>
            {bustcheck && (
              <FormGroup row>
                <Col sm={6}>
                  <Input
                    type="number"
                    placeholder="From"
                    value={bust.from}
                    required={bustcheck}
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        bust: { ...bust, from: e.target.value },
                      })
                    }
                  />
                </Col>
                <Col sm={6}>
                  <Input
                    type="number"
                    placeholder="To"
                    value={bust.to}
                    required={bustcheck}
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        bust: { ...bust, to: e.target.value },
                      })
                    }
                  />
                </Col>
              </FormGroup>
            )}
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  onChange={(e) => setHeightcheck(!heightcheck)}
                  checked={heightcheck}
                />{" "}
                Height (In cm.)
              </Label>
            </FormGroup>
            {heightcheck && (
              <FormGroup row>
                <Col sm={6}>
                  <Input
                    type="number"
                    placeholder="From"
                    value={height.from}
                    required={heightcheck}
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        height: { ...height, from: e.target.value },
                      })
                    }
                  />
                </Col>
                <Col sm={6}>
                  <Input
                    type="number"
                    placeholder="To"
                    value={height.to}
                    required={heightcheck}
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        height: { ...height, to: e.target.value },
                      })
                    }
                  />
                </Col>
              </FormGroup>
            )}
            <Button color="primary">Apply</Button>{" "}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default FilterComponent;
