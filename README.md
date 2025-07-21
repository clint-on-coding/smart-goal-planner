# Smart Goal Planner

A Smart Goal Planner React app that helps users manage savings goals, track progress, and make deposits, powered by `json-server` for full CRUD functionality.

---

## 🚀 Features

- ✅ Add, edit, and delete savings goals (name, category, target amount, deadline)
- 📊 Track progress for each goal using a visual progress bar
- 💰 Make deposits to specific goals
- 📅 See how much time is left until each deadline
- ⚠️ Warnings for upcoming deadlines and overdue goals
- 🧮 Overview of total saved, goals completed, and more

---

## 🛠️ Tech Stack

- **React** (Frontend)
- **JSON Server** (Mock Backend)
- **Tailwind CSS** (Optional for styling)

---

## 📂 Project Structure
```
smart-goal-planner/
├── public/
├── src/
│   ├── components/
│   │   ├── GoalCard.jsx
│   │   ├── GoalForm.jsx
│   │   ├── DepositForm.jsx
│   │   └── Overview.jsx
│   ├── App.jsx
│   ├── api.js
│   └── index.js
├── db.json
└── README.md
```

---

## ⚙️ Getting Started

1. **Install dependencies**
```bash
npm install
```

2. **Start JSON Server**
```bash
json-server --watch db.json --port 3000
```

3. **Run React App**
```bash
npm start
```

App runs on `http://localhost:5173` (or 3000 if using older CRA).

---

## 🔗 Deployment

- Deploy React frontend on [Netlify](https://netlify.com) or [Vercel](https://vercel.com)
- Use [Render](https://render.com) or [My JSON Server](https://my-json-server.typicode.com/) to host the `db.json` online

---

## ✍️ Author

Clinton Mwangi  
[GitHub](https://github.com/clint-on-coding)  
[LinkedIn](https://linkedin.com/in/clintonmwangi)

---

## 📄 License

MIT License
