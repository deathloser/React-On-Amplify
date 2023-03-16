export default function EventCard (props) {
    return(
      <div className="eventCard">
        {props.title}: {props.location} {props.description}.
      </div>
    )
  }