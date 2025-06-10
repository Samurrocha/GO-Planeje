import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { useState, useEffect } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Este é o listener! Ele é executado sempre que o estado de autenticação muda.
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser); // Atualiza o estado 'user' com o usuário logado ou null
      console.log('Estado de autenticação mudou:', firebaseUser ? firebaseUser.email : 'Nenhum usuário');
    });

    // Limpa o listener quando o componente é desmontado
    return () => unsubscribe();
  }, []);

  return (
    <>
      {user ? (
        <AppNavigator />
      ) :
        (
          <AuthNavigator />
        )
      }
    </>

  )
}





