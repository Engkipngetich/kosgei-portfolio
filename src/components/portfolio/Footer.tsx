const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Kipngetich Kosgei. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Expert in <span className="text-primary">System Administration</span>, (Windows & Linux servers,) ,<span className="text-primary">Networking</span> (LAN/WAN, Fibre splicing), and <span className="text-primary">Software Development</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
