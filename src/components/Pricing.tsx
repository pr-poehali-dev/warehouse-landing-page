import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface PlanFeature {
  title: string;
  included: boolean;
}

interface PricingPlanProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
}

const PricingPlan = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  popular = false 
}: PricingPlanProps) => {
  return (
    <div className={`
      bg-white rounded-xl shadow-md overflow-hidden border
      ${popular ? 'border-warehouse-500 scale-105 relative z-10' : 'border-warehouse-100'}
    `}>
      {popular && (
        <div className="bg-warehouse-500 text-white text-xs font-semibold px-2 py-1 absolute right-0 top-4 rounded-l-md">
          Популярный
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-warehouse-800 mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="mb-6">
          <span className="text-3xl font-bold text-warehouse-800">{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
        
        <Button 
          className={`w-full ${popular 
            ? 'bg-warehouse-600 hover:bg-warehouse-700' 
            : 'bg-warehouse-100 text-warehouse-800 hover:bg-warehouse-200'}`}
        >
          Выбрать тариф
        </Button>
      </div>
      
      <div className="border-t border-warehouse-100 p-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-warehouse-500 mr-2 shrink-0" />
              ) : (
                <X className="h-5 w-5 text-muted-foreground mr-2 shrink-0" />
              )}
              <span className={feature.included ? "text-warehouse-700" : "text-muted-foreground"}>
                {feature.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "Стартовый",
      price: "15 000 ₽",
      period: "мес",
      description: "Идеально для небольшого бизнеса и сезонного хранения",
      features: [
        { title: "До 20 паллетомест", included: true },
        { title: "Базовый учет товаров", included: true },
        { title: "До 10 операций в день", included: true },
        { title: "Стандартная отчетность", included: true },
        { title: "Комплектация заказов", included: false },
        { title: "Персональный менеджер", included: false },
      ],
      popular: false
    },
    {
      title: "Оптимальный",
      price: "45 000 ₽",
      period: "мес",
      description: "Комплексное решение для растущего бизнеса",
      features: [
        { title: "До 50 паллетомест", included: true },
        { title: "Расширенный учет товаров", included: true },
        { title: "До 50 операций в день", included: true },
        { title: "Расширенная отчетность", included: true },
        { title: "Комплектация заказов", included: true },
        { title: "Персональный менеджер", included: false },
      ],
      popular: true
    },
    {
      title: "Бизнес",
      price: "90 000 ₽",
      period: "мес",
      description: "Полный спектр услуг для крупного бизнеса",
      features: [
        { title: "До 100+ паллетомест", included: true },
        { title: "Полный учет товаров", included: true },
        { title: "Неограниченное число операций", included: true },
        { title: "Индивидуальная отчетность", included: true },
        { title: "Комплектация заказов", included: true },
        { title: "Персональный менеджер", included: true },
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Тарифы на услуги</h2>
        <p className="section-subtitle">
          Выберите оптимальный тариф для вашего бизнеса, соответствующий объему хранения и дополнительным потребностям
        </p>
        
        <div className="flex flex-col lg:flex-row gap-6 mt-10 lg:mt-12">
          {plans.map((plan, index) => (
            <div key={index} className="flex-1">
              <PricingPlan {...plan} />
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">
            Нужен индивидуальный тариф? Мы можем разработать специальное предложение для вас
          </p>
          <Button variant="outline" className="border-warehouse-200 text-warehouse-700">
            Получить индивидуальное предложение
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
