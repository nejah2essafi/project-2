function or (cond1, cond2){
	
	 if (cond1=== false&& cond2===false){
		return false;
	}else if (cond1===true&& !cond2===false){
		return true;
	}else  {
		return true;
	}
}

function and(cond1, cond2){
	if(cond1===false|| cond2===false){
		return false;
	}else if (!cond1===true ||cond2===false){
		return false;
	}else if(cond1===false|| !cond2===true){
		return false;
	}else {
return true;
	}
	 
}
