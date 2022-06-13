import ClientJobs from "../../components/client/ClientJobs";
import WelcomeToHustle from "../../components/client/Welcome";

function ClientHome() {
  return (
    <div>
      <WelcomeToHustle/>
      <ClientJobs/>
    </div>
  );
}

export default ClientHome;
