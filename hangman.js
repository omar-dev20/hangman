let root= document.documentElement;
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('#theme-toggle');
    const icon      = toggleBtn.querySelector('i');
    function updateIcon(isDark) {
        root.style.setProperty('--primary',              isDark ? '#53d5b5' : '#2aac8c');
        root.style.setProperty('--secondary',            isDark ? '#844c24' : '#dba37b');
        root.style.setProperty('--accent',               isDark ? '#c98c3b' : '#c48636');
        root.style.setProperty('--color',                isDark ? '#eee'    : '#333');
        root.style.setProperty('--border-bottom',        isDark ? '#333'    : '#0000001a');
        root.style.setProperty('--box-shadow',           isDark ? '0 0px 3px #eee' : '0 0 5px #333');
        root.style.setProperty('--background-color',     isDark ? '#180f10' : '#eee');
        root.style.setProperty('--sec-background-color', isDark ? '#333'    : 'white');
        icon.className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }

    const isDark = localStorage.getItem('theme') === 'dark';
    if (isDark) document.body.classList.add('dark-theme');
    updateIcon(isDark);

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const dark = document.body.classList.contains('dark-theme');
        updateIcon(dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    });
const elements = document.querySelectorAll('.load-hidden');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('load-show');
        }, index * 50);
    });
    const lettersContainer = document.querySelector('.letters');
    const fragment = document.createDocumentFragment();

    Array.from({length: 26}, (_, i) => String.fromCharCode(i + 97)).forEach(letter => {
        const el = document.createElement('span');
        el.textContent = letter.toLocaleLowerCase();
        el.classList.add('letter-box', 'load-hidden');
        fragment.appendChild(el);
    });

    lettersContainer.appendChild(fragment);

});
const words = {
  foods: [
    { word: "pizza", hint: "Italian dish\nطبق إيطالي" },
    { word: "burger", hint: "Sandwich with meat\nساندويتش باللحم" },
    { word: "pasta", hint: "Italian noodles\nمكرونة إيطالية" },
    { word: "rice", hint: "Staple grain\nحبوب أساسية" },
    { word: "chicken", hint: "Poultry meat\nلحم الدجاج" },
    { word: "beef", hint: "Cow meat\nلحم البقر" },
    { word: "fish", hint: "Sea food\nطعام بحري" },
    { word: "apple", hint: "Red or green fruit\nفاكهة حمراء أو خضراء" },
    { word: "banana", hint: "Yellow fruit\nفاكهة صفراء" },
    { word: "orange", hint: "Citrus fruit\nفاكهة حمضية" },
    { word: "grape", hint: "Small fruits in bunch\nعنب في عناقيد" },
    { word: "milk", hint: "White drink\nمشروب أبيض" },
    { word: "cheese", hint: "Dairy product\nمنتج ألبان" },
    { word: "bread", hint: "Baked food\nطعام مخبوز" },
    { word: "cake", hint: "Sweet dessert\nحلوى" },
    { word: "egg", hint: "Bird product\nمنتج من الطيور" },
    { word: "soup", hint: "Liquid food\nطعام سائل" },
    { word: "salad", hint: "Mixed vegetables\nخضروات مختلطة" },
    { word: "sandwich", hint: "Food between bread\nطعام بين الخبز" },
    { word: "juice", hint: "Fruit drink\nعصير فواكه" }
  ],

  animals: [
    { word: "lion", hint: "King of jungle\nملك الغابة" },
    { word: "tiger", hint: "Big striped cat\nقط مخطط كبير" },
    { word: "cat", hint: "Small pet animal\nحيوان أليف صغير" },
    { word: "dog", hint: "Loyal pet\nحيوان وفي" },
    { word: "horse", hint: "Fast riding animal\nحيوان للركوب" },
    { word: "elephant", hint: "Largest land animal\nأكبر حيوان بري" },
    { word: "giraffe", hint: "Long neck animal\nحيوان طويل الرقبة" },
    { word: "zebra", hint: "Black and white stripes\nأسود وأبيض مخطط" },
    { word: "monkey", hint: "Tree climber\nيتسلق الأشجار" },
    { word: "bear", hint: "Large wild animal\nحيوان بري كبير" },
    { word: "wolf", hint: "Wild dog-like animal\nيشبه الكلب البري" },
    { word: "fox", hint: "Clever wild animal\nحيوان ذكي" },
    { word: "rabbit", hint: "Small hopping animal\nحيوان يقفز" },
    { word: "frog", hint: "Amphibian jumps\nبرمائي يقفز" },
    { word: "snake", hint: "Legless reptile\nزاحف بلا أرجل" },
    { word: "shark", hint: "Sea predator\nمفترس بحري" },
    { word: "whale", hint: "Largest sea animal\nأكبر حيوان بحري" },
    { word: "dolphin", hint: "Smart sea animal\nحيوان بحري ذكي" },
    { word: "eagle", hint: "Strong bird\nطائر قوي" },
    { word: "penguin", hint: "Cold region bird\nطائر في المناطق الباردة" }
  ],

  footballers: [
    { word: "messi", hint: "Argentinian star\nالنجم الأرجنتيني" },
    { word: "ronaldo", hint: "CR7 from Portugal the goat\nالصاروخ البرتغالي" },
    { word: "kevin-de-bruyne", hint: "Belgian playmaker\nصانع الألعاب البلجيكي" },
    { word: "neymar", hint: "Brazilian skill master\nساحر السامبا" },
    { word: "erling-haaland", hint: "Norwegian striker\nالمهاجم النرويجي" },
    { word: "mbappe", hint: "French speed star\nالنجم الفرنسي" },
    { word: "toni-kroos", hint: "German midfield engine\nالمهندس الألماني" },
    { word: "benzema", hint: "French striker\nالمهاجم الفرنسي" },
    { word: "vinicius-jr", hint: "Real Madrid winger\nجناح ريال مدريد" },
    { word: "zidane", hint: "French legend\nالأسطورة زيزو" },
    { word: "luka-modric", hint: "Croatian maestro\nمايسترو كرواتيا" },
    { word: "pele", hint: "King of football\nملك كرة القدم" },
    { word: "van-dijk", hint: "Dutch defender\nالصخرة الهولندية" },
    { word: "maradona", hint: "Football icon\nأسطورة الأرجنتين" },
    { word: "harry-kane", hint: "English top scorer\nالهداف الإنجليزي" },
    { word: "buffon", hint: "Italian goalkeeper\nالأخطبوط الإيطالي" },
  ],

  countries: [
    { word: "egypt", hint: "Pyramids country\nبلد الأهرامات" },
    { word: "usa", hint: "United States\nالولايات المتحدة" },
    { word: "canada", hint: "North America country\nدولة بارده في أمريكا الشمالية" },
    { word: "germany", hint: "European country\nدولة أوروبية" },
    { word: "france", hint: "Eiffel Tower country\nبلد برج إيفل" },
    { word: "italy", hint: "Pizza country\nبلد البيتزا" },
    { word: "spain", hint: "A country famous for bullfighting\n دوله مشهوره بمصارعة الثيران" },
    { word: "brazil", hint: "Football country\nبلد كرة القدم" },
    { word: "argentina", hint: "South American country\nدولة في أمريكا الجنوبية" },
    { word: "mexico", hint: "Taco country\nبلد التاكو" },
    { word: "japan", hint: "Island technology country\nبلد التكنولوجيا" },
    { word: "india", hint: "Spices country\nبلد التوابل" },
    { word: "russia", hint: "Largest country\nاكبر دوله فى العالم"},
    { word: "australia", hint: "Island continent\nقارة جزيرة" },
    { word: "turkey", hint: "Bridge between continents\nجسر بين قارتين" },
    { word: "greece", hint: "Ancient civilization\nحضارة قديمة" },
    { word: "morocco", hint: "North African country\nدولة شمال أفريقيا" }
  ]
};
(function loadCustomWords() {
    let savedWords = JSON.parse(localStorage.getItem('customWords')) || [];
    savedWords.forEach(entry => {
        if (!words[entry.category]) words[entry.category] = [];
        let exists = words[entry.category].findIndex(w => w.word === entry.word.toLowerCase());
        if (exists === -1) words[entry.category].push({ word: entry.word.toLowerCase(), hint: entry.hint });
    });
});
let allKeys = Object.keys(words);
let timerInterval; 
let counterArray = []; 
let counterIndex = 0;
let randomKeyNum = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomKeyNum];
let randomProp = words[randomPropName][Math.floor(Math.random() * words[randomPropName].length)];
let randomWord = randomProp.word;
let randomHint = randomProp.hint;

