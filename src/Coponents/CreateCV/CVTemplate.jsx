import React from 'react';
import egyptFlagImg from '../../Images/Flag_of_Egypt.png';

function CVTemplate({ data }) {
  return (
    <div className="ps-2 ">
      <div className="overflow-auto">
        <div className="row cv-part-1">
          <div className="col-4 px-3 py-5 bg_blue">
            <div className="overflow-hidden h-100 d-flex flex-column gap-4 ps-2">
              <div className="cv--avatar">
                <img src="avatar.png" alt="" className="rounded-circle" />
              </div>
              {/* personal information ------------------------------- */}
              <div>
                <h4 className="text-white fs-20">Hani Husamuddin</h4>
                <h6 className="text_gray">Frontend Developer</h6>
              </div>

              <div className="d-flex flex-column gap-2 ">
                <div className="cv-squire-info">
                  <h6 className="fs-12">Surakarta, December 2, 1994</h6>
                </div>
                <div className="cv-squire-info">
                  <h6 className="fs-12">+20 2948503402</h6>
                </div>
                <div className="cv-squire-info">
                  <h6 className="fs-12">hani.husam@gmail.com</h6>
                </div>
                <div className="cv-squire-info">
                  <h6 className="fs-12">Cairo, Egypt</h6>
                </div>

                {data?.email && <h3 className="text-light">{data.email}</h3>}
                {data?.password && (
                  <h5 className="text-light">{data.password}</h5>
                )}
                {data?.city && <h6 className="text-light">{data.city}</h6>}
                {data?.state && <h6 className="text-light">{data.state}</h6>}
              </div>
              {/* Skills --------------------------------- */}
              <div className="flex-grow-1">
                <h6 className="fw-bold mb-3">Skills</h6>
                <ul className="fs-11 ps-4">
                  <li>HIML and CSS</li>
                  <li>
                    Scripting language: Javascript, Typescript, Python, Java
                  </li>
                  <li>
                    Framework/Library: Django, React, Next, Bootstrap,
                    TailwindCSS, etc
                  </li>
                  <li>
                    Understanding UI Design; Visual Hierarchy, Design System,
                    etc
                  </li>
                  {data?.skills &&
                    data?.skills.map(
                      (e, i) => e !== '' && <li key={i}>{e}</li>
                    )}
                </ul>
              </div>
              {/* Honers & Awards --------------------------------- */}
              <div className="">
                <h6 className="fw-bold mb-3">Honers & Awards</h6>
                <div
                  className="d-flex flex-wrap gap-2"
                  style={{ minHeight: '40px' }}
                >
                  <div className="d-flex justify-content-between w-100">
                    <p className="m-0 fs-13">Best Graduated</p>
                    <p className="m-0 fs-13">2019</p>
                  </div>
                  <p className="m-0" style={{ fontSize: '10px' }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Molestias aut ipsam corporis eum ea, ullam laudantium sequi
                    nostrum? Sed consectetur nostrum sapiente reiciendis
                  </p>
                </div>
              </div>
              {/* Hobbies & Interests ------------------------------- */}
              <div>
                <h6 className="fw-bold ">Hobbies & Interests</h6>
                <ul className="fs-13 ps-4" style={{ minHeight: '25px' }}>
                  <li>video games</li>
                  <li>movies</li>
                  <li>books</li>
                  {data?.hobbiesAndInterests &&
                    data?.hobbiesAndInterests.map(
                      (e, i) => e !== '' && <li key={i}>{e}</li>
                    )}
                </ul>
              </div>
              {/* Links and Credentials --------------------------------- */}
              <div className="">
                <h6 className="fw-bold mb-3">Links and Credentials</h6>

                <div className="d-flex flex-wrap g-2">
                  {data?.links &&
                    data?.links.map(
                      (ele, i) =>
                        ele !== '' && (
                          <a
                            key={i}
                            href={ele.url}
                            className="text-light underline-none"
                            style={{ flex: '1 0 50%' }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={`fa-brands fa-linkedin fa-lg me-2`} />
                            <span className="fs-13">{ele.sitename}</span>
                          </a>
                        )
                    )}

                  {/* <a
										href="h"
										className="text-light underline-none"
										style={{ flex: "1 0 50%" }}
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className={`fa-brands fa-github fa-lg`} />
										<span className="fs-13 ms-2">github</span>
									</a> */}

                  {/* <a
										href="h"
										className="text-light underline-none"
										style={{ flex: "1 0 50%" }}
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa-solid fa-up-right-from-square" />
										<span className="fs-13 ms-2">Website</span>
									</a> */}
                </div>
              </div>
            </div>
          </div>

          {/* part 2 right side ------------------------------------------------------ */}
          <div className="col-8 bg-light p-4 ">
            <div className="cv-part-2 overflow-hidden h-100 text-dark">
              <div className="part-title mb-4 ps-2">
                <h4 className="fs-20 fw-bold text_blue cv-section-title">
                  About
                </h4>
                {/* {data.about && <p>{data.about}</p>} */}
                <p className="fs-11 text-muted text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, error iusto. Nostrum sint error quis, distinctio
                  ducimus mollitia perspiciatis neque nemo aut sit repellendus
                  ipsum ex aliquid dolorum iure corrupti.
                </p>
              </div>

              {/* Education --------------------------------------------- */}
              <div className=" mb-4 ps-2">
                <h4 className="fs-20 fw-bold text_blue cv-section-title">
                  Education
                </h4>

                <div className=" d-flex flex-column gap-3 ">
                  <div className="education-item d-flex gap-2">
                    <p className="  w-100" style={{ flex: '1 0 21%' }}>
                      2015-2019
                    </p>
                    <ul className="education-details">
                      <li className="cv-li-dot">
                        <h5 className="fs-6 ">
                          Informtics, Universitas Pembangunan Nasional "Veteran*
                          Yogyakarta
                        </h5>
                        <h6 className="fw-bold fs-12 text-black">
                          Bachelor of Computer Science, Artificial intelligence
                        </h6>
                        <p className="fs-11 text-muted text-justify">
                          I graduated in July 2019 with a GPA of 3.63. One of
                          the award recipients for the best graduate of the
                          university at the time. in my thesis, I looked into
                          how Natural Language Processing (NLP) was used in
                          Telegram Bot. For the NLP approach method, I used
                          Neural Network (Deep Learning) and Text Mining.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience --------------------------------------------- */}
              <div className=" mb-4 ps-2">
                <h4 className="fs-20 fw-bold text_blue cv-section-title">
                  Experience
                </h4>

                <div className=" d-flex flex-column gap-3 pt-2 ">
                  <div className="education-item d-flex gap-2">
                    <div>
                      <img
                        src={egyptFlagImg}
                        alt=""
                        width="50px"
                        height="auto"
                      />
                    </div>
                    <ul className="education-details">
                      <li className="cv-li-dot">
                        <h5 className="fs-6 ">upwork</h5>
                        <h6 className="fw-bold fs-12 text-black">
                          frontend developer | Nov 2019 - present
                        </h6>
                        <p className="fs-11 text-muted text-justify">
                          Upwork is an American freelancing platform where
                          enterprises and individuals connect in order to
                          conduct business. I am currently accepting remote or
                          freeiance Web Development and UI Design work from this
                          platform
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVTemplate;
