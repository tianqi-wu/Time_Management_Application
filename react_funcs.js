
/*Initialize values here.
Documents on what values should be here and why they should exist:
currentStatus: the current status of page(for example, login, )
*/



/*
  DEBUGGING DASHBOARD:
  BUGS:
  NONE
  IDEAS:
  TOMATO-CLOCK SYSTEM
  PICTURE-UPLOADING SYSTEM
  https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html
  IMAGE PICKING SYSTEM
  https://rvera.github.io/image-picker/
*/
let currentStatus = "LOGIN";

document.title = 'Time Management App|Login';

let username = ""


/* Initialization of React.js-based components.

*/

const login_page = (
    <div className="container">
    <h1><p>Tianqi (Andy) Wu's Time Management App </p></h1>
    <form>
      <div className="form-group">
        <label htmlFor="usr">UserName:</label>
        <input type="text" className="form-control" id="usr" />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password(Without special characters):</label>
        <input type="password" className="form-control" id="pwd" />
      </div>        
        <button type="button" onClick={() =>{login()}} className="btn btn-success">Login</button>
        <button type="button" onClick={() =>{register();}} onChange = {()=>{evaluatePassword();}} className="btn btn-success" style = {{marginLeft: '20px'}}>Register</button>
    </form>
    <div id = 'password_evaluation'></div>
    <div id="loginDemo">

    </div>
    <br></br>
    <div  style = {{alignItems:'center'}}>
    <div className="btn-group">
        <button type="btn btn-info navbar-btn" id = "Motivations" className="btn btn-primary" onClick={() =>{loginTweaking(1)}}>Motivations</button>
        <button type="btn btn-info navbar-btn" id = "Instructions" className="btn btn-primary" onClick={() =>{loginTweaking(2)}}>Instructions</button>
        <button type="btn btn-info navbar-btn" id = "Images" className="btn btn-primary" onClick={() =>{loginTweaking(3)}}>Images</button>
    </div>
    </div>
</div>
);

