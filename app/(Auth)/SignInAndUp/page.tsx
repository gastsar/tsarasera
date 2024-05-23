"use client";
import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import * as Yup from "yup";
import useClientAuth from "../../Hooks/useClientAuth";

interface FormData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string().email("Format invalide").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function page() {
  const {
    user,
    isFetch,
    signUp,
    signIn,
    loginWithGoogle,
    redirectIfAuthentificated,
  } = useClientAuth();
  const [isSignUpActive, setisSignUpActive] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleFormChange = () => {
    setisSignUpActive(!isSignUpActive);
    setFormData({
      email: "",
      password: "",
    });
    setErrors({});
  };

  type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

  const handleInputChange = (event: ChangeEvent) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    schema
      .validate(formData, { abortEarly: false })
      .then(() => {
        signUp(formData.email, formData.password);
      })
      .catch((validationErrors: Yup.ValidationError) => {
        const formattedErrors: Partial<FormData> = {};
        validationErrors.inner.forEach((error) => {
          formattedErrors[error.path as keyof FormData] = error.message;
        });
        setErrors(formattedErrors);
      });
  };

  const handleSignIn = () => {
    schema
      .validate(formData, { abortEarly: false })
      .then(() => {
        signIn(formData.email, formData.password);
      })
      .catch((validationErrors: Yup.ValidationError) => {
        const formattedErrors: Partial<FormData> = {};
        validationErrors.inner.forEach((error) => {
          formattedErrors[error.path as keyof FormData] = error.message;
        });
        setErrors(formattedErrors);
      });
  };

  if (isFetch) {
    return <h2>En cours de connexion</h2>;
  }
  useEffect(() => {
    redirectIfAuthentificated();
  }, [redirectIfAuthentificated]);

  return (
    <div>
      <section className="h-screen w-full flex items-center justify-center flex-col gap-2">
        <form
          action=""
          className="flex flex-col gap-2 bg-slate-50 p-5 rounded-md shadow-md"
        >
          {isSignUpActive ? <h1>Inscription</h1> : <h1>Connexion</h1>}

          <div>
            <button
              onClick={loginWithGoogle}
              className="flex gap-2 items-center  text-white rounded-md bg-red-500 p-3"
            >
              <FaGoogle />
              <span>
                {isSignUpActive
                  ? "S'inscrire avec Google"
                  : "Se connecter avec Google"}
              </span>
            </button>
          </div>
          <div>Où voulez-vous s'inscrire</div>
          <label htmlFor="email">Email</label>
          <input
            className="border border-gray-600 rounded-md py-2 my-2"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <label htmlFor="password">Mot de passe</label>
          <input
            className="border border-gray-600 rounded-md py-2 my-2"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <p className="text-red-500"> {errors.password}</p>
          )}

          {isSignUpActive ? (
            <button
              type="button"
              onClick={handleSignUp}
              className="bg-gray-600 px-3 py-1.5 text-white my-3 rounded-md hover:bg-slate-700"
            >
              S'inscrire
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSignIn}
              className="bg-gray-600 px-3 py-1.5 text-white my-3 rounded-md hover:bg-slate-700"
            >
              Se connecter
            </button>
          )}

          {isSignUpActive ? (
            <a href="#" onClick={handleFormChange} className="">
              Déja un compde ? Connectez-vous
            </a>
          ) : (
            <>
              <a href="#" onClick={handleFormChange}></a>
              <p>
                Pas de compte ?{" "}
                <a href="#" onClick={handleFormChange}>
                  Inscrivez-vous
                </a>
              </p>
            </>
          )}
        </form>
      </section>
    </div>
  );
}

export default page;
