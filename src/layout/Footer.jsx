const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content background-gray">
            <div className="flex w-full font-bold text-2xl font-display gap-3 items-center text-white">
                <i className="fal fa-car text-2xl" />
                KARKABAR
            </div>
            <div className="text-white">
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div className="text-white">
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div className="text-white">
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered input-sm w-full pr-16" />
                        <button className="btn btn-primary btn-sm absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer