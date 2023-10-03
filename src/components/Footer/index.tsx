import styles from "./index.module.css"

const Footer = () => {

    const more: any[] = [
        // {
        //     id: 1,
        //     title:"our company",
        //     links: [
        //         {id: 10, link: "how we work"},
        //         {id: 11, link: "why insure?"},
        //         {id: 12, link: "check price"},
        //         {id: 13, link: "reviews"}
        //     ]
        // },
        // {
        //     id: 2,
        //     title:"help me",
        //     links: [
        //         {id: 20, link: "faq"},
        //         {id: 21, link: "terms of use"},
        //         {id: 22, link: "privacy policy"},
        //         {id: 23, link: "cookies"}
        //     ]
        // },
        // {
        //     id: 3,
        //     title:"contact",
        //     links: [
        //         {id: 30, link: "sales"},
        //         {id: 31, link: "support"},
        //         {id: 32, link: "live chat"}
        //     ]
        // },
        // {
        //     id: 4,
        //     title:"others",
        //     links: [
        //         {id: 40, link: "careers"},
        //         {id: 41, link: "press"},
        //         {id: 42, link: "licenses"}
        //     ]
        // },
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.head}>
                <img
                    src="images/insul/logo.svg"
                    alt="insure logo"
                    className={styles.logo}
                />
                <div className={styles.wrapper}>
                    <SocialIcon name={"facebook"} />
                    <SocialIcon name={"whatsapp"} />
                    <SocialIcon name={"pinterest"} />
                    <SocialIcon name={"instagram"} />
                </div>

                <button className={styles.contact_btn_bar}>
                    <i className={styles.i_whatsapp} />
                    Conversar
                </button>
            </div>
            {/* <hr /> */}
            <div className={styles.more}>
                <Lists />
            </div>
        </footer>
    )

    // eslint-disable-next-line react/prop-types
    function SocialIcon({ name }: any) {
        return (
            <a href="#">
                <img
                    src={"images/icon-" + name + ".svg"}
                    alt={name + " icon"}
                    className={styles.social}
                />
            </a>
        );
    }

    function Lists() {
        return (
            more.map((list) => {
                return (
                    <ul
                        className={styles.more_list}
                        key={list.id}
                    >
                        <li className={styles.title}>{list.title}</li>
                        {list.links.map((linkTxt: any) => {
                            return (
                                <li
                                    key={linkTxt.id}
                                    className={styles.item}
                                >
                                    <a href="#" className={styles.redirect}>{linkTxt.link}</a>
                                </li>
                            )
                        })}
                    </ul>
                )
            })
        );
    }
}

export default Footer