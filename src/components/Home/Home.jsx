import { useLoaderData } from "react-router-dom";
import CourseCards from "../CourseCards/CourseCards";

const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <CourseCards cards={cards}></CourseCards>
        </div>
    );
};

export default Home;