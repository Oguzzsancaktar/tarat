interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className="flex flex-col h-full flex-1 p-6 items-center gap-6 rounded-[32px] border border-primary025 bg-primary002 box-shadow-feature-card">
      <div className="flex h-[124px] self-stretch justify-center rounded-3xl border border-primary025 bg-white">
        <div className="flex flex-col self-center dot-background-feature-card items-center gap-3 flex-shrink-0 h-18 w-[226px]">
          {feature.icon}
        </div>
      </div>
      <div className="flex flex-col w-[253px] items-center gap-2">
        <span className="text-grayscale900 text-xl">{feature.title}</span>
        <span className="text-grayscale700 text-base text-center">
          {feature.description}
        </span>
      </div>
    </div>
  );
};

export default FeatureCard;
