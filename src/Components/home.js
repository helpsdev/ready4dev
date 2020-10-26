import './home.css';

function Home() {
    return(
        <div style={{display:"flex"}}>
            <div>
                <h1 className="title">Hi there! I'm Edwin Aragón</h1>
                <p className="self-description">
                    I'm a web developer who likes to code and stay up to date with the technology. 
                    I also enjoy blogging about my experience and my journey to become better every day.
                    I like to help others sharing my knowledge.
                </p>
                <p className="self-description">Want to know more about me? Keep scrolling!</p>
            </div>
            <img src="images/dev_productivity.svg" alt="" />
        </div>
    );
}

export default Home;