/*** Tweaked NavBar so that everything would render properly. ***/
/***         <button type="btn btn-info navbar-btn" id = "USER_SETTINGS" className="btn btn-primary" onClick={() =>{clearClientMessage();  userSettings();}} ><span className="glyphicon glyphicon-user"></span> User Settings</button> ***/
class NavBar extends React.Component{
    render(){
    return  (
<div>
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Tianqi's Time Management App</a>
    </div>
    <ul className="nav navbar-nav">
      <li>
    <div className="btn-group">
        <button type="btn btn-info navbar-btn" id = "DASHBOARD" className="btn btn-primary" onClick={() =>{clearClientMessage();  mainPage();console.log("OH YEA")}}>Home(Dashboard)</button>
        <button type="btn btn-info navbar-btn" id = "TO-DO" className="btn btn-primary" onClick={()=>{clearClientMessage();  ;toDo()}}>Dynamic To-Do List</button>
        <button type="btn btn-info navbar-btn" id = "VA" className="btn btn-primary" onClick={()=>{clearClientMessage();  ;visualizedAnalysis()}}>Visualized Analysis</button>
        <button type="btn btn-info navbar-btn" id = "Calendar" className="btn btn-primary">Calendar</button>
        <button type="btn btn-info navbar-btn" id = "Information"  className="btn btn-primary" onClick={()=>{clearClientMessage();functionalInfo();}}>Information</button>
        <button type="btn btn-info navbar-btn" id = "Stickers" className="btn btn-primary" onClick={()=>{clearClientMessage();  ;toDo()}}>Dynamic To-Do List</button>

        <button type="btn btn-info navbar-btn" id = "LOGOUT" className="btn btn-primary" onClick={() =>{logout()}}><span className="glyphicon glyphicon-log-out"></span> Logout</button>
    
    </div>
    </li>
    </ul>
  </div>
</nav>
</div>
  );
  }}

  class UserSettings extends React.Component{

    render(){
        return (
        <div className = "container">
        <div style={{borderRadius:'17px',alignItems:'center'}} className="h jumbotron" >
            <h3>Welcome to the user settings page, {username}!</h3>
        <p>Your current user profile is displayed at the right.<img /></p>
        <p>You might want to user some default images here:</p>

        <select>
        <option value="profile_Sakura">Sakura</option>
        <option value="profile_Clarissa">Clarissa</option>
        <option value="Seiya">Seiya</option>
        <option value="Shiryu">Shiryu</option>
        <option value="Shiryu">Shun</option>
        </select>
        <p>Or you may choose to upload your own image:</p>
        </div>

</div>);
    }
  }

  class MainPage extends React.Component{
      //Welcome note(personal page), data visualization(plotly.js)
      /*
      https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
      */
       //Functions created merely for encapsulation purposes;
  //The other interative functions are listed much more under.


    //

    render(){
       // var today = getDate();
    return  (
<div>
<div className="col-lg-6 col-md-6 col-sm-12">
        <div style={{borderRadius:'12px',alignItems:'center'}} className="h jumbotron" >
            <h3>Welcome, {username}!</h3>
    <h5>Today is: {getDate()}</h5>
    <p>Quote of Today:{generateQuote()}</p>
    <div>
    <p>Your next plan is:{updateAjaxWelcome()}</p><div id = 'welcome-to-do list'>Loading</div>
    </div>
    
    
            


            


            

                         
         </div>

                
             
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
        <div style={{borderRadius:'12px',alignItems:'center'}} className="h jumbotron" >
            <p>Elapsed Time VS Remaining Time for Only Today:</p>
    <div id='elapsed-time-for-today'></div><p style={{display:'none'}}>{setTimeout(function () {plotGraphForToday()}, 300)}</p>


            


            

                         
         </div>
                
             
    </div>
</div>
  );
  }

  componentDidMount(){
    timeReport();
  }

}

  class ToDoPage1 extends React.Component{
    render(){
      return (
<div>
  <div className="col-lg-4 col-md-4 col-sm-12">
        <div style={{borderRadius:'12px',alignItems:'center'}} className="h jumbotron" >
            <h3>Welcome, {username}!</h3>
            <p>This is the To-Do List, a dynamic list that allows you to list what you want to do next.</p>
            <p>Some data visualization features would also be present.</p>
    <h5>Today is: {getDate()}</h5>
    <h3>You can create new events here:</h3>
    <div id = "holder3">Please enter new events.</div>


    <input type="date" id="date" className="form-control" placeholder="date" /><br></br>
    <input type="time" id="time" className="form-control" placeholder="Password" /><br></br>
    <input type="text" id="title" placeholder="title" className="form-control" /><br></br>
    <input type="text" id="content" placeholder="content" className="form-control" /><br></br>
    <input type="number" id="group" placeholder="group" className="form-control" /><br></br>
    <input type="hidden" name="token" id = "token" value="" className="form-control"/><br></br>
    <button id="create_events" className="form-control" className = "btn btn-info" onClick={()=>{addAjax()}}>Create new events</button><br></br>
         
      </div>
                
             
    </div>
    <div className="col-lg-8 col-md-8 col-sm-12">
    <div style={{borderRadius:'12px',alignItems:'center'}} id ='best-search-ever'  className="h jumbotron" >
    <label htmlFor="usr" id='searchYourEntries0'>What you need to search:</label>
    <input type="text" className="form-control" id="searchYourEntries"/>
    <button  id='search-button' onClick={()=>{searchAjax();}} className = "btn btn-info">Search</button> 

          
</div>
        <div style={{borderRadius:'12px',alignItems:'center'}} id ='all-events-present'  className="h jumbotron" >
                   
         </div>
                
             
    </div>
    </div>


      );
    }

    componentDidMount(){
      updateAjax();
    }




  }

  function callVirtualSecretary(){
    //Summon Some Virtual Sound from the Ocean.

    let hour = new Date().getHours(); 
    let hour1 = "" + new Date().getHours(); 
    if(hour <= 9){
      hour1 = "0"+hour1;
    }
    let name_of_file = "contents/sound/379/379-"+hour1+"00.mp3.ogg";
    var sound = new Howl({
      src: [name_of_file]
    });
  sound.play();

    setTimeout(callVirtualSecretary,3600*1000);
  }

  function timeReport(){
    if(username=="Admin_Andy"){
      //An Easter Egg for Sectetary Purposes. Look out!
    //new Date().getDate()          // Get the day as a number (1-31)
//new Date().getDay()           // Get the weekday as a number (0-6)
//new Date().getFullYear()      // Get the four digit year (yyyy)
let hour = new Date().getHours();         // Get the hour (0-23)

//new Date().getMilliseconds()  // Get the milliseconds (0-999)
let minu = new Date().getMinutes();       // Get the minutes (0-59)
//new Date().getMonth()         // Get the month (0-11)
let seco =  new Date().getSeconds();       // Get the seconds (0-59)
//new Date().getTime()          // Get the time (milliseconds since January 1, 1970)
var d = new Date();
var min = d.getMinutes();
var sec = d.getSeconds();

if((min == '00') && (sec == '00'))
    callVirtualSecretary();
else
    setTimeout(callVirtualSecretary,(60*(60-min)+(60-sec))*1000);
    }
  }

  class VdAs extends React.Component{

    render(){
      return (<div>
<div className="col-lg-4 col-md-4 col-sm-12">
<div style={{borderRadius:'12px',alignItems:'center'}} className="h jumbotron" >
<h3>Welcome, {username}!</h3>
  <p>This is the Visualized Analysis Page, where you can look at how your plans are going!</p>
  <article>I set up this page so that you will not be worried about losing control of your overall schedule. Enjoy!</article>
  </div>
</div>
<div className="col-lg-4 col-md-4 col-sm-12">
<div style={{borderRadius:'12px',alignItems:'center'}} className="h jumbotron" >
  <p>This is the plot for past, ongoing and completed events:</p>
<div id = "plot-analysis-pages"></div></div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div style={{borderRadius:'12px',alignItems:'center'}} className="h jumbotron" >
          <p>Settings:</p>
        <button type="button" onClick={() =>{clearPastAjax();}} className="btn btn-warning" style = {{marginLeft: '20px'}}>Remove Past Events</button>
        </div>
      </div>
      </div>);
    }
    componentDidMount(){
      setTimeout(function(){analyzeAjax()},200);
    }
  }

  function plotForAnalysis(done,going,past){
    console.log("Vi St");
    console.log(done,going,past)
    var data = [{
  values: [done, going,  past],
  labels: ['FinishedEvents', 'Ongoing Events','Past Events'],
  type: 'pie'
}];

var layout = {
  height: 332,
  width: 311
};

Plotly.newPlot('plot-analysis-pages', data, layout);

    
  }

  function getDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
