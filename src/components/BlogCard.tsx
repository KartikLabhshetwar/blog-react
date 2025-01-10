import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <a href={post.url} className="block group">
      <div className="relative bg-white rounded-[20px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
        {/* Wave pattern background */}
        <div 
          style={{ 
            backgroundImage: 'url("/images/wave-pattern.svg")',
            backgroundRepeat: 'repeat',
            backgroundSize: '100px 100px'
          }}
          className="absolute inset-0 opacity-50 pointer-events-none" 
        />
        
        {/* Image */}
        <div className="relative aspect-[1.75/1] p-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-6 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        </div>
        
        {/* Content */}
        <div className="p-7">
          <h3 className="text-[22px] font-semibold text-[#1E293B] mb-3 line-clamp-2 leading-tight group-hover:text-[#4361EE] transition-colors">
            {post.title}
          </h3>
          
          <p className="text-[#64748B] mb-5 line-clamp-2 text-[15px] leading-relaxed">
            {post.description}
          </p>
          
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-sm text-[#94A3B8]">{post.date}</span>
              <span className="text-sm text-[#64748B] mt-0.5">By {post.author}</span>
            </div>
            <span className="text-[#4361EE] font-medium text-[15px] group-hover:underline">
              Read More
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCard; 