import ProfileCard from '../components/ProfileCard';
import avatar from '../assets/zzz3.jpg';

function HomePage() {
  return (
    <ProfileCard
      name="Zarina Shynbolatova"
      role="Web development student"
      bio="Hi! I'm learning web development and building my first interactive profile. I'm open to new projects."
      email="shynbolatovazarina@gmail.com"
      githubUrl="https://github.com/ShynbolatovaZarina"
      avatarUrl={avatar}
    />
  );
}

export default HomePage;