import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import Layout from './components/layout/layout'
import Dashboard from './components/features/dashboard/dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (

    <Layout>
      <Dashboard />
    </Layout>

  )
}

export default App
