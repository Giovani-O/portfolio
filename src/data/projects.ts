import type { Project } from "../types/project";
import webhookInspector from "../assets/projects/webhook-inspector.png";
import coffeeDelivery from "../assets/projects/coffee.png";
import taskManager from "../assets/projects/task-manager.png";
import orangeTasks from "../assets/projects/orange-tasks.png";
import clerkWebhook from "../assets/projects/clerk-webhook.gif";

export const projects: Project[] = [
	{
		titleKey: "clerk-webhook",
		tags: [
			"Webhooks",
			"Clerk",
			"svix",
			"Fastify",
			"SQLite",
			"React",
			"Vite",
			"Tanstack Router",
			"Tanstack Query",
			"AI",
		],
		image: clerkWebhook,
		imageAltKey: "clerk-webhook-alt",
		descriptionKey: "clerk-webhook-description",
		linkGithub: "https://github.com/Giovani-O/clerk-webhook",
	},
	{
		titleKey: "webhook-inspect",
		tags: [
			"Fastify",
			"Drizzle",
			"PostgreSQL",
			"React",
			"Vite",
			"Tanstack Router",
			"Tanstack Query",
			"Vitest",
			"Testes",
			"AI",
			"Vercel AI SDK",
		],
		image: webhookInspector,
		imageAltKey: "webhook-inspector-alt",
		descriptionKey: "webhook-inspector-description",
		linkGithub: "https://github.com/Giovani-O/webhook-inspect",
	},
	{
		titleKey: "coffee-delivery",
		tags: ["React", "TypeScript", "Styled Components", "Hooks", "Context API"],
		image: coffeeDelivery,
		imageAltKey: "coffee-delivery-alt",
		descriptionKey: "coffee-delivery-description",
		linkSite: "https://ignite-coffee-delivery-hu2qn3fv7-giovani-o.vercel.app/",
		linkGithub: "https://github.com/Giovani-O/ignite-coffee-delivery/tree/main",
	},
	{
		titleKey: "orange-branch-task-manager",
		tags: [".NET 8", "C#", "Entity Framework", "RabbitMQ", "xUnit", "MySQL"],
		image: taskManager,
		imageAltKey: "orange-branch-task-manager-alt",
		descriptionKey: "orange-branch-task-manager-description",
		linkGithub: "https://github.com/Giovani-O/OrangeBranchTaskManager",
	},
	{
		titleKey: "orange-tasks",
		tags: ["React", "TypeScript", "Tailwind", "Hooks", "Zustand", "Axios"],
		image: orangeTasks,
		imageAltKey: "orange-tasks-alt",
		descriptionKey: "orange-tasks-description",
		linkGithub: "https://github.com/Giovani-O/orange-branch-task-manager-react",
	},
];
