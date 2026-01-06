import { FaMotorcycle, FaMoneyBillWave, FaWarehouse, FaBuilding } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      title: "Booking Pick & Drop",
      desc: "Quickly book your pickup and drop-off with the SupRide app—fast, easy, and reliable.",
      icon: <FaMotorcycle className="text-5xl text-primary" />,
    },
    {
      title: "Cash On Delivery",
      desc: "We offer secure Cash on Delivery (COD) services for your customers.",
      icon: <FaMoneyBillWave className="text-5xl text-primary" />,
    },
    {
      title: "Delivery Hub",
      desc: "Manage all deliveries through our centralized hub for maximum efficiency.",
      icon: <FaWarehouse className="text-5xl text-primary" />,
    },
    {
      title: "Booking SME & Corporate",
      desc: "Special services for SME & Corporate clients with seamless delivery support.",
      icon: <FaBuilding className="text-5xl text-primary" />,
    },
  ];

  return (
    <section className="py-12 bg-base-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">How It Works</h2>
        <p className="text-base-content mt-2">
          Simple steps to get your delivery done with CylnRide
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              {step.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-base-content/70">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
