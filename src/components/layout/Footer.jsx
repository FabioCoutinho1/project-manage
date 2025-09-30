const Footer = () => {
  const data = new Date();

  return (
    <footer className="w-full bg-purple-900 text-white text-center p-4">
      <p>
        <span>Project Manager</span> &copy; {data.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
