import React from "react";
import "./contacterNous.css"
const ContacterNous = () => {
  return (
    <>
      <div className="hero fullscreen">
        <div className="hero-body">
          <div style="margin: auto">
            <form className="frame p-0" method="post">
              <div className="frame__body p-0">
                <div className="row p-0 level fill-height">
                  <div className="col">
                    <div className="space xlarge"></div>
                    <div className="padded">
                      <h1 className="u-text-center u-font-alt">Contact Us</h1>
                      <div className="divider"></div>
                      <p className="u-text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="divider"></div>

                      <div className="form-group">
                        <label className="form-group-label">
                          <span className="icon">
                            <i className="fa-wrapper far fa-user"></i>
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-group-input"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-group-label">
                          <span className="icon">
                            <i className="fa-wrapper far fa-envelope"></i>
                          </span>
                        </label>
                        <input
                          type="email"
                          className="form-group-input"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="form-section section-inline">
                        <div className="section-body row">
                          <div className="form-group col-6 pl-0">
                            <label className="form-group-label">
                              <span className="icon">
                                <i className="fa-wrapper far fa-calendar"></i>
                              </span>
                            </label>
                            <input
                              type="date"
                              className="form-group-input"
                              placeholder="Enter your birthday (or not)"
                            />
                          </div>
                          <div className="form-group col-6 pr-0">
                            <label className="form-group-label">
                              <span className="icon">
                                <i className="fa-wrapper fas fa-list"></i>
                              </span>
                            </label>
                            <select
                              className="select form-group-input"
                              placeholder="Choose one"
                            >
                              <option>Bug Report</option>
                              <option>Feature Request</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <textarea placeholder="Tell us what's wrong"></textarea>

                      <div className="form-ext-control form-ext-checkbox">
                        <input
                          id="check1"
                          className="form-ext-input"
                          type="checkbox"
                        />
                        <label className="form-ext-label" htmlFor="check1">
                          Send me a copy.
                        </label>
                      </div>

                      <div className="space"></div>

                      <div className="btn-group u-pull-right">
                        <button className="btn-info">Send</button>
                      </div>
                    </div>
                    <div className="space xlarge"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContacterNous;
