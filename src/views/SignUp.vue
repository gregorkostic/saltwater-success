<template>
  <div class="login-container">
    <div class="top-left-bar">
      <img
        src="../assets/fish_logo.png"
        alt="Saltwater Success Logo"
        class="login-logo"
      />
      <span class="logo-text">Saltwater Success</span>
    </div>
    <transition name="fade">
      <div class="login-card" v-if="!showResetModal">
        <h1>Sign up</h1>
        <div class="input-group" :class="{ 'input-error': nameError }">
          <input
            type="text"
            v-model="name"
            placeholder="Name"
            @blur="validateName"
            class="input-field"
          />
          <span v-if="nameError" class="error-msg">{{ nameError }}</span>
        </div>
        <div class="input-group" :class="{ 'input-error': surnameError }">
          <input
            type="text"
            v-model="surname"
            placeholder="Surname"
            @blur="validateSurname"
            class="input-field"
          />
          <span v-if="surnameError" class="error-msg">{{ surnameError }}</span>
        </div>
        <div class="input-group" :class="{ 'input-error': emailError }">
          <input
            type="email"
            v-model="email"
            placeholder="E-mail"
            @blur="validateEmail"
            class="input-field"
          />
          <span v-if="emailError" class="error-msg">{{ emailError }}</span>
        </div>
        <div
          class="input-group password"
          :class="{ 'input-error': passwordError }"
        >
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            placeholder="Password"
            @blur="validatePassword"
            class="input-field"
          />
          <span @click="togglePasswordVisibility" class="password-toggle">
            <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
          </span>
          <span v-if="passwordError" class="error-msg">{{
            passwordError
          }}</span>
        </div>
        <div
          class="input-group password"
          :class="{ 'input-error': confirmPasswordError }"
        >
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            v-model="confirmPassword"
            placeholder="Confirm Password"
            @blur="validateConfirmPassword"
            class="input-field"
          />
          <span
            @click="toggleConfirmPasswordVisibility"
            class="password-toggle"
          >
            <i
              :class="showConfirmPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
            ></i>
          </span>
          <span v-if="confirmPasswordError" class="error-msg">{{
            confirmPasswordError
          }}</span>
        </div>
        <button @click="register" class="button">Sign up</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";

export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
      nameError: "",
      surnameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      showResetModal: false,
    };
  },
  methods: {
    clearValidationMsg() {
      this.nameError = "";
      this.surnameError = "";
      this.emailError = "";
      this.passwordError = "";
      this.confirmPasswordError = "";
    },
    validateName() {
      this.nameError = this.name.trim() ? "" : "Name is required.";
    },
    validateSurname() {
      this.surnameError = this.surname.trim() ? "" : "Surname is required.";
    },
    validateEmail() {
      if (!this.email) {
        this.emailError = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.emailError = "Please enter a valid email address.";
      } else {
        this.emailError = "";
      }
    },
    validatePassword() {
      this.passwordError = this.password ? "" : "Password is required.";
    },
    validateConfirmPassword() {
      if (!this.confirmPassword) {
        this.confirmPasswordError = "Confirm password is required.";
      } else if (this.confirmPassword !== this.password) {
        this.confirmPasswordError = "Passwords do not match.";
      } else {
        this.confirmPasswordError = "";
      }
    },
    async register() {
      this.clearValidationMsg();
      this.validateName();
      this.validateSurname();
      this.validateEmail();
      this.validatePassword();
      this.validateConfirmPassword();

      if (
        !this.nameError &&
        !this.surnameError &&
        !this.emailError &&
        !this.passwordError &&
        !this.confirmPasswordError
      ) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            this.email,
            this.password
          );
          const user = userCredential.user;
          console.log("User created:", user);

          await setDoc(doc(db, "Users", user.uid), {
            Email: this.email,
            Name: this.name,
            Surname: this.surname,
            AuthorisationType: "USER",
          });

          alert("Registration successful!");
          this.$router.push("/home");
        } catch (error) {
          console.error("Error during registration:", error); // Add this line
          alert("An error occurred: " + error.message);
        }
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
  },
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
  color: #0056b3;
  text-decoration: underline;
}

.clickable:hover {
  text-decoration: none;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
}

.top-left-bar {
  position: absolute;
  top: 1.3%;
  left: 0.84%;
  display: flex;
  align-items: center;
  color: white;
}

.login-logo {
  max-height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
}

.login-card,
.reset-modal {
  background: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
  transition: all 0.3s ease-in-out;
}

.input-group {
  position: relative;
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 12px 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.input-error input {
  border: 2px solid red;
  background-color: #ffdddd;
}

.error-msg {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
  text-align: left;
}

button {
  width: 100%;
  padding: 15px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.link,
.signup-link span {
  color: #757575;
  text-decoration: none;
  cursor: pointer;
  display: block;
  margin-top: 10px;
}

.signup-link strong {
  color: #0056b3;
  cursor: pointer;
  font-weight: normal;
  text-decoration: none;
}

.signup-link strong:hover {
  text-decoration: underline;
}

.password-toggle {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 51%;
  transform: translateY(-50%);
  color: #757575;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
