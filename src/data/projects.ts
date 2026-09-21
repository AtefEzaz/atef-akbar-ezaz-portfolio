import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'devstack-app',
    name: 'DevStack',
    summary: 'Build your own developer tech stack from a curated, filterable catalog.',
    description:
      'A responsive React app where developers browse a curated catalog of technologies, filter by category, and build a personal "stack" by adding and removing items — with live toast feedback for every action.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/AtefEzaz/DevStack-app',
    liveUrl: 'https://dev-stack-app-chi.vercel.app/',
    featured: true,
    status: 'shipped',
  },
  {
    slug: 'devconf2026',
    name: 'DevConf 2026',
    summary: 'A landing page built for a developer conference.',
    description:
      'A conference landing page covering schedule, speakers, and registration, built from scratch with semantic HTML, custom CSS, and vanilla JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/AtefEzaz/devconf2026',
    status: 'shipped',
  },
  {
    slug: 'laptop-price-predictor',
    name: 'Laptop Price Predictor',
    summary: 'Predicts a laptop\u2019s market price from its specifications.',
    description:
      'A machine learning app that takes in a laptop\u2019s specifications and predicts its price, trained and evaluated on a cleaned specs-and-price dataset.',
    tech: ['Python', 'Machine Learning'],
    repoUrl: 'https://github.com/AtefEzaz/laptop-price-predictor-python',
    status: 'shipped',
  },
  {
    slug: 'c-medical-assistant',
    name: 'Medical Assistant',
    summary: 'A console tool that helps generate patient prescriptions.',
    description:
      'A C program that walks a medical assistant through patient details and symptoms to help generate a prescription.',
    tech: ['C'],
    repoUrl: 'https://github.com/AtefEzaz/c-medical-assistant',
    status: 'shipped',
  },
  {
    slug: 'leaf-disease-classification',
    name: 'Potato & Tomato Leaf Disease Classification',
    summary: 'Detects crop disease from a leaf photo using CNNs.',
    description:
      'An image classifier built with CNN, ResNet50, and InceptionV3 that detects disease in potato and tomato leaves from a photo — aimed at early, low-cost crop diagnosis.',
    tech: ['Python', 'CNN', 'ResNet50'],
    status: 'research',
  },
  {
    slug: 'deepfake-detection',
    name: 'Deepfake Detection',
    summary: 'Classifies whether a photo or video is real or AI-generated.',
    description:
      'A deep learning model using CNN and EfficientNet to identify whether a given photo or video has been manipulated or generated.',
    tech: ['Python', 'CNN', 'EfficientNet'],
    status: 'research',
  },
]
