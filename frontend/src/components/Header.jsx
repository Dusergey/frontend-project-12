import { Container, Navbar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom' //  добавляем
import { logOut } from '../store/slices/authSlice.jsx'

const Header = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate() //  создаём навигатор

  const { userId } = useSelector(state => state.auth)
  const token = userId?.token

  const handleLogout = () => {
    dispatch(logOut())
    navigate('/login') //  после logout — редирект
  }

  return (
    <Navbar className="shadow-sm" expand="lg" bg="white">
      <Container>
        <Navbar.Brand href="/">{t('header.navbarBrand')}</Navbar.Brand>
        {token && (
          <Button
            type="button"
            variant="primary"
            onClick={handleLogout} //  заменили dispatch(logOut())
          >
            {t('header.signOutButton')}
          </Button>
        )}
      </Container>
    </Navbar>
  )
}

export default Header
