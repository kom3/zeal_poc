import "./header.scss";

export default function Header() {
  return (
    <div>
      <div className="header_wrpr">
        <div className="logo">Portfolio</div>
        <div className="nav_links">
          <div>Dashborad</div>
          <div>Accounts</div>
          <div>Trade</div>
          <div>New to trade?</div>
        </div>
        <div
          className="user"
          style={{
            backgroundImage:
              'url("data:image/jpeg;base64,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")',
          }}
        ></div>
      </div>
    </div>
  );
}