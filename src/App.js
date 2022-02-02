import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main className="main">
               
        <div className="backdrop vid-box">
            <video autoPlay loop muted>
                <source src="../public/starry.mp4" type="video/mp4" />
            </video>            
        </div>
        <header className="container header">
            <div>
                <div>
                    <h1>Patrick Sebstead</h1>
                </div>
                <div className="nav">
                    <nav>
                        <ul>
                            <li><a href="#bio">Bio</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#projects">Projects</a></li>                                                                        
                        </ul>
                    </nav>
                </div>
            </div>                        
        </header>        
        <section className="container">            
            <div><h2>BIOGRAPHY</h2>  </div>
            <section className="container bio" id="bio">
              
                <picture>
                    <img src="public/selfie.jpg" alt="business selfie" />
                </picture>                                
                <article className="about">
                    <h3>About Me</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                       Id dolor laboriosam dignissimos quisquam, facilis placeat. 
                       Hic dicta mollitia aliquid amet, debitis tenetur iure quos adipisci 
                       accusantium molestiae asperiores culpa. Tenetur?</p>
                    <h3>My Skills</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Quis cupiditate nulla beatae aperiam debitis porro sequi 
                       ipsa eos rem! Labore sapiente suscipit ipsum officiis reprehenderit.
                       Autem, obcaecati. Ut, eaque nisi.</p>
                    <address id="contact">
                        <h3>Patrick Sebstead</h3>
                        <p>123 Road Street</p>
                        <p>City, State 65495</p>
                        <p>email: myemail@yahoo.com</p>
                        <p>phone: (958) 654-5555</p>
                    </address>
                </article>
            </section>                
            <section className="projects" id="projects">

                <h2>PROJECTS</h2> 
                <a href="https://raidernationbuilder.github.io/run-buddy/" target="blank"><img src="/02-run-buddy.jpg" alt="Link to runbuddy website" /></a>
                <div>

                    <a href="https://raidernationbuilder.github.io/finance-assistant/"target="blank"><img src="/homepage.png" alt="Link to finance-assistant website" style={{height: "7em", width: "auto"}}/></a>
                    <a href="https://warm-eyrie-07140.herokuapp.com/"target="blank"><img src="/work-it-done.jpg" alt="Link to work-it-done.jpg website" style={{height: "7em", width: "auto"}} /></a>
                    <a href="https://raidernationbuilder.github.io/siteplaceholder3/"target="blank"><img src="/02-portfolio-3.jpg" alt="Link to placeholder website" style={{height: "7em", width: "auto"}} /></a>
                    <a href="https://raidernationbuilder.github.io/siteplaceholder4/"target="blank"><img src="/02-portfolio-4.jpg" alt="Link to placeholder website" style={{height: "7em", width: "auto"}} /></a>
                </div>
            </section>                    
        </section>
    </main>
  );
}

export default App;
