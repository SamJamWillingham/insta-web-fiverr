import './App.css';
import undrawChat from "./undraw_begin_chat.png"
import undrawLearning from "./undraw_Online_learning.png"
import undrawHelp from "./undraw_shared_workspace.png"
function Links() {
  return (
    <div className="links">
        <div className="card">
            <img src={undrawChat} alt="chat illustration" width={200}/>
<h3>proofread and edit my content</h3>
    <a href="#">
     <button>
    Fiverr
</button>   
    </a>
        </div>
    <div className="card">
        <img src={undrawLearning} alt="chat illustration" width={200}/>
    <h3>proofread and edit my lesson plans</h3>
    <a href="#">
     <button>
    Fiverr
</button>   
    </a>
    </div>
    <div className="card">
        <img src={undrawHelp} alt="chat illustration" width={200}/>
    <h3>SOS! Help me with my lesson plans NOW!</h3>
    <a href="mailto:samanthalf8@gmail.com" subject="SOS!%Can%we%meet%on%Zoom?">
     <button>
    Email
</button>   
    </a>
</div>
    </div>
  );
}

export default Links;