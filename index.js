var readlineSync = require('readline-sync');
var chalk = require('chalk')
var score = 0;
function play(question,answer){
  var ans = readlineSync.question(question);
  if(ans == answer){
    console.log(chalk.green("yayaya!!! correct :)"));
    score = score+1;
    console.log("your score is: "+score);
    console.log("------------------------")
  }
  else{
    console.log(chalk.red("wrong :("));
    
    console.log("your score is: "+score);
    console.log("correct answer was "+answer);
    console.log("-------------------------")
  }
}

const questions=[
{  question:"1.Where do i live?   a)Chandigarh  b)Delhi c)Shimla -->",
     answer: "b"
},
{
  question:"  2.How much CGPA i got in semester 1?  a)9.2  b)8.5  c)9.18 -->",
  answer: "c"
},
 {
   question: "3.How much CGPA i got in semester 2? a)7.89  b)9.75  c)9.12 -->",
   answer: "b"
 },
 {
   question:"  4.Which is my favourite dish?  a)momos   b)pizza   c)pasta -->",
   answer: "a"
 },
 {
   question:"5. My favourite place?  a.Delhi b.Mumbai c.Kolkata -->",
   answer:"a"
 },{
   question:" 6.Which phone do i use ?  a.samsung m21  b.redmi note  c.iphone -->",
 answer: "a"
 },{
   question:" 7.Which place i like to visit most?  a.hill stations  b.beaches  c.planes --> ",
 answer: "a"

 },
 {
   question:" 8.Best car?  a.Audi b.Lamborghini  c.Tesla -->",

   answer: "c"
 },{
   question:" 9.Dream Company?  a.Amazon b.Google c.apple -->",
 answer: "c"
 },{
   question :" 10.When is my Birthday?  a.20 March b.22 March  c.24 March -->",
   answer:"b"
 }
]
    console.log("How well you know Meetul ");
    console.log("RULE: You have to press a ,b, c only for the answer")
    var input = readlineSync.question("Press s to start the quiz and enter(Use enter after every question)");
    if(input=="s"){
    for(var i=0;i<questions.length;i++){
        var currentquest = questions[i];
        var solution = play(currentquest.question,currentquest.answer);
    }
    console.log(chalk.yellowBright("-----------------------------------------"))
console.log(chalk.cyanBright("CONGRATULATIONS! you have completed the quiz your score is: "+score+" / 10" ));
    
    }


