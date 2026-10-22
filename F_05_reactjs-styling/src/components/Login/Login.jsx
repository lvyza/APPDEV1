
import { useState } from "react";
import styles from "./Login.module.css";
import botanicalLeaves from "../../assets/botanical-leaves.png";

function Login() {
  const [activeTab, setActiveTab] = useState("login");

  const isLogin = activeTab === "login";

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.imagePanel}>
          <img
            src={botanicalLeaves}
            alt="Blue-gray botanical leaves"
            className={styles.botanicalImage}
          />
        </div>

        <div className={styles.formPanel}>
          <h1 className={styles.heading}>
            <span>Hello,</span> Guyss!
          </h1>

          <div className={styles.tabs}>
            <button
              type="button"
              className={isLogin ? styles.activeTab : styles.tab}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>

            <button
              type="button"
              className={!isLogin ? styles.activeTab : styles.tab}
              onClick={() => setActiveTab("signup")}
            >
              SignUp
            </button>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Enter your name"
                aria-label="Name"
                required
              />
            )}

            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email"
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              aria-label="Password"
              required
            />

            <button type="submit" className={styles.loginButton}>
              {isLogin ? "Login" : "SignUp"}
            </button>
          </form>

          <p className={styles.separator}>Or</p>

          <div className={styles.socialButtons}>
            <button
              type="button"
              aria-label="Continue with Google"
              className={styles.google}
            >
              G
            </button>

            <button
              type="button"
              aria-label="Continue with Facebook"
              className={styles.facebook}
            >
              f
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
