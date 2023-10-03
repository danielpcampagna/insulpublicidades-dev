import styles from "./index.module.css"

interface NavItem {
    id: number,
    text: string,
    ref: string
}

const Nav = () => {
    
    const options: NavItem[] = [
        {
            id: 0,
            text: "Nosso serviço",
            ref: "#Nosso-serviço"
        },
        {
            id: 1,
            text: "Onde estamos",
            ref: "#Onde-estamos"
        },
        {
            id: 2,
            text: "Dúvidas",
            ref: "#Dúvidas"
        }
    ]

    const listOptions = options.map((option) => {
        return <li key={option.id}> <a href={option.ref} className={styles.option}>{option.text}</a> </li>
    })

  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            {listOptions}
        </ul>
        <button className={styles.contact_btn_bar}>
            <i className={styles.i_whatsapp} />
            Conversar
        </button>
    </nav>
  )
}

export default Nav