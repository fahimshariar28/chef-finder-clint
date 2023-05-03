import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-8 px-5 divide-y mt-20">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-white">
            Cheif Finder
          </p>
          <p>
            Our is a global employment website that connects job seekers with
            employers worldwide, offering a range of job search and recruitment
            solutions. With a focus on innovation and providing value to both
            job seekers and employers, CareerBuilder has established itself as a
            leading platform in the job search industry.
          </p>
          <img
            className="mt-5"
            src="https://i.ibb.co/XxXGpK1/footer-Logo.png"
            alt=""
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-wrap justify-around">
          <div>
            <h2 className="font-semibold text-white hover:text-indigo-300 px-4 py-2">
              Company
            </h2>
            <ul className="text-center space-y-2">
              <li>About Us</li>
              <li>Work</li>
              <li>Latest News</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-white hover:text-indigo-300 px-4 py-2">
              Product
            </h2>
            <ul className="text-center space-y-2">
              <li>Prototype</li>
              <li>Plans & Pricing</li>
              <li>Customers</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-white hover:text-indigo-300 px-4 py-2">
              Support
            </h2>
            <ul className="text-center space-y-2">
              <li>Help Desk</li>
              <li>Sales</li>
              <li>Become a Partner</li>
              <li>Developers</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-white hover:text-indigo-300 px-4 py-2">
              Contact
            </h2>
            <ul className="text-center space-y-2">
              <li>524 Broadway , NYC</li>
              <li>+1 777 - 978 - 5570</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap justify-between items-center mt-10 ">
        <p className="mt-5 text-sm">
          &copy; 2023 Cheif Finder. All rights reserved.
        </p>
        <p className="mt-5  text-sm">Powered by Fahim Shariar</p>
      </div>
    </footer>
  );
};

export default Footer;
