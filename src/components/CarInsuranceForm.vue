<template>
  <div class="form-container">
    <h2>Formulaire d'Assurance Voiture</h2>

    <!-- Question 1: Puissance fiscale -->
    <div class="question-container" :class="{ vibrate: isVibrating && step === 1 }" v-if="step === 1">
      <label for="puissance-fiscale">1) Chevaux Fiscaux (en CV)</label>
      <input
        type="number"
        id="puissance-fiscale"
        v-model="puissanceFiscale"
        placeholder="Exemple: 7"
        min="1"
        max="20"
        ref="puissanceFiscale"
      />
      <button class="next-btn" @click="nextStep('puissanceFiscale')">Suivant</button>
    </div>

    <!-- Question 2: Type de carburant -->
    <div class="question-container" :class="{ vibrate: isVibrating && step === 2 }" v-if="step === 2">
      <label for="carburant">2) Type de carburant</label>
      <div class="toggle-group">
        <label class="toggle-option" :class="{ active: carburant === 'essence' }">
          <input type="radio" name="carburant" value="essence" v-model="carburant" />
          Essence
        </label>
        <label class="toggle-option" :class="{ active: carburant === 'diesel' }">
          <input type="radio" name="carburant" value="diesel" v-model="carburant" />
          Diesel
        </label>
      </div>
      <button class="next-btn" @click="nextStep('carburant')">Suivant</button>
    </div>

    <!-- Question 3: Sexe -->
    <div class="question-container" :class="{ vibrate: isVibrating && step === 3 }" v-if="step === 3">
      <label>3) Vous êtes homme ou femme</label>
      <div class="toggle-group">
        <label class="toggle-option" :class="{ active: sexe === 'homme' }">
          <input type="radio" name="sexe" value="homme" v-model="sexe" />
          Homme
        </label>
        <label class="toggle-option" :class="{ active: sexe === 'femme' }">
          <input type="radio" name="sexe" value="femme" v-model="sexe" />
          Femme
        </label>
      </div>
      <button class="next-btn" @click="nextStep('sexe')">Suivant</button>
    </div>

    <!-- Question 4: Email -->
    <div class="question-container" :class="{ vibrate: isVibrating && step === 4 }" v-if="step === 4">
      <label for="email">4) Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="Exemple: email@domaine.com"
        required
        ref="email"
      />
      <button class="next-btn" @click="nextStep('email')">Suivant</button>
    </div>

    <!-- Question 5: Numéro de téléphone -->
    <div class="question-container" :class="{ vibrate: isVibrating && step === 5 }" v-if="step === 5">
      <label for="phone">5) Numéro de téléphone</label>
      <input
        type="tel"
        id="phone"
        v-model="phone"
        placeholder="Exemple: +212 600 000 000"
        required
        ref="phone"
      />
      <button class="next-btn" @click="nextStep('phone')">Suivant</button>
    </div>

    <!-- Submit Button -->
    <div class="submit-button" v-if="step === 6">
      <button @click="submitForm">Envoyer</button>
      <!-- Display the API response message -->
      <p v-if="responseMessage" class="response-message">{{ responseMessage }}</p>
    </div>

    <div class="progress-bar" :style="{ width: `${(step / 6) * 100}%` }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      puissanceFiscale: '',
      carburant: '',
      sexe: '',
      email: '',
      phone: '',
      isVibrating: false,
      responseMessage: '' // To store the response from the API
    };
  },
  methods: {
    nextStep(field) {
      if (this.isValid(field)) {
        this.isVibrating = false;
        if (this.step < 6) {
          this.step++;
        }
      } else {
        this.isVibrating = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this.isVibrating = false;
          }, 500);
        });
      }
    },
    isValid(field) {
      switch (field) {
        case 'puissanceFiscale':
          return this.puissanceFiscale && this.puissanceFiscale > 0;
        case 'carburant':
          return this.carburant;
        case 'sexe':
          return this.sexe;
        case 'email':
          return this.email && /\S+@\S+\.\S+/.test(this.email);
        case 'phone':
          return this.phone && /\+?\d{1,3}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}/.test(this.phone);
        default:
          return false;
      }
    },


    async submitForm() {
      try {
        const response = await fetch(
          `https://your-api-endpoint.com/submit?puissanceFiscale=${this.puissanceFiscale}&carburant=${this.carburant}&sexe=${this.sexe}&email=${this.email}&phone=${this.phone}`,
          { method: "GET" }
        );
        const data = await response.json();
        // Update responseMessage with the API response
        this.responseMessage = data.message || "Votre demande a bien été prise en compte.";
      } catch (error) {
        console.error("Error submitting form:", error);
        this.responseMessage = "Une erreur est survenue. Veuillez réessayer.";
      }
    }


  }
};
</script>

<style scoped>

.response-message {
  margin-top: 10px;
  font-size: 16px;
  color: #0288d1;
}

input[type="number"],
input[type="email"],
input[type="tel"],
.radio-group,
.toggle-group {
  margin-bottom: 15px; /* Adds spacing above the button */
}

/* General Styles */
.form-container {
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Responsive Layout */
@media (max-width: 600px) {
  .form-container {
    padding: 15px;
  }
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.question-container {
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

.question-container.vibrate {
  animation: shake 0.3s ease forwards;
}

input[type="number"],
input[type="email"],
input[type="tel"] {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

/* Toggle Group Styles */
.toggle-group {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.toggle-option {
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-weight: bold;
}

.toggle-option.active {
  background-color: #0288d1;
  color: white;
  border: 1px solid #0288d1;
}

/* Next Button Styles */
.next-btn {
  width: 100%;
  padding: 10px;
  background-color: #0288d1;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.next-btn:hover {
  background-color: #0277bd;
}

.submit-button button {
  padding: 10px 20px;
  background-color: #0288d1;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}

.submit-button button:hover {
  background-color: #0277bd;
}

/* Progress Bar */
.progress-bar {
  height: 4px;
  background-color: #0288d1;
  border-radius: 2px;
  margin-top: 20px;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(10px); }
}
</style>
