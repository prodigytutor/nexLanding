/**
 * ProductShowcase component represents the section that showcases the product.
 * It is a functional component that returns JSX.
 *
 * @return {JSX.Element} The JSX representation of the ProductShowcase component.
 */
import ProductImage from "@/assets/product-image.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    // The section element is used to group content together
    <section className="bg-gradient-to-b from-[#FFFFFF] via-[#EAEEFE] to-[#D2DBFF] py-24" >
      {/* The container class is used to center the content */}
      <div className="container">
        {/* The heading represents the main title of the section */}
        {/* The docstring can be added to the heading element */}
        {/* The heading represents the main title of the section */}
        <div className="flex justify-center">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Boost your confidence</div>
        </div>
        {/* The h2 element represents main headings. It is used for the most important heading on the page */}
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">a more effective way to prepare</h2>
        {/* The p element represents a paragraph of regular text */}
        {/* The docstring can be added to the paragraph element */}
        {/* The paragraph represents a paragraph of regular text */}
        <p className="text-xl text-[#010D3E] tracking-tight mt-6 text-center">Effortlessly prepare for your next interview. With our app, you can focus on what's important.</p>

      </div>
      <div className="flex justify-center">
      <Image src={ProductImage} width={1550} height={1550} alt="AI Interviewz" className="" />
      </div>
    </section>
  );
};
