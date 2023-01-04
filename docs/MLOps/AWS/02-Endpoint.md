

---
title: 02-Endpoint
article: false
---
### RESTful API

![jHkgox](https://testksj.oss-cn-beijing.aliyuncs.com/uPic/jHkgox.png)

An **interface** is a shared methodology through which you can interact with different objects in computing. An **Application Programming Interface (API)** is an interface between a user and a backend of an application. A **RESTful API** is an API that follows specific architectural boundaries, which is called the REST architectural style.

4 HTTP operations that are supported are:

- GET - Used to retrieve resources
- PUT - Used to update existing resources
- POST - Used to create a new resource
- DELETE - Used to delete a resource

### Endpoint

![Ayfe3b](https://testksj.oss-cn-beijing.aliyuncs.com/uPic/Ayfe3b.png)

In SageMaker, an **endpoint** is an interface to a model in production. The endpoint allows us to send user data to the model and receives predictions back from the model-based upon that user data.

SageMaker endpoints support the POST definition. Within this POST definition, you can provide a sample that you wish to be processed by your model. The POST request is asking for the ‘creation’ of inference.

The configuration for an endpoint includes:

- A model artifact stored in S3
- A configuration for how data is formatted
- Metadata (Version data/Tags)
- Specified computing resources. (Machine type and # of machines)

### Deploying on AWS

![XPhgWk](https://testksj.oss-cn-beijing.aliyuncs.com/uPic/XPhgWk.png)

**Production** is a general term used to describe the stage of ML development when your trained model is evaluated against new data. **Deployment** is the practice of configuring and establishing computing resources to serve your model on a wider scale.

**Multi-Availablity Zone (Multi-AZ) Deployment** is deploying the same endpoint on different machines that are geographically isolated from each other. This increases the **availability** of your endpoint.

**Autoscaling** is the configuration of additional machines to serve your endpoint to meet demand. Enabling autoscaling increases the **scalability** of your endpoint. This is also sometimes referred to as **elasticity**.

Availability and scalability are possible in AWS because model artifacts that are generated during training jobs are stored in S3. This simple, secure storage allows AWS to copy what is necessary across machines as needed.

### Endpoint Configuration Requirements

![804vfd](https://testksj.oss-cn-beijing.aliyuncs.com/uPic/804vfd.png)

### [[02-Endpoint Demo]]

### New Terms

- **Interface -** A shared methodology through which you can interact with different objects in computing.
- **API -** An interface between a user and a backend of an application.
- **RESTful API -** An API that utilizes the REST framework.
- **Endpoint** - A model in production in SageMaker
- **Production** - The stage when a trained model is evaluated against new data.
- **Deployment -** The practice of configuring and establishing computing resources to serve your model on a wider scale.
- **Multi-Availablity Zone (Multi-AZ) Deployment** - The deployment of the same resources on different machines that are geographically isolated from each other.
- **Availability -** Redundancy that ensures the availability of resources
- **Autoscaling** - The deployment of new resources to meet demand
- **Scalability/Elasticity** - The ability to acquire resources as you need them and release them as you don't.

### Additional Resources
