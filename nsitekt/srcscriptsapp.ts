// Définition des types
interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface Review {
  stars: number;
  text: string;
  author: string;
}

// Données
const entrees: MenuItem[] = [
  { name: 'Velouté de Châtaigne', description: 'Onctueux, muscade fraîche.', price: '9 €', image: 'images/Velout%C3%A9%20de%20Ch%C3%A2taigne.png' },
  { name: "Tartelette à l'Oignon", description: 'Pâte feuilletée, oignons caramélisés.', price: '9 €', image: 'images/Tartelette%20%C3%A0%20l\'Oignon.png' },
  { name: 'Pâté de Campagne', description: 'Cornichons, salade croquante.', price: '9 €', image: 'images/P%C3%A2t%C3%A9%20de%20Campagne.png' },
  { name: 'Rillette de Saumon', description: 'Crème d\'Isigny, pain toasté.', price: '10 €', image: 'images/Rillette%20de%20Saumon.png' },
  { name: 'Ceviche de Bar', description: 'Agrumes, avocat, coriandre.', price: '11 €', image: 'images/Ceviche%20de%20Bar.png' },
];

const plats: MenuItem[] = [
  { name: 'Pièce du Boucher', description: 'Purée maison, sauce chimichurri.', price: '24 €' },
  { name: 'Pâtes au Pesto', description: 'Basilic frais, pignons, parmesan AOP.', price: '18 €' },
  { name: 'Poisson du Jour', description: 'Riz basmati, sauce vierge.', price: '21 €' },
  { name: 'Bowl Falafel', description: 'Pois chiches, légumes, tahini.', price: '16,5 €' },
];

const incontournables: MenuItem[] = [
  { name: 'Burger K&B', description: 'Steak haché, oignons caramélisés, frites.', price: '21 €' },
  { name: 'Burger Végé K&B', description: 'Steak végétal, mêmes garnitures.', price: '19 €' },
  { name: 'Salade César', description: 'Poulet, croûtons, parmesan.', price: '18 €' },
  { name: 'Club Sandwich', description: 'Poulet, bacon, crudités.', price: '18 €' },
  { name: 'Tenders K&B', description: 'Marinés maison, panure croustillante.', price: '19 €' },
];

const desserts: MenuItem[] = [
  { name: 'Crème Caramel', description: 'Caramel beurre salé, vanille.', price: '9 €' },
  { name: 'Compote de Pommes', description: 'Pommes du verger, cannelle.', price: '9 €' },
  { name: 'Brownie & Glace Vanille', description: 'Cœur fondant chocolat.', price: '9 €' },
  { name: 'Salade de Fruits', description: 'Fruits frais, sirop menthe-citron.', price: '8,5 €' },
];

const galleryImages: GalleryImage[] = [
  { src: 'images/1.png', alt: 'Plat signature' },
  { src: 'images/2.png', alt: 'Cocktail' },
  { src: 'images/3.png', alt: 'Salle' },
  { src: 'images/4.png', alt: 'Terrasse' },
  { src: 'images/5.png', alt: 'Dessert' },
  { src: 'images/8.png', alt: 'Service' },
  { src: 'images/unnamed.png', alt: 'Planche' },
  { src: 'images/unnamed.png', alt: 'Bar' },
];

const reviews: Review[] = [
  { stars: 5, text: '« Poisson parfait, légumes croquants. Un régal. »', author: 'Yosr Gargouri' },
  { stars: 5, text: '« Cuisine fine, service rapide, cadre détendu. »', author: 'M C Garden' },
  { stars: 5, text: '« Dîner agréable, carte de saison bien faite. »', author: 'Nicolas Billaud' },
];

// Composants de rendu
function renderHeader(): string {
  return `
    <div class="container">
      <nav>
        <a href="#" class="logo">KITCHEN & BAR</a>
        <ul class="nav-links">
          <li><a href="#experience">Expérience</a></li>
          <li><a href="#carte">Carte</a></li>
          <li><a href="#galerie">Galerie</a></li>
          <li><a href="#infos">Infos</a></li>
          <li><a href="#reserver">Réserver</a></li>
        </ul>
        <div class="mobile-menu"><i class="fas fa-bars"></i></div>
      </nav>
    </div>
  `;
}

function renderHero(): string {
  return `
    <section class="hero">
      <div class="hero-content">
        <h1 data-aos="fade-down" data-aos-duration="1200">KITCHEN & BAR</h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="300">Courtyard by Marriott Paris Créteil</p>
        <div class="hero-rating" data-aos="fade-up" data-aos-delay="600">
          <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
          <span>3.1 • 26 avis</span>
          <div class="price-badge">20 – 30 €</div>
        </div>
        <a href="#experience" class="cta-hero" data-aos="zoom-in" data-aos-delay="900">Découvrir</a>
      </div>
    </section>
  `;
}

