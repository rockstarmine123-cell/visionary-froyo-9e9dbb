export type Course = {
  id: string
  title: string
  tag: 'School' | 'Professional'
  category: string
  level: 'Beginner' | 'Advanced'
  mode: 'Live' | 'Recorded'
  subjects: string[]
  features: string[]
  price: number
  originalPrice?: number
  rating: number
  students: number
}

export const courses: Course[] = [
  {
    id: 'class-9-foundation',
    title: 'VidhyaPath Class 9 Foundation',
    tag: 'School',
    category: 'Class 9',
    level: 'Beginner',
    mode: 'Live',
    subjects: ['Mathematics', 'Science', 'English', 'Social Science'],
    features: ['Complete syllabus', 'Notes', 'Tests', 'Doubt support'],
    price: 2499,
    originalPrice: 3999,
    rating: 4.8,
    students: 8200,
  },
  {
    id: 'class-10-board-booster',
    title: 'VidhyaPath Class 10 Board Booster',
    tag: 'School',
    category: 'Class 10',
    level: 'Beginner',
    mode: 'Live',
    subjects: ['Mathematics', 'Science', 'Social Science', 'English'],
    features: ['Complete board preparation', 'PYQs', 'Mock tests', 'Revision material'],
    price: 2999,
    originalPrice: 4499,
    rating: 4.9,
    students: 11400,
  },
  {
    id: 'class-11-science',
    title: 'VidhyaPath Class 11 Science',
    tag: 'School',
    category: 'Class 11',
    level: 'Advanced',
    mode: 'Live',
    subjects: ['Physics', 'Chemistry', 'Mathematics/Biology'],
    features: ['Notes', 'Tests', 'PYQs', 'Doubt solving'],
    price: 3499,
    originalPrice: 4999,
    rating: 4.7,
    students: 6300,
  },
  {
    id: 'class-12-target',
    title: 'VidhyaPath Class 12 Target Batch',
    tag: 'School',
    category: 'Class 12',
    level: 'Advanced',
    mode: 'Live',
    subjects: ['Complete syllabus'],
    features: ['Board preparation', 'PYQs', 'Mock tests', 'Revision classes', 'Doubt support'],
    price: 3999,
    originalPrice: 5499,
    rating: 4.9,
    students: 9800,
  },
  {
    id: 'ai-data-science',
    title: 'AI & Data Science Career Track',
    tag: 'Professional',
    category: 'Competitive Exams',
    level: 'Advanced',
    mode: 'Recorded',
    subjects: ['Python', 'Statistics', 'Machine Learning'],
    features: ['Hands-on projects', 'Industry mentors', 'Certificate', 'Placement guidance'],
    price: 3999,
    originalPrice: 8999,
    rating: 4.8,
    students: 4100,
  },
  {
    id: 'python-programming',
    title: 'Python Programming Mastery',
    tag: 'Professional',
    category: 'College Students',
    level: 'Beginner',
    mode: 'Recorded',
    subjects: ['Python', 'DSA Basics'],
    features: ['Beginner friendly', 'Practice projects', 'Certificate'],
    price: 1999,
    originalPrice: 3999,
    rating: 4.7,
    students: 5600,
  },
  {
    id: 'communication-skills',
    title: 'Professional Communication Skills',
    tag: 'Professional',
    category: 'Working Professionals',
    level: 'Beginner',
    mode: 'Recorded',
    subjects: ['Business English', 'Public Speaking'],
    features: ['Real workplace scenarios', 'Live practice sessions', 'Certificate'],
    price: 1499,
    originalPrice: 2999,
    rating: 4.6,
    students: 3200,
  },
  {
    id: 'digital-skills',
    title: 'Digital & Career Skills for Professionals',
    tag: 'Professional',
    category: 'Corporate Learning',
    level: 'Beginner',
    mode: 'Recorded',
    subjects: ['Digital Tools', 'Career Growth'],
    features: ['Corporate upskilling', 'Self-paced modules', 'Certificate'],
    price: 1999,
    originalPrice: 3499,
    rating: 4.7,
    students: 2800,
  },
]

export const categories = [
  { title: 'Class 9', description: 'Build strong foundations', icon: 'BookOpen' },
  { title: 'Class 10', description: 'Board exam readiness', icon: 'GraduationCap' },
  { title: 'Class 11', description: 'Science & commerce streams', icon: 'FlaskConical' },
  { title: 'Class 12', description: 'Target board & competitive exams', icon: 'Trophy' },
  { title: 'Competitive Exams', description: 'Crack top entrance exams', icon: 'Target' },
  { title: 'College Students', description: 'Skill up beyond the classroom', icon: 'Landmark' },
  { title: 'Working Professionals', description: 'Grow your career', icon: 'Briefcase' },
  { title: 'Corporate Learning', description: 'Upskill your teams', icon: 'Building2' },
]

