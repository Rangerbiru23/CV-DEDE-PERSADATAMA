'use client'

export default function Privacy() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy - CV DADE PERSADATAMA</title>
    <meta name="description" content="Privacy Policy CV DADE PERSADATAMA - Kebijakan privasi untuk pengguna website konstruksi gedung kesehatan">
    <meta name="keywords" content="privacy policy, CV DADE PERSADATAMA, kebijakan privasi, konstruksi kesehatan">
    <meta name="author" content="CV DADE PERSADATAMA">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Privacy Policy - CV DADE PERSADATAMA">
    <meta property="og:description" content="Kebijakan privasi untuk pengguna website CV DADE PERSADATAMA">
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
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header Styles */
        header {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            padding: 1rem 0;
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
            height: 50px;
            width: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        .logo h1 {
            font-size: 1.5rem;
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
            gap: 1.5rem;
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
        
        /* Main Content */
        main {
            min-height: calc(100vh - 200px);
            padding: 3rem 0;
        }
        
        .privacy-container {
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            padding: 3rem;
            margin-bottom: 3rem;
        }
        
        .privacy-header {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .privacy-header h1 {
            font-size: 2.5rem;
            color: #1e3c72;
            margin-bottom: 1rem;
        }
        
        .privacy-header p {
            font-size: 1.1rem;
            color: #666;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .section-title {
            font-size: 1.8rem;
            color: #1e3c72;
            margin: 2.5rem 0 1.5rem 0;
            padding-bottom: 0.5rem;
            border-bottom: 3px solid #4CAF50;
            display: inline-block;
        }
        
        .privacy-content {
            font-size: 1rem;
            color: #555;
            margin-bottom: 1.5rem;
        }
        
        .privacy-content p {
            margin-bottom: 1rem;
        }
        
        .privacy-content ul {
            margin: 1rem 0;
            padding-left: 2rem;
        }
        
        .privacy-content li {
            margin-bottom: 0.5rem;
        }
        
        .highlight {
            background: linear-gradient(45deg, #4CAF50, #8BC34A);
            color: white;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 600;
        }
        
        .contact-info {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 2rem;
            border-radius: 10px;
            margin-top: 2rem;
        }
        
        .contact-info h3 {
            color: #1e3c72;
            margin-bottom: 1rem;
        }
        
        /* Footer */
        footer {
            background: #1e3c72;
            color: white;
            padding: 2rem 0 1rem;
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
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .privacy-container {
                padding: 2rem 1.5rem;
            }
            
            .privacy-header h1 {
                font-size: 2rem;
            }
            
            .section-title {
                font-size: 1.5rem;
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
                <li><a href="/">Beranda</a></li>
                <li><a href="/#services">Layanan</a></li>
                <li><a href="/#about">Tentang</a></li>
                <li><a href="/#contact">Kontak</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content -->
    <main>
        <div class="container">
            <div class="privacy-container">
                <div class="privacy-header">
                    <h1>Privacy Policy</h1>
                    <p>Kebijakan Privasi <span class="company-name">CV DADE PERSADATAMA</span></p>
                    <p><em>Berlaku sejak: 1 Januari 2024</em></p>
                </div>

                <div class="privacy-content">
                    <h2 class="section-title">1. Pendahuluan</h2>
                    <p>Selamat datang di website <span class="company-name">CV DADE PERSADATAMA</span>. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan website kami.</p>
                    
                    <p>Dengan mengakses dan menggunakan website kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan privasi ini.</p>
                </div>

                <div class="privacy-content">
                    <h2 class="section-title">2. Informasi yang Kami Kumpulkan</h2>
                    <p>Kami dapat mengumpulkan beberapa jenis informasi dari Anda, antara lain:</p>
                    
                    <ul>
                        <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, dan informasi kontak lainnya yang Anda berikan melalui formulir kontak</li>
                        <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, sistem operasi, dan informasi tentang penggunaan website</li>
                        <li><strong>Informasi Penggunaan:</strong> Halaman yang dikunjungi, waktu yang dihabiskan, dan pola navigasi di website</li>
                        <li><strong>Informasi Bisnis:</strong> Nama perusahaan, jenis proyek, dan kebutuhan konstruksi yang Anda sampaikan</li>
                    </ul>
                </div>

                <div class="privacy-content">
                    <h2 class="section-title">3. Cara Kami Menggunakan Informasi Anda</h2>
                    <p>Informasi yang kami kumpulkan digunakan untuk:</p>
                    
                    <ul>
                        <li>Menanggapi pertanyaan dan permintaan Anda melalui formulir kontak</li>
                        <li>Memberikan informasi tentang layanan konstruksi gedung kesehatan kami</li>
                        <li>Mengirim penawaran dan proposal proyek yang sesuai dengan kebutuhan Anda</li>
                        <li>Memfasilitasi konsultasi gratis dan diskusi proyek</li>
                        <li>Meningkatkan kualitas layanan dan pengalaman pengguna di website</li>
                        <li>Mengirim informasi penting terkait proyek dan layanan kami</li>
                    </ul>
                </div>

                <div class="privacy-content">
                    <h2 class="section-title">4. Cookies dan Teknologi Pelacakan</h2>
                    <p>Website kami menggunakan cookies untuk:</p>
                    
                    <ul>
                        <li>Memahami cara pengguna berinteraksi dengan website kami</li>
                        <li>Menyimpan preferensi dan pengaturan pengguna</li>
                        <li>Menganalisis traffic dan penggunaan website untuk tujuan perbaikan</li>
                        <li>Menyediakan pengalaman yang lebih personal dan relevan</li>
                    </ul>
                    
                    <p>Anda dapat mengatur browser untuk menolak cookies atau memberi tahu saat cookies dikirim, namun beberapa fitur website mungkin tidak berfungsi dengan baik tanpa cookies.</p>
                </div>

                <div class="privacy-content">
                    <h2 class="section-title">5. Berbagi Informasi dengan Pihak Ketiga</h2>
                    <p><span class="company-name">CV DADE PERSADATAMA</span> <span class="highlight">tidak akan menjual, menyewakan, atau membagikan</span> informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam situasi berikut:</p>
                    
                    <ul>
                        <li>Saat diperlukan oleh hukum atau proses hukum yang sah</li>
                        <li>Untuk melindungi hak, properti, atau keselamatan <span class="company-name">CV DADE PERSADATAMA</span> atau pengguna lain</li>
                        <li>Dengan mitra bisnis tepercaya yang membantu kami menyediakan layanan (dengan perjanjian kerahasiaan)</li>
                        <li>Dalam kasus transfer bisnis, merger, atau akuisisi</li>
                    </ul>
                </div>

                <div class="privacy-content">
                    <h2 class="section-title">6. Keamanan Data</h2>
                    <p>Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses tidak sah, penggunaan yang tidak tepat, atau pengungkapan yang tidak disengaja. Langkah-langkah keamanan yang kami terapkan meliputi:</p>
                    
                    <ul>
                        <li>Enkripsi data transmisi dengan SSL/TLS</li>
                        <li>Firewall dan sistem keamanan jaringan</li>
                        <li>Akses terbatas ke informasi pribadi</li>
                        <li>Prosedur keamanan fisik dan elektronik</li>
                        <li>Training reguler untuk staf tentang keamanan data</li>
                    </ul>
                </div>

                <div class="privacy-content">
                    <h2 class="section-title">7. Hak Anda sebagai Pengguna</h2>
                    <p>Sebagai pengguna, Anda memiliki hak untuk:</p>
                    
                    <ul>
                        <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                        <li>Memperbaiki informasi yang tidak akurat</li>
                        <li>Menghapus informasi pribadi Anda (dalam batas yang diizinkan oleh hukum)</li>
                        <li>Menolak pemasaran langsung dari kami</li>
                        <li>Meminta salinan data pribadi Anda</li>
                    </ul>
                    
                    <p>Untuk melaksanakan hak-hak ini, silakan hubungi kami melalui informasi kontak di bawah ini.</p>
                </div>

                <div class="privacy-content">
                    <h2 class="section-title">8. Penyimpanan Data</h2>
                    <p>Informasi pribadi Anda akan disimpan selama diperlukan untuk tujuan pengumpulan data atau sesuai dengan periode yang diwajibkan oleh hukum. Setelah periode tersebut, informasi akan dihapus atau dihancurkan dengan aman.</p>
                </div>

                <div class="privacy-content">
                    <h2 class="section-title">9. Link ke Website Pihak Ketiga</h2>
                    <p>Website kami mungkin mengandung link ke website pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi dari website tersebut. Kami menyarankan Anda untuk membaca kebijakan privasi dari setiap website yang Anda kunjungi.</p>
                </div>

                <div class="privacy-content">
                    <h2 class="section-title">10. Perubahan Kebijakan Privasi</h2>
                    <p>Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau persyaratan hukum. Perubahan akan diberitahukan melalui website ini dengan tanggal "Berlaku sejak" yang diperbarui.</p>
                </div>

                <div class="privacy-content">
                    <h2 class="section-title">11. Kontak Kami</h2>
                    <p>Jika Anda memiliki pertanyaan, komentar, atau kekhawatiran tentang kebijakan privasi kami, silakan hubungi kami:</p>
                    
                    <div class="contact-info">
                        <h3><span class="company-name">CV DADE PERSADATAMA</span></h3>
                        <p><strong>Alamat:</strong><br>
                        BUNTU, Desa/Kelurahan Tarongko, Kec. Makale, Kab. Tana Toraja, Provinsi Sulawesi Selatan</p>
                        
                        <p><strong>Telepon:</strong> 082382466172</p>
                        
                        <p><strong>Email:</strong> privacy@dadepersadatama.co.id</p>
                        
                        <p><strong>Website:</strong> www.dadepersadatama.co.id</p>
                    </div>
                </div>

                <div class="privacy-content">
                    <p><em>Kebijakan Privasi ini berlaku efektif sejak 1 Januari 2024 dan merupakan bagian dari komitmen kami untuk melindungi privasi Anda.</em></p>
                </div>
            </div>
        </div>
    </main>

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
                        <li><a href="/#services">Konstruksi Rumah Sakit</a></li>
                        <li><a href="/#services">Klinik & Puskesmas</a></li>
                        <li><a href="/#services">Laboratorium Medis</a></li>
                        <li><a href="/#services">Renovasi Fasilitas</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Perusahaan</h3>
                    <ul>
                        <li><a href="/#about">Tentang Kami</a></li>
                        <li><a href="/#contact">Kontak</a></li>
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
    </script>
</body>
</html>
      `
    }} />
  )
}