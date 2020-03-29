document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
        if (xhr.status === 200){
          var data = JSON.parse(xhr.responseText);
          for (var blogPost in data) {
            var postDiv         = document.createElement('div');
            var postText        = document.createElement('p');
            var postContainer   = document.getElementsByClassName('post-container')[0];
            postText.innerHTML = data[blogPost];
            postDiv.className = "post";

            postDiv.appendChild(postText);
            postContainer.appendChild(postDiv);
          }
        }
        else {
          console.error(xhr.responseText);
        }
      }
    }
    // On Initial Load, get the Blog Posts
    xhr.open('GET', '/posts', true);
    xhr.send();
  }
}