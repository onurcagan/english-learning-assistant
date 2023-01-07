import { Button } from '@mui/material'

export const YesNoButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          color: 'lightgray',
          width: '200px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div style={{ marginBottom: '20px' }}>Did you know this word?</div>
        <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center' }}>
          <Button
            variant="contained"
            fullWidth
            onClick={onClick}
            sx={{
              color: 'white',
              backgroundColor: 'darkred',
              fontFamily: 'UniSansHeavy',
              ':hover': {
                bgcolor: 'red',
              },
            }}
          >
            No :(
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={onClick}
            sx={{
              color: 'white',
              backgroundColor: 'darkgreen',
              fontFamily: 'UniSansHeavy',
              ':hover': {
                bgcolor: 'green',
              },
            }}
          >
            Yes!
          </Button>
        </div>
      </div>
    </>
  )
}
