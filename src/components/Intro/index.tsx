import styles from "./index.module.css";
import "../../externals/tv-noise/index.css"

const Intro = () => {
    return (
        <div className={styles.intro}>
            <picture className={styles.intro_img}>
                <source
                    // srcSet="images/insul/istockphoto-1174817650-1024x1024.jpg"
                    media="(min-width: 1024px)" />
                <img
                    // className="video image vignette"
                    // src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/86186/crt.png"
                    src="images/insul/istockphoto-1174817650-1024x1024.jpg"
                    alt=""
                    aria-hidden="true" />
            </picture>
            <div className={styles.intro_content}>
                <h1 className={styles.title}>Seja visto em todo lugar</h1>
                <p className={styles.description}>
                    Garantimos a visualização da sua marca através de parcerias, estratégias e
                </p>
                <button className={styles.contact_btn}>
                    {/* <i src="images/insul/whatsapp-icon-b&w.svg" alt="whatsapp icon" /> */}
                    <i className={styles.i_whatsapp} />
                    Conversar
                </button>
            </div>
        </div>
    )
}

export default Intro