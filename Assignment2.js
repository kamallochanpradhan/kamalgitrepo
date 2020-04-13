var projectList = {
    projects: [],
    displayProject: function() {
        console.log("Project List:");
        this.projects.forEach(project => {
            console.log("Project: ", project);
        });
    },
    addProject: function(id, name, description, status){
        //here we are using project id as array index to splify the logic. As project id can't be duplicate, I have used this approach
        this.projects[id] = {
            id: id,
            name: name,
            description: description,
            status:status
        };
        ++numberOfProject;
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

var numberOfTr = 0;
var numberOfProject = 0;

view = {
    onAddProject: function() {
        var projectId = document.getElementById('projectId').value;
        var projectName = document.getElementById('projectName').value;
        var projectDescription = document.getElementById('projectDescription').value;
        var projectStatus = document.getElementById('projectStatus').value;
        projectList.addProject(projectId, projectName, projectDescription, projectStatus);
    },
    displayProjectList: function() {
        if(projectList.projects.length !== 0){
            var tbody = document.querySelector('tbody#tbody')
            tbody.innerHTML = '';
            
            projectList.projects.forEach( (project) => {
                ++numberOfTr;
                var trBody = document.createElement('tr');
                var projectIdTd = document.createElement('td');
                var projectNameTd = document.createElement('td');
                var projectDescriptionTd = document.createElement('td');
                var projectStatusTd = document.createElement('td');
                projectIdTd.textContent = project.id;
                trBody.appendChild(projectIdTd);
                projectNameTd.textContent = project.name;
                trBody.appendChild(projectNameTd);
                projectDescriptionTd.textContent = project.description;
                trBody.appendChild(projectDescriptionTd);
                projectStatusTd.textContent = project.status;
                trBody.appendChild(projectStatusTd);
                tbody.appendChild(trBody);                
            })
        }
    },
    checkProjectCount: function() {
        if(numberOfTr === numberOfProject){
            document.getElementById('check').innerHTML = ' total number of < tr > tag and size of the list and is '+ numberOfTr;
        }else{
            document.getElementById('check').innerHTML = ' total number of < tr > tag not equal to size of the list';
        }
    }
}