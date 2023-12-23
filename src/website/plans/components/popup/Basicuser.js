import React, { useState } from "react";
import axios from "axios";
import popup from "../../../../assets/secure.png"

const Basicuser = () => {
  // Validation
  const [NameError, setNameError] = useState("");
  const [MessageError, setMessageError] = useState("");

  // Add Input
  const [inpval, setInpval] = useState({
    name: "",
    message: "",
  });
  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  // API Call
  const addUserdata = async (e) => {
    e.preventDefault();
    // Validations
    const { name, message } = inpval;

    // Name
    if (name === "") {
      setNameError("Enter Name");
    } else {
      setNameError(false);
    }
    // Message
    if (message === "") {
      setMessageError("Enter Message");
    } else {
      setMessageError(false);
    }

    // Add Data
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/api/basicregister",
      data: {
        ...inpval,
      },
    });
    if (response.status === 201) {
      alert('add');
      window.location.reload(true)
    } else {
      alert('dsfd');
    }
  };

  return (
    <div className="relative">
      <div className="p20">
        <div className="">
          <label className="textforth fsize14 font-500">Name</label>
          <div>
            <input
              placeholder="Enter User Name"
              type="text"
              value={inpval.name}
              onChange={setVal}
              name="name"
              id="name"
              className="h-input rounded-5 mtpx5 w-50 sm-w-90"
            />
          </div>
          <p className="fsize12 textdanger font-300 mtpx3 mlpx2">{NameError}</p>
        </div>
        <div className="mtpx12">
          <label className="textforth fsize14 font-500">Message</label>
          <div>
            <textarea
              placeholder="Enter Message"
              type="text"
              value={inpval.message}
              onChange={setVal}
              name="message"
              id="message"
              cols={4}
              rows={4}
              className="rounded-5 border-ec p5 mtpx5 w-50 sm-w-90"
            ></textarea>
          </div>
          <p className="fsize12 textdanger font-300 mtpx3 mlpx2">
            {MessageError}
          </p>
        </div>
        <div className="mtpx16">
          <button
            className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx8 pbpx8 plpx35 prpx35 fsize14 bgprimary"
            onClick={addUserdata}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="bg-light-primary block sm-hidden p40"></div>
      <div className="absolute bottom-0 right-0 block sm-hidden">
        <img src={popup} alt="popup" className="popup-img mrpx5 object-contain" />
      </div>
    </div>
  );
};

export default Basicuser;
