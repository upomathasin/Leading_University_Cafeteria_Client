import React from "react";
import Cover from "./components/Cover";
import orderBg from "./assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState, useEffect } from "react";
import FoodCard from "./components/FoodCard";
import OrderTab from "./components/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Order() {
  const [pizza, setPizza] = useState([]);
  const [popular, setPopular] = useState([]);
  const [data, setData] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [offered, setOffered] = useState([]);
  const [soup, setSoup] = useState([]);
  const [salad, setSalad] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const { category } = useParams();
  console.log(category);
  const categories = ["Salad", "Pizza", "Soup", "Desert", "Drinks", "Popular"];
  const initialIndex = categories.indexOf(category);
  console.log(initialIndex);
  const [tabIndex, setTabIndex] = useState(initialIndex);
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
        setDessert(data.filter((item) => item.category === "dessert"));
        setDrinks(data.filter((item) => item.category === "drinks"));
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Leading University Cafeteria| Order</title>
      </Helmet>

      <Cover img={orderBg} title="Order Food" />

      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className=" flex flex-col justify-center items-center mt-10"
      >
        <TabList className="mb-4">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Popular</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={popular}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
}
