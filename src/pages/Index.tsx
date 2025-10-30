import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'amateur',
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена! 🎉',
      description: 'Мы свяжемся с вами для подтверждения регистрации.',
    });
    setFormData({ name: '', email: '', phone: '', category: 'amateur' });
  };

  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.textContent = '❄';
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
      snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };

    const interval = setInterval(createSnowflake, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-secondary/95 to-primary/20">
      <nav className="fixed top-0 w-full bg-secondary/80 backdrop-blur-md z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-3xl">🎿</span>
              Новогодняя Гонка
            </h1>
            <div className="hidden md:flex gap-6">
              {['hero', 'register', 'rules', 'prizes', 'schedule', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-white/90 hover:text-white transition-colors capitalize"
                >
                  {section === 'hero' ? 'Главная' : 
                   section === 'register' ? 'Регистрация' :
                   section === 'rules' ? 'Правила' :
                   section === 'prizes' ? 'Призы' :
                   section === 'schedule' ? 'Расписание' :
                   'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-glow">
              Новогодняя<br />Лыжная Гонка
            </h2>
            <p className="text-xl md:text-2xl text-white/90">
              Москва • 31 декабря 2025
            </p>
            <div className="bg-accent/20 border border-accent rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <Icon name="Clock" size={32} className="text-accent" />
                <div>
                  <p className="text-sm text-white/80">Старт ровно в</p>
                  <p className="text-4xl font-bold text-accent">00:00</p>
                </div>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6"
              onClick={() => scrollToSection('register')}
            >
              Зарегистрироваться
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
          </div>
          <div className="animate-scale-in">
            <img
              src="https://cdn.poehali.dev/projects/ffa25e1b-bd68-4fee-87d8-7949bc86dd93/files/3ea5c427-495a-4985-b37b-f4489e5b4544.jpg"
              alt="Зимняя лыжная гонка"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="register" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-secondary flex items-center gap-2">
                <Icon name="UserPlus" size={32} />
                Регистрация
              </CardTitle>
              <CardDescription className="text-lg">
                Заполните форму для участия в гонке
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">ФИО</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Иванов Иван Иванович"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Категория</Label>
                  <select
                    id="category"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="amateur">Любители</option>
                    <option value="professional">Профессионалы</option>
                    <option value="family">Семейная категория</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
            <Icon name="BookOpen" size={40} />
            Правила гонки
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/95 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold text-secondary">
                Общие положения
              </AccordionTrigger>
              <AccordionContent className="text-lg text-foreground/80">
                Участники должны иметь собственное лыжное снаряжение и экипировку. Обязательна медицинская справка о допуске к соревнованиям. Минимальный возраст участников - 14 лет.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white/95 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold text-secondary">
                Дистанции
              </AccordionTrigger>
              <AccordionContent className="text-lg text-foreground/80">
                Любители: 5 км • Профессионалы: 10 км • Семейная категория: 3 км
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white/95 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold text-secondary">
                Безопасность
              </AccordionTrigger>
              <AccordionContent className="text-lg text-foreground/80">
                На трассе работают медицинские пункты. Все участники получают браслеты с чипами для отслеживания. При плохой погоде гонка переносится.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white/95 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-semibold text-secondary">
                Финиш и награждение
              </AccordionTrigger>
              <AccordionContent className="text-lg text-foreground/80">
                После финиша всех участников ждет горячий чай и угощения. Награждение победителей состоится в 2:00 ночи на финишной площадке.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="prizes" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
            <Icon name="Trophy" size={40} />
            Призы и награды
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { place: '1 место', prize: '100 000 ₽', medal: '🥇', color: 'from-yellow-400 to-yellow-600' },
              { place: '2 место', prize: '50 000 ₽', medal: '🥈', color: 'from-gray-300 to-gray-500' },
              { place: '3 место', prize: '25 000 ₽', medal: '🥉', color: 'from-amber-600 to-amber-800' }
            ].map((item) => (
              <Card key={item.place} className={`bg-gradient-to-br ${item.color} text-white shadow-2xl transform hover:scale-105 transition-transform`}>
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{item.medal}</div>
                  <CardTitle className="text-2xl">{item.place}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold">{item.prize}</p>
                  <p className="mt-2 text-white/90">+ Кубок и медаль</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <img
              src="https://cdn.poehali.dev/projects/ffa25e1b-bd68-4fee-87d8-7949bc86dd93/files/51a325c6-ce7d-4f5b-95da-ae1ae1b27ea8.jpg"
              alt="Призовой кубок"
              className="mx-auto rounded-2xl shadow-2xl max-w-md"
            />
          </div>
          <div className="mt-8 bg-white/95 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-secondary mb-4">Специальные призы:</h3>
            <ul className="space-y-2 text-lg text-foreground/80">
              <li className="flex items-center gap-2">
                <Icon name="Star" className="text-accent" />
                Лучший костюм - сертификат 10 000 ₽
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Star" className="text-accent" />
                Самый молодой участник - сноуборд
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Star" className="text-accent" />
                Самая дружная семья - абонементы на горнолыжный курорт
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
            <Icon name="Calendar" size={40} />
            Расписание
          </h2>
          <div className="space-y-4">
            {[
              { time: '22:00', event: 'Открытие зоны регистрации', icon: 'ClipboardCheck' },
              { time: '23:00', event: 'Выдача стартовых номеров', icon: 'Hash' },
              { time: '23:30', event: 'Разминка с тренерами', icon: 'Activity' },
              { time: '23:50', event: 'Сбор на старте', icon: 'Users' },
              { time: '00:00', event: 'СТАРТ ГОНКИ', icon: 'Flag', highlight: true },
              { time: '01:30', event: 'Финиш последних участников', icon: 'CheckCircle' },
              { time: '02:00', event: 'Награждение победителей', icon: 'Award' },
              { time: '02:30', event: 'Праздничный фейерверк', icon: 'Sparkles' }
            ].map((item) => (
              <Card key={item.time} className={`${item.highlight ? 'bg-accent border-accent border-2' : 'bg-white/95'} backdrop-blur-sm`}>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className={`text-3xl font-bold ${item.highlight ? 'text-white' : 'text-primary'} min-w-[80px]`}>
                    {item.time}
                  </div>
                  <Icon name={item.icon as any} size={28} className={item.highlight ? 'text-white' : 'text-secondary'} />
                  <div className={`text-xl ${item.highlight ? 'text-white font-bold' : 'text-secondary'}`}>
                    {item.event}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
            <Icon name="Mail" size={40} />
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Icon name="MapPin" size={24} />
                  Место проведения
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg">
                <p>Парк «Сокольники»</p>
                <p className="text-muted-foreground">Лыжная трасса №1</p>
                <p className="text-muted-foreground">г. Москва</p>
              </CardContent>
            </Card>
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Icon name="Phone" size={24} />
                  Связь с нами
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg space-y-2">
                <p>📞 +7 (495) 123-45-67</p>
                <p>📧 info@newyearrace.ru</p>
                <p>💬 Telegram: @newyearrace</p>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Icon name="MessageSquare" size={24} />
                Есть вопросы?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="question">Ваш вопрос</Label>
                  <Textarea
                    id="question"
                    placeholder="Напишите ваш вопрос..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary py-8 px-4 border-t border-primary/20">
        <div className="container mx-auto text-center text-white/80">
          <p className="text-lg">🎿 Новогодняя Лыжная Гонка 2025</p>
          <p className="mt-2">Встретим Новый Год на лыжах! ❄️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
