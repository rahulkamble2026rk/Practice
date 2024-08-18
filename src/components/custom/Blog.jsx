

// Import your images
import Image5 from '../../assets/Image5.jpg';
import Image6 from '../../assets/Image6.jpg';
import Image7 from '../../assets/Image7.jpg'; 
import Image8 from '../../assets/Image8.jpg';

const BlogNews = () => {
  const posts = [
    {
      title: 'Hope Amidst Hardship: Navigating Life in Gaza',
      description: 'Discover the resilience and spirit of Gaza\'s people as they navigate life amidst challenges. In this blog, explore tales of hope, perseverance, and community strength that illuminate the human experience in this dynamic region.',
      date: 'May 30, 2024',
      readTime: '5 min read',
      image: Image5, // Use Image5 for the featured post
      featured: true,
    },
    {
      title: 'Empowering Change: LesFundThem\'s Impact on Community Support',
      date: 'May 23, 2024',
      readTime: '4 min read',
      image: Image6, // Use Image6 for the second post
    },
    {
      title: 'How to Choose the Best Crowdfunding Website for Your Next Fundraiser',
      date: 'May 23, 2024',
      readTime: '8 min read',
      image: Image7, // Use Image7 for the third post
    },
    {
      title: 'Breaking Barriers: How LesFundThem Bridges Financial Gaps',
      date: 'January 24, 2022',
      readTime: '2 min read',
      image: Image8, // You can reuse Image5 or another image for the fourth post
    },
  ];

  return ( 
      
    
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Blog and News</h2>

      {/* Featured Post */}
      <div className="flex flex-col lg:flex-row lg:space-x-8 mb-8">
        <div className="lg:w-2/3">
          <img src={posts[0].image} alt={posts[0].title} className="rounded-lg mb-4 lg:mb-0" />
        </div>
        <div className="lg:w-1/3 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">{posts[0].title}</h3>
            <p className="text-gray-700 mb-4">{posts[0].description}</p>
            <p className="text-gray-500">{posts[0].date} &bull; {posts[0].readTime}</p>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">
              See More
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Other Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(1).map((post, index) => (
          <div key={index} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
              <p className="text-gray-500 text-sm">{post.date} &bull; {post.readTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogNews;
