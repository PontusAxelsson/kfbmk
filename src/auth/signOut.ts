import { auth } from "./firebase";

export const signOut = async () => {
	try {
        console.log("signout");
        
		auth.signOut()
		
	} catch (err) {
		console.error(err);
	}
};