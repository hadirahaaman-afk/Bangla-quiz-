const subjects = [
  {
    id: "physics", name: "পদার্থবিজ্ঞান", icon: "⚛️", color: "#eaf1ff", textColor: "#2456c7",
    description: "গতি, বল ও শক্তির প্রাথমিক ধারণা",
    chapters: [{id:"motion", name:"গতি ও পরিমাপ", questions:[
      {q:"দ্রুতির SI একক কোনটি?", options:["মিটার","মিটার/সেকেন্ড","কিলোগ্রাম","সেকেন্ড"], answer:1, explanation:"দ্রুতি = দূরত্ব ÷ সময়, তাই SI একক মিটার/সেকেন্ড।"},
      {q:"কোনটি স্কেলার রাশি?", options:["সরণ","বেগ","ত্বরণ","দ্রুতি"], answer:3, explanation:"দ্রুতির শুধু মান আছে, নির্দিষ্ট দিক নেই; তাই এটি স্কেলার রাশি।"},
      {q:"কোনো বস্তু ১০ সেকেন্ডে ৫০ মিটার গেলে গড় দ্রুতি কত?", options:["২ m/s","৫ m/s","১০ m/s","৫০ m/s"], answer:1, explanation:"গড় দ্রুতি = ৫০ ÷ ১০ = ৫ m/s।"}
    ]}]
  },
  {
    id: "chemistry", name: "রসায়ন", icon: "🧪", color: "#e8fbf5", textColor: "#14805e",
    description: "পদার্থ, পরমাণু ও মৌলের পরিচয়",
    chapters: [{id:"atom", name:"পরমাণুর গঠন", questions:[
      {q:"একটি পরমাণুর নিউক্লিয়াসে সাধারণত কী থাকে?", options:["প্রোটন ও নিউট্রন","ইলেকট্রন ও প্রোটন","শুধু ইলেকট্রন","শুধু নিউট্রন"], answer:0, explanation:"সাধারণ পরমাণুর নিউক্লিয়াসে প্রোটন ও নিউট্রন থাকে; হাইড্রোজেন-১ এর নিউট্রন নেই।"},
      {q:"ইলেকট্রনের আধান কেমন?", options:["ধনাত্মক","ঋণাত্মক","আধানহীন","পরিবর্তনশীল"], answer:1, explanation:"ইলেকট্রনের বৈদ্যুতিক আধান ঋণাত্মক।"},
      {q:"মৌলের পারমাণবিক সংখ্যা কী নির্দেশ করে?", options:["নিউট্রনের সংখ্যা","প্রোটনের সংখ্যা","প্রোটন ও নিউট্রনের যোগফল","শক্তিস্তরের সংখ্যা"], answer:1, explanation:"পারমাণবিক সংখ্যা হলো নিউক্লিয়াসে প্রোটনের সংখ্যা।"}
    ]}]
  },
  {
    id: "biology", name: "জীববিজ্ঞান", icon: "🌿", color: "#eef8e8", textColor: "#4a842e",
    description: "কোষ, উদ্ভিদ ও জীবনের প্রক্রিয়া",
    chapters: [{id:"cell", name:"কোষ ও টিস্যু", questions:[
      {q:"কোষের শক্তিঘর বলা হয় কোন অঙ্গাণুকে?", options:["রাইবোজোম","গলজি বডি","মাইটোকন্ড্রিয়া","নিউক্লিয়াস"], answer:2, explanation:"মাইটোকন্ড্রিয়ায় কোষীয় শ্বসনের মাধ্যমে ATP তৈরি হয় বলে একে শক্তিঘর বলা হয়।"},
      {q:"উদ্ভিদ কোষের কোষপ্রাচীর প্রধানত কী দিয়ে গঠিত?", options:["প্রোটিন","সেলুলোজ","চর্বি","গ্লাইকোজেন"], answer:1, explanation:"উদ্ভিদ কোষের কোষপ্রাচীরের প্রধান উপাদান সেলুলোজ।"},
      {q:"সালোকসংশ্লেষণ প্রধানত কোথায় ঘটে?", options:["মাইটোকন্ড্রিয়া","ক্লোরোপ্লাস্ট","নিউক্লিয়াস","রাইবোজোম"], answer:1, explanation:"ক্লোরোপ্লাস্টে ক্লোরোফিল থাকে এবং সেখানে সালোকসংশ্লেষণ ঘটে।"}
    ]}]
  },
  {
    id: "math", name: "গণিত", icon: "📐", color: "#fff3df", textColor: "#a66b0b",
    description: "সংখ্যা, বীজগণিত ও জ্যামিতি",
    chapters: [{id:"algebra", name:"বীজগণিতের ভিত্তি", questions:[
      {q:"x + ৫ = ১২ হলে x-এর মান কত?", options:["৫","৬","৭","১৭"], answer:2, explanation:"x = ১২ − ৫ = ৭।"},
      {q:"(a + b)² এর সঠিক বিস্তৃতি কোনটি?", options:["a² + b²","a² + 2ab + b²","a² − 2ab + b²","2a + 2b"], answer:1, explanation:"(a+b)² = a² + 2ab + b²।"},
      {q:"ত্রিভুজের তিন কোণের সমষ্টি কত?", options:["৯০°","১৮০°","২৭০°","৩৬০°"], answer:1, explanation:"ইউক্লিডীয় সমতলে ত্রিভুজের অন্তঃকোণগুলোর সমষ্টি ১৮০°।"}
    ]}]
  },
  {
    id: "english", name: "ইংরেজি", icon: "🔤", color: "#f5eaff", textColor: "#8546b5",
    description: "Grammar ও vocabulary অনুশীলন",
    chapters: [{id:"grammar", name:"Basic Grammar", questions:[
      {q:"Choose the correct sentence.", options:["She go to school.","She goes to school.","She going to school.","She gone to school."], answer:1, explanation:"Present simple tense-এ third-person singular subject-এর সঙ্গে সাধারণত verb-এর শেষে -s/-es যুক্ত হয়।"},
      {q:"What is the plural of “child”?", options:["childs","childes","children","childrens"], answer:2, explanation:"“Child”-এর প্রচলিত plural হলো “children”।"},
      {q:"Choose the opposite of “ancient”.", options:["old","historic","modern","past"], answer:2, explanation:"“Modern” হলো “ancient”-এর বিপরীতার্থক শব্দ।"}
    ]}]
  },
  {
    id: "ict", name: "তথ্য ও যোগাযোগ প্রযুক্তি", icon: "💻", color: "#e5f8ff", textColor: "#08799a",
    description: "কম্পিউটার ও ডিজিটাল জগতের ধারণা",
    chapters: [{id:"computer", name:"কম্পিউটারের ভিত্তি", questions:[
      {q:"CPU-এর পূর্ণরূপ কী?", options:["Central Processing Unit","Computer Personal Unit","Central Program Utility","Control Processing User"], answer:0, explanation:"CPU-এর পূর্ণরূপ Central Processing Unit।"},
      {q:"নিচের কোনটি ইনপুট ডিভাইস?", options:["মনিটর","প্রিন্টার","কীবোর্ড","স্পিকার"], answer:2, explanation:"কীবোর্ড দিয়ে কম্পিউটারে তথ্য প্রবেশ করানো হয়।"},
      {q:"বাইনারি সংখ্যা পদ্ধতিতে কোন দুটি অঙ্ক ব্যবহৃত হয়?", options:["০ ও ১","১ ও ২","০ থেকে ৯","A ও B"], answer:0, explanation:"বাইনারি সংখ্যা পদ্ধতিতে ০ এবং ১ ব্যবহৃত হয়।"}
    ]}]
  }
];

