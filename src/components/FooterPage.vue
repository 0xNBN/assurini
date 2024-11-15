<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 Comparateur d'Assurances Maroc. Tous droits réservés.</p>
      <div class="footer-links">
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>
        <a href="#terms">Conditions d'utilisation</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0288d1;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  margin-top: 20px;
}

.footer-content p {
  margin: 0;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.footer-links a {
  color: white;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
