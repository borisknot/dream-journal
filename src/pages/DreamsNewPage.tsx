import React from "react";
import DreamForm from "../components/DreamForm";

export default function DreamsNewPage() {
  return (
    <div className="row justify-content-md-center">
      <div className="col-sm-12 col-md-6 col-xl-4">
        <h1>New dream</h1>
        <DreamForm />
      </div>
    </div>
  );
}