let catagoreElement = document.querySelector('.category span');
catagoreElement.textContent = randomPropName; 
let allColorVars = [
    '--primary',
    '--secondary',
    '--accent',
];

let randomColorVar = allColorVars[Math.floor(Math.random() * allColorVars.length)];
catagoreElement.style.color = `var(${randomColorVar})`;
let failclose = document.createElement("button");
failclose.appendChild(document.createTextNode("X"));
failclose.style.cssText = "position:absolute; top:-10px; right:-10px; background:#9d0f19; color:white; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; font-weight:bold;";
function popfail() {
    let overlay = document.createElement("div");
    overlay.style.cssText = "position:fixed; inset:0; background:rgba(0, 0, 0, 0.6); z-index:9998; backdrop-filter:blur(5px);";
    new Audio('universfield-game-over-deep-male-voice-clip-352695.mp3').play()
    let popup = document.createElement("div");
    popup.classList.add('fail-popup');
    popup.style.cssText = "z-index:9999;font-size:20px; position:fixed;max-width:500px; top:50%; left:50%; transform:translate(-50%, -50%); backdrop-filter:blur(15px); background:rgba(255,255,255,0.1); padding:40px; text-align:center; border-radius:15px; color:var(--color); border:2px solid var(--accent);font-weight:bold;";
    let failH2 = document.createElement('h2');
    let failIcon1 = document.createElement('i');
    failIcon1.style.cssText = 'color:#9d0f19;';

    failIcon1.className = 'fa-solid fa-skull-crossbones';
    failH2.appendChild(failIcon1);
    failH2.appendChild(document.createTextNode(' Game Over! '));
    let failIcon2 = document.createElement('i');
    failIcon2.className = 'fa-solid fa-skull-crossbones';
    failIcon2.style.cssText = 'color:#9d0f19;';
    failH2.appendChild(failIcon2);
    popup.appendChild(failH2);
    let failP = document.createElement('p');
    failP.appendChild(document.createTextNode('The word was: '));
    let failStrong = document.createElement('strong');
    failStrong.style.cssText = 'color:var(--accent)';
    failStrong.appendChild(document.createTextNode(randomWord));
    failP.appendChild(failStrong);
    popup.appendChild(failP);
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    document.body.style.overflow = "hidden";
    popup.appendChild(failclose);
    function removeWin() {
        popup.remove();
        overlay.remove();
        document.body.style.overflow = "auto";
        location.reload();

    }
    overlay.addEventListener('click', removeWin);
    failclose.addEventListener('click', removeWin);
}

