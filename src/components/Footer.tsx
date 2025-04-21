import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warehouse-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded bg-white flex items-center justify-center mr-2">
                <span className="text-warehouse-800 font-bold">SC</span>
              </div>
              <h3 className="text-xl font-bold">СкладСервис</h3>
            </div>
            <p className="text-warehouse-200 mb-4">
              Современные складские услуги для эффективного управления вашей логистикой. Мы заботимся о вашем товаре как о своем собственном.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-warehouse-300 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-warehouse-300 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-warehouse-300 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-warehouse-300 hover:text-white transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-warehouse-300 hover:text-white transition">Ответственное хранение</a>
              </li>
              <li>
                <a href="#" className="text-warehouse-300 hover:text-white transition">Транспортная логистика</a>
              </li>
              <li>
                <a href="#" className="text-warehouse-300 hover:text-white transition">Управление запасами</a>
              </li>
              <li>
                <a href="#" className="text-warehouse-300 hover:text-white transition">Комплектация заказов</a>
              </li>
              <li>
                <a href="#" className="text-warehouse-300 hover:text-white transition">Контроль качества</a>
              </li>
              <li>
                <a href="#" className="text-warehouse-300 hover:text-white transition">Кросс-докинг</a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Компания</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-warehouse-300 hover:text-white transition">О нас</a>
              </li>
              <li>
                <a href="#" className="text-warehouse-300 hover:text-white transition">Тарифы</a>
              </li>
              <li>
                <a href="#" className="text-warehouse-300 hover:text-white transition">Наши клиенты</a>
              </li>
              <li>
                <a href="#" className="text-warehouse-300 hover:text-white transition">Новости</a>
              </li>
              <li>
                <a href="#" className="text-warehouse-300 hover:text-white transition">Блог</a>
              </li>
              <li>
                <a href="#" className="text-warehouse-300 hover:text-white transition">Контакты</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-warehouse-300 mr-2">📞</span>
                <span className="text-warehouse-200">8 (800) 555-35-35</span>
              </li>
              <li className="flex items-start">
                <span className="text-warehouse-300 mr-2">✉️</span>
                <span className="text-warehouse-200">info@skladservice.ru</span>
              </li>
              <li className="flex items-start">
                <span className="text-warehouse-300 mr-2">📍</span>
                <span className="text-warehouse-200">г. Москва, ул. Складская, д. 15</span>
              </li>
              <li className="flex items-start">
                <span className="text-warehouse-300 mr-2">🕒</span>
                <span className="text-warehouse-200">Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-warehouse-700 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-warehouse-300 text-sm mb-4 md:mb-0">
              © 2023 СкладСервис. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-warehouse-300 text-sm hover:text-white transition">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-warehouse-300 text-sm hover:text-white transition">
                Условия использования
              </a>
              <a href="#" className="text-warehouse-300 text-sm hover:text-white transition">
                Карта сайта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
