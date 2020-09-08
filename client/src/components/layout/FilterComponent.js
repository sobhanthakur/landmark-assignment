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

const initialCheck = {
  namecheck: false,
  modelwearcheck: false,
  waistcheck: false,
  bustcheck: false,
  heightcheck: false,
};
const FilterComponent = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // Filter Checkboxes
  const [check, setCheck] = useState(initialCheck);

  const dispatch = useDispatch();

  // Filter State
  const [filter, setFilter] = useState(initialState);

  const { name, height, waist, bust, modelwear } = filter;

  const onSubmit = (e) => {
    e.preventDefault();
    let obj = {};
    check.namecheck && (obj["name"] = name);
    check.modelwearcheck && (obj["modelwear"] = modelwear);
    check.waistcheck && (obj["waist"] = waist);
    check.bustcheck && (obj["bust"] = bust);
    check.heightcheck && (obj["height"] = height);
    dispatch(getModels(obj));
    toggle();
  };

  const resetFilters = () => {
    setCheck(initialCheck);
    setFilter(initialState);
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
                    setCheck({ ...check, namecheck: !check.namecheck });
                  }}
                  checked={check.namecheck}
                />{" "}
                Name
              </Label>
            </FormGroup>
            {check.namecheck && (
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) =>
                    setFilter({ ...filter, name: e.target.value })
                  }
                  required={check.namecheck}
                />
              </FormGroup>
            )}
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  onChange={(e) =>
                    setCheck({
                      ...check,
                      modelwearcheck: !check.modelwearcheck,
                    })
                  }
                  checked={check.modelwearcheck}
                />{" "}
                Model Wear
              </Label>
            </FormGroup>
            {check.modelwearcheck && (
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
                  onChange={(e) =>
                    setCheck({ ...check, waistcheck: !check.waistcheck })
                  }
                  checked={check.waistcheck}
                />{" "}
                Waist (In cm.)
              </Label>
            </FormGroup>
            {check.waistcheck && (
              <FormGroup row>
                <Col sm={6}>
                  <Input
                    type="number"
                    placeholder="From"
                    value={waist.from}
                    required={check.waistcheck}
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
                    required={check.waistcheck}
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
                  onChange={(e) =>
                    setCheck({ ...check, bustcheck: !check.bustcheck })
                  }
                  checked={check.bustcheck}
                />{" "}
                Bust (In cm.)
              </Label>
            </FormGroup>
            {check.bustcheck && (
              <FormGroup row>
                <Col sm={6}>
                  <Input
                    type="number"
                    placeholder="From"
                    value={bust.from}
                    required={check.bustcheck}
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
                    required={check.bustcheck}
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
                  onChange={(e) =>
                    setCheck({ ...check, heightcheck: !check.heightcheck })
                  }
                  checked={check.heightcheck}
                />{" "}
                Height (In cm.)
              </Label>
            </FormGroup>
            {check.heightcheck && (
              <FormGroup row>
                <Col sm={6}>
                  <Input
                    type="number"
                    placeholder="From"
                    value={height.from}
                    required={check.heightcheck}
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
                    required={check.heightcheck}
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
