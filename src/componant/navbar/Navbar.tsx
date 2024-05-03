import logo from "../../assets/image/logoDocala.webp";
import profile from "../../assets/image/profile.webp";
import styles from "./styles.module.scss";
const Navbar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src={logo} className={styles.imgLogo} />
          <span className={styles.spanLogo}>ocala</span>
        </div>

        <div className={styles.wrapper}>
          <span className={styles.spanProfile}>Zakieh mobaraky</span>
          <img className={styles.imgProfile} src={profile} alt="user photo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
