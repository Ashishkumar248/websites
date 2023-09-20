function program(){
    document.getElementById("pro").style.color="rgb(75, 250, 75)";
    document.getElementById("homes").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
    
    }
    function contact(){
        document.getElementById("contacts").style.color="rgb(75, 250, 75)";
        document.getElementById("homes").style.color="white";
        document.getElementById("pro").style.color="white";
        document.getElementById("plans").style.color="white";
        document.getElementById("blogs").style.color="white";
    
        }
        function plan(){
            document.getElementById("plans").style.color="rgb(75, 250, 75)";
            document.getElementById("homes").style.color="white";
            document.getElementById("pro").style.color="white";
            document.getElementById("contacts").style.color="white";
            document.getElementById("blogs").style.color="white";
    
            }
            function home(){
                document.getElementById("homes").style.color="rgb(75, 250, 75)";
                document.getElementById("pro").style.color="white";
                document.getElementById("contacts").style.color="white";
                document.getElementById("plans").style.color="white";
                document.getElementById("blogs").style.color="white";
    
    
    
                }
                function blog(){
                    document.getElementById("homes").style.color="white";
                    document.getElementById("pro").style.color="white";
                    document.getElementById("contacts").style.color="white";
                    document.getElementById("plans").style.color="white";
                    document.getElementById("blogs").style.color="rgb(75, 250, 75)";
    
        
        
                    }
    
    
                function submit(){
                    let name = document.getElementById("name") ;
                    let number = document.getElementById("number") ;
    
                    if(name.value == ""){
                        alert("please Enter Name");
                    }else if(number.value == ""){
                        alert("please Enter Number");
                        
                    }
                    else{
                        alert("Thanks for Join : "+name.value)
                    }
                }

                



                //dropdown in ourproduct

                function toggleDropdown(event) {
                    event.preventDefault(); // Prevent the default link behavior (navigating to the "#plan" anchor)
                
                    const dropdownContent = document.getElementById("dropdown-content");
                    
                    // Toggle the display of the dropdown content
                    if (dropdownContent.style.display === "block") {
                        dropdownContent.style.display = "none";
                    } else {
                        dropdownContent.style.display = "block";
                    }
                }
                
                // Close the dropdown when clicking outside of it
                function toggleDropdown(event) {
                    event.preventDefault(); // Prevent the default link behavior (navigating to the "#plan" anchor)
                
                    const dropdownContent = document.getElementById("dropdown-content");
                    
                    // Toggle the display of the dropdown content
                    if (dropdownContent.style.display === "block") {
                        dropdownContent.style.display = "none";
                    } else {
                        dropdownContent.style.display = "block";
                    }
                }
                
                // Close the dropdown when clicking outside of it
                window.addEventListener("click", function(event) {
                    const dropdownContent = document.getElementById("dropdown-content");
                    if (event.target !== dropdownContent && !event.target.matches("#plans")) {
                        dropdownContent.style.display = "none";
                    }
                });

                
                // Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
