import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn English with Our Courses</h1>
        <p>Improve your English skills with professional guidance and flexible learning options.</p>
      </header>

      <main>
        <section className="intro">
          <h2>Why Learn English?</h2>
          <p>English is a global language spoken by millions worldwide. Whether you're preparing for exams, enhancing career prospects, or traveling, mastering English opens up countless opportunities.</p>
        </section>

        <section className="courses">
          <h2>Our English Courses</h2>
          <ul>
            <li>
              <h3>Basic English</h3>
              <p>For beginners who want to start from scratch. Learn the basics of grammar, vocabulary, and conversation.</p>
            </li>
            <li>
              <h3>Intermediate English</h3>
              <p>For learners with basic knowledge, this course enhances speaking, listening, and writing skills.</p>
            </li>
            <li>
              <h3>Advanced English</h3>
              <p>For professionals and advanced learners. Focus on fluency, academic writing, and formal communication.</p>
            </li>
          </ul>
        </section>

        <section className="cta">
          <h2>Ready to Get Started?</h2>
          <p>Sign up for one of our courses today and start your journey towards mastering English!</p>
          <a href="https://www.skool.com/masterclass/about" target="_blank" rel="noopener noreferrer" className="signup-button">Sign Up Now</a>
        </section>
      </main>

      <footer>
        <p>© 2024 My English Academy. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
