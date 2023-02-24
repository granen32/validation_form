import styled from 'styled-components'

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div.wrap>{children}</div.wrap>
}

const div = {
  wrap: styled.div`
    padding-top: 2rem;
  `,
}
