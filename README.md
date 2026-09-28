# Digital Clock ⏰

A simple **Digital Clock** built using **HTML, CSS, and JavaScript**.
It displays the current time in **12-hour format with AM/PM**, along with the current date and day.

## ✨ Features
- 🕐 Displays the current time in **HH\:MM AM/PM** format
- 📅 Displays the current date
- 📆 Displays the current day of the week
- 🔄 Automatically updates the clock every second
- 🎨 Simple and clean dark-themed UI
- 📱 Responsive viewport setup for different screen sizes

## 🛠️ Technologies Used
- **HTML** – Structure of the digital clock
- **CSS** – Styling and layout
- **JavaScript** – Clock functionality and real-time updates

## 📂 Project Structure
```text
Digital-Clock/
│
├── index.html
├── style.css
└── script.js

```
## ⚙️ How It Works
The JavaScript `Date()` object is used to get the current date and time.

The project then:
1. Gets the current hours, minutes, and seconds.
2. Converts the time into a **12-hour format**.
3. Determines whether it is **AM or PM**.
4. Gets the current date, month, year, and day.
5. Updates the HTML elements using JavaScript.
6. Uses `setInterval()` to update the clock every **1 second**.

## 🎯 What I Learned

While building this project, I practiced:
- Working with the JavaScript `Date` object
- Using `getHours()`, `getMinutes()`, `getSeconds()`, `getDate()`, `getMonth()`, `getDay()`, and `getFullYear()`
- Converting 24-hour time to 12-hour time
- Using arrays for months and days
- Updating HTML content using `textContent`
- Using `setInterval()` for continuous updates
- Connecting HTML, CSS, and JavaScript together

## 🚀 How to Run

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Open `index.html` in your browser.
4. The digital clock will start displaying the current time automatically.

## 📌 Project Status

This is a beginner-friendly JavaScript project created to practice **DOM manipulation, JavaScript Date methods, and real-time updates**.
