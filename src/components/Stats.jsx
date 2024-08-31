import React from "react";

const stats = [
  { label: "Years of experience", value: 8 },
  { label: "Projects completed", value: 4 },
  { label: "My Prof. Value", value: 10 },
];

const Stats = () => {
  return (
    <section className="stats themeChange ml-6 flex gap-5">
      {stats.map((stat, index) => (
        <div key={index} className="textColor text-center">
          <h3 className="text-3xl font-bold">{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
