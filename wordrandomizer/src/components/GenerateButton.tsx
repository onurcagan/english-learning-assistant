import { Button } from '@mui/material'

export const GenerateButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'lightgray',
        width: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Button
        variant="contained"
        size="medium"
        onClick={onClick}
        sx={{
          color: 'black',
          backgroundColor: 'lightgray',
          fontFamily: 'UniSansHeavy',
          ':hover': {
            bgcolor: 'gray',
          },
        }}
      >
        Generate
      </Button>
    </div>
  )
}
