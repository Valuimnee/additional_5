module.exports = function check(str, bracketsConfig) {
  // your solution
  var stack=new Array();
  var result = true;
  for(var i=0;i<str.length; i++){
    bracketsConfig.forEach(function(element) {
      if(str[i]==element[0]){
        if(element[0]==element[1]&&stack.length!=0){
          var p=stack.pop();
          if(p!=element[0]){
            stack.push(p);
            stack.push(str[i]);
          }
        }else{
          stack.push(str[i]);
        }
      }else if (str[i]==element[1]){
        if(stack.pop()!=element[0]){
          result= false;
        }
      }
    }, this);
    if(!result){
      return false;
    }
  }
  return stack.length==0;
}
