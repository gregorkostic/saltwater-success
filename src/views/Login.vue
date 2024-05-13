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
    <div class="login-card">
      <h1>Login</h1>
      <div class="input-group">
        <input
          type="email"
          v-model="email"
          placeholder="Email address"
          @input="clearValidationMsg"
          :class="{ 'input-error': emailError }"
        />
        <span v-if="emailError" class="error-msg">{{ emailError }}</span>
      </div>
      <div class="input-group password">
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          placeholder="Password"
          @input="clearValidationMsg"
        />
        <span @click="togglePasswordVisibility" class="password-toggle">
          <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
        </span>
      </div>
      <button @click="login">Login</button>
      <div class="link forgot-pw" @click="forgotPassword">Forgot password?</div>
      <div class="link signup-link blurred" @click="goToSignup">
        Don't have an account? <span>Sign up</span>
      </div>
    </div>
    <div v-if="showResetModal" class="reset-modal">
      <h2>Password Reset</h2>
      <input type="email" v-model="resetEmail" placeholder="Email" />
      <button @click="sendResetLink">Send Reset Link</button>
      <button @click="closeModal">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      showPassword: false,
      showResetModal: false,
      resetEmail: "",
    };
  },
  methods: {
    login() {
      if (!this.email) {
        this.emailError = "Email is required";
        return;
      }
      // Authentication logic here
    },
    forgotPassword() {
      this.showResetModal = true; // Show reset modal
    },
    goToSignup() {
      this.$router.push("/signup");
    },
    clearValidationMsg() {
      this.emailError = "";
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    sendResetLink() {
      // Send reset link logic
      alert("Reset link sent to " + this.resetEmail);
      this.closeModal();
    },
    closeModal() {
      this.showResetModal = false;
    },
  },
};
</script>

<style scoped>
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
.login-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}
.input-group {
  position: relative;
  margin-bottom: 10px;
}
.input-error {
  border: 2px solid red;
}
.error-msg {
  color: red;
  font-size: 0.8em;
  margin-top: -5px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.link {
  color: #0056b3;
  text-decoration: underline;
  cursor: pointer;
}
.password-toggle {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  color: #0056b3;
}
.signup-link blurred span {
  filter: blur(1px);
}
.reset-modal {
  position: absolute;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}
</style>
