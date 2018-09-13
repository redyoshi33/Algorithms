// Input: "abc cde adb dfb def ee abcd aabb"

// output: {
//   "6": ["abc", "aabb"],
//   "12": ["cde", "dfb"],
//   "7": ["adb"],
//   "15": ["adb", "def"],
//   "10": ["ee", "abcd"]
// }

input = "abc cde adb dfb def ee abcd aabb"

def strtonum(str):
	numkey = {"a": 1, "b": 2, "c": 3, 'd': 4, 'e': 5, 'f': 6}
	output = {}
	count = 0
	value = ''
	for i in range(len(str)):
	    if str[i] != " ":
	        value += str[i]
	        count += numkey[str[i]]
	        if i == len(str)-1:
	            if count != 0:
	                if count not in output:
	                    output[count] = [value]
	                else:
	                    output[count].append(value)
	                count = 0
	                value = ''
	    else: 
	        if count != 0:
	            if count not in output:
	                output[count] = [value]
	            else:
	                output[count].append(value)
	            count = 0
	            value = ''
	
	return output
	 
print(strtonum(input))