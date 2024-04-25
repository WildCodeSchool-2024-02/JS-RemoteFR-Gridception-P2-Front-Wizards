import { useState } from "react";
import Modal1 from "./Modal1-2";
import Modal3 from "./Modal3-5";
import Modal6 from "./Modal6-7";

function Banner() {
  const [activation, setActivation] = useState(false);
  const [activation2, setActivation2] = useState(false);
  const [activation3, setActivation3] = useState(false);
  const [activation4, setActivation4] = useState(false);
  const [activation5, setActivation5] = useState(false);
  const [activation6, setActivation6] = useState(false);
  return (
    <>
      <Modal1
        activation={activation}
        setActivation={setActivation}
        activation2={activation2}
        setActivation2={setActivation2}
      />
      <Modal3
        activation2={activation2}
        activation3={activation3}
        setActivation3={setActivation3}
        activation4={activation4}
        setActivation4={setActivation4}
        activation5={activation5}
        setActivation5={setActivation5}
      />
      <Modal6
        activation5={activation5}
        activation6={activation6}
        setActivation6={setActivation6}
      />
    </>
  );
}

export default Banner;
