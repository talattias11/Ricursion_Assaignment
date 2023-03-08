//1
    var arrayStartswithA = [];
    var count = 0 ;
    function startswithA(array1) {
        if(array1[count].charAt(0) === 'a'){
            arrayStartswithA.push(array1[count]);
        }
        ++count;
        if(array1[count] === undefined)
            return arrayStartswithA;
        return startswithA(array1);
    }
    var arr = startswithA(['shalom','apple','baby','ambulance','astronomy','hotel']);
    console.log(arr);

//2
    var oddNumArray = [];
    var i = 0;
    function OddorEven(numArray) {
        if((numArray[i]%2 != 0) && (typeof numArray[i] === 'number'))
            oddNumArray.push(numArray[i]);
        if(numArray[i] === undefined)
            return oddNumArray;
        i++;
        return OddorEven(numArray);
    }
    var oddcheck = OddorEven([11,12,13,14,15,16,17,18,19,20]);
    console.log(oddcheck);

//challenge 1
    function alphabetSorting(wordsArray) {
        var newWordsArray = wordsArray.sort()
        return newWordsArray;
    }
    var alphabeticlly = alphabetSorting(['ballon','skaterboard','zebra','phone','door','arrow','calliflower'])
    console.log(alphabeticlly);


//challenge 2
    var upperCase = []
    var j = 0;
    function CapsLock(lowercaseArray) {
        if(lowercaseArray[j] === undefined)
            return upperCase;
        upperCase.push(lowercaseArray[j].toUpperCase());
        j++;
        return CapsLock(lowercaseArray);
    }
    var capslockTime = CapsLock(['ballon','skaterboard','zebra','phone','door','arrow','calliflower'])
    console.log(capslockTime);