import "./myWork.css";
import {ReactComponent as JS} from '../../Images/javascript-4.svg';
import {ReactComponent as CSS} from '../../Images/css-5.svg';
import {ReactComponent as HTML} from '../../Images/html-5.svg';
import {ReactComponent as React} from '../../Images/react.svg';
import NotAvailable from '../../Images/not-available.png';

function MyWork() {
    return(
        <section>
            <h2>My Work</h2>
            <section className="projects">
                {
                    getProjectList().map(p => {
                        return (                        
                            <section>
                                {p.preview && <img className="preview-image" src={p.preview} alt=""></img>}
                                <p>{p.name}</p>
                                <p>{p.description}</p>
                                <section className="technology-icon">{p.technologies}</section>
                                <a href={p.liveApp}>Live Site</a>
                                <a href={p.code}>Github</a>
                            </section>
                        );
                    })
                }
            </section>
        </section>
    );
}


function getProjectList(){
    return [
        {
            name: "Chatbot",
            code:"",
            liveApp:"",
            preview: NotAvailable,
            description:`Resumebot born in a Hackathon hosted by Meantbean. 
                They have a lot of great hackathons where you can learn a lot thank you to their mentorship through the hackathon.
                The idea is that this bot is my digital representation which you can interact with to get to know more about me, 
                specially about my resume`,
            technologies:[
                <HTML />,
                <CSS />,
                <JS />
            ]
        },
        {
            name: "Stock Market Simulator",
            code:"",
            liveApp:"",
            preview: NotAvailable,
            description:`Stock Market Simulator also born in a Meantbean Hackathon. 
                The idea of this project was to learn to use React and create a simulation game of a stock market which will give you an amount of funds to begin with
                and as the game passes you could earn or lose money depending on how you were buying/selling your shares when the price was changing`,
            technologies:[
                <HTML />,
                <CSS />,
                <JS />,
                <React />
            ]
        },
        {
            name: "Home Donuts",
            code:"",
            liveApp:"",
            preview: NotAvailable,
            description: `Home Donuts is a real project of a donuts store. Here you can see the menu with real photos of the products
                they sell, you can also contact the store to ask for a quote for special events and you can know more about the business in the about section`,
            technologies:[
                <HTML />,
                <CSS />,
                <JS />
            ]
        }
    ]
}

export default MyWork;