function renderExperience(): string {
  return `
    <section id="experience">
      <div class="container">
        <div class="split-section" data-aos="fade-up">
          <div class="split-image">
            <img src="images/1.png" alt="Ambiance" onerror="this.src='data:image/svg+xml,...'">
          </div>
          <div class="split-text">
            <h2>Une expérience<br>gastronomique 5★</h2>
            <p>Situé au cœur du Courtyard by Marriott Paris Créteil, notre restaurant vous accueille dans un cadre raffiné mêlant design contemporain et touches dorées. Terrasse lounge, cocktails d'exception et service attentionné.</p>
            <a href="#carte" class="btn-text">Découvrir la carte <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderMenuCategory(title: string, items: MenuItem[]): string {
  const itemsHtml = items.map(item => `
    <div class="menu-item">
      ${item.image ? `<img class="item-image" src="${item.image}" alt="${item.name}" onerror="this.style.display='none'">` : ''}
      <h4 class="item-name">${item.name}</h4>
      <p class="item-desc">${item.description}</p>
      <div class="item-price">${item.price}</div>
    </div>
  `).join('');
  
  return `
    <h3 style="font-size:2.2rem; margin:60px 0 30px;" data-aos="fade-up">${title}</h3>
    <div class="menu-grid" data-aos="fade-up" data-aos-delay="100">${itemsHtml}</div>
  `;
}

function renderMenu(): string {
  return `
    <section id="carte" class="container">
      <h2 class="section-title" data-aos="fade-up">La Carte</h2>
      ${renderMenuCategory('Pour Commencer', entrees)}
      ${renderMenuCategory('Plats Signature', plats)}
      ${renderMenuCategory('Incontournables', incontournables)}
      ${renderMenuCategory('Douceurs', desserts)}
    </section>
  `;
}

function renderGallery(): string {
  const items = galleryImages.map((img, i) => `
    <div class="gallery-item" data-img="${i+1}/8">
      <img src="${img.src}" alt="${img.alt}" onerror="this.style.display='none'">
    </div>
  `).join('');
  
  return `
    <section id="galerie" class="gallery">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Galerie Gourmande</h2>
        <div class="gallery-grid" data-aos="fade-up" data-aos-delay="200">${items}</div>
      </div>
    </section>
  `;
}

function renderInfo(): string {
  return `
    <section id="infos" class="container">
      <h2 class="section-title" data-aos="fade-up">Informations</h2>
      <div class="info-grid">
        <div class="info-card" data-aos="fade-up" data-aos-delay="100"><div class="info-icon"><i class="fas fa-map-pin"></i></div><h3>Adresse</h3><p>2 Rue Daniel Costantini<br>94000 Créteil</p></div>
        <div class="info-card" data-aos="fade-up" data-aos-delay="200"><div class="info-icon"><i class="fas fa-clock"></i></div><h3>Horaires</h3><p>Ouvert · 23:30<br>12h–22h</p></div>
        <div class="info-card" data-aos="fade-up" data-aos-delay="300"><div class="info-icon"><i class="fas fa-phone-alt"></i></div><h3>Contact</h3><p>01 88 60 20 00<br>menupleaz.com</p></div>
        <div class="info-card" data-aos="fade-up" data-aos-delay="400"><div class="info-icon"><i class="fas fa-check-circle"></i></div><h3>Services</h3><p>Terrasse · Cocktails · Végétarien</p></div>
      </div>
    </section>
  `;
}

function renderReviews(): string {
  const items = reviews.map((r, i) => `
    <div class="review-card" data-aos="fade-up" data-aos-delay="${i*100}">
      <div class="review-stars">${'★'.repeat(r.stars)}</div>
      <p class="review-text">${r.text}</p>
      <div class="review-author"><i class="fas fa-user-circle"></i> ${r.author}</div>
    </div>
  `).join('');
  
  return `
    <section id="avis" class="reviews-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Avis Clients</h2>
        <div class="reviews-grid">${items}</div>
      </div>
    </section>
  `;
}

function renderReservation(): string {
  return `
    <section id="reserver" class="reservation">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Réserver</h2>
        <p style="font-size:1.2rem; margin-bottom:30px;" data-aos="fade-up" data-aos-delay="100">Vivez l'expérience 5★ au cœur de Créteil.</p>
        <div class="btn-group" data-aos="zoom-in" data-aos-delay="200">
          <a href="#" class="btn-primary"><i class="far fa-calendar-alt"></i> En ligne</a>
          <a href="tel:0188602000" class="btn-secondary"><i class="fas fa-phone-alt"></i> Appeler</a>
        </div>
      </div>
    </section>
  `;
}

function renderFooter(): string {
  return `
    <div class="container">
      <div class="footer-content">
        <div class="footer-section"><h4>Kitchen & Bar</h4><p>Courtyard Marriott Paris Créteil</p></div>
        <div class="footer-section"><h4>Navigation</h4><p><a href="#carte" style="color:inherit;">Carte</a> · <a href="#galerie" style="color:inherit;">Galerie</a> · <a href="#infos" style="color:inherit;">Infos</a></p></div>
        <div class="footer-section"><h4>Suivez-nous</h4><div class="social-links"><a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-facebook-f"></i></a></div></div>
      </div>
      <div class="copyright">© 2025 Kitchen & Bar — Design inspiré de Takahisa</div>
    </div>
  `;
}

// Assemblage et injection dans le DOM
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  
  if (header) header.innerHTML = renderHeader();
  if (app) app.innerHTML = renderHero() + renderExperience() + renderMenu() + renderGallery() + renderInfo() + renderReviews() + renderReservation();
  if (footer) footer.innerHTML = renderFooter();
  
  // Préloader
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
    }
  });
  
  // Initialisation AOS
  // @ts-ignore
  if (typeof AOS !== 'undefined') {
    // @ts-ignore
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    const headerEl = document.getElementById('header');
    if (headerEl) {
      headerEl.classList.toggle('scrolled', window.scrollY > 50);
    }
  });
});