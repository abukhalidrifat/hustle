import css from "../assets/styles/Aboutus.module.css";
import WhyDifferent from "../components/WhyDifferent";

function AboutUs() {
  return (
    <div style={{ width: "90%", margin: "auto", marginTop: "15px" }}>
      <div className={css.aboutusHead}>
        <div className={css.hustle}>
          <p>
            What is <br />
            <div>
              <p>
                Hustle
                <span style={{ top: "-8px", left: "-8px" }}></span>
                <span style={{ top: "-8px", right: "-8px" }}></span>
                <span style={{ bottom: "-8px", left: "-8px" }}></span>
                <span style={{ bottom: "-8px", right: "-8px" }}></span>
              </p>
            </div>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            perspiciatis delectus quisquam, vitae possimus quasi ipsa quia
            recusandae, nisi officia voluptatum nemo fuga pariatur accusamus
            enim expedita odio! A, excepturi.
          </p>
        </div>
        <div className={css.aboutOne}>
          <img src={require("../assets/icons/about1.png")} alt="about" />
        </div>
      </div>
      <div className={css.aboutusMiddle}>
      <div className={[css.goal]}>
        <p>
          What is our
          <br />
          <div>
            <p>
              Goal
              <span style={{ top: "-8px", left: "-8px" }}></span>
              <span style={{ top: "-8px", right: "-8px" }}></span>
              <span style={{ bottom: "-8px", left: "-8px" }}></span>
              <span style={{ bottom: "-8px", right: "-8px" }}></span>
            </p>
          </div>
        </p>
      </div>
      
        <div className={css.aboutTwo}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            possimus perspiciatis ullam amet voluptate modi, libero, temporibus,
            cum sit ad quas alias ex? Repellendus hic, odit nesciunt amet magni
            eius.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            possimus perspiciatis ullam amet voluptate modi, libero, temporibus,
            cum sit ad quas alias ex? Repellendus hic, odit nesciunt amet magni
            eius.
          </p>
          <img src={require("../assets/icons/about2.png")} alt="about" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vero
            quibusdam. Suscipit, non sapiente! Odit necessitatibus eveniet odio
            cupiditate at veniam iure. Ipsum eius labore repellat, quia eum vero
            non!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vero
            quibusdam. Suscipit, non sapiente! Odit necessitatibus eveniet odio
            cupiditate at veniam iure. Ipsum eius labore repellat, quia eum vero
            non!
          </p>
        </div>
      </div>
      <WhyDifferent/>
      <div className={css.contactus}>
          <div className={css.contactusLeft}>
            <p>Contact Us</p>
            <input type="text" className={css.contactInput} placeholder="Name" />
            <input type="text" className={css.contactInput} placeholder="Email" />
            <input type="text" className={css.contactInput} placeholder="Message" />
            <button className={css.contactBtn}>Send</button>
          </div>
          <div className={css.contactusRight}>
                <img src={require('../assets/icons/contact.png')} alt="" />
          </div>

      </div>
    </div>
  );
}

export default AboutUs;
