import styles from "./index.module.css"

const Partnerships = () => {

    // eslint-disable-next-line react/prop-types
    function Icon({ icon }: any) {
        return (
            <div className={styles.partnership}>
                <img 
                    src={icon} 
                    alt=""
                    aria-hidden="true" 
                    className={styles.icon}
                />
                {/* <p className={styles.subtitle}>{title}</p>
                <p className={styles.description}>{text}</p> */}
            </div>
        );
    }

    return (
        <section className={styles.partnerships}>
            <h2 className={styles.title}>Parcerias</h2>
            
            <div className={styles.wrapper}>
                <Icon icon={"images/insul/icons/google.svg"} />
                <Icon icon={"images/insul/icons/microsoft.svg"} />
                <Icon icon={"images/insul/icons/shopify.svg"} />
                <Icon icon={"images/insul/icons/spotify.svg"} />
                <Icon icon={"images/insul/icons/uber.svg"} />
                <Icon icon={"images/insul/icons/google.svg"} />
                <Icon icon={"images/insul/icons/microsoft.svg"} />
                <Icon icon={"images/insul/icons/shopify.svg"} />
                <Icon icon={"images/insul/icons/spotify.svg"} />
                <Icon icon={"images/insul/icons/uber.svg"} />
            </div>
        </section>
    )
}

export default Partnerships