import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuth, email, logout }) =>
          isAuth ? (
            <div className="header-menu">
              <div className="header-menu__email header-email t-header-email">
                {email}
              </div>
              <Button
                className="header-menu__button t-logout"
                onClick={logout}
              />
            </div>
          ) : (
            <p>ничего</p>
          )
        }
        }
      </AuthConsumer>
    );
  }
}

export default Header;
