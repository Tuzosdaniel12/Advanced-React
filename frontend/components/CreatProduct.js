import useForm from '../lib/useForm';

const CreateProduct = () => {
  const { inputs, handleChange, clearForm, resetForms } = useForm({
    name: '',
    price: '',
    description: '',
  });

  return (
    <form action="">
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="price">
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="description">
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          value={inputs.description}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={clearForm}>
        Clear Form
      </button>

      <button type="button" onClick={resetForms}>
        Reset Form
      </button>
    </form>
  );
};
export default CreateProduct;
