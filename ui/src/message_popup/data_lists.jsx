export const allStudents = [
  { 
    id: 1,
    name: `Kevin`,
    grade: `7th grade`,
    gender: `male`,
    race: `Hispanic`,
    behavior: `Disruptive in class`,
    ell: null,
    learningDisabilities: null,
    academicPerformance: `Grades are C/D and borderline failing. Failed science the last two semesters. Reading and writing is at the 5th grade level. Arrives late to class most of the time.`,
    interests: null,
    familyBackground: null,
    ses: null,
  },
  {
    id: 2,
    name: `Floyd`,
    grade: `7th grade`,
    gender: `male`,
    race: `Caucasian`,
    behavior: `Attendance issues`,
    ell: null,
    learningDisabilities: `ADHD`,
    academicPerformance: null,
    interests: `Wants to be a firefighter`,
    familyBackground: `Divorced parents, younger brother`,
    ses: `Free and reduced lunch`
  },
  {
    id: 3,
    name: `Maia`,
    grade: `7th grade`,
    gender: `female`,
    race: `Caucasian`,
    behavior: `Discipline report`,
    ell: null,
    learningDisabilities: null,
    academicPerformance: null,
    interests: `In theater and loves art`,
    familyBackground: `Single mom, two olders sisters`,
    ses: null
  },
  { 
    id: 4, 
    name: `Hayin`,
    grade: `7th grade`,
    gender: `female`,
    race: `Korean`,
    behavior: null,
    ell: null,
    learningDisabilities: null,
    academicPerformance: null,
    interests: `Plays the flute, very involved in church, loves coding`,
    familyBackground: `1st generation parents, twin sister`,
    ses: `Free and reduced lunch`
    
  },
  {
    id: 5,
    name: `Mike`,
    grade: `7th grade`,
    gender: `male`,
    race: `African American`,
    behavior: null,
    ell: null,
    learningDisabilities: null,
    academicPerformance: null,
    interests: `Plays in a band, sings in the school chorus`,
    familyBackground: `1 older brother`,
    ses: null,
  },
  {
    id: 6,
    name: `Jasmine`,
    grade: `7th grade`,
    gender: `female`,
    race: `African American`,
    behavior: `Quiet`,
    ell: null,
    learningDisabilities: null,
    academicPerformance: null,
    interests: `Plays tennis and soccer`,
    familyBackground: `Divorced parents, only child`,
    ses: `Free and reduced lunch`
  },
  {
    id: 7,
    name: `Miquel`,
    grade: `7th grade`,
    gender: `male`,
    race: `Latino`,
    behavior: `Attendance issues`,
    ell: `Yes, Spanish is native language`,
    learningDisabilities: null,
    academicPerformance: null,
    interests: `Has an after school job`,
    familyBackground: `3 younger siblings`,
    ses: `Free and reduced lunch`
  },
  {
    id: 8,
    name: `Ada`,
    grade: `7th grade`,
    gender: `female`,
    race: `Haitian`,
    behavior: null,
    ell: `Yes, Haitian Creole is native language`,
    learningDisabilities: `Auditory disability`,
    academicPerformance: null,
    interests: `High-achiever, teacher's pet. Wants to be a doctor, is in yearbook`,
    familyBackground: `Aunt is guardian`,
    ses: null
  },
  {
    id: 9,
    name: `Steve`,
    grade: `7th grade`,
    gender: `male`,
    race: `Caucasian`,
    behavior: `Often tired in class`,
    ell: null,
    learningDisabilities: null,
    academicPerformance: null,
    interests: `Prefers ELA over math and science. Plays drums at home with his family. Has an after school job`,
    familyBackground: `Younger sister`,
    ses: null
  },
  { 
    id: 10, 
    name: `Sasha`,
    grade: `7th grade`,
    gender: `female`,
    race: `African American`
  }
];

