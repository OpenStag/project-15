"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import styles from "./SignUpPopup.module.css";

interface SignUpPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpPopup = ({ isOpen, onClose }: SignUpPopupProps) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [isLoading, setIsLoading] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleOAuthSignIn = async (provider: "google" | "apple") => {
    setIsLoading(true);
    setError("");

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${location.origin}/auth/callback`,
        },
      });

      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError(`Failed to sign in with ${provider}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setError(error.message);
        } else {
          onClose();
          router.push("/");
        }
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${location.origin}/auth/callback`,
          },
        });

        if (error) {
          setError(error.message);
        } else if (data.user && !data.user.email_confirmed_at) {
          setError("Please check your email to confirm your account");
        } else {
          onClose();
          router.push("/");
        }
      }
    } catch (err) {
      setError("Authentication failed");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setShowEmailForm(false);
    setEmail("");
    setPassword("");
    setError("");
    setIsLogin(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      <div className={styles.popup}>
        {!showEmailForm ? (
          <>
            {/* Header */}
            <div className={styles.header}>
              <h2 className={styles.title}>
                Welcome To Trip<span className={styles.orange}>Go</span>
              </h2>
              <p className={styles.subtitle}>
                Create an Account to get started
              </p>
            </div>

            {/* Error Message */}
            {error && <div className={styles.errorMessage}>{error}</div>}

            {/* Auth Buttons */}
            <div className={styles.buttonGroup}>
              <button
                className={styles.authButton}
                onClick={() => handleOAuthSignIn("apple")}
                disabled={isLoading}
                aria-label="Continue with Apple"
              >
                <div className={styles.iconWrapper}>
                  <svg
                    className={styles.appleIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                </div>
                Continue With Apple
              </button>

              <button
                className={styles.authButton}
                onClick={() => handleOAuthSignIn("google")}
                disabled={isLoading}
                aria-label="Continue with Google"
              >
                <div className={styles.iconWrapper}>
                  <svg className={styles.googleIcon} viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
                Continue With Google
              </button>

              <button
                className={styles.authButton}
                onClick={() => setShowEmailForm(true)}
                disabled={isLoading}
                aria-label="Continue with Email"
              >
                <div className={styles.iconWrapper}>
                  <svg
                    className={styles.emailIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                Continue With Email
              </button>
            </div>

            {/* Login Link */}
            <p className={styles.loginPrompt}>
              Already have Account?{" "}
              <span
                className={styles.loginLink}
                onClick={() => {
                  setIsLogin(true);
                  setShowEmailForm(true);
                }}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setIsLogin(true);
                    setShowEmailForm(true);
                  }
                }}
              >
                Log in
              </span>
            </p>
          </>
        ) : (
          <>
            {/* Email Form Header */}
            <div className={styles.emailFormHeader}>
              <button
                className={styles.backButton}
                onClick={resetForm}
                aria-label="Go back"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                </svg>
              </button>
              <h2 className={styles.formTitle}>
                {isLogin ? "Welcome Back!" : "Create Account"}
              </h2>
              <p className={styles.formSubtitle}>
                {isLogin
                  ? "Sign in to your account"
                  : "Enter your details to get started"}
              </p>
            </div>

            {/* Error Message */}
            {error && <div className={styles.errorMessage}>{error}</div>}

            {/* Email Form */}
            <form onSubmit={handleEmailAuth} className={styles.emailForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className={styles.input}
                  minLength={6}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={styles.submitButton}
              >
                {isLoading
                  ? "Please wait..."
                  : isLogin
                  ? "Sign In"
                  : "Create Account"}
              </button>
            </form>

            {/* Toggle Auth Mode */}
            <p className={styles.togglePrompt}>
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <span
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError("");
                }}
                className={styles.toggleLink}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setIsLogin(!isLogin);
                    setError("");
                  }
                }}
              >
                {isLogin ? "Sign up" : "Log in"}
              </span>
            </p>
          </>
        )}

        {/* Close Button */}
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close popup"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SignUpPopup;
