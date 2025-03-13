# Memory Card Game with Flask Backend

## 📌 Project Overview
This is a **Memory Card Game** with a **Flask Backend** that provides user authentication and score tracking. The front end is built using **HTML, CSS, and JavaScript**, while the backend uses **Flask and SQLite**.

## 🚀 Features
- 🎮 **Interactive Memory Game**
- 🔒 **User Authentication (Register, Login, Logout)**
- 📊 **Score Tracking with SQLite Database**
- 🌐 **REST API for User & Score Management**
- 🎨 **Responsive & Colorful UI**

---

## 🛠️ Setup Instructions
### 1️⃣ Install Dependencies
#### Install Python (if not already installed)
Make sure you have Python installed. You can check using:
```sh
python --version
```
If not installed, download it from [Python.org](https://www.python.org/downloads/).

#### Install Required Python Packages
```sh
pip install --user -r requirements.txt
```

### 2️⃣ Initialize Database
```sh
python
>>> from app import db
>>> db.create_all()
>>> exit()
```
This creates the `database.db` file with the necessary tables.

### 3️⃣ Run the Flask Server
```sh
python app.py
```
The backend should start running at **`http://127.0.0.1:5000/`**.

### 4️⃣ Open the Frontend
- Open `static/index.html` in your browser.
- The game should be fully functional!

---

## 📂 Project Structure
```
memory-game-backend/
│── app.py                 # Main Flask application
│── models.py              # Database models (Users & Scores)
│── routes.py              # API routes for authentication & scores
│── database.db            # SQLite database
│── requirements.txt       # Dependencies
│── static/                # Frontend (HTML, CSS, JS, Images)
│   │── index.html         # Game UI
│   │── script.js          # Game logic & API calls
│   │── styles.css         # Stylesheet
│── templates/             # (If needed for Flask-rendered pages)
```

---

## 🔗 API Endpoints
| Method | Endpoint        | Description         |
|--------|----------------|---------------------|
| POST   | `/register`     | Register a new user |
| POST   | `/login`        | User login         |
| POST   | `/logout`       | User logout        |
| POST   | `/score`        | Save game score    |
| GET    | `/scores`       | Get top scores     |

---

## 🎨 Future Improvements
- 🔥 Add leaderboard functionality
- 📧 Email notifications for scores
- ☁️ Deploy to AWS or Heroku

💡 **Feel free to contribute!** 🚀

# ONLY HTML
If u want only a simple frontend using only HTML, then you can check card.html; it is only HTML with embedded js and css and you can play the game. Once you refresh, the cards are shuffled.