//    document.write(today);
    return today;
    }

    function generateQuote(){
        //Generate quotes, including messages like "Happy New Year!", etc.
        //All quotes from https://blog.rescuetime.com/time-management-quotes/.
        let quote = "";
        let randomQuote = ["Be not afraid of growing slowly, be afraid only of standing still.--Chinese Proverb",
        "He who every morning plans the transactions of that day and follows that plan carries a thread that will guide him through the labyrinth of the most busy life.--Victor Hugo",
        "The most efficient way to live reasonably is every morning to make a plan of one’s day and every night to examine the results obtained.--Alexis Carrel",
        "The bad news is time flies. The good news is you’re the pilot--Michael Altshuler",
        "It is not enough to be busy... The question is: what are we busy about?--Henry David Thoreau",
        "Time = life; therefore, waste your time and waste of your life, or master your time and master your life.--Alan Lakein"
    ]
        let date = getDate();
        if(date.substring(0,5) =='01/01'){quote = "Happy New Year!";return quote;} 
        if(date.substring(0,5)=='12/25'){quote = "Have a nice holiday!";return quote;}
        else{
            return randomQuote[Math.floor(Math.random() * randomQuote.length)];    
        }
        

        
    }

function status_decision(){
    if(currentStatus === 'LOGIN'){
        ReactDOM.render(login_page,document.getElementById('login'))
        ReactDOM.render((<div></div>),document.getElementById('client_message'))
    }
};

function loginTweaking(result){
    var moltivation = (
        <div className="panel-group" id="accordion">
  <div className="panel panel-default">
    <div className="panel-heading">
      <h4 className="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
        Motivations</a>
      </h4>
    </div>
    <div id="collapse2" className="panel-collapse collapse">
      <div className="panel-body">This is actually more like a personal management application than a personal time-management application.
      As someone with a bad memory, it often takes me a long time to remember/recall something important. So one day I decide to build this with
      my best effort to resolve this.
      
      </div>
    </div>
  </div>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h4 className="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
        Implementation Details</a>
      </h4>
    </div>
    <div id="collapse3" className="panel-collapse collapse">
      <div className="panel-body">Frontend: React.js, jQuery; 
      backend: AJAX PHP, mySQL; 
      miscellaneous: Plotly.js, Progressbar.js</div>
    </div>
  </div>
</div>
    );

    var instructions = (
        <div className="panel-group" id="accordion">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
              Motivations</a>
            </h4>
          </div>
          <div id="collapse1" className="panel-collapse collapse">
            <div className="panel-body"> We are still trying to write some good ones. Follow up!
            
            </div>
          </div>
        </div>
        </div>
    );

    var images = (
        <div></div>
    );

    if(result==1){
        ReactDOM.render(moltivation,document.getElementById('loginDemo'))
    }else if(result==2){
        ReactDOM.render(instructions,document.getElementById('loginDemo'))
    }else if(result==3){

    }
};


