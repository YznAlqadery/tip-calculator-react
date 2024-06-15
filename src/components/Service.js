export function Service({ children, service, setService }) {
  const serviceOptions = [
    { text: "Dissatisfied 0%", value: 0 },
    { text: "It was okay 5%", value: 5 },
    { text: "It was good 10%", value: 15 },
    { text: "It was amazing 20%", value: 20 },
  ];
  return (
    <div>
      {children}
      <select
        value={service}
        onChange={(e) => setService(Number(e.target.value))}
      >
        {serviceOptions?.map((option, index) => (
          <option value={option.value} key={index + 1}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
