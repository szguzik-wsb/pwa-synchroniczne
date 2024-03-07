<template>
  <section class="section newsletter-section">
    <div class="container">
      <h1 class="title is-1">Newsletter</h1>
      <p class="message">Nie przegap okazji, dołącz do naszego newslettera.</p>
      <div class="newsletter-form-container">
        <form class="is-flex is-align-items-center">
          <div class="control has-icons-left">
            <input
              class="input"
              type="email"
              id="email"
              placeholder="Podaj swój adres Email"
              required
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
          <div class="control field">
            <button class="button">
              Zapisz się! ->
            </button>
          </div>
        </form>
      </div>
      <div>
        <label class="checkbox">
          <input type="checkbox" id="privacypolicy" required />
          Zapoznałem/am się z polityką prywatności
        </label>
      </div>
    </div>
  </section>
</template>

<style scoped>
.newsletter-section {
  background-color: rgb(249, 247, 244);
  padding: 50px 0;
  text-align: center;
  position: relative;
}
.newsletter-section::before {
  width: 1px;
  height: 48px;
  background: #000;
  content: '';
  top: -24px;
  position: absolute;
}
.message {
  margin: 20px 0px;
}
.newsletter-container {
  width: 100%;
}
.submit-button {
  background: #d9cfce;
}
.newsletter-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
