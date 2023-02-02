function Kontakt() {
  return (
    <form className="email-form" id="email-form">
      <h1>Kontaktujte ma</h1>
      <label htmlFor="email">Vaša emailová adresa:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">Správa:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Poslať email</button>
    </form>
  );
}

export default Kontakt;
