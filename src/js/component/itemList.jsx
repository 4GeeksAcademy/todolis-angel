import React from "react";



const ItemList = (props) => {
	return (
        props.list.map((item, index) => {
            return (
                <li className="list-group-item d-flex justify-content-between">
                    <span>{item}</span>
                    <button className="btn btn-danger" onClick={() => props.delete(item)}> X </button>
                </li>
            )
        })
	);
};

export default ItemList;