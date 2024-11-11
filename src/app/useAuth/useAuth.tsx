// hooks/useAuth.js
import { app } from '@/firebase/firebaseConfig';
import useUserStore from '@/Zustand/useUserStore';
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';

const useAuth = () => {
  const setUser = useUserStore((state) => state.setUser);
  

  const auth = getAuth(app)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      
      if (user) {
        setUser(user); 
      } else {
        
      }
    });

    return () => unsubscribe(); // Clean up on unmount
  }, [setUser]);

  return useUserStore((state) => state.user);
};

export default useAuth;