export const whyChooseUs = [
  { title: 'Expert Faculty', description: 'Learn from experienced educators and industry mentors.', icon: 'Users' },
  { title: 'Structured Courses', description: 'Step-by-step curriculum designed for real progress.', icon: 'ListChecks' },
  { title: 'AI-Powered Learning', description: 'Personalized help from VidhyaPath AI, anytime.', icon: 'Sparkles' },
  { title: 'Quality Notes', description: 'Concise, exam-ready notes for every subject.', icon: 'FileText' },
  { title: 'PYQ Practice', description: 'Practice with real previous year questions.', icon: 'ClipboardCheck' },
  { title: 'Doubt Support', description: 'Get your doubts resolved quickly by experts.', icon: 'MessageCircleQuestion' },
  { title: 'Progress Tracking', description: 'Visualize your accuracy, streaks, and growth.', icon: 'LineChart' },
  { title: 'Free Learning Resources', description: 'Quality education without financial barriers.', icon: 'Gift' },
]

export const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Class 12 Student',
    quote: 'VidhyaPath AI helped me revise Physics the night before my exam. The notes are so well structured — I finally understand concepts instead of memorizing them.',
    initials: 'AS',
  },
  {
    name: 'Rohit Verma',
    role: 'Class 10 Student',
    quote: 'The Board Booster batch felt like having a personal mentor. My mock test scores improved massively within two months.',
    initials: 'RV',
  },
  {
    name: 'Priya Nair',
    role: 'Working Professional',
    quote: 'I upskilled in Python and data science alongside my full-time job. The recorded sessions fit perfectly into my schedule.',
    initials: 'PN',
  },
  {
    name: 'Karan Mehta',
    role: 'College Student',
    quote: 'The doubt-solving support is incredibly fast. I never feel stuck for long, and the PYQ practice built my exam confidence.',
    initials: 'KM',
  },
]

export const stats = [
  { label: 'Students', value: '50K+' },
  { label: 'Courses', value: '500+' },
  { label: 'Study Materials', value: '10K+' },
  { label: 'AI Assistance', value: '24/7' },
]

export type Note = {
  id: string
  subject: string
  topic: string
  category: string
  className: string
  types: string[]
}

export const notes: Note[] = [
  { id: 'n1', subject: 'Physics', topic: 'Laws of Motion', category: 'Class 11 Notes', className: 'Class 11', types: ['Chapter Notes', 'Quick Revision', 'Important Formulas', 'Practice Questions'] },
  { id: 'n2', subject: 'Mathematics', topic: 'Quadratic Equations', category: 'Class 10 Notes', className: 'Class 10', types: ['Chapter Notes', 'Quick Revision', 'Practice Questions'] },
  { id: 'n3', subject: 'Chemistry', topic: 'Periodic Classification', category: 'Class 10 Notes', className: 'Class 10', types: ['Chapter Notes', 'Important Formulas'] },
  { id: 'n4', subject: 'Biology', topic: 'Cell Structure', category: 'Class 9 Notes', className: 'Class 9', types: ['Chapter Notes', 'Quick Revision'] },
  { id: 'n5', subject: 'Mathematics', topic: 'Integration Basics', category: 'Class 12 Notes', className: 'Class 12', types: ['Chapter Notes', 'Practice Questions'] },
  { id: 'n6', subject: 'Reasoning', topic: 'Logical Puzzles', category: 'Competitive Exam Notes', className: 'Competitive', types: ['Quick Revision', 'Practice Questions'] },
  { id: 'n7', subject: 'Python', topic: 'Functions & Loops', category: 'Programming Notes', className: 'Programming', types: ['Chapter Notes', 'Practice Questions'] },
  { id: 'n8', subject: 'Machine Learning', topic: 'Intro to Neural Networks', category: 'AI & Data Science', className: 'AI & DS', types: ['Chapter Notes', 'Quick Revision'] },
  { id: 'n9', subject: 'Communication', topic: 'Email Etiquette', category: 'Professional Skills', className: 'Professional', types: ['Quick Revision'] },
  { id: 'n10', subject: 'Physics', topic: 'Electromagnetic Induction', category: 'Class 12 Notes', className: 'Class 12', types: ['Chapter Notes', 'Important Formulas', 'Practice Questions'] },
  { id: 'n11', subject: 'English', topic: 'Grammar Essentials', category: 'Class 9 Notes', className: 'Class 9', types: ['Chapter Notes', 'Quick Revision'] },
  { id: 'n12', subject: 'Social Science', topic: 'Indian Constitution', category: 'Class 10 Notes', className: 'Class 10', types: ['Chapter Notes', 'Important Formulas'] },
]