const subjectGrid = document.getElementById("subjectGrid");
const backdrop = document.getElementById("quizBackdrop");
const quizContent = document.getElementById("quizContent");
const quizTitle = document.getElementById("quizTitle");
const quizSubject = document.getElementById("quizSubject");
let activeSubject = null, activeChapter = null, currentQuestion = 0, answers = [];

function renderSubjects() {
  subjectGrid.innerHTML = subjects.map(s => `
    <article class="subject-card">
      <div class="subject-icon" style="background:${s.color};color:${s.textColor}">${s.icon}</div>
      <h3>${s.name}</h3><p>${s.description}</p>
      <div class="subject-bottom"><span>${s.chapters.length}টি অধ্যায় · ${s.chapters.reduce((n,c)=>n+c.questions.length,0)}টি প্রশ্ন</span>
      <button type="button" data-subject="${s.id}">কুইজ দেখো →</button></div>
    </article>`).join("");
  subjectGrid.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => showChapters(btn.dataset.subject)));
}

function showChapters(subjectId) {
  activeSubject = subjects.find(s => s.id === subjectId);
  quizSubject.textContent = activeSubject.name;
  quizTitle.textContent = "একটি অধ্যায় বেছে নাও";
  quizContent.innerHTML = `<p style="color:var(--muted)">নমুনা প্রশ্ন দিয়ে নিজের প্রস্তুতি যাচাই করো।</p><div class="review-list">${
    activeSubject.chapters.map(c => `<article class="review-item"><h4>${c.name}</h4><p>${c.questions.length}টি বহুনির্বাচনি প্রশ্ন</p><button class="quiz-btn primary" type="button" data-chapter="${c.id}">পরীক্ষা শুরু →</button></article>`).join("")
  }</div>`;
  quizContent.querySelectorAll("button[data-chapter]").forEach(btn => btn.addEventListener("click", () => startQuiz(btn.dataset.chapter)));
  backdrop.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function startQuiz(chapterId) {
  activeChapter = activeSubject.chapters.find(c => c.id === chapterId);
  currentQuestion = 0;
  answers = Array(activeChapter.questions.length).fill(null);
  renderQuestion();
}

function renderQuestion() {
  const q = activeChapter.questions[currentQuestion];
  quizTitle.textContent = activeChapter.name;
  quizSubject.textContent = activeSubject.name;
  quizContent.innerHTML = `
    <div class="quiz-meta"><span>প্রশ্ন ${currentQuestion+1} / ${activeChapter.questions.length}</span><span>প্রতি প্রশ্নে ১ নম্বর</span></div>
    <div class="progress" style="margin-bottom:20px"><span style="width:${((currentQuestion+1)/activeChapter.questions.length)*100}%"></span></div>
    <div class="question-text">${q.q}</div>
    <div class="answers">${q.options.map((option,i)=>`
      <label class="answer ${answers[currentQuestion]===i?'selected':''}">
        <input type="radio" name="answer" value="${i}" ${answers[currentQuestion]===i?'checked':''}>
        <span>${["ক","খ","গ","ঘ"][i]}. ${option}</span>
      </label>`).join("")}</div>
    <div class="quiz-actions">
      <button class="quiz-btn" id="prevQuestion" ${currentQuestion===0?'disabled':''}>← আগের প্রশ্ন</button>
      <button class="quiz-btn primary" id="nextQuestion">${currentQuestion===activeChapter.questions.length-1?'পরীক্ষা জমা দাও':'পরের প্রশ্ন →'}</button>
    </div>`;
  quizContent.querySelectorAll('input[name="answer"]').forEach(input => input.addEventListener("change", () => {
    answers[currentQuestion] = Number(input.value);
    quizContent.querySelectorAll(".answer").forEach((el,i)=>el.classList.toggle("selected",i===answers[currentQuestion]));
  }));
  document.getElementById("prevQuestion").addEventListener("click",()=>{if(currentQuestion>0){currentQuestion--;renderQuestion();}});
  document.getElementById("nextQuestion").addEventListener("click",()=>{
    if(answers[currentQuestion]===null){
      const proceed = confirm("এই প্রশ্নের উত্তর বেছে নাওনি। তবুও কি এগোতে চাও?");
      if(!proceed)return;
    }
    if(currentQuestion<activeChapter.questions.length-1){currentQuestion++;renderQuestion();}
    else showResult();
  });
}

function showResult() {
  const qs = activeChapter.questions;
  const score = qs.reduce((n,q,i)=>n+(answers[i]===q.answer?1:0),0);
  const percent = Math.round(score/qs.length*100);
  const message = percent===100?"দারুণ! সব উত্তর সঠিক হয়েছে।":percent>=60?"ভালো চেষ্টা! আরেকবার অনুশীলন করো।":"হাল ছেড়ো না—উত্তরগুলো দেখে আবার চেষ্টা করো।";
  quizTitle.textContent = "তোমার ফলাফল";
  quizContent.innerHTML = `
    <div class="result-score"><strong>${score} / ${qs.length}</strong><span>${percent}% নম্বর · ${message}</span></div>
    <h3 style="margin:0 0 12px">উত্তর পর্যালোচনা</h3>
    <div class="review-list">${qs.map((q,i)=>`<article class="review-item">
      <h4>${i+1}. ${q.q}</h4>
      <p class="${answers[i]===q.answer?'correct':'incorrect'}">${answers[i]===q.answer?'✓ সঠিক উত্তর':'✕ তোমার উত্তর: '+(answers[i]===null?'উত্তর দাওনি':q.options[answers[i]])}</p>
      <p><strong>সঠিক উত্তর:</strong> ${["ক","খ","গ","ঘ"][q.answer]}. ${q.options[q.answer]}</p>
      <p style="color:var(--muted)">${q.explanation}</p>
    </article>`).join("")}</div>
    <div class="result-actions"><button class="quiz-btn primary" id="retryQuiz">আবার পরীক্ষা দাও</button><button class="quiz-btn" id="backHome">অন্য বিষয় বেছে নাও</button></div>`;
  document.getElementById("retryQuiz").addEventListener("click",()=>startQuiz(activeChapter.id));
  document.getElementById("backHome").addEventListener("click",closeModal);
}

function closeModal() {backdrop.classList.add("hidden");document.body.style.overflow="";}

document.getElementById("closeQuiz").addEventListener("click",closeModal);
backdrop.addEventListener("click",e=>{if(e.target===backdrop)closeModal();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!backdrop.classList.contains("hidden"))closeModal();});
renderSubjects();
