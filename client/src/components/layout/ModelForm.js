import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateModel, addModel } from "../../redux/actions/modelAction";
import ImageUploader from "react-images-upload";
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
import { Upload } from "../../utils/UploadToS3";
const initialState = {
  name: "",
  modelwear: "S",
  height: "",
  bust: "",
  waist: "",
  highhip: "",
  lowhip: "",
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
  // Set States
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [imageloading, setImageLoading] = useState(false);
  const { name, modelwear, height, bust, waist, highhip, lowhip } = formData;
  const [images, setImages] = useState([]);

  // On changing form data
  const changeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // On Submitting the form
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (model) {
      await dispatch(updateModel(model._id, formData));
    } else {
      if (images.length === 0) {
        alert("Upload an Image");
        setLoading(false);
        return;
      }
      if (imageloading) {
        alert("Image is uploading. Please wait");
        return;
      }
      formData["images"] = images;
      await dispatch(addModel(formData));
      setFormData(initialState);
      setImages([]);
    }
    setLoading(false);
  };

  const onChangeFile = async (e) => {
    setImageLoading(true);
    try {
      const location = await Upload(e[0]);
      setImages(
        images.concat({
          url: location.Location,
        })
      );
    } catch(err) {
      console.log(err)
    } finally {
      setImageLoading(false);
    }
  };

  return (
    <>
      {!model && (
        <>
          <div className="mb-3">
            <a href="/">
              <Button color="info">Go Back</Button>
            </a>
          </div>

          <div>
            <ImageUploader
              withIcon={true}
              buttonText={
                imageloading ? <Spinner size="sm" /> : "Choose images"
              }
              onChange={(e) => onChangeFile(e)}
              imgExtension={[".jpg", "jpeg",".gif", ".png", ".gif"]}
              maxFileSize={5242880}
            />
          </div>
        </>
      )}
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
              <Label for="height">Height (In cm.)</Label>
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
              <Label for="bust">Bust (In cm.)</Label>
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
              <Label for="waist">Waist (In cm.)</Label>
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
              <Label for="highhip">High Hip (In cm.)</Label>
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
              <Label for="lowhip">Low Hip (In cm.)</Label>
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
    </>
  );
};

export default ModelForm;
