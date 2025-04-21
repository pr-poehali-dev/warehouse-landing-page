import { 
  ShieldCheck, 
  Map, 
  Clock, 
  Laptop, 
  Users, 
  Truck
} from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit = ({ icon, title, description }: BenefitProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 bg-warehouse-100 p-3 rounded-lg text-warehouse-600">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-warehouse-800 mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Безопасность и сохранность",
      description: "Современные системы безопасности, круглосуточная охрана и видеонаблюдение для защиты ваших товаров"
    },
    {
      icon: <Map className="h-5 w-5" />,
      title: "Удобное расположение",
      description: "Наши склады расположены вблизи основных транспортных маршрутов города для быстрой отгрузки и приема товаров"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Оперативность",
      description: "Обработка заявок в короткие сроки, быстрая комплектация и отгрузка товаров в день заказа"
    },
    {
      icon: <Laptop className="h-5 w-5" />,
      title: "Автоматизированный учет",
      description: "Современная WMS-система для точного контроля движения товаров и минимизации ошибок"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Опытные специалисты",
      description: "Команда профессионалов с многолетним опытом работы в сфере складской логистики"
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Собственный автопарк",
      description: "Доставка товаров собственным транспортом различной грузоподъемности по городу и области"
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title">Почему выбирают нас</h2>
        <p className="section-subtitle">
          Мы создаем лучшие условия для хранения и обработки ваших товаров
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-8">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-warehouse-100 rounded-full opacity-50" />
      <div className="absolute top-20 -left-20 w-40 h-40 bg-warehouse-100 rounded-full opacity-50" />
    </section>
  );
};

export default Benefits;
