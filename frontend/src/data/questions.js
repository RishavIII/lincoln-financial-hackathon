export const questions = [
  {
    id: "sex",
    type: "radio",
    title: "What is your sex?",
    options: ["Male", "Female", "Other"]
  },
  {
    id: "date of birth",
    type: "date",
    title: "What is your date of birth?"
  },
  {
    id: "children",
    type: "radio",
    title: "Do you have children?",
    options: ["Yes", "No, not yet", "No, and that will not change"]
  },
  {
    id: "married",
    type: "radio",
    title: "Are you married?",
    options: ["Yes", "No"]
  },
  {
    id: "smoking",
    type: "radio",
    title: "Do you smoke?",
    options: ["Yes", "No"]
  },
  {
    id: "drinking",
    type: "radio",
    title: "Do you drink alcohol?",
    options: ["Yes", "No"]
  },
  {
    id: "travel",
    type:"radio",
    title:"How often do you travel, for business or leisure?",
    options: ["Almost Never","Every 4+ Years","Every 2-3 Years","Yearly", "Multiple Times a Year",] // add more
  },
  {
    id:"health conditions",
    type: "checkbox",
    title: "Do you have any known health conditions listed?",
    options: ["Blood pressure","Asthma", "High Cholesterol", "Obesity", "Chronic Disease", "Cancer", "Arthritis"]
  },
  {
    id:"savings",
    type: "slider",
    title: "I would like to spend more after my doctor's visit, rather than spend more each month.",
    options: []
  },
  {
    id:"paycheck",
    type: "slider",
    title: "I would prefer to keep more of my paycheck now, rather than save for long term care.",
    options: []
  }
];
