import "../../../Styles/Blocks/Form.css";
import Button from "../../PageElements/Button/Button";

const Form = () => {
    let red = "#BE123C";
    return (
        <section className="form-block">
            <article className="form-block-text">
                    <b>Присоединитесь сейчас</b>,
                    чтобы получить пакет услуг с CRM <span className={"red-color"}>
                     бесплатно!
                    </span>
                    <br/>
                    <span className="light-red-color">
                        (Предложение ограничено по количеству)
                    </span>

            </article>
            <form>
                <div className="form-block-input-group">
                    <div className="form-block-input-block">
                        <div className="form-block-input-text">
                            <div className="form-block-input-number">1</div>
                            <label>Ваше имя</label>
                        </div>
                        <input className="form-block-input" placeholder="Шалкен Алишер" type="text"   />
                    </div>
                    <div className="form-block-input-block">
                        <div className="form-block-input-text">
                            <div className="form-block-input-number">2</div>
                            <label>Номер телефона</label>
                        </div>
                        <input className="form-block-input" placeholder="+7 707 *** ****" type="text"/>
                    </div >
                    <div  className="form-block-input-block">
                        <div className="form-block-input-text">
                            <div className="form-block-input-number">3</div>
                            <label>Название заведения</label>
                        </div>
                        <input className="form-block-input" placeholder="Название" type="text"/>
                    </div>
                </div>
                <Button
                    text="Отправить заявку"
                    img="none"
                    type="filled"
                    color={red}
                    gap="40px"
                    fs="1rem"
                    fw="500"
                />
            </form>

        </section>
    );
}

export default Form;