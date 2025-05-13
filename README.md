# 🌐 CrUX Performance Analyzer

A full-stack web application to fetch and visualize **Chrome UX Report (CrUX)** data for one or more URLs using Google's official API.

## 🚀 Tech Stack

- ⚛️ **Frontend**: React + Material UI  
- 🧠 **Backend**: Node.js + Express  
- 📊 **API**: Google CrUX API  
- 📦 Optional: Docker for deployment

---

## 📁 Project Structure
```
📦 project-root/
├── 📂 frontend/ # React App
│ ├── 📂 src/
│ │ ├── 📂 components/ # Reusable UI components
│ │ ├── 📂 services/ # API integration
│ │ └── App.js
├── 📂 backend/ # Express Server
│ ├── 📂 controllers/ # API logic
│ ├── 📂 services/ # Business logic
│ ├── 📂 routes/ # Express routes
│ └── app.js
├── 📂 documentation/ # Screenshots, designs
└── 📄 README.md
```

## ✨ Features

### ✅ Part 1: Basic CrUX Fetching
- 🖊️ Enter a URL
- 🔍 Search to get CrUX data
- 📋 Display metrics in a data table
- ⚠️ Handle API and URL errors gracefully

### 🔎 Part 2: Filtering & Sorting
- 🔃 Sort by metrics like FCP, LCP, CLS
- 🎚️ Filter data by thresholds (e.g., "CLS > 0.1")

### 📦 Part 3: Bulk URL Support
- 📥 Paste multiple URLs (one per line)
- 🧮 Show summary: AVG, SUM, etc.
- ⏳ Progress indicators for large batches

### 💡 Bonus
- 📱 Fully responsive UI
- 🧠 Basic performance insights & suggestions
- ☁️ Deploy-ready (Docker supported)

---

## 🛠️ Setup Instructions

### 📋 Prerequisites
- Node.js (v14+)
- npm or yarn
- Google CrUX API Key 🔑
- (Optional) Docker

### ⚙️ Installation

```bash
# Clone repository
git clone https://github.com/your-repo/crux-analyzer.git
cd crux-analyzer
```

# 🔐 Add Environment Variables

Create backend/.env:

GOOGLE_API_KEY=your_google_api_key

PORT=5000

# 📦 Install Dependencies

## Install backend dependencies
```
cd backend
npm install

```

## Install frontend dependencies
```
cd frontend
npm install

```

## ▶️ Run the App

### In terminal 1
```
cd backend
npm start

```

### In terminal 2
```
cd frontend
npm run dev

```
Open 👉 http://localhost:5173

# 🎥 Demo Preview

📺 Watch Demo Video (https://crux-analyzer.netlify.app/)

# 🧠 Design Highlights
## 🖼️ Frontend
- React hooks for state 💡
- Material UI for styling 🎨
- Custom hooks for logic separation 🔧

## ⚙️ Backend
- Express API architecture 🔌
- Controller-service pattern 📂
- Scalable and modular code base 🏗️

# 📊 Summary Metrics
- Metric Description
- FCP	First Contentful Paint
- LCP	Largest Contentful Paint
- CLS	Cumulative Layout Shift
- INP	Interaction to Next Paint

