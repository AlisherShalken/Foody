import "../../../Styles/Blocks/Demonstration.css";
import css from "../../../Styles/Elements/Arrows.module.css";
import {useEffect, useState} from "react";

const Demonstration = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    let windowWidth = window.screen.width;
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <section className="demo-block">

            <div className="demo-cards-group">
                <div className="demo-card">
                    <div className="demo-card-person">
                        <img src="https://i.ibb.co/gV5HJYN/character-11.png" alt=""/>
                    </div>
                    <div className="demo-card-content">
                        <div className="demo-card-content-text ">
                            <span className="red-color">Гость отправляет запрос</span> с выбором  ресторана, времени и количества людей.
                        </div>
                        <div className="demo-card-content-arrow">
                            <img className={windowWidth > 1200 ? css.active : css.inActive} src="https://i.ibb.co/Q8xyFy9/arrow-xxl.png" alt=""/>
                            <img className={windowWidth <= 1200 && windowWidth > 992 ? css.active : css.inActive} src="https://i.ibb.co/t8frKY1/Vector-8.png" alt=""/>
                            <img className={windowWidth <= 992 && windowWidth > 768 ? css.active : css.inActive} src="https://i.ibb.co/d77g22B/arrow-lg.png" alt=""/>
                            <img className={windowWidth <= 768 && windowWidth > 576 ? css.active : css.inActive} src="https://i.ibb.co/fSCWm6N/arrow-md.png" alt=""/>
                            <img className={windowWidth <= 576 && windowWidth > 320 ? css.active : css.inActive} src="https://i.ibb.co/mqzHMNh/arrow-sm.png" alt=""/>
                            <img className={windowWidth <= 320 ? css.active : css.inActive} src="https://i.ibb.co/xMhBkX0/arrow-xs.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="demo-card">
                    <div className="demo-card-person">
                        <img src="https://i.ibb.co/cNJYMg5/character-2.png" alt=""/>
                    </div>
                    <div className="demo-card-content">
                        <div className="demo-card-content-text ">
                            <span className="red-color"> Ресторан принимает бронь </span>
                            {windowWidth <= 768 ? "" : <br/>}
                            (или отказывает, указав причину)
                        </div>
                        <div className="demo-card-content-arrow">
                            <img className={windowWidth > 1200 ? css.active : css.inActive} src="https://i.ibb.co/Q8xyFy9/arrow-xxl.png" alt=""/>
                            <img className={windowWidth <= 1200 && windowWidth > 992 ? css.active : css.inActive} src="https://i.ibb.co/t8frKY1/Vector-8.png" alt=""/>
                            <img className={windowWidth <= 992 && windowWidth > 768 ? css.active : css.inActive} src="https://i.ibb.co/d77g22B/arrow-lg.png" alt=""/>
                            <img className={windowWidth <= 768 && windowWidth > 576 ? css.active : css.inActive} src="https://i.ibb.co/fSCWm6N/arrow-md.png" alt=""/>
                            <img className={windowWidth <= 576 && windowWidth > 320 ? css.active : css.inActive} src="https://i.ibb.co/mqzHMNh/arrow-sm.png" alt=""/>
                            <img className={windowWidth <= 320 ? css.active : css.inActive} src="https://i.ibb.co/xMhBkX0/arrow-xs.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="demo-card">
                    <div className="demo-card-person">
                        <img src="https://i.ibb.co/SXYqJgS/character-3.png" alt=""/>
                    </div>
                    <div className="demo-card-content">
                        <div className="demo-card-content-text">
                               <br/> Гость приезжает в ресторан и <br/>проводит <span className="red-color">приятный вечер.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

export default Demonstration;