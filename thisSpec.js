// TESTING FUNCTION SUMEVENARGUMENTS

describe("sumEvenArguments", function(){
    it ("returns the sum of the even arguments", function(){
        expect(sumEvenArguments(1,2,3,4)).toEqual(6)
        expect(sumEvenArguments(1,2,6)).toEqual(8)
        expect(sumEvenArguments(1,2)).toEqual(2)
         })
   
    })
    
    
//TESTING FUNCTION ARRAYFROM

    describe("arrayFrom", function(){
    it("converts values passed into an array", function(){
        expect(arrayFrom(1,2,3,4,5,6)).toEqual([1,2,3,4,5,6])
    })
         
    }) 

// TESTING FUNCTION INVOKEMAX
    describe("invokeMax", function(){
    function add(a,b){
        return a+b
    }
    it ("returns a function that when called increments a counter", function(){
     
    var addOnlyThreeTimes = invokeMax(add,3);

    expect(addOnlyThreeTimes(1,2)).toEqual(3);
    expect(addOnlyThreeTimes(1,2)).toEqual(3);
    expect(addOnlyThreeTimes(1,2)).toEqual(3);
    expect(addOnlyThreeTimes(1,2)).toEqual("Maxed Out!");

     })
    });