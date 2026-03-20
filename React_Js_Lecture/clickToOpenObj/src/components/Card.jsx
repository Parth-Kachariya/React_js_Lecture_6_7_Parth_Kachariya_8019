import React from "react";
import { Link } from "react-router-dom";
const Card = ({ userdata }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-10 m-4">
          {userdata.map((item, id) => {
            return (
              <div
                key={id}
                class="bg-neutral-primary-soft text-center block max-w-sm p-8 border rounded-2xl border-default rounded-base shadow-xs"
              >
                <a href="#">
                  <img class="rounded-base mx-auto " src={item.image} alt="" />
                </a>
                <a href="#">
                  <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                    {`${item.firstName} ${item.lastName}`}
                  </h5>
                </a>
                <p class="mb-6 text-body">{item.phone}</p>
                <Link
                  to={`/usermaindetail/${item.id}`}
                  class="inline-flex items-center text-body bg-neutral-secondary-medium rounded-xl box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                  Read more
                  <svg
                    class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
