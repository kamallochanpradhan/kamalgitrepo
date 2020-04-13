class MyConsole {
          constructor() {
            this.MyArray = [];
          }
    
          log(argument) {
              this.MyArray.push(argument);
              console.log(argument);
          }
    
           history(varParam) {
               if(varParam === undefined){
                   this.MyArray.forEach((history) => {
                       console.log(JSON.stringify(history));
                   });
               }else{
                   for(let i = 1; i<= varParam; ++i){
                         console.log(this.MyArray[i-1]);
                   }
               }
             
           }
        clearHistory(){
            this.MyArray = [];
            console.log(true);
        }
        }

    

myConsole = new MyConsole();
myConsole.log(456);
myConsole.log('kamal');
myConsole.log({name: 'xcd'});
myConsole.history(5);
myConsole.history();
myConsole.clearHistory();
myConsole.history();