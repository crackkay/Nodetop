module.exports = pathRegexp;

function pathRegexp(path){
	
	var paramNames = [];
	
	path = path
				//replace *
			   .replace(/((\*{1}(?=\/))|(\*{1}(?=$)))/g,"[0-9a-zA-Z\-_]*")
				//replace :id
			   .replace(/(:(.*?(?=\/)))|(:(.*?(?=$)))/g,"[0-9a-zA-Z\-_]*")
			   	//replace last /
			   .replace(/\/$/g,"")
			   	//relace /
			   .replace(/\//g,"\\\/")
			   	   
	var regexp =  new RegExp("^" + path + "\\/?$");
	regexp.paramNames = paramNames;
	return regexp;
};