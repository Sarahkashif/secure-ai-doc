import { Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { ProtectedRoute, PublicOnlyRoute } from '@/components/guards/guards'
import Landing from '@/pages/public/Landing'
import Login from '@/pages/public/Login'
import Signup from '@/pages/public/Signup'
import ForgotPassword from '@/pages/public/ForgotPassword'
import ResetPassword from '@/pages/public/ResetPassword'
import NotFound from '@/pages/public/NotFound'
import Dashboard from '@/pages/app/Dashboard'
import Upload from '@/pages/app/Upload'
import Library from '@/pages/app/Library'
import Chat from '@/pages/app/Chat'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route element={<PublicOnlyRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <AppShell />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="upload" element={<Upload />} />
        <Route path="library" element={<Library />} />
        <Route path="chat" element={<Chat />} />
        {/* Phase 5 registers: notifications, profile.
            Phase 5 registers admin/* wrapped in <RoleRoute roles={['admin']}>. */}
        <Route path="*" element={<NotFound inApp />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
