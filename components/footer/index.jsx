import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#000000]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className=" flex max-md:flex-col mb-6 md:mb-0">
            <Link href="https://havan.ca/" className="flex items-center">
              <Image
                src="/havan-logo.png"
                className="mr-3 max-w-[350px] h-auto"
                alt="Flowbite Logo"
                width={632}
                height={632}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <div className=" py-10 mx-10 gap-6">
              <h6 className="flex justify-center text-sm font-bold hover:text-[#BCB88A] text-[#8A9A58] sm:text-center">
                Office : <a className="hover:text-[#BCB88A] font-normal" href="tel:(778) 400-6715">(778) 400-6715</a>
              </h6>
              <h6 className="flex pt-6 justify-center text-sm font-bold hover:text-[#BCB88A] text-[#8A9A58] sm:text-center">
              Email :<a className="hover:text-[#BCB88A] font-normal" href="mailto:info@scottasbestos.com">info@scottasbestos.com</a>
              </h6>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              {/* <h2 className="mb-6 text-sm font-semibold  hover:text-[#BCB88A] text-[#8A9A58] uppercase">
                Home
              </h2> */}
              <ul className=" hover:text-[#BCB88A] text-[#8A9A58] font-bold">
                <li className="mb-4">
                  <Link
                    href="/"
                    className="hover:text-[#8A9A58] hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/about"
                    className="hover:text-[#8A9A58] hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-[#8A9A58] hover:underline"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              {/* <h2 className="mb-6 text-sm font-semibold  hover:text-[#BCB88A] text-[#8A9A58] uppercase dark:text-white">
                Projects
              </h2> */}
              <ul className=" hover:text-[#BCB88A] text-[#8A9A58] font-bold">
                <li className="mb-4">
                  <Link
                    href="/projects"
                    className="hover:text-[#8A9A58] hover:underline"
                  >
                    Projects
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/blog"
                    className="hover:text-[#8A9A58] hover:underline"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#8A9A58] hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <h6 className="flex justify-center text-sm font-bold hover:text-[#BCB88A] text-[#8A9A58] sm:text-center">
            <span className="text-center md:text-left md:pl-4">
              Copyright© 2023-2024 Scott's
              <br />
              All Rights Reserved
            </span>
          </h6>

          <div className="flex mt-4 max-md:justify-center  sm:justify-center sm:items-center sm:mt-0">
            <Link
              href="https://www.facebook.com/scottasbestos/"
              className="hover:text-[#BCB88A] text-[#013220] ms-5 bg-gray-200 rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-[#8A9A58]"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/trevor-scott-45278583/"
              className="hover:text-[#BCB88A] text-[#013220] ms-5 bg-gray-200 rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-[#8A9A58]"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
              </svg>

              <span className="sr-only">LinkedIn profile</span>
            </Link>

            <Link
              href="https://www.instagram.com/scottasbestos/"
              className="hover:text-[#BCB88A] text-[#013220] ms-5 bg-gray-200 rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-[#8A9A58]"
            >
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 15 15"
                fill="none"
                aria-hidden="true"
                className="w-6 h-6 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 3.5H12M4.5 0.5H10.5C12.7091 0.5 14.5 2.29086 14.5 4.5V10.5C14.5 12.7091 12.7091 14.5 10.5 14.5H4.5C2.29086 14.5 0.5 12.7091 0.5 10.5V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5ZM7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5C9.15685 4.5 10.5 5.84315 10.5 7.5C10.5 9.15685 9.15685 10.5 7.5 10.5Z"
                  stroke="#000000"
                />
              </svg>
              <span className="sr-only">Instagram profile</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
