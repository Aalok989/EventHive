import { useRef } from "react";
import { Link } from "react-router-dom";
import Marketing from "../../assets/images/marketing.png";
import Research from "../../assets/images/research.png";
import Development from "../../assets/images/dev.png";
import Ui from "../../assets/images/uiux.png";
import Card from "../../components/Card";
import Testimonial from "../../components/TestimonialCard";
import Hero from "../../assets/images/pattern1.jpg";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  IoArrowBack,
  IoArrowDownCircleOutline,
  IoArrowForward,
  IoCreateOutline,
  IoNotificationsOutline,
  IoPeople,
  IoPeopleOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { MdManageHistory, MdOutlineFileDownload, MdOutlinePrivacyTip, MdRsvp } from "react-icons/md";
import { RiMouseLine, RiSteamLine } from "react-icons/ri";
import Hero2 from "../../assets/images/3187910.jpg";
import Security from "../../assets/images/security.jpg";
import Profile1 from "../../assets/images/profile1.svg";
import Profile2 from "../../assets/images/profile2.svg";
import Profile3 from "../../assets/images/profile3.svg";

const testimonialData = [
  {
    name: "Jagdeep Dalal",
    role: "Event Organizer",
    image: Profile1,
    text: "EventHive has revolutionized how I manage my events. The platform is intuitive and feature-rich.",
    icon: <MdRsvp />
  },
  {
    name: "Jai Singh",
    role: "Artist",
    image: Profile2,
    text: "As an artist, I love how easy it is to create and manage my exhibition events using EventHive.",
    icon: <RiSteamLine />
  },
  {
    name: "Mohit Jakhad",
    role: "Workshop Host",
    image: Profile3,
    text: "The attendee management features are fantastic. Makes tracking participants a breeze!",
    icon: <MdManageHistory />
  }
];

const data = [
  {
    title: "Event Creation Made Easy",
    description:
      "Seamlessly create and manage events with our intuitive event creation feature. Specify event details, such as date, time, location, and description, to provide a clear picture for your attendees. Customize event settings, add event images, and set ticket options effortlessly.",
    icon: <IoCreateOutline />,
  },
  {
    title: "Realtime Notifications",
    description:
      "Stay updated on event activities with our realtime notification feature. Receive notifications on event updates, attendee responses, and more. Never miss out on important event details with our notification feature.",
    icon: <IoNotificationsOutline />,
  },
  {
    title: "Seamless User Invitations",
    description:
      "Invite participants effortlessly by sending invitation links directly through our app. Share invitation links via email, messaging apps, or social media platforms. Ensure a smooth registration process and track attendee responses for effective event management.",
    icon: <IoTicketOutline />,
  },
  {
    title: "Flexible Event Privacy",
    description:
      "Take control over event visibility with our private and public event options. Host private gatherings with exclusive access for selected participants or organize public events to reach a wider audience. Customize privacy settings to suit the unique needs of each event.",
    icon: <MdOutlinePrivacyTip />,
  },
  {
    title: "Easy Attendee Management",
    description:
      "Keep track of attendees our comprehensive attendee management feature. Easily view and manage RSVPs, track attendance, and collect essential participant information. Scan QR Codes to check-in attendees and ensure a smooth event experience for all participants.",
    icon: <IoPeopleOutline />,
  },
  {
    title: "Download Attendee List",
    description:
      "Staying always connected is unsure in the age of internet. So EventHive lets the event owners download a list of attendees for each event with our attendee list download feature. Export attendee lists in XLSX format for easy access and management.",
    icon: <MdOutlineFileDownload />,
  }
];

