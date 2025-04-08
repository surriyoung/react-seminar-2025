import { useState } from 'react'

function Profile({ name }) {
  const [status, setStatus] = useState('Available')

  console.log('자식 컴포넌트 ::: Profile')

  return (
    <div className="user-profile">
      <h3>Name: {name}</h3>
      <p>Status: {status}</p>
      <button onClick={() => setStatus('Away')}>
        Set Away
      </button>
      <button onClick={() => setStatus('Available')}>
        Set Available
      </button>
    </div>
  );
}

export default Profile;