let input = document.createElement("div");
input.className = 'input-container';
input.style.cssText = `display: flex;
    display: flex;
    position: relative;
    border-radius: 15px;
    width: 500px;
    font-weight: bold;
    max-width: 100%;`;
    let userInput = document.createElement("input");
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('placeholder', 'your name');
    userInput.style.cssText = `
    border: 2px solid var(--primary);
    border-right: none;
    pointer-events: all;
    border-radius: 15px 0 0 15px;
    padding:20px;
    text-align:start;
    width: calc(100% - 130px);
    color: #333;
    
    ;
        `;
    input.appendChild(userInput);
    let submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.style.cssText =`    
    width: 130px;
    background-color: var(--primary);
    color:var(--color);
    padding: 10px 20px;
    border: 1px solid var(--primary);
    border-radius: 0 15px 15px 0;
    border-left: none;
    text-transform: uppercase;
    cursor: pointer;`;
    input.appendChild(submit);
function saveUser(user,time){
    let leaders = JSON.parse(localStorage.getItem('leaders')) || [];
    let result ={
       name:user.trim(),
        time:time
    }
    let userIndex = leaders.findIndex( user =>user.name === result.name);
    if(userIndex !== -1){
      if(result.time < leaders[userIndex].time){
        leaders[userIndex] = result;
      }
    }
    else{
      leaders.push(result);
    }
    leaders.sort((a,b) => a.time - b.time);
    leaders = leaders.slice(0,5);
    localStorage.setItem('leaders', JSON.stringify(leaders));

    }
