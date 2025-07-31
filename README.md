# 🎯 Smart Goal Planner

Smart Goal Planner is a web-based application built with React that allows users to create, manage, and track progress toward their personal goals. It helps users break goals into manageable tasks and provides visual feedback on progress.

---

## 🌐 Live Demo

- **Frontend (Netlify):** [https://clever-platypus-bd1185.netlify.app/](https://clever-platypus-bd1185.netlify.app/)
- **Backend (Render):** [https://smart-goal-planner-nsc9.onrender.com](https://smart-goal-planner-nsc9.onrender.com)

---

## ✨ Features

- ✅ Create new SMART goals with a title, target amount, and amount saved.
- 🧮 Automatically calculate savings progress.
- 📊 Display progress visually using a progress bar.
- 🗑️ Delete goals when no longer needed.
- 🔄 Real-time UI updates after CRUD operations.
- 🧠 Backend using `json-server`.

---

## 🛠️ Tech Stack

- **Frontend:** React, JSX, CSS
- **Backend:** JSON Server (Mock REST API)
- **Hosting:** Netlify (Frontend), Render (Backend)

---

## 📁 Project Structure

smart-goal-planner/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ ├── GoalForm.js
│ │ ├── GoalItem.js
│ │ ├── GoalList.js
│ │ └── ProgressTracker.js
│ ├── App.js
│ └── index.js
│
├── db.json
├── package.json
└── README.md

yaml
Copy
Edit

---

## 💻 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/clint-on-coding/smart-goal-planner.git
cd smart-goal-planner


2. Install Dependencies
bash
Copy
Edit
npm install


3. Start the Backend (JSON Server)
bash
Copy
Edit
npx json-server --watch db.json --port 3001


4. Start the Frontend
bash
Copy
Edit
npm start


5. Open in Browser
Go to http://localhost:3000


📦 Sample db.json
json
Copy
Edit
{
  "goals": [
    {
      "id": 1,
      "title": "Save for Laptop",
      "targetAmount": 1000,
      "amountSaved": 250
    }
  ]
}


🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a pull request.


👨‍💻 Author
Clinton Mwangi

GitHub: @clint-on-coding

Email: clintonmwangi10636@gmail.com
