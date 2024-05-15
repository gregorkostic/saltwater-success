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
        <h1>Log in</h1>
        <div class="input-group" :class="{ 'input-error': emailError }">
          <input
            type="email"
            v-model="email"
            placeholder="E-mail"
            @input="clearValidationMsg"
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
            @input="clearValidationMsg"
            class="input-field"
          />
          <span @click="togglePasswordVisibility" class="password-toggle">
            <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
          </span>
          <span v-if="passwordError" class="error-msg">{{
            passwordError
          }}</span>
        </div>
        <button @click="login">Log in</button>
        <div class="link forgot-pw" @click="forgotPassword">
          Forgot password?
        </div>
        <div class="link signup-link">
          <span>Don’t have an account? </span>
          <strong class="clickable" @click="goToSignup">Sign up</strong>
        </div>
      </div>
      <div class="reset-modal" v-if="showResetModal">
        <h2>Reset Password</h2>
        <div class="input-group" :class="{ 'input-error': resetEmailError }">
          <input
            id="resetEmail"
            type="email"
            v-model="resetEmail"
            placeholder="E-mail"
            @input="clearValidationMsg"
            @blur="validateResetEmail"
            class="input-field"
          />
          <span v-if="resetEmailError" class="error-msg">{{
            resetEmailError
          }}</span>
        </div>
        <div class="modal-buttons">
          <button @click="sendResetLink">Send Reset Link</button>
          <button @click="closeModal">Cancel</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      resetEmail: "",
      resetEmailError: "",
      showPassword: false,
      showResetModal: false,
    };
  },
  methods: {
    login() {
      this.validateEmail();
      this.validatePassword();
      if (!this.emailError && !this.passwordError) {
        // Simulate successful login
        // You should replace this with actual authentication logic
        this.$router.push("/home"); // Preusmjerava na HomePage.vue
      }
    },
    forgotPassword() {
      this.showResetModal = true;
    },
    goToSignup() {
      this.$router.push("/signup");
    },
    clearValidationMsg() {
      this.emailError = "";
      this.passwordError = "";
      this.resetEmailError = "";
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
      if (!this.password) {
        this.passwordError = "Password is required.";
      } else if (this.password.length < 6) {
        this.passwordError = "Password must be at least 6 characters long.";
      } else {
        this.passwordError = "";
      }
    },
    validateResetEmail() {
      if (!this.resetEmail) {
        this.resetEmailError = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.resetEmail)) {
        this.resetEmailError = "Please enter a valid email address.";
      } else {
        this.resetEmailError = "";
      }
    },
    sendResetLink() {
      this.validateResetEmail();
      if (!this.resetEmailError) {
        alert("Reset link sent to " + this.resetEmail);
        this.closeModal();
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    closeModal() {
      this.showResetModal = false;
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
  top: 1%;
  left: 0.5%;
  display: flex;
  align-items: center;
  color: white;
}

.login-logo {
  max-height: 60px;
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
}

.error-msg {
  color: red;
  font-size: 0.9em;
  position: absolute;
  top: 100%;
  left: 0;
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
