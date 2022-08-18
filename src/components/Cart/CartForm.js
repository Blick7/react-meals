import classes from './CartForm.module.css';

const CartForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes['form-item']}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"></input>
      </div>
      <div className={classes['form-item']}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street"></input>
      </div>
      <div className={classes['form-item']}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"></input>
      </div>
      <div className={classes['form-item']}>
        <label htmlFor="phone">Phone</label>
        <input type="phone" id="phone"></input>
      </div>
    </form>
  );
};
export default CartForm;
