
function MyWork() {
    return(
        <section>
            <h2>My Work</h2>
            <ul>
                {
                    getProjectList().map(p => {
                        return (
                            <li>Name: {p.name}</li>
                        );
                    })
                }
            </ul>
        </section>
    );
}

function getProjectList(){
    return [
        {
            name: "Chatbot"
        },
        {
            name: "Stock Market Simulator"
        },
        {
            name: "Home Donuts"
        }
    ]
}

export default MyWork;