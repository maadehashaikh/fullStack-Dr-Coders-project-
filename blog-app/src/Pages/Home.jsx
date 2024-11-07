import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div class="flex items-center justify-between p-8 bg-gray-50">
        {/* <!-- Content Section (Left) --> */}
        <div class="max-w-lg space-y-6 mt-10">
          <h1 class="text-4xl font-semibold text-gray-800">
            Publish Your Passions Your Way
          </h1>
          <p class="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vulputate suscipit neque, a gravida arcu auctor sit amet. Nulla
            facilisi. Curabitur ac lorem tristique, viverra risus eu, auctor
            ligula. Suspendisse potenti. Sed sed turpis malesuada, lacinia augue
            at, finibus nisi. Etiam auctor, dui ac auctor luctus, lacus tortor
            blandit leo, et egestas orci urna sed eros.
          </p>
          <Link to="/add">
            <button class="px-6 py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
              Create Your Blog
            </button>
          </Link>
        </div>

        {/* <!-- Image Section (Right) --> */}
        <div>
          <img
            src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="A beautiful workspace"
            class="w-full max-w-sm rounded-xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
