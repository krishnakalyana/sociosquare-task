'use client'
import { useEffect } from 'react'
import { useFetchUsersQuery } from '@/libs/api/users'
import UserCard from '../_components/UserCard'
import { Grid, Skeleton } from '@mui/material'

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
    <Grid container>
      {fetchUsersLoading ? (
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <Grid key={item} item xs={12} sm={6} md={4} lg={3}>
                <Skeleton variant='rounded' width={'100%'} height={190} />
              </Grid>
            )
          })}
        </Grid>
      ) : fetchUsersError ? (
        <div>Error fetching users</div>
      ) : (
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {usersData?.map(user => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
                <UserCard user={user} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
