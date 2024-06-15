export function TotalBill({ bill, service, friendService }) {
  const totalTip = (service + friendService) / 2;
  const tip = (bill * totalTip) / 100;
  const roundedTip = parseFloat(tip.toFixed(2));
  const total = parseFloat(bill + roundedTip).toFixed(2);

  return (
    <div>
      {bill > 0 ? (
        <h3>
          You pay ${total} (${bill} + ${roundedTip})
        </h3>
      ) : null}
    </div>
  );
}
