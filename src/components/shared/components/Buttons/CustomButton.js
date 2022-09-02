import styled from 'styled-components'
const CustomButton = ({text, hide =false, onClick}) => {
  return (
    <Button onClick={onClick} hide={hide} disabled={hide}>{text}</Button>
  )
}

export default CustomButton;

const Button = styled.button`
  border: 1px solid #00c244;
  margin-right: 10px;
  background-color: ${ props => props.hide? 'grey' :  '#00c244'};
  color: white;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 3px;
  line-height: 40px;
  font-size: 28px;
  font-weight: bolder;
  vertical-align: middle;
  overflow: hidden;
  cursor: ${ props => props.hide? 'initial' :  'pointer'};
  margin: auto;
  width: 100%;
`;