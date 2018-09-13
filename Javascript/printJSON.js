 var jsObject = {
     "root": {
       "children": {
         "node1": {
           "children": {
             "node3": {
               "children": {}
             },
             "node4": {
               "children": {}
             }
           }
         },
         "node2": {
           "children": {
             "node5": {
               "children": {}
             },
             "node6": {
               "children": {}
             }
           }
         }
       }
     }
   };
// ^ Input ^
 traverseHelper(jsObject, 0)

function isNotEmpty(dict){
	for(var key in dict){
		if(key){
			return true
		}
		else{
			return false
		}
	}
}

function traverse(node){
    for(var key in node){
	     for (var child in node[key]) {
	     	if(isNotEmpty(node[key][child])){
	     		console.log("<div id='"+key+"'>");
	     		traverse(node[key][child])
	     		console.log("</div>")
	     	}
	       	else{
	       		console.log("<div id='"+key+"'/>")
	       	}
	     }
	    }
 }

function traverseHelper(node, count){
	var ind = "    "
	for(var key in node){
	     for (var child in node[key]) {
	     	if(isNotEmpty(node[key][child])){
	     		console.log(ind.repeat(count)+"<div id='"+key+"'>");
	     		traverseHelper(node[key][child], count+1)
	     		console.log(ind.repeat(count)+"</div>")
	     	}
	       	else{
	       		console.log(ind.repeat(count)+"<div id='"+key+"'/>")
	       	}
	     }
	    }
}