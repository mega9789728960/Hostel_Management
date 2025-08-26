import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './professionalnotificationbar.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="notification-bar bg-gradient-to-r from-slate-800 to-slate-700 text-white py-3 overflow-hidden relative border-b border-slate-600">
        <div className="marquee whitespace-nowrap">
            <span className="inline-block px-8 text-sm font-medium">
                🏛️ Chozha Boys Hostel - Government College of Engineering, Thanjavur | 
                📋 Digital Attendance System Now Live | 
                💳 Online Mess Bill Payments Available | 
                🔧 System Maintenance: Dec 25, 2024 (2:00 AM - 4:00 AM) | 
                📞 24/7 Technical Support: +91-XXXX-XXXX | 
                🎓 Serving 250+ Students with Excellence
            </span>
        </div>
    </div>
    </>
  )
}

export default App
