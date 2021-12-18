"use strict"
{

  const canvas = document.querySelector("canvas")
  
  // 初級につき10点×3 
  // 中級につき15点×2
  // 上級につき20点×2
  
  const container = document.getElementById('container');
  const question = document.getElementById('question');
  const startbtn = document.getElementById("startbtn");
  const start = document.getElementById("start");
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const scoreboard = document.getElementById("scoreboard")
  const result = document.getElementById("result")
  
  const quizSet = [
    {q: '（初級：15点）アトラクション・タートルトークではあるキャラクターと会話することができます・ではそのキャラクターは次のうちどれ?', c: ['クラッシュ', 'ニモ', 'ドリー']},
    {q: '（初級：15点）タワーオブテラーは、ホテルハイタワー内を見学するという設定のアトラクションです。では、ホテルハイタワーの高さは次のうちどれ?', c: ['58m', '59m', '60m']},
    {q: '（中級：20点）アトラクション・トイストーリーマニアは海外のあるテーマパークをモチーフにしています。そのテーマパークとは次のうちどれ?', c: ['ルナパーク', 'エプコット', 'ヨーロッパ・パーク']},
    {q: '（中級：20点）アトラクション・エレクトリックレールウェイのスポンサー会社は次のうちどれ?', c: ['タカラトミー', '日本通運', 'ENEOS']},
    {q: '（上級：30点）アトラクション・タワーオブテラーに登場するハイタワー三世の執事の名前はどれ?', c: ['スメルディング', 'フランシス', 'セバスチャン']},
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
  
  
  