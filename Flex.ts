import styled from 'styled-components';

const Flex = styled.div<{
  spaceBetween?: boolean;
  spaceAround?: boolean;
  padding?: string;
  center?: boolean;
  column?: boolean;
}>`
  display: flex;
  justify-content: ${(props) => (props.spaceBetween ? 'space-between' : '')};
  justify-content: ${(props) => (props.spaceAround ? 'space-around' : '')};
  padding: ${(props) => props.padding || 0};
  justify-content: ${(props) => (props.center ? 'center' : '')};
  align-items: ${(props) => (props.center ? 'center' : '')};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`;

export default Flex;
