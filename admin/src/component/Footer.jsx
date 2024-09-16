import React from "react";

export const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Course Catalog</a>
                <a className="link link-hover">Study Plans</a>
                <a className="link link-hover">Quizzes & Assignments</a>
                <a className="link link-hover">Certification</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Press Kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of Use</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Cookie Policy</a>
            </nav>
            <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="email" placeholder="you@example.com" className="input input-bordered join-item" />
                        <button type="submit" className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};
