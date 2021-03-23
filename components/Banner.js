class Banner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="banner">
      <div class="background-banner">
        <img src="./assets/banner1.png" alt="Banner" />
      </div>
      <div class="info-banner-wrapper">
        <div class="info-title">
          <h1>Air Pump</h1>
          <p>มาพร้อมกับจอแสดงผลLEDสำหรับการใช้งานในที่มืด พร้อมปุ่มกดบนด้านหน้า ตัวอุปกรณ์ทำจากโลหะ ภายในบรรจุท่ออากาศ 120 มม. </p>
          <button>ซื้อ</button>
        </div>
      </div>
    </div>
    `
  }
}

customElements.define('section-banner', Banner)