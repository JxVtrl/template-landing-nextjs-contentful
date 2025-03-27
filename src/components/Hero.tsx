import { Hero as HeroType } from '../types/contentful';

interface Props {
  hero: HeroType;
}

export const Hero = ({ hero }: Props) => {
console.log('hero', hero)

  if(!hero) return null;

  const { title, subtitle, ctaText, backgroundImage } = hero;
  

  return (
    <div 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          {ctaText}
        </button>
      </div>
    </div>
  );
}; 