import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="">
      <div className="container">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pricing</h2>
        <p className="text-xl text-[#010D3E] tracking-tight mt-6 text-center">Find the right plan for your needs. Free forever, upgrade to enjoy unlimited mock interviews with detailed feednack
        and action plans</p>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({title, monthlyPrice, buttonText, popular, inverse, features}) => (
          <div className={twMerge("p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_30px_rgba(0,0,0,0.07)]", inverse === true && "border-black bg-black text-white")}>
            <div className="flex justify-between"><h3 className="text-lg font-bold text-black/50">{title}</h3>
            {popular === true && (      
            <div className="inline-flex rounded-xl border  text-sm px-4 py-1.5 border-white/20">
            <span className="bg-[linear-gradient(to_right, #DD7DDF, #E1CD86, #BBCB92, #71C2EF, #3BFFFF, #DD7DDF)] text-transparent bg-clip-text font-medium">Popular</span></div>
          )}
          </div>
            <div className="flex items-baseline gap-1 mt-[30px]">
            <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
              <span className="font-bold tracking-tight text-black/50">/month</span>
            </div>
            <button className={twMerge("bg-black text-white py-4 px-2 rounded-lg text-md inline-flex items-center justify-center tracking-tight w-full mt-[30px]", inverse === true && "bg-white text-black")}>{buttonText}</button>
            <ul className="flex flex-col gap-5 mt-10">
              {features.map((feature) => (
                <li className="text-sm flex items-center gap-4">
                  <CheckIcon className="h-6 w-6" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}