function Landing() {
  const swiper = useSwiper();
  const swiperRef = useRef(null);
  const testimonialRef = useRef(null);

  const token = JSON.parse(localStorage.getItem("token"));

  return (
    <div className="flex-1 bg-white font-poppins select-none">
      <div className="bg-secondary" style={{ backgroundImage: `url(${Hero})`, backgroundBlendMode: 'overlay', backgroundSize: 'cover' }}>
        <section className="flex flex-col text-center w-full items-center py-8 lg:py-16 justify-center gap-8 md:gap-0 container min-h-[75vh] relative">
          <div
            className="flex flex-col gap-4 items-center justify-center z-10"
            style={{ flexBasis: "50%" }}
          >
            <h1 className=" text-2xl md:text-4xl lg:text-6xl text-slate-100 font-bold leading-relaxed lg:leading-normal drop-shadow-2xl">
            Showcase Your Vision
              <br />
              Craft Memorable Experiences
            </h1>
            <p className=" md:max-w-[90%] py-4 text-slate-400">
              RSVP and Management Made Effortless for Creators
            </p>
            <div className="inline-flex items-center gap-2">
              <Link
                to={token ? "/dashboard" : "/auth/signup"}
                className="bg-gradient-to-b shadow-xl focus:ring-accent from-accent to-accent/90 rounded-full p-4 text-white text-center"
              >
                {token ? "Go to Dashboard" : "Get Started"}
              </Link>
              <Link
                to={"/explore"}
                className="bg-gradient-to-r shadow-xl from-primary to-primary/90 rounded-full p-4 text-white text-center"
              >
                Explore Events
              </Link>
            </div>
          </div>
          <div className=" w-full relative"></div>
        </section>
      </div>
      <section className="flex flex-col-reverse  lg:flex-row w-full py-8 md:py-16 justify-between gap-8 md:gap-0 container">
        <div className="md:pt-16 " style={{ flexBasis: "50%" }}>
          <img className="w-full" src={Hero2} />
        </div>
        <div
          className="flex flex-col gap-4 items-start justify-evenly text-left py-8 lg:pl-16"
          style={{ flexBasis: "50%" }}
        >
          <div className="flex items-center gap-2">
            <hr className="w-20 h-1 bg-accent" />
            <p className="text-accent tracking-[1px] font-semibold">
              Unlock Your Potential
            </p>
          </div>
          <h1 className="text-3xl md:text-5xl text-primary font-semibold md:leading-normal">
            Unlock Your Creative Potential
          </h1>
          <hr className="w-full border border-neutral-200" />
          <p className="text-sm leading-[1.4rem] md:max-w-[90%] py-4 text-neutral-500 text-justify">
            Our app empowers individual contributors and artists like you to
            unleash your creativity and organize remarkable events. Whether
            you're planning a solo exhibition, a live performance, or a
            collaborative workshop, our platform provides the tools and features
            you need to make your events a resounding success.
          </p>
          <Link
            to={token ? "Go to Dashboard" : "/auth/signup"}
            className="bg-accent rounded-full p-4 text-white text-center"
          >
            {token ? "Go to Dashboard" : "Get Started"}
          </Link>
        </div>
      </section>
      <div className="bg-gradient-to-b from-secondary from-100% to-50% to-white pb-10">
        <section className="flex flex-col lg:flex-row w-full items-center py-8 lg:pt-16 lg:pb-0 justify-between gap-4 md:gap-0 container">
          <div className="flex flex-row gap-16">
            <div className="flex-[80%] space-y-4">
              <div className="flex items-center gap-2">
                <hr className="w-20 h-1 bg-accent" />
                <p className="text-accent tracking-[1px] font-semibold">Secure</p>
              </div>
              <h1 className="text-3xl md:text-5xl text-white font-semibold md:leading-normal">
                Seamless Event Planning and Organization
              </h1>
            </div>
          </div>
          <div className="flex-[80%] w-full text-sm leading-[1.4rem] md:max-w-[90%] py-4 text-slate-400 text-justify">
            Say goodbye to the hassles of event planning. Our user-friendly
            interface simplifies the process, allowing you to focus on your
            artistic endeavors. Create and manage events effortlessly, from
            setting dates and locations to providing event descriptions and
            ticketing options. Streamline your planning process and bring your
            vision to reality.
          </div>
        </section>
        <div className="flex flex-row gap-4 items-center justify-between container">
          <hr className="w-full  border border-neutral-200 opacity-30"></hr>
          <div className="inline-flex flex-[50%] gap-4 justify-end items-center">
            <button
              onClick={() => {
                swiperRef.current.swiper.slidePrev();
              }}
              className="text-white p-4 rounded-full outline outline-1 outline-white hover:bg-primary hover:outline-none transition-all"
            >
              <IoArrowBack />
            </button>
            <button
              onClick={() => {
                swiperRef.current.swiper.slideNext();
              }}
              className="text-white p-4 rounded-full bg-accent"
            >
              <IoArrowForward />
            </button>
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 50,
            },
            820: {
              slidesPerView: 2.5,
              spaceBetween: 50,
            },
            960: {
              slidesPerView: 2.8,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 80,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.title}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <section className="flex flex-col-reverse lg:flex-row-reverse w-full py-8 md:py-16 justify-between gap-8 md:gap-0 container">
        <div className="" style={{ flexBasis: "50%" }}>
          <img className="w-full" src={Security} />
        </div>
        <div
          className="flex flex-col gap-4 items-start justify-evenly text-left py-8 lg:pr-16"
          style={{ flexBasis: "50%" }}
        >
          <div className="flex items-center gap-2">
            <hr className="w-20 h-1 bg-accent" />
            <p className="text-accent tracking-[1px] font-semibold">
              Registrations Made Easy
            </p>
          </div>
          <h1 className="text-3xl md:text-5xl text-primary font-semibold md:leading-normal">
            Security and Reliability
          </h1>
          <hr className="w-full border border-neutral-200" />
          <p className="text-sm leading-[1.4rem] md:max-w-[90%] py-4 text-neutral-500 text-justify">
            Rest assured that your event data is safe and secure with our web
            app. We prioritize data protection and employ industry-standard
            security measures to safeguard your information. Our reliable
            infrastructure ensures that your event management process remains
            uninterrupted, allowing you to focus on what matters most – creating
            exceptional events.
          </p>
          <Link
            to={token ? "/dashboard" : "/auth/signup"}
            className="bg-gradient-to-r from-primary to-primary rounded-full px-6 p-4 text-white text-center"
          >
            {token ? 'Go to Dashboard' : 'Get Started'}
          </Link>
        </div>
      </section>

      {/* New Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Features</h2>
            <p className="text-gray-600">Discover what makes EventHive special</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img src={Marketing} alt="Marketing" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Marketing</h3>
              <p className="text-gray-600">Promote your events effectively</p>
              <IoArrowDownCircleOutline className="text-2xl text-accent mt-4" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img src={Research} alt="Research" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Research</h3>
              <p className="text-gray-600">Data-driven event insights</p>
              <RiMouseLine className="text-2xl text-accent mt-4" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img src={Development} alt="Development" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Continuous platform improvement</p>
              <IoPeople className="text-2xl text-accent mt-4" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img src={Ui} alt="UI/UX" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">UI/UX</h3>
              <p className="text-gray-600">Intuitive user experience</p>
              <RiSteamLine className="text-2xl text-accent mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-300">Real experiences from event organizers</p>
          </div>
          <Swiper
            ref={testimonialRef}
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="testimonial-swiper"
          >
            {testimonialData.map((item, index) => (
              <SwiperSlide key={item.name}>
                <Testimonial {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Landing;
