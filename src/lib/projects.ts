export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  status: "Live" | "Stable" | "Archived";
  tags: string[];
  period?: string;
  links: {
    label: string;
    href: string;
    icon?: string;
  }[];
  metrics?: {
    label: string;
    value: string;
  }[];
  techTags?: string[];
  caseStudy?: {
    hero: string;
    architectureDescription: string;
    architectureFeatures: string[];
    challenges: {
      title: string;
      description: string;
      code?: string;
    }[];
    results: {
      label: string;
      value: string;
    }[];
    color?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "micro-donation-platform",
    title: "Micro-Donation Platform",
    subtitle: "School Fees & Medical Bills",
    description:
      "A secure micro-donation platform enabling transparent contributions toward verified school fees and medical bills. Features role-based auth with JWT, RESTful microservices, and a responsive React dashboard for tracking donations and impact.",
    longDescription:
      "Developed a secure micro-donation platform enabling transparent contributions toward verified school fees and medical bills. Implemented role-based authentication and authorization using Spring Security with JWT for donors and administrators. Designed RESTful backend services using Spring Boot and Hibernate/JPA to manage users, campaigns, and transactions. Built a responsive React frontend with routing and dashboard visualizations to track donations and impact.",
    period: "Nov 2025 – Jan 2026",
    status: "Live",
    tags: ["React.js", "Spring Boot", "Microservices", "MySQL"],
    techTags: [
      "React.js",
      "Bootstrap",
      "Axios",
      "React Router",
      "Spring Boot",
      "Spring Security",
      "Hibernate/JPA",
      "Microservices",
      "MySQL",
      "JWT",
    ],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/abhaygarodi/MicroLift",
        icon: "code",
      },
      {
        label: "Live Demo",
        href: "#",
        icon: "open_in_new",
      },
    ],
    metrics: [
      { label: "Services", value: "4+" },
      { label: "Auth", value: "JWT" },
      { label: "Architecture", value: "Microservices" },
    ],
    caseStudy: {
      hero: "Featured Project",
      architectureDescription:
        "The platform utilizes a decentralized microservices approach to isolate domains such as user management, payment processing, and transaction logging. Spring Security with JWT handles stateless authentication, while Hibernate/JPA manages data persistence with MySQL.",
      architectureFeatures: [
        "API Gateway: Central entry point managing routing, rate limiting, and initial request validation across all microservices.",
        "Auth Service: Handles JWT issuance, validation, and role-based access control using Spring Security for donors and administrators.",
        "Campaign Service: Manages verified school fee and medical bill campaigns with full CRUD operations and status tracking via Spring Data JPA.",
      ],
      challenges: [
        {
          title: "Secure Authentication & Authorization",
          description:
            "Implementing robust role-based security without introducing unacceptable latency was critical. We engineered a stateless authentication model utilizing JSON Web Tokens (JWT) integrated deeply with Spring Security, supporting separate donor and admin roles.",
          code: `@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**").permitAll()
                .requestMatchers("/api/v1/donations/**").hasRole("USER")
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthFilter(), 
                UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
}`,
        },
      ],
      results: [
        { label: "Donation Tracking", value: "Real-time" },
        { label: "Role-based Access", value: "2 Roles" },
        { label: "Security Breaches", value: "Zero" },
      ],
    },
  },
  {
    slug: "ai-chat-app",
    title: "AI Document Chat App",
    subtitle: "PDF Q&A with Source Citations",
    description:
      "A FastAPI + Next.js application that lets users upload PDF documents and ask questions about their content. Answers are grounded in the document, cite specific source pages, and include short verbatim quotes per cited page for verification.",
    longDescription:
      "Built a full-stack AI-powered document chat application that enables users to upload PDF files and query their contents using natural language. The backend leverages FastAPI with LangChain for document processing, chunking, and retrieval-augmented generation (RAG). Each response is grounded in the actual document content, providing page-level citations and verbatim quotes so users can verify accuracy. The Next.js frontend provides a real-time chat interface with document upload, conversation history, and highlighted source references.",
    period: "Mar 2026 – May 2026",
    status: "Live",
    tags: ["FastAPI", "Next.js", "LangChain", "Python"],
    techTags: [
      "Python",
      "FastAPI",
      "LangChain",
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "RAG",
      "PDF Processing",
      "Vector Store",
    ],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/abhaygarodi/ai_chat_app",
        icon: "code",
      },
    ],
    metrics: [
      { label: "Stack", value: "Full-Stack" },
      { label: "AI Model", value: "RAG" },
      { label: "Citations", value: "Page-Level" },
    ],
    caseStudy: {
      hero: "AI-Powered Project",
      architectureDescription:
        "The application follows a RAG (Retrieval-Augmented Generation) architecture. PDFs are processed and chunked on upload, then stored as vector embeddings. When a user asks a question, relevant chunks are retrieved and fed as context to the LLM, which generates grounded answers with source page citations and verbatim quotes.",
      architectureFeatures: [
        "Document Pipeline: Handles PDF upload, text extraction, intelligent chunking, and vector embedding generation for efficient semantic search.",
        "RAG Engine: Retrieves the most relevant document chunks for each query using vector similarity, then constructs a grounded prompt with source context for the LLM.",
        "Citation System: Each response includes specific page numbers and short verbatim quotes from the source document, enabling users to verify answers against the original PDF.",
      ],
      challenges: [
        {
          title: "Document-Grounded Response Generation",
          description:
            "Ensuring AI responses stay faithful to the uploaded document content while remaining natural and useful. Implemented a RAG pipeline with strict grounding — every claim in the response must trace back to a specific page in the source PDF.",
          code: `from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

grounded_prompt = PromptTemplate(
    template="""Answer the question based ONLY on the
    following context from the uploaded document.
    
    For each claim, cite the source page number
    and include a short verbatim quote.
    
    Context: {context}
    Question: {question}
    
    Answer with citations:""",
    input_variables=["context", "question"]
)

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(
        search_kwargs={"k": 5}
    ),
    chain_type_kwargs={"prompt": grounded_prompt}
)`,
        },
      ],
      results: [
        { label: "Response Accuracy", value: "Grounded" },
        { label: "Source Citations", value: "Per-Page" },
        { label: "Upload Support", value: "Any PDF" },
      ],
    },
  },
  {
    slug: "tasktrack-mobile-app",
    title: "TaskTrack Mobile App",
    subtitle: "Cross-Platform Task Manager",
    description:
      "A cross-platform task management mobile application built with React Native and Expo. TaskTrack enables users to create, manage, and track tasks with location-based features, user profiles, and real-time updates across iOS and Android.",
    longDescription:
      "Designed and developed a cross-platform mobile application for task management using React Native and Expo. The app features task creation with categories, priority levels, and due dates. Integrated location-based services for geo-tagged tasks, user profile management, and real-time synchronization. Built with a focus on smooth native-like performance and intuitive UX across both iOS and Android platforms.",
    period: "Feb 2026 – Mar 2026",
    status: "Stable",
    tags: ["React Native", "Expo", "TypeScript", "Mobile"],
    techTags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Location Services",
      "AsyncStorage",
      "React Navigation",
    ],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/abhaygarodi/TaskTrackApp",
        icon: "code",
      },
    ],
    metrics: [
      { label: "Platform", value: "iOS + Android" },
      { label: "Framework", value: "Expo" },
      { label: "Features", value: "Location-Based" },
    ],
  },
  {
    slug: "smart-expense-tracker",
    title: "Smart Expense Tracker",
    description:
      "A user-friendly Expense Tracker built with React. Allows users to add new expenses, view them in a clean card layout, and delete entries. Features a modern UI with formatted dates, amount display, and smooth data-handling using React hooks.",
    period: "Nov 2025 – Dec 2025",
    status: "Stable",
    tags: ["React.js", "JavaScript", "CSS3", "HTML5"],
    techTags: ["HTML5", "CSS3", "JavaScript", "React.js", "React Hooks"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/abhaygarodi/Smart-Expense-Tracker-app",
        icon: "code",
      },
    ],
  },
  {
    slug: "music-player-webapp",
    title: "Music Player WebApp",
    subtitle: "Spotify Clone",
    description:
      "A responsive Spotify-inspired music player built with vanilla HTML, CSS, and JavaScript. Features play, pause, skip, and volume controls with a sleek dark UI. Fully responsive design ensures smooth experience across all devices.",
    period: "Aug 2025 – Sep 2025",
    status: "Stable",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    techTags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Audio API"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/abhaygarodi/Music-Player-WebApp",
        icon: "code",
      },
    ],
  },
  {
    slug: "clueso-io-clone",
    title: "Clueso.io Clone",
    subtitle: "Feedback & Insights Platform",
    description:
      "A full-stack clone of Clueso.io — a feedback and insights platform. Built with JavaScript, featuring user feedback collection, data visualization, and real-time insight generation for product teams.",
    period: "Dec 2025",
    status: "Archived",
    tags: ["JavaScript", "Full-Stack", "Node.js", "REST API"],
    techTags: ["JavaScript", "Node.js", "Express.js", "REST API", "HTML5", "CSS3"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/abhaygarodi/Clueso.io",
        icon: "code",
      },
    ],
  },
  {
    slug: "hotel-reservation-system",
    title: "Hotel Reservation System",
    description:
      "A console-based Hotel Reservation System using Core Java and OOP concepts for managing rooms and bookings. Features JDBC-MySQL integration for persistent data, a menu-driven interface with input validation, and full CRUD operations.",
    period: "Oct 2025 – Nov 2025",
    status: "Archived",
    tags: ["Core Java", "JDBC", "MySQL", "OOP"],
    techTags: ["Core Java", "OOP", "JDBC", "MySQL", "Eclipse IDE"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/abhaygarodi/Hotel-Reservation-System",
        icon: "code",
      },
    ],
  },
];