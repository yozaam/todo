oc new-app --docker-image=quay.io/yvakil/backend-todo -p VOLUME_CAPACITY=0.01Gi

oc expose svc/backend-todo

oc create configmap backend-url-config --from-literal=backend.url=`oc get route backend-todo -o jsonpath='{.status.ingress[0].host}'`

oc new-app openshift/nodejs~https://github.com/yozaam/todo/#review --context-dir=/frontend --build-env REACT_APP_BACKEND_URL=`oc get route backend-todo -o jsonpath='{.status.ingress[0].host}'` -e REACT_APP_BACKEND_URL=`oc get route backend-todo -o jsonpath='{.status.ingress[0].host}'` 

oc expose service/todo
