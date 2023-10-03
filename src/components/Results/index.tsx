import styles from "./index.module.css"

const bigNumbers = [
    {
        key: 1,
        title: "+6",
        description: "Pontos de exibição",
    },
    {
        key: 2,
        title: "300K",
        description: "Visualizações por mês",
    },
    {
        key: 3,
        title: "31.050",
        description: "Inserções no pultimo mês",
    },
    {
        key: 4,
        title: "+36",
        description: "Marccas divulgadas",
    },
]

const Results = () => {
    const BigNumber = ({ title, description }: any) => (
        <div className={styles.big_numbers}>
            <h4 className={styles.title}>{title}</h4>
            <span className={styles.description}>{description}</span>
        </div>
    )
    return (
        <section className={styles.results}>
            <div className={styles.big_numbers_wrapper}>
                {bigNumbers.map((params: any) => <BigNumber key={params.key} {...params} />)}
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>Resultados</h2>
                <p className={styles.description}>
                    Ao divulgar a sua marca na InSul, garantimos resultados
                    baseado em métricas de acordo com a estratégia montada para
                    o seu negócio.
                </p>
            </div>
        </section>
    )
}

export default Results