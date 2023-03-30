# microservices-app

This repository contains a microservices application written in Node.js with the user interface implemented in React. The application is comprised of several microservices, such as Posts, Comments, Query-Posts, Moderation, and Event-Bus. The Event-Bus microservice is a basic implementation of an event bus.

This application is designed to be deployed within a local Kubernetes cluster, where the microservices and React app server are deployed in separate pods. Cluster IPs are set up for each service, and an ingress controller with nginx-server is established to operate under the host "posts.com". Skaffold automatically manages the creation and updating of Kubernetes objects with the skaffold.yaml file.

## Getting Started

To run the microservices in a local Kubernetes cluster using Skaffold, follow these steps:

1. Clone the repository.
2. Install Docker and Kubernetes if you haven't already.
3. Install Skaffold by following the instructions on the Skaffold website.
4. In your terminal, navigate to the root directory of the project.
5. Run `skaffold dev` to build and deploy the microservices and React app server to your local Kubernetes cluster.
6. Wait for Skaffold to finish deploying the microservices.
7. Open your browser and go to http://posts.com to view the React app.

That's it! Once Skaffold finishes deploying the microservices, you should be able to use the Posts microservices application by visiting http://posts.com in your web browser.
