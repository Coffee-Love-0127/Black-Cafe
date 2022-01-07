"use strict"
{

  const canvas = document.querySelector("canvas")
  
  
  const container = document.getElementById('container');
  const question = document.getElementById('question');
  const startbtn = document.getElementById("startbtn");
  const start = document.getElementById("start");
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const scoreboard = document.getElementById("scoreboard")
  const result = document.getElementById("result")
  
  const quizSet = [
    {q: '（初級：15点）トゥーンタウンには2つの噴水があります。1つ目はロジャーラビットの噴水。ではもう一つは誰の噴水でしょう?', c: ['ミッキーマウス', 'ミニーマウス', 'ドナルドダック']},
    {q: '（初級：15点）トゥーンタウンには決して開けることができない金庫があります。ではその金庫の特徴は次のうちどれでしょう?', c: ['宙吊りにされている', '鍵が12重ロック', '透明で見えない']},
    {q: '（中級：20点）トゥーンタウンには特別なマンホールが設置されています。ではそのマンホールの特徴は次のうちどれでしょう?', c: ['踏むと声が聞こえる', '水が噴き出る', '一定時間で開く']},
    {q: '（中級：20点）ディズニーには多くの隠れミッキーがあります。トゥーンタウンにはディズニー内で最も小さい全身像の隠れミッキーがあります。ではその隠れミッキーはどこに隠れているでしょう?', c: ['ドアの鍵穴', 'マンホール','飛び散ったペンキ']},
    {q: '（上級：30点）アトラクション『ロジャーラビットのカートゥーンスピン』の待機列には、『ZPD2DA』と書かれたプレートがあります。では、『ZPD2DA』が意味しているアトラクションは次のうちどれでしょう?', c: ['スプラッシュマウンテン', 'ビッグサンダーマウンテン', 'スペースマウンテン']},
  ];
  
  
  let currentNum = 0;
  let isAnswered;
  let score = 0
  
  
  
  
  container.classList.add("hidden")
  canvas.classList.add("hidden")
  
  
  startbtn.addEventListener("click",() => {
    container.classList.remove("hidden")
    canvas.classList.remove("hidden")
    start.classList.add("hidden")
  })
  
  
  
  
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }
  
  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;
    
    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      
      if(currentNum === -1){
        score = score + 0
      }else if((currentNum >= 0) && (currentNum <= 1)){
        score = score + 15
      }else if((currentNum >= 2) && (currentNum <= 3)){
        score = score + 20
      }else{
        score = score + 30
      }
      
    } else {
      li.classList.add('wrong');
    }
    btn.classList.remove('disabled');
  }
  
  
  function setQuiz() {
    isAnswered = false;
    question.textContent = quizSet[currentNum].q;
    
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);}
      
      const shuffledChoices = shuffle([...quizSet[currentNum].c]);
      shuffledChoices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => {
          checkAnswer(li);
        });
        choices.appendChild(li);
      });
      
      if(currentNum === quizSet.length - 1){
        btn.textContent = "結果発表"
      }
    }
    
    setQuiz();
    
    btn.addEventListener('click', () => {
      if (btn.classList.contains('disabled')) {
        return;
      }
      btn.classList.add('disabled');
      
      if (currentNum === quizSet.length - 1) {
        currentNum++
        makemark()
        scoreboard.textContent = (`Score: ${score} / 100`);
        result.classList.remove("animation")
        
      } else {
        currentNum++;
        makemark()
        setQuiz();
      }
    });
    
    
    
    
    function draw(){
      if(typeof canvas.getContext === "undefined"){return}
      const ctx = canvas.getContext("2d")
  
      const canvas_WIDTH = 400
      const canvas_HEIDHT = 20
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = canvas_WIDTH * dpr
      canvas.height = canvas_HEIDHT * dpr
      ctx.scale(dpr, dpr)
  
      canvas.style.width = canvas_WIDTH + "px"
      canvas.style.height = canvas_HEIDHT + "px"
      
  
      ctx.fillStyle = "white"
      ctx.strokeStyle = "white"
      ctx.fillRect(52, 3, 280, 7)
      ctx.lineWidth = 4
      ctx.strokeRect(52, 3, 280, 7)
  
  
      ctx.font = "normal 18px Verdana"
      ctx.fillText("0",24,13 )
      ctx.fillText("5",350,13 )
  
    }
    draw()
  
  
    function makemark(){
      if(typeof canvas.getContext === "undefined"){return}
      const ctx = canvas.getContext("2d")
      ctx.fillStyle = "#FF66FF"
      ctx.fillRect(52,3,`${(currentNum) * 56}`, 7)
    }
    makemark()
    
  }
  
  
  