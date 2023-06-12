import PageNavigation from "@/components/PageNavigation";

// Define your FAQ item type
type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework for production.",
  },
  {
    question: "Why use Next.js?",
    answer:
      "Next.js offers a number of powerful features like SSG, SSR, and more.",
  },
];

const FAQ = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 2xl:grid-cols-3">
      <PageNavigation paths={[{ path: "/faq", label: "FAQ" }]} />
      <div></div>
      <div className="w-full sm:col-span-1 md:col-span-4 2xl:col-span-1 py-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight">FAQ</h1>
          <div className="mt-12">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-bold mb-2">{item.question}</h2>
                <p className="">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FAQ;
