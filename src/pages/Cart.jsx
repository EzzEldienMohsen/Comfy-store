import { useSelector } from 'react-redux';
import { SectionTitle, CartItemsList, CartTotals } from '../components';
import { Link } from 'react-router-dom';
const Cart = () => {
  var user = useSelector((state) => state.user.user);
  var numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

  if (numItemsInCart < 1) {
    return <SectionTitle text={'Your cart is empty...'} />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="grid mt-8 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to Checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              Please Login
            </Link>
          )}
          {/* <button
            className="btn btn-accent btn-block mt-8"
            onClick={clearTheCart}
          >
            Clear Cart
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Cart;
