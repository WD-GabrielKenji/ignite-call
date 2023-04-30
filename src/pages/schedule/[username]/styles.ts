import { Heading, styled, Text } from '@gk-ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 852,
  padding: '0 $4',
  margin: '$20 auto $4',
})

export const UserHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  [`> ${Heading}`]: {
    marginTop: '$2',
    lineHeight: '$base',
  },

  [`> ${Text}`]: {
    color: '$gray200',
  },
})
