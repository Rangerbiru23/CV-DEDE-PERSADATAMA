'use client'

export default function Terms() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms & Conditions - CV DADE PERSADATAMA</title>
    <meta name="description" content="Terms & Conditions CV DADE PERSADATAMA - Syarat dan ketentuan penggunaan website konstruksi gedung kesehatan">
    <meta name="keywords" content="terms and conditions, CV DADE PERSADATAMA, syarat ketentuan, konstruksi kesehatan">
    <meta name="author" content="CV DADE PERSADATAMA">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Terms & Conditions - CV DADE PERSADATAMA">
    <meta property="og:description" content="Syarat dan ketentuan penggunaan website CV DADE PERSADATAMA">
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
        
        .terms-container {
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            padding: 3rem;
            margin-bottom: 3rem;
        }
        
        .terms-header {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .terms-header h1 {
            font-size: 2.5rem;
            color: #1e3c72;
            margin-bottom: 1rem;
        }
        
        .terms-header p {
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
        
        .terms-content {
            font-size: 1rem;
            color: #555;
            margin-bottom: 1.5rem;
        }
        
        .terms-content p {
            margin-bottom: 1rem;
        }
        
        .terms-content ul {
            margin: 1rem 0;
            padding-left: 2rem;
        }
        
        .terms-content li {
            margin-bottom: 0.5rem;
        }
        
        .highlight {
            background: linear-gradient(45deg, #4CAF50, #8BC34A);
            color: white;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 600;
        }
        
        .warning-box {
            background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
            border-left: 4px solid #f39c12;
            padding: 1.5rem;
            margin: 2rem 0;
            border-radius: 8px;
        }
        
        .warning-box h4 {
            color: #e67e22;
            margin-bottom: 0.5rem;
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
            
            .terms-container {
                padding: 2rem 1.5rem;
            }
            
            .terms-header h1 {
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
            <div class="terms-container">
                <div class="terms-header">
                    <h1>Terms & Conditions</h1>
                    <p>Syarat dan Ketentuan Penggunaan Website <span class="company-name">CV DADE PERSADATAMA</span></p>
                    <p><em>Berlaku sejak: 1 Januari 2024</em></p>
                </div>

                <div class="warning-box">
                    <h4>⚠️ PENTING</h4>
                    <p>Dengan mengakses dan menggunakan website <span class="company-name">CV DADE PERSADATAMA</span>, Anda secara tegas menyatakan setuju untuk terikat oleh syarat dan ketentuan yang berlaku. Jika Anda tidak setuju dengan bagian manapun dari syarat dan ketentuan ini, harap tidak menggunakan website kami.</p>
                </div>

                <div class="terms-content">
                    <h2 class="section-title">1. Definisi</h2>
                    <p>Dalam syarat dan ketentuan ini:</p>
                    <ul>
                        <li><strong>"Website"</strong> merujuk pada situs web www.dadepersadatama.co.id dan semua subdomain terkait</li>
                        <li><strong>"Perusahaan"</strong> merujuk pada <span class="company-name">CV DADE PERSADATAMA</span>, perusahaan konstruksi gedung kesehatan</li>
                        <li><strong>"Pengguna"</strong> merujuk pada individu atau entitas yang mengakses atau menggunakan website kami</li>
                        <li><strong>"Layanan"</strong> merujuk pada layanan konstruksi dan konsultasi yang kami tawarkan</li>
                        <li><strong>"Konten"</strong> merujuk pada semua informasi, teks, gambar, dan materi lain di website</li>
                    </ul>
                </div>

                <div class="terms-content">
                    <h2 class="section-title">2. Penerimaan Syarat dan Ketentuan</h2>
                    <p>Dengan mengakses website kami, Anda menyatakan bahwa:</p>
                    <ul>
                        <li>Anda telah membaca, memahami, dan menyetujui syarat dan ketentuan ini</li>
                        <li>Anda berusia minimal 18 tahun atau memiliki izin dari orang tua/wali</li>
                        <li>Anda memiliki kapasitas hukum untuk terikat oleh perjanjian ini</li>
                        <li>Anda akan mematuhi semua hukum dan peraturan yang berlaku</li>
                    </ul>
                </div>

                <div class="terms-content">
                    <h2 class="section-title">3. Penggunaan Website</h2>
                    <p>Anda setuju untuk:</p>
                    <ul>
                        <li>Menggunakan website hanya untuk tujuan yang sah dan sesuai hukum</li>
                        <li>Tidak melakukan aktivitas yang merusak atau mengganggu fungsi website</li>
                        <li>Tinggal menyalin, mendistribusikan, atau memodifikasi konten tanpa izin</li>
                        <li>Tidak menggunakan website untuk penipuan, phishing, atau aktivitas ilegal lainnya</li>
                        <li>Mematuhi semua kebijakan dan prosedur yang kami tetapkan</li>
                    </ul>
                </div>

                <div class="terms-content">
                    <h2 class="section-title">4. Layanan Konstruksi</h2>
                    <p>Mengenai layanan konstruksi yang kami tawarkan:</p>
                    <ul>
                        <li>Semua penawaran harga bersifat <span class="highlight">estimasi</span> dan dapat berubah berdasarkan kondisi aktual</li>
                        <li>Perjanjian konstruksi yang sah harus dibuat secara tertulis sebelum pekerjaan dimulai</li>
                        <li>Jadwal proyek dapat berubah tergantung pada faktor cuaca, perizinan, dan kondisi lapangan</li>
                        <li>Pembayaran harus dilakukan sesuai dengan termin yang disepakati dalam kontrak</li>
                        <li>Perubahan desain atau material tambahan akan dikenakan biaya tambahan</li>
                    </ul>
                </div>

                <div class="terms-content">
                    <h2 class="section-title">5. Hak Kekayaan Intelektual</h2>
                    <p>Semua konten di website ini, termasuk namun tidak terbatas pada:</p>
                    <ul>
                        <li>Desain, logo, dan merek dagang milik <span class="company-name">CV DADE PERSADATAMA</span></li>
                        <li>Teks, gambar, video, dan materi lain dilindungi oleh hak cipta</li>
                        <li>Anda <span class="highlight">tidak diperbolehkan</span> menggunakan konten kami untuk tujuan komersial tanpa izin tertulis</li>
                        <li>Pelanggaran hak kekayaan intelektual dapat dikenakan sanksi hukum</li>
                    </ul>
                </div>

                <div class="terms-content">
                    <h2 class="section-title">6. Informasi dan Akurasi</h2>
                    <p>Kami berusaha untuk menyediakan informasi yang akurat, namun:</p>
                    <ul>
                        <li>Informasi di website dapat berubah sewaktu-waktu tanpa pemberitahuan</li>
                        <li>Kami tidak menjamin kelengkapan atau akurasi semua informasi</li>
                        <li>Anda disarankan untuk mengkonfirmasi informasi penting langsung dengan kami</li>
                        <li>Kami tidak bertanggung jawab atas kesalahan atau kelalaian dalam informasi</li>
                    </ul>
                </div>

                <div class="terms-content">
                    <h2 class="section-title">7. Privasi Data</h2>
                    <p>Penggunaan data pribadi Anda diatur oleh Kebijakan Privasi kami:</p>
                    <ul>
                        <li>Dengan menggunakan website, Anda setuju dengan pengumpulan dan pengolahan data sesuai kebijakan privasi</li>
                        <li>Kami melindungi data pribadi Anda sesuai dengan peraturan yang berlaku</li>
                        <li>Informasi yang Anda berikan melalui formulir kontak akan digunakan untuk tujuan bisnis yang sah</li>
                        <li>Anda dapat membaca kebijakan privasi lengkap kami di halaman terpisah</li>
                    </ul>
                </div>

                <div class="terms-content">
                    <h2 class="section-title">8. Batasan Tanggung Jawab</h2>
                    <p>Hingga batas maksimum yang diizinkan oleh hukum:</p>
                    <ul>
                        <li>Perusahaan <span class="highlight">tidak bertanggung jawab</span> atas kerugian langsung atau tidak langsung yang timbul dari penggunaan website</li>
                        <li>Kami tidak menjamin website akan beroperasi tanpa gangguan atau kesalahan</li>
                        <li>Perusahaan tidak bertanggung jawab atas konten dari link pihak ketiga</li>
                        <li>Kerugian konsekuensial atau insidental tidak dapat dituntut</li>
                    </ul>
                </div>

                <div class="terms-content">
                    <h2 class="section-title">9. Indemnifikasi</h2>
                    <p>Anda setuju untuk mengganti rugi, membela, dan membebaskan <span class="company-name">CV DADE PERSADATAMA</span> dari:</p>
                    <ul>
                        <li>Semua klaim, kewajiban, kerugian, dan biaya yang timbul dari penggunaan website Anda</li>
                        <li>Pelanggaran syarat dan ketentuan ini oleh Anda</p>
                        <li>Pelanggaran hak hukum atau hak pihak ketiga oleh Anda</li>
                        <li>Konten yang Anda unggah atau transmisi melalui website</li>
                    </ul>
                </div>

                <div class="terms-content">
                    <h2 class="section-title">10. Penghentian Layanan</h2>
                    <p>Kami berhak untuk:</p>
                    <ul>
                        <li>Menghentikan atau menangguhkan akses Anda ke website sewaktu-waktu</li>
                        <li>Menghapus konten atau akun yang melanggar syarat dan ketentuan</li>
                        <li>Memodifikasi atau menghentikan website secara keseluruhan atau sebagian</li>
                        <li>Melakukan tindakan yang kami anggap perlu untuk melindungi website dan pengguna lain</li>
                    </ul>
                </div>

                <div class="terms-content">
                    <h2 class="section-title">11. Perubahan Syarat dan Ketentuan</h2>
                    <p>Kami berhak untuk:</p>
                    <ul>
                        <li>Mengubah syarat dan ketentuan ini sewaktu-waktu</li>
                        <li>Perubahan akan berlaku efektif segera setelah dipublikasikan di website</li>
                        <li>Penggunaan website berkelanjutan menunjukkan penerimaan perubahan</li>
                        <li>Perubahan material akan diberitahukan melalui website atau email</li>
                    </ul>
                </div>

                <div class="terms-content">
                    <h2 class="section-title">12. Hukum yang Berlaku</h2>
                    <ul>
                        <li>Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia</li>
                        <li>Semua sengketa akan diselesaikan melalui peradilan yang berwenang di Indonesia</li>
                        <li>Bahasa resmi syarat dan ketentuan adalah Bahasa Indonesia</li>
                        <li>Terjemahan ke bahasa lain hanya untuk referensi</li>
                    </ul>
                </div>

                <div class="terms-content">
                    <h2 class="section-title">13. Kontak Kami</h2>
                    <p>Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:</p>
                    
                    <div class="contact-info">
                        <h3><span class="company-name">CV DADE PERSADATAMA</span></h3>
                        <p><strong>Alamat:</strong><br>
                        BUNTU, Desa/Kelurahan Tarongko, Kec. Makale, Kab. Tana Toraja, Provinsi Sulawesi Selatan</p>
                        
                        <p><strong>Telepon:</strong> 082382466172</p>
                        
                        <p><strong>Email:</strong> legal@dadepersadatama.co.id</p>
                        
                        <p><strong>Website:</strong> www.dadepersadatama.co.id</p>
                    </div>
                </div>

                <div class="terms-content">
                    <p><em>Syarat dan Ketentuan ini berlaku efektif sejak 1 Januari 2024 dan merupakan perjanjian yang mengikat antara Anda dan <span class="company-name">CV DADE PERSADATAMA</span>.</em></p>
                    
                    <p><strong>Terakhir diperbarui: 1 Januari 2024</strong></p>
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