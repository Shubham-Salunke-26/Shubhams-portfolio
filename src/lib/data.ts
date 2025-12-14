export const personalInfo = {
  name: "Shubham Salunke",
  location: "Maharashtra, India",
  email: "salunkeshubham801@gmail.com",
  github: "https://github.com/Shubham-Salunke-26",
  linkedin: "https://linkedin.com/in/shubham-salunke-devops/",
  profilePicture: "/profile.jpg",
  heroDescription:
    "Results-driven DevOps Engineer Enthusiast with expertise in CI/CD automation, infrastructure as code, and cloud technologies. Skilled in implementing secure, scalable solutions using AWS, Kubernetes, and container technologies.",
};

export const workExperience = [
  {
    company: "Tech Solutions Inc.",
    location: "Pune, India",
    position: "DevOps Engineer",
    period: "2023 - Present",
    achievements: [
      "Implemented CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 40%.",
      "Managed Kubernetes clusters on AWS EKS, ensuring high availability and scalability of microservices.",
      "Automated infrastructure provisioning using Terraform and Ansible, achieving 99.9% consistency across environments.",
      "Integrated Prometheus and Grafana for real-time monitoring, improving incident response time by 30%.",
    ],
  },
  {
    company: "Cloud Innovators",
    location: "Mumbai, India",
    position: "Junior DevOps Engineer",
    period: "2021 - 2023",
    achievements: [
      "Assisted in migrating legacy applications to Docker containers, improving portability and resource utilization.",
      "Configured and maintained AWS services including EC2, S3, and RDS.",
      "Scripted automation tasks using Python and Bash to streamline daily operations.",
      "Collaborated with development teams to troubleshoot and resolve build and deployment issues.",
    ],
  },
];

export const education = []; // Kept empty as requested to remove section
export const awards = []; // Kept empty as requested to remove section

export const skills = {
  programmingLanguages: [
    "Python",
    "Bash/Shell",
    "Go",
    "JavaScript",
  ],
  frontendDevelopment: [
    "HTML5",
    "CSS3",
    "React (Basic)",
  ],
  backendDevelopment: ["Node.js (Basic)", "Python (Flask/Django)"],
  databaseAndStorage: ["MySQL", "PostgreSQL", "MongoDB", "AWS S3", "AWS RDS"],
  cloudAndDevOps: [
    "AWS",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "Ansible",
    "GitHub Actions",
    "Git",
  ],
  toolsAndServices: [
    "Prometheus",
    "Grafana",
    "Loki",
    "Jira",
    "Slack",
    "Linux",
  ],
};

export const projects = [
  {
    title: "Automated CI/CD Pipeline",
    github: "https://github.com/Shubham-Salunke-26/Jenkins-CI-CD-Project-Todo-node-app",
    description: [
      "Designed and implemented a complete CI/CD pipeline using Jenkins and GitHub.",
      "Automated testing and deployment of a microservices application to a Kubernetes cluster.",
      "Integrated SonarQube for code quality analysis and security scanning.",
    ],
  },
  {
    title: "E-Commerce App",
    github: "https://github.com/Shubham-Salunke-26/E-Commerce-App",
    description: [
      "Provisioned a highly available Kubernetes cluster on AWS EKS using Terraform.",
      "Configured auto-scaling groups and load balancers for optimal performance.",
      "Implemented monitoring and logging using Prometheus, Grafana, and Loki.",
    ],
  },
  {
    title: "Infrastructure as Code with Ansible",
    github: "https://github.com/Shubham-Salunke-26/ansible-infrastructure",
    description: [
      "Automated the configuration management of 50+ servers using Ansible playbooks.",
      "Standardized server setups and reduced configuration drift.",
      "Implemented security hardening and patch management automation.",
    ],
  },
  {
    title: "Dockerized Microservices App",
    github: "https://github.com/Shubham-Salunke-26/docker-microservices",
    description: [
      "Containerized a multi-tier web application using Docker and Docker Compose.",
      "Optimized Docker images for size and security.",
      "Orchestrated containers for local development and testing environments.",
    ],
  },
];

export const blogs = [
  {
    title: "Implementing Zero-Downtime Deployments with Kubernetes",
    date: "November 15, 2024",
    excerpt: "Learn how to achieve zero-downtime deployments using Kubernetes rolling updates, readiness probes, and advanced deployment strategies like blue-green and canary deployments.",
    link: "#",
    tags: ["Kubernetes", "DevOps", "CI/CD"],
  },
  {
    title: "Infrastructure as Code: Terraform Best Practices",
    date: "October 28, 2024",
    excerpt: "Discover essential Terraform best practices including state management, module design, and workspace organization for scalable infrastructure automation.",
    link: "#",
    tags: ["Terraform", "IaC", "AWS"],
  },
  {
    title: "Monitoring Microservices with Prometheus and Grafana",
    date: "October 10, 2024",
    excerpt: "A comprehensive guide to setting up observability for microservices using Prometheus for metrics collection and Grafana for visualization and alerting.",
    link: "#",
    tags: ["Monitoring", "Prometheus", "Grafana"],
  },
  {
    title: "Securing CI/CD Pipelines: A DevSecOps Approach",
    date: "September 22, 2024",
    excerpt: "Explore how to integrate security into your CI/CD pipelines with automated security scanning, secret management, and compliance checks.",
    link: "#",
    tags: ["DevSecOps", "Security", "CI/CD"],
  },
  {
    title: "Docker Best Practices for Production Environments",
    date: "September 5, 2024",
    excerpt: "Optimize your Docker containers for production with multi-stage builds, security hardening, and efficient image management strategies.",
    link: "#",
    tags: ["Docker", "Containers", "Best Practices"],
  },
  {
    title: "GitOps: The Future of Kubernetes Deployment",
    date: "August 18, 2024",
    excerpt: "Understand GitOps principles and how tools like ArgoCD and Flux enable declarative, version-controlled Kubernetes deployments.",
    link: "#",
    tags: ["GitOps", "Kubernetes", "ArgoCD"],
  },
];
