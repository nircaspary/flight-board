const FlightsHeader = () => {
  return (
    <ul className='flights-list-header' style={{ fontWeight: 'bold', fontSize: '20px' }}>
      <li>Flight Number</li>
      <li>Scheduled Time</li>
      <li>Actual Time</li>
      <li>Gate</li>
    </ul>
  );
};

export default FlightsHeader;
