import React, { useState } from "react";
import "./index.css";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enablemultiselection, setEnableMultiselection] = useState(false);
  const [multi, setMulti] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id);
    if (selected === id) {
      setSelected(null);
    }
  };
  const handleMultiSelection = (id) => {
    let cpyMultiple = [...multi];
    const findIndexOfCurrentId = cpyMultiple.indexOf(id);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(id);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMulti(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiselection(!enablemultiselection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data.map((dataItem) => {
          return (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enablemultiselection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enablemultiselection
                ? multi.indexOf(dataItem.id) != -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
