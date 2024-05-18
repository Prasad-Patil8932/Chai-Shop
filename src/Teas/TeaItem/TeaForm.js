import React, {useRef, useState } from "react";
import classes from "./TeaForm.module.css";
import Input from "../../UI/Input";


const TeaForm = (props) => {
  

  
  
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();


  const submitHandler = (event) => {
    event.preventDefault();
    const enterAmount = amountInputRef.current.value;
    const enterAmountNumber = +enterAmount;
    
    if (
      enterAmount.trim().length === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enterAmountNumber);
    
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={amountInputRef}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Amount should be (1-5).</p>}
    </form>
  );
};

export default TeaForm;
