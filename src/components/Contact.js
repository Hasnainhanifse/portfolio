"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    setLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Email sent successfully");
        reset(); // Clear form fields after successful submission
      } else {
        setStatus(`Failed to send email: ${data.message}`);
      }
    } catch (error) {
      setStatus("An error occurred while sending the email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rs_tm_section hidden animated" id="contact">
      <div className="section_inner">
        <div className="rs_tm_contact">
          <div className="rs_tm_main_title">
            <h3>
              Get in <span className="coloring">Touch</span>
            </h3>
          </div>
          <div className="wrapper">
            <div className="left">
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-location" />
                    <span>
                      <a  className="href_location">
                        {process.env.NEXT_PUBLIC_ADDRESS}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href={"tel:"+process.env.NEXT_PUBLIC_PHONE}>{process.env.NEXT_PUBLIC_PHONE}</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span>
                      <a href={"mailto:"+process.env.NEXT_PUBLIC_EMAIL}>
                      {process.env.NEXT_PUBLIC_EMAIL}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-instagram" />
                    <span>
                      <a href={process.env.NEXT_PUBLIC_GITHUB}>
                        {process.env.NEXT_PUBLIC_NAME}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-instagram-3" />
                    <span>
                      <a href={process.env.NEXT_PUBLIC_INSTAGRAM}>
                        {process.env.NEXT_PUBLIC_INSTAGRAM_HASH}
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="fields">
                <form
                  className="contact_form"
                  id="contact_form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="first">
                    <ul>
                      <li>
                        <div className="list_inner">
                          <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            {...register('name', { required: 'Name is required' })}
                            
                          />
                        </div>
                          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                      </li>
                      <li>
                        <div className="list_inner">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            {...register('email', {
                              required: 'Email is required',
                              pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: 'Email is not valid',
                              },
                            })}
                            
                          />
                        </div>
                          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      name="message"
                      placeholder="Message"
                      {...register('message', { required: 'Message is required' })}
                      
                    />
                  </div>
                    {errors.message && <p style={{ color: 'red' }}>{errors.message.message}</p>}
                  <div className="rs_tm_button">
                  <a id="send_message" >
                    <button
                      type="submit"
                      style={{ background: "transparent", border: 0 }}
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </a>
                  </div>
                </form>
                {status && <p>{status}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
