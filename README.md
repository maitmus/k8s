# Kubernetes

이 프로젝트는 k8s의 시험 레포지토리입니다.

Requirements: yarn, kubectl, minikube

## Create frontend/backend Image

```shell
eval $(minikube docker-env)
docker build -t frontend:<tag> ./frontend
docker build -t backend:<tag> ./backend
```

## Deploy

```shell
kubectl apply -f deploy
```

## Access in localhost

```shell
minikube service frontend-service
minikube service backend-service
```
