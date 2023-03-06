import { Link } from "react-router-dom";

const GlobalNav = ({ NAV }) => {
    return (
        <ul>
            {
                NAV.map(it => {
                    return (
                        <li key={it.id}>
                            <Link to={it.link}>{it.title}</Link>
                            {it.submenu ? <ul>

                                {
                                    it.submenu?.map((it, idx) => {
                                        return (
                                            <li key={idx}><Link to={it.link}>{it.title}</Link></li>
                                        )
                                    })
                                }
                            </ul> : null}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default GlobalNav;