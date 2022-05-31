import React, { useState } from "react";
import "../styles/Home.css"
import Modal from "./Modal";


function Home() {
  const [modalButton, setShowModal] = useState(false);


  return (
    <div className="home">
      <div className="headerContainer">
        <h1> Plant Database </h1>
      </div>

    <div className="plantTable"> 
      <table>
        <tr>
          <th>Plant Name</th>
        </tr>
        <tr>
          <td>
            <Modal trigger={modalButton} setTrigger={setShowModal}></Modal>
            <button onClick={() => setShowModal(true)}>China Pink</button>
          </td>
        </tr>
      </table>
    </div>

    </div>
  );
}

export default Home;
