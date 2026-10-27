import { Redirect } from 'expo-router';
import { SupplyFormScreen } from '../../../../features/care/screens/SupplyFormScreen';
import { SUPPLIES_ENABLED } from '../../../../lib/care/suppliesEnabled';

// While supplies are paused (lib/care/suppliesEnabled.ts), old links and reminders land on Care.
export default function AddSupplyRoute() {
  return SUPPLIES_ENABLED ? <SupplyFormScreen /> : <Redirect href="/care" />;
}
