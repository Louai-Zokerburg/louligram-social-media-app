import React, {createContext, useContext, useState, useEffect} from 'react'

const INITIAL_USER = {
  id: '',
  name: '',
  username: '',
  email: '',
  imageUrl: '',
  bio: '',
}

const INITIAL_STATE = {
  user: INITIAL_USER,
}

const AuthContext = () => {
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext