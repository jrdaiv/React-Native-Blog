import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

interface User {
  username: string;
  email: string;
  password: string;
}

const Home = () => {

  const [user, setUser] = useState<User[]>([])

  return (
    <SafeAreaView>


      <Text>Home</Text>
      <View>
        {user.map((user) => <Text>Welcome, {user.username} !</Text>)}
      </View>

      
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})