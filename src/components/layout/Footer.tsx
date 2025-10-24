import logo from "../../img/t-mart.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-[#f72c5b] bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Templamart logo" width={100} />
            </Link>
            <p className="text-sm text-muted-foreground">
              The marketplace for high-quality templates and digital assets for professionals.
            </p>
            <p>Corporate Add:</p>
            <p className="text-sm text-muted-foreground">
              B1/A, Ground Floor, Anand India Business Hub,
              Behind Shree Mahalaxmi Hospital,<br />
              Deepak Hospital Road, Mira Road East,<br />
              Thane – 401107.
            </p>
            <p className="text-sm text-muted-foreground">
              Phone: +91 91 369 14 963<br />
              Landline: +91 22 350 399 27<br />
              Email: info@tmart.com
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-sm text-muted-foreground hover:text-foreground">
                  Browse Templates
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              {/* <li>
                <Link to="/become-seller" className="text-sm text-muted-foreground hover:text-foreground">
                  Become a Seller
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/website-templates" className="text-sm text-muted-foreground hover:text-foreground">
                  Website Templates
                </Link>
              </li>
              <li>
                <Link to="/category/ecommerce-templates" className="text-sm text-muted-foreground hover:text-foreground">
                  Ecommerce Templates
                </Link>
              </li>
              <li>
                <Link to="/category/cms-templates" className="text-sm text-muted-foreground hover:text-foreground">
                  CMS Templates
                </Link>
              </li>
              <li>
                <Link to="/category/business-assets" className="text-sm text-muted-foreground hover:text-foreground">
                  Business Assets
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">License & User Terms</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-sm text-muted-foreground hover:text-foreground">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/license" className="text-sm text-muted-foreground hover:text-foreground">
                  License Information
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
            <p>Regd. Add:</p>
            <p className="text-sm text-muted-foreground">
              SH N B1/A, H N 01, Ground, Mahavir Nagar,
              Deepak Hos, Mira Road,<br />
              Thane, Maharashtra- 401107
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()}. All rights reserved. Paramvasu Technologies Pvt. Ltd. Distributed by <a href="https://templamart.com/" className="text-[#F72C5B]" target="_blank">Templamart.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
