import EventCard from '../Components/EventCard'
import React, { Component } from 'react';
import axios from 'axios';

export default function Home() {
  let eventsArray = [
    {
      title: "Deftoness",
      location: "Music Hall Of Williamsburg",
      description: "Starts @ 7pm, $12"
    },
    {
      title: "Grimes",
      location: "White Eagle Hall",
      description: "Starts @ 7pm, $12"
    },
    {
      title: "Alex G",
      location: "Elsewhere",
      description: "Starts @ 7pm, $12"
    }];

  const callApi = async () => {
    const api = 'https://fursrb2ri3.execute-api.us-east-1.amazonaws.com/default/venues-function';
    const data = { "name" : "Mike" };
    axios
      .get(api
        // , data
        )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const searchFunction = () => {
    let input = document.getElementById('inputTextBox').value;
    window.alert('hi');
    console.log('console');
    window.alert(input);
    callApi();
  }

  return (
    <div>
      <input id="inputTextBox" type="text"></input>
      <input onClick={() => { searchFunction(); }} id="inputTextSubmit" type="submit"></input>
      {eventsArray.map(event => (
        <EventCard title={event.title} location={event.location} description={event.description}>
        </EventCard>
      ))}
    </div>
  )
}