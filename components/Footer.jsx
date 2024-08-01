import Socials from "./Socials";

function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container m-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles={"flex gap-x-6 mx-auto xl:mx-0 mb-4"}
            iconStyles={
              "text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
            }
          />
          <div className="text-muted-foreground">
            <p>Made with ❤️ by me with Rayan Davis.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
