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
        <div class="input-group password">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            placeholder="Password"
            @input="clearValidationMsg"
            class="input-field"
          />
          <!-- Icon for toggling password visibility -->
          <span @click="togglePasswordVisibility" class="password-toggle">
            <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
          </span>
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
      resetEmail: "",
      resetEmailError: "",
      showPassword: false,
      showResetModal: false,
    };
  },
  methods: {
    login() {
      if (!this.email) {
        this.emailError = "Email is required.";
        return;
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
      this.resetEmailError = "";
    },
    validateEmail() {
      if (!this.email) {
        this.emailError = "Email is required.";
      } else if (/[čćšđž]/i.test(this.email)) {
        this.emailError = "Please enter a valid email address.";
      } else {
        this.emailError = "";
      }
    },
    validateResetEmail() {
      if (!this.resetEmail) {
        this.resetEmailError = "Email is required.";
      } else if (/[čćšđž]/i.test(this.resetEmail)) {
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
  border: 1px solid #ccc; /* Correctly define the border */
  border-radius: 4px; /* Rounded corners for aesthetics */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
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
  color: #757575; /* Set the default color to a lighter gray */
  text-decoration: none;
  cursor: pointer;
  display: block;
  margin-top: 10px;
}
.signup-link strong {
  color: #0056b3; /* Set the color for 'Sign up' to the theme blue */
  cursor: pointer; /* Ensures the cursor changes to a pointer when hovered */
  font-weight: normal; /* Keeps text not bold by default */
  text-decoration: none; /* No underline by default */
}

.signup-link strong:hover {
  text-decoration: underline; /* Underline appears only on hover */
}

.password-toggle {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 51%; /* Center vertically in the input field */
  transform: translateY(-50%); /* Center alignment adjustment */
  color: #757575; /* Set the default color to a lighter gray */
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
