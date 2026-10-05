import './style.css';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import avatar from './assets/zzz3.jpg';

function App() {
  return (
    <>
      <Header title="My Profile" />
      <main>
        <ProfileCard
          name="Zarina Shynbolatova"
          role="Web development student"
          bio="Hi! I'm learning web development and building my first interactive profile. I'm open to new projects"
          email="shynbolatovazarina@gmail.com"
          githubUrl="https://github.com/ShynbolatovaZarina"
          avatarUrl={avatar}
        />
      </main>
      <Footer text="2026 · My Website" />
    </>
  );
}

export default App;