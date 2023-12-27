import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Tienda Detallitos</h1>
        <nav>
            <ul>
                <li>Perfumes</li>
                <li>Celulares</li>
                <li>Zapatos</li>
            </ul>
        </nav>

        <CartWidget/>
        
    </header>
  )
}

export default NavBar