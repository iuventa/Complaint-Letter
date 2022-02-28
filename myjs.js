function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, comptablink;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="comptablink" and remove the class "active"
    comptablink = document.getElementsByClassName("comptablink");
    for (i = 0; i < comptablink.length; i++) {
      comptablink[i].className = comptablink[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  