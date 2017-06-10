document.getElementById("submit-article").addEventListener("click", getNewArticle);
//document.getElementById("submit-article").addEventListener("onmouseup", clearArticle);


function generateArticle(newTitle, newText, newImage){
	var articleDataTemp = {
		title: newTitle,
		text: newText,
		image: newImage
	};
	return articleDataTemp;
}

function getNewArticle(){
	
	var articleTitle = document.getElementById('article-title-name').value;
	var articleText = document.getElementById('article-text-content').value;
	var articleImage = document.getElementById('article-img-content').value;
	
	if(articleTitle == "" || articleText == '' || articleImage == ''){
		alert('Fill in all Fields');
	}else{

		var postURL = "/newArticle";
	
		var postRequest = new XMLHttpRequest();
		postRequest.open('POST', postURL);
		postRequest.setRequestHeader('Content-Type', 'application/json');
	
		postRequest.addEventListener('load', function(event){
			var error;
			if(event.target.status !== 200){
				error = event.target.response;
			}
			callback(error);
		});
	
		var postBody = {
			title: articleTitle,
			text: articleText,
			image: articleImage
		};
	
	
		console.log(JSON.stringify(postBody));
//		console.log(postBody);
		postRequest.send(JSON.stringify(postBody));
	
		document.getElementById('article-title-name').value = "";
		document.getElementById('article-text-content').value = "";
		document.getElementById('article-img-content').value = "";
	
		alert("Your post has been submited");

	
/*		if(articleTitle && articleText && articleImage){
			var newArticle = generateArticle(articleTitle, articleText, articleImage);
			console.log(articleData);
			articleData.push(newArticle);
			document.getElementById('article-title-name').value = "";
			document.getElementById('article-text-content').value = "";
			document.getElementById('article-img-content').value = "";
		}else{
			alert('All fields must be filled out to submit');
		}
*/
	}
}

/*function clearArticle(){	
	document.getElementById('article-title-name').value = "";
	document.getElementById('article-text-content').value = "";
	document.getElementById('article-img-content').value = "";

	alert(Your post has been submited);
}*/




/*window.addEventListener('DOMContentLoaded', function() {
	var createArticle = document.getElementById('submit-article');
	createArticle.addEventListener('click', getNewArticle());
});*/

