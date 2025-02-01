# **HNG Stage 0 Backend API**

This is a simple public API that provides basic information such as the developer's email, the current datetime in ISO 8601 format, and the GitHub repository URL.

---

## 🚀 Features

- Returns developer's registered email.
- Returns the current datetime in **UTC (ISO 8601 format)**.
- Returns the GitHub URL of this project.
- Supports **CORS** for cross-origin requests.

---

## 📌 Live API URL

🔗 **[View Live API](https://hng-backend-stage0-qfts.onrender.com)**

---

## ⚙️ Setup Instructions

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/MakindeTobby/hng-backend-stage0.git
cd hng-backend-stage0
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Run the API Locally**

```sh
node server.js
```

- The API should now be running at http://localhost:8000

## 📍 Endpoint

- GET /

## 📤 Response Format

- Status Code: **200 OK**
- Content-Type: **application/json**

Example JSON Response

```
{
  "email": "makindetobiloba9@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/MakindeTobby/hng-backend-stage0"
}
```

## 🔗 Example Usage

Using JavaScript (Fetch API):

```
fetch("https://hng-backend-stage0-qfts.onrender.com")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

```

## 🛠 Technologies Used

- Node.js
- Express.js
- Render (for deployment)

 ## 📢 Hire Node.js Developers

Looking to hire top Node.js developers?
Check out **HNG Talent Pool:**
🔗 **[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)** 

## 🤝 Contributing

Feel free to submit pull requests or issues to improve this API.

## 📄 License

This project is licensed under the MIT License.
