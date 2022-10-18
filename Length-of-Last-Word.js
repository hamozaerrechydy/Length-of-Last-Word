/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let n = s.trim().split(" "); 
    return n[n.length - 1].length;     
    
};

/*
Pseudocode : 
[x] create an empty array 
[] remove all the sapce at the begining and end of the string 
[] loop in the string and add each word to the array 
[] return the last item in the array lenght 
*/

/*
Time Submitted = 10/18/2022 19:21
Status = Accepted
Runtime = 110 ms
Memory = 42.4 MB	
Language = javascript
*/
