import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-31T21:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❄';
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 8000);
    };

    const snowInterval = setInterval(createSnowflake, 300);
    return () => clearInterval(snowInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1929] via-[#1e3a5f] to-[#0a1929]">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{backgroundImage: "url('https://cdn.poehali.dev/projects/ffa25e1b-bd68-4fee-87d8-7949bc86dd93/files/ebe975b5-616a-4171-b5c1-f28f7764953f.jpg')"}}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-glow">
              🎿 Новогодняя Лыжная Гонка
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 mb-4">
              Москва • 31 декабря 2025
            </p>
            <p className="text-xl md:text-2xl text-amber-300 mb-12 font-semibold">
              Старт ровно в полночь! 🎆
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { label: 'Дней', value: timeLeft.days },
                { label: 'Часов', value: timeLeft.hours },
                { label: 'Минут', value: timeLeft.minutes },
                { label: 'Секунд', value: timeLeft.seconds }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-6 min-w-[100px]">
                  <div className="text-4xl md:text-5xl font-bold text-amber-300">
                    {item.value}
                  </div>
                  <div className="text-blue-200 mt-2">{item.label}</div>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white text-xl px-8 py-6 rounded-full shadow-xl">
              <Icon name="UserPlus" className="mr-2" size={24} />
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 text-glow">
            О гонке
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/ffa25e1b-bd68-4fee-87d8-7949bc86dd93/files/f13df816-f614-4692-bc52-fd6386fa6258.jpg"
                alt="Лыжники на трассе"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="text-white space-y-6">
              <p className="text-xl leading-relaxed">
                Встречайте Новый Год активно! Примите участие в уникальной ночной лыжной гонке, которая стартует ровно в полночь 31 декабря.
              </p>
              <p className="text-xl leading-relaxed">
                Освещённая трасса через зимний лес, праздничная атмосфера, салют и фейерверки на старте — это будет незабываемо!
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: 'Route', text: 'Дистанции: 5км, 10км, 15км' },
                  { icon: 'Users', text: 'До 500 участников' },
                  { icon: 'Award', text: 'Медали всем финишерам' },
                  { icon: 'Sparkles', text: 'Призы победителям' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                    <Icon name={item.icon} className="text-amber-300" size={24} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 text-glow">
            Категории участников
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Zap',
                title: 'Любители',
                distance: '5 км',
                description: 'Для тех, кто хочет весело встретить Новый Год',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: 'Mountain',
                title: 'Спортсмены',
                distance: '10 км',
                description: 'Для опытных лыжников',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'Trophy',
                title: 'Профи',
                distance: '15 км',
                description: 'Для настоящих чемпионов',
                color: 'from-amber-500 to-orange-500'
              }
            ].map((category, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden group hover:scale-105 transition-transform">
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <Icon name={category.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-3xl font-bold text-amber-300 mb-4">{category.distance}</p>
                  <p className="text-blue-200">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 text-glow">
            Расписание мероприятия
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { time: '20:00', event: 'Открытие регистрации', icon: 'ClipboardList' },
              { time: '21:30', event: 'Выдача стартовых номеров', icon: 'Ticket' },
              { time: '22:30', event: 'Разминка с тренером', icon: 'Activity' },
              { time: '23:45', event: 'Построение на старте', icon: 'Users' },
              { time: '00:00', event: 'СТАРТ ГОНКИ! 🎆', icon: 'Rocket', highlight: true },
              { time: '01:30', event: 'Награждение победителей', icon: 'Award' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-6 p-6 rounded-xl ${
                  item.highlight 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white scale-105' 
                    : 'bg-white/10 backdrop-blur-md text-white'
                }`}
              >
                <div className={`text-3xl font-bold ${item.highlight ? 'text-white' : 'text-amber-300'} min-w-[100px]`}>
                  {item.time}
                </div>
                <Icon name={item.icon} size={32} className={item.highlight ? 'text-white' : 'text-blue-300'} />
                <div className="text-xl">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{backgroundImage: "url('https://cdn.poehali.dev/projects/ffa25e1b-bd68-4fee-87d8-7949bc86dd93/files/eebf03ff-251e-487c-92b2-db14c0550a2b.jpg')"}}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 text-glow">
            Контакты и регистрация
          </h2>
          
          <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="space-y-6 text-white text-lg mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="MapPin" className="text-amber-300" size={24} />
                  <span>Москва, Парк Сокольники</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Phone" className="text-amber-300" size={24} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Mail" className="text-amber-300" size={24} />
                  <span>info@skirace.ru</span>
                </div>
              </div>
              
              <div className="bg-amber-500/20 rounded-xl p-6 mb-8">
                <p className="text-white text-xl font-semibold">
                  Стоимость участия: 1500₽
                </p>
                <p className="text-blue-200 mt-2">
                  В стоимость входит: стартовый пакет, медаль, горячий чай
                </p>
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xl px-12 py-6 rounded-full shadow-xl">
                <Icon name="Rocket" className="mr-2" size={24} />
                Записаться на гонку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 bg-black/50">
        <div className="container mx-auto px-4 text-center text-blue-200">
          <p>© 2025 Новогодняя Лыжная Гонка. Встречайте Новый Год активно! 🎿❄️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
