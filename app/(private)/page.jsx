'use client'
import { useEffect } from 'react'
import { useFetchUsersQuery } from '@/libs/api/users'
import CardContainer from '../_components/CardContainer'

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
    <>
      {fetchUsersLoading ? (
        <div>Loading users...</div>
      ) : fetchUsersError ? (
        <div>Error fetching users</div>
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%'
          }}
        >
          {usersData.map(user => (
            <div key={user.id}>{user.name}</div>
          ))}
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            facere quos molestias, eligendi aut eveniet exercitationem, expedita
            inventore reprehenderit neque id, dicta nulla qui fugiat incidunt
            possimus sapiente totam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            facere quos molestias, eligendi aut eveniet exercitationem, expedita
            inventore reprehenderit neque id, dicta nulla qui fugiat incidunt
            possimus sapiente totam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            facere quos molestias, eligendi aut eveniet exercitationem, expedita
            inventore reprehenderit neque id, dicta nulla qui fugiat incidunt
            possimus sapiente totam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            facere quos molestias, eligendi aut eveniet exercitationem, expedita
            inventore reprehenderit neque id, dicta nulla qui fugiat incidunt
            possimus sapiente totam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            facere quos molestias, eligendi aut eveniet exercitationem, expedita
            inventore reprehenderit neque id, dicta nulla qui fugiat incidunt
            possimus sapiente totam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            facere quos molestias, eligendi aut eveniet exercitationem, expedita
            inventore reprehenderit neque id, dicta nulla qui fugiat incidunt
            possimus sapiente totam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            facere quos molestias, eligendi aut eveniet exercitationem, expedita
            inventore reprehenderit neque id, dicta nulla qui fugiat incidunt
            possimus sapiente totam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            facere quos molestias, eligendi aut eveniet exercitationem, expedita
            inventore reprehenderit neque id, dicta nulla qui fugiat incidunt
            possimus sapiente totam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            facere quos molestias, eligendi aut eveniet exercitationem, expedita
            inventore reprehenderit neque id, dicta nulla qui fugiat incidunt
            possimus sapiente totam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            facere quos molestias, eligendi aut eveniet exercitationem, expedita
            inventore reprehenderit neque id, dicta nulla qui fugiat incidunt
            possimus sapiente totam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            facere quos molestias, eligendi aut eveniet exercitationem, expedita
            inventore reprehenderit neque id, dicta nulla qui fugiat incidunt
            possimus sapiente totam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            facere quos molestias, eligendi aut eveniet exercitationem, expedita
            inventore reprehenderit neque id, dicta nulla qui fugiat incidunt
            possimus sapiente totam.
          </div>
        </div>
      )}
    </>
  )
}
