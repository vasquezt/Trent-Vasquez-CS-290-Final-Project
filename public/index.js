document.getElementById("submit-article").addEventListener("click", getNewArticle);

function generateArticle(newTitle, newText, newImage){
	var articleDataTemp = {
		title: newTitle,
		text: newText,
		image: newImage
	};
	return articleDataTemp;
}

function getNewArticle(){
	console.log("Accesing function");
	var articleTitle = document.getElementById('article-title-name').value;
	var articleText = document.getElementById('article-text-content').value;
	var articleImage = document.getElementById('article-img-content').value;

	if(articleTitle && articleText && articleImage){
		var newArticle = generateArticle(articleTitle, articleText, articleImage);
		console.log(articleData);
		articleData.push(newArticle);
		document.getElementById('article-title-name').value = "";
		document.getElementById('article-text-content').value = "";
		document.getElementById('article-img-content').value = "";
	}else{
		alert('All fields must be filled out to submit');
	}
}

/*window.addEventListener('DOMContentLoaded', function() {
	var createArticle = document.getElementById('submit-article');
	createArticle.addEventListener('click', getNewArticle());
});*/

