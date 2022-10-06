import {PriceCard} from './PriceCard'

function App() {

  const plans=[
    {
      category: "FREE",
      price: "0",
      features:{
        noOfUsers: "✔ Single User",
        storage: "✔ 5GB Storage",
        noOfPubProj: "✔ Unlimited Public Projects",
        access: "✔ Community Access",
        noOfPriProj: "❌ Unlimited Private Projects",
        phone: "❌ Dedicated Phone Support",
        subDomain: "❌ Free Subdomain",
        report: "❌ Monthly Status Report"
      }
    },
    {
      category: "PLUS",
      price: "9",
      features:{
        noOfUsers: "✔ 5 Users",
        storage: "✔ 50GB Storage",
        noOfPubProj: "✔ Unlimited Public Projects",
        access: "✔ Community Access",
        noOfPriProj: "✔ Unlimited Private Projects",
        phone: "✔ Dedicated Phone Support",
        subDomain: "✔ Free Subdomain",
        report: "❌ Monthly Status Report"
      }
    },
    {
      category: "PRO",
      price: "49",
      features:{
        noOfUsers: "✔ Unlimited Users",
        storage: "✔ 150GB Storage",
        noOfPubProj: "✔ Unlimited Public Projects",
        access: "✔ Community Access",
        noOfPriProj: "✔ Unlimited Private Projects",
        phone: "✔ Dedicated Phone Support",
        subDomain: "✔ Free Subdomain",
        report: "✔ Monthly Status Report"
      }
    }
  ];

  return (
    <div className="App">
      <PriceCard plans={plans} />
    </div>
  );
}

export default App;
