import "./CustomButton.style.css";

export const CustomButton = ({ textButton, onSubmit }) => {
  return (
    <button className='button' onSubmit={onSubmit}>
      {textButton}
    </button>
  );
};
