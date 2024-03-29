import './App.css';
import starry from "../src/starry.mp4";
import selfie from "../src/selfie.jpg";
import runbuddy from "../src/02-run-buddy.jpg";
import homepage from "../src/homepage.png";
import workItDone from "../src/work-it-done.jpg";
import stillGood from "../src/stillGood.jpg";
import portfolio4 from "../src/02-portfolio-4.jpg";

function App() {
  return (
    <main className="main">
               
        <div className="backdrop vid-box">
            <video style={{width:"100%"}} autoPlay loop muted>
                <source src={starry} type="video/mp4" />
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
                    <img src={selfie} alt="business selfie" />
                </picture>                                
                <article className="about">
                    <h3>About Me</h3>
                    <p>Web Developer with a background in LEAN manufacturing implementation.  
                    Recognized as proactive, resourceful, and persistent problem-solver.  
                    Excellent communicator with effective client relationship-building skills. 
                    Graduate of Trilogy Education Services Web Development through University of Wisconsin Madison.</p>
                    <h3>My Skills</h3>
                    <p>Frontend: HTML5, CSS, JQuery, JavaScript, Bootstrap, AJAX, SASS  
                    Backend: MySQL, MongoDB, Express, ReactJS, Node, Handlebars, Webpack
                    </p>
                    <address id="contact">
                        <h3>Patrick Sebstead</h3>
                        <p>425 E. Cecil St</p>
                        <p>Neenah, WI 54956</p>
                        <p>email: sebstead@yahoo.com</p>
                        <p>phone: (920) 410-1803</p>
                    </address>
                </article>
            </section>                
            <section className="projects" id="projects">

                <h2>PROJECTS</h2> 
                <a href="https://raidernationbuilder.github.io/run-buddy/" target="blank"><img src={runbuddy} alt="Link to runbuddy website" /></a>
                <div>

                    <a href="https://raidernationbuilder.github.io/finance-assistant/"target="blank"><img src={homepage} alt="Link to finance-assistant website" style={{height: "7em", width: "auto"}}/></a>
                    <a href="https://warm-eyrie-07140.herokuapp.com/"target="blank"><img src={workItDone} alt="Link to work-it-done website" style={{height: "7em", width: "auto"}} /></a>
                    <a href="https://pacific-bayou-24755.herokuapp.com/"target="blank"><img src={stillGood} alt="Link to StillGood website" style={{height: "7em", width: "auto"}} /></a>
                    
                </div>
            </section>                    
        </section>
    </main>
  );
}

export default App;
