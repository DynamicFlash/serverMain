// for (var key in dime) { 

//     if (dime.hasOwnProperty(key)){
//     	console.log(key);

//     	for(var key1 in dime[key]){
//         console.log(key1 + " -> " + dime[key][key1]);
//     	}
//     	}

// 		}
	
// for (var key in dime){
// 	if(dime.hasOwnProperty(key){
// 		console.log(key)

// 		for()
// 	}

// }


for (var key in dime) { 

    if (dime.hasOwnProperty(key)){
    	console.log(key);

    	for(var key1 in dime[key]){
        console.log(key1 + " -> " + dime[key][key1]);
    	}
    	}

		}

var html = '<table><thead><tr>Day</tr><tr>morning</tr><tr>afternon</tr><tr>evening</tr></thead><tbody>';
for (var i = 0, len = data.length; i < len; ++i) {
    html += '<tr>';
    for (var j = 0, rowLen = data[i].length; j < rowLen; ++j ) {
        html += '<td>' + data[i][j] + '</td>';
    }
    html += "</tr>";
}
html += '</tbody><tfoot><tr>....</tr></tfoot></table>';


var html = '<table><thead><tr>Day</tr><tr>morning</tr><tr>afternon</tr><tr>evening</tr></thead><tbody>';
for (var key in dime) { 

    if (dime.hasOwnProperty(key)){
    	//console.log(key);
    	html +='<tr>'+'<td>'+ key+'</td>';

    	for(var key1 in dime[key]){
        html +='<td>'+dime[key][key1]+'</td>'
    	}

    	html += "</tr>";
    }

}
html += '</tbody><tfoot><tr>....</tr></tfoot></table>';