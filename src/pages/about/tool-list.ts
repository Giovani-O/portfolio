import dotnet from './../../assets/dotnet.svg'
import csharp from './../../assets/csharp.svg'
import entity from './../../assets/entity.svg'
import xunit from './../../assets/xunit.svg'
import rabbitmq from './../../assets/rabbitmq.svg'
import react from './../../assets/react.svg'
import vite from './../../assets/vite.svg'
import zustand from './../../assets/zustand.png'
import styledComponents from './../../assets/styled-components.png'
import vuejs from './../../assets/vue.svg'
import vuetify from './../../assets/vuetify.svg'
import mysql from './../../assets/mysql.svg'
import sqlserver from './../../assets/sqlserver.png'
import mongodb from './../../assets/mongo.svg'
import docker from './../../assets/docker.svg'
import nextjs from './../../assets/nextjs.png'
import nodejs from './../../assets/nodejs.png'
import aws from './../../assets/aws.png'
import git from './../../assets/git.png'
import github from './../../assets/github.webp'
import type { Tool } from '../../types/tools'

export const tools: Tool[] = [
  { title: 'React', image: react },
  { title: 'Next.js', image: nextjs },
  { title: 'Zustand', image: zustand },
  { title: 'Styled Components', image: styledComponents },
  { title: 'Node.js', image: nodejs },
  { title: 'AWS', image: aws },
  { title: 'Git', image: git },
  { title: 'GitHub', image: github },
  { title: '.NET 8', image: dotnet },
  { title: 'C#', image: csharp },
  { title: 'Entity Framework', image: entity },
  { title: 'xUnit', image: xunit },
  { title: 'RabbitMQ', image: rabbitmq },
  { title: 'Vite', image: vite },
  { title: 'Vue.js', image: vuejs },
  { title: 'Vuetify', image: vuetify },
  { title: 'MySQL', image: mysql },
  { title: 'SQL Server', image: sqlserver },
  { title: 'MongoDB', image: mongodb },
  { title: 'Docker', image: docker },
]