function getRegisterData() {
    username = $("#usr").val()
    var json = {
        "username": $("#usr").val(),// Get the username from the form
        "password": $("#pwd").val()// Get the password from the form
    };
    return json;
}


function getLoginData() {
    username = $("#usr").val()
    var json = {
        "username": $("#usr").val(),// Get the username from the form
        "password": $("#pwd").val()// Get the password from the form
    };
    return json;
}


function register(){
    
    $.ajax({
        type: "POST",
        url: "register_ajax.php",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(getRegisterData()),
        dataType: "json",
        success: function (data) {
            if(data.success){
            ReactDOM.render((<div className="alert alert-info"><strong>Registration Successful;</strong> Hello, {username}! Please click on login so that we would continue on processing data.</div>),document.getElementById('client_message'));}else{
                ReactDOM.render((<div className="alert alert-danger"><strong>Registration Error!</strong>&nbsp; Please enter valid username-password combinations!</div>),document.getElementById('client_message'));
            }
        },
        error: function (data) {
            ReactDOM.render((<div className="alert alert-danger"><strong>Registering Process Error!</strong>&nbsp; Please enter valid username-password combinations!</div>),document.getElementById('client_message'));
        }
    });
};


function login(){
    
    $.ajax({
        type: "POST",
        url: "login_ajax.php",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(getLoginData()),
        dataType: "json",
        success: function (data) {
            if(data.success){
            currentStatus = "MAIN PAGE"
            console.log()
        ReactDOM.render((<div className="alert alert-info"><strong>Login Successful!</strong>&nbsp; Hello, {username}!</div>),document.getElementById('client_message'));
            ReactDOM.render((<div><NavBar/><br></br> <MainPage/></div>),document.getElementById('login'));
    
    
    }else{
            ReactDOM.render((<div className="alert alert-danger"><strong>Login Error!</strong>&nbsp; Please enter valid username-password combinations!</div>),document.getElementById('client_message'));
        }
        },
        error: function (data) {
            
        }
    });
};


function logout(){
    const logdata = { 'logout': true };
    $.ajax({
        type: "POST",
        url: "logout_ajax.php",
        contentType: "application/json; charset=utf-8",
        data: logdata,
        dataType: "json",
        success: function () {
           currentStatus = "LOGIN";
           status_decision();
        },
        error: function (data) {
          
        }
    });
}

function clearClientMessage(){
  //console.log("AL");
  ReactDOM.render(<div></div>,document.getElementById('client_message'));
}


function updateAjaxWelcome(){
    const datedata = { 'date': "" };
  
    $.ajax({
        type: "POST",
        url: "update_ajax_welcome.php",
        contentType: "application/json; charset=utf-8",
        data: datedata,
        dataType: "json",
        success: function (data) {
          let result = data.value.toString()+ "";
          let newResult = result.split("ID").join("<br/>");
            (data.value == "\n")?
           document.getElementById('welcome-to-do list').innerHTML = "Seems that you don't have a task yet.":document.getElementById('welcome-to-do list').innerHTML = newResult;
        },
        error: function (data) {
          
        }
    });
  }


  function updateAjax(){
    const datedata = { 'date': "" };
  console.log("working");
    $.ajax({
        type: "POST",
        url: "update_ajax.php",
        contentType: "application/json; charset=utf-8",
        data: datedata,
        dataType: "json",
        success: function (data) {

          let event_time_result = (data.event_time.toString()+ "").split("\n");
          let event_id_result = (data.event_id.toString()+ "").split("\n");
          let event_title_result = (data.event_title.toString()+ "").split("\n");
          let event_date_result = (data.event_date.toString()+ "").split("\n");
          let event_content_result = (data.event_content.toString()+ "").split("\n");
          let countres = event_title_result.length;

          
          let allResult = [];

          for(var kk = 1;kk<countres-1;kk++){
            let oneComponent = "Event"+kk+":</p>"+"<p>"+event_date_result[kk]+" "+event_time_result[kk]+"\n "+event_title_result[kk]+" "+"<button type=\"button\" onclick =\"updateAjaxComplete("+event_id_result[kk]+")\" className=\"btn btn-success\">Complete Task</button><button type=\"button\" onclick =\"deleteAjax("+event_id_result[kk]+")\" className=\"btn btn-danger\">Remove Task</button></p>";
            allResult.push(oneComponent);

            console.log(allResult[oneComponent]);
          }

          
            (data.event_time == "\n")?
           document.getElementById('all-events-present').innerHTML = "Seems that you don't have a task yet.":document.getElementById('all-events-present').innerHTML = allResult.join("");
        },
        error: function (data) {
          
        }
    });
  }

  function addAjax(){
    const date = document.getElementById("date").value; // Get the username from the form
    const time = document.getElementById("time").value; // Get the password from the form
    const title = document.getElementById("title").value; 
    const content = document.getElementById("content").value;
    const group = document.getElementById("group").value;
    const token = document.getElementById("token").value;
    // Make a URL-encoded string for passing POST data:
    const data1 = { "date": date, "time": time, "title": title, "content": content, "group": group, "token": "<?php echo $_SESSION[token]; ?>" };
    console.log(data1);

    $.ajax({
      type: "POST",
      url: "add_ajax.php",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data1),
      dataType: "json",
      success: function (data){ 

        
       },
      error: function (data) {
        
      },
      complete: function(data){
        updateAjax();
      }
  });
}




