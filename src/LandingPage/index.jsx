import  { useState, useEffect } from 'react';
import Header from '../Navbar/index';
import Image1 from '../assets/Image1.jpg';
import Image2 from '../assets/Image2.jpg';
import Image3 from '../assets/Image3.jpg';

// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Card, CardHeader, CardTitle, CardFooter, CardContent } from '@/components/ui/card';
import Footer from '../Footer/index';

const slides = [
  {
    image: Image1,
    title: "Children’s Hope Fund",
    description: "$123,456 raised",
    donations: "1.8K donations",
    progress: "80%", // Progress bar width
  },
  {
    image: Image2,
    title: "Disaster Relief Fund",
    description: "$98,765 raised",
    donations: "2K donations",
    progress: "70%", // Progress bar width
  },
  {
    image: Image3,
    title: "Senior Care Fund",
    description: "$45,000 raised",
    donations: "900 donations",
    progress: "50%", // Progress bar width
  }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextClick, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      {/* Fixed Header */} 
      
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <div className="pt-20">
        {/* Add padding to avoid content being hidden behind the header */}
        
        <div className="relative h-[100vh] w-full flex items-center justify-between px-8 bg-cover bg-center" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
          {/* Left Side: Text Content */}
          <div className="relative z-10 text-white max-w-lg">
            <h1 className="text-5xl font-bold leading-tight">
              Unity transforms challenges into triumphs.
            </h1>
            <p className="my-4 text-lg">
              We are all different, which is great because we are all unique. Without diversity, life would be very boring. We are all different, which is great because we are all unique. Without diversity, life would be very boring.
            </p>
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold">
              EXPLORE
            </button>
          </div>

          {/* Right Side: Dynamic Donation Card */}
          <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg max-w-xs text-black">
            <h2 className="text-xl font-bold mb-4">{slides[currentSlide].title}</h2>
            <p className="text-lg mb-2">{slides[currentSlide].description}</p>
            <p className="text-sm text-gray-600 mb-4">{slides[currentSlide].donations}</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: slides[currentSlide].progress }}></div>
            </div>
            <button className="text-yellow-500 font-bold">→</button>
          </div>

          {/* Left Arrow */}
          <button onClick={handlePrevClick} className="absolute left-4 z-20 text-white bg-gray-800 bg-opacity-50 p-3 rounded-full focus:outline-none">
            &#8592;
          </button>

          {/* Right Arrow */}
          <button onClick={handleNextClick} className="absolute right-4 z-20 text-white bg-gray-800 bg-opacity-50 p-3 rounded-full focus:outline-none">
            &#8594;
          </button>
        </div>

        {/* Rest of your content 
        <section className="w-full shadow-lg">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="heading-container mt-5">
                  <h1 className="heading">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      <span> Our Work </span>
                    </h2>
                  </h1>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the impact we are making in our local and global communities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-4 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Providing access to quality education and learning opportunities for underserved communities.
                    </p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
              <div className="grid gap-4 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Card>
                  <CardHeader>
                    <CardTitle>Health</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Improving healthcare access and promoting well-being in marginalized populations.
                    </p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
              <div className="grid gap-4 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Card>
                  <CardHeader>
                    <CardTitle>Sustainability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Driving sustainable development and environmental conservation initiatives.
                    </p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
              <div className="grid gap-4 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Card>
                  <CardHeader>
                    <CardTitle>Advocacy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Amplifying the voices of the underrepresented and advocating for social justice.
                    </p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
              <div className="grid gap-4 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Card>
                  <CardHeader>
                    <CardTitle>Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Fostering strong, resilient communities and empowering local leaders.
                    </p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
              <div className="grid gap-4 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Card>
                  <CardHeader>
                    <CardTitle>Empowerment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Providing resources and opportunities to help individuals and communities thrive.
                    </p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="heading-container">
                  <h1 className="heading">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      <span> Get Involved </span>
                    </h2>
                  </h1>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  There are many ways you can support our mission and make a difference in the lives of those we serve.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Donate</h3>
                <p className="text-lg text-muted-foreground">
                  Your financial contributions help us continue our important work.
                </p>
                <Link to="/donate">
                  <Button>Donate Now</Button>
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Volunteer</h3>
                <p className="text-lg text-muted-foreground">
                  Join our team of dedicated volunteers and make a hands-on impact.
                </p>
                <Link to="/volunteer">
                  <Button>Volunteer</Button>
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Partner</h3>
                <p className="text-lg text-muted-foreground">
                  Collaborate with us to amplify our impact and create lasting change.
                </p>
                <Link to="/partners">
                  <Button>Our Partners</Button>
                </Link>
              </div>
            </div>
          </div>
        </section> */}

  <Footer />

      </div>
    </div>
  );
}

export default Home;
