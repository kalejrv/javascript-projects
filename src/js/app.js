import projects from '../../projects/projectsData.js';

document.addEventListener('DOMContentLoaded', () => {
	showProjects();
	createFooter();
});

const showProjects = () => {
	projects.map(project => createCardProject(project));
};

const createCardProject = project => {
	const { title, description, coverUrl, viewUrl, codeUrl } = project;

	const cardProject = document.createElement('div');
	cardProject.innerHTML = `
		<div class="bg-white rounded-lg shadow-md">
			<img src="${coverUrl}" class="w-full object-cover rounded-lg" alt="${title}">

			<div class="p-4">
				<h2 class="text-2xl font-medium text-gray-800">${title}</h2>

				<p class="mt-4 mb-8 text-base font-normal text-gray-800">${description}</p>

				<div class="flex justify-center items-center gap-x-4">
					<a href="${viewUrl}" class="w-full md:w-1/2 p-2 flex justify-center items-center gap-x-1 border border-gray-800 rounded-md lg:hover:bg-gray-800 text-sm font-medium text-gray-800 lg:hover:text-white home-card-button" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[18px]">
							<path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/>
						</svg>
						
						View app
					</a>
					
					<a href="${codeUrl}" class="w-full md:w-1/2 p-2 flex justify-center items-center gap-x-1 border border-gray-800 rounded-md lg:hover:bg-gray-800 text-sm font-medium text-gray-800 lg:hover:text-white home-card-button" target="_blank">               
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-[18px]">
							<path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
						</svg>

						View code
					</a>
				</div>
			</div>
		</div>
	`;

	const mainProjects = document.querySelector('#main_projects');
	mainProjects.appendChild(cardProject);
};

const createFooter = () => {
	const date = new Date;
	const year = date.getFullYear();

	const footer = document.querySelector('#footer');
	footer.innerHTML = `
		<P class="text-base text-gray-800 text-center font-normal">
			Made by <a href="https://github.com/kalejrv" target="_blank"><span class="underline">Kevin Reyes</span></a> | ${year}
		</P>
	`;
};
