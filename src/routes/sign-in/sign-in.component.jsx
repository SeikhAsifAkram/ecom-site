import { signInWithGooglePopup, createUserAuthFromDocument } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserAuthFromDocument(user)
    }
    return(
        <div>
            <h1>This is the Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>
        </div>
    );
}

export default SignIn;