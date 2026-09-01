export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  date?: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "uber-data-analytics",
    number: "01",
    title: "Uber Data Analytics Dashboard",
    category: "Data Analytics / Business Intelligence",
    description:
      "Developed an interactive Power BI dashboard to analyze Uber trip activity, revenue behavior, passenger metrics, time-based trends, and pickup-location patterns.",
    technologies: ["Power BI", "DAX", "Data Analysis", "Data Visualization"],
    highlights: [
      "Interactive Power BI analytics dashboard",
      "Time, revenue, and location intelligence",
      "Dynamic filtering and KPI reporting",
    ],
    image: "/images/uber_dashboard.jpg",
  },
  {
    id: "bru-cafe-recommender",
    number: "02",
    title: "Bru Café AI Menu Recommendation System",
    category: "Machine Learning / Recommendation System",
    description:
      "Built a content-based machine learning recommendation system that suggests similar menu items using textual menu features and normalized pricing information.",
    technologies: [
      "Python",
      "Scikit-learn",
      "TF-IDF",
      "Nearest Neighbors",
      "Cosine Similarity",
    ],
    highlights: [
      "141 records processed into 96 unique menu items",
      "TF-IDF + cosine similarity recommendation engine",
      "Top-5 personalized related-item recommendations",
    ],
    image: "/images/bru_cafe.jpg",
  },
  {
    id: "personal-portfolio",
    number: "03",
    title: "Personal Portfolio Website",
    category: "Web Development",
    date: "April 2026",
    description:
      "Designed and developed a personal portfolio website to showcase academic achievements, technical skills, projects, extracurricular activities, and career goals.",
    technologies: ["React", "TypeScript", "Vite", "Three.js", "GSAP", "CSS3"],
    highlights: [
      "Created a central showcase for technical and academic work.",
      "Built a responsive interface for presenting projects and skills.",
      "Designed the website to communicate a professional personal brand.",
    ],
    image: "/images/portfolio_preview.jpg",
  },
];
