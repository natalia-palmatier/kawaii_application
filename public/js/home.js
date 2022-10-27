// load posts when page loads

$(document).ready(() => {
   $.get("/api/posts", results => {
        console.log(results);
      
   })
})