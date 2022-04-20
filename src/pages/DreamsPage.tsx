import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dream, DreamType } from "../models/Dream";
import { RootState } from "../store";
import { remove } from "../reducers/dreamSlice";
import { useDispatch } from "react-redux";

export default function DreamsPage() {
  const dreams = useSelector<RootState, Dream[]>(state => state.dreamReducer.dreams);
  const dispatch = useDispatch();

  const deleteDream = (event: React.FormEvent<HTMLButtonElement>, id?: number) => {
    const isSure = window.confirm("Are you sure you want to delete this dream?");
    if (!id || !isSure) return;
    dispatch(remove({ id }));
  }

  return (
    <div>
      <h1>All dreams</h1>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dreams.map((dream, index) => {
            return (
              <tr key={index}>
                <td>{dream.id}</td>
                <td>{dream.title}</td>
                <td>{dream.description}</td>
                <td>{dream.date}</td>
                <td>{DreamType[dream.type]}</td>
                <td>
                  <Link to={`/dreams/${dream.id}/edit`} className="btn btn-primary mx-2">Edit</Link>
                  <Button variant="danger" onClick={event => deleteDream(event, dream.id)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
