export default function Blog(props){
    return(

            <div className="blog">
                <div className="blog--leftSection">
                    <img className="blog--image" src={props.imageUrl} alt="mountain" />
                </div>

                <div className="blog--rightSection">

                    <div className="blog--stats">
                        <img className="blog--locationLogo" src="/location_logo.svg" alt="location logo" />
                        <span className="blog--country" >{props.location}</span>
                        <a className="Blog--map" href={props.googleMapsUrl}>View On Google Maps</a>
                    </div>

                    <h2 className="Blog--title" >{props.title}</h2>
                    <p className="blog--date">1{props.startDate} - {props.endDate}</p>
                    <p className="blog--content">{props.description}</p>
                </div>

            </div>



        


    )
}