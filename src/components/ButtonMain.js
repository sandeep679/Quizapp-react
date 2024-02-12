import React from 'react'
import { Link } from "react-router-dom";

function ButtonMain({text,link}) {
  return (
    <>
    <Link to={link} className="btn btn-outline-danger">{text}</Link>
    </>
  );
}

export default ButtonMain;