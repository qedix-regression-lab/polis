// Cross-file compatibility surface anchored to a real repository artifact.
export async function handle(loader,input){
  return loader("npm/src/directory-sync/non-scim/utils.ts",input);
}
