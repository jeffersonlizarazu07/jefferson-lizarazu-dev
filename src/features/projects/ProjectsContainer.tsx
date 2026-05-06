/**
 * ProjectsContainer - CONTAINER (Smart Component)
 * 
 * Este componente SOLO maneja lógica:
 * - Consume el hook useGitHubRepos
 * - Maneja el estado
 * - Pasa datos a componentes presentacionales
 * 
 * NO renderiza UI compleja - eso lo hacen los hijos
 */
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import { HeaderSection } from "./HeaderSection";
import { ProjectsList } from "./ProjectsList";
import { FreelanceSection } from "./FreelanceSection";
import { config } from "@/config";

export const ProjectsContainer = () => {
  // Solo lógica aquí - consume hook
  const { 
    filteredRepos, 
    loading, 
    error, 
    technologies, 
    filter, 
    setFilter 
  } = useGitHubRepos(config.github.username);

  // Pasa datos a presentacionales via props
  return (
    <>
      <HeaderSection 
        technologies={technologies} 
        filter={filter} 
        setFilter={setFilter} 
      />
      
      <ProjectsList 
        projects={filteredRepos} 
        loading={loading} 
        error={error} 
      />
      
      <FreelanceSection />
    </>
  );
};