let close = document.createElement("button");
close.appendChild(document.createTextNode("X"));
close.style.cssText = "position:absolute; top:-10px; right:-10px; background:#9d0f19; color:white; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; font-weight:bold;";
function createWinPop() {
    let overlay = document.createElement("div");
    overlay.style.cssText = "position:fixed; inset:0; background:rgba(0, 0, 0, 0.6); z-index:9998; backdrop-filter:blur(5px);";
    let winAudio = new Audio('mixkit-cheering-crowd-loud-whistle-610.mp3');
    winAudio.play();
    let popup = document.createElement("div");
    clearInterval(timerInterval);
    popup.className = 'win-popup';
    popup.style.cssText = "z-index:9999; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); backdrop-filter:blur(15px);width:500px;max-width: 90%; background:rgba(255,255,255,0.1); padding:40px; text-align:center; border-radius:15px; color:var(--color); border:1px solid var(--primary);";
    let winH2 = document.createElement('h2');
    let winIcon1 = document.createElement('i');
    winIcon1.className = 'fa-solid fa-trophy';
    winIcon1.style.cssText = 'color:var(--primary)';
    winH2.appendChild(winIcon1);
    winH2.appendChild(document.createTextNode(' You Win!'));
    let winIcon2 = document.createElement('i');
    winIcon2.className = 'fa-solid fa-trophy';
    winIcon2.style.cssText = 'color:var(--primary)';
    winH2.appendChild(winIcon2);
    popup.appendChild(winH2);
    let winP1 = document.createElement('p');
    winP1.appendChild(document.createTextNode('you get the word in:'));
    let winStrong1 = document.createElement('strong');
    winStrong1.style.cssText = 'color:var(--primary)';
    winStrong1.appendChild(document.createTextNode((counterIndex ? (60 - (60 - counterIndex)) : 0) + ' s'));
    winP1.appendChild(winStrong1);
    popup.appendChild(winP1);
    let winP2 = document.createElement('p');
    winP2.appendChild(document.createTextNode('The word was: '));
    let winStrong2 = document.createElement('strong');
    winStrong2.style.cssText = 'color:var(--primary)';
    winStrong2.appendChild(document.createTextNode(randomWord));
    winP2.appendChild(winStrong2);
    popup.appendChild(winP2);

 if(counterIndex){
       popup.appendChild(input);

 }
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    document.body.style.overflow = "hidden";
    popup.appendChild(close);
    function removeWin() {
        popup.remove();
        overlay.remove();
        document.body.style.overflow = "auto";
        location.reload();

    }
        submit.addEventListener("click", function () {
            saveUser(userInput.value,counterIndex);

    });
    overlay.addEventListener('click', removeWin);
    close.addEventListener('click', removeWin);
}
function startMyTimer(seconds) {
    let counter = document.querySelector('.count');
    clearInterval(timerInterval);
    let timeLeft = seconds;
    timerInterval = setInterval(() => {
        counterArray.push(timeLeft);
        timeLeft--;
        counterIndex++;
        if (counter) counter.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            popfail();
        }
    }, 1000);
}

