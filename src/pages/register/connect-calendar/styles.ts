import { Box, styled } from '@gk-ignite-ui/react'

export const ConnectBox = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$6',
})

export const ConnectItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$2',
  padding: '$4 $6',
  border: '1px solid $gray600',
  borderRadius: '$md',
})
