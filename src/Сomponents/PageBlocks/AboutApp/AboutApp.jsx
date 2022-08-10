import "../../../Styles/Blocks/AboutApp.css";
import Button from "../../PageElements/Button/Button";

const AboutApp = () => {
    let red = "#BE123C";
    let gray = "#AAAAAA";
    return (
        <div>
            <section className="about-app-block">
                <article className="about-app-first-text">
                    <div>
                        <p>
                            Простой способ <br/>
                            управлять <wbr/>бронированием и <wbr/>
                            <span className="red-color">
                            привлекать<wbr/> новых <wbr/>гостей
                        </span>
                        </p>
                        <p>
                            Подойдет как небольшой кофейни на несколько столов, так и сети ресторанов с высокой загруженностью.
                        </p>
                        <a href="#" target="_blank">
                            <Button
                                text="Присоединиться"
                                img="none"
                                type="filled"
                                color={red}
                                gap="40px"
                                fs="1.2rem"
                                fw="700"
                                letter="1.5px"
                            />
                        </a>

                    </div>
                </article>
                <article className="about-app-img">
                    <img src="https://i.ibb.co/NWnm76L/image.png" alt="image" />
                </article>
                <article className="about-app-second-text">
                    <div>
                        <p>
                            <b className="red-color">FOODY</b> — цифровой маркетплейс для <wbr/>гастробизнеса и его клиентов.
                        </p>
                        <p>
                            <b>Гости</b> через приложение выбирают заведения по рейтингу и меню, бронируют <wbr/> столики, накапливают бонусы.
                        </p>

                        <p>
                            <b>Заведения</b> привлекают гостей через поиск и рекламу, начисляют бонусы.
                        </p>

                    </div>
                </article>
                <article className="about-app-download">

                    <Button
                        text="Доступно в AppStore"
                        img="https://i.ibb.co/fpMq9Pz/app-Store-Icon.png"
                        styles="about-app-download-btn"
                        type="unfilled"
                        color={red}
                        gap="30px"
                        height="3rem"
                    />
                    <br/>

                    <Button
                        text="Скоро в Google Play"
                        img="https://i.ibb.co/BN6Vs3R/google-Play-Icon.png"
                        styles="about-app-download-btn"
                        type="unfilled"
                        color={gray}
                        gap="40px"
                        height="3rem"
                        link="#"
                        fs="1rem"
                        fw="500"
                        disabled="disabled"
                    />
                </article>
            </section>
            <p className="title-word red-color">
                Наши партнеры
            </p>
        </div>

    );
}

export default AboutApp;