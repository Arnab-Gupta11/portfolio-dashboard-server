# 📦 **Project Name**: Portfolio-server

## ✨ **Features**

The backend is powered by **Node.js, Express.js, and MongoDB**, ensuring seamless data handling and security.

- 📡 **REST API** – Provides structured endpoints for handling blogs, projects, and messages.
- 🛡️ **Authentication** – Uses NextAuth for social login.
- 🗃️ **Database** – Stores all data in MongoDB with efficient query handling via Mongoose.

## 🚀 **Technologies Used**

| Technology | Purpose                                           | Version Required |
| ---------- | ------------------------------------------------- | ---------------- |
| Node.js    | Runtime environment for building the application. | v20.4.0          |
| Express.js | Framework for creating RESTful APIs.              | v4.18.2          |
| TypeScript | Enhances JavaScript with static typing.           | v5.3.0           |
| MongoDB    | NoSQL database for storing application data.      | v6.0.0           |
| Mongoose   | ODM for MongoDB to model application data.        | v7.0.2           |

## 🛠️ **Installation and Setup**

### **Prerequisites**

Ensure you have the following installed:

- **Node.js** (v18 or later)
- **npm** (Node Package Manager)
- **MongoDB** (local or a MongoDB Atlas cluster)

---

### **Clone the Repository**

```bash
https://github.com/Arnab-Gupta11/portfolio-server.git
cd Blog-App-Server
```

### **Install Dependencies**

```bash
npm install
```

### **Setup Environment Variables**

Create a `.env` file in the project root and configure the following variables:

```env
MONGO_URI=mongodb+srv://<your_mongo_user>:<your_mongo_password>@<your_mongo_cluster>/portfoloDB?retryWrites=true&w=majority
PORT=5000
```

### **Build the Project**

Compile the TypeScript files:

```bash
npm run build
```

## 🧰 Usage

### **Start the Server**

For production:

```bash
npm run start:prod
```

For development:

```bash
npm run start:dev
```

The application will be available at:

```bash
http://localhost:5000
```

## ✨ **Contact**

For questions or collaboration, feel free to reach out via email at [arnab.gupta.011@gmail.com](mailto:arnab.gupta.011@gmail.com).
