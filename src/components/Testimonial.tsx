
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar?: string;
}

export function Testimonial({ content, author, role, avatar }: TestimonialProps) {
  const initials = author
    .split(' ')
    .map(name => name.charAt(0))
    .join('')
    .toUpperCase();

  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-1">
          <svg className="h-8 w-8 text-leaf mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
          </svg>
          <p className="text-gray-700 text-lg leading-relaxed">{content}</p>
        </div>
        <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-leaf-light text-white">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-gray-900">{author}</p>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
