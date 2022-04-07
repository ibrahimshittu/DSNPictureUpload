import "../styles/cards.scss";
import { useContext, useEffect, useState } from "react";
import { context } from "../context/context";
import Card from "./Card";
import axios from "../api/axios";
import moment from "moment";

function Cards() {

  const [pictures, setPictures] = useState([]);
  const { user } = useContext(context);

  useEffect(() => {
    const fetchPictures =  async() => {
      await axios.get('images/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.tokens.access}`
        },
      })
      .then(response => {
        setPictures(response.data);
      })
    }
    fetchPictures();
  }, [user.tokens.access])


  return (
    <div className="cards">


      { pictures.length < 1 ? <div className="loading">
        <h2 className="text-center">LOADING...</h2>
      </div> :

      pictures.map(picture => (
      <Card
        key={picture.upload_date}
        accountName={picture.owner}
        image={picture.picture}
        caption={picture.caption}
        hours={moment(picture.upload_date).fromNow()[0].toUpperCase()}
      />
      ))}
      
    </div>
  );
}

export default Cards;
