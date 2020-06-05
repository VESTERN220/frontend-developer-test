import React, {Fragment, useState} from 'react';
import css from './Card.module.css'

const  Card = ({data, arrayChildren}) => {
const [openList, setOpenList] = useState(false);
const [activeButton, setActiveButton] = useState(true);
const listItems = arrayChildren.map((dataItem, index) => {
    if (!dataItem.isDeleted) {
        return (
            <li key={index}>
                <h2>{dataItem.Name}</h2>
                <p>Тип: {dataItem.Type}</p>
                <p>Описание: {dataItem.descriptionen}</p>
            </li>
        )
    }else return null
});
    const handleClick = () => {
        setActiveButton(!activeButton);
        setOpenList(!openList);
    };

    return (
        <div className={css.CardWrap}>
            <div className={css.CardBody}>
                <h1>
                    {data.Name}
                </h1>
                <p className={css.CardDescription}>
                    {data.descriptionen}
                </p>
                {openList && <Fragment>
                    <ul>
                        {listItems}
                    </ul>
                </Fragment>}
            </div>
            <div className={css.CardControl}>
                {activeButton ?
                    <button
                        type={'button'}
                        onClick={handleClick}>
                        Развернуть
                    </button> :
                    <button
                        type={'button'}
                        onClick={handleClick}>
                        Скрыть
                    </button>
                }
            </div>
        </div>
    )
};

export default Card