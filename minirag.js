javascript:function doStuff(){(function(ext){ext._shutdown=function(){};ext._getStatus=function(){return{status:2,msg:'Ready'};};var descriptor={blocks:[['r','%n to string','string','11001'],['r','%n to binary','binary','24'],['r','%n ^ %n','power'],['b','Is %n ≥ %n','testgreat','12','3'],['b','Is %n≤ %n','testless','3','12'],['r','%n th root of %n','root','2','8'],['r','If %b then return %s else %s','bool'],]};ext.string=function(num){var answer="foo";var binary=num;answer=parseInt(binary,2);return answer;};ext.binary=function(num){var x="foo";x=num;x=parseInt(x);x=x.toString(2);return x;};ext.power=function(n1,n2){var answer=Math.pow(n1,n2);return answer;};ext.testgreat=function(num1,num2){var answer="foo";if(num1>=num2){answer=true;}else{answer=false;}return answer;};ext.testless=function(num1,num2){var answer="foo";if(num1<=num2){answer=true;}else{answer=false;}return answer;};ext.root=function(num1,num2){var answer=1/num1;answer=Math.pow(num2,answer);return answer;};ext.bool=function(bool,tru,fals){var answer=bool;if(bool===true){return tru;}else{return fals;}};ScratchExtensions.register('Blocks - minirag',descriptor,ext);})({});}doStuff();
