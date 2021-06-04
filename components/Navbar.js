import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => (
    <header>
        <Link href="/">
            <a className={styles.logo}>GestãoFacil</a>
        </Link>
        <input type="checkbox" id="checkbox-menu" />
        <label className="hamburguer" htmlFor="checkbox-menu">
            <span></span>
            <span></span>
            <span></span>
        </label>
    </header>
);

export default Navbar;
