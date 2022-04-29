import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, OptionLink, OptionsContainer } from './header.styles';

const Header = () => {
  const dispatch = useDispatch();

  const signOutStartHandler = dispatch(signOutStart());

  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo className="logo" />
      </Link>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStartHandler}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
