/* eslint-disable react/prop-types */
// PaymentHistory.jsx (React component)

import './PaymentHistory.css';

// eslint-disable-next-line react/prop-types
const PaymentHistory = ({ payments }) => {
  return (
    <div className="payment-history">
      <h1>Payment History</h1>
      <table>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Status</th>
            <th>Total Amount</th>
            <th>Payment Date</th>
            <th>Mode of Payment</th>
            <th>Customer ID</th>
          </tr>
        </thead>
        <tbody>
      
          {payments.map((payment) => (
            <tr key={payment.paymentId}>
              <td>{payment.paymentId}</td>
              <td>{payment.status}</td>
              <td>{payment.totalAmount}</td>
              <td>{payment.paymentDate}</td>
              <td>{payment.modeOfPayment}</td>
              <td>{payment.customerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
