import { useState } from "react";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  phone: "",
  company: ""
};

const Form = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = form) => {
    const temp = { ...errors };

    if ("email" in fieldValues)
      temp.email = fieldValues.email
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email)
          ? ""
          : "Enter a valid email address"
        : "Email is required";

    if ("password" in fieldValues)
      temp.password = fieldValues.password
        ? fieldValues.password.length >= 6
          ? ""
          : "Password must be at least 6 characters"
        : "Password is required";

    if ("confirmPassword" in fieldValues)
      temp.confirmPassword = fieldValues.confirmPassword
        ? fieldValues.confirmPassword === form.password
          ? ""
          : "Passwords do not match"
        : "Please confirm your password";

    if ("firstName" in fieldValues)
      temp.firstName = fieldValues.firstName ? "" : "First name is required";

    if ("lastName" in fieldValues)
      temp.lastName = fieldValues.lastName ? "" : "Last name is required";

    if ("phone" in fieldValues)
      temp.phone = fieldValues.phone
        ? /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(fieldValues.phone)
          ? ""
          : "Phone number must be in format 000-000-0000"
        : "Phone number is required";

    if ("company" in fieldValues)
      temp.company = fieldValues.company ? "" : "Company is required";

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    validate({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", form);
      setForm(initialState);
      setErrors({});
    }
  };

  const isFormValid = () => {
    return (
      form.email &&
      form.password &&
      form.confirmPassword &&
      form.password === form.confirmPassword &&
      form.firstName &&
      form.lastName &&
      /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(form.phone) &&
      form.company &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
      form.password.length >= 6
    );
  };

  return (
    <div className="border p-8 border-white rounded-lg">
      <form className="max-w-md mx-auto border p-8 border-white rounded-lg text-white " onSubmit={handleSubmit} noValidate>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 ${errors.email ? 'border-red-500' : 'border-default-medium'} appearance-none focus:outline-none focus:ring-0 focus:border-brand peer`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Email address
          </label>
          {errors.email && <p id="email-error" className="text-sm text-red-600 mt-1">{errors.email}</p>}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby={errors.password ? "password-error" : undefined}
            className={`block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 ${errors.password ? 'border-red-500' : 'border-default-medium'} appearance-none focus:outline-none focus:ring-0 focus:border-brand peer`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Password
          </label>
          {errors.password && <p id="password-error" className="text-sm text-red-600 mt-1">{errors.password}</p>}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="confirmPassword"
            id="floating_repeat_password"
            value={form.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={errors.confirmPassword ? "true" : "false"}
            aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
            className={`block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 ${errors.confirmPassword ? 'border-red-500' : 'border-default-medium'} appearance-none focus:outline-none focus:ring-0 focus:border-brand peer`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Confirm password
          </label>
          {errors.confirmPassword && <p id="confirmPassword-error" className="text-sm text-red-600 mt-1">{errors.confirmPassword}</p>}
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              id="floating_first_name"
              value={form.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errors.firstName ? "true" : "false"}
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
              className={`block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 ${errors.firstName ? 'border-red-500' : 'border-default-medium'} appearance-none focus:outline-none focus:ring-0 focus:border-brand peer`}
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              First name
            </label>
            {errors.firstName && <p id="firstName-error" className="text-sm text-red-600 mt-1">{errors.firstName}</p>}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastName"
              id="floating_last_name"
              value={form.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errors.lastName ? "true" : "false"}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              className={`block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 ${errors.lastName ? 'border-red-500' : 'border-default-medium'} appearance-none focus:outline-none focus:ring-0 focus:border-brand peer`}
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Last name
            </label>
            {errors.lastName && <p id="lastName-error" className="text-sm text-red-600 mt-1">{errors.lastName}</p>}
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phone"
              id="floating_phone"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 ${errors.phone ? 'border-red-500' : 'border-default-medium'} appearance-none focus:outline-none focus:ring-0 focus:border-brand peer`}
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Phone number
            </label>
            {errors.phone && <p id="phone-error" className="text-sm text-red-600 mt-1">{errors.phone}</p>}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="company"
              id="floating_company"
              value={form.company}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errors.company ? "true" : "false"}
              aria-describedby={errors.company ? "company-error" : undefined}
              className={`block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 ${errors.company ? 'border-red-500' : 'border-default-medium'} appearance-none focus:outline-none focus:ring-0 focus:border-brand peer`}
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_company"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Company
            </label>
            {errors.company && <p id="company-error" className="text-sm text-red-600 mt-1">{errors.company}</p>}
          </div>
        </div>
        <button
          type="submit"
          disabled={!isFormValid()}
          className={`text-white  bg-red-800 w-25 rounded-xl text-lg font-semibold border border-transparent ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-strong'} focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none  `}
        >
          Submit
        </button>
      </form>


    </div>
  )
}

export default Form
