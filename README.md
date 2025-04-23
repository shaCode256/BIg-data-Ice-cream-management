# 🍦 Ice Cream Sales Management System (Kafka + Big Data Simulation)

This project simulates and monitors the real-time sales and stock levels of various ice cream flavors across a large chain of branches. The system is divided into three main subsystems, integrating Kafka, Redis, MySQL, MongoDB, and BigML to support data ingestion, visualization, and prediction capabilities.

---

## 🎯 Project Objective

To develop a big data system that:
- Monitors real-time stock levels of five ice cream flavors across at least 100 branches.
- Visualizes current stock and total inventory with a live dashboard.
- Predicts the future demand for ice cream flavors in a specific branch on a specific date.

---

## 🍨 Ice Cream Flavors
- Chocolate
- Vanilla
- Strawberry
- Lemon
- Halva

---

## 🧩 Subsystems Overview

### A. Operational Subsystem – Sales Simulator
- A simulator sends sales messages to a Kafka broker.
- Each message represents a sale of one or more ice cream flavors from a branch.

### B. Real-Time Dashboard Subsystem
- Uses Redis to store and update current stock levels for each flavor in each branch.
- Displays:
  - **Bar Chart** – per-branch inventory per flavor.
  - **Pie Chart** – total stock of each flavor across all branches.
- Includes a prediction interface that allows:
  - Requesting a prediction from the model in Subsystem C.
  - Viewing predicted consumption for a given branch, flavor, and future date.

### C. Historical Data & Prediction Subsystem
- ELT process: Extract, Load, Transform
- Stores locality information and characteristics in a MySQL database (loaded once from a static dataset).
- On receiving a sale message:
  - Fetches current weather in the relevant settlement.
  - Checks if the coming week contains a holiday.
  - Stores enriched data as a document in MongoDB.
- On request:
  - Prepares a dataset for training.
  - Calls BigML to train a **Decision Tree model**.
  - Enables prediction of future consumption per flavor/branch/date.

---

## 📊 Prediction Model Input Features
- Day of the week
- Month
- Whether the week is a holiday week
- Weather on the day (very cold, cold, pleasant, hot, very hot)
- Consumption level (per flavor):
  - Zero (under 1 kg)
  - Low (up to 20 kg)
  - Medium (up to 60 kg)
  - High (up to 120 kg)
  - Very high (over 120 kg)
- Settlement size (ordinal scale: 8 levels)
- Population type (Jewish, Arab, Mixed)
- Age group distribution:
  - 0–5
  - 6–18 (children/youth)
  - 19–45 (young adults)
  - 46–55 (adults)
  - 56+ (older adults)

---

## 🛠 Technologies Used
- Kafka – for message streaming
- Redis – for real-time inventory state
- MySQL – for storing static demographic data
- MongoDB – for document storage of enriched sales events
- BigML – for training and serving predictions
- Python – for all service implementations and simulation logic

---

## 📦 Setup Instructions
To be added based on your deployment preferences (Docker Compose, local Python scripts, etc).

---

## ❤️ Built for educational and simulation purposes in big data & machine learning systems.
