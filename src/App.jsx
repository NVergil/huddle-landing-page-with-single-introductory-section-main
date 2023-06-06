import Footer from "./components/Footer";
import Svgs from "./components/Svgs";

const App = () => {
  return (
    <>
      <main>
        <section className="flex flex-col items-center md:p-8 p-[1.8rem] max-w-[1350px]">
          <picture className="self-start">
            <img className="md:w-[200px] w-[140px] md:mb-[5.5rem] mb-[3.5rem]" src="/logo.svg" alt="logo" />
          </picture>
          <div className="flex lg:flex-row flex-col items-center">
            <picture className="max-w-[750px] md:min-w-[450px] w-full">
              <img
                className="lg:mr-[2rem] mr-0"
                src="/illustration-mockups.svg"
                alt="mockups"
              />
            </picture>
            <div className="max-w-[530px] mx-auto w-full flex flex-col self-start lg:pl-[1.4rem] pl-0 md:py-[2.65rem] py-[4rem] md:text-left text-center">
              <h1 className="xl:text-[2.5rem] md:text-[2rem] text-[1.5rem] font-poppins font-semibold text-white">
                Build The Community Your Fans Will Love
              </h1>
              <p className="text-gray-200 font-open-sans font-normal lg:text-[1.1rem] text-[15px] mt-[1.1rem] leading-[1.58]">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <button className="bg-white self-start md:py-[.875rem] py-[.650rem] md:px-[4rem] px-[4.5rem] md:mx-0 mx-auto rounded-full shadow-button font-poppins md:text-[18px] text-[13px] text-[var(--violet)] mt-[1.5rem] active:bg-[var(--soft-magenta)] active:text-white transition-all duration-75">
                Register
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-4 md:self-end mt-[1.25rem]">
            <Svgs />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
