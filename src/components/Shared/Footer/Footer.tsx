import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer p-28 bg-slate-500">
      <nav>
        <div>
          <h1 className="text-3xl font-semibold">Abdullah Al Omar</h1>
          <p className="text-lg mt-5">
            All right reserved © {new Date().getFullYear()}
          </p>
        </div>
      </nav>
      <nav>
        <form>
          <h1 className="text-3xl font-semibold mb-5">Newsletter</h1>
          <fieldset className="form-control ">
            <div className="join">
              <input
                type="text"
                placeholder="Submit your email"
                className="input input-primary join-item max-w-80"
              />
              <button className="btn btn-primary join-item">
                <MdEmail color="#83B4FF" fontSize={20} />
              </button>
            </div>
          </fieldset>
        </form>
      </nav>
      <nav>
        <h1 className="text-3xl font-semibold">Follow Me</h1>
        <div className="grid grid-flow-col gap-4">
          <Link href="#">
            <FaFacebookSquare
              className="hover:origin-center hover:rotate-45 duration-500"
              fontSize={38}
              color="#1877F2"
            />{" "}
          </Link>
          <Link href="#">
            <FaSquareTwitter
              className="hover:origin-center hover:rotate-45 duration-500"
              fontSize={38}
              color="#1DA1F2"
            />{" "}
          </Link>
          <Link href="#">
            <FaLinkedin
              className="hover:origin-center hover:rotate-45 duration-500"
              fontSize={38}
              color="#0077B5"
            />{" "}
          </Link>
          <Link href="#">
            <FaInstagramSquare
              className="hover:origin-center hover:rotate-45 duration-500"
              fontSize={38}
              color="#D62D79"
            />{" "}
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
