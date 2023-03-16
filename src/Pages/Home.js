import EventCard from '../Components/EventCard'
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
    let response = await fetch("https://fursrb2ri3.execute-api.us-east-1.amazonaws.com/default/venues-function", { method: "GET" })
    response = response.json();
    console.log(response);
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