import { clients } from "@/constants";
import styles from "@/style";
import airbnb from "@/assets/claro.png";

const Clients = () => (
  <div className="flex overflow-hidden  group ">
    {/*  <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
    </div> */}
    <div
      className="flex space-x-8 animate-loop-scroll group-hover:paused"
      aria-hidden="true"
    >
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
      <img src={airbnb} alt="" />
    </div>
  </div>
);

export default Clients;
