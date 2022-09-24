import "./TextInput.style.css";
interface props {
  label: string;
  type: string;
}

export const TextInput = ({ label, type }: props) => {
  return (
    <div className='group'>
      <label className='form-input-label'>{label}</label>
      <input className='text-input' type={type} />
    </div>
  );
};
