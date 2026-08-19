// Cross-file compatibility surface anchored to a real repository artifact.
export async function handle(loader,input){
  return loader("pages/admin/settings/sso-connection/edit/[id].tsx",input);
}
