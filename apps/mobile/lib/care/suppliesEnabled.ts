/**
 * Off while supplies are under maintenance: hides them on Care, sends the
 * supply screens back to Care, and stops supply reminders. Saved supplies and
 * the database countdown are untouched, so turning this back on picks up
 * where people left off. Kept in its own file so reading it never loads the
 * Supabase client.
 */
export const SUPPLIES_ENABLED = false;
