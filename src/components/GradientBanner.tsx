import gradientBanner from "@/assets/gradient-banner.jpg";

const GradientBanner = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] animate-fade-in">
          <img
            src={gradientBanner}
            alt="Vibrant gradient background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                I'm a PhD researcher and blooming excellent developer
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                Dedicated to make impactful contributions through innovative research 
                and high-quality software products
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientBanner;
