"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";

const Subscribers = () => {
  const stats = [
    { value: 150, suffix: "+", label: "Projects Completed" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 50, suffix: "+", label: "Happy Clients" },
    { value: 5, suffix: "+", label: "Years Experience" },
  ];

  return (
    <div className="w-full py-10 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white">
              <NumberTicker value={item.value as any} decimalPlaces={0} />
              {item.suffix}
            </h3>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscribers;
