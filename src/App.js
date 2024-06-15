import { useState } from "react";
import { BillInput } from "./components/BillInput";
import { Service } from "./components/Service";
import { Button } from "./components/Button";
import { TotalBill } from "./TotalBill";

export default function App() {
  const [bill, setBill] = useState(null);
  const [service, setService] = useState(null);
  const [friendService, setFriendService] = useState(null);

  function handleReset() {
    setBill((bill) => 0);
    setService((service) => 0);
    setFriendService((friendService) => 0);
  }
  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <Service service={service} setService={setService}>
        <span>How did you like the service?</span>
      </Service>
      <Service service={friendService} setService={setFriendService}>
        <span>How did your friend like the service?</span>
      </Service>
      <TotalBill bill={bill} service={service} friendService={friendService} />
      {bill > 0 ? <Button handleReset={handleReset} /> : null}
    </div>
  );
}
