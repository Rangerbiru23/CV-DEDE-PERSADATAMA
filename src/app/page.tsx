'use client'

export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV DADE PERSADATAMA - Konstruksi Gedung Kesehatan Profesional</title>
    <meta name="description" content="CV DADE PERSADATAMA - Perusahaan konstruksi profesional yang berspesialisasi dalam pembangunan gedung kesehatan. Kami menyediakan layanan konstruksi berkualitas tinggi untuk rumah sakit, klinik, dan fasilitas kesehatan lainnya.">
    <meta name="keywords" content="konstruksi gedung kesehatan, kontraktor rumah sakit, pembangunan klinik, CV DADE PERSADATAMA, konstruksi profesional, Tana Toraja">
    <meta name="author" content="CV DADE PERSADATAMA">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="CV DADE PERSADATAMA - Konstruksi Gedung Kesehatan Profesional">
    <meta property="og:description" content="Perusahaan konstruksi profesional yang berspesialisasi dalam pembangunan gedung kesehatan berkualitas tinggi">
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:image" content="/logo-dade.png">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/logo-dade.png">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header Styles */
        header {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .logo img {
            height: 60px;
            width: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        .logo h1 {
            font-size: 1.8rem;
            font-weight: 700;
            color: #ffffff;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .company-name {
            background: linear-gradient(45deg, #4CAF50, #8BC34A);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 5px;
        }
        
        .nav-links a:hover {
            background: rgba(255,255,255,0.1);
            transform: translateY(-2px);
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 100px 0;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
        }
        
        .hero-content {
            position: relative;
            z-index: 1;
        }
        
        .hero h2 {
            font-size: 3rem;
            margin-bottom: 1rem;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.3);
            animation: fadeInUp 1s ease;
        }
        
        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            animation: fadeInUp 1s ease 0.2s;
            animation-fill-mode: both;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(45deg, #4CAF50, #8BC34A);
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(76,175,80,0.3);
            animation: fadeInUp 1s ease 0.4s;
            animation-fill-mode: both;
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(76,175,80,0.4);
        }
        
        /* Services Section */
        .services {
            padding: 80px 0;
            background: white;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #1e3c72;
            position: relative;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(45deg, #4CAF50, #8BC34A);
            border-radius: 2px;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .service-card {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
        }
        
        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(45deg, #4CAF50, #8BC34A);
        }
        
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            border-color: #4CAF50;
        }
        
        .service-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: #4CAF50;
        }
        
        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #1e3c72;
        }
        
        /* About Section */
        .about {
            padding: 80px 0;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        
        .about-text h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: #1e3c72;
        }
        
        .about-text p {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            color: #555;
        }
        
        .about-image {
            text-align: center;
        }
        
        .about-image img {
            max-width: 100%;
            height: auto;
            border-radius: 15px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        
        /* Contact Section */
        .contact {
            padding: 80px 0;
            background: white;
        }
        
        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }
        
        .contact-info h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: #1e3c72;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 10px;
            transition: all 0.3s ease;
        }
        
        .contact-item:hover {
            background: linear-gradient(45deg, #4CAF50, #8BC34A);
            color: white;
            transform: translateX(10px);
        }
        
        .contact-icon {
            font-size: 1.5rem;
            margin-right: 1rem;
            color: #4CAF50;
            width: 30px;
        }
        
        .contact-item:hover .contact-icon {
            color: white;
        }
        
        .contact-form {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #1e3c72;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #4CAF50;
            box-shadow: 0 0 0 3px rgba(76,175,80,0.1);
        }
        
        .submit-btn {
            background: linear-gradient(45deg, #4CAF50, #8BC34A);
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
        }
        
        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(76,175,80,0.3);
        }
        
        /* Footer */
        footer {
            background: #1e3c72;
            color: white;
            padding: 3rem 0 1rem;
            text-align: center;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .footer-section h3 {
            margin-bottom: 1rem;
            color: #4CAF50;
        }
        
        .footer-section ul {
            list-style: none;
        }
        
        .footer-section ul li {
            margin-bottom: 0.5rem;
        }
        
        .footer-section a {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
            color: #4CAF50;
        }
        
        .footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 1rem;
            margin-top: 2rem;
        }
        
        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero h2 {
                font-size: 2rem;
            }
            
            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .services-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <nav class="container">
            <div class="logo">
                <img src="/logo-dade.png" alt="CV DADE PERSADATAMA Logo">
                <h1><span class="company-name">CV DADE PERSADATAMA</span></h1>
            </div>
            <ul class="nav-links">
                <li><a href="#home">Beranda</a></li>
                <li><a href="#services">Layanan</a></li>
                <li><a href="#about">Tentang</a></li>
                <li><a href="#contact">Kontak</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container hero-content">
            <h2>Konstruksi Gedung Kesehatan Profesional</h2>
            <p><span class="company-name">CV DADE PERSADATAMA</span> - Mitra terpercaya untuk pembangunan fasilitas kesehatan berkualitas tinggi di Indonesia</p>
            <a href="#contact" class="cta-button">Konsultasi Gratis</a>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">Layanan Kami</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">🏥</div>
                    <h3>Konstruksi Rumah Sakit</h3>
                    <p>Pembangunan rumah sakit modern dengan standar internasional, dilengkapi fasilitas medis terkini dan desain yang fungsional.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🏢</div>
                    <h3>Klinik & Puskesmas</h3>
                    <p>Konstruksi klinik dan puskesmas dengan desain efisien, memaksimalkan layanan kesehatan untuk masyarakat.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔬</div>
                    <h3>Laboratorium Medis</h3>
                    <p>Pembangunan laboratorium dengan standar keamanan tinggi dan sistem ventilasi yang tepat untuk akurasi hasil tes.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🏨</div>
                    <h3>Fasilitas Kesehatan Lainnya</h3>
                    <p>Konstruksi berbagai fasilitas kesehatan seperti apotek, klinik gigi, dan pusat kesehatan komprehensif.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔧</div>
                    <h3>Renovasi & Upgrade</h3>
                    <p>Renovasi dan upgrade fasilitas kesehatan existing untuk meningkatkan kapasitas dan kualitas layanan.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">📋</div>
                    <h3>Konsultasi & Perencanaan</h3>
                    <p>Layanan konsultasi dan perencanaan proyek konstruksi kesehatan dari awal hingga selesai.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>Tentang <span class="company-name">CV DADE PERSADATAMA</span></h2>
                    <p>Kami adalah perusahaan konstruksi profesional yang berspesialisasi dalam pembangunan gedung kesehatan. Dengan pengalaman bertahun-tahun di industri konstruksi, kami telah membangun reputasi sebagai mitra terpercaya untuk berbagai proyek fasilitas kesehatan di seluruh Indonesia.</p>
                    <p><strong>Visi Kami:</strong> Menjadi kontraktor terdepan dalam pembangunan fasilitas kesehatan yang berkualitas, aman, dan berkelanjutan.</p>
                    <p><strong>Misi Kami:</strong> Memberikan layanan konstruksi terbaik dengan standar internasional, fokus pada keselamatan, kualitas, dan kepuasan klien.</p>
                    <p><strong>Nilai-Nilai Kami:</strong> Integritas, Profesionalisme, Inovasi, dan Komitmen terhadap kualitas.</p>
                </div>
                <div class="about-image">
                    <img src="/logo-dade.png" alt="CV DADE PERSADATAMA" style="max-width: 400px;">
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="contact-content">
                <div class="contact-info">
                    <h2>Hubungi Kami</h2>
                    <div class="contact-item">
                        <div class="contact-icon">📍</div>
                        <div>
                            <strong>Alamat:</strong><br>
                            BUNTU, Desa/Kelurahan Tarongko, Kec. Makale, Kab. Tana Toraja, Provinsi Sulawesi Selatan
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📞</div>
                        <div>
                            <strong>Telepon:</strong><br>
                            082382466172
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">✉️</div>
                        <div>
                            <strong>Email:</strong><br>
                            info@dadepersadatama.co.id
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">🕐</div>
                        <div>
                            <strong>Jam Operasional:</strong><br>
                            Senin - Jumat: 08:00 - 17:00<br>
                            Sabtu: 08:00 - 12:00
                        </div>
                    </div>
                </div>
                <div class="contact-form">
                    <h3>Form Konsultasi Gratis</h3>
                    <form onsubmit="handleSubmit(event)">
                        <div class="form-group">
                            <label for="name">Nama Lengkap</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Telepon</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>
                        <div class="form-group">
                            <label for="project">Jenis Proyek</label>
                            <input type="text" id="project" name="project" placeholder="Contoh: Rumah Sakit, Klinik, dll" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Pesan</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Kirim Pesan</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><span class="company-name">CV DADE PERSADATAMA</span></h3>
                    <p>Mitra terpercaya untuk konstruksi gedung kesehatan profesional di Indonesia.</p>
                </div>
                <div class="footer-section">
                    <h3>Layanan</h3>
                    <ul>
                        <li><a href="#services">Konstruksi Rumah Sakit</a></li>
                        <li><a href="#services">Klinik & Puskesmas</a></li>
                        <li><a href="#services">Laboratorium Medis</a></li>
                        <li><a href="#services">Renovasi Fasilitas</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Perusahaan</h3>
                    <ul>
                        <li><a href="#about">Tentang Kami</a></li>
                        <li><a href="#contact">Kontak</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Hubungi Kami</h3>
                    <p>📍 Tana Toraja, Sulawesi Selatan</p>
                    <p>📞 082382466172</p>
                    <p>✉️ info@dadepersadatama.co.id</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 <span class="company-name">CV DADE PERSADATAMA</span>. Hak Cipta Dilindungi.</p>
            </div>
        </div>
    </footer>

    <script>
        function handleSubmit(event) {
            event.preventDefault();
            alert('Terima kasih telah menghubungi kami! Tim kami akan segera menghubungi Anda kembali.');
            event.target.reset();
        }
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            } else {
                header.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });
    </script>
</body>
</html>
      `
    }} />
  )
}