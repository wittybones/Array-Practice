const createIntersectedArray=function(array1,array2){
  let intersectedArray=[];
  for (element1 of array1);
    for (element2 of array2);
      if(element1==element2 && !intersectedArray.includes(element1)){
        intersectedArray.push(element1);
      }
  return intersectedArray;
}
exports.createIntersectedArray=createIntersectedArray;

const doPartition=function(array,number){
  let partitionedArray=[[],[]];
  for (let index=0;index<array.length;index++){
    partitionedArray[1].push(array[index]);
    if(array[index]<number){
      partitionedArray[0].push(array[index]);
      partitionedArray[1].pop(array[index]);
    }
  }
  return partitionedArray;
}
exports.arrayPartition=doPartition;

const rotateArray=function(array,number){
  let rotatedArray=[];
  for (let index=number;index<array.length;index++){
    rotatedArray.push(array[index])
  }
  for (let index1=0;index1<number;index1++){
    rotatedArray.push(array[index1])
  }
  return rotatedArray;
}
exports.rotateArray=rotateArray;

const isSubsetOf = function(array,isSubsetArray){
  let count=0;
  for(element of isSubsetArray){
    if(array.includes(element)){
      count++;
    }
      if(count==isSubsetArray.length){
        return true;
    }
  }
  return false;
}
exports.isSubsetArray=isSubsetOf;

const zippedArray=function(array1,array2){
  let shortLength=Math.min(array1.length,array2.length)
  let zippedArray=[];
  for (let index=0;index<shortLength;index++){
      zippedArray[index]=[array1[index],array2[index]];
  }
  return zippedArray;
}
exports.arrayZip=zippedArray;

const sumOfArrayNumbers = function(array){
  let sum=0;
  for (let index=0;index<array.length;index++){
    sum+=array[index];
  }
  return sum;
}

const averageOfElements = function(array){
  let numbersCount=array.length;
  sum = sumOfArrayNumbers(array);
  answer=sum/numbersCount;
  return answer;
}
exports.average=averageOfArrayElements;

const differentiateArrays = function(array1,array2){
  let differenceArray=[];
  for (let index=0;index<array1.length;index++){
      if(!array2.includes(array1[index])){
        differenceArray.push(array1[index]);
      }
  }
   return differenceArray;
}
exports.differenceOfArray = differentiateArrays;

const extractDigits=function(number){
  let numberString=''+number;
  let index=0;
  array=numberString.split("");
  while(index<array.length){
  for (number of array){
    array[index]=parseInt(number);
    index++;
  }
}
    return array;
}
exports.extractDigits=extractDigits;

const countEvenNumbers=function(array){
  let number=0;
  for (let index=0;index<array.length;index++){
    if ((array[index])% 2 == 0){
      number++;
    }
  }
  return number;
}
exports.evenNumberCount=countEvenNumbers;

const findFirstOccurence=function(array,givenNumber){
  let firstOccurence;
  let number=0;
  let index=0;
  do{ number=array[index]
    firstOccurence=index+1;
    index++;
  }while(number!=givenNumber)
  return firstOccurence;
}
exports.findFirstOccurence=findFirstOccurence;

const countAboveThreshHold=function(array,threshHold){
  let numbersAbove=0;
  for (let index=0;index<array.length;index++){
    if (array[index]>threshHold){
      numbersAbove++;
    }
  }
  return numbersAbove;
}
exports.numbersAboveThreshHold=countAboveThreshHold;

const findGreatestNumber=function(array){
  let  greatestNumber=array[0];
  for (let index=1;index<array.length;index++){
    if ((array[index])>+greatestNumber){
      greatestNumber=array[index];
    }
  }
  return greatestNumber;
}
exports.greatestNumber=findGreatestNumber;

const checkAscending=function(array){
  let isAscending=true;
  for (let index=0;index<array.length;index++){
    if(array[index]>array[index+1]){
      isAscending=false;
    }
  }
  return isAscending;
}
exports.checkAscending=checkAscending;