export const allQuestions = [
  { 
    studentId: 4, 
    text: `At the conclusion of your lesson plan for this challenge, you seed a group discussion by asking "What are you curious about related to photosynthesis?"  Hayin says "Why are plants green?"  What do you do?`,
    examples: [
      `"We spent some time already studying that question, is there something else you're curious about, or how can you take that question to the next level?"`,
      `"Oh, are all plants green?"`,
      `"Okay, what kind of experiment would help you learn about that? Or how could you phrase it as something you could test?"`,
      `"That is a great question. What do you think? Can anyone else add to Hayin's"`
    ],
    nonExamples: [
      `"That's not a good question."`,
      `"That's not a well-formed enough hypothesis, in order for it to be testable you need independent variables."`,
      `"Well, most plants are green because of chloroplasts in their leaves that have a green pigment..."`,
      `"We already talked about that question. Why don't you look for the answer on the internet. Any other things that folks are curious about?"`
    ]
  },  
  {
    studentId: 10, 
    text: `Imagine a new student, Sasha, joins your classroom during the lesson plan you developed for this challenge.  As part of helping her feel comfortable, you give her a quick overview of what's happening.  She asks "what is photosynthesis again?"  How can you give a brief direct answer to her question?`,
    examples: [
      `"Photosynthesis is the process where plants take in sunlight and carbon dioxide from the air, and produce sugar they can use and breathe out oxygen." [Candidate might use intonation or guestures]`,
      `"Maia, this is Sasha. Sasha, this is Maia. Maia, will you take a couple minutes to help Sasha learn about photosynthesis. If you two have any questions, call me back over."`,
      `"What have you heard about photosynthesis before in your last school? Let's build on what you remember."`,
      `"Ok, what did you have for lunch? So, french fries come from what? How did that potato grow?"`
    ],
    nonExamples:[
      `[A ten minute response.]`,
      `"It's a biology concept."`,
      `"Take out the textbook from under your desk and read pages 55-60."`
    ]
  },
  { 
    studentId: 2, 
    text: `In the context of the lesson plan you developed for this challenge, Floyd says "why are we even doing this?"  Respond in way that engages his natural curiosity and tendency towards asking questions`,
    examples: [
      `"Well, imagine what would happen if there was no sunlight."`,
      `"If we'll all going to live on Mars by the time you're an adult, we're going to have to figure out how plants can grow up there."`,
      `"Take a breath. What are you breathing? Where do you think it came from?"`,
      `[Take what you know about Floyd...he wants to be a firefighter] "What does fire need to burn? Let's talk about then where that oxygen comes from."`
    ],
    nonExamples:[
      `"These are important skills for college."`,
      `"It's part of the MCAS, so you need to do it to graduate."`,
      `"Because."`
    ]
  },
  {
    studentId: 8,
    text: `Imagine in the context of the lesson plan you developed for this challenge, there is an activity where students are coming up with questions to investigate.  Ada says "How many questions should I write and what do you want me to include in them?"  Respond in a way that draws out the student's curiosity and pushes them towards asking questions that are meaningful to them.`,
    examples: [
      `"I want you to ask the kinds of questions you think are meaningful, not the ones I think are meaningful."`,
      `"Well, you have to come up with your own questions that matter to you.  I'll share a question I think is interesting: Plants can get hurt and lose leaves and branches and they grow right back.  That's different than people - you can't break off an arm and have it grow right back or we wouldn't need doctors.  That's something I'm curious about, so you can't use that question, but what else are you curious about?"`,
      `"Let's step back a second. What are you curious about after seeing the demonstration? What are you wondering? Ok, then let's work on turning that into a question that you can answer with an experiment."`,
      `"Tell me one question that you are burning know the answer to."`
    ],
    nonExamples:[
      `"To get an A, make three questions and include an IV, DV in each one."`,
      `"At least 2 questions focused on how you could collect the oxygen made by a plant."`
    ]
  },
  {
    studentId: 10,
    text: `Imagine a new student, Sasha, joins your classroom during the lesson plan you developed for this challenge.  As part of helping her feel comfortable, you pull her aside and give her a quick overview of what's happening at the beginning of the class.  She interrupts and asks, "I do better with visuals, can you draw me a picture of photosynthesis?"  What could you quickly sketch to directly answer to her question?`,
    examples: [
      `[Insert simple drawings here]`
    ],
    nonExamples:[
      `"Go look in the textbook." (This is fine, but not answering the pop-up question.)`,
      `[Insert very complex drawing here]`
    ]
  },
  {
    studentId: 3,
    text: `Imagine in the context of the lesson plan you developed for this challenge, you pause and ask the whole class if they have anything they want to check their understanding on or clarify.  Maia asks "How can plants be breathing, you don't see them inhaling and exhaling, and you don't see their breath in the cold?"`,
    examples: [
      `"Well, is there a difference in scale?  Think of everything that's happening on your skin, but you can't see individual bacteria without a microscope."`,
      `"Great question. How can set up an experiment to test out if plants really breathe?"`,
      `"Great question. Everyone take a minute and write down how we might know that plants breathe?"`,
    ],
    nonExamples:[
      `"Well, plants have stomata that open and close to take in oxygen and release carbon dioxide just like the stomata open and close to take in carbon dioxide and release oxygen."`
    ]
  },
  {
    studentId: 5,
    text: `Imagine in the context of the lesson plan you developed for this challenge, you provide a summarizing explanation of photosynthesis to the whole class.  Mike asks, "I'm still a little confused, can you explain it again in a different way?"`,
    examples: [
      `"Plants need to breathe and eat just like we do, and like all living things do.  Photosynthesis is like the process of you digesting your food, and your body giving you energy from it."`,
      `"OK, everyone turn to a partner. Work together to come up with your own short explanation of photosynthesis. Draw or write explanation on your small whiteboard. Everyone will hold up their whiteboards when we're done to share our ideas."`,
      `"Miquel, you had a great way to show photosynthesis in a drawing when we talked earlier. Will you share it with the class?"`
    ],
    nonExamples:[
      `"Check out your textbook, pages 55-60."`,
      `"Mike, we need to move on. Let's chat after class."`
    ]
  },
  {
    studentId: 2,
    text: `Imagine in the context of the lesson plan you developed for this challenge, you provide a summarizing explanation of photosynthesis to the whole class.  Floyd asks, "But how can plants take in sunlight, do they like grab it?"`,
    examples: [
      `"They absorb the light, yeah.  It's just like when you're outside in the sun, your skin absorbs the sunlight.  Your skin gets warmer, and if you're out there too long then you might even get sunburnt from absorbing too much of the sunlight energy."`,
      `"What do you mean by grab? Can anyone else share another word that may help explain how plants take in sunlight?"`,
      `"Great question. Let me pull out the small solar panel that we've used in different experiments. Let's talk about how a plant and this solar panel may be similar in how they get sunlight."`,
      `"Look, there is sunshine coming in through the window. Mike, come hold your hand in the sunshine. What does it feel like?"`
    ],
    nonExamples:[
      `"Plants absorb sunlight through chloroplasts."`
    ]
  }
];