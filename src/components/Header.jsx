import styles from './Header.module.scss';
import  cookchef  from "../assets/images/cookchef.png";

function Header() {
    return (
        <header className={`d-flex flex-row align-items-center ${styles.header}`}>
            <span class="material-symbols-outlined mr-15">menu</span>
            <div className='flex-fill'>
                <img src={cookchef} alt="logo" />
            </div>

            <ul>
                <button className='mr-15 btn btn-primary-reverse'>
                    {/* <span class="material-symbols-outlined">shopping_basket</span> */}
                    Panier
                </button>
                <button className='btn btn-primary'>
                    Connexion
                </button>
            </ul>

        </header>
    )
}

export default Header;