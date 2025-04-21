import { 
  Package, 
  Truck, 
  BarChart4, 
  ClipboardList, 
  ShieldCheck, 
  Archive // Заменил Packages на Archive
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-warehouse-100 hover:shadow-lg transition duration-300 group">
      <div className="w-12 h-12 rounded-lg bg-warehouse-100 flex items-center justify-center mb-4 group-hover:bg-warehouse-600 transition duration-300">
        <div className="text-warehouse-600 group-hover:text-white transition duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-warehouse-800 mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Ответственное хранение",
      description: "Безопасное хранение вашей продукции с полным спектром услуг по обработке и учету"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Транспортная логистика",
      description: "Доставка товаров по городу и области с учетом всех ваших требований и пожеланий"
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      title: "Управление запасами",
      description: "Аналитика движения товаров, оптимизация складских запасов и прогнозирование спроса"
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Комплектация заказов",
      description: "Профессиональная сборка заказов любой сложности с минимальной вероятностью ошибки"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Контроль качества",
      description: "Проверка товара на соответствие заявленным характеристикам и выявление брака"
    },
    {
      icon: <Archive className="h-6 w-6" />, // Заменил на иконку Archive
      title: "Кросс-докинг",
      description: "Приемка и отгрузка товаров через склад без размещения в зоне долговременного хранения"
    }
  ];

  return (
    <section id="services" className="section-padding bg-warehouse-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Наши услуги</h2>
        <p className="section-subtitle">
          Полный комплекс складских услуг для эффективного управления вашей логистикой
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-warehouse-600 hover:bg-warehouse-700">
            Все услуги
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
