import { validateAccessToken } from "../../../utils/auth/validateAccesToken";
import LogoutButton from "./LogoutButton";
import styles from "./MyAccount.module.sass";

export const dynamic = "force-dynamic";

export default async function MyAccountPage() {
  const customer = await validateAccessToken();

  return (
    <div>
      <h2>Account info</h2>
      <section>
        <p>Nombre: {customer?.firstName}</p>
        <p>email: {customer?.email}</p>
        <LogoutButton />
      </section>
    </div>
  );
}
