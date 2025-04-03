import { HomePageCard } from "@/components/home/homePageCard";
import { Film, Settings } from "lucide-react";

const HomePage = () => {
  const cards = [
    {
      title: "Конфігурації",
      description: "Керуйте налаштуваннями та конфігураціями системи",
      link: "configurations",
      icon: <Settings className="h-8 w-8 text-primary" />,
    },
    {
      title: "Серіали",
      description: "Перегляд та управління серіалами у вашій бібліотеці",
      link: "series",
      icon: <Film className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
          Вітаю в панелі адміністратора!
        </h1>
        <p className="text-lg text-gray-600">
          Тут ви можете вибрати, що хочете переглянути сьогодні.
        </p>
      </div>

      <div className="relative w-32 h-32 mb-10">
        <img
          src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
          alt="Welcome GIF"
          className="w-full h-full rounded-full shadow-lg object-cover border-4 border-primary/20"
        />
        <div className="absolute inset-0 rounded-full shadow-inner"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {cards.map((card, index) => (
          <HomePageCard
            key={index}
            title={card.title}
            description={card.description}
            link={card.link}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
