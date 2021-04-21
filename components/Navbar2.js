class Navbar2 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <section>
    <div class="bg-navbar-close" id="bg-navbar-close" onclick="closeNavbar()"></div>
    <div class="hamburger" onclick="openNavbar()">
      <i class="fas fa-bars"></i>
    </div>
    <nav class="wrapper-navbar" id="wrapper-navbar">
      <ul class="navbar-menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Vacuum cleaner</li>
      </ul>
    </nav>
  </section>
      `
    }
}

customElements.define('section-navbar2', Navbar2)
