import React from 'react';
import './App.css';  // Custom styles

function App() {
    return (
        <div className="page-container">
            {/* Header */}
            <header className="header">
                <div className="logo-section">
                    <h1>الكويت</h1> {/* The logo text */}
                    <img src="https://via.placeholder.com/100" alt="British Council" className="logo" />
                </div>
                <nav className="nav-bar">
                    <ul>
                        <li><a href="#">تدريس اللغة الإنجليزية</a></li>
                        <li><a href="#">الدراسة في المملكة المتحدة</a></li>
                        <li><a href="#">فعالياتنا</a></li>
                        <li><a href="#">تقدم لامتحانات معنا</a></li>
                        <li><a href="#">اتصل بنا</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <section className="info-section">
                    <h2>تعلم اللغة الإنجليزية</h2>
                    <p>
                        تعلم اللغة الإنجليزية واستمتع بتجربة تعلم اللغة على أيدي خبراء الإنجليزية في العالم.
                    </p>
                </section>

                <aside className="promo-section">
                    <div className="promo">
                        <img src="https://via.placeholder.com/200" alt="English Online" />
                        <p>دورة `English Online` المكثفة</p>
                        <p>خصم 20% تحسين مهاراتك في الإنجليزية</p>
                    </div>
                </aside>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>جميع الحقوق محفوظة &copy; 2024</p>
            </footer>
        </div>
    );
}

export default App;
