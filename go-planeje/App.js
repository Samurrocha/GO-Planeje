import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import { useState, useEffect } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <>
      {user ? (
        <AppNavigator />
      ) :
        (
          <AuthNavigator/>
        )
      }
    </>

  )
}