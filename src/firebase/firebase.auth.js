import { getAuth } from "firebase/auth";
import app from "./firebaser.config";

const auth = getAuth(app);

export default auth;
