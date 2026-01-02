import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [calculator, setCalculator] = useState({
    budget: '',
    leads: '',
    conversion: '',
    averageCheck: ''
  });
  const [calcResults, setCalcResults] = useState<{
    costPerLead: number;
    clients: number;
    revenue: number;
    roi: number;
  } | null>(null);

  const calculateROI = () => {
    const budget = parseFloat(calculator.budget) || 0;
    const leads = parseFloat(calculator.leads) || 0;
    const conversion = parseFloat(calculator.conversion) || 0;
    const averageCheck = parseFloat(calculator.averageCheck) || 0;

    if (budget && leads && conversion && averageCheck) {
      const costPerLead = budget / leads;
      const clients = (leads * conversion) / 100;
      const revenue = clients * averageCheck;
      const roi = ((revenue - budget) / budget) * 100;

      setCalcResults({
        costPerLead: Math.round(costPerLead),
        clients: Math.round(clients * 10) / 10,
        revenue: Math.round(revenue),
        roi: Math.round(roi)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const stats = [
    { value: '5+', label: 'лет опыта' },
    { value: '200+', label: 'клиентов' },
    { value: '350%', label: 'средний рост продаж' },
    { value: '98%', label: 'довольных клиентов' }
  ];

  const cases = [
    {
      title: 'Мебельная компания',
      description: 'Настройка рекламы мебели на заказ',
      results: [
        'Рост звонков с 15 до 87 в месяц',
        'Стоимость заявки снизилась с 850₽ до 320₽',
        'ROI увеличился на 420%'
      ],
      category: 'Товары'
    },
    {
      title: 'Строительная бригада',
      description: 'Продвижение услуг ремонта квартир',
      results: [
        'Заявок выросло с 8 до 45 в месяц',
        'Средний чек увеличился на 35%',
        'Выход в топ-3 по региону за 2 недели'
      ],
      category: 'Услуги'
    },
    {
      title: 'IT-компания',
      description: 'Подбор специалистов через Авито Работу',
      results: [
        'Откликов стало в 5 раз больше',
        'Время закрытия вакансии сократилось на 60%',
        'Качество кандидатов повысилось'
      ],
      category: 'Вакансии'
    }
  ];

  const services = [
    {
      icon: 'Target',
      title: 'Настройка рекламы',
      description: 'Полная настройка рекламных кампаний с нуля: анализ конкурентов, подбор ключевых слов, создание объявлений',
      price: 'от 25 000₽'
    },
    {
      icon: 'TrendingUp',
      title: 'Ведение под ключ',
      description: 'Ежедневное управление аккаунтом: оптимизация ставок, A/B тесты, работа с отзывами, аналитика',
      price: 'от 35 000₽/мес'
    },
    {
      icon: 'FileText',
      title: 'Аудит кампаний',
      description: 'Детальный разбор текущей рекламы с рекомендациями по улучшению конверсии и снижению стоимости лида',
      price: 'от 15 000₽'
    },
    {
      icon: 'Users',
      title: 'Обучение',
      description: 'Индивидуальное обучение работе с Авито: от создания аккаунта до продвинутых стратегий продвижения',
      price: 'от 20 000₽'
    }
  ];

  const testimonials = [
    {
      name: 'Алексей Петров',
      company: 'ООО "СтройМастер"',
      text: 'Работаем с авитологом уже год. Заявки идут стабильно, качество высокое. Рекомендую всем, кто хочет получать клиентов с Авито.',
      rating: 5
    },
    {
      name: 'Марина Соколова',
      company: 'Салон мебели "Уют"',
      text: 'За 3 месяца работы количество звонков выросло в 4 раза! Профессиональный подход, всегда на связи, объясняет понятно.',
      rating: 5
    },
    {
      name: 'Дмитрий Иванов',
      company: 'IT Recruiting Agency',
      text: 'Закрыли 12 вакансий за месяц благодаря настройке Авито Работы. Отличный результат, буду обращаться еще.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="TrendingUp" className="text-primary" size={28} />
            <span className="font-bold text-xl">АВИТОЛОГ</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact">
              <Button>Связаться</Button>
            </a>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                <a 
                  href="#about" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Обо мне
                </a>
                <a 
                  href="#cases" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Кейсы
                </a>
                <a 
                  href="#services" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Услуги
                </a>
                <a 
                  href="#calculator" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Калькулятор
                </a>
                <a 
                  href="#testimonials" 
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Отзывы
                </a>
                <Button asChild className="mt-4">
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Связаться</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-accent text-white border-0 text-sm px-4 py-1">
              Более 5 лет в авито-маркетинге
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Настройка рекламы на Авито<br />с гарантией результата
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Помогаю бизнесу находить клиентов через Авито: товары, услуги, вакансии.<br />
              Полное ведение под ключ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <a href="#contact">Получить консультацию</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20" asChild>
                <a href="#cases">Смотреть кейсы</a>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="animate-fade-in">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Обо мне</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Я авитолог с 5-летним опытом работы. Специализируюсь на комплексном продвижении бизнеса на Авито: 
              от настройки рекламных кампаний до полного ведения аккаунта.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Работаю с товарами, услугами и вакансиями. За это время помог более 200 компаниям увеличить поток клиентов 
              и оптимизировать рекламный бюджет. Мой подход — это анализ, тестирование и масштабирование того, что работает.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Icon name="Package" className="mx-auto text-primary mb-2" size={40} />
                  <CardTitle>Товары</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Продвижение товаров любой категории с максимальной конверсией</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Wrench" className="mx-auto text-primary mb-2" size={40} />
                  <CardTitle>Услуги</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Настройка рекламы услуг для стабильного потока заявок</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Briefcase" className="mx-auto text-primary mb-2" size={40} />
                  <CardTitle>Вакансии</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Подбор персонала через Авито Работу быстро и эффективно</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Кейсы и результаты</h2>
            <p className="text-lg text-muted-foreground">Реальные результаты моих клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="outline">{caseItem.category}</Badge>
                  <CardTitle>{caseItem.title}</CardTitle>
                  <CardDescription>{caseItem.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {caseItem.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Услуги</h2>
            <p className="text-lg text-muted-foreground">Полный спектр услуг по продвижению на Авито</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon name={service.icon as any} className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#contact">Заказать</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Калькулятор ROI</h2>
              <p className="text-lg text-muted-foreground">Рассчитайте окупаемость рекламы на Авито</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Введите данные</CardTitle>
                  <CardDescription>Укажите параметры вашей рекламной кампании</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Рекламный бюджет (₽)</label>
                      <Input
                        type="number"
                        placeholder="30000"
                        value={calculator.budget}
                        onChange={(e) => {
                          setCalculator({ ...calculator, budget: e.target.value });
                          setCalcResults(null);
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Ожидаемое кол-во заявок</label>
                      <Input
                        type="number"
                        placeholder="100"
                        value={calculator.leads}
                        onChange={(e) => {
                          setCalculator({ ...calculator, leads: e.target.value });
                          setCalcResults(null);
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Конверсия в продажу (%)</label>
                      <Input
                        type="number"
                        placeholder="25"
                        value={calculator.conversion}
                        onChange={(e) => {
                          setCalculator({ ...calculator, conversion: e.target.value });
                          setCalcResults(null);
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Средний чек (₽)</label>
                      <Input
                        type="number"
                        placeholder="5000"
                        value={calculator.averageCheck}
                        onChange={(e) => {
                          setCalculator({ ...calculator, averageCheck: e.target.value });
                          setCalcResults(null);
                        }}
                      />
                    </div>
                    <Button onClick={calculateROI} className="w-full" size="lg">
                      <Icon name="Calculator" className="mr-2" size={20} />
                      Рассчитать
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Результаты расчёта</CardTitle>
                  <CardDescription>Прогноз эффективности кампании</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  {calcResults ? (
                    <div className="space-y-6">
                      <div className="p-4 bg-white rounded-lg border">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">Стоимость заявки</span>
                          <Icon name="TrendingDown" className="text-primary" size={18} />
                        </div>
                        <div className="text-3xl font-bold text-primary">{calcResults.costPerLead}₽</div>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg border">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">Клиентов</span>
                          <Icon name="Users" className="text-primary" size={18} />
                        </div>
                        <div className="text-3xl font-bold">{calcResults.clients}</div>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg border">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">Выручка</span>
                          <Icon name="DollarSign" className="text-primary" size={18} />
                        </div>
                        <div className="text-3xl font-bold text-green-600">{calcResults.revenue.toLocaleString()}₽</div>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-r from-accent to-primary text-white rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-white/90">ROI (окупаемость)</span>
                          <Icon name="TrendingUp" className="text-white" size={18} />
                        </div>
                        <div className="text-4xl font-bold">{calcResults.roi > 0 ? '+' : ''}{calcResults.roi}%</div>
                        <div className="text-xs text-white/80 mt-1">
                          {calcResults.roi > 100 ? 'Отличная окупаемость!' : calcResults.roi > 0 ? 'Кампания окупается' : 'Требуется оптимизация'}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                      <Icon name="Calculator" className="text-muted-foreground/30 mb-4" size={64} />
                      <p className="text-muted-foreground">Заполните поля слева и нажмите<br />"Рассчитать" для получения результатов</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">Хотите реальных результатов как в расчёте?</p>
              <Button size="lg" asChild>
                <a href="#contact">Получить консультацию</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят те, кто уже работает со мной</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-secondary to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Получить консультацию</h2>
              <p className="text-lg text-white/90">
                Оставьте заявку, и я свяжусь с вами в течение часа для обсуждения вашего проекта
              </p>
            </div>
            
            {isSubmitted ? (
              <Card className="p-8 text-center">
                <Icon name="CheckCircle" className="text-primary mx-auto mb-4" size={56} />
                <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
                <p className="text-muted-foreground">Я свяжусь с вами в ближайшее время</p>
              </Card>
            ) : (
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      type="text"
                      placeholder="Иван Петров"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Расскажите о вашем проекте</label>
                    <Textarea
                      placeholder="Какой у вас бизнес? Что хотите продвигать на Авито?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="TrendingUp" size={24} />
                <span className="font-bold text-lg">АВИТОЛОГ</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональная настройка и ведение рекламы на Авито для вашего бизнеса
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-white/70 hover:text-white transition-colors">Обо мне</a>
                <a href="#cases" className="block text-white/70 hover:text-white transition-colors">Кейсы</a>
                <a href="#services" className="block text-white/70 hover:text-white transition-colors">Услуги</a>
                <a href="#calculator" className="block text-white/70 hover:text-white transition-colors">Калькулятор</a>
                <a href="#testimonials" className="block text-white/70 hover:text-white transition-colors">Отзывы</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Icon name="Mail" size={16} />
                  <span>info@avitolog.ru</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            © 2026 Авитолог. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}