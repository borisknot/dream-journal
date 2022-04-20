import React from "react";

export default function ApplicationLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="AppContainer">
      {children}
    </div>
  );
}
