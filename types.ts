
export interface PostIdea {
  platform: string;
  topic: string;
  caption: string;
  hashtags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  specialty: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
