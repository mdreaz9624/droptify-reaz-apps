import {
  FaTruckFast,
  // FaGlobeAsia,
  // FaBoxes,
  // FaMoneyBillAlt,
  FaBuilding,
  // FaUndo,
} from "react-icons/fa6";   //  <-- FIXED HERE

const OurServices = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      desc: "Fast express or affordable standard delivery — choose what fits your needs.",
      icon: <FaTruckFast className="text-5xl text-primary" />,
    },
    {
      title: "Nationwide Delivery",
      desc: "Deliver packages anywhere across the country with trusted riders.",
      icon: <FaTruckFast className="text-5xl text-primary" />,
    },
    {
      title: "Fulfillment Solution",
      desc: "End-to-end storage, packing & delivery services for e-commerce businesses.",
      icon: <FaTruckFast className="text-5xl text-primary" />,
    },
    {
      title: "Cash On Home Delivery",
      desc: "Accept payment upon delivery — secure COD service for all customers.",
      icon: <FaTruckFast className="text-5xl text-primary" />,
    },
    {
      title: "Corporate Service",
      desc: "Customized delivery and logistics support for corporate clients.",
      icon: <FaBuilding className="text-5xl text-primary" />,
    },
    {
      title: "Return Delivery",
      desc: "Fast and secure return pickup and delivery for your customers.",
      icon: <FaTruckFast className="text-5xl text-primary" />,
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-r from-[#002B5B] to-[#00A884] rounded-2xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary">Our Services</h2>
        <p className=" text-black mt-2 text-lg">
          We provide reliable and efficient delivery services for businesses & individuals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {services.map((item, i) => (
          <div
            key={i}
            className="card bg-base-200 shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>

            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-base-content/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
