import { useState } from 'react'
const Form = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phoneno: ''

  })
  const [errors, setErrors] = useState({});
  const validation = () => {
    let tempErrors = {};

    if (!formData.firstname) {
      tempErrors.firstname = "First name is required";
    }
    if (!formData.lastname) {
      tempErrors.lastname = "Last name is required";
    }
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.phoneno) {
      tempErrors.phoneno = "Phone number is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;

  }
  const Change = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const Submit = (e) => {
    e.preventDefault();
    if (validation()) {
      console.log("Form submitted successfully:", formData);
    } else {
      console.log("Form has errors:", errors);
    }
  }
  return (
    <div className='border border-white w-full p-10 rounded-lg'>
      <form className="w-full max-w-2xl mx-auto" onSubmit={Submit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative py-3 text-white z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={formData.firstname}
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required=""
              onChange={Change}
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              First name
            </label>
            <div className='text-left'>
              {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname}</span>}
            </div>
          </div>
          <div className="relative py-3 text-white z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={formData.lastname}
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required=""
              onChange={Change}
            />
            <label
              htmlFor="floating_last_name"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Last name
            </label>
            <div className='text-left'>
              {errors.lastname && <span className="text-red-500 text-sm">{errors.lastname}</span>}
            </div>
          </div>
        </div>
        <div className="relative py-3 text-white z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required=""
            onChange={Change}
          />
          <label
            htmlFor="floating_email"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Email address
          </label>
          <div className='text-left'>
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
        </div>
        <div className="relative py-3 text-white z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required=""
            onChange={Change}
          />
          <label
            htmlFor="floating_password"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Password
          </label>
          <div className='text-left'>
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </div>
        </div>

        <div className="grid md:grid-cols-1 ">
          <div className="relative py-3 text-white z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phoneno"
              id="phoneno"
              value={formData.phoneno}
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required=""
              onChange={Change}
            />
            <label
              htmlFor="floating_phone"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Phone number
            </label>
            <div className='text-left'>
              {errors.phoneno && <span className="text-red-500 text-sm">{errors.phoneno}</span>}
            </div>
          </div>

        </div>
        <button
          type="submit"
          className="text-white bg-blue-600  box-border border border-transparent hover:bg-brand-strong focus:ring-1 focus:ring-blue-950 cursor-pointer shadow-xs font-medium leading-5 rounded-base text-sm py-3 px-7 focus:outline-none"
        >
          Submit
        </button>
      </form>


    </div>
  )
}

export default Form
