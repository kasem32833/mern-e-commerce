
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        {/* admin common Header */}
        <p>This is a common admin page</p>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout