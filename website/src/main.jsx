import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
	apiKey: "AIzaSyBxT7p5BrZ3xPZVOvgo9oygU-JmXRWJI7I",
	authDomain: "holo-heights.firebaseapp.com",
	projectId: "holo-heights",
	storageBucket: "holo-heights.appspot.com",
	messagingSenderId: "51210990644",
	appId: "1:51210990644:web:ef2413526807eb5f074661",
	measurementId: "G-BQ5SPLEEM3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
