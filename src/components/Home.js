import React from "react";
import { useState } from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./css/Home.css";

function Home() {
  const [cardFirstRow, setCardFirstRow] = useState([
    {
      src:
        "https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=1200",
      title: "Unique Stays",
      description: "Spaces that are more than just a place to sleep.",
    },
    {
      src:
        "https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=1200",
      title: "Online Experiences",
      description:
        "Unique activities we can do together, led by a world of hosts.",
    },
    {
      src:
        "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=1200",
      title: "Entire homes",
      description:
        "Comfortable private places, with room for friends or family.",
    },
  ]);

  const [cardSecondRow, setCardSecondRow] = useState([
    {
      src: "https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",
      title: "3 Bedroom Flat in Bournemouth",
      description:
        "Superhost with a stunning view of the beachside in Sunny Bournemouth",
      price: "£130/night",
    },
    {
      src:
        "https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",
      title: "Penthouse in London",
      description:
        "Enjoy the amazing sights of London with this stunning penthouse",
      price: "£350/night",
    },
    {
      src: "https://media.nomadicmatt.com/2018/apartment.jpg",
      title: "1 Bedroom apartment",
      description:
        "Superhost with great amenities and a fabolous shopping complex nearby",
      price: "£70/night",
    },
  ]);

  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        {cardFirstRow.map(({ src, title, description }) => (
          <Card src={src} title={title} description={description} />
        ))}
      </div>

      <div className="home__section">
        {cardSecondRow.map(({ src, title, description, price }) => (
          <Card
            src={src}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
