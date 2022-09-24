import { TextInput } from "../../components/TextInpt.component";
import "./CreateEvent.style.css";

const CreateEventPage = () => {
  return (
    <form>
      <TextInput label='Event name' type='name' />
      <TextInput label=' Host name' type='name' />
      <TextInput label='tart and End time/date' type='date' />
      <TextInput label='Location' />
      <TextInput label='Select photo' type='file' />
      <button className='button'>Submit</button>
    </form>
  );
};

export default CreateEventPage;
