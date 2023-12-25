import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Cover from "./Cover";

import MenuCategory from "./MenuCategory";
import SectionTitle from "./SectionTitle";
import PopularFoods from "./PopularFoods";
import dessertBg from "../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../assets/menu/pizza-bg.jpg";
import saladBg from "../assets/menu/salad-bg.jpg";
import soupBg from "../assets/menu/soup-bg.jpg";
import menuItem from "../../src/assets/menu/menu-bg.jpg";
import bannerBg from "../../src/assets/menu/banner.png";
export default function Menu() {
  const [pizza, setPizza] = useState([]);
  const [popular, setPopular] = useState([]);
  const [data, setData] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [offered, setOffered] = useState([]);
  const [soup, setSoup] = useState([]);
  const [salad, setSalad] = useState([]);
  const [drinks, setDrink] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setPizza(data.filter((item) => item.category === "pizza"));
        setDessert(data.filter((item) => item.category === "dessert"));
        setOffered(data.filter((item) => item.category === "offered"));
        setSalad(data.filter((item) => item.category === "salad"));
        setSoup(data.filter((item) => item.category === "soup"));
        setPopular(data.filter((item) => item.category === "popular"));
        setDrink(data.filter((item) => item.category === "drinks"));
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Leading University Cafeteria/Menu</title>
      </Helmet>
      <Cover img={menuItem} title="Our Menu" />
      <SectionTitle title="Our Menu"></SectionTitle>
      <MenuCategory items={popular} title="Popular"></MenuCategory>

      <Cover img={saladBg} title="Salad" />
      <SectionTitle title="Salad"></SectionTitle>
      <MenuCategory items={salad} title="Salad"></MenuCategory>

      <Cover img={pizzaBg} title="Pizza" />
      <SectionTitle title="Pizza"></SectionTitle>
      <MenuCategory items={pizza} title="Pizza"></MenuCategory>
      <Cover img={soupBg} title="Soup" />
      <SectionTitle title="Soup"></SectionTitle>
      <MenuCategory items={soup} title="Soup"></MenuCategory>

      <Cover img={dessertBg} title="Dessert" />
      <SectionTitle title="Dessert"></SectionTitle>
      <MenuCategory items={dessert} title="Dessert"></MenuCategory>
      <Cover img={dessertBg} title="Drinks" />
      <SectionTitle title="Drinks"></SectionTitle>
      <MenuCategory items={drinks} title="Drinks"></MenuCategory>
    </div>
  );
}
