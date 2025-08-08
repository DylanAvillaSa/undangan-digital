import Countdown from "react-countdown";

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <span className='text-center font-semibold text-[#D3BAA2]'>
        Acara sedang berlangsung!
      </span>
    );
  } else {
    const items = [
      { label: "DAYS", value: days },
      { label: "HOURS", value: hours },
      { label: "MINUTES", value: minutes },
      { label: "SECONDS", value: seconds },
    ];

    return (
      <div className='flex justify-center gap-3 my-8'>
        {items.map((item, idx) => (
          <div
            key={idx}
            className='bg-[#D3BAA2] text-white rounded-md px-3 py-2 shadow'>
            <div className='text-lg font-semibold'>{item.value}</div>
            <div className='text-xs tracking-wide'>{item.label}</div>
          </div>
        ))}
      </div>
    );
  }
};

export default function CountdownSection() {
  return (
    <div>
      <Countdown
        date={new Date("2025-12-29T10:00:00")}
        renderer={CountdownRenderer}
      />
    </div>
  );
}
