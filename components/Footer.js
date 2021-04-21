class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <div class="footer-top">
            <div class="footer-list">
                <ul class="search-shop-footer">ค้นหาร้านค้า
                    <li class="register-footer">สมัครเป็นสมาชิก</li>
                </ul>
               
            </div>
            <div class="footer-list">
                <ul>รับความช่วยเหลือ
                    <li>สถานะการสั่งซื้อ</li>
                    <li>การส่งมอบ</li>
                    <li>การคืนสินค้า</li>
                    <li>ทางเลือกการชำระเงิน</li>
                    <li>ติดต่อเรา</li>
                </ul>
            </div>
            <div class="footer-list">
                <ul>เกี่ยวกับเรา
                    <li>ข่าวสาร</li>
                    <li>ร่วมงานกับเรา</li>
                    <li>ร่วมลงทุนกับเรา</li>
                    <li>ความยั่งยืน</li>
                </ul>
            </div>
            <div class="footer-list">
                <ul>คำแนะนำ
                    <li>เงื่อนไขการขาย</li>
                    <li>ข้อกำหนดการใช้</li>
                    <li>นโยบายการเป็นส่วนตัว</li>
                </ul>
            </div>
            <div class="footer-list">
                <ul>Social
                    <li><i class="fab fa-facebook-f"></i>Facebook</li>
                    <li><i class="fab fa-twitter"></i>Twitter</li>
                    <li><i class="fab fa-instagram"></i>Instragram</li>
                    <li><i class="fab fa-youtube"></i>Youtube</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <span><i class="fas fa-map-marker-alt"></i>ไทย</span>
            <span>© 2020 , INC. สงวนสิทธ์</span>
        </div>
    </footer>
    `
  }
}

customElements.define('section-footer', Footer)