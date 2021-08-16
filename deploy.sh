# [work in progress]

# oc login -u xfmitf -p 4da8cae9204a4abdb1f3

# oc new-project yvakil-auto

oc new-app openshift/nodejs~https://github.com/yozaam/todo/#review --context-dir=/frontend 
# put this for dockerfile --strategy=docker

oc expose service/todo --port=3000
# oc port-forward `oc get pods | awk 'END{print $1}'` 3000:8080 &

