import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Dream, DreamType } from "../models/Dream";
import { useDispatch } from "react-redux";
import { add, update } from "../reducers/dreamSlice";
import moment from "moment";

export default function DreamForm({ dream }: { dream?: Dream }) {
  const [title, setTitle] = useState(dream ? dream.title : "");
  const [description, setDescription] = useState(dream ? dream.description : "");
  const [date, setDate] = useState(dream ? dream.date : moment().format("DD-MM-YYYY"));
  const [type, setType] = useState(dream ? dream.type : DreamType.exciting);

  const [isFormValid, setisFormValid] = useState(true);

  const [titleValid, setTitleValid] = useState(true);
  const [descriptionValid, setDescriptionValid] = useState(true);
  const [dateValid, setDateValid] = useState(true);
  const [typeValid, setTypeValid] = useState(true);

  useEffect(() => {
    setTitleValid(title !== "");
    setDescriptionValid(description !== "");
    setDateValid(moment(date, "DD-MM-YYYY", true).isValid());
    setTypeValid(Object.values(DreamType).includes(type));
  }, [
    title, description, date, type,
  ]);

  useEffect(() => {
    setisFormValid(titleValid && descriptionValid && dateValid && typeValid);
  }, [titleValid, descriptionValid, dateValid, typeValid]);

  const dispatch = useDispatch();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid) return;

    if (dream?.id) {
      dispatch(update({ id: dream.id!, title, description, date, type }));
    } else {
      dispatch(add({ title, description, date, type }));
    }
  }

  return (
    <Row>
      <Col>
        <Form onSubmit={submit} validated={isFormValid}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              isInvalid={!titleValid}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              isInvalid={!descriptionValid}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="text"
              name="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              required
              isInvalid={!dateValid}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Dream type</Form.Label>
            <Form.Select
              aria-label="Choose dream type"
              name="type"
              onChange={e => setType(Number(e.target?.value))}
              required
              defaultValue={type}
              isInvalid={!typeValid}
            >
              <option value={DreamType.happy}>Happy</option>
              <option value={DreamType.sad}>Sad</option>
              <option value={DreamType.exciting}>Exciting</option>
              <option value={DreamType.scary}>Scary</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" variant="primary">Create</Button>
        </Form>
      </Col>
    </Row>
  );
}
