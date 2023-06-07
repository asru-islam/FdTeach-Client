import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = ({ title }) => {
  return (
    <div>
      <div className="divider">Or {title}</div>
      <div className="text-center space-x-4 gap-4">
        {/* Google */}
        <button className="btn bg-red-500 text-white hover:bg-red-600">
          <FaGoogle className="h-[18px] w-[18px]" />
          Google
        </button>
        {/* Github */}
        <button className="btn bg-black text-white hover:bg-slate-800">
          <FaGithub className="h-[18px] w-[18px]" />
          GitHub
        </button>
        {/* Facebook */}
        <button className="btn bg-blue-600 text-white hover:bg-blue-700">
          <FaFacebook className="h-[18px] w-[18px]" />
          Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;