# 📅 College Timetable → Google Calendar

A lightweight Google Apps Script that automatically converts a day-wise college timetable into events on Google Calendar.

Instead of manually creating every lecture in your calendar, provide the starting date and timetable sequence, and the script automatically creates the classes for the week with their correct dates, times, durations, and colors.

---

## ✨ Features

- 📚 Stores a college timetable using JavaScript arrays
- 📅 Automatically calculates dates for each timetable day
- ⏰ Converts timetable time strings into JavaScript `Date` objects
- ➕ Automatically calculates class end times
- 📆 Creates events directly in the default Google Calendar
- 🎨 Supports subject-specific event colors
- 🔁 Supports rotating day-wise timetables
- 🧩 Built entirely with JavaScript and Google Apps Script

---

## 🖥️ Example

A timetable day is represented using nested arrays:

```javascript
const d1 = [
  ["English", "09:45"],
  ["English", "10:40"]
];