function startGame(timer){
    let play = document.querySelector('.play')
    play.style.display = 'none';
    let letters = document.querySelector('.letters');
    letters.style.opacity = '1';
    let letterBoxes = document.querySelectorAll('.letter-box');
    letterBoxes.forEach((box) => {
        box.style.pointerEvents = 'all';
        box.classList.remove('load-hidden');
        box.classList.add('load-show');
    });
    let draw = document.querySelector('.the-draw');
    let children = Array.from(draw.children);
children.forEach((child, i) => {
    setTimeout(() => {
        child.classList.remove('load-show');
        child.classList.add('load-hidden');
    }, i * 100); 
})
let letterGuess = document.querySelector('.letters-guess');
let wrongatemps = 0;
let lettersAndspace = Array.from(randomWord);
lettersAndspace.forEach(letter => {
    let letterElement = document.createElement('span');
    if (letter === '-'|| letter === ' ' || letter === '_') {
        letterElement.className = 'with-space';
    } 
    letterGuess.appendChild(letterElement);
});
let pHint = document.createElement('p');
pHint.textContent = randomHint;
document.querySelector('.hint').appendChild(pHint); 
    const count = document.querySelector('.counter')
    if (timer) {
        startMyTimer(60);
            count.style.display = 'block';
    }
 document.addEventListener('click',(e)=>{
    let stautsGame = false;
    if(e.target.classList.contains('letter-box')){
     e.target.classList.add('clicked');
     if(e.target.style.pointerEvents === 'all'){
        e.target.style.pointerEvents = 'none';
     }
let theClickLetter = e.target.textContent.toLowerCase();
let theChosenWord = Array.from(randomWord.toLowerCase());
     let allGuessSpan = document.querySelectorAll('.letters-guess span');
    theChosenWord.forEach((letter,letterIndex)=>{
        if(theClickLetter === letter){
         stautsGame = true;
        allGuessSpan.forEach((span,spanIndex)=>{
          if(letterIndex === spanIndex){
           let text = document.createTextNode(letter)
           span.appendChild(text);
           span.style.cssText = 'color: var(--color);background-color: var(--primary);border-bottom:none;box-shadow: none;';
          }
        })
        }
     })
let guessSpan = document.querySelectorAll('.letters-guess span');
let isWin = Array.from(guessSpan).every(span => span.classList.contains('with-space') || span.textContent.trim() !== '');
if (isWin) {
    clearInterval(timerInterval);
    createWinPop();
}
if(stautsGame !== true){
  wrongatemps++;

 children[wrongatemps -1].classList.remove('load-hidden');
 children[wrongatemps -1].classList.add('load-show');
 if(wrongatemps >= 7){
    popfail();
 }
  }


    }
 })
}
let timer=document.querySelector('#timer');
timer.addEventListener('click',()=>{
    startGame(true);
})
let noTimer=document.querySelector('#no-timer');
noTimer.addEventListener('click',()=>{
    startGame(false);
})
let leaderclose = document.createElement("button");
leaderclose.appendChild(document.createTextNode("X"));
leaderclose.style.cssText = "position:absolute; top:-10px; right:-10px; background:#9d0f19; color:white; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; font-weight:bold;";
function leaderPOP() {
    let overlay = document.createElement("div");
    overlay.style.cssText = "position:fixed; inset:0; background:rgba(0, 0, 0, 0.6); z-index:9998; backdrop-filter:blur(5px);";

    let leaders = JSON.parse(localStorage.getItem('leaders')) || [];
    let popup = document.createElement("div");
    popup.className = 'leader-popup';
    popup.style.cssText = "z-index:9999; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); backdrop-filter:blur(15px); background:rgba(255,255,255,0.1); padding:40px; text-align:center; border-radius:15px; color:var(--color); border:1px solid var(--primary);";

let leaderTitle = document.createElement('h2');
leaderTitle.appendChild(document.createTextNode('Leaderboard'));
leaderTitle.style.cssText = "  font-size: clamp(1.688rem, 2vw + 1rem, 2.063rem); font-weight:bold; color:var(--color);";
let iconTitle = document.createElement('i');
iconTitle.className = 'fa-solid fa-crown';
iconTitle.style.cssText = "color:var(--primary);";
leaderTitle.appendChild(iconTitle);
popup.appendChild(leaderTitle);
    let ul = document.createElement('ul');
    ul.style.cssText = "list-style:none; padding:0; margin:0;font-weight:bold;";

    if (leaders.length === 0) {
      let not = document.createElement('li');
      not.style.cssText = 'padding:10px; color:var(--accent);font-size: 25px;';
      not.textContent = 'No records yet!';
      let note = document.createElement('p');
note.style.cssText = ` 
    color: var(--primary); 
    padding: 10px; 
    font-size: 18px; 
    font-weight: bold;
    border-radius: 5px; 
    margin: 10px 0;
    border-left: 5px solid var(--primary);
    text-align: center;
    font-weight: bold;
`;
let inNote = document.createElement('i');
inNote.className = 'fa-solid fa-circle-info';
inNote.style.cssText = 'color:var(--primary);';
note.appendChild(inNote);
note.appendChild(document.createTextNode(' Note: Records are only saved when playing with the Timer!'));    
popup.appendChild(note);
      ul.appendChild(not);
    } else {
                    let catagory = document.createElement('li');
            catagory.className = 'player-catagory';
            catagory.style.borderBottom = '2px solid var(--primary)';
            let userRank = document.createElement('span');
            userRank.textContent=`Rank`
            catagory.appendChild(userRank);
            let userName = document.createElement('span');
            userName.textContent=`Name`
            catagory.appendChild(userName);
            let userTime = document.createElement('span');
            userTime.textContent=`Time`
            catagory.appendChild(userTime);
            ul.appendChild(catagory);

            
        leaders.forEach((entry, index) => {
            let li = document.createElement('li');

            li.className = 'player-row';
            let icon = document.createElement('i');
            icon.className = 'fa-solid fa-crown';
            icon.style.cssText = " margin-left:10px;";
            li.appendChild(icon);
            let rank = document.createElement('span');
            rank.className = 'rank';
            rank.appendChild(document.createTextNode(index + 1));
            li.appendChild(rank);
            let name = document.createElement('span');
            name.className = 'name';
            name.appendChild(document.createTextNode(entry.name));
            li.appendChild(name);
            let time = document.createElement('span');
            time.className = 'time';
            time.appendChild(document.createTextNode(entry.time + 's'));
            li.appendChild(time);
            ul.appendChild(li);
if (index === 0) {
        icon.style.color = 'var(--primary)';
    } else if (index === 1) {
     icon.style.color = '#C0C0C0';
    } else if (index === 2) {
       icon.style.color = '#CD7F32';
    } else {
       icon.style.display = 'none';
    }
    li.appendChild(icon);
});
    }

    popup.appendChild(ul);
    popup.appendChild(leaderclose);

    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    document.body.style.overflow = "hidden";

    function removeLeader() {
        popup.remove();
        overlay.remove();
        document.body.style.overflow = "auto";
    }
    overlay.addEventListener('click', removeLeader);
    leaderclose.addEventListener('click', removeLeader);
}
function showIntro() {
    let overlay = document.createElement("div");
    overlay.style.cssText = "position:fixed; inset:0; background:rgba(0,0,0,0.40); z-index:10000; display:flex; align-items:center; justify-content:center;";

    let box = document.createElement("div");
    box.classList.add("box");
    let header = document.createElement('h2');
    header.textContent = 'Welcome!';
    header.style.cssText = 'margin-top:0; color:var(--primary);font-weight:bold;';
    box.appendChild(header);
    let p2 = document.createElement('p');
    p2.textContent = 'You must choose to play with a Timer or without to start.';
    p2.style.cssText = 'color:var(--color);font-weight:bold;font-size:1rem;';
    box.appendChild(p2);
    
    let p3 = document.createElement('p');
    p3.textContent = 'Note: Each wrong guess draws a part of the hangman. Don’t let the drawing finish!';
    p3.style.cssText = 'color:var(--primary); font-weight:bold; font-size:1rem; margin-top:10px;';
    box.appendChild(p3);
    
    let btn = document.createElement('button');
    btn.id = 'close-intro';
    btn.textContent = 'Start Game';
    btn.style.cssText = 'color:var(--color);background:var(--primary); border:none; padding:12px 25px; cursor:pointer; font-weight:bold; border-radius:5px; font-size:16px; margin-top:10px;';
    box.appendChild(btn);

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    let infoClose = document.getElementById("close-intro");
    infoClose.onclick = () => overlay.remove();
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
}
function showToast(message) {
    const toast = document.createElement('div');
    toast.innerText = message;

    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '14px',
        fontFamily: 'sans-serif',
        zIndex: '1000',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        transition: 'opacity 0.5s ease'
    });


    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}
