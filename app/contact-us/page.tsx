const Contact = () => {
  return (
    <div
      className="overflow-hidden px-4 mx-auto leading-7 text-zinc-600 sm:px-5 md:px-8"
      style={{ minWidth: 320, maxWidth: 920 }}
    >
      <div className="text-zinc-600">
        <article className="block">
          <div className="relative mx-0 mt-0 mb-10" itemProp="articleBody">
            <h2
              id="get-in-touch"
              className="px-0 pt-5 pb-0 mx-0 mt-0 mb-5 font-sans text-3xl normal-case text-zinc-800 md:text-3xl"
              style={{ fontWeight: "bold", lineHeight: "1.2" }}
            >
              Get in touch
            </h2>
            <p className="mx-0 mt-0 mb-5">
              Do you need some extra support? Do you still have questions?
              Perhaps you’d like to tell us how you use Mind Map Pro, or want to
              provide some feedback. Whatever the context, your comments are
              always welcome.
            </p>
            <p className="mx-0 mt-0 mb-5">
              Share your thoughts with us using the form below.
            </p>
            <div className="my-4 mx-0 max-w-full" id="gform_wrapper_3">
              <form
                method="post"
                encType="multipart/form-data"
                id="gform_3"
                action="/contact/"
                className="my-0 mx-auto max-w-full text-left"
              >
                <div className="mb-4 w-full">
                  <h3
                    className="pt-5 mx-0 mt-2 mb-1 font-sans text-xl font-bold normal-case text-zinc-800"
                    id="contact-us"
                    style={{
                      lineHeight: "1.3",
                      backgroundPosition: "0px center",
                      letterSpacing: "normal",
                    }}
                  >
                    Contact us
                  </h3>
                  <span className="block mb-4 w-64 font-normal" />
                </div>
                <div className="sm:w-full">
                  <ul
                    id="gform_fields_3"
                    className="block overflow-visible p-0 m-0 list-none indent-0"
                    style={{ listStyle: "outside none none" }}
                  >
                    <li
                      id="field_3_1"
                      className="clear-both overflow-visible p-0 mx-0 mt-4 mb-0 content-none sm:pr-4"
                      style={{ listStyle: "none" }}
                    >
                      <label
                        className="inline-block clear-both font-bold cursor-default"
                        htmlFor="input_3_1"
                        style={{
                          lineHeight: "1.3",
                          listStyle: "outside none none",
                        }}
                      >
                        Name
                        <span
                          className="ml-1 leading-6 text-red-500"
                          style={{ listStyle: "outside none none" }}
                        >
                          *
                        </span>
                      </label>
                      <div
                        className="mt-2"
                        style={{ listStyle: "outside none none" }}
                      >
                        <input
                          name="input_1"
                          id="input_3_1"
                          type="text"
                          defaultValue=""
                          className="overflow-visible p-1 m-0 w-full max-w-full align-middle bg-white rounded border border-solid cursor-text border-neutral-200 sm:w-64"
                          aria-required="true"
                          aria-invalid="false"
                          style={{
                            lineHeight: "1.15",
                            minHeight: "2rem",
                            fontSize: "128%",
                            outline: 0,
                            letterSpacing: "normal",
                            listStyle: "outside none none",
                          }}
                        />
                      </div>
                    </li>
                    <li
                      id="field_3_2"
                      className="clear-both overflow-visible p-0 mx-0 mt-4 mb-0 content-none sm:pr-4"
                      style={{ listStyle: "none" }}
                    >
                      <label
                        className="inline-block clear-both font-bold cursor-default"
                        htmlFor="input_3_2"
                        style={{
                          lineHeight: "1.3",
                          listStyle: "outside none none",
                        }}
                      >
                        Email
                        <span
                          className="ml-1 leading-6 text-red-500"
                          style={{ listStyle: "outside none none" }}
                        >
                          *
                        </span>
                      </label>
                      <div
                        className="mt-2"
                        style={{ listStyle: "outside none none" }}
                      >
                        <input
                          name="input_2"
                          id="input_3_2"
                          type="text"
                          defaultValue=""
                          className="overflow-visible p-1 m-0 w-full max-w-full align-middle bg-white rounded border border-solid cursor-text border-neutral-200 sm:w-64"
                          aria-required="true"
                          aria-invalid="false"
                          style={{
                            lineHeight: "1.15",
                            minHeight: "2rem",
                            fontSize: "128%",
                            outline: 0,
                            letterSpacing: "normal",
                            listStyle: "outside none none",
                          }}
                        />
                      </div>
                    </li>
                    <li
                      id="field_3_3"
                      className="clear-both overflow-visible p-0 mx-0 mt-4 mb-0 content-none sm:pr-4"
                      style={{ listStyle: "none" }}
                    >
                      <label
                        className="inline-block clear-both font-bold cursor-default"
                        htmlFor="input_3_3"
                        style={{
                          lineHeight: "1.3",
                          listStyle: "outside none none",
                        }}
                      >
                        Share your questions and comments
                        <span
                          className="ml-1 leading-6 text-red-500"
                          style={{ listStyle: "outside none none" }}
                        >
                          *
                        </span>
                      </label>
                      <div
                        className="mt-2"
                        style={{ listStyle: "outside none none" }}
                      >
                        <textarea
                          name="input_3"
                          id="input_3_3"
                          className="overflow-auto py-1 px-2 m-0 w-full h-32 leading-normal align-middle whitespace-pre-wrap break-words bg-white rounded border border-solid cursor-text resize-none border-neutral-200 sm:h-40 sm:w-full"
                          aria-required="true"
                          aria-invalid="false"
                          rows={10}
                          cols={50}
                          style={{
                            fontSize: "128%",
                            outline: 0,
                            maxWidth: 600,
                            minHeight: 40,
                            maxHeight: 180,
                            letterSpacing: "normal",
                            listStyle: "outside none none",
                          }}
                          defaultValue={""}
                        />
                      </div>
                    </li>
                    <li
                      id="field_3_6"
                      className="clear-both overflow-visible p-0 mx-0 mt-4 mb-0 content-none sm:pr-4"
                      style={{ listStyle: "none" }}
                    >
                      <label
                        className="inline-block clear-both font-bold cursor-default"
                        htmlFor="input_3_6"
                        style={{
                          lineHeight: "1.3",
                          listStyle: "outside none none",
                        }}
                      >
                        CAPTCHA
                      </label>
                      <div
                        id="input_3_6"
                        className="mt-2"
                        data-sitekey="6LcOGI0UAAAAAJ6XgAbZXDGO72RcmMNK5L1ji72U"
                        data-theme="light"
                        data-tabindex={0}
                        data-badge=""
                        style={{ listStyle: "outside none none" }}
                      >
                        <div
                          style={{
                            width: 304,
                            height: 78,
                            listStyle: "outside none none",
                          }}
                          className="w-64 h-20"
                        >
                          <div
                            className=""
                            style={{ listStyle: "outside none none" }}
                          >
                            <iframe
                              title="reCAPTCHA"
                              src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcOGI0UAAAAAJ6XgAbZXDGO72RcmMNK5L1ji72U&co=aHR0cHM6Ly9oZWxwLm1pbmRtYXBwcm8uY29tOjQ0Mw..&hl=en&v=Xh5Zjh8Od10-SgxpI_tcSnHR&theme=light&size=normal&cb=g9y8rklfhjqs"
                              width={304}
                              height={78}
                              role="presentation"
                              name="a-rxuh7xxg381q"
                              frameBorder={0}
                              scrolling="no"
                              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                              className="max-w-full"
                              style={{ listStyle: "outside none none" }}
                            />
                          </div>
                          <textarea
                            id="g-recaptcha-response-1"
                            name="g-recaptcha-response"
                            className="hidden overflow-auto p-0 my-2 mx-6 w-64 h-10 leading-normal align-middle whitespace-pre-wrap break-words bg-white rounded border border-solid cursor-text resize-none border-stone-300"
                            style={{
                              width: 250,
                              height: 40,
                              border: "1px solid rgb(193, 193, 193)",
                              margin: "10px 25px",
                              padding: 0,
                              resize: "none",
                              display: "none",
                              fontSize: "128%",
                              outline: 0,
                              maxWidth: 600,
                              minHeight: 40,
                              maxHeight: 180,
                              letterSpacing: "normal",
                              listStyle: "outside none none",
                            }}
                            defaultValue={""}
                          />
                        </div>
                        <iframe
                          style={{
                            display: "none",
                            listStyle: "outside none none",
                          }}
                          className="hidden max-w-full"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="clear-both px-0 pt-4 pb-2 mx-0 mt-4 mb-0 w-full">
                  <input
                    type="submit"
                    id="gform_submit_button_3"
                    className="inline-block overflow-visible py-3 px-6 mx-0 mt-0 mb-4 w-full font-sans text-base text-center text-white align-middle whitespace-pre border-0 cursor-pointer bg-stone-300 hover:bg-stone-300 sm:my-0 sm:mr-4 sm:ml-0 sm:inline-block sm:w-auto sm:text-base"
                    defaultValue="Submit"
                    tabIndex={1}
                    onclick='if(window["gf_submitting_3"]){return false;}  window["gf_submitting_3"]=true;  '
                    onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_3"]){return false;} window["gf_submitting_3"]=true;  jQuery("#gform_3").trigger("submit",[true]); }'
                    style={{
                      lineHeight: "1.15",
                      minHeight: "2rem",
                      transition: "all 0.3s ease-out 0s",
                      borderRadius: 99,
                      fontWeight: "bold",
                      textShadow: "none",
                      outline: 0,
                      textDecoration: "none",
                    }}
                  />
                  <input
                    type="hidden"
                    className="hidden overflow-hidden p-1 m-0 max-h-px text-black cursor-default"
                    name="is_submit_3"
                    defaultValue={1}
                    style={{
                      lineHeight: "1.15",
                      minHeight: "2rem",
                      fontSize: "128%",
                      letterSpacing: "normal",
                    }}
                  />
                  <input
                    type="hidden"
                    className="hidden overflow-hidden p-1 m-0 max-h-px text-black cursor-default"
                    name="gform_submit"
                    defaultValue={3}
                    style={{
                      lineHeight: "1.15",
                      minHeight: "2rem",
                      fontSize: "128%",
                      letterSpacing: "normal",
                    }}
                  />
                  <input
                    type="hidden"
                    className="hidden overflow-hidden p-1 m-0 max-h-px text-black cursor-default"
                    name="gform_unique_id"
                    defaultValue=""
                    style={{
                      lineHeight: "1.15",
                      minHeight: "2rem",
                      fontSize: "128%",
                      letterSpacing: "normal",
                    }}
                  />
                  <input
                    type="hidden"
                    className="hidden overflow-hidden p-1 m-0 max-h-px text-black cursor-default"
                    name="state_3"
                    defaultValue="WyJbXSIsImQzODRkOTI0OTg5NjBkYWNhOTZlMjhiNDczYjE3ZTJlIl0="
                    style={{
                      lineHeight: "1.15",
                      minHeight: "2rem",
                      fontSize: "128%",
                      letterSpacing: "normal",
                    }}
                  />
                  <input
                    type="hidden"
                    className="hidden overflow-hidden p-1 m-0 max-h-px text-black cursor-default"
                    name="gform_target_page_number_3"
                    id="gform_target_page_number_3"
                    defaultValue={0}
                    style={{
                      lineHeight: "1.15",
                      minHeight: "2rem",
                      fontSize: "128%",
                      letterSpacing: "normal",
                    }}
                  />
                  <input
                    type="hidden"
                    className="hidden overflow-hidden p-1 m-0 max-h-px text-black cursor-default"
                    name="gform_source_page_number_3"
                    id="gform_source_page_number_3"
                    defaultValue={1}
                    style={{
                      lineHeight: "1.15",
                      minHeight: "2rem",
                      fontSize: "128%",
                      letterSpacing: "normal",
                    }}
                  />
                  <input
                    type="hidden"
                    name="gform_field_values"
                    defaultValue=""
                    className="hidden overflow-hidden p-1 m-0 max-h-px text-black cursor-default"
                    style={{
                      lineHeight: "1.15",
                      minHeight: "2rem",
                      fontSize: "128%",
                      letterSpacing: "normal",
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Contact;
