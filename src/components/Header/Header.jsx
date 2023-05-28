import React from "react";
import style from "../../styles/Header.module.css";
import {Link} from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";
const Header = () => {
    return (
        <div>
            <div className={style.header}>
                <div className={style.logo}>

                    <Link to={ROUTES.HOME}>
<img src={LOGO} alt="Stuff"/>
                    </Link>
                </div>
                <div className={style.info}>
                    <div className={style.user}>
                        <div className={style.avatar} style={{backgroundImage: `ulr(${AVATAR})`}}></div>
                        <div className={style.username}>GUEST</div>
                    </div>
                    <form className={style.form}>
                       <div className={style.icon}>

                           <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />

                       </div>
                    </form>
                </div>
            </div>



        </div>
    )
}

export default  Header;