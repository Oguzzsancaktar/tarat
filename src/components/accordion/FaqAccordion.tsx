import { useState } from "react";

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="mb-6">
    <div
      className={`${
        isOpen ? "bg-tertiary border-primary050" : "bg-white border-y-grayscale200"
      } cursor-pointer flex justify-between items-center self-start p-4 h-16 rounded-2xl border border-grayscale200 relative`}
      onClick={onClick}
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          !isOpen ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
    <div
      className={`px-4 pb-8 pt-12 -mt-4 z-0 rounded-b-2xl text-wrap bg-white ${
        !isOpen ? "hidden" : "visible"
      }`}
    >
      {content}
    </div>
  </div>
);

const Accordion = () => {
  const [items, setItems] = useState([
    {
      title: "Tarat'ı kullanmaya nasıl başlayabilirim?",
      content:
        "Tarat'ı kullanmaya başlamak çok kolay. Uygulamayı App Store veya Google Play'den indirin ve hesabınızı oluşturmak için ekrandaki talimatları izlemeniz yeterlidir. Kayıt olduktan sonra araba camlarında QR kodlarını taramaya hemen başlayabilirsiniz.",
      isOpen: false,
    },
    {
      title: "Neden Tarat Kullanmalıyım?",
      content:
        "Tarat, aracınızla etkileşim kurmanın kolay ve güvenli bir yolunu sağlar. Yenilikçi QR kod tarama teknolojisiyle anında araç bilgilerinize erişebilir, acil durum iletişim bilgilerinizi yönetebilirsiniz. Kullanımı basit olan Tarat, gelecekteki güncellemelerle daha fazla avantaj sunmayı amaçlayarak kullanıcı deneyimini sürekli iyileştiriyor.",
      isOpen: false,
    },
    {
      title: "Tarat sadece araç sahipleri için mi?",
      content:
        "Hayır, Tarat şu an için araç sahipleri odaklı bir başlangıç yapmış olsa da, ilerleyen zamanlarda uygulama çeşitli genişlemelerle daha fazla kullanıcı kitlesine hitap edecek. Gelecekte, farklı araç türleri, mekanlar, tasmalar ve ilanlar gibi yeni özelliklerin eklenmesi planlanmaktadır. Bu sayede Tarat, daha geniş bir kullanıcı kitlesine ve farklı ihtiyaçlara uygun hale gelecektir.",
      isOpen: false,
    },
    {
      title: "Tarat'ı ticari reklamcılık için kullanabilir miyim?",
      content:
        "Elbette! Tarat, araç sahiplerine araçlarını kolayca satabilmeleri için mükemmel bir fırsat sunuyor. Uygulama üzerinden hızlı bir şekilde ilan oluşturabilir ve potansiyel alıcılarla iletişim kurabilirsiniz. Tarat'ı kullanarak araç satışınızı daha hızlı ve etkili bir şekilde gerçekleştirebilir, bu süreci kolaylıkla yönetebilirsiniz. Başarılar dilerim! ",
      isOpen: false,
    },
    {
      title: "Tarat aracılığıyla paylaşılan kişisel bilgiler ne kadar güvenli?",
      content:
        "Tarat, kullanıcıların paylaştığı kişisel bilgilerin güvenliğine büyük önem verir. Modern güvenlik protokollerini ve şifreleme yöntemlerini kullanarak kullanıcı verilerini korur. Sistem, gizlilik politikaları ve güvenlik standartlarına uygun olarak tasarlanmıştır. Ancak, güvenlik konularında her zaman dikkatli olmak önemlidir. Kullanıcılar da kendi güvenliklerine katkıda bulunmalı, güçlü şifreler kullanmalı ve gizlilik ayarlarını düzenli olarak gözden geçirmelidir. Tarat'ın güvenlik uygulamaları ve politikaları zaman içinde güncellenebilir, bu nedenle kullanıcılar yeni özellikler eklenirse veya değişiklikler yapılırsa güncel bilgilere Tarat'ın resmi kaynaklarından ulaşmalıdır",
      isOpen: false,
    },
  ]);

  const handleItemClick = (index: number) => {
    const newItems = [...items];
    newItems[index].isOpen = !newItems[index].isOpen;
    setItems(newItems);
  };

  return (
    <div className="w-[614px] mx-auto mt-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={item.isOpen}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
