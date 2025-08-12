// === DATA ===
const courses = [
  { id: 'c1', title: 'Beginner Driving — Intensive', level:'Beginner', durationDays:28, price:4999, rating:4.8, students:1200, desc:'20 practical hours + 5 theory sessions. Personal instructor.' , tags:['city','manual'] , image:'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0141c2d0d4e43a5d0c2f6fda6df6b6e3'},
  { id: 'c2', title: 'Advanced Road Skills', level:'Advanced', durationDays:14, price:3499, rating:4.7, students:560, desc:'Highway driving, night sessions, defensive techniques.' , tags:['highway','automatic'], image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5c8bd3a7b1c7d2b9b8a1c3b2f11c9fea'},
  { id: 'c3', title: 'License Test Prep', level:'Intermediate', durationDays:7, price:1999, rating:4.9, students:2000, desc:'Mock tests, paperwork help, test-day simulation.' , tags:['test','prep'], image:'https://images.unsplash.com/photo-1517705008121-6a1f1a5b3ab7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=06b85d6b9a5f63a3c3e1a6c7bd4d9a10'},
  { id: 'c4', title: 'Two-Wheeler Basics', level:'Beginner', durationDays:10, price:1499, rating:4.6, students:740, desc:'Balance, braking, and safe riding basics.' , tags:['two-wheeler'], image:'https://images.unsplash.com/photo-1541233349642-6e425fe6190e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=60d6d6f29d3c4d6e8d8f6d7e2c3b7f3b'},
  { id: 'c5', title: 'Defensive Driving Workshop', level:'Advanced', durationDays:2, price:899, rating:4.5, students:430, desc:'Short intense workshop about collision avoidance and emergency handling.' , tags:['workshop'], image:'https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=521a0e6d30f6eb0e2b5b8b7f1c1a2a3b'},
];

const videos = [
  { id:'v1', title:'Clutch Control Basics', src:'https://www.youtube.com/embed/x7X9w_GIm1s' },
  { id:'v2', title:'Defensive Driving Tips', src:'https://www.youtube.com/embed/Jb8D8XYg1-U' },
  { id:'v3', title:'Mock Test Walkthrough', src:'https://www.youtube.com/embed/7cYgkY-7cEE' },
];

const instructors = [
  { name:'Ramesh Kumar', bio:'10+ years trainer, calm & patient.', image:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=1d2a9c2b3f4a6b7c8d9e0f1a2b3c4d5e' },
  { name:'Sunita Verma', bio:'Expert in city driving & test prep.', image:'https://images.unsplash.com/photo-1545996124-7c1d9b9a1f6f?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b6d5e4c2f1a0b9c8d7e6f5a4b3c2d1e' },
  { name:'Ajay Singh', bio:'Defensive driving specialist.', image:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d' },
  { name:'Pooja Mehta', bio:'Two-wheeler instructor & safety coach.', image:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b' },
];

const reviews = [
  { name:'Rahul S.', rating:5, text:'Superb coaching — I passed on my first try!' },
  { name:'Anita P.', rating:5, text:'Patient instructors and good vehicles.' },
  { name:'Vikram J.', rating:4, text:'Great value for money and flexible slots.' },
];

// Utility functions
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
function formatPrice(n){ return '₹' + n.toLocaleString('en-IN'); }

// === REST OF JS ===
// (Insert the exact rendering, filtering, animation, and modal logic from your original script here)
