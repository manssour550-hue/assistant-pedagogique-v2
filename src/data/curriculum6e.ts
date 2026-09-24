export type Domain =
  | "Vocabulary"
  | "Structure"
  | "Function"
  | "Reading"
  | "Writing"
  | "Speaking"
  | "Listening";

export type Activity = {
  title: string;
  teacher: string;
  learner: string;
  strategies: string[];
  competences: string[];
  expectedAnswers?: string[];
  observations?: string[];
};

export type LessonData = {
  id: string;
  title: string;
  domains: Domain[];
  notions: string[];
  objective: string;
  content: string[];
  activities: Activity[];
};

export type SequenceData = {
  id: string;
  title: string;
  lessons: LessonData[];
};

export type LearningSituation = {
  id: string;
  title: string;
  objective: string;
  sequences: SequenceData[];
};

export const curriculum6e: LearningSituation[] = [

  // =========================================================
  // LS1
  // =========================================================

  {
    id: "ls1",
    title: "At school",
    objective:
      "Students should be able to communicate about themselves, school life, classroom objects, time and class schedules.",
    sequences: [

      {
        id: "ls1-s1",
        title: "Greetings and introductions",
        lessons: [

          {
            id: "ls1-s1-greetings",
            title: "Greetings and introductions",
            domains: ["Vocabulary", "Speaking", "Listening", "Writing"],
            notions: [
              "Greetings",
              "Introducing oneself",
              "Asking someone's name",
              "Asking how someone is",
              "The alphabet",
              "Numbers"
            ],
            objective:
              "Students should be able to greet people, introduce themselves and ask simple personal questions.",
            content: [
              "Hello",
              "Good morning",
              "Good afternoon",
              "Good evening",
              "Goodbye",
              "What's your name?",
              "My name is...",
              "How are you?",
              "I am fine.",
              "Spelling names"
            ],
            activities: [
              {
                title: "Listen and repeat",
                teacher: "Invite students to listen and repeat the expressions.",
                learner: "Listen and repeat the expressions.",
                strategies: ["IW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Dialogue practice",
                teacher: "Invite students to practise a short greeting dialogue.",
                learner: "Practise the dialogue with a partner.",
                strategies: ["PW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Role-play",
                teacher: "Ask students to create and act out similar dialogues.",
                learner: "Create and perform a similar dialogue.",
                strategies: ["PW", "CW"],
                competences: ["CD1", "CD3"]
              }
            ]
          },

          {
            id: "ls1-s1-to-be",
            title: "The irregular verb to be",
            domains: ["Structure", "Speaking", "Writing"],
            notions: [
              "Verb to be",
              "Affirmative form",
              "Negative form"
            ],
            objective:
              "Students should be able to use the verb to be in simple affirmative and negative sentences.",
            content: [
              "I am",
              "You are",
              "He is",
              "She is",
              "It is",
              "We are",
              "They are",
              "I am not",
              "You are not",
              "He/She/It is not",
              "We/They are not"
            ],
            activities: [
              {
                title: "Complete the sentences",
                teacher: "Ask students to complete sentences with the correct form of to be.",
                learner: "Complete the sentences.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD3"]
              },
              {
                title: "Dialogue",
                teacher: "Invite students to listen, repeat and practise dialogues.",
                learner: "Listen, repeat and practise the dialogues.",
                strategies: ["IW", "PW"],
                competences: ["CTD2", "CD1"]
              }
            ]
          }

        ]
      },

      {
        id: "ls1-s2",
        title: "Classroom furniture",
        lessons: [

          {
            id: "ls1-s2-classroom",
            title: "Classroom furniture",
            domains: ["Vocabulary", "Speaking"],
            notions: [
              "Classroom objects",
              "Identifying objects",
              "What is it?"
            ],
            objective:
              "Students should be able to identify and name common classroom objects.",
            content: [
              "window",
              "desk",
              "door",
              "bench",
              "table",
              "stool",
              "chair",
              "classroom",
              "blackboard"
            ],
            activities: [
              {
                title: "Listen and repeat",
                teacher: "Invite students to listen and repeat the vocabulary.",
                learner: "Listen and repeat.",
                strategies: ["IW", "CW"],
                competences: ["CTD2", "CD3"]
              },
              {
                title: "Match words and pictures",
                teacher: "Ask students to match the pictures with the words.",
                learner: "Match the pictures with the words.",
                strategies: ["IW", "GW", "CW"],
                competences: ["CTD2", "CD3"]
              },
              {
                title: "Identify objects",
                teacher: "Point to classroom objects and ask: What is it?",
                learner: "Answer: It is a...",
                strategies: ["PW", "CW"],
                competences: ["CTD2", "CD3"]
              }
            ]
          },

          {
            id: "ls1-s2-plural",
            title: "Regular plural nouns",
            domains: ["Structure", "Writing", "Speaking"],
            notions: [
              "Singular",
              "Plural",
              "Noun + s"
            ],
            objective:
              "Students should be able to form regular plural nouns.",
            content: [
              "book → books",
              "pen → pens",
              "chair → chairs",
              "desk → desks",
              "table → tables",
              "window → windows"
            ],
            activities: [
              {
                title: "Change singular into plural",
                teacher: "Ask students to change classroom nouns into plural.",
                learner: "Change the nouns into plural.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD3"]
              },
              {
                title: "Classroom counting",
                teacher: "Ask students to count objects in the classroom and make sentences.",
                learner: "Count objects and produce sentences.",
                strategies: ["PW", "CW"],
                competences: ["CD1", "CD3"]
              }
            ]
          },

          {
            id: "ls1-s2-demonstratives",
            title: "Demonstratives",
            domains: ["Structure", "Speaking", "Writing"],
            notions: [
              "This",
              "That",
              "These",
              "Those",
              "Singular demonstratives",
              "Plural demonstratives"
            ],
            objective:
              "Students should be able to identify objects using demonstratives.",
            content: [
              "This is a pen.",
              "That is a desk.",
              "These are books.",
              "Those are chairs."
            ],
            activities: [
              {
                title: "Look and repeat",
                teacher: "Use classroom objects to introduce this, that, these and those.",
                learner: "Look, listen and repeat.",
                strategies: ["IW", "CW"],
                competences: ["CTD2", "CD3"]
              },
              {
                title: "Describe the picture",
                teacher: "Ask students to write sentences using demonstratives.",
                learner: "Write sentences describing the picture.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD3"]
              }
            ]
          }

        ]
      },

      {
        id: "ls1-s3",
        title: "Days, months and school timetable",
        lessons: [

          {
            id: "ls1-s3-time",
            title: "Telling the time",
            domains: ["Vocabulary", "Function", "Speaking"],
            notions: [
              "O'clock",
              "Past",
              "To",
              "Half past",
              "Quarter past",
              "Quarter to",
              "AM",
              "PM"
            ],
            objective:
              "Students should be able to ask and tell the time.",
            content: [
              "What time is it?",
              "It is 8 o'clock.",
              "half past",
              "quarter past",
              "quarter to",
              "AM",
              "PM"
            ],
            activities: [
              {
                title: "Listen and repeat",
                teacher: "Present examples of times and invite students to repeat.",
                learner: "Listen and repeat.",
                strategies: ["IW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Ask and tell the time",
                teacher: "Ask students to practise asking and saying the time.",
                learner: "Ask and answer about the time.",
                strategies: ["PW", "CW"],
                competences: ["CTD2", "CD1"]
              }
            ]
          },

          {
            id: "ls1-s3-possessives",
            title: "Possessive adjectives",
            domains: ["Structure", "Speaking", "Writing"],
            notions: [
              "My",
              "Your",
              "His",
              "Her",
              "Its",
              "Our",
              "Their"
            ],
            objective:
              "Students should be able to use possessive adjectives correctly.",
            content: [
              "my",
              "your",
              "his",
              "her",
              "its",
              "our",
              "their"
            ],
            activities: [
              {
                title: "Listen and repeat",
                teacher: "Present possessive adjectives through examples.",
                learner: "Listen and repeat.",
                strategies: ["IW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Complete the sentences",
                teacher: "Ask students to fill gaps with the correct possessive adjective.",
                learner: "Complete the sentences.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD1"]
              }
            ]
          },

          {
            id: "ls1-s3-days-months",
            title: "Days and months",
            domains: ["Vocabulary", "Writing", "Speaking"],
            notions: [
              "Days of the week",
              "Months of the year",
              "Before",
              "After"
            ],
            objective:
              "Students should be able to name days and months and use before and after.",
            content: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ],
            activities: [
              {
                title: "Listen and repeat",
                teacher: "Invite students to listen and repeat the days and months.",
                learner: "Listen and repeat.",
                strategies: ["IW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Reorder letters",
                teacher: "Ask students to reorder letters to form vocabulary words.",
                learner: "Reorder the letters.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD1"]
              }
            ]
          },

          {
            id: "ls1-s3-have",
            title: "The irregular verb to have",
            domains: ["Structure", "Writing", "Speaking"],
            notions: [
              "Have",
              "Has",
              "Class schedule"
            ],
            objective:
              "Students should be able to use the verb to have and talk about a class schedule.",
            content: [
              "I have",
              "You have",
              "He/She/It has",
              "We have",
              "They have"
            ],
            activities: [
              {
                title: "Conjugate to have",
                teacher: "Ask students to complete the conjugation of to have.",
                learner: "Complete the conjugation.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Write about a class schedule",
                teacher: "Ask students to write a short paragraph about their class schedule.",
                learner: "Write a paragraph about the class schedule.",
                strategies: ["GW", "CW"],
                competences: ["CTD2", "CD3"]
              }
            ]
          }

        ]
      }

    ]
  },

  // =========================================================
  // LS2
  // =========================================================

  {
    id: "ls2",
    title: "Family life",
    objective:
      "Students should be able to speak about family members, parts of the body, colours, clothes and related grammatical structures.",
    sequences: [

      {
        id: "ls2-s1",
        title: "My family",
        lessons: [

          {
            id: "ls2-s1-family",
            title: "Family members",
            domains: ["Vocabulary", "Speaking", "Reading", "Writing"],
            notions: [
              "Family members",
              "Professions",
              "Possessive adjectives"
            ],
            objective:
              "Students should be able to identify family members and talk about their family.",
            content: [
              "father",
              "mother",
              "brother",
              "sister",
              "grandfather",
              "grandmother",
              "uncle",
              "aunt",
              "son",
              "daughter",
              "nephew",
              "niece"
            ],
            activities: [
              {
                title: "Listen and repeat",
                teacher: "Invite students to listen and repeat family vocabulary.",
                learner: "Listen and repeat.",
                strategies: ["IW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Match family members",
                teacher: "Ask students to match male and female family members.",
                learner: "Match the corresponding family members.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Talk about your family",
                teacher: "Ask students to describe members of their family.",
                learner: "Describe members of their family.",
                strategies: ["PW", "CW"],
                competences: ["CD1", "CD3"]
              }
            ]
          },

          {
            id: "ls2-s1-possessive-case",
            title: "The possessive case",
            domains: ["Structure", "Writing"],
            notions: [
              "Possessive case",
              "Of + noun",
              "Noun + 's"
            ],
            objective:
              "Students should be able to express possession using the possessive case.",
            content: [
              "Jada's baby",
              "Eric's bicycle",
              "The teacher's car"
            ],
            activities: [
              {
                title: "Rewrite sentences",
                teacher: "Ask students to rewrite sentences using the possessive case.",
                learner: "Rewrite the sentences.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD3"]
              }
            ]
          }

        ]
      },

      {
        id: "ls2-s2",
        title: "Parts of the body",
        lessons: [

          {
            id: "ls2-s2-body",
            title: "Parts of the body",
            domains: ["Vocabulary", "Speaking", "Writing"],
            notions: [
              "Parts of the body",
              "Commands",
              "Description"
            ],
            objective:
              "Students should be able to identify body parts, ask questions and give simple commands.",
            content: [
              "head",
              "hair",
              "eye",
              "ear",
              "nose",
              "mouth",
              "chin",
              "finger",
              "hand",
              "arm",
              "chest",
              "leg",
              "foot",
              "forehead",
              "shoulder",
              "elbow",
              "knee",
              "neck",
              "toe"
            ],
            activities: [
              {
                title: "Label the picture",
                teacher: "Ask students to write vocabulary words on a body picture.",
                learner: "Label the body parts.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD3"]
              },
              {
                title: "Give commands",
                teacher: "Ask students to use verbs to give commands to their partners.",
                learner: "Give and act out commands.",
                strategies: ["PW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Describe a monster",
                teacher: "Ask students to write a paragraph describing a monster.",
                learner: "Write a paragraph describing the monster.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD3"]
              }
            ]
          }

        ]
      },

      {
        id: "ls2-s3",
        title: "Colours and clothes",
        lessons: [

          {
            id: "ls2-s3-colours",
            title: "Colours and clothes",
            domains: ["Vocabulary", "Speaking", "Writing"],
            notions: [
              "Colours",
              "Clothes",
              "Colour + object"
            ],
            objective:
              "Students should be able to identify colours and clothes and describe objects and people.",
            content: [
              "yellow",
              "blue",
              "green",
              "white",
              "red",
              "orange",
              "brown",
              "black",
              "clothes"
            ],
            activities: [
              {
                title: "Listen and repeat",
                teacher: "Use coloured objects to introduce colours.",
                learner: "Listen and repeat.",
                strategies: ["IW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Describe objects",
                teacher: "Ask students to combine colours with objects.",
                learner: "Produce phrases such as a red copybook.",
                strategies: ["PW", "CW"],
                competences: ["CTD2", "CD1"]
              }
            ]
          },

          {
            id: "ls2-s3-present-continuous",
            title: "Present Continuous",
            domains: ["Structure", "Reading", "Speaking", "Writing"],
            notions: [
              "Present Continuous",
              "Actions happening now"
            ],
            objective:
              "Students should be able to describe actions happening at the moment of speaking.",
            content: [
              "am + verb-ing",
              "is + verb-ing",
              "are + verb-ing"
            ],
            activities: [
              {
                title: "Observe and describe",
                teacher: "Ask students to observe pictures and describe what people are doing.",
                learner: "Describe the actions.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CD1", "CD3"]
              }
            ]
          }

        ]
      }

    ]
  },

  // =========================================================
  // LS3
  // =========================================================

  {
    id: "ls3",
    title: "Social environment",
    objective:
      "Students should be able to identify buildings and places, talk about occupations, ask for and give directions, and use regular and irregular plural nouns.",
    sequences: [

      {
        id: "ls3-s1",
        title: "Buildings and places",
        lessons: [

          {
            id: "ls3-s1-places",
            title: "Buildings and places",
            domains: ["Vocabulary", "Reading", "Speaking"],
            notions: [
              "Buildings",
              "Places",
              "Activities associated with places"
            ],
            objective:
              "Students should be able to identify common buildings and say what people do there.",
            content: [
              "bookshop",
              "library",
              "market",
              "hospital",
              "restaurant",
              "bank",
              "post office",
              "mosque",
              "church"
            ],
            activities: [
              {
                title: "Listen and repeat",
                teacher: "Invite students to listen and repeat the vocabulary.",
                learner: "Listen and repeat.",
                strategies: ["IW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Match verbs and places",
                teacher: "Ask students to match actions with appropriate places.",
                learner: "Match verbs with places.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Ask and answer",
                teacher: "Ask students to practise questions about places.",
                learner: "Ask and answer questions with a partner.",
                strategies: ["PW", "CW"],
                competences: ["CTD2", "CD1"]
              }
            ]
          },

          {
            id: "ls3-s1-directions",
            title: "Asking for and giving directions",
            domains: ["Vocabulary", "Function", "Speaking"],
            notions: [
              "Directions",
              "Straight",
              "Left",
              "Right",
              "Turn",
              "Stop",
              "Roundabout",
              "Crossroad"
            ],
            objective:
              "Students should be able to ask for and give simple directions.",
            content: [
              "How do I get to...?",
              "go straight",
              "turn left",
              "turn right",
              "stop",
              "roundabout",
              "crossroad"
            ],
            activities: [
              {
                title: "Listen and repeat",
                teacher: "Introduce direction vocabulary using pictures.",
                learner: "Listen and repeat.",
                strategies: ["IW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Use a map",
                teacher: "Draw a simple map and ask students to give directions from A to B.",
                learner: "Give directions using the map.",
                strategies: ["PW", "CW"],
                competences: ["CTD2", "CD1"]
              }
            ]
          },

          {
            id: "ls3-s1-imperative",
            title: "The imperative",
            domains: ["Structure", "Speaking", "Writing"],
            notions: [
              "Imperative",
              "Affirmative form",
              "Negative form"
            ],
            objective:
              "Students should be able to give simple instructions and commands.",
            content: [
              "Base verb",
              "Don't + base verb"
            ],
            activities: [
              {
                title: "Identify the form",
                teacher: "Ask students to identify imperative verbs in dialogues.",
                learner: "Identify the verbs and their forms.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD3"]
              },
              {
                title: "Give commands",
                teacher: "Ask students to give simple commands to partners.",
                learner: "Give and act out commands.",
                strategies: ["PW", "CW"],
                competences: ["CD1", "CD3"]
              }
            ]
          }

        ]
      },

      {
        id: "ls3-s2",
        title: "Occupations",
        lessons: [

          {
            id: "ls3-s2-occupations",
            title: "Occupations",
            domains: ["Vocabulary", "Speaking", "Writing"],
            notions: [
              "Occupations",
              "Person",
              "Action",
              "Object"
            ],
            objective:
              "Students should be able to identify common occupations and describe what people do.",
            content: [
              "mason",
              "seamstress",
              "mechanic",
              "tailor",
              "electrician",
              "carpenter",
              "hairdresser",
              "barber",
              "trader",
              "farmer"
            ],
            activities: [
              {
                title: "Listen and repeat",
                teacher: "Introduce occupation vocabulary.",
                learner: "Listen and repeat.",
                strategies: ["IW", "CW"],
                competences: ["CTD2", "CD1"]
              },
              {
                title: "Person / verb / object",
                teacher: "Ask students to complete a table linking occupations with actions and objects.",
                learner: "Complete the table.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD3"]
              },
              {
                title: "Ask about occupations",
                teacher: "Ask students to practise questions about occupations.",
                learner: "Ask and answer with partners.",
                strategies: ["PW", "CW"],
                competences: ["CD1", "CD3"]
              }
            ]
          },

          {
            id: "ls3-s2-simple-present",
            title: "Simple Present",
            domains: ["Structure", "Reading", "Writing"],
            notions: [
              "Simple Present",
              "Affirmative form",
              "Third person singular"
            ],
            objective:
              "Students should be able to use the simple present to describe habitual actions and occupations.",
            content: [
              "I eat",
              "You eat",
              "He/She/It eats",
              "Verbs ending in o, h, s, x, z + es",
              "Consonant + y → ies"
            ],
            activities: [
              {
                title: "Identify the tense",
                teacher: "Ask students to identify verbs and the tense in a text.",
                learner: "Identify the verbs and tense.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD2"]
              },
              {
                title: "Conjugate verbs",
                teacher: "Ask students to conjugate common verbs in the simple present.",
                learner: "Conjugate the verbs.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD3"]
              }
            ]
          }

        ]
      },

      {
        id: "ls3-s3",
        title: "At the market",
        lessons: [

          {
            id: "ls3-s3-market-vocabulary",
            title: "Market vocabulary",
            domains: ["Vocabulary", "Speaking"],
            notions: [
              "Coins",
              "Bank notes",
              "Money",
              "Price",
              "Change",
              "Goods",
              "Stalls",
              "Shop",
              "Buy",
              "Sell",
              "Bargain"
            ],
            objective:
              "Students should be able to use basic vocabulary related to buying and selling at the market.",
            content: [
              "coins",
              "bank notes",
              "money",
              "price",
              "change",
              "goods",
              "stalls",
              "shop",
              "to buy",
              "to sell",
              "to bargain"
            ],
            activities: [
              {
                title: "Look, listen and repeat",
                teacher: "Present market vocabulary with pictures.",
                learner: "Look, listen and repeat.",
                strategies: ["IW", "CW"],
                competences: ["CD1", "CTD2"]
              },
              {
                title: "Match pictures and words",
                teacher: "Ask students to match pictures with market vocabulary.",
                learner: "Match pictures and words.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD3"]
              }
            ]
          },

          {
            id: "ls3-s3-market-dialogue",
            title: "Buying and selling",
            domains: ["Speaking", "Listening", "Function"],
            notions: [
              "Buying",
              "Selling",
              "Asking the price",
              "Bargaining"
            ],
            objective:
              "Students should be able to take part in a simple buying and selling dialogue.",
            content: [
              "How much is it?",
              "I want to buy...",
              "How much does it cost?",
              "I will buy it.",
              "Can you reduce the price?"
            ],
            activities: [
              {
                title: "Dialogue practice",
                teacher: "Ask students to read and practise a market dialogue.",
                learner: "Read and practise the dialogue.",
                strategies: ["PW"],
                competences: ["CD1", "CTD2"]
              },
              {
                title: "Create similar dialogues",
                teacher: "Ask students to create similar buying and selling dialogues.",
                learner: "Create and perform similar dialogues.",
                strategies: ["PW", "CW"],
                competences: ["CD1", "CD3"]
              }
            ]
          },

          {
            id: "ls3-s3-plurals",
            title: "Regular and irregular plural nouns",
            domains: ["Structure", "Reading", "Writing", "Speaking"],
            notions: [
              "Regular plurals",
              "Irregular plurals",
              "Noun + s",
              "Consonant + y",
              "Vowel + y",
              "Consonant + o",
              "Vowel + o",
              "sh/ch/ss/x",
              "Irregular forms"
            ],
            objective:
              "Students should be able to form and use regular and irregular plural nouns.",
            content: [
              "book → books",
              "family → families",
              "boy → boys",
              "mango → mangoes",
              "radio → radios",
              "bench → benches",
              "man → men",
              "woman → women",
              "child → children",
              "foot → feet",
              "person → people"
            ],
            activities: [
              {
                title: "Identify plural nouns",
                teacher: "Ask students to read a text and underline plural nouns.",
                learner: "Read and underline plural nouns.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CT1", "CT2", "CT6"]
              },
              {
                title: "Change into plural",
                teacher: "Ask students to change singular nouns into plural and complete sentences.",
                learner: "Change nouns into plural and complete sentences.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CT1", "CT2", "CT6"]
              }
            ]
          },

          {
            id: "ls3-s3-market-reading",
            title: "Reading comprehension about the market",
            domains: ["Reading", "Writing"],
            notions: [
              "Market",
              "Reading comprehension",
              "True / False",
              "Question answering"
            ],
            objective:
              "Students should be able to understand a short text about a market and answer questions.",
            content: [
              "Pre-reading questions",
              "Silent reading",
              "True / False",
              "Comprehension questions",
              "Paragraph writing"
            ],
            activities: [
              {
                title: "Pre-reading",
                teacher: "Ask questions about the students' local market.",
                learner: "Answer the questions.",
                strategies: ["IW", "CW"],
                competences: ["CD1", "CTD2"]
              },
              {
                title: "Read and understand",
                teacher: "Ask students to read silently and answer comprehension questions.",
                learner: "Read silently and answer the questions.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CD2", "CTD2", "CT1", "CT2", "CT6"]
              },
              {
                title: "Write about a market",
                teacher: "Ask students to write a paragraph about their market.",
                learner: "Write a paragraph about their market.",
                strategies: ["IW", "GW", "CW"],
                competences: ["CD3", "CTD2", "CT1", "CT2", "CT6"]
              }
            ]
          }

        ]
      }

    ]
  },

  // =========================================================
  // LS4
  // =========================================================

  {
    id: "ls4",
    title: "Travelling",
    objective:
      "Students should be able to talk about means of transport, travelling, identify and locate countries on a map and use the simple past.",
    sequences: [

      {
        id: "ls4-s1",
        title: "Means of transport",
        lessons: [

          {
            id: "ls4-s1-transport",
            title: "Means of transport",
            domains: ["Vocabulary", "Speaking", "Listening"],
            notions: [
              "Walking",
              "Bicycle",
              "Motorcycle",
              "Horse",
              "Car",
              "Bus",
              "Canoe",
              "Boat",
              "Ship",
              "Train",
              "Plane"
            ],
            objective:
              "Students should be able to identify and talk about common means of transport.",
            content: [
              "on foot",
              "bicycle",
              "motorcycle",
              "horse",
              "car",
              "bus",
              "canoe",
              "boat",
              "ship",
              "train",
              "plane"
            ],
            activities: [
              {
                title: "Brainstorming",
                teacher: "Ask students how they go to school.",
                learner: "Answer questions about how they travel to school.",
                strategies: ["IW", "CW"],
                competences: ["CD1", "CTD2", "CT1", "CT2", "CT6"]
              },
              {
                title: "Observe and describe",
                teacher: "Ask students to observe pictures and describe what people are doing.",
                learner: "Observe and describe the pictures.",
                strategies: ["IW", "CW"],
                competences: ["CD1", "CTD2"]
              },
              {
                title: "Match words and pictures",
                teacher: "Ask students to match transport vocabulary with pictures.",
                learner: "Match words and pictures.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD3"]
              }
            ]
          }

        ]
      },

      {
        id: "ls4-s2",
        title: "Going on holidays",
        lessons: [

          {
            id: "ls4-s2-travel-vocabulary",
            title: "Travelling vocabulary",
            domains: ["Vocabulary", "Reading", "Speaking"],
            notions: [
              "Airport",
              "Suitcase",
              "Passengers",
              "Map",
              "Passport",
              "Bus station",
              "Visa",
              "Luggage",
              "Luggage tag"
            ],
            objective:
              "Students should be able to use common vocabulary related to travelling and holidays.",
            content: [
              "airport",
              "suitcase",
              "passengers",
              "map",
              "passport",
              "bus station",
              "visa",
              "luggage",
              "luggage-tag"
            ],
            activities: [
              {
                title: "Look, listen and repeat",
                teacher: "Present travelling vocabulary with pictures.",
                learner: "Look, listen and repeat.",
                strategies: ["IW", "CW"],
                competences: ["CD1", "CTD2", "CT1", "CT2", "CT6"]
              },
              {
                title: "Match vocabulary and pictures",
                teacher: "Ask students to match the words with pictures.",
                learner: "Match words and pictures.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CT1", "CT2", "CT6"]
              }
            ]
          },

          {
            id: "ls4-s2-reading",
            title: "Reading comprehension about travelling",
            domains: ["Reading", "Writing"],
            notions: [
              "Travel",
              "Airport",
              "Holiday",
              "Comprehension questions"
            ],
            objective:
              "Students should be able to understand a short text about travelling and answer questions in complete sentences.",
            content: [
              "Silent reading",
              "Comprehension questions",
              "Complete sentences"
            ],
            activities: [
              {
                title: "Silent reading",
                teacher: "Ask students to read the text silently.",
                learner: "Read the text silently.",
                strategies: ["IW"],
                competences: ["CD2", "CTD2", "CT1", "CT2", "CT6"]
              },
              {
                title: "Answer questions",
                teacher: "Ask students to answer comprehension questions in complete sentences.",
                learner: "Answer the questions in complete sentences.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CD2", "CTD2", "CT1", "CT2", "CT6"]
              }
            ]
          },

          {
            id: "ls4-s2-location",
            title: "Identifying and locating countries and towns",
            domains: ["Vocabulary", "Function", "Speaking"],
            notions: [
              "North",
              "South",
              "East",
              "West",
              "Countries",
              "Towns",
              "Map"
            ],
            objective:
              "Students should be able to identify and locate countries and towns using a map.",
            content: [
              "North",
              "South",
              "East",
              "West",
              "Country names",
              "Town names"
            ],
            activities: [
              {
                title: "Listen and repeat",
                teacher: "Introduce the four cardinal directions.",
                learner: "Listen and repeat.",
                strategies: ["IW", "CW"],
                competences: ["CD1", "CTD2", "CT1", "CT2", "CT6"]
              },
              {
                title: "Use the map",
                teacher: "Ask students to locate countries and towns on a map.",
                learner: "Locate countries and towns and answer questions.",
                strategies: ["PW", "CW"],
                competences: ["CD1", "CTD2", "CT1", "CT2", "CT6"]
              }
            ]
          },

          {
            id: "ls4-s2-comparative",
            title: "Comparative of superiority with long adjectives",
            domains: ["Structure", "Speaking", "Writing"],
            notions: [
              "Long adjectives",
              "More + adjective + than",
              "Comparative of superiority"
            ],
            objective:
              "Students should be able to form and use the comparative of superiority with long adjectives.",
            content: [
              "more difficult than",
              "more expensive than",
              "more intelligent than"
            ],
            activities: [
              {
                title: "Identify adjectives",
                teacher: "Ask students to identify adjectives in the dialogues.",
                learner: "Identify the adjectives.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CT1", "CT2", "CT6"]
              },
              {
                title: "Complete sentences",
                teacher: "Ask students to complete sentences using the comparative.",
                learner: "Complete the sentences.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CT1", "CT2", "CT6"]
              }
            ]
          },

          {
            id: "ls4-s2-simple-past",
            title: "Simple Past",
            domains: ["Structure", "Reading", "Writing", "Speaking"],
            notions: [
              "Simple Past",
              "Past events",
              "Travel experiences"
            ],
            objective:
              "Students should be able to talk and write about past events related to travelling.",
            content: [
              "Past actions",
              "Travel experiences",
              "Regular and irregular past forms"
            ],
            activities: [
              {
                title: "Read and identify",
                teacher: "Ask students to identify past actions in a travel text.",
                learner: "Read and identify past actions.",
                strategies: ["IW", "PW", "CW"],
                competences: ["CTD2", "CD2"]
              },
              {
                title: "Write about a past trip",
                teacher: "Ask students to write a short paragraph about a past journey.",
                learner: "Write about a past journey.",
                strategies: ["IW", "GW", "CW"],
                competences: ["CD3", "CTD2"]
              }
            ]
          }

        ]
      }

    ]
  }

];

export const class6e = {
  id: "6e",
  title: "6ème",
  subject: "English",
  country: "Bénin",
  learningSituations: curriculum6e
};

export function getLearningSituation(id: string) {
  return curriculum6e.find((ls) => ls.id === id);
}

export function getSequence(lsId: string, sequenceId: string) {
  const ls = getLearningSituation(lsId);
  return ls?.sequences.find((sequence) => sequence.id === sequenceId);
}

export function getLesson(
  lsId: string,
  sequenceId: string,
  lessonId: string
) {
  const sequence = getSequence(lsId, sequenceId);
  return sequence?.lessons.find((lesson) => lesson.id === lessonId);
}
