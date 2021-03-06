import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DreamForm from "../components/DreamForm";
import { Dream } from "../models/Dream";
import { RootState } from "../store";

export default function DreamsEditPage() {
  const { id } = useParams();
  const dreams = useSelector<RootState, Dream[]>(state => state.dreamReducer.dreams);

  const dream = dreams.find(dream => dream.id === Number(id));

  if (!dream) return null;

  return (
    <div className="row justify-content-md-center">
      <div className="col-sm-12 col-md-6 col-xl-4">
        <h1>Edit dream</h1>
        <DreamForm dream={dream} />
      </div>
    </div>
  );
}
