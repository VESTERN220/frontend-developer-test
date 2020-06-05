import React from 'react';
import Card from "./Card";

const ArrayCards = ({state}) => (
    state.map((dataItem, index) => {
            let arr;
            if (!dataItem.isDeleted) {
                if (dataItem.ParentID === null) {
                    arr = state.filter(data => data.ParentID === dataItem.ProductID);
                    return <Card
                        data={dataItem}
                        arrayChildren={arr}
                        key={index}
                        id={index}
                    />
                } else return null
            } else return null
        }
    )
);
export default ArrayCards;