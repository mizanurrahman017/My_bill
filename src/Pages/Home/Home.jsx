
import { Link } from "react-router";
import Banner from "../../Component/Banner";
import Categories from "../../Component/Categories";
import Recent from "../../Component/Recent";

const Home = () => {
  

  return (
    <div className="space-y-20">

      <Banner/>
      <Categories/>
      <Recent/>


      

    
     

      
      <section className="bg-green-50 p-10 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-3 text-green-700">
          Why Use My Bill?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Save time, avoid missed payments, and keep all your utility bills
          organized in one secure platform.
        </p>
      </section>

     
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">
          Secure & Reliable
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Your bill data is encrypted, safe, and accessible anytime from anywhere.
        </p>
      </section>

    </div>
  );
};

export default Home;
