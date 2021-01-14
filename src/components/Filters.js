
function Filters({ onChangeType, onFindPetsClick }) {
  function handleChange(event) {
    onChangeType(event.target.value);
  }
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select onChange={handleChange} name="type" id="type">
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button onClick={onFindPetsClick} className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
