/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    
    // lets create a map to store the frequency of each window char
    const map = new Map();
    
    // set the map count
    for (let i = 0; i < t.length; i++)
    {
    if (map.has(t.charAt(i)))
        {
        map.set(t.charAt(i), map.get(t.charAt(i)) + 1)
        } else 
            {
                map.set(t.charAt(i), 1)
            }
    }
    
    let begin = 0, end = 0, counter = map.size, len = Number.MAX_VALUE, ans = '';
    
    // since end is starting at 0, we will loop while end is smaller than the length of the string to examime
    while(end < s.length)
    {
        // lets get the end char, which for the first iteration, is really the starting char in the string
        const endChar = s.charAt(end);
        
       // if the map has the char, lets decrement the count by 1. If the count is 0, we can decrement the overall counter 
       if (map.has(endChar)){
           map.set(endChar, map.get(endChar) - 1);
           if (map.get(endChar) === 0) counter --;
       }
        
        // slide the end character to the right
        end++;

        // if all characters have been viewed in the substring as many times as needed, continue
        while (counter === 0){
            // calculate new length, if smaller than previous, set new length and answer
            if (end - begin < len){
                len = end - begin;
                ans = s.substring(begin, end);
            }
            
            // start char sliding to the right. for first iteration will be str.charAt(0)
            let startChar = s.charAt(begin);
            
            // if this character is part of the map, set its count up one
            if (map.has(startChar)){
                map.set(startChar, map.get(startChar) + 1)
                // if the count of one of the characters is greater than one, set the counter up again.
                if (map.get(startChar) > 0) counter++;
                
            }
            
            // slide begin to the right
            begin++;
        }
        
    }
    
    return ans;
    
};