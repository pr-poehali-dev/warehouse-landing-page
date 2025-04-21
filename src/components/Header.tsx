import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Phone, Clock } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="w-10 h-10 rounded bg-warehouse-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold">SC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-warehouse-800">СкладСервис</h1>
                <p className="text-xs text-muted-foreground">Надежное хранение для вашего бизнеса</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-warehouse-700 hover:text-warehouse-500 transition">
              Услуги
            </a>
            <a href="#pricing" className="text-warehouse-700 hover:text-warehouse-500 transition">
              Тарифы
            </a>
            <a href="#benefits" className="text-warehouse-700 hover:text-warehouse-500 transition">
              Преимущества
            </a>
            <a href="#contact" className="text-warehouse-700 hover:text-warehouse-500 transition">
              Контакты
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 text-warehouse-500 mr-2" />
              <span className="font-medium">8 (800) 555-35-35</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 text-warehouse-500 mr-2" />
              <span className="text-muted-foreground">Пн-Пт: 9:00-18:00</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="space-y-1 px-4 py-4">
            <a 
              href="#services" 
              className="block py-2 text-warehouse-700 hover:text-warehouse-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#pricing" 
              className="block py-2 text-warehouse-700 hover:text-warehouse-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Тарифы
            </a>
            <a 
              href="#benefits" 
              className="block py-2 text-warehouse-700 hover:text-warehouse-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Преимущества
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-warehouse-700 hover:text-warehouse-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            
            <div className="pt-4 pb-2 border-t border-gray-200">
              <div className="flex items-center py-2">
                <Phone className="h-4 w-4 text-warehouse-500 mr-2" />
                <span className="font-medium">8 (800) 555-35-35</span>
              </div>
              <div className="flex items-center py-2">
                <Clock className="h-4 w-4 text-warehouse-500 mr-2" />
                <span className="text-muted-foreground">Пн-Пт: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
