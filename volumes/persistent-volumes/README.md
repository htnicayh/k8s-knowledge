# Kubernetes Persistent Volume (PV) Resource

A **Persistent Volume (PV)** in Kubernetes is a cluster-wide storage resource that provides persistent storage for Pods. Unlike `emptyDir` or `hostPath`, a PV exists independently of any specific Pod and allows data to persist even after the Pod is deleted.

## Features of Persistent Volumes

- Independent of Pod lifecycle.
- Supports multiple storage backends (NFS, AWS EBS, GCE PD, Azure Disk, etc.).
- Managed by the Kubernetes Storage API.
- Can be dynamically provisioned via **Persistent Volume Claims (PVCs).**

## Use Cases

- **Database Storage**: Store persistent databases like MySQL, PostgreSQL, or MongoDB.
- **Log Retention**: Keep application logs across restarts.
- **Shared Data Storage**: Provide shared file storage for multiple Pods.
- **Backup and Restore**: Retain application data across deployments.

## Example Usage

To use a **Persistent Volume**, you need to define both a `PersistentVolume` (PV) and a `PersistentVolumeClaim` (PVC) that binds to the PV.

### YAML Configuration

### Persistent Volume (PV)

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: k8s-persistent-volume
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: manual
  hostPath:
    path: '/mnt/data'
```

### Persistent Volume Claim

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: k8s-persistent-volume-claim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi
  storageClassName: manual
```

## Visualizer

<div align="center">

| Assumption                                                 |
| ---------------------------------------------------------- |
| ![Assumption](../images/persistent-volumes/assumption.png) |

| Architecture                                                   |
| -------------------------------------------------------------- |
| ![Architecture](../images/persistent-volumes/architecture.png) |

| Workflows                                                |
| -------------------------------------------------------- |
| ![Workflows](../images/persistent-volumes/workflows.png) |

</div>
