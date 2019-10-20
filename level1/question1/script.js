function onClick(){
	alert('Success');
}


function getTodoCards(){
var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
request.onload = function() {
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
  data.forEach(cards => {
    console.log(cards.userId)
  })
} else {
  console.log('error')
}
}
request.send()
}