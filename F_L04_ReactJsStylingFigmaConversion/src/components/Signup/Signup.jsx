import styles from "./Signup.module.css";
import logo from "../../assets/logo.svg";

export default function Signup() {
    return (
        <div className={styles.signup}>
            {/* Left panel */}
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img
                    className={styles.logo}
                    src={logo}
                    alt="Design Spacee logo"
                />

                <p className={styles.link}>figma.com/@designspacee</p>
            </section>

            {/* Right panel */}
            <section className={styles.right}>
                <div className={styles.form}>
                    <h2>Create Account</h2>

                    {/* Social sign-up buttons */}
                    <div className={styles.socialButtons}>
                        <button type="button">
                            Sign up with Google
                        </button>

                        <button type="button">
                            Sign up with Facebook
                        </button>
                    </div>

                    {/* Divider */}
                    <div className={styles.divider}>
                        <span>—</span>
                        <span>OR</span>
                        <span>—</span>
                    </div>

                    {/* Sign-up form */}
                    <input
                        type="text"
                        placeholder="Full Name"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                    />

                    <button className={styles.createButton}>
                        Create Account
                    </button>

                    <p className={styles.login}>
                        Already have an account?
                        <a href="#"> Login</a>
                    </p>
                </div>
            </section>
        </div>
    );
}