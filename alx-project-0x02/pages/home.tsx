import Card from '@/components/common/Card'
import React from 'react'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Card title="Welcome" content="This is the welcome card." />
      <Card title="About" content="This card contains information about us." />
      <Card title="Contact" content="Reach out to us via email or phone." />
    </div>
  );
}

export default Home;