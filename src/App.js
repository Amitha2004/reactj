import logo from './logo.svg';
import './App.css';
import image from'./celeberate_womentech.png'

function App() {
    return (
    <div>
        <div>
           <h1><b><i>About me</i></b></h1>
           <p> Hii..I am Amitha.I am pursuing <span>B.tech-Artificial Intelligence and Data Science department</span> in Kumaraguru college of technology</p>
           <img src={image}></img>
         
        <hr />
        <h2><b><i>Hobbies</i></b></h2>
           <p>I like to watch cricket.I like singing. I like to play carrom</p>
        <hr />
        </div>
        <div>
        <h3><b><i>Favourite Subject</i></b></h3>
           <ul>
              <li>Maths</li>
              <li>Machine Learning</li>
              <li>Data Science</li>
           </ul>
        <hr />  
        </div> 
        <div>
        <h4><b><i>Language Known</i></b></h4>
            <ol type="A">
                <li>Tamil</li>
                <li>English</li>
            </ol>
        <hr />
        <h4><b><i>Skills</i></b></h4>
            <ol type="I">
                <li>Python</li>
                <li>Machine Learning</li>
                <li>SQL</li>
                <li>HTML and CSS</li>
            </ol>
        </div>
        <hr />
        <div class="grid-container">
             <div class="grid-item">Artificial Intelligence</div>
             <div class="grid-item">Data science</div>
        </div>
        <br />
        <div class="flex-container">
            <div>HTML</div>
            <div>CSS</div>
        </div>
        <script src="JS/linkForHtml.js"></script>
    </div>
    )
};

export default App;