function updateAjaxComplete(number){
  





  // Make a URL-encoded string for passing POST data:
  const data1 = {"event-id": number, "token": "<?php echo $_SESSION[token]; ?>" };
  console.log(data1);

  $.ajax({
    type: "POST",
    url: "update_ajax_complete.php",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data1),
    dataType: "json",
    success: function (data){ 

      
     },
    error: function (data) {
      
    },
    complete: function(data){
      updateAjax();
    }
  
  
  });

}


function deleteAjax(number){
  
  // Make a URL-encoded string for passing POST data:
  const data1 = {"event-id": number, "token": "<?php echo $_SESSION[token]; ?>" };
  console.log(data1);

  $.ajax({
    type: "POST",
    url: "remove_ajax.php",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data1),
    dataType: "json",
    success: function (data){ 

      
     },
    error: function (data) {
      
    },
    complete: function(data){
      updateAjax();
    }
});

  
}

function analyzeAjax(){
  const edata1 = { 'date': "" };
  $.ajax({
    type: "POST",
    url: "analyze_ajax.php",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(edata1),
    dataType: "json",
    success: function (data){ 
      plotForAnalysis(data.done,data.going,data.past)
      
     },
    error: function (data) {
      
    },
    complete: function(data){
     
    }
});
}

function clearPastAjax(){
  console.log("Working")
  const edata1 = { 'date': "" };
  $.ajax({
    type: "POST",
    url: "clear_past_ajax.php",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(edata1),
    dataType: "json",
    success: function (data){ 
      
      analyzeAjax()

     },
    error: function (data) {
      
    },
    complete: function(data){

    }
});

}


function searchAjax(){
  const data0 = document.getElementById('searchYourEntries').value;
  const data1 = {"search":data0};


  $.ajax({
    type: "POST",
    url: "search_ajax.php",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data1),
    dataType: "json",
    success: function (data){ 
      if(data.success){
      let event_time_result = (data.event_time.toString()+ "").split("\n");
      let event_id_result = (data.event_id.toString()+ "").split("\n");
      let event_title_result = (data.event_title.toString()+ "").split("\n");
      let event_date_result = (data.event_date.toString()+ "").split("\n");
      let event_content_result = (data.event_content.toString()+ "").split("\n");
      let countres = event_title_result.length;

      
      let allResult = [];

      for(var kk = 1;kk<countres-1;kk++){
        let oneComponent = "Event"+kk+":</p>"+"<p>"+event_date_result[kk]+" "+event_time_result[kk]+"\n "+event_title_result[kk]+" "+"<button type=\"button\" onclick =\"updateAjaxComplete("+event_id_result[kk]+")\" className=\"btn btn-success\">Complete Task</button><button type=\"button\" onclick =\"deleteAjax("+event_id_result[kk]+")\" className=\"btn btn-danger\">Remove Task</button></p>";
        allResult.push(oneComponent);

        console.log(allResult[oneComponent]);
      }

      
        (data.event_time == "\n")?
       document.getElementById('all-events-present').innerHTML = "Seems that we just can't find it.":document.getElementById('all-events-present').innerHTML = allResult.join("");
   }else{
    //ReactDOM.render((<div className="alert alert-danger"><strong>Searching Error!</strong>&nbsp; Please enter valid search query!!</div>),document.getElementById('client_message'));
   }
   },
    error: function (data) {
      
    },
    complete: function(data){
      //updateAjax();
    }
});

}







