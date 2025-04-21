import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-warehouse-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-warehouse-900 leading-tight">
              Современные складские услуги для вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground">
              Мы предлагаем надежное хранение и управление товарами 
              с использованием передовых технологий и индивидуальным подходом к каждому клиенту.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="bg-warehouse-600 hover:bg-warehouse-700">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-warehouse-300 text-warehouse-700">
                Посмотреть тарифы <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-warehouse-700">10+</p>
                <p className="text-sm text-muted-foreground">лет опыта</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-warehouse-700">5000м²</p>
                <p className="text-sm text-muted-foreground">площадь складов</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-warehouse-700">500+</p>
                <p className="text-sm text-muted-foreground">довольных клиентов</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative animate-fade-in">
            <div className="bg-white p-2 rounded-lg shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Современный склад" 
                className="w-full h-auto rounded"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-warehouse-100 p-4 rounded-lg shadow-lg border border-warehouse-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warehouse-500 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-warehouse-900">Современное оборудование</p>
                  <p className="text-sm text-muted-foreground">Контроль температуры и влажности</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-warehouse-100 rounded-bl-full opacity-50" />
    </section>
  );
};

export default Hero;
