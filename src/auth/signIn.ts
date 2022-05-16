import { signInWithPopup, getIdTokenResult } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db, googleProvider } from "./firebase";

export const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		console.log("result",res);
		
		const user = res.user;
		const q = query(collection(db, "users"), where("uid", "==", user.uid));
		console.log("DOCS",user);
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, "users"), {
				uid: user.uid,
				name: user.displayName,
				authProvider: "google",
				email: user.email,
			});
		}
		const token = await getIdTokenResult(user);
		
	} catch (err) {
		console.error(err);
	}
};