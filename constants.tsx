
import React from 'react';
import { JobPlatform } from './types';

const VagasLogo = () => (
  <svg viewBox="0 0 100 25" className="h-6 w-auto text-[#00529b]">
    <text x="0" y="20" fontSize="24" fontWeight="bold" fill="currentColor">VAGAS.com</text>
  </svg>
);

const IndeedLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto text-[#2557a7]" viewBox="0 0 1024 292.3"><path fill="currentColor" d="M843.4 249.7c-21.2 0-38.3-17.2-38.3-38.3v-138c0-21.2 17.2-38.3 38.3-38.3s38.3 17.2 38.3 38.3v138c0 21.1-17.1 38.3-38.3 38.3M999.7 73.4c-21.2 0-38.3 17.2-38.3 38.3v99.6c0 21.2 17.2 38.3 38.3 38.3s38.3-17.2 38.3-38.3V111.7c0-21.1-17.2-38.3-38.3-38.3m-431-38.3c-21.2 0-38.3 17.2-38.3 38.3v174.6c0 21.2 17.2 38.3 38.3 38.3s38.3-17.2 38.3-38.3V73.4c-.1-21.1-17.2-38.3-38.3-38.3m-76.6 212.9c0 21.2-17.2 38.3-38.3 38.3c-21.2 0-38.3-17.2-38.3-38.3V73.4c0-21.2 17.2-38.3 38.3-38.3s38.3 17.2 38.3 38.3v174.6zM324.2 249.7c-21.2 0-38.3-17.2-38.3-38.3V73.4c0-21.2 17.2-38.3 38.3-38.3s38.3 17.2 38.3 38.3v138c0 21.1-17.2 38.3-38.3 38.3m-76.6-176.3c-21.2 0-38.3 17.2-38.3 38.3v23c0 21.2 17.2 38.3 38.3 38.3s38.3-17.2 38.3-38.3v-23c0-21.1-17.2-38.3-38.3-38.3m352.2-36.8c-68.5 0-113.8 45.4-113.8 100.8c0 55.4 45.4 100.8 113.8 100.8s113.8-45.4 113.8-100.8c0-55.4-45.3-100.8-113.8-100.8m-451.2 0C40 36.6 0 79 0 137.9C0 196.8 40 256 100.3 256c68.5 0 112-46.3 112-118.1c0-71.9-52.6-101.3-112-101.3m100.3 182.6c-44.4 0-75.1-30.8-75.1-81.7c0-48.7 30.7-82.5 75.1-82.5c44.4 0 75.1 33.8 75.1 82.5c0 50.9-30.7 81.7-75.1 81.7m451.2-81.7c-44.4 0-75.1-27.1-75.1-64c0-36.8 30.7-64 75.1-64c44.4 0 75.1 27.1 75.1 64c0 36.9-30.7 64-75.1 64"/></svg>
);


export const JOB_PLATFORMS: JobPlatform[] = [
  {
    name: 'LinkedIn',
    logo: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#0A66C2" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>,
    searchUrlTemplate: 'https://www.linkedin.com/jobs/search/?keywords={query}&location=Tabo%C3%A3o%20da%20Serra%2C%20S%C3%A3o%20Paulo%2C%20Brasil'
  },
  {
    name: 'Indeed',
    logo: <IndeedLogo />,
    searchUrlTemplate: 'https://br.indeed.com/jobs?q={query}&l=Tabo%C3%A3o+da+Serra%2C+SP'
  },
  {
    name: 'Vagas.com',
    logo: <VagasLogo />,
    searchUrlTemplate: 'https://www.vagas.com.br/vagas-em-taboao-da-serra?q={query}'
  },
  {
    name: 'InfoJobs',
    logo: <img src="https://media.infojobs.com.br/static/infojobs/images/logos/infojobs.svg" alt="InfoJobs Logo" className="h-5" />,
    searchUrlTemplate: 'https://www.infojobs.com.br/vagas-de-emprego-{query}-em-taboao-da-serra,-sp.aspx'
  },
  {
    name: 'Gupy',
    logo: <img src="https://assets-global.website-files.com/62572417fb1ae475a89344e6/62572417fb1ae41e1a934571_gupy-logo.svg" alt="Gupy Logo" className="h-6" />,
    searchUrlTemplate: 'https://portal.gupy.io/job-search/term={query}'
  },
];

export const PREDEFINED_CATEGORIES = [
    "Vendedor",
    "Auxiliar Administrativo",
    "Logística",
    "Primeiro Emprego",
    "Estágio",
    "Limpeza"
];
