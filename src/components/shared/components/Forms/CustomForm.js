import styled from "styled-components";
import CustomButton from "../Buttons/CustomButton";

const CustomForm = ({ handleSubmit, user, setUser, titleButton, disabled }) => {
  return (
    <CustomFormWrapper>
      <h2>Your Contact Information</h2>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        id={"name"}
        required
        placeholder="Enter your name"
        disabled={disabled}
      />

      <input
        type="phone"
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
        id={"phone"}
        required
        placeholder="Enter your phone number"
        disabled={disabled}
      />

      <input
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        id={"email"}
        placeholder="Enter your email"
        required
        disabled={disabled}
      />
      <br />
      <CustomButton text={titleButton} hide={!user.email || !user.name || !user.phone} onClick={handleSubmit} />
    </CustomFormWrapper>
  );
};

export default CustomForm;

export const CustomFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
  input {
    border: none;
    border-bottom: 2px solid #ccc;
    margin-bottom: 1rem;
    font-family: sans-serif;
    outline: none;
    font-size: 1rem;
    caret-color: #00c244;
  }
`;
