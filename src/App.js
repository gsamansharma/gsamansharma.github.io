
import { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import "./App.css";
import "./logo512.png";
import "./logo.svg";


function App() {
  const GetHelp = () => (
    <>
    Command not Found<br/>For a list of commands, type <b><button onClick={printhelp}class="highlight" >help </button>
  </b>
</>
  );
  const HelpText = () => (
    <>
    <table>
  <tr><td><button onClick={printsocial} className="highlight1">social</button>              </td>
    <td>View social account</td>
  </tr>
  <tr>
    <td><button onClick={printabout} className="highlight1">about</button></td>
    <td>View about section</td>
  </tr>
  <tr>
  <td><button onClick={printportfolio} className="highlight1">portfolio</button> </td>
    <td>View social accounts</td>
  </tr>
  <tr>
  <td><button onClick={printresume} className="highlight1">resume</button> </td>
    <td>View Resume</td>
  </tr>
  <tr>
  <td><button onClick={printprojects} className="highlight1">projects</button> </td>
    <td>View Projects</td>
  </tr>
</table>
      {/* <button onClick={printsocial} className="highlight1"><i class="nf nf-md-linkedin"></i>social</button>      View social account<br/>
      <button onClick={printabout} className="highlight1">about</button>      View about section<br/>
      <button onClick={printportfolio} className="highlight1">portfolio</button>     View social account<br/>
      <button onClick={printresume} className="highlight1">resume</button>      View Resume<br/>
      <button onClick={printprojects} className="highlight1">projects</button>      View Projects */}
    </>
  );
  const SocialText = () => (
    <>
    <table>
  <tr><td><i class="nf nf-cod-github"></i> <a href="https://www.github.com/gsamansharma" target="blank" className="highlight2">github</a>                  </td>
    <td>Open Github page</td>
  </tr>
  <tr>
    <td><i class="nf nf-md-linkedin"></i> <a href="https://www.linked.com/in/gsamansharma" target="blank" className="highlight2">linkedin</a></td>
    <td>Open linkedin page</td>
  </tr>
  <tr>
  <td><i class="nf nf-cod-twitter"></i> <a href="https://www.linked.com/in/gsamansharma" target="blank" className="highlight2">twitter</a></td>
    <td>Open twitter page</td>
  </tr>
  <tr>
  <td><i class="nf nf-md-youtube"></i> <a href="https://www.linked.com/in/gsamansharma" target="blank" className="highlight2">youtube</a></td>
    <td>Open youtube page</td>
  </tr>
  <tr>
  <td><i class="nf nf-fa-instagram"></i> <a href="https://www.linked.com/in/gsamansharma" target="blank" className="highlight2">instagram</a></td>
    <td>Open instagram page</td>
  </tr>
</table>
{/* 
       <a href="https://www.github.com/gsamansharma" target="blank" className="highlight2"><i class="nf nf-cod-github"></i>Github</a>              View social account<br/>
      <i class="nf nf-md-linkedin"></i> <a href="https://www.linked.com/in/gsamansharma" target="blank" className="highlight2">about</a>              View about section<br/>
      <a href="https://www." target="blank" className="highlight2">portfolio</a>              View social account<br/>
      <a href="https://www." target="blank" className="highlight2">resume</a>              View Resume<br/>
      <a href="https://www." target="blank" className="highlight2">projects</a>              View Projects */}
    </>
  );
  const About=()=>(
    <>
    <div className="flex-container">
        <div className="flex-box"></div>
          {/* <img src="path/to/image.jpg" alt="Image" /> */}
        </div>
        <div className="flex-box">
          <p>Some text goes here unlinimi f lorem50klj dsf Redundant alt attribute. Screen-readers already announce `img` tags as an image. You dont need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt</p>
        </div>
      
    
     </>
    );
  const Portfolio=()=>(
    <>
    Bla bla bla
    </>
  );
  const Resume=()=>(
    <>
    Bla bla bla
    </>
  );
  const Userprompt=()=>(
    <>
    <span className="userprompt">[guest@whoisaman]$</span>
    </>
  );
      

  function handleInput(input) {
    // Add the input to the terminal line data

    setTerminalLineData((prevData) => [...prevData,<><Userprompt/> {input}</> ]);
    switch(input){
      case "help":
        setTerminalLineData((prevData) => [...prevData, <HelpText />]);
        break;
        case "ls":
        setTerminalLineData((prevData) => [...prevData, <span class="highlight2">hi  I am Aman Sharma</span>]);
        break;
        case "social":
          setTerminalLineData((prevData) => [...prevData, <SocialText />]);
        break;

        case "about":
          setTerminalLineData((prevData) => [...prevData, <About />]);
        break;
        case "portfolio":
          setTerminalLineData((prevData) => [...prevData, <Portfolio />]);

        break;
        case "resume":
          setTerminalLineData((prevData) => [...prevData, <Resume/>]);

        break;
        case "projects":
          setTerminalLineData((prevData) => [...prevData, "Projects section"]);

        break;
        case "social github":
          window.open('https://github.com/gsamansharma', '_blank');
      break;
      case "social linkedin":
          window.open('https://linkedin.com/in/gsamansharma', '_blank');
      break;
        default:
          setTerminalLineData((prevData) => [...prevData, <GetHelp/>]);
          break;
    }
    
  }
  function printhelp(){
    handleInput("help");
  }
  function printportfolio(){
    handleInput("portfolio");
  }
  function printabout(){
    handleInput("about");
  }
  function printsocial(){
    handleInput("social");
  }
  function printprojects(){
    handleInput("projects");
  }
  function printresume(){
    handleInput("resume");
  }
  var inputcursor=(input) => handleInput(input)
  const isMobile = window.innerWidth <= 1500;

  console.log(window.innerWidth);
  
  if(isMobile===true){
    inputcursor=null
  }
  console.log(isMobile)
  
  
  const [terminalLineData, setTerminalLineData] = useState([
    <div>

<div class="maestro">
<span>&nbsp;</span>
  █████  ███    ███  █████  ███    ██    ███████ ██   ██<br/> 
██   ██ ████  ████ ██   ██ ████   ██    ██      ██   ██<br/>
███████ ██ ████ ██ ███████ ██ ██  ██    ███████ ███████<br/>
██   ██ ██  ██  ██ ██   ██ ██  ██ ██         ██ ██   ██<br/>
██   ██ ██      ██ ██   ██ ██   ████ ██ ███████ ██   ██<br/><br/> 
</div>
  

For a list of commands, type <b>
<button onClick={printhelp}class="highlight" >
  help
  </button>
  </b>
  
</div>


                                                    
                                                                                              

                                                                                
  
  ]);
  return (
    <div className="container">
      <Terminal
        className="terminal-container"
        name="Aman's portfolio"
        height="auto"
        startingInputValue=""
        prompt="[guest@whoisaman]$"
        colorMode={ColorMode.Dark}
        onInput={inputcursor}>
        {terminalLineData.map((data, index) => {
          return <TerminalOutput key={index}>{data}</TerminalOutput>;
        })}
      </Terminal>
    </div>  
  );
}

export default App;
