import React from 'react'

const Form = () => {
  return (
    <div>
      <>
  {/*
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-900">
  <body class="h-full">
  ```
*/}
  <div className=" mt-3 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
        className="mx-auto h-15 rounded-full p-2 w-auto bg-gray-800"
      />
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white bg-gray-800 py-2 rounded-md">
        Sign in to your account
      </h2>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action="#" method="POST" className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-100"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              name="email"
              required=""
              autoComplete="email"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-100"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              type="password"
              name="password"
              required=""
              autoComplete="current-password"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full cursor-pointer justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
      <p className="mt-10 text-center text-sm/6 text-gray-400">
        Not a member?
        <a
          href="#"
          className="font-semibold text-indigo-400 hover:text-indigo-300"
        >
          Start a 14 day free trial
        </a>
      </p>
    </div>
  </div>
</>

    </div>
  )
}

export default Form
