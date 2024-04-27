'use client'
import { useEffect } from 'react'
import { useFetchUsersQuery } from '@/libs/api/users'
import UserCard from '../_components/UserCard'
import { Grid } from '@mui/material'

export default function Dashboard() {
  const {
    data: usersData,
    isLoading: fetchUsersLoading,
    isError: fetchUsersError,
    refetch: fetchUsers
  } = useFetchUsersQuery()

  useEffect(() => {
    ;(async () => {
      await fetchUsers()
    })()
  }, [])

  return (
    <div>
      {fetchUsersLoading ? (
        <div>Loading users...</div>
      ) : fetchUsersError ? (
        <div>Error fetching users</div>
      ) : (
        <div
          style={{
            width: '100%'
          }}
        >
          {usersData?.map(user => (
            <UserCard user={user} key={user.ids} />
          ))}
        </div>
      )}
    </div>
  )
}
