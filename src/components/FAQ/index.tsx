
import styles from "./index.module.css";
import Accordion from "react-fast-accordion";
import "react-fast-accordion/src/style.css";

const data = [
    {
        id: 1,
        title: "Como posso divulgar minha marca com vocês?",
        content: "Estamos em constante descoberta de novas parcerias que atendam aos nossos critérios de qualidade.",
    },
    {
        id: 2,
        title: "Quanto custa divulgar minha marca com vocês?",
        content: "Escolhemos a estratégia de inserção para maximizar os seus resultados.",
    },
    {
        id: 3,
        title: "O que é marketing indoor?",
        content: "Sua marca é divulgada nos estabelecimentos dos nossos parceiros, conforme a estratégia escolhida.",
    },
    {
        id: 4,
        title: "Como posso ser parceiro de vocês?",
        content: "Medimos os resultados de nossas campanhas buscando a melhoria contínua dos nossos serviços.",
    },
]


// create type if you need intellisense
type CompProps = typeof data[0] & {
    isOpen: boolean;
    onClick: (txt: string) => void;
};

const SummaryComponent = ({ title }: CompProps) => (
    <div className={styles.question}>
        {title}
        <img src="images/insul/icons/plus.svg" alt="" />
    </div>
);

const DetailComponent = ({ content }: CompProps) => (
    <p className={styles.answer}>{content}</p>
);

const FAQ = () => {
    return (
        <section className={styles.faq} id="Dúvidas">
            <Accordion
                className={styles.accordion}
                items={data}
                SummaryComponent={SummaryComponent}
                DetailComponent={DetailComponent}
                multiExpand={false}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>Dúvidas frequentes</h2>
                <span className={styles.description}>Aqui estão algumas dúvidas frequentes. Siga-nos nas redes sociais e esteja por dentro de tudo o que estamos fazendo.</span>
            </div>
        </section>
    );
};

export default FAQ