
function CardNumberUpcomingAndOningAndCompleted(props) {
    return (

        <div className=' col-md-4 d-flex justify-content-between my-2 Number-Upcoming-Registered'>
            <h2 className=" col-3 mx-auto text-center ">{props.number}</h2>
            <p className='col-7 mx-auto py-1 mb-3 '>  {props.title1} <br /> {props.title2} </p>
        </div>

    );
}
export default CardNumberUpcomingAndOningAndCompleted;