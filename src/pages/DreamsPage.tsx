import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dream } from "../models/Dream";
import { RootState } from "../store";

export default function DreamsPage() {
  const dreams = useSelector<RootState, Dream[]>(state => state.dreamReducer.dreams);

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
                <td>{dream.type}</td>
                <td>
                  <Link to={`/dreams/${dream.id}/edit`} className="button-primary">Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
