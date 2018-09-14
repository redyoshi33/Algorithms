function reverseParentheses(s) {
    var first,mid,last,start,end;
    
    while(s.indexOf("(") != -1){
        start = s.lastIndexOf("(");
        end = s.indexOf(")",start);
        first = s.slice(0,start);
        mid = s.slice(start+1,end);
        mid = mid.split("").reverse().join("");
        last = s.slice(end+1,s.length);
        
        s = first+mid+last;
    }
    return s;
}

str1 = "a(bc)de"
str2 = "a(bcdefghijkl(mno)p)q"
str3 = "co(de(fight)s)"

console.log(reverseParentheses(str1)) //"acbde"
console.log(reverseParentheses(str2)) //"apmnolkjihgfedcbq"
console.log(reverseParentheses(str3)) //"cosfighted"