let leaderBtn = document.querySelector('.btn-leader');
leaderBtn.addEventListener('click', leaderPOP);
let introBtn = document.querySelector('.btn-intro');
introBtn.addEventListener('click', showIntro);
    function styleInput(el) {
        el.style.cssText = `
            width: 100%; padding: 12px; margin: 10px 0;
            border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;
            background: rgba(255, 255, 255, 0.2); color: var(--color);
            outline: none;
        `;
    }
let btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click', function() {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.42);
        display: flex; align-items: center; justify-content: center; z-index: 2000;
    `;

    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.cssText = `
        backdrop-filter: blur(15px);
        padding: 20px; 
        width: 500px;
        max-width: 90%;
        text-align: center; 
        font-family: sans-serif;
        border-radius: 15px; 
        box-shadow: var(--box-shadow);
        background: rgba(255, 255, 255, 0.1);
    `;

    const title = document.createElement("h3");
    title.textContent = "Add New Word 📝";
    title.style.color = "var(--color)";
    modal.appendChild(title);

    const wordInput = document.createElement("input");
    wordInput.type = "text";
    wordInput.placeholder = "Word";
    styleInput(wordInput);
    modal.appendChild(wordInput);

    const catagoreInput = document.createElement('input');
    catagoreInput.type = 'text';
    catagoreInput.placeholder = 'Category';
    styleInput(catagoreInput);
    modal.appendChild(catagoreInput);

    const note = document.createElement("p");
    note.textContent = "⚠️ Note: Use \/n to separate English and Arabic hints.";
    note.style.cssText = 'font-size:18px;color:var(--accent);font-weight:bold;';
    modal.appendChild(note);

    const example = document.createElement("p");
    example.textContent = "Example: Big House  \/n بيت كبير";
    example.style.cssText = 'font-size:18px;font-weight:bold;color:var(--color)';
    modal.appendChild(example);

    const hintInput = document.createElement("textarea");
    hintInput.placeholder = "hint here...";
    styleInput(hintInput);
    hintInput.style.height = "80px";
    hintInput.style.resize = "none";
    hintValue = hintInput.value.trim();
    modal.appendChild(hintInput);
    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.classList.add('save-own')
    btnContainer.style.gap = "10px";

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save Word";
    saveBtn.style.cssText = "flex: 2; background: var(--primary); color: #fff; border: none; padding: 10px; border-radius: 5px; cursor: pointer; font-weight: bold;";
 
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.style.cssText = "flex: 1; background: var(--accent); color: #fff; border: none; padding: 10px; border-radius: 5px; cursor: pointer;";

    btnContainer.appendChild(saveBtn);
    btnContainer.appendChild(cancelBtn);
    modal.appendChild(btnContainer);

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    cancelBtn.onclick = () => overlay.remove();

    saveBtn.onclick = () => {
        let word = wordInput.value.trim().toUpperCase();
        let category = catagoreInput.value.trim().toLowerCase();
        let hint = hintInput.value.trim();

        [wordInput, catagoreInput, hintInput].forEach(el => {
            el.classList.remove("co-wrong");
        });

        const wordRegex = /^[A-Z]+$/;
        if (!wordRegex.test(word)) {
            showToast("Word must contain English letters only!");
            wordInput.classList.add("wrong");
            return;
        }

        if (!category) {
            showToast("Please enter a category!");
            catagoreInput.classList.add("wrong");
            return;
        }

        const hasEnglish = /[A-Za-z]/.test(hint);
        const hasArabic = /[\u0600-\u06FF]/.test(hint);

        if (!hasEnglish && !hasArabic) {
            showToast("Hint must contain at least English or Arabic!");
            hintInput.style.borderColor = "red";
            return;
        }

        if (hasEnglish && hasArabic && !hint.includes("\n")) {
            showToast("Separate English and Arabic hints with a new line!");
            hintInput.style.borderColor = "red";
            return;
        }

        let processedHint = hint.replace(/\\n/g, "\n");

        if (!words[category]) {
            words[category] = [];
        }
        let existsInWords = words[category].findIndex(entry => entry.word === word.toLowerCase());
        if (existsInWords !== -1) {
            words[category][existsInWords].hint = processedHint;
        } else {
            words[category].push({ word: word.toLowerCase(), hint: processedHint });
        }

        const MAX_WORDS = 2000;
        let savedWords = JSON.parse(localStorage.getItem('customWords')) || [];
        let existingIndex = savedWords.findIndex(entry => entry.word === word && entry.category === category);
        if (existingIndex !== -1) {
            savedWords[existingIndex] = { word: word, hint: processedHint, category: category };
        } else {
            if (savedWords.length >= MAX_WORDS) {
                savedWords.shift();
            }
            savedWords.push({ word: word, hint: processedHint, category: category });
        }

        localStorage.setItem('customWords', JSON.stringify(savedWords));

        showToast(`Success: "${word.toLowerCase()}" added to "${category}"! ✅`);
        overlay.remove();
    };

});