function getTodoCards(){
var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
request.onload = function() {
  var data = JSON.parse(this.response);
  
  if (request.status >= 200 && request.status < 400) {
  data.forEach(card => {
	createCard(card);
  })
} else {
  console.log('error')
}
}
request.send()
}

function createCard(card){
	var div = document.createElement('div');
	div.innerHTML += "<div>UserId: " + card.userId + "</div>";
	div.innerHTML += "<div>Id: " + card.id + "</div>";
	div.innerHTML += "<div>Title: " + card.title + "</div>";
	div.innerHTML += "<div>Completed: " + card.completed + "</div>";
	div.className = "card-body";
	document.getElementById("Cards").appendChild(div);	
}