const checkDecending=function(array){
  let isDecending=true;
  for (let index=0;index<array.length;index++){
    if(array[index+1]>array[index]){
      isDecending=false;
    }
  }
  return isDecending;
}
exports.checkDecending=checkDecending;

const countElementLength=function(array){
  let lengthArray=[];
  let index=0;
  while(index<array.length){
    lengthArray[index] = array[index].length;
    index++;
  }
  return lengthArray;
}
exports.lengthOfElements=countElementLength;

const countBelowThreshHold=function(array,threshHold){
  let numbersBelow=0;
  for (let index=0;index<array.length;index++){
    if ((array[index])<threshHold){
      numbersBelow++;
    }
  }
  return numbersBelow;
}
exports.numbersBelowThreshHold=countBelowThreshHold;

const findLowestNumber=function(array){
  let lowestNumber=array[0];
  for (let index=1;index<array.length;index++){
    if (array[index]<lowestNumber){
      lowestNumber = array[index];
    }
  }
  return lowestNumber;
}
exports.lowestNumberInArray=findLowestNumber;

const countOddNumbers=function(array){
  let number=0;
  for (let index=0;index<array.length;index++){
    if ((array[index])% 2 != 0){
      number++;
    }
  }
  return number;
}
exports.oddNumbersCount=countOddNumbers;

const reverseArray = function(array){
  let reversedArray = [];
  let number = 0;
  for (let index=array.length-1 ; index>=0 ; index--){
    reversedArray[number] = array[index];
    number++;
  }
  return reversedArray;
}
exports.reverseArray=reverseArray;

const reverseFibonacciSeries=function(limit){
  let previousTerm=0;
  let lastSecondTerm=1;
  let currentTerm=0;
  let reverseFibonacci =[];
  reverseFibonacci[limit-1]=0;
  do{
    currentTerm=previousTerm+lastSecondTerm;
    lastSecondTerm=previousTerm;
    previousTerm=currentTerm;
    reverseFibonacci[limit-2]=currentTerm;
    limit--;
  }
  while(limit-1>0)
  return reverseFibonacci;
}

exports.reverseFibonacciSeries=reverseFibonacciSeries;

const reverseSeries = function(array){
  let reversedArray = [];
  let number = 0;
  for (let index=array.length-1 ; index>=0 ; index--){
    reversedArray[number] = array[index];
    number++;
  }
  return reversedArray;
}
exports.reverseSeries=reverseSeries;

const alternateElement=function(array){
  let alternateElementArray = [];
  let number = 0;
  for (let index=0 ; index<array.length ; index+=2 ){
    alternateElementArray[number] = array[index];
    number++;
  }
  return alternateElementArray;
}
exports.alternateElement=alternateElement;

const extractEvenNumbers=function(array){
  let evenNumbers=[];
  for (let index=0;index<array.length;index++){
    if ((array[index])% 2 == 0){
      evenNumbers.push(array[index]);
    }
  }
  return evenNumbers;
}
exports.evenNumbersInArray=extractEvenNumbers;

const extractOddNumbers=function(array){
  let oddNumbers=[];
  for (let index=0;index<array.length;index++){
    if ((array[index])% 2 != 0){
      oddNumbers.push(array[index]);
    }
  }
  return oddNumbers;
}
exports.oddNumbersInArray=extractOddNumbers;

const sumOfArrayElements = function(array){
  let sum = 0;
  for (let index = 0;index < array.length; index++){
    sum += array[index];
  }
  return sum;
}
exports.sumOfArrayElements=sumOfArrayElements;

const unionOfArray=function(array1,array2){
  let unionArray=[];
  unionArray=array1.concat(array2);
  return filterUniqueElements(unionArray);
}
exports.unionOfArray=unionOfArray;

const filterUniqueElements=function(array){
  let uniqueArray=[];
  for (element of array){
    if(!uniqueArray.includes(element)){
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}
exports.filterUniqueElements=filterUniqueElements;
