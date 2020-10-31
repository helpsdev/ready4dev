import './home.css';
import {ReactComponent as HomeIlustration} from "./images/dev_productivity.svg"

function Home() {
    return(
        <div className="home">
            <div>
                <h1 className="title">Hi there! I'm Edwin Aragón</h1>
                <p className="self-description">
                    I'm a web developer who likes to code and stay up to date with the technology. 
                    I also enjoy blogging about my experience and my journey to become better developer every day.
                    I like to help others by sharing my knowledge.
                </p>
                <p className="self-description">Want to know more about me? Keep scrolling!</p>
            </div>
            <HomeIlustration />
        </div>
    );
}

export default Home;