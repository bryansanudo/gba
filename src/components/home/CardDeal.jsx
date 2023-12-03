import { card } from "@/assets";
import styles, { layout } from "@/style";

import test from "@/assets/test.png";
import test2 from "@/assets/test2.png";
import test3 from "@/assets/test3.png";
import test4 from "@/assets/test4.png";
import test5 from "@/assets/test5.png";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Who will help You <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} `}>
        Founding partner of EB Visa Law, which manages the corporate immigration
        law firm. He brings significant immigration law experience to the firm,
        allowing him to create unique approaches to achieve our clients'
        objectives.
      </p>
      <p className={`${styles.paragraph} `}>
        He has unique experience representing internationally recognized
        individuals seeking legal permanent residence in the United States and
        seeking the EB-1 visa intended for those with extraordinary abilities in
        science, arts, education, business or athletics.
      </p>
      <p className={`${styles.paragraph} `}>
        Joaquin knows and understands the ups and downs of this process, having
        himself emigrated to the US from Panama, and therefore knows social
        diversity and its characteristics, which gives him the ability to relate
        to and understand clients' concerns, expectations and difficulties.
        during your immigration process.
      </p>
      <button>button</button>
    </div>

    <div className={layout.sectionImg}>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full blue__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
      <img
        src={test3}
        alt="billing"
        className="h-[600px] w-[600px] object-contain"
      />
    </div>
  </section>
);

export default CardDeal;
