/* src/views/LandingPage.vue */
<template>
  <div class="landing-page">

    <section class="main-section">
      <h1>Nos comparateurs d'assurance : </h1>
      <div class="cards-container">
        <router-link to="/assurance-voiture-maroc" class="card-link">
        <div class="card">
          <div class="card-icon">🚗</div>
          <h3>Assurance Auto</h3>
        </div>
        </router-link>
      </div>
    </section>

    <section class="partners-section">
      <h2>Nos Partenaires</h2>
      <div class="partners-placeholder">
        <img src="partner-logo-placeholder.png" alt="Partenaire">
      </div>
    </section>
  </div>
</template>


<style scoped>
/* Container and Navbar Styles */
.landing-page {
  background-color: #e0f7fa;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background-color: #0288d1;
  border-radius: 0 0 20px 20px;
}

.navbar ul {
  display: flex;
  gap: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
}

/* Cards Layout */
.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-icon {
  font-size: 40px;
  margin-bottom: 10px;
}

/* Partners Section */
.partners-section {
  margin-top: 40px;
  padding: 20px;
  background-color: white;
  border-radius: 20px 20px 0 0;
}

.partners-placeholder img {
  max-width: 100%;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .navbar ul {
    flex-direction: column;
    gap: 10px;
  }

  .cards-container {
    grid-template-columns: 1fr;
  }

  .landing-page {
    padding: 15px;
  }

  .card {
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .navbar {
    flex-direction: column;
    padding: 15px;
  }

  .navbar ul {
    gap: 5px;
  }

  h1, h2 {
    font-size: 1.5rem;
  }

  .card h3 {
    font-size: 1rem;
  }
}
</style>
