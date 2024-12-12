# Kubernetes

이 프로젝트는 k8s의 시험 레포지토리입니다.

Requirements: yarn, kubectl, minikube

## Create frontend/backend Image

```shell
eval $(minikube docker-env)
docker build -t frontend:<tag> ./frontend
docker build -t backend:<tag> ./backend
```

명령어 실행 이후, deploy/frontend-deployment.yaml과 deploy/backend-deployment.yaml에서 image 항목의 태그를 상기한 태그와 같게 설정해주세요.

## Deploy

```shell
kubectl apply -f deploy
```

## Access in localhost

```shell
minikube service frontend-service
minikube service backend-service
```
