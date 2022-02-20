import { connect } from 'react-redux';
import { updateUserInfo, clearForm } from './store/actions';

function App(props) {

  const onInputChange = (value, type) => {
    props.updateUserInfo(value, type);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("FORM SUMITTED >>", props);
    alert(`Name: ${props.name}, Mob No.: ${props.mobileNumber}, Email: ${props.email}, Gender: ${props.gender}`)
  }
  const onClear = (e) => {
    e.preventDefault();
    props.onClear();
  }

  return (
    <div className='form-container'>
      <form>
        <div className='form-group'>
          <label>Name: </label>
          <input type="text" value={props.name} onChange={(e) => onInputChange(e.target.value, 'name')} />
        </div>
        <div className='form-group'>
          <label>Gender: </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={props.gender === "male"}
              onChange={(e) => onInputChange(e.target.value, 'gender')}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={props.gender === "female"}
              onChange={(e) => onInputChange(e.target.value, 'gender')}
            />
            Female
          </label>
        </div>
        <div className='form-group'>
          <label>Mob. Number: </label>
          <input type="number" value={props.mobileNumber} onChange={(e) => onInputChange(e.target.value, 'mobileNumber')}/>
        </div>
        <div className='form-group'>
          <label>Email: </label>
          <input type="text" value={props.email} onChange={(e) => onInputChange(e.target.value, 'email')}/>
        </div>
        <div className='btn-container'>
          <button onClick={onSubmit}>Submit</button>
          <button onClick={onClear}>Clear</button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  const { name, mobileNumber, email, gender } = state;
  return {
    name,
    mobileNumber,
    email,
    gender
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateUserInfo: (value, type) => dispatch(updateUserInfo(value, type)),
    onClear: () => dispatch(clearForm())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

