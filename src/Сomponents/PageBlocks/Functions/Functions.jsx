import "../../../Styles/Blocks/Functions.css";
import "../../../Styles/Elements/Accordion.css";
import { Accordion, AccordionItem } from 'react-light-accordion';
import FunctionsCard from "./FunctionsCard/FunctionsCard";

const data = [
    {
        "title": "Онлайн-бронирование",
        "description": "Гость бронирует столик одним нажатием кнопки, указав точное количество гостей. Бронирование тоже подтверждается через приложение. Это быстрее и удобнее, чем каждый раз набирать номер телефона или писать в Whatsapp.",
        "img" : "https://i.ibb.co/RCrDXrH/Group.png"
    },
    {
        "title": "Меню с учетом аллергенов",
        "subtitle" : "Скоро",
        "description": "Возможность отфильтровать блюда по аллергенам сделает заказ для клиента более безопасным. ",
        "img" : "https://i.ibb.co/Q9LQ5ng/menu-2.png"
    },
    {
        "title": "Отзывы и рейтинги",
        "description": "Гость выбирает заведение в маркетплейсе на основе\n" +
            "рейтинга. Он сам может оставить отзыв и оценку ресторана, а у ресторана есть возможность быстро\n" +
            "отреагировать на претензию.",
        "img" : "https://i.ibb.co/CKQshkm/raiting-1.png"
    },
    {
        "title": "Реклама",
        "description": "Во время использования приложения FOODY гость\n" +
            "будет видеть рекламные ролики. За 10–15 секунд можно\n" +
            "выгодно показать блюда и интерьеры вашего ресторана. \n" +
            "\n" +
            "За отдельную плату вы можете разместить видеорекламу в разделе Vibes.",
        "img" : "https://i.ibb.co/wKMwgm0/ads-1.png"
    },
    {
        "title": "CRM-система",
        "subtitle": "Скоро | Только по акции",
        "description": "Ресторан может запустить собственную CRM-систему с бонусами, которые гость будет копить в приложении. Для каждого ресторана — свои бонусы, которые гость может потратить только там. \n" +
            "\n" +
            "Чтобы получить бонусы, достаточно отсканировать QR-код через приложение гостя.",
        "img" : "https://i.ibb.co/dQQXSf9/QRcode-1.png"
    },
    {
        "title": "Конвертация валют",
        "description": "Приложение  напрямую конвертирует цены в разные валюты по офииальному курсу Нацбанка РК на день обраения.",
        "img" : "https://i.ibb.co/xgYw6CB/money.png"
    },
    {
        "title": "Мультиязычное меню",
        "description": "Меню на нескольких языках будет проще обслужить иностранного пользователя.",
        "img" : "https://i.ibb.co/GpGRW43/language.png"
    },

];

const Functions = () => {
    return (
        <section className="func-block">
            <p className="title-word red-color">Функции</p>
            <div className="func-cards-container">
                {data.map((item) => (
                    <FunctionsCard
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        img={item.img}
                    />
                ))}

            </div>

            <div className="func-cards-sm-container">
                <Accordion atomic={true}>
                    {data.map((item, index) => (
                        <AccordionItem key={index} index={index} title={item.title}  >
                            <DummyContent description={item.description}/>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>


        </section>
    );
}
const DummyContent = (props) => (
    <p>
        {props.description}
    </p>
);

export default Functions;