import Container from "../Container/Container";
import style from "./Footer.module.css";
import {ReactComponent as VKicon } from "../../img/vk.svg";
import {ReactComponent as Telicon} from "../../img/tg.svg";
import {ReactComponent as PrinterestIcon} from "../../img/pinterest.svg";
import {ReactComponent as StumblIcon} from "../../img/stumbleupon.svg";


const Footer = () => (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    <p>Design: <a href='#'>Anastasia Ilina</a> </p>
                    <p>Сoder: <a href='https://t.me/yurazhekov' target="_blank">Denver</a> </p>
                    <p>© HBCard, 2022</p>
                </div>

                <ul className={style.social}>
                    <li className={style.item}>
                        <a href="https://vk.com" className={style.link}>
                            <VKicon />
                        </a>
                    </li>

                    <li className={style.item}>
                        <a href="https://t.me/yurazhekov" className={style.link}>
                            <Telicon/>
                        </a>
                    </li>

                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <PrinterestIcon />
                        </a>
                    </li>

                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <StumblIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
);

export default Footer;