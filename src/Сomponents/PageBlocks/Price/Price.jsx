import React from 'react';
import "../../../Styles/Blocks/Price.css"
import PriceCard from "./PriceCard/PriceCard";

const DATA_FIRST_ROW = [
    {
        "index":               "1",
        "title_month":         "1 месяц",
        "title_strikethrough": "",
        "title_price":         "25 000 тенге",
    },
    {
        "index":               "2",
        "title_month":         "3 месяца",
        "title_strikethrough": `75 000`,
        "title_price":         "65 000 тенге",
    },
    {
        "index":               "3",
        "title_month":         "6 месяцев",
        "title_strikethrough": "140 000",
        "title_price":         "135 000 тенге",
    },
    {
        "index":               "4",
        "title_month":         "1 месяц",
        "title_strikethrough": "",
        "title_price":         "50 000 тенге",
    },
    {
        "index":               "5",
        "title_month":         "3 месяца",
        "title_strikethrough": "150 000",
        "title_price":         "135 000 тенге",
    },
    {
        "index":               "6",
        "title_month":         "6 месяцев",
        "title_strikethrough": "150 000",
        "title_price":         "135 000 тенге",
    },
];

const Price = (props) => {
    return (
        <section className="price-block">
            <div className="price-title">
                <p className="red-color title-word">Цена</p>
                <p className="subtitle-word">Пакеты по тарифу Basic:</p>
            </div>
            <div className="price-cards-container">
                {DATA_FIRST_ROW.map((item) => (
                    <PriceCard
                        title_month={item.title_month}
                        title_strikethrough={item.title_strikethrough}
                        title_price={item.title_price}
                        list_item={item.list_item}
                        index={item.index}
                    />
                ))}
            </div>
        </section>
    );
};


export default Price;