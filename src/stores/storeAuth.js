// stores/counter.js
import { defineStore } from 'pinia'
import { auth } from '@/js/firebase';
import { createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useStoreNotes} from '@/stores/storeNotes';




export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return { 
        user: {}
     }
  },
  actions: {
    init()
    {
      const storeNotes = useStoreNotes()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          this.user.id = user.uid
          this.user.email = user.email
          this.router.push('/')
          storeNotes.init()
        } else {
          // User is signed out
          this.user = {}
          this.router.replace('/auth')
          storeNotes.clearNotes()
        }
      });
    },
    registerUser(credentials)
    {
      createUserWithEmailAndPassword(auth, credentials.emailId, credentials.password)
      .then((userCredential) => { 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message)
      });
    },
    async loginUser(credentials){
      return signInWithEmailAndPassword(auth, credentials.emailId, credentials.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          alert(error.message)
        });
    },
    userLogout(){
      signOut(auth).then(() => {

      }).catch((error) => {
        // An error happened.
        alert(error.message)
      });
    }

  },

})