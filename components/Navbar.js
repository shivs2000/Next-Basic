import Link from 'next/link';
import styles from './styles/Navbar.module.css';
const Navbar = () => {
    return ( 
    <div className={styles.topNav}>
       
        <Link href="/"><a>Home</a></Link>
        <Link href="/About"><a>About</a></Link>
        {/* <Link href="/"> <a>Sports</a></Link> */}
        <Link href="/Entertainment"><a>Entertainment</a></Link>

       
       
    </div>
       );
}
 
export default Navbar;