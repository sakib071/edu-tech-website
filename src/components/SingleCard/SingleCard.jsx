import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {

    const { id, title, courseImage, rating, creditHour, level } = card || {}
    console.log(title);
    return (
        <Link to={`/cards/${id}`} className="hover:w-full transition ease-in-out">
            <div className="card card-compact shadow-xl flex flex-col mx-auto max-w-[22rem] h-full rounded-xl hover:scale-105" >
                <figure><img className="w-full" src="../../../public/imagecourse.jpg" alt="" /></figure>
                <div className="card-body flex">
                    <h2 className="text-xl font-bold w-44" >{title}</h2>

                    <div className='flex flex-grow p-2 justify-between text-md'>
                        <h2 className="font-bold" >Rating: <span className=' text-amber-500'>{rating}</span></h2>
                        <h3 className="font-semibold" >Credit hour:  {creditHour}</h3>
                        <h3 className="font-semibold" >Level: {level}</h3>
                    </div>

                </div>
            </div>
        </Link>

    );
};
SingleCard.propTypes = {
    card: PropTypes.array.isRequired,
}


export default SingleCard;