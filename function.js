let array=[1,2,3,4,5];
function double(array){
  for(i=0;i<array.lenght;i++){
    array[i]=array[i]*4;
    console.log(array[i])
  }
  return array;
}
double(array);