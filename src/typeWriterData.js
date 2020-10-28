const typeWriterData = [
  "Apple",
  "AAPL",
  "Amazon",
  "AMZN",
  "Microsoft",
  "MSFT",
  "Alibaba",
  "BABA",
  "Facebook",
  "FB",
  "Sony",
  "TSM",
  "TSLA",
  "TESLA",
  "NVDA",
  "DAL",
  "Waste Management",
  "Square",
  "AMD",
  "NET",
  "CRM",
  "DIS",
  "Disney",
  "Salesforce",
  "Walmart",
  "Paypal",
  "Verizon",
  "Adobe",
  "Visa",
  "Mastercard",
  "Nintendo",
];

const shuffledData = typeWriterData.sort(shuffle);

function shuffle() {
  return 0.5 - Math.random();
}

export default shuffledData;
