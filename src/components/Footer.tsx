const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 px-4">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Sumit Kumar Suman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
