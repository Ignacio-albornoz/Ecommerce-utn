import { createMachine, assign } from 'xstate';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { fetchCountries } from '../Utils/api';

const auth = getAuth();

export const userHasLogin = createMachine({
  id: 'user has login',
  initial: 'loading',
  context: {
    email: '',
    password: '',
    active: false,
    emailVerified: false,
    auth,
  },
  states: {
    loading: {
      //Invoca Servicios
      invoke: {
        id: 'signInWithEmailAndPassword',
        //signInWithEmailAndPassword(auth, context)
        src: (context) => signInWithEmailAndPassword({ auth, email, password }).then((userCredential) => {
          // Signed in
          const { data } = userCredential;
          assing({
            email: data.email,
            active: true,
          });

        }),
        //Done on call
        onDone: {
          target: 'success',
          actions: assign({
            countries: (context, event) => event.data,
          }),
        },
        //Error on call
        onError: {
          target: 'failure',
          actions: assign({
            error: 'Fallo el request',
          }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: 'loading' },
      },
    },
  },
});
