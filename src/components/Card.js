function Card({ title, subtitle }) {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "5px 6px 5px 0px #c9c5c5",
        padding: "15px",
        borderRadius: "10px",
        width: "250px",
        marginBottom: "15px",
      }}
    >
      <p
        style={{
          color: "#003986",
          fontSize: "21px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        {title} <span style={{ fontSize:'26px',fontWeight:'700' }}>&gt;</span>
      </p>
      <p
        style={{
          color: "#FFE901",
          fontSize: "18px",
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default Card;
