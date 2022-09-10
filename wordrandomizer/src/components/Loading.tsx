import { Skeleton } from '@mui/material'

export const Loading = ({ children }) => {
  return (
    <Skeleton variant="rounded" sx={{ bg: 'white' }}>
      {children}
    </Skeleton>
  )
}
