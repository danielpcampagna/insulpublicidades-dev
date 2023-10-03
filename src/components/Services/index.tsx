import styles from "./index.module.css"

const services = [
    {
        key: 1,
        icon: "images/insul/icons/track.svg",
        title: "Parcerias",
        description: "Estamos em constante descoberta de novas parcerias que atendam aos nossos critérios de qualidade.",
    },
    {
        key: 2,
        icon: "images/insul/icons/strategy.svg ",
        title: "Estratégia",
        description: "Escolhemos a estratégia de inserção para maximizar os seus resultados.",
    },
    {
        key: 3,
        icon: "images/insul/icons/insul.svg ",
        title: "Divulgação",
        description: "Sua marca é divulgada nos estabelecimentos dos nossos parceiros, conforme a estratégia escolhida.",
    },
    {
        key: 4,
        icon: "images/insul/icons/reload.svg ",
        title: "Melhoria Contínua",
        description: "Medimos os resultados de nossas campanhas buscando a melhoria contínua dos nossos serviços.",
    },
]

const Services = () => {
    function ServiceBullet({ icon, title, description }: any) {
        return (
            <div className={styles.bullet}>
                <div className={styles.icon_wrapper}>
                    <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        className={styles.icon}
                    />
                </div>
                <div className={styles.content}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        );
    }
    return (
        <section className={styles.services}>
            <div className={styles.content}>
                <h2 className={styles.title}>Como funciona?</h2>
                <div className={styles.description}>
                    Através do modelo de parcerias, instalamos nossas telas de
                    divulgação em ambientes privados que atendam aos nossos
                    critérios baseado em fluxo de pessoas
                </div>
                <img
                    src="images/insul/istockphoto-1170693004-2048x2048.jpg"
                    alt=""
                    aria-hidden="true"
                    className={styles.image_cover}
                />
            </div>
            <div className={styles.bullets}>
                {services.map((params: any) => <ServiceBullet key={params.key} {...params} />)}
            </div>
        </section>
    )
}

export default Services