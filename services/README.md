# Kubernetes Service

A Service in Kubernetes is an abstraction which defines a logical set of Pods and a policy by which to access them. Services enable a loose coupling between dependent Pods. A Service is defined using YAML (preferred) or JSON, like all Kubernetes objects. The set of Pods targeted by a Service is usually determined by a `selector`.

## Why Use a Service?

A Service routes traffic across a set of Pods. Services are the abstraction that allow pods to die and replicate in Kubernetes without impacting your application. Discovery and routing among dependent Pods (such as the frontend and backend components in an application) is handled by Kubernetes Services.

## Service Types

Kubernetes ServiceTypes allow you to specify what kind of Service you want. The default is `ClusterIP`.

- `ClusterIP`: Exposes the Service on a cluster-internal IP. Choosing this value makes the Service only reachable from within the cluster.
- `NodePort`: Exposes the Service on each Node’s IP at a static port (the `NodePort`). A `ClusterIP` Service, to which the `NodePort` Service routes, is automatically created.
- `LoadBalancer`: Exposes the Service externally using a cloud provider’s load balancer.
- `ExternalName`: Maps the Service to the contents of the `externalName` field (e.g., `foo.bar.example.com`), by returning a `CNAME` record with its value.

For more details, please refer to the official [Kubernetes documentation](https://kubernetes.io/docs/concepts/services-networking/service/).

## Visualizer

![Service](../images/Services.png)
