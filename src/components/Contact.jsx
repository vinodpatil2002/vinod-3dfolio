import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // JDK4JQ6whbbI0kUAB
        // template_o38r9l1
        // service_eeqbb7w
        emailjs.send(
            "service_eeqbb7w",
            "template_o38r9l1",
            {
                from_name: form.name,
                to_name: "Vinod",
                from_email: form.email,
                to_email: "vinodnspatil@gmail.com",
                message: form.message,
            },
            "JDK4JQ6whbbI0kUAB"
        ).then(() => {
          setLoading(false);
          alert("Thank you I will get back to you soon.");
          setForm({ name: "", email: "", message: "" });
        },(error) => {
          setLoading(false);
          alert("Something went wrong, please try again.");
          console.error(error);
        }
        );
    };
    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 0.75)}
                className="flex-0.5 bg-black-100 rounded-2xl p-8"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact me.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-8 mt-12"
                >
                    <label className="flex flex-col ">
                        <span className="text-white font-medium mb-4">
                            Your Name
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Whats your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col ">
                        <span className="text-white font-medium mb-4">
                            Your Email
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Whats your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col ">
                        <span className="text-white font-medium mb-4">
                            Message
                        </span>
                        <textarea
                            rows={5}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Write your message?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <button
                        className="bg-tertiary py-3 px-8 outline-none border-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                        type="submit"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 0.75)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
