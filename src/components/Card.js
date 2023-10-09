export default function Card(props) {
    return (
        <><div style={{border: "1px solid black", borderRadius: "8px", width: "200px", height: "250px", margin: "15px", boxShadow: "0px 0px 5px #000000"}}>
            <span>{props.eventName}</span>
            <div style ={{height: "10px", textAlign: "center"}}>{props.date}</div>
                <img src={props.imageURL} alt="" style= {{height: "100px", textAlign:"center", margin: '17px'}}/> 
            <div style={{width: "100%", textAlign: "center"}}> {props.location}
            </div> 
            </div> 
            </>
    )
}