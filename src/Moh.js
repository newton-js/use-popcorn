import { useState } from "react";

const accData = [
  {
    title: "Where are these chairs assembled?",
    plus: "+",
    opened:
      " dolor sit amet, consectetur adip occ temporlorem ipsum dolor sit amet, consectetur adip occ tempor inviduer",
  },
  {
    title: "How long do i have to return my chair?",
    plus: "+",
    opened:
      "lorem ipsum dolor sit amet, consect et sapiente sollicitud in rep exerit in volupt eu fugiat nulla pars",
  },
  {
    title: "Do you ship to countries outside the EU?",
    plus: "+",
    opened:
      " amet, consect et sapiente sollicitud in rep exerit in volupt eu fugiat nulla plorem ipsum dolor sitars",
  },
  {
    title: "Do you ship to countries outside the EU?",
    plus: "+",
    opened:
      " amet, consect et sapiente sollicitud in rep exerit in volupt eu fugiat nulla plorem ipsum dolor sitars",
  },
];

function Moh() {
  return (
    <div className="moh">
      <Accordion />
      <Form />
    </div>
  );
}

function Accordion() {
  const data = accData;
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem item={item} key={i} num={i + 1} />
      ))}
    </div>
  );
}

function AccordionItem({ item, num }) {
  const [show, setShow] = useState(false);

  function handleToggle() {
    setShow((show) => !show);
  }

  return (
    <div className="accordion-item" onClick={handleToggle}>
      <div className="accordion-top">
        <p>{num}</p>
        <p>{item.title}</p>
        <p>{show ? "-" : item.plus}</p>
      </div>
      {show && <p className="accordion-story">{item.opened}</p>}
    </div>
  );
}

function Form() {
  const [describe, setDescribe] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit() {}

  return (
    <form className="form" onSubmit={() => handleSubmit}>
      <p className="form-text">What did you need for your 😍 trip</p>
      <select
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="select"
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
      <input
        className="input"
        placeholder="item..."
        value={describe}
        onChange={(e) => setDescribe(e.target.value)}
      />
      <button className="button">Add</button>
    </form>
  );
}

export default Moh;
