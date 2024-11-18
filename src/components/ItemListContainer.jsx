import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { getItems, getCategoryItems } from "../firebase/db";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  if (!id) {
    getItems().then((res) => setItems(res));
  } else {
    getCategoryItems(id).then((res) => setItems(res));
  }

  useEffect(() => {
    getItems().then((res) => setItems(res));
  }, [id]);

  return <>{items.length > 0 ? <ItemList items={items} /> : <Loader />}</>;
}

export default ItemListContainer;
