window.onload = function(){
    
    //Homepage Courses Data Snapshot
    const coursesDiv = document.getElementById("courses-container");
    coursesDiv.innerHTML = "";
    
    firebase.firestore().collection("Courses").limit(4).get().then(function(snapshot){
    
        snapshot.docs.forEach(function(doc){
            
            coursesDiv.innerHTML =
            
            "<div class='card'>"+
            
                "<div class='card-body'>"+
            
                    "<div class='card-thumbnail'>"+
            
                        "<img src='"+doc.data().Course_Thumbnail+"'>"+
            
                    "</div>"+
            
                    "<div class='card-detail'>"+
            
                        "<h class='course-title'>"+doc.data().Course_Title+"</h>"+
            
                      "<br>"+
            
                        "<div class='course-mentor-detail'>"+
            
                            "<h class='title'>Mentor</h>"+
            
                            "<img src='"+doc.data().Course_Mentor_Pic+"'>"+
                            "<h>"+doc.data().Course_Mentor_Name+"</h>"+
            
                        "</div>"+
            
                        "<p class='course-description'>"+doc.data().Course_Description+"</p>"+
            
                    "</div>"+
            
                    "<div class='card-footer'>"+
            
                        "<h1 class='price'><small>৳</small><h>"+doc.data().Course_Price+"</h><span>("+doc.data().Course_Price_Type+")</span></h1>"+
                        "<h class='discount-price'>-"+doc.data().Course_Price_Discount+"%</h>"+
                        
                        "<span class='far fa-star'></span>"+
            
                    "</div>"+
            
                    "<div class='enroll-btn'>View Details</div>"+
            
                "</div>"+
            
            "</div>"+coursesDiv.innerHTML;
        
        });
    
    }).catch(function(error){
    
        console.log(error);
    
    });
  
}
