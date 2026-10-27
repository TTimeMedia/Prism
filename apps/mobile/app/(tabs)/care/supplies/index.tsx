import { Redirect } from 'expo-router';
import { SuppliesScreen } from '../../../../features/care/screens/SuppliesScreen';
import { SUPPLIES_ENABLED } from '../../../../lib/care/suppliesEnabled';

// While supplies are paused (lib/care/suppliesEnabled.ts), old links and reminders land on Care.
export default function SuppliesRoute() {
  return SUPPLIES_ENABLED ? <SuppliesScreen /> : <Redirect href="/care" />;
}
