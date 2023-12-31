import "./topbar.css";

export default function Topbar(){
  return(
    <div className = "topbarContainer">
      <div className = "topbarLeft">
        <span className ="logo">College Events Hub</span>
      </div>
      < div className = "topbarCenter">
      <div className = "searchbar">
      <img src ="/assets/icons/search-24.png" alt = "" className = "topbarImg"/> 
     
          <input placeholder = "Search for events" className = "searchInput"/>
        </div>
      </div>
      <div className = "topbarRight">
      <div className = "topbarLinks"></div>
      <div className = "topbarIcons">
        <div className = "topbarIconsItem">
          <img src ="/assets/icons/person-64.png" alt = "" className = "topbarImg"/>
          <span className = "topbarIconBadge">2</span>
        </div>
        <div className = "topbarIconsItem">
          <img src ="/assets/icons/chat-64.png" alt = "" className = "topbarImg"/>
          <span className = "topbarIconBadge">2</span>
        </div>
        <div className = "topbarIconsItem">
        <img src ="/assets/icons/bell-24.png" alt = "" className = "topbarImg"/>
        <span className = "topbarIconBadge">7</span>
      </div> 
    </div>   
    <img src ="/assets/profilepictures/piyaporn.JPG" alt = "" className = "topbarImg"/>
    </div>  
    </div>

  );
}