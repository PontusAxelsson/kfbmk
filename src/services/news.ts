import { collection, doc } from "firebase/firestore";
import { firebase } from "../auth/firebase";
import { useFirestoreQuery } from "../auth/react-query-firebase/firestore";

const ref = collection(firebase, "news");

export const queryNews = () => useFirestoreQuery(
	["news"],
	ref,
	{ subscribe: true }
);

export const queryNewsItem = (id: string) => doc(ref, id);