import React from "react";
import Documento from "./components/Documento";
import { PDFViewer } from "@react-pdf/renderer";

const App = () => {
  return (
    <div className="vh-100 vw-100">
      <PDFViewer className="h-100 w-100">
        <Documento></Documento>
      </PDFViewer>
    </div>
  );
};

export default App;