export type PracticeQuestion = {
  id: string
  className: string
  subject: string
  chapter: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export const practiceQuestions: PracticeQuestion[] = [
  {
    id: 'q1',
    className: 'Class 10',
    subject: 'Mathematics',
    chapter: 'Quadratic Equations',
    difficulty: 'Medium',
    question: 'What are the roots of x² − 5x + 6 = 0?',
    options: ['2, 3', '1, 6', '-2, -3', '2, -3'],
    correctIndex: 0,
    explanation: 'Factoring gives (x−2)(x−3)=0, so x = 2 or x = 3.',
  },
  {
    id: 'q2',
    className: 'Class 11',
    subject: 'Physics',
    chapter: 'Laws of Motion',
    difficulty: 'Easy',
    question: "Newton's First Law is also known as the law of:",
    options: ['Acceleration', 'Inertia', 'Momentum', 'Gravitation'],
    correctIndex: 1,
    explanation: 'An object stays at rest or in uniform motion unless acted upon by a net force — this is inertia.',
  },
  {
    id: 'q3',
    className: 'Class 12',
    subject: 'Chemistry',
    chapter: 'Electrochemistry',
    difficulty: 'Hard',
    question: 'In a galvanic cell, oxidation occurs at the:',
    options: ['Cathode', 'Anode', 'Salt bridge', 'Electrolyte'],
    correctIndex: 1,
    explanation: 'Oxidation (loss of electrons) always occurs at the anode in any electrochemical cell.',
  },
  {
    id: 'q4',
    className: 'Class 9',
    subject: 'Biology',
    chapter: 'Cell Structure',
    difficulty: 'Easy',
    question: 'Which organelle is known as the powerhouse of the cell?',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi body'],
    correctIndex: 2,
    explanation: 'Mitochondria generate ATP through respiration, powering the cell.',
  },
]

export const faqs = [
  { question: 'How do I enroll in a batch?', answer: 'Go to Courses & Batches, pick your class or subject, and click "View Course" to see enrollment steps and complete your admission form.' },
  { question: 'How does VidhyaPath AI work?', answer: 'VidhyaPath AI is a 24/7 study assistant that can explain topics, solve problems, generate practice questions, and create revision plans based on what you ask.' },
  { question: 'How can I access notes?', answer: 'Visit the Notes & Study Material page, search or filter by class and subject, then open any resource card to read or download it.' },
  { question: 'Where can I find PYQs?', answer: 'The PYQs & Practice page has previous year questions, chapter-wise practice, and mock tests organized by class, subject, and difficulty.' },
  { question: 'How do I contact support?', answer: 'Use the Contact / Admission page or reach out directly at vidhyapath.support@edu.in.' },
  { question: 'How can I access free courses?', answer: 'Head to the Free Courses page and click "Start Learning" on any course — no payment or barriers required.' },
]

export const freeCourses = [
  { id: 'fc1', title: 'Introduction to AI', description: 'Understand the basics of artificial intelligence and its real-world applications.', icon: 'BrainCircuit' },
  { id: 'fc2', title: 'Python Basics', description: 'Start coding with Python — variables, loops, and functions explained simply.', icon: 'Code2' },
  { id: 'fc3', title: 'Digital Literacy', description: 'Build essential digital skills for the modern workplace.', icon: 'Laptop' },
  { id: 'fc4', title: 'Mathematics Foundation', description: 'Strengthen your core math concepts for school and competitive exams.', icon: 'Sigma' },
  { id: 'fc5', title: 'Physics Fundamentals', description: 'Grasp the core principles of motion, energy, and forces.', icon: 'Atom' },
  { id: 'fc6', title: 'Communication Skills', description: 'Improve your spoken and written communication for any setting.', icon: 'MessageSquare' },
  { id: 'fc7', title: 'Introduction to Data Science', description: 'Learn how data drives decisions across every industry.', icon: 'Database' },
  { id: 'fc8', title: 'Career & Interview Basics', description: 'Prepare confidently for interviews and early career decisions.', icon: 'Briefcase' },
]

export const doubtCategories = [
  { title: 'Mathematics', icon: 'Sigma' },
  { title: 'Physics', icon: 'Atom' },
  { title: 'Chemistry', icon: 'FlaskConical' },
  { title: 'Biology', icon: 'Dna' },
  { title: 'Computer Science', icon: 'Cpu' },
  { title: 'Programming', icon: 'Code2' },
  { title: 'AI & Data Science', icon: 'BrainCircuit' },
  { title: 'Career Guidance', icon: 'Compass' },
]

export const contactCategories = [
  { title: 'Admissions', description: 'Questions about enrolling in a batch or course.' },
  { title: 'Technical Support', description: 'Help with login, access, or platform issues.' },
  { title: 'Course Information', description: 'Details about syllabus, pricing, or schedules.' },
  { title: 'Doubt Support', description: 'Get connected with a subject expert.' },
  { title: 'Corporate Training', description: 'Custom upskilling programs for teams.' },
]

export const CONTACT = {
  admissionEmail: 'vidhyapath.admission@edu.in',
  supportEmail: 'vidhyapath.support@edu.in',
  mobile: '4839424329',
}
