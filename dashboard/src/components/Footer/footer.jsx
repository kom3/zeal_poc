import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer_wrpr">
      <div className="footer_upper">
        <div>© Portfolio.com, Inc. All rights reserved.</div>
        <div className="footer_links">
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="version_text">V 1.0.0</div>
      </div>
    </div>
  );
}
