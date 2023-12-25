import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cart/CartSlice';
import { logoutUser } from '../features/user/UserSlice';
import { useQueryClient } from '@tanstack/react-query';

const Header = () => {
  var queryCLient = useQueryClient();
  var navigate = useNavigate();
  var dispatch = useDispatch();
  var user = useSelector((state) => state.user.user);
  var handleLogout = () => {
    navigate('/');
    dispatch(clearCart());
    dispatch(logoutUser());
    queryCLient.removeQueries();
  };
  return (
    <div className="bg-neutral py-2 text-neutral-content">
      <div className="flex align-element justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-sm sm:text-md">Hello, {user.username}</p>
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-primary btn-sm"
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Create an account
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
