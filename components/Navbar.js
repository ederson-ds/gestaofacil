import Link from "next/link";
import styles from '../styles/Navbar.module.css'

const Navbar = () => (
    <header>
        <a href="/" className={styles.logo}>
            GestãoFacil
        </a>
    </header>
);

export default Navbar;
