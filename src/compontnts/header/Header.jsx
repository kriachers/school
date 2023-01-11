import Button from '../ux/Button'
import HeaderBar from './HeaderBar'

function Header() {
  return (
    <>
    <header className="Header flex container">
     <img src='./logo.svg' alt="" />
        <div className="header__wrapper flex">
            <p className="header-wrapper__phone">+7 (456) 567-67-67</p>
            <Button class={'header-wrapper__button'} title={'Записаться на урок'}></Button>
        </div>
    </header>

    <HeaderBar></HeaderBar>
    </>
  );
}

export default Header;
