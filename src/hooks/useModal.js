export function useModal(){
    const handleCloseModal = (setter) => {
        setIsOpen(false)
      };
    const handleOpenModal = (setter) => {
        setIsOpen(true)
      };
    
    const handleClickedProject = (project) => {
        setCurrentProject(project)
      };
};