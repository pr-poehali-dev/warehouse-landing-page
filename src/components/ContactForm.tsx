import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="section-padding bg-warehouse-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Связаться с нами</h2>
        <p className="section-subtitle">
          Оставьте заявку, и мы свяжемся с вами для обсуждения деталей сотрудничества
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-warehouse-100">
              <h3 className="text-xl font-semibold text-warehouse-800 mb-6">Заполните форму</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-warehouse-700">
                      Ваше имя
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов" 
                      className="border-warehouse-200 focus:border-warehouse-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-warehouse-700">
                      Название компании
                    </label>
                    <Input 
                      id="company" 
                      placeholder="ООО Компания" 
                      className="border-warehouse-200 focus:border-warehouse-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-warehouse-700">
                      Телефон
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+7 (___) ___-__-__" 
                      className="border-warehouse-200 focus:border-warehouse-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-warehouse-700">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="example@email.com" 
                      className="border-warehouse-200 focus:border-warehouse-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-warehouse-700">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваш запрос..." 
                    className="border-warehouse-200 focus:border-warehouse-500" 
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-warehouse-600 hover:bg-warehouse-700"
                >
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-semibold text-warehouse-800 mb-6">Контактная информация</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-warehouse-100 rounded-lg text-warehouse-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-warehouse-800 mb-1">Телефон</h4>
                  <p className="text-warehouse-600">8 (800) 555-35-35</p>
                  <p className="text-muted-foreground text-sm">Пн-Пт с 9:00 до 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-warehouse-100 rounded-lg text-warehouse-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-warehouse-800 mb-1">Email</h4>
                  <p className="text-warehouse-600">info@skladservice.ru</p>
                  <p className="text-muted-foreground text-sm">Для запросов и предложений</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-warehouse-100 rounded-lg text-warehouse-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-warehouse-800 mb-1">Адрес</h4>
                  <p className="text-warehouse-600">г. Москва, ул. Складская, д. 15</p>
                  <p className="text-muted-foreground text-sm">Промышленная зона "Восточная"</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-warehouse-100 rounded-lg text-warehouse-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-warehouse-800 mb-1">Режим работы</h4>
                  <p className="text-warehouse-600">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-muted-foreground text-sm">Сб: 10:00 - 15:00, Вс: выходной</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-warehouse-100 rounded-lg">
              <p className="text-warehouse-700 text-sm">
                Мы также работаем по индивидуальному графику для крупных клиентов. 
                Свяжитесь с нами для уточнения деталей.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
