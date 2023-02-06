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
        alignItems: 'center',
        justifyContent: 'center',
        height: '90px',
      }}
    >
      <Button
        variant="contained"
        size="medium"
        onClick={onClick}
        style={{ marginTop: 'auto', marginBottom: 'auto' }}
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
