var projectList = {
    projects: [],
    displayProject: function() {
        console.log("Project List:");
        this.projects.forEach(project => {
            console.log("Project: ", project);
        });
    },
    addProject: function(id, name, description, status){
       
        this.projects[id] = {
            id: id,
            name: name,
            description: description,
            status:status
        };
        this.displayProject();
    },
    findProject: function(id) {
        console.log("Project: ", this.projects[id]);
    },
    updateProjectStatus: function(id, status) {
        this.projects[id].status=status;
        this.displayProject();
    },
    getAllCompletedProject: function() {
        console.log("Completed project list: ");
        this.projects.forEach(project => {
            if (project.status === 'Completed') {
               console.log("Project: ", project);
            }
        });
    },
    deleteProject: function(id) {
        this.projects.splice(id, 1);
        this.displayProject();
    }
}