function mainPage(){

    document.title = 'Time Management App|Main Page'



    ReactDOM.render((<div><NavBar/><br></br> <MainPage/></div>),document.getElementById('login'));

               
}



function toDo(){
  document.title = 'Time Management App|TO-DO LIST'
  ReactDOM.render((<div><NavBar/><br></br> <ToDoPage1/></div>),document.getElementById('login'));
}

function functionalInfo(){
  let funInfo = (<div><NavBar/>
    <h3>Functional Information for the application:</h3>
    <div className="panel-group" id="accordion">
  <div className="panel panel-default">
    <div className="panel-heading">
      <h4 className="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
        Mainpage</a>
      </h4>
    </div>
    <div id="collapse2" className="panel-collapse collapse">
      <div className="panel-body">The page where you would get some time-saving quotes, what you might do next, and remaining time for today.
      
      </div>
    </div>
  </div>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h4 className="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
        To-Do List(TaskManager)</a>
      </h4>
    </div>
    <div id="collapse3" className="panel-collapse collapse">
      <div className="panel-body">You can add/delete/mark tasks as complete on the TaskManager page. It's currently sorted by date and time.</div>
      <div className="panel-body">Future functions: Sort by other items, sort by weights, etc. </div>
      <div className="panel-body">* Also, the past events that are not complete would be marked as "incomplete" and would not appear. </div>
    </div>
  </div>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h4 className="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
        Calendar(currently disabled)</a>
      </h4>
    </div>
    <div id="collapse5" className="panel-collapse collapse">
      <div className="panel-body">Displays events on a calendar fashion.</div>
      <div className="panel-body">Disabled because I would like to add some styles.</div>
     
    </div>
  </div>

  <div className="panel panel-default">
    <div className="panel-heading">
      <h4 className="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">
        User settings(currently under construction)</a>
      </h4>
    </div>
    <div id="collapse6" className="panel-collapse collapse">
      <div className="panel-body">Sets use profiles and event alerts.</div>
      <div className="panel-body">Currently under construction.</div>
     
    </div>
  </div>
  
</div>


</div>

);

     ReactDOM.render(funInfo,document.getElementById('login'));
}

function visualizedAnalysis(){
  document.title = 'Time Management App|Visualized Analysis'
  ReactDOM.render((<div><NavBar/><br></br> <VdAs/></div>),document.getElementById('login'));
}

function userSettings(){
    //There are two situations: LOGIN and MAINPAGE. Seems that MAINPAGE will not ruin the workflow.
    //Unfinished

    //https://blog.csdn.net/x550392236/article/details/76690927

        document.title = 'Time Management App|User Settings'    



        ReactDOM.render((<div><NavBar/><br></br><UserSettings/></div>),document.getElementById('login'))

}

function evaluatePassword(){

  let result_password = scorePassword().toString();
 const bar1 = (
<div className="progress">
  <div className="progress-bar" role="progressbar" aria-valuenow={result_password}
  aria-valuemin="0" aria-valuemax="100" style={"width:"+result_password+"%"}>
    {result_password}
  </div>
</div>
 );
 

ReactDOM.render(bar1, document.getElementById('password_evaluation'));



}

function scorePassword(){
    /* https://stackoverflow.com/questions/948172/password-strength-meter */
    var pass = $("#pwd").val()
    var score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);
}

// For plotly.js use.
function plotGraphForToday(){
let date = new Date()
let secs = date.getHours()*60*24+date.getMinutes()*60+date.getSeconds()

let totalTime = 23*60*24+59*60+60
var data = [{
  values: [secs, totalTime - secs],
  labels: ['Consumed Time', 'Left Time'],
  type: 'pie'
}];

var layout = {
  height: 332,
  width: 311
};

Plotly.newPlot('elapsed-time-for-today', data, layout);

}



$( function() {
  $( "#date" ).datepicker({
      dateFormat: "yy-mm-dd",
      minDate: new Date()
  });
} );


function checkPassStrength(pass) {
    var score = scorePassword(pass);
    console.log(score);
    
    if (score > 80)
        return "strong";
    if (score > 60)
        return "good";
    if (score >= 30)
        return "weak";

    return "";

}


status_decision();


loginTweaking(1);




