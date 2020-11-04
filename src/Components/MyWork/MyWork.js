import "./myWork.css"
import {ReactComponent as JS} from '../../Images/javascript-4.svg';
import {ReactComponent as CSS} from '../../Images/css-5.svg';
import {ReactComponent as HTML} from '../../Images/html-5.svg';
import {ReactComponent as React} from '../../Images/react.svg';

function MyWork() {
    return(
        <section>
            <h2>My Work</h2>
            <section className="projects">
                {
                    getProjectList().map(p => {
                        return (                        
                            <section>
                                {p.preview && <img src={p.preview}></img>}
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
            preview:"",
            description:"",
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
            preview:"",
            description:"",
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
            preview:"",
            description:"",
            technologies:[
                <HTML />,
                <CSS />,
                <JS />
            ]
        }
    ]
}

export default MyWork;