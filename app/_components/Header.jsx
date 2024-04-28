'use client'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'
import { pages } from '@/utils/constants'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { IconButton, Tooltip } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
export default function Header() {
  const router = useRouter()
  const handleLogout = () => {
    sessionStorage.clear()
    router.push(pages.REGISTER)
  }
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '1rem' }}>
      <AppBar position='static'>
        <Toolbar>
          <DashboardIcon />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            ashboard
          </Typography>
          <Tooltip title='Logout'>
            <IconButton color='inherit' onClick={handleLogout}>
              <ExitToAppIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
