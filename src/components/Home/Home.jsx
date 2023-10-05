import { useLoaderData } from "react-router-dom";
import CourseCards from "../CourseCards/CourseCards";

const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <h3>Home</h3>
            <CourseCards cards={cards}></CourseCards>
        </div>
    );
};

export default Home;