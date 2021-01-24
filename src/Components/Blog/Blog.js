import "./blog.css";

function Blog(){
    return(
        <section>
            <h2>Blog Articles</h2>
            {
                getBlogArticles().map(b => {
                    return (
                        <article>
                            <img src={b.imageUrl} alt=""></img>
                            <h3>{b.title}</h3>
                            <p>{b.summary}</p>
                            <a href={b.link} target="blank">Read more...</a>
                        </article>
                    );
                })
            }
        </section>
    );
}

function getBlogArticles(){
    return [
        {
            title:"My first article",
            summary:"Hey community, I'm back! This time I want to share with you how I solved a problem I recently had while working with SQL Server and C#.",
            link:"https://dev.to/edwinoaragon/how-to-send-a-complex-type-list-of-objects-to-sql-server-266b",
            imageUrl:"https://res.cloudinary.com/practicaldev/image/fetch/s--u-PX2gHC--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/t8dy825w7cgnjde7brq3.jpg"
        }
    ];
}

export default Blog;