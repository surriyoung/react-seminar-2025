import './App.css'
import { useState } from 'react'
import Profile from './Profile'
import TempInput from './TempInput'
import UnitSelector from './UnitSelector'

// function App() {
  // const users = ['Alice', 'Bob', 'Clark']
  // const [user, setUser] = useState(users[0])
  // const [status, setstatus] = useState(true)

  // console.log('부모 컴포넌트 ::: App')

  // return (
  //   <>
  //     <h2>User Profile</h2>
  //     <button onClick={() => setstatus(!status)}>
  //       Toggle Status
  //     </button>
  //     <button onClick={
  //       () => setUser(
  //         users[(users.indexOf(user) + 1) % users.length]
  //       )}>
  //       Switch User
  //     </button>
  //     <p>
  //       <b>{user}</b> | {status ? 'Active' : 'Inactive'}
  //     </p>

  //     <Profile name={user} />
  //   </>
  // )

  // state 끌어올리기
  // const [temperature, setTemperature] = useState("")
  // const [unit, setUnit] = useState("Celsius")

  // const convertedTemp = unit === "Celsius"
  //   ? (temperature * 9/5 + 32).toFixed(1)
  //   : ((temperature - 32) * 5/9).toFixed(1)

  // return (
  //   <div>
  //     <h2>Temperature Converter</h2>
  //     <p>
  //       Converted: {temperature ? convertedTemp : "--"} 
  //       {unit === "Celsius" ? "°F" : "°C"}
  //     </p>
  //     <TempInput
  //       value={temperature}
  //       unit={unit}
  //       onChange={setTemperature}
  //     />
  //     <UnitSelector
  //       unit={unit}
  //       onUnitChange={setUnit}
  //     />
  //   </div>
  // )
// }
// export default App;


// 예제3 Form
// function Form() {
//   const [username, setUsername] = useState('')
//   const [isSubscribed, setSubscribed]
//    = useState(false)
//   const [role, setRole] = useState('user')
//   const roles = ['user', 'admin', 'guest']

//   return (
//     <form>
// 	    <p>
//         Name: {username}
//         {isSubscribed && ' (Subscribed)'}
//       </p>
//       <p>Role: {role}</p>
//       <input
//         type="text" placeholder="Username"
//         value={username}
//         onChange={
//           (e) => setUsername(e.target.value)
//         }/>
//       <input
//         type="checkbox"
//         checked={isSubscribed}
//         onChange={
//           (e) => setSubscribed(e.target.checked)
//           }/>
//       <label>Subscribe</label>

//       <select value={role} onChange={
//         (e) => setRole(e.target.value)}>
//         {roles.map((r) => (
//           <option key={r} value={r}>
//             {r}
//           </option>
//         ))}
//       </select>
//     </form>
//   )
// }

// 세 개의 state->1개의 formData
function Form() {
  const [formData, setFormData] = useState({
    username: '',
    isSubscribed: false,
    role: 'user'
  })
  const roles = ['user', 'admin', 'guest']

  const handleChange = (e) => {
    const { name, value, type, checked }
     = e.target
    setFormData({
      ...formData,
      [name]:  type === 'checkbox' ? checked : value
    })
  }

  return (
    <form>
      <p>
        Name: {formData.username}
        {formData.isSubscribed && ' (Subscribed)'}
      </p>
      <p>Role: {formData.role}</p>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          name="isSubscribed"
          checked={formData.isSubscribed}
          onChange={handleChange}
        />
        Subscribe
      </label>

      <select 
        name="role" value={formData.role}
        onChange={handleChange}>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </form>
  )
}

export default Form