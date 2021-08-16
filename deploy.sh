# oc login -u xfmitf -p 4da8cae9204a4abdb1f3

# oc new-project yvakil-auto

# backend image from quay
oc new-app --docker-image=quay.io/yvakil/backend-todo -p VOLUME_CAPACITY=0.001Gi

oc expose svc/backend-todo

# persistent volume creation and claim
oc create -f backend/pv.yaml 
oc create -f backend/pvc.yaml

oc set volume deployment/backend-todo --add --name=yvakil-pvc --type=persistentVolumeClaim --claim-name=yvakil-pv-claim --mount-path=/public 
# no need of this just pass the route url / host directly to env of frontend
# oc create configmap backend-url-config --from-literal=backend.url=`oc get route backend-todo -o jsonpath='{.status.ingress[0].host}'`

# FRONTEND commands BELOW THIS line

# [work in progress]

oc new-app openshift/nodejs~https://github.com/yozaam/todo/#review --context-dir=/frontend --build-env REACT_APP_BACKEND_URL=`oc get route backend-todo -o jsonpath='{.status.ingress[0].host}'` -e REACT_APP_BACKEND_URL=`oc get route backend-todo -o jsonpath='{.status.ingress[0].host}'` 
# put this for dockerfile --strategy=docker

oc expose service/todo
# oc port-forward `oc get pods | awk 'END{print $1}'` 3000:8080 &

