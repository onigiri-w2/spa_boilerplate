import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "@/lib/firebase";

export async function getIdToken() {
  const user = auth.currentUser;
  if (!user) return undefined;
  return await user.getIdToken();
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
}
