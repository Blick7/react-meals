import { useRef, useState } from 'react';

import classes from './CartForm.module.css';

const isNotEmpty = (value) => value.trim() !== '';

const CartForm = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    email: true,
    phone: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const nameIsValid = isNotEmpty(nameRef.current.value);
    const streetIsValid = isNotEmpty(streetRef.current.value);
    const emailIsValid = isNotEmpty(emailRef.current.value);
    const phoneIsValid = isNotEmpty(phoneRef.current.value);

    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      email: emailIsValid,
      phone: phoneIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && emailIsValid && phoneIsValid;

    if (!formIsValid) {
      console.log('FORM IS NOT VALID');
      return;
    }

    props.onConfirmOrder({
      name: nameRef.current.value,
      street: streetRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    });
  };

  const nameClasses = `${classes['form-item']} ${
    !formValidity.name && classes.invalid
  }`;

  const streetClasses = `${classes['form-item']} ${
    !formValidity.street && classes.invalid
  }`;

  const emailClasses = `${classes['form-item']} ${
    !formValidity.email && classes.invalid
  }`;

  const phoneClasses = `${classes['form-item']} ${
    !formValidity.phone && classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef}></input>
        {!formValidity.name && <p>Enter valid name</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef}></input>
        {!formValidity.street && <p>Enter valid street</p>}
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef}></input>
        {!formValidity.email && <p>Enter valid email</p>}
      </div>
      <div className={phoneClasses}>
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" ref={phoneRef}></input>
        {!formValidity.phone && <p>Enter valid phone number</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose}>Cancel</button>
        <button className={classes.submit}>Submit</button>
      </div>
    </form>
  );
};
export